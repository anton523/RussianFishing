using API.Controllers.Contents.Fishes.Dto;

namespace API.Controllers.Maps.Dto;

public class CreateMapDto
{
    public string Name { get; set; }
    public string Description { get; set; }
    public IFormFile TitleImage { get; set; }
    public IFormFile MapImage { get; set; }
    
    public IEnumerable<string>? IdFishes { get; set; }
}