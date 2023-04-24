using System.Data.Entity.Core;
using API.Controllers.Contents.Tools.Dto;
using AutoMapper;
using Core;
using Core.Domains.Tools;
using Core.Domains.Users.Services;
using Data.Contexts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers.Contents.Tools;

[ApiController]
[Route("/api/pp4/tools")]
public class ToolsController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IUnitOfWork _unitOfWork;
    private readonly ApplicationContext _applicationContext;
    private readonly IMapper _mapper;
    private readonly IWebHostEnvironment _webHostEnv;

    public ToolsController(IUserService userService, IUnitOfWork unitOfWork, ApplicationContext applicationContext, IMapper mapper, IWebHostEnvironment webHostEnv)
    {
        _userService = userService;
        _unitOfWork = unitOfWork;
        _applicationContext = applicationContext;
        _mapper = mapper;
        _webHostEnv = webHostEnv;
    }

    [HttpPost]
    [Route("slingshots")]
    public async Task CreateSlingshot(CreateSlingshotDto createSlingshotDto, CancellationToken cancellationToken)
    {
        var slingshot = _mapper.Map<Slingshot>(createSlingshotDto);

        await _applicationContext.Slingshots.AddAsync(slingshot, cancellationToken);

        await _unitOfWork.SaveChange();
    }
    
    [HttpGet]
    [Route("slingshots")]
    public async Task<IEnumerable<Slingshot>> GetAllSlingshots(CancellationToken cancellationToken)
    {
        return await _applicationContext.Slingshots.ToListAsync(cancellationToken);
    }

    [HttpGet]
    [Route("tools")]
    public async Task<IEnumerable<Tool>> GetAllTools(CancellationToken cancellationToken)
    {
        return await _applicationContext.Tools.ToListAsync(cancellationToken);
    }
    
    [HttpPost]
    [Route("tools")]
    public async Task CreateTool([FromForm]CreateToolDto createToolDto, CancellationToken cancellationToken)
    {
        var avatarUrl = string.Empty;
        
        if (createToolDto.Image is not null)
        {
            avatarUrl = await ImageUploader.UploadImage(createToolDto.Image, _webHostEnv.WebRootPath,
                cancellationToken);
        }
        
        var tool = _mapper.Map<Tool>(createToolDto);
        tool.Image = avatarUrl;

        await _applicationContext.Tools.AddAsync(tool, cancellationToken);
        
        await _unitOfWork.SaveChange();
    }
    
    [HttpDelete("tools/{id}")]
    public async Task DeleteTool(string id, CancellationToken cancellationToken)
    {
        var entity =
            await _applicationContext.Tools.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

        if (entity is null)
            throw new ObjectNotFoundException();

        _applicationContext.Tools.Remove(entity);
        await _unitOfWork.SaveChange();
    }
    
    [HttpDelete("slingshots/{id}")]
    public async Task DeleteSlingshot(string id, CancellationToken cancellationToken)
    {
        var entity =
            await _applicationContext.Slingshots.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

        if (entity is null)
            throw new ObjectNotFoundException();

        _applicationContext.Slingshots.Remove(entity);
        await _unitOfWork.SaveChange();
    }
}