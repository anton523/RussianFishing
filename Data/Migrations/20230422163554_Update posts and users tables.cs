using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class Updatepostsanduserstables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PostUser",
                columns: table => new
                {
                    LikesPostsId = table.Column<string>(type: "text", nullable: false),
                    UsersLikesId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PostUser", x => new { x.LikesPostsId, x.UsersLikesId });
                    table.ForeignKey(
                        name: "FK_PostUser_Posts_LikesPostsId",
                        column: x => x.LikesPostsId,
                        principalTable: "Posts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PostUser_Users_UsersLikesId",
                        column: x => x.UsersLikesId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PostUser1",
                columns: table => new
                {
                    UsersViewsId = table.Column<string>(type: "text", nullable: false),
                    ViewsPostsId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PostUser1", x => new { x.UsersViewsId, x.ViewsPostsId });
                    table.ForeignKey(
                        name: "FK_PostUser1_Posts_ViewsPostsId",
                        column: x => x.ViewsPostsId,
                        principalTable: "Posts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PostUser1_Users_UsersViewsId",
                        column: x => x.UsersViewsId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PostUser_UsersLikesId",
                table: "PostUser",
                column: "UsersLikesId");

            migrationBuilder.CreateIndex(
                name: "IX_PostUser1_ViewsPostsId",
                table: "PostUser1",
                column: "ViewsPostsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PostUser");

            migrationBuilder.DropTable(
                name: "PostUser1");
        }
    }
}
