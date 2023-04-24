using Core.Domains.Baits;
using Core.Domains.Comments;
using Core.Domains.Fishes;
using Core.Domains.Foods;
using Core.Domains.Gears;
using Core.Domains.Hooks;
using Core.Domains.Maps;
using Core.Domains.Posts;
using Core.Domains.Tools;
using Core.Domains.Users;
using Microsoft.EntityFrameworkCore;

namespace Data.Contexts;

public class ApplicationContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Post> Posts { get; set; }
    public DbSet<Map> Maps { get; set; }
    public DbSet<Comment> Comments { get; set; }
    public DbSet<Fish> Fishes { get; set; }
    public DbSet<NaturalBait> NaturalBaits { get; set; }
    public DbSet<UnnaturalBait> UnnaturalBaits { get; set; }
    public DbSet<Slingshot> Slingshots { get; set; }
    public DbSet<Tool> Tools { get; set; }
    public DbSet<Alcohol> Alcohols { get; set; }
    public DbSet<Rod> Rods { get; set; }
    public DbSet<Coil> Coils { get; set; }
    public DbSet<Hook> Hooks { get; set; }
    public DbSet<FishingLine> FishingLines { get; set; }

    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
    {
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().HasMany(x => x.LikesPosts).WithMany(x => x.UsersLikes);
        modelBuilder.Entity<User>().HasMany(x => x.ViewsPosts).WithMany(x => x.UsersViews);
        modelBuilder.Entity<User>().HasMany(x => x.Posts).WithOne(x => x.Author);
    }
}