using Data.Contexts;
using Microsoft.EntityFrameworkCore;

namespace API.HostedServices;

public class MigrationHostedService : IHostedService
{
    private readonly IServiceProvider _serviceProvider;

    public MigrationHostedService(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }
    
    public Task StartAsync(CancellationToken cancellationToken)
    {
        using var scope = _serviceProvider.CreateScope();
        
        var context = scope.ServiceProvider.GetService<ApplicationContext>();
            
        if (context is null)
            throw new Exception($"{nameof(context)} not registered");
            
        context.Database.Migrate();
            
        return Task.CompletedTask;
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }
}