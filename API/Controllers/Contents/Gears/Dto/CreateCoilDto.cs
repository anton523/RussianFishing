using Core.Domains.Gears;

namespace API.Controllers.Contents.Gears.Dto;

public class CreateCoilDto
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