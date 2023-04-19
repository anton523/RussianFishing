using System.Text.Json.Serialization;
using Core.Domains.Fishes;

namespace Core.Domains.Baits;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum UnnaturalType
{
    Rotating,
    Oscillating,
    Jerk,
    TopWater,
    Soft
}

public class UnnaturalBait : BaseEntity
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

    public string? Image { get; set; }
    
    public virtual ICollection<Fish> Fishes { get; set; }

    public UnnaturalBait()
    {
        Fishes = new List<Fish>();
    }
}