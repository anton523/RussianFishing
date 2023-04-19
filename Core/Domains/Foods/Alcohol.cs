namespace Core.Domains.Foods;

public class Alcohol : BaseEntity
{
    public string Name { get; set; }
    public string Shop { get; set; }
    public string Pond { get; set; }
    public double Skill { get; set; }
    public double Max { get; set; }
    public int Hours { get; set; }
    public int Portions { get; set; }
    public double Price { get; set; }
    public double Ostrog { get; set; }
    public double Portion { get; set; }
    public int Full { get; set; }
    public double PerOnePercent { get; set; }
    public double PerOnePercent2 { get; set; }
}