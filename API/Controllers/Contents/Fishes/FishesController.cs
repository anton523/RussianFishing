using System.Globalization;
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
    public async Task Update(string id, [FromForm]CreateFishDto createFishDto, CancellationToken cancellationToken)
    {
        var avatarUrl = string.Empty;
        
        if (createFishDto.Image is not null)
        {
            avatarUrl = await ImageUploader.UploadImage(createFishDto.Image, _webHostEnv.WebRootPath,
                cancellationToken);
        }
        
        var fish = new Fish
        {
            Id = id,
            ShortName = createFishDto.ShortName,
            Name = createFishDto.Name,
            L1 = double.Parse(createFishDto.L1, CultureInfo.InvariantCulture),
            L2 = double.Parse(createFishDto.L2, CultureInfo.InvariantCulture),
            L3 = double.Parse(createFishDto.L3, CultureInfo.InvariantCulture),
            Farm = createFishDto.Farm,
            Biting = createFishDto.Biting,
            Experience = createFishDto.Experience,
            Trophy = createFishDto.Trophy,
            Description = createFishDto.Description,
            Image = avatarUrl
        };
        
        await _fishService.Update(fish, cancellationToken);
    }

    [HttpDelete("{id}")]
    public async Task Delete(string id, CancellationToken cancellationToken)
    {
        await _fishService.Delete(id, cancellationToken);
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
            L1 = double.Parse(createFishDto.L1, CultureInfo.InvariantCulture),
            L2 = double.Parse(createFishDto.L2, CultureInfo.InvariantCulture),
            L3 = double.Parse(createFishDto.L3, CultureInfo.InvariantCulture),
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