using Core.Domains.Users.Repositories;
using FluentValidation;

namespace Core.Domains.Users.Validators;

public class UserValidator : AbstractValidator<User>
{
    public UserValidator(IUserRepository userRepository)
    {
        RuleFor(x => x.Email)
            .NotEmpty().WithMessage("Please specify a Email")
            .EmailAddress().WithMessage("A valid email address is required")
            .Must(x => !userRepository.ContainsByEmail(x)).WithMessage("Already in use");
    }
}