using Core.Domains.Fishes.Repositories;
using Core.Domains.Users.Repositories;

namespace Core.Domains.Fishes.Services;

public class FishService : IFishService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IFishRepository _fishRepository;

    public FishService(IUnitOfWork unitOfWork, IFishRepository fishRepository)
    {
        _unitOfWork = unitOfWork;
        _fishRepository = fishRepository;
    }

    public async Task<Fish> GetById(string fishId, CancellationToken cancellationToken)
    {
        return await _fishRepository.GetById(fishId, cancellationToken);
    }

    public async Task<IEnumerable<Fish>> GetAll(CancellationToken cancellationToken)
    {
        return await _fishRepository.GetAll(cancellationToken);
    }

    public async Task Create(Fish fish, CancellationToken cancellationToken)
    {
        await _fishRepository.Create(fish, cancellationToken);
        await _unitOfWork.SaveChange();
    }

    public async Task Update(Fish fish, CancellationToken cancellationToken)
    {
        await _fishRepository.Update(fish, cancellationToken);
        await _unitOfWork.SaveChange();
    }

    public async Task Delete(string fishId, CancellationToken cancellationToken)
    {
        await _fishRepository.Delete(fishId, cancellationToken);
        await _unitOfWork.SaveChange();
    }
}