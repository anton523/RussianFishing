using System.Data.Entity.Core;
using System.Security.Claims;
using API.Controllers.Comments.Dto;
using Core;
using Core.Domains.Comments;
using Core.Domains.Users.Services;
using Data.Contexts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers.Comments;

[ApiController]
[Route("/api/comments")]
public class CommentsController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IUnitOfWork _unitOfWork;
    private readonly ApplicationContext _applicationContext;

    public CommentsController(IUserService userService, ApplicationContext applicationContext, IUnitOfWork unitOfWork)
    {
        _userService = userService;
        _applicationContext = applicationContext;
        _unitOfWork = unitOfWork;
    }

    [HttpPost]
    public async Task<Comment> CreateComment(CreateCommentDto commentDto, CancellationToken cancellationToken)
    {
        var userEmail = User.FindFirstValue(ClaimsIdentity.DefaultNameClaimType);
        var model = await _userService.GetByEmail(userEmail, cancellationToken);

        var comment = new Comment()
        {
            AuthorId = model.Id,
            PostId = commentDto.PostId,
            Text = commentDto.Text
        };

        await _applicationContext.Comments.AddAsync(comment, cancellationToken);
        await _unitOfWork.SaveChange();

        return comment;
    }

    [HttpDelete("{id}")]
    public async Task DeleteComment(string id, CancellationToken cancellationToken)
    {
        var comment = await _applicationContext.Comments.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

        if (comment is null)
            throw new ObjectNotFoundException();

        _applicationContext.Remove(comment);
        await _unitOfWork.SaveChange();
    }
}