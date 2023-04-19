using API.Controllers.Contents.Fishes.Dto;
using AutoMapper;
using Core;
using Core.Domains.Fishes;
using Core.Domains.Fishes.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers.Contents.Fishes;

[ApiController]
[Route("/api/pp4/fishes")]
public class FishesController : ControllerBase
{
    private readonly IFishService _fishService;
    private readonly IMapper _mapper;
    private readonly IWebHostEnvironment _webHostEnv;

    public FishesController(IFishService fishService, IMapper mapper, IWebHostEnvironment webHostEnv)
    {
        _fishService = fishService;
        _mapper = mapper;
        _webHostEnv = webHostEnv;
    }

    [HttpGet]
    public async Task<FishDto> Get(string fishId, CancellationToken cancellationToken)
    {
        var model = await _fishService.GetById(fishId, cancellationToken);

        return _mapper.Map<FishDto>(model);
    }

    [HttpGet("all")]
    public async Task<IEnumerable<FishDto>> GetAll(CancellationToken cancellationToken)
    {
        var fishes = await _fishService.GetAll(cancellationToken);

        return fishes.Select(model => _mapper.Map<FishDto>(model));
    }
    

    [HttpPut("{id}")]
    public async Task Update(FishDto userDto, CancellationToken cancellationToken)
    {
        await _fishService.Update(_mapper.Map<Fish>(userDto), cancellationToken);
    }

    [HttpDelete("{id}")]
    public async Task Delete(string fishId, CancellationToken cancellationToken)
    {
        await _fishService.Delete(fishId, cancellationToken);
    }

    [HttpPost]
    public async Task Create([FromForm]CreateFishDto createFishDto, CancellationToken cancellationToken)
    {
        var avatarUrl = string.Empty;
        
        if (createFishDto.Image is not null)
        {
            avatarUrl = await ImageUploader.UploadImage(createFishDto.Image, _webHostEnv.WebRootPath,
                cancellationToken);
        }

        var fish = new Fish
        {
            ShortName = createFishDto.ShortName,
            Name = createFishDto.Name,
            L1 = createFishDto.L1,
            L2 = createFishDto.L2,
            L3 = createFishDto.L3,
            Farm = createFishDto.Farm,
            Biting = createFishDto.Biting,
            Experience = createFishDto.Experience,
            Trophy = createFishDto.Trophy,
            Description = createFishDto.Description,
            Image = avatarUrl
        };
        
        await _fishService.Create(fish, cancellationToken);
    }
}