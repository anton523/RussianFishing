using Core;
using Core.Domains.Fishes.Repositories;
using Core.Domains.Users.Repositories;
using Data.Content.Fishes;
using Data.Contexts;
using Data.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;

namespace Data;

public static class Bootstrap
{
    public static IServiceCollection AddData(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IFishRepository, FishRepository>();
        
        services.AddDbContext<ApplicationContext>(options =>
            options.UseNpgsql(configuration.GetConnectionString("DefaultConnection")));

        return services;
    }
}