using System.Text.Json.Serialization;
using Core.Domains.Fishes;

namespace Core.Domains.Baits;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum NaturalType
{
    Natural,
    Boyle,
    Sea
}

public class NaturalBait : BaseEntity
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
    
    public string? Image { get; set; }
    
    public virtual ICollection<Fish> Fishes { get; set; }
    
    public NaturalBait()
    {
        Fishes = new List<Fish>();
    }
}