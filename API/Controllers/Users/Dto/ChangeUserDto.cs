namespace API.Controllers.Users.Dto;

public class ChangeUserDto
{
    public string? Login { get; set; }
    public string? Email { get; set; }
    public string? Description { get; set; }
    public IFormFile? Image { get; set; }
}