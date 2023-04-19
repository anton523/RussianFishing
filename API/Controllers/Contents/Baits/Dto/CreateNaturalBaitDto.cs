using Core.Domains.Baits;

namespace API.Controllers.Contents.Baits.Dto;

public class CreateNaturalBaitDto
{
    public NaturalType Type { get; set; }
    public string Name { get; set; }
    public string? Sort { get; set; }
    public double? SilverPrice { get; set; }
    public double? GoldPrice { get; set; }
    public int? Skill { get; set; }
    public double? Weight { get; set; }
    public string? Bait { get; set; }
    
    public string? Manufacturer { get; set; }
    public int? Small { get; set; }
    public int? Medium { get; set; }
    public int? Big { get; set; }
    public int? Huge { get; set; }
    public bool? Soluble { get; set; }
    
    public int? Amount { get; set; }
    
    public IFormFile? Image { get; set; }
}