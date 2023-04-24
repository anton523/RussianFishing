using System.Data.Entity.Core;
using System.Security.Claims;
using API.Controllers.Posts.Dto;
using AutoMapper;
using Core;
using Core.Domains.Posts;
using Core.Domains.Users;
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

    [HttpGet("likes/{postId}")]
    public async Task<bool> AddOrRemoveLike(string postId, CancellationToken cancellationToken)
    {
        var userEmail = User.FindFirstValue(ClaimsIdentity.DefaultNameClaimType);

        if (string.IsNullOrEmpty(userEmail))
            throw new Exception("Please log in");

        var user = await _userService.GetByEmail(userEmail, cancellationToken);
        var post = await _applicationContext.Posts
            .Include(x => x.UsersLikes)
            .FirstOrDefaultAsync(x => x.Id == postId, cancellationToken);

        if (post is null)
            throw new ObjectNotFoundException($"Post with Id = {postId} not found.");

        if (post.UsersLikes.Contains(user))
        {
            post.Likes -= 1;
            post.UsersLikes.Remove(user);
            await _unitOfWork.SaveChange();
            return false;
        }
        
        post.Likes += 1;
        post.UsersLikes.Add(user);
        await _unitOfWork.SaveChange();
        return true;
    }
    
    [HttpGet("views/{postId}")]
    public async Task AddView(string postId, CancellationToken cancellationToken)
    {
        var userEmail = User.FindFirstValue(ClaimsIdentity.DefaultNameClaimType);

        if (string.IsNullOrEmpty(userEmail))
            throw new Exception("Please log in");

        var user = await _userService.GetByEmail(userEmail, cancellationToken);
        var post = await _applicationContext.Posts
            .Include(x => x.UsersViews)
            .FirstOrDefaultAsync(x => x.Id == postId, cancellationToken);

        if (post is null)
            throw new ObjectNotFoundException($"Post with Id = {postId} not found.");

        if (post.UsersViews.Contains(user))
        {
            return;
        }
        
        post.Views += 1;
        post.UsersViews.Add(user);

        await _unitOfWork.SaveChange();
    }

    [HttpGet("{id}")]
    public async Task<PostDto> GetPostById(string id, CancellationToken cancellationToken)
    {
        var post = await _applicationContext.Posts.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

        if (post is null)
            throw new ObjectNotFoundException();
        
        await _applicationContext.Entry(post).Collection(x => x.Comments).LoadAsync(cancellationToken);
        await _applicationContext.Users.LoadAsync(cancellationToken);

        var postDto = _mapper.Map<PostDto>(post);
        
        var userEmail = User.FindFirstValue(ClaimsIdentity.DefaultNameClaimType);
        
        if (!string.IsNullOrEmpty(userEmail))
        {
            var user = await _userService.GetByEmail(userEmail, cancellationToken);
            await _applicationContext
                .Entry(user)
                .Collection(x => x.LikesPosts)
                .LoadAsync(cancellationToken);

            postDto.IsCurrentUserLike = user.LikesPosts.Contains(post);
        }
        
        return postDto;
    }

    [HttpGet]
    public async Task<IEnumerable<PostDto>> GetAllPosts(CancellationToken cancellationToken)
    {
        var posts = await _applicationContext.Posts.ToListAsync(cancellationToken);

        await _applicationContext.Comments.LoadAsync(cancellationToken);
        await _applicationContext.Users.LoadAsync(cancellationToken);
        
        User user = null;
        var userEmail = User.FindFirstValue(ClaimsIdentity.DefaultNameClaimType);
        
        if (!string.IsNullOrEmpty(userEmail))
        {
            user = await _userService.GetByEmail(userEmail, cancellationToken);
            await _applicationContext
                .Entry(user)
                .Collection(x => x.LikesPosts)
                .LoadAsync(cancellationToken);
        }

        return posts.Select(post =>
        {
            var postDto = _mapper.Map<PostDto>(post);
            if (user != null)
                postDto.IsCurrentUserLike = user.LikesPosts.Contains(post);
            return postDto;

        }).ToList();
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
    
    [HttpDelete]
    public async Task DeletePost(string id, CancellationToken cancellationToken)
    {
        var entity =
            await _applicationContext.Posts.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

        if (entity is null)
            throw new ObjectNotFoundException();

        _applicationContext.Posts.Remove(entity);
        await _unitOfWork.SaveChange();
    }
}