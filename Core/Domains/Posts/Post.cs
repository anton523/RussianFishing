using Core.Domains.Comments;
using Core.Domains.Users;

namespace Core.Domains.Posts;

public class Post : BaseEntity
{
    public int Likes { get; set; }
    public int Views { get; set; }
    public User Author { get; set; }
    public string AuthorId { get; set; }
    public string Title { get; set; }
    public string? Text { get; set; }
    
    public virtual ICollection<Comment> Comments { get; set; }

    public Post()
    {
        Comments = new List<Comment>();
    }
}