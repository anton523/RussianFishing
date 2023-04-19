using System.Text.Json.Serialization;

namespace Core.Domains.Gears;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum RodType
{
    Float,
    Racing,
    Spinning,
    Sea
} 

public class Rod : BaseEntity
{
    public RodType Type { get; set; }
    public string Name { get; set; }
    public string Sort { get; set; }
    public string Power { get; set; }
    public int Test1 { get; set; }
    public int Test2 { get; set; }
    public double Length { get; set; }
    public int Feel { get; set; }
    public int Hardness { get; set; }
    public string Build { get; set; }
    public string Bonus1 { get; set; }
    public string Bonus2 { get; set; }
    public string Bonus3 { get; set; }
    public double Durability { get; set; }
    public int Level { get; set; }
    public int SilverPrice { get; set; }
    public int GoldPrice { get; set; }
}