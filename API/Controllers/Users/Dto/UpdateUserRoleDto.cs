using Core.Domains.Users;

namespace API.Controllers.Users.Dto;

public class UpdateUserRoleDto
{
    public string Id { get; set; }
    public Role Role { get; set; }
}