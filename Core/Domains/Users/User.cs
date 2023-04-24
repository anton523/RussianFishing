using System.Text.Json.Serialization;
using Core.Domains.Posts;

namespace Core.Domains.Users;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum Role
{
    User,
    Admin
}

public class User : BaseEntity
{
    public string Login { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Description { get; set; }
    public Role Role { get; set; }
    public string? AvatarUri { get; set; }
    public virtual ICollection<Post> Posts { get; set; }
    public virtual ICollection<Post> LikesPosts { get; set; }
    public virtual ICollection<Post> ViewsPosts { get; set; }

    public User()
    {
        Posts = new List<Post>();
        LikesPosts = new List<Post>();
        ViewsPosts = new List<Post>();
    }
}