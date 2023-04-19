using System.Text.Json.Serialization;

namespace Core.Domains.Gears;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum CoilType
{
    Inertialess,
    Bytecasting,
    Lowprofile,
    Power
}

public class Coil : BaseEntity
{
    public CoilType CoilType { get; set; }
    public string Name { get; set; }
    public int Size { get; set; }
    public double Test { get; set; }
    public double Peredat { get; set; }
    public double ThreeHundred { get; set; }
    public double Speed { get; set; }
    public double Freak { get; set; }
    public double MechKilo { get; set; }
    public int Level { get; set; }
    public double SilverPrice { get; set; }
    public double GoldPrice { get; set; }
}