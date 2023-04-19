using Core.Domains.Posts;
using Core.Domains.Users;

namespace Core.Domains.Comments;

public class Comment : BaseEntity
{
    public User Author { get; set; }
    public string AuthorId { get; set; }
    public Post Post { get; set; }
    public string PostId { get; set; }
    public string Text { get; set; }
}