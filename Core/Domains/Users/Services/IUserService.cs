using Core.Domains.Posts;

namespace Core.Domains.Users.Services;

public interface IUserService
{
    Task<User> GetById(string id, CancellationToken cancellationToken);
    Task<bool> CanLogin(string email, string password, CancellationToken cancellationToken);
    Task<User> GetByEmail(string email, CancellationToken cancellationToken);
    Task<IEnumerable<User>> GetAll(CancellationToken cancellationToken);
    Task<IEnumerable<Post>> GetAllUserPosts(string userId, CancellationToken cancellationToken);
    Task Create(User user, CancellationToken cancellationToken);
    Task Update(User user, CancellationToken cancellationToken);
    Task Delete(string userId, CancellationToken cancellationToken);
}