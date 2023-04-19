using API.Controllers.Contents.Gears.Dto;
using API.Controllers.Contents.Hooks.Dto;
using AutoMapper;
using Core;
using Core.Domains.Gears;
using Core.Domains.Hooks;
using Core.Domains.Users.Services;
using Data.Contexts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers.Contents.Hooks;

[ApiController]
[Route("/api/pp4/hooks")]
public class HooksController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IUnitOfWork _unitOfWork;
    private readonly ApplicationContext _applicationContext;
    private readonly IMapper _mapper;

    public HooksController(IUserService userService, IUnitOfWork unitOfWork, ApplicationContext applicationContext, IMapper mapper)
    {
        _userService = userService;
        _unitOfWork = unitOfWork;
        _applicationContext = applicationContext;
        _mapper = mapper;
    }
    
    [HttpGet]
    [Route("hooks")]
    public async Task<IEnumerable<Hook>> GetAllHooks(CancellationToken cancellationToken)
    {
        return await _applicationContext.Hooks.ToListAsync(cancellationToken);
    }

    [HttpPost]
    [Route("hooks")]
    public async Task CreateHook(CreateHookDto createHookDto, CancellationToken cancellationToken)
    {
        var hook = _mapper.Map<Hook>(createHookDto);

        await _applicationContext.Hooks.AddAsync(hook, cancellationToken);
        await _unitOfWork.SaveChange();
    }
    
    [HttpGet]
    [Route("fishing-lines")]
    public async Task<IEnumerable<FishingLine>> GetAllFishingLines(CancellationToken cancellationToken)
    {
        return await _applicationContext.FishingLines.ToListAsync(cancellationToken);
    }
    
    [HttpPost]
    [Route("fishing-lines")]
    public async Task CreateFishingLine(CreateFishingLineDto createFishingLineDto, CancellationToken cancellationToken)
    {
        var fishingLine = _mapper.Map<FishingLine>(createFishingLineDto);

        await _applicationContext.FishingLines.AddAsync(fishingLine, cancellationToken);
        await _unitOfWork.SaveChange();
    }
}