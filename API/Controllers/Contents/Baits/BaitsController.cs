using System.Data.Entity.Core;
using System.Globalization;
using API.Controllers.Contents.Baits.Dto;
using AutoMapper;
using Core;
using Core.Domains.Baits;
using Data.Contexts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers.Contents.Baits;

[ApiController]
[Route("/api/pp4/baits")]
public class BaitsController : ControllerBase
{
    private readonly ApplicationContext _applicationContext;
    private readonly IWebHostEnvironment _webHostEnv;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    
    public BaitsController(ApplicationContext applicationContext, IWebHostEnvironment webHostEnv, IUnitOfWork unitOfWork, IMapper mapper)
    {
        _applicationContext = applicationContext;
        _webHostEnv = webHostEnv;
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }
    
    [HttpPost]
    [Route("natural")]
    public async Task CreateNaturalBait([FromForm]CreateNaturalBaitDto naturalBaitDto, CancellationToken cancellationToken)
    {
        var avatarUrl = string.Empty;
        
        if (naturalBaitDto.Image is not null)
        {
            avatarUrl = await ImageUploader.UploadImage(naturalBaitDto.Image, _webHostEnv.WebRootPath,
                cancellationToken);
        }

        var naturalBait = new NaturalBait()
        {
            Type = naturalBaitDto.Type,
            Name = naturalBaitDto.Name,
            Sort = naturalBaitDto.Sort,
            SilverPrice = !string.IsNullOrEmpty(naturalBaitDto.SilverPrice) ? double.Parse(naturalBaitDto.SilverPrice, CultureInfo.InvariantCulture) : 0,
            GoldPrice = !string.IsNullOrEmpty(naturalBaitDto.GoldPrice) ? double.Parse(naturalBaitDto.GoldPrice, CultureInfo.InvariantCulture) : 0,
            Skill = naturalBaitDto.Skill,
            Weight = !string.IsNullOrEmpty(naturalBaitDto.Weight) ? double.Parse(naturalBaitDto.Weight, CultureInfo.InvariantCulture) : 0,
            Bait = naturalBaitDto.Bait,
            Manufacturer = naturalBaitDto.Manufacturer,
            Small = naturalBaitDto.Small,
            Medium = naturalBaitDto.Medium,
            Big = naturalBaitDto.Big,
            Huge = naturalBaitDto.Huge,
            Soluble = naturalBaitDto.Soluble,
            Amount = naturalBaitDto.Amount,
            Image = avatarUrl
        };

        await _applicationContext.NaturalBaits.AddAsync(naturalBait, cancellationToken);
        await _unitOfWork.SaveChange();
    }

    [HttpGet]
    [Route("natural/all")]
    public async Task<IEnumerable<NaturalBaitDto>> GetAllNaturalBaits(CancellationToken cancellationToken)
    {
        var entities = await _applicationContext.NaturalBaits.ToListAsync(cancellationToken);

        return entities.Select(x => _mapper.Map<NaturalBaitDto>(x)).ToList();
    }
    
    [HttpPost]
    [Route("unnatural")]
    public async Task CreateUnnaturalBait([FromForm]CreateUnnaturalBaitDto unnaturalBaitDto, CancellationToken cancellationToken)
    {
        var avatarUrl = string.Empty;
        
        if (unnaturalBaitDto.Image is not null)
        {
            avatarUrl = await ImageUploader.UploadImage(unnaturalBaitDto.Image, _webHostEnv.WebRootPath,
                cancellationToken);
        }

        var unnaturalBait = _mapper.Map<UnnaturalBait>(unnaturalBaitDto);
        unnaturalBait.Image = avatarUrl;

        await _applicationContext.UnnaturalBaits.AddAsync(unnaturalBait, cancellationToken);
        await _unitOfWork.SaveChange();
    }

    [HttpGet]
    [Route("unnatural/all")]
    public async Task<IEnumerable<UnnaturalBait>> GetAllUnnaturalBaits(CancellationToken cancellationToken)
    {
        var entities = await _applicationContext.UnnaturalBaits.ToListAsync(cancellationToken);

        return entities.Select(x => _mapper.Map<UnnaturalBait>(x)).ToList();
    }

    [HttpPut]
    [Route("unnatural/{id}")]
    public async Task UpdateUnnaturalBait(string id, [FromForm] CreateUnnaturalBaitDto unnaturalBaitDto,
        CancellationToken cancellationToken)
    {
        var avatarUrl = string.Empty;
        
        if (unnaturalBaitDto.Image is not null)
        {
            avatarUrl = await ImageUploader.UploadImage(unnaturalBaitDto.Image, _webHostEnv.WebRootPath,
                cancellationToken);
        }
        
        var unnaturalBait = _mapper.Map<UnnaturalBait>(unnaturalBaitDto);
        unnaturalBait.Id = id;
        unnaturalBait.Image = avatarUrl;

        _applicationContext.UnnaturalBaits.Update(unnaturalBait);

        await _unitOfWork.SaveChange();
    }

    [HttpDelete("unnatural/{id}")]
    public async Task DeleteUnnaturalBait(string id, CancellationToken cancellationToken)
    {
        var unnaturalBait =
            await _applicationContext.UnnaturalBaits.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

        if (unnaturalBait is null)
            throw new ObjectNotFoundException();

        _applicationContext.UnnaturalBaits.Remove(unnaturalBait);
        await _unitOfWork.SaveChange();
    }
    
    [HttpPut]
    [Route("natural/{id}")]
    public async Task UpdateNaturalBait(string id, [FromForm] CreateNaturalBaitDto naturalBaitDto,
        CancellationToken cancellationToken)
    {
        var avatarUrl = string.Empty;
        
        if (naturalBaitDto.Image is not null)
        {
            avatarUrl = await ImageUploader.UploadImage(naturalBaitDto.Image, _webHostEnv.WebRootPath,
                cancellationToken);
        }
        
        var unnaturalBait = _mapper.Map<NaturalBait>(naturalBaitDto);
        unnaturalBait.Id = id;
        unnaturalBait.Image = avatarUrl;

        _applicationContext.NaturalBaits.Update(unnaturalBait);

        await _unitOfWork.SaveChange();
    }
    
    [HttpDelete("natural/{id}")]
    public async Task DeleteNaturalBait(string id, CancellationToken cancellationToken)
    {
        var naturalBait =
            await _applicationContext.NaturalBaits.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

        if (naturalBait is null)
            throw new ObjectNotFoundException();

        _applicationContext.NaturalBaits.Remove(naturalBait);
        await _unitOfWork.SaveChange();
    }
}