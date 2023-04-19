using System.Data.Entity.Core;
using System.Security.Claims;
using API.Controllers.Posts.Dto;
using AutoMapper;
using Core;
using Core.Domains.Comments;
using Core.Domains.Posts;
using Core.Domains.Users.Services;
using Data.Contexts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers.Posts;

[ApiController]
[Route("/api/posts")]
public class PostsController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IUnitOfWork _unitOfWork;
    private readonly ApplicationContext _applicationContext;
    private readonly IMapper _mapper;

    public PostsController(IUserService userService, IUnitOfWork unitOfWork, ApplicationContext applicationContext, IMapper mapper)
    {
        _userService = userService;
        _unitOfWork = unitOfWork;
        _applicationContext = applicationContext;
        _mapper = mapper;
    }
    
    [HttpGet("{id}")]
    public async Task<Post> GetPostById(string id, CancellationToken cancellationToken)
    {
        var post = await _applicationContext.Posts.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

        if (post is null)
            throw new ObjectNotFoundException();
        
        await _applicationContext.Entry(post).Collection(x => x.Comments).LoadAsync(cancellationToken);
        await _applicationContext.Users.LoadAsync(cancellationToken);

        return post;
    }

    [HttpGet]
    public async Task<IEnumerable<Post>> GetAllPosts(CancellationToken cancellationToken)
    {
        var posts = await _applicationContext.Posts.ToListAsync(cancellationToken);

        await _applicationContext.Comments.LoadAsync(cancellationToken);
        await _applicationContext.Users.LoadAsync(cancellationToken);

        return posts;
    }

    [HttpPost]
    [Route("create")]
    public async Task CreatePost(CreatePostDto createPostDto, CancellationToken cancellationToken)
    {
        var userEmail = User.FindFirstValue(ClaimsIdentity.DefaultNameClaimType);
        var model = await _userService.GetByEmail(userEmail, cancellationToken);

        var post = new Post
        {
            AuthorId = model.Id,
            Text = createPostDto.Text,
            Title = createPostDto.Title
        };

        await _applicationContext.Posts.AddAsync(post, cancellationToken);
        await _unitOfWork.SaveChange();
    }
}