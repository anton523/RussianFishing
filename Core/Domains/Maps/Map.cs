using Core.Domains.Fishes;

namespace Core.Domains.Maps;

public class Map : BaseEntity
{
    public string Name { get; set; }
    public string Description { get; set; }
    
    public string TitleImage { get; set; }
    public string MapImage { get; set; }
    
    public virtual ICollection<Fish> Fishes { get; set; }

    public Map()
    {
        Fishes = new List<Fish>();
    }
}