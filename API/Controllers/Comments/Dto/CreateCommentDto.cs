namespace API.Controllers.Comments.Dto;

public class CreateCommentDto
{
    public string PostId { get; set; }
    public string Text { get; set; }
}