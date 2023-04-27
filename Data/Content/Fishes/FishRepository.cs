using System.Data.Entity.Core;
using Core.Domains.Fishes;
using Core.Domains.Fishes.Repositories;
using Data.Contexts;
using Microsoft.EntityFrameworkCore;

namespace Data.Content.Fishes;

public class FishRepository : IFishRepository
{
    private readonly ApplicationContext _applicationContext;

    public FishRepository(ApplicationContext applicationContext)
    {
        _applicationContext = applicationContext;
    }
    
    public async Task<Fish> GetById(string fishId, CancellationToken cancellationToken)
    {
        var entity = await _applicationContext.Fishes.FirstOrDefaultAsync(x => x.Id == fishId, cancellationToken);

        if (entity is null)
            throw new ObjectNotFoundException();

        return entity;
    }

    public async Task<IEnumerable<Fish>> GetAll(CancellationToken cancellationToken)
    {
        return await _applicationContext.Fishes.ToListAsync(cancellationToken);
    }

    public async Task Create(Fish fish, CancellationToken cancellationToken)
    {
        await _applicationContext.Fishes.AddAsync(fish, cancellationToken);
    }

    public Task Update(Fish fish, CancellationToken cancellationToken)
    {
        _applicationContext.Fishes.Update(fish);
        
        return Task.CompletedTask;
    }

    public async Task Delete(string fishId, CancellationToken cancellationToken)
    {
        var entity = await _applicationContext.Fishes.FirstOrDefaultAsync(x => x.Id == fishId, cancellationToken);

        if (entity is null)
            throw new ObjectNotFoundException();

        _applicationContext.Fishes.Remove(entity);
    }
}