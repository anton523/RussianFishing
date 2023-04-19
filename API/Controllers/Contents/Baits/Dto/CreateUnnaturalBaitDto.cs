using Core.Domains.Baits;

namespace API.Controllers.Contents.Baits.Dto;

public class CreateUnnaturalBaitDto
{
    public UnnaturalType Type { get; set; }
    public string Name { get; set; }
    public double Weight { get; set; }
    
    public string? Manufacturer { get; set; }
    public string? Size { get; set; }
    public string? Floatation { get; set; }
    public string? Tees { get; set; }
    public int? Variants { get; set; }
    public double? Price { get; set; }
    
    public string? Brand { get; set; }
    
    public string? Sort { get; set; }
    
    public string? Shop { get; set; }

    public IFormFile? Image { get; set; }
}