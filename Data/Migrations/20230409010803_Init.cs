using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class Init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Fishes",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    ShortName = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    L1 = table.Column<int>(type: "integer", nullable: false),
                    L2 = table.Column<int>(type: "integer", nullable: false),
                    L3 = table.Column<int>(type: "integer", nullable: false),
                    Farm = table.Column<int>(type: "integer", nullable: false),
                    Experience = table.Column<int>(type: "integer", nullable: false),
                    Biting = table.Column<int>(type: "integer", nullable: false),
                    Trophy = table.Column<int>(type: "integer", nullable: false),
                    Image = table.Column<string>(type: "text", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fishes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "NaturalBaits",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Type = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Sort = table.Column<string>(type: "text", nullable: true),
                    SilverPrice = table.Column<double>(type: "double precision", nullable: true),
                    GoldPrice = table.Column<double>(type: "double precision", nullable: true),
                    Skill = table.Column<int>(type: "integer", nullable: true),
                    Weight = table.Column<double>(type: "double precision", nullable: true),
                    Bait = table.Column<string>(type: "text", nullable: true),
                    Manufacturer = table.Column<string>(type: "text", nullable: true),
                    Small = table.Column<int>(type: "integer", nullable: true),
                    Medium = table.Column<int>(type: "integer", nullable: true),
                    Big = table.Column<int>(type: "integer", nullable: true),
                    Huge = table.Column<int>(type: "integer", nullable: true),
                    Soluble = table.Column<bool>(type: "boolean", nullable: true),
                    Amount = table.Column<int>(type: "integer", nullable: true),
                    Image = table.Column<string>(type: "text", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NaturalBaits", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UnnaturalBaits",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Type = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Weight = table.Column<double>(type: "double precision", nullable: false),
                    Manufacturer = table.Column<string>(type: "text", nullable: true),
                    Size = table.Column<string>(type: "text", nullable: true),
                    Floatation = table.Column<string>(type: "text", nullable: true),
                    Tees = table.Column<string>(type: "text", nullable: true),
                    Variants = table.Column<int>(type: "integer", nullable: true),
                    Price = table.Column<double>(type: "double precision", nullable: true),
                    Brand = table.Column<string>(type: "text", nullable: true),
                    Sort = table.Column<string>(type: "text", nullable: true),
                    Shop = table.Column<string>(type: "text", nullable: true),
                    Image = table.Column<string>(type: "text", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnnaturalBaits", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Login = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false),
                    AvatarUri = table.Column<string>(type: "text", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FishNaturalBait",
                columns: table => new
                {
                    FishesId = table.Column<string>(type: "text", nullable: false),
                    NaturalBaitsId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FishNaturalBait", x => new { x.FishesId, x.NaturalBaitsId });
                    table.ForeignKey(
                        name: "FK_FishNaturalBait_Fishes_FishesId",
                        column: x => x.FishesId,
                        principalTable: "Fishes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FishNaturalBait_NaturalBaits_NaturalBaitsId",
                        column: x => x.NaturalBaitsId,
                        principalTable: "NaturalBaits",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FishUnnaturalBait",
                columns: table => new
                {
                    FishesId = table.Column<string>(type: "text", nullable: false),
                    UnnaturalBaitsId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FishUnnaturalBait", x => new { x.FishesId, x.UnnaturalBaitsId });
                    table.ForeignKey(
                        name: "FK_FishUnnaturalBait_Fishes_FishesId",
                        column: x => x.FishesId,
                        principalTable: "Fishes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FishUnnaturalBait_UnnaturalBaits_UnnaturalBaitsId",
                        column: x => x.UnnaturalBaitsId,
                        principalTable: "UnnaturalBaits",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Likes = table.Column<int>(type: "integer", nullable: false),
                    Views = table.Column<int>(type: "integer", nullable: false),
                    AuthorId = table.Column<string>(type: "text", nullable: false),
                    Text = table.Column<string>(type: "text", nullable: true),
                    Image = table.Column<string>(type: "text", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Posts_Users_AuthorId",
                        column: x => x.AuthorId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FishNaturalBait_NaturalBaitsId",
                table: "FishNaturalBait",
                column: "NaturalBaitsId");

            migrationBuilder.CreateIndex(
                name: "IX_FishUnnaturalBait_UnnaturalBaitsId",
                table: "FishUnnaturalBait",
                column: "UnnaturalBaitsId");

            migrationBuilder.CreateIndex(
                name: "IX_Posts_AuthorId",
                table: "Posts",
                column: "AuthorId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FishNaturalBait");

            migrationBuilder.DropTable(
                name: "FishUnnaturalBait");

            migrationBuilder.DropTable(
                name: "Posts");

            migrationBuilder.DropTable(
                name: "NaturalBaits");

            migrationBuilder.DropTable(
                name: "Fishes");

            migrationBuilder.DropTable(
                name: "UnnaturalBaits");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
