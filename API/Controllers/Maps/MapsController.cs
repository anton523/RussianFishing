using System.Data.Entity.Core;
using API.Controllers.Maps.Dto;
using AutoMapper;
using Core;
using Core.Domains.Fishes;
using Core.Domains.Maps;
using Data.Contexts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers.Maps;

[ApiController]
[Route("api/maps")]
public class MapsController : ControllerBase
{
    private readonly ApplicationContext _applicationContext;
    private readonly IWebHostEnvironment _webHostEnvironment;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public MapsController(ApplicationContext applicationContext, IWebHostEnvironment webHostEnvironment, IMapper mapper, IUnitOfWork unitOfWork)
    {
        _applicationContext = applicationContext;
        _webHostEnvironment = webHostEnvironment;
        _mapper = mapper;
        _unitOfWork = unitOfWork;
    }

    [HttpGet]
    [Route("all")]
    public async Task<IEnumerable<Map>> GetAllMaps(CancellationToken cancellationToken)
    {
        await _applicationContext.Fishes.LoadAsync(cancellationToken);
        return await _applicationContext.Maps.ToListAsync(cancellationToken);
    }

    [HttpGet("{mapId}")]
    public async Task<Map> GetMapById(string mapId, CancellationToken cancellationToken)
    {
        var map = await _applicationContext.Maps.FirstOrDefaultAsync(x => x.Id == mapId, cancellationToken);

        if (map is null)
            throw new ObjectNotFoundException();

        await _applicationContext.Fishes.LoadAsync(cancellationToken);

        return map;
    }

    [HttpPost]
    public async Task CreateMap([FromForm] CreateMapDto createMapDto, CancellationToken cancellationToken)
    {
        var titleImageUrl = await ImageUploader.UploadImage(createMapDto.TitleImage, _webHostEnvironment.WebRootPath, cancellationToken);
        var mapImageUrl = await ImageUploader.UploadImage(createMapDto.MapImage, _webHostEnvironment.WebRootPath, cancellationToken);

        var map = new Map()
        {
            Name = createMapDto.Name,
            Description = createMapDto.Description,
            TitleImage = titleImageUrl,
            MapImage = mapImageUrl
        };

        if (createMapDto.IdFishes is not null)
        {
            foreach (var id in createMapDto.IdFishes)
            {
                var fish = _applicationContext.Fishes.FirstOrDefault(x => x.Id == id);

                if (fish is null)
                    throw new ObjectNotFoundException();

                map.Fishes.Add(fish);
            }
        }

        await _applicationContext.Maps.AddAsync(map, cancellationToken);
        await _unitOfWork.SaveChange();
    }

    [HttpDelete("{mapId}")]
    public async Task DeleteMapById(string mapId, CancellationToken cancellationToken)
    {
        var map = await _applicationContext.Maps.FirstOrDefaultAsync(x => x.Id == mapId, cancellationToken);

        if (map is null)
            throw new ObjectNotFoundException();

        _applicationContext.Maps.Remove(map);
        await _unitOfWork.SaveChange();
    }
}