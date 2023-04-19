namespace API.Controllers.Contents.Fishes.Dto;

public class FishDto
{
    public string? Id { get; set; }
    public string ShortName { get; set; }
    public string Name { get; set; }
    public double L1 { get; set; }
    public double L2 { get; set; }
    public double L3 { get; set; }
    public int Farm { get; set; }
    public int Experience { get; set; }
    public int Biting { get; set; }
    public int Trophy { get; set; }
    public string Description { get; set; }
    public string Image { get; set; }
}