using System.Data.Entity.Core;
using API.Controllers.Contents.Foods.Dto;
using AutoMapper;
using Core;
using Core.Domains.Foods;
using Core.Domains.Users.Services;
using Data.Contexts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers.Contents.Foods;

[ApiController]
[Route("/api/pp4/foods")]
public class FoodsController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IUnitOfWork _unitOfWork;
    private readonly ApplicationContext _applicationContext;
    private readonly IMapper _mapper;

    public FoodsController(ApplicationContext applicationContext, IUnitOfWork unitOfWork, IUserService userService, IMapper mapper)
    {
        _applicationContext = applicationContext;
        _unitOfWork = unitOfWork;
        _userService = userService;
        _mapper = mapper;
    }

    [HttpGet]
    [Route("alcohol")]
    public async Task<IEnumerable<Alcohol>> GetAllAlcohol(CancellationToken cancellationToken)
    {
        return await _applicationContext.Alcohols.ToListAsync(cancellationToken);
    }

    [HttpPost]
    [Route("alcohol")]
    public async Task CreateAlcohol(CreateAlcoholDto createAlcoholDto, CancellationToken cancellationToken)
    {
        var alcohol = _mapper.Map<Alcohol>(createAlcoholDto);

        await _applicationContext.Alcohols.AddAsync(alcohol, cancellationToken);
        await _unitOfWork.SaveChange();
    }
    
    [HttpDelete("alcohol/{id}")]
    public async Task DeleteAlcohol(string id, CancellationToken cancellationToken)
    {
        var entity =
            await _applicationContext.Alcohols.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

        if (entity is null)
            throw new ObjectNotFoundException();

        _applicationContext.Alcohols.Remove(entity);
        await _unitOfWork.SaveChange();
    }
}