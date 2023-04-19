using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class Addnewenitities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Alcohols",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Shop = table.Column<string>(type: "text", nullable: false),
                    Pond = table.Column<string>(type: "text", nullable: false),
                    Skill = table.Column<double>(type: "double precision", nullable: false),
                    Max = table.Column<double>(type: "double precision", nullable: false),
                    Hours = table.Column<int>(type: "integer", nullable: false),
                    Portions = table.Column<int>(type: "integer", nullable: false),
                    Price = table.Column<double>(type: "double precision", nullable: false),
                    Ostrog = table.Column<double>(type: "double precision", nullable: false),
                    Portion = table.Column<double>(type: "double precision", nullable: false),
                    Full = table.Column<int>(type: "integer", nullable: false),
                    PerOnePercent = table.Column<double>(type: "double precision", nullable: false),
                    PerOnePercent2 = table.Column<double>(type: "double precision", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Alcohols", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Coils",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    CoilType = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Size = table.Column<int>(type: "integer", nullable: false),
                    Test = table.Column<int>(type: "integer", nullable: false),
                    Peredat = table.Column<double>(type: "double precision", nullable: false),
                    ThreeHundred = table.Column<double>(type: "double precision", nullable: false),
                    Speed = table.Column<double>(type: "double precision", nullable: false),
                    Freak = table.Column<double>(type: "double precision", nullable: false),
                    MechKilo = table.Column<double>(type: "double precision", nullable: false),
                    Level = table.Column<int>(type: "integer", nullable: false),
                    SilverPrice = table.Column<double>(type: "double precision", nullable: false),
                    GoldPrice = table.Column<double>(type: "double precision", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Coils", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FishingLines",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Sort = table.Column<string>(type: "text", nullable: false),
                    Hardness = table.Column<double>(type: "double precision", nullable: false),
                    Thickness = table.Column<double>(type: "double precision", nullable: false),
                    Length1 = table.Column<int>(type: "integer", nullable: false),
                    Price1 = table.Column<int>(type: "integer", nullable: false),
                    Length2 = table.Column<int>(type: "integer", nullable: false),
                    Price2 = table.Column<int>(type: "integer", nullable: false),
                    Length3 = table.Column<int>(type: "integer", nullable: false),
                    Price3 = table.Column<int>(type: "integer", nullable: false),
                    Length4 = table.Column<int>(type: "integer", nullable: false),
                    Price4 = table.Column<int>(type: "integer", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FishingLines", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Hooks",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Type = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Height = table.Column<double>(type: "double precision", nullable: false),
                    S24 = table.Column<double>(type: "double precision", nullable: false),
                    S22 = table.Column<double>(type: "double precision", nullable: false),
                    S20 = table.Column<double>(type: "double precision", nullable: false),
                    S19 = table.Column<double>(type: "double precision", nullable: false),
                    S18 = table.Column<double>(type: "double precision", nullable: false),
                    S17 = table.Column<double>(type: "double precision", nullable: false),
                    S16 = table.Column<double>(type: "double precision", nullable: false),
                    S15 = table.Column<double>(type: "double precision", nullable: false),
                    S14 = table.Column<double>(type: "double precision", nullable: false),
                    S13 = table.Column<double>(type: "double precision", nullable: false),
                    S12 = table.Column<double>(type: "double precision", nullable: false),
                    S11 = table.Column<double>(type: "double precision", nullable: false),
                    S10 = table.Column<double>(type: "double precision", nullable: false),
                    S9 = table.Column<double>(type: "double precision", nullable: false),
                    S8 = table.Column<double>(type: "double precision", nullable: false),
                    S7 = table.Column<double>(type: "double precision", nullable: false),
                    S6 = table.Column<double>(type: "double precision", nullable: false),
                    S5 = table.Column<double>(type: "double precision", nullable: false),
                    S4 = table.Column<double>(type: "double precision", nullable: false),
                    S3 = table.Column<double>(type: "double precision", nullable: false),
                    S2 = table.Column<double>(type: "double precision", nullable: false),
                    S1 = table.Column<double>(type: "double precision", nullable: false),
                    S1Zero = table.Column<double>(type: "double precision", nullable: false),
                    S2Zero = table.Column<double>(type: "double precision", nullable: false),
                    S3Zero = table.Column<double>(type: "double precision", nullable: false),
                    S4Zero = table.Column<double>(type: "double precision", nullable: false),
                    S5Zero = table.Column<double>(type: "double precision", nullable: false),
                    S6Zero = table.Column<double>(type: "double precision", nullable: false),
                    S8Zero = table.Column<double>(type: "double precision", nullable: false),
                    S10Zero = table.Column<double>(type: "double precision", nullable: false),
                    S12Zero = table.Column<double>(type: "double precision", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hooks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Rods",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Type = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Sort = table.Column<string>(type: "text", nullable: false),
                    Power = table.Column<string>(type: "text", nullable: false),
                    Test1 = table.Column<int>(type: "integer", nullable: false),
                    Test2 = table.Column<int>(type: "integer", nullable: false),
                    Length = table.Column<double>(type: "double precision", nullable: false),
                    Feel = table.Column<int>(type: "integer", nullable: false),
                    Hardness = table.Column<int>(type: "integer", nullable: false),
                    Build = table.Column<string>(type: "text", nullable: false),
                    Bonus1 = table.Column<string>(type: "text", nullable: false),
                    Bonus2 = table.Column<string>(type: "text", nullable: false),
                    Bonus3 = table.Column<string>(type: "text", nullable: false),
                    Durability = table.Column<double>(type: "double precision", nullable: false),
                    Level = table.Column<int>(type: "integer", nullable: false),
                    SilverPrice = table.Column<int>(type: "integer", nullable: false),
                    GoldPrice = table.Column<int>(type: "integer", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rods", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Slingshots",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Bait = table.Column<string>(type: "text", nullable: false),
                    Sort = table.Column<string>(type: "text", nullable: false),
                    Score0 = table.Column<int>(type: "integer", nullable: false),
                    Score1 = table.Column<int>(type: "integer", nullable: false),
                    Score2 = table.Column<int>(type: "integer", nullable: false),
                    Score3 = table.Column<int>(type: "integer", nullable: false),
                    Price = table.Column<double>(type: "double precision", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Slingshots", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tools",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    SilverPrice = table.Column<double>(type: "double precision", nullable: false),
                    GoldPrice = table.Column<double>(type: "double precision", nullable: false),
                    Image = table.Column<string>(type: "text", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tools", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Alcohols");

            migrationBuilder.DropTable(
                name: "Coils");

            migrationBuilder.DropTable(
                name: "FishingLines");

            migrationBuilder.DropTable(
                name: "Hooks");

            migrationBuilder.DropTable(
                name: "Rods");

            migrationBuilder.DropTable(
                name: "Slingshots");

            migrationBuilder.DropTable(
                name: "Tools");
        }
    }
}
