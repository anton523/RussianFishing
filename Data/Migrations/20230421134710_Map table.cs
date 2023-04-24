using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class Maptable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "MapId",
                table: "Fishes",
                type: "text",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Maps",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    TitleImage = table.Column<string>(type: "text", nullable: false),
                    MapImage = table.Column<string>(type: "text", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Maps", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Fishes_MapId",
                table: "Fishes",
                column: "MapId");

            migrationBuilder.AddForeignKey(
                name: "FK_Fishes_Maps_MapId",
                table: "Fishes",
                column: "MapId",
                principalTable: "Maps",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fishes_Maps_MapId",
                table: "Fishes");

            migrationBuilder.DropTable(
                name: "Maps");

            migrationBuilder.DropIndex(
                name: "IX_Fishes_MapId",
                table: "Fishes");

            migrationBuilder.DropColumn(
                name: "MapId",
                table: "Fishes");
        }
    }
}
