using Microsoft.AspNetCore.Http;

namespace API.Controllers.Contents.Fishes.Dto;

public class CreateFishDto
{
    public string ShortName { get; set; }
    public string Name { get; set; }
    public string L1 { get; set; }
    public string L2 { get; set; }
    public string L3 { get; set; }
    public int Farm { get; set; }
    public int Experience { get; set; }
    public int Biting { get; set; }
    public int Trophy { get; set; }
    public string Description { get; set; }
    public IFormFile? Image { get; set; }
}