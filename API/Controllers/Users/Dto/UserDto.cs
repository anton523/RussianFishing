using Core.Domains.Users;

namespace API.Controllers.Users.Dto;

public class UserDto
{
    public string Id { get; set; }
    public string Login { get; set; }
    public string Email { get; set; }
    public string AvatarUri { get; set; }
    public string Description { get; set; }
    public Role Role { get; set; }
    public DateTime CreatedAt { get; set; }
}