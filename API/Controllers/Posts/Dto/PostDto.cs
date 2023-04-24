using Core.Domains.Comments;
using Core.Domains.Users;

namespace API.Controllers.Posts.Dto;

public class PostDto
{
    public string Id { get; set; }
    public int Likes { get; set; }
    public int Views { get; set; }
    public User Author { get; set; }
    public string AuthorId { get; set; }
    public string Title { get; set; }
    public string? Text { get; set; }
    public DateTime CreatedAt { get; set; }
    public bool IsCurrentUserLike { get; set; }
    
    public virtual ICollection<Comment> Comments { get; set; }
}