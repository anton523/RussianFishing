using Core.Domains.Fishes.Services;
using Core.Domains.Posts.Services;
using Core.Domains.Users;
using Core.Domains.Users.Services;
using Core.Domains.Users.Validators;
using FluentValidation;
using Microsoft.Extensions.DependencyInjection;

namespace Core;

public static class Bootstrap
{
    public static IServiceCollection AddCore(this IServiceCollection services)
    {
        services.AddScoped<IValidator<User>, UserValidator>();

        services.AddScoped<IUserService, UserService>();
        services.AddScoped<IPostService, PostService>();
        services.AddScoped<IFishService, FishService>();

        return services;
    }
}