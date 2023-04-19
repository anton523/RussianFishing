namespace Core.Domains.Tools;

public class Tool : BaseEntity
{
    public string Name { get; set; }
    public string Description { get; set; }
    public double SilverPrice { get; set; }
    public double GoldPrice { get; set; }
    public string? Image { get; set; }
}