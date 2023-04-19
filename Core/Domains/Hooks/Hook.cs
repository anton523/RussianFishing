using System.Text.Json.Serialization;

namespace Core.Domains.Hooks;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum HookType
{
    Classic,
    Carp,
    Shipped,
    Tees,
    JigHeads,
    Offset,
    LiveBait,
    Sea
}

public class Hook : BaseEntity
{
    public HookType Type { get; set; }
    public string Name { get; set; }
    public double Height { get; set; }
    public double S24 { get; set; }
    public double S22 { get; set; }
    public double S20 { get; set; }
    public double S19 { get; set; }
    public double S18 { get; set; }
    public double S17 { get; set; }
    public double S16 { get; set; }
    public double S15 { get; set; }
    public double S14 { get; set; }
    public double S13 { get; set; }
    public double S12 { get; set; }
    public double S11 { get; set; }
    public double S10 { get; set; }
    public double S9 { get; set; }
    public double S8 { get; set; }
    public double S7 { get; set; }
    public double S6 { get; set; }
    public double S5 { get; set; }
    public double S4 { get; set; }
    public double S3 { get; set; }
    public double S2 { get; set; }
    public double S1 { get; set; }
    public double S1Zero { get; set; }
    public double S2Zero { get; set; }
    public double S3Zero { get; set; }
    public double S4Zero { get; set; }
    public double S5Zero { get; set; }
    public double S6Zero { get; set; }
    public double S8Zero { get; set; }
    public double S10Zero { get; set; }
    public double S12Zero { get; set; }
}