namespace API.Controllers.Contents.Tools.Dto;

public class CreateToolDto
{
    public string Name { get; set; }
    public string Description { get; set; }
    public double SilverPrice { get; set; }
    public double GoldPrice { get; set; }
    public IFormFile? Image { get; set; }
}