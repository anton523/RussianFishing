using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class Updatefishes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fishes_Maps_MapId",
                table: "Fishes");

            migrationBuilder.DropIndex(
                name: "IX_Fishes_MapId",
                table: "Fishes");

            migrationBuilder.DropColumn(
                name: "MapId",
                table: "Fishes");

            migrationBuilder.CreateTable(
                name: "FishMap",
                columns: table => new
                {
                    FishesId = table.Column<string>(type: "text", nullable: false),
                    MapsId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FishMap", x => new { x.FishesId, x.MapsId });
                    table.ForeignKey(
                        name: "FK_FishMap_Fishes_FishesId",
                        column: x => x.FishesId,
                        principalTable: "Fishes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FishMap_Maps_MapsId",
                        column: x => x.MapsId,
                        principalTable: "Maps",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FishMap_MapsId",
                table: "FishMap",
                column: "MapsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FishMap");

            migrationBuilder.AddColumn<string>(
                name: "MapId",
                table: "Fishes",
                type: "text",
                nullable: true);

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
    }
}
