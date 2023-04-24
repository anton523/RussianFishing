using System.Data.Entity.Core;
using API.Controllers.Contents.Gears.Dto;
using AutoMapper;
using Core;
using Core.Domains.Foods;
using Core.Domains.Gears;
using Core.Domains.Users.Services;
using Data.Contexts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers.Contents.Gears;

[ApiController]
[Route("/api/pp4/gears")]
public class GearsController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IUnitOfWork _unitOfWork;
    private readonly ApplicationContext _applicationContext;
    private readonly IMapper _mapper;

    public GearsController(ApplicationContext applicationContext, IUnitOfWork unitOfWork, IUserService userService, IMapper mapper)
    {
        _applicationContext = applicationContext;
        _unitOfWork = unitOfWork;
        _userService = userService;
        _mapper = mapper;
    }

    [HttpGet]
    [Route("coils")]
    public async Task<IEnumerable<Coil>> GetAllCoils(CancellationToken cancellationToken)
    {
        return await _applicationContext.Coils.ToListAsync(cancellationToken);
    }

    [HttpPost]
    [Route("coils")]
    public async Task CreateCoil(CreateCoilDto createCoilDto, CancellationToken cancellationToken)
    {
        var coil = _mapper.Map<Coil>(createCoilDto);

        await _applicationContext.Coils.AddAsync(coil, cancellationToken);
        await _unitOfWork.SaveChange();
    }
    
    [HttpGet]
    [Route("rods")]
    public async Task<IEnumerable<Rod>> GetAllRods(CancellationToken cancellationToken)
    {
        return await _applicationContext.Rods.ToListAsync(cancellationToken);
    }

    [HttpPost]
    [Route("rods")]
    public async Task CreateRod(CreateRodDto createRod, CancellationToken cancellationToken)
    {
        var rod = _mapper.Map<Rod>(createRod);

        await _applicationContext.Rods.AddAsync(rod, cancellationToken);
        await _unitOfWork.SaveChange();
    }
    
    [HttpDelete("rods/{id}")]
    public async Task DeleteRod(string id, CancellationToken cancellationToken)
    {
        var entity =
            await _applicationContext.Rods.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

        if (entity is null)
            throw new ObjectNotFoundException();

        _applicationContext.Rods.Remove(entity);
        await _unitOfWork.SaveChange();
    }
    
    [HttpDelete("coils/{id}")]
    public async Task DeleteCoil(string id, CancellationToken cancellationToken)
    {
        var entity =
            await _applicationContext.Coils.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

        if (entity is null)
            throw new ObjectNotFoundException();

        _applicationContext.Coils.Remove(entity);
        await _unitOfWork.SaveChange();
    }
}