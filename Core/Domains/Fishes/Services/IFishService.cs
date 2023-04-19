using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Core.Domains.Fishes.Services;

public interface IFishService
{
    public Task<Fish> GetById(string fishId, CancellationToken cancellationToken);
    public Task<IEnumerable<Fish>> GetAll(CancellationToken cancellationToken);
    public Task Create(Fish fish, CancellationToken cancellationToken);
    public Task Update(Fish fish, CancellationToken cancellationToken);
    public Task Delete(string fishId, CancellationToken cancellationToken);
}