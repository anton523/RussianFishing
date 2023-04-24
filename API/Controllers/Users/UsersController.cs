using System.Security.Claims;
using API.Controllers.Posts.Dto;
using API.Controllers.Users.Dto;
using AutoMapper;
using Core;
using Core.Domains.Posts;
using Core.Domains.Users;
using Core.Domains.Users.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers.Users;

[ApiController]
[Route("/api/users")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IMapper _mapper;
    private readonly IWebHostEnvironment _webHostEnv;
    private readonly IUnitOfWork _unitOfWork;

    public UserController(IUserService userService, IMapper mapper, IWebHostEnvironment webHostEnv, IUnitOfWork unitOfWork)
    {
        _userService = userService;
        _mapper = mapper;
        _webHostEnv = webHostEnv;
        _unitOfWork = unitOfWork;
    }

    [HttpGet]
    public async Task<UserDto> Get(CancellationToken cancellationToken)
    {
        var userEmail = User.FindFirstValue(ClaimsIdentity.DefaultNameClaimType);

        var model = await _userService.GetByEmail(userEmail, cancellationToken);
        
        var userDto = new UserDto
        {
            Id = model.Id,
            Login = model.Login,
            Email = model.Email,
            AvatarUri = model.AvatarUri,
            Description = model.Description,
            CreatedAt = model.CreatedAt,
            Role = model.Role
        };

        return userDto;
    }

    [HttpGet("all")]
    public async Task<IEnumerable<UserDto>> GetAll(CancellationToken cancellationToken)
    {
        var users = await _userService.GetAll(cancellationToken);

        return users.Select(model => _mapper.Map<UserDto>(model));
    }

    [HttpGet("posts")]
    public async Task<IEnumerable<Post>> GetAllUserPosts(string userId, CancellationToken cancellationToken)
    {
        return await _userService.GetAllUserPosts(userId, cancellationToken);
    }

    [HttpPost("update-role")]
    public async Task UpdateUserRole(UpdateUserRoleDto updateUserRoleDto, CancellationToken cancellationToken)
    {
        var user = await _userService.GetById(updateUserRoleDto.Id, cancellationToken);

        user.Role = updateUserRoleDto.Role;

        await _unitOfWork.SaveChange();
    }

    [HttpPut]
    public async Task Update([FromForm]ChangeUserDto userDto, CancellationToken cancellationToken)
    {
        var avatarUrl = string.Empty;

        if (userDto.Image is not null)
        {
            avatarUrl = await ImageUploader.UploadImage(userDto.Image, _webHostEnv.WebRootPath, cancellationToken);
        }
        
        var userEmail = User.FindFirstValue(ClaimsIdentity.DefaultNameClaimType);
        var model = await _userService.GetByEmail(userEmail, cancellationToken);

        var user = new User()
        {
            Id = model.Id,
            AvatarUri = avatarUrl,
            Login = userDto.Login,
            Email = userDto.Email,
            Description = userDto.Description
        };
        
        await _userService.Update(user, cancellationToken);

        if (!string.IsNullOrEmpty(user.Email))
        {
            await Authenticate(user.Email);
        }
    }

    [HttpDelete("{id}")]
    public async Task Delete(string userId, CancellationToken cancellationToken)
    {
        await _userService.Delete(userId, cancellationToken);
    }

    [HttpPost]
    public async Task Create(CreateUserDto userDto, CancellationToken cancellationToken)
    {
        await _userService.Create(_mapper.Map<User>(userDto), cancellationToken);
        await Authenticate(userDto.Email);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginUserDto loginUserDto, CancellationToken cancellationToken)
    {
        if (!await _userService.CanLogin(loginUserDto.Email, loginUserDto.Password, cancellationToken))
            return BadRequest(loginUserDto);
        
        await Authenticate(loginUserDto.Email);
        return Ok();
    }
    
    [HttpGet("logout")]
    public async Task<IActionResult> Logout()
    {
        await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        return Ok();
    }
    
    [HttpGet]
    [Route("whoami")]
    public async Task WhoAmI()
    {
        var whoami = HttpContext.User.Identity?.Name ?? "Anonymous";
        await HttpContext.Response.WriteAsync(whoami);
    }

    private async Task Authenticate(string email)
    {
        var claims = new List<Claim> { new (ClaimsIdentity.DefaultNameClaimType, email) };
        
        var id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
        
        await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
    }
}