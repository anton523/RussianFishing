using Core.Domains.Posts;
using Core.Domains.Users.Repositories;
using FluentValidation;
using FluentValidation.Results;
using BC = BCrypt.Net.BCrypt;

namespace Core.Domains.Users.Services;

public class UserService : IUserService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IUserRepository _userRepository;
    private readonly IValidator<User> _userValidator;

    public UserService(IUserRepository userRepository, IUnitOfWork unitOfWork, IValidator<User> userValidator)
    {
        _userRepository = userRepository;
        _unitOfWork = unitOfWork;
        _userValidator = userValidator;
    }

    public async Task<User> GetById(string id, CancellationToken cancellationToken)
    {
        return await _userRepository.GetById(id, cancellationToken);
    }

    public async Task<bool> CanLogin(string email, string password, CancellationToken cancellationToken)
    {
        var user = await GetByEmail(email, cancellationToken);
        return BC.Verify(password, user.Password);
    }

    public async Task<User> GetByEmail(string email, CancellationToken cancellationToken)
    {
        return await _userRepository.GetByEmail(email, cancellationToken);
    }

    public async Task<IEnumerable<User>> GetAll(CancellationToken cancellationToken)
    {
        return await _userRepository.GetAll(cancellationToken);
    }

    public async Task<IEnumerable<Post>> GetAllUserPosts(string userId, CancellationToken cancellationToken)
    {
        return await _userRepository.GetAllUserPosts(userId, cancellationToken);
    }

    public async Task Create(User user, CancellationToken cancellationToken)
    {
        await _userValidator.ValidateAndThrowAsync(user, cancellationToken);
        
        user.Login = user.Email.Split('@')[0];;
        user.Password = BC.HashPassword(user.Password);
        user.Description = "Всем привет! Я новенький.";

        await _userRepository.Create(user, cancellationToken);
        await _unitOfWork.SaveChange();
    }

    public async Task Delete(string id, CancellationToken cancellationToken)
    {
        await _userRepository.Delete(id, cancellationToken);
        await _unitOfWork.SaveChange();
    }

    public async Task Update(User user, CancellationToken cancellationToken)
    {
        var currentUser = await _userRepository.GetById(user.Id, cancellationToken);
        
        var changeUser = new User
        {
            Id = user.Id,
            Login = string.IsNullOrEmpty(user.Login) ? currentUser.Login : user.Login,
            Email = string.IsNullOrEmpty(user.Email) ? currentUser.Email : user.Email,
            AvatarUri = string.IsNullOrEmpty(user.AvatarUri) ? currentUser.AvatarUri : user.AvatarUri,
            Description = string.IsNullOrEmpty(user.Description) ? currentUser.Description : user.Description
        };
        
        var resultValidate = await _userValidator.ValidateAsync(changeUser, cancellationToken);

        if (resultValidate.IsValid)
        {
            await _userRepository.Update(changeUser, cancellationToken);
            await _unitOfWork.SaveChange();
            return;
        }

        if (resultValidate.Errors.Count == 1)
        {
            var error = resultValidate.Errors[0];
            if (error.PropertyName == "Email" && error.ErrorMessage == "Already in use")
            {
                if (changeUser.Email == currentUser.Email)
                {
                    await _userRepository.Update(changeUser, cancellationToken);
                    await _unitOfWork.SaveChange();
                    return;
                }
            }
        }

        throw new ValidationException("Errors", resultValidate.Errors);
    }
}