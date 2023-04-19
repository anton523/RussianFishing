using API.Controllers.Images.Dto;
using Core;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers.Images;

[ApiController]
[Route("/api/images")]
public class ImagesController
{
    private readonly IWebHostEnvironment _webHostEnvironment;

    public ImagesController(IWebHostEnvironment webHostEnvironment)
    {
        _webHostEnvironment = webHostEnvironment;
    }

    [HttpPost]
    [Route("upload-image")]
    public async Task<string> UploadImage([FromForm] UploadImageDto imageDto, CancellationToken cancellationToken)
    {
        return await ImageUploader.UploadImage(imageDto.Image, _webHostEnvironment.WebRootPath, cancellationToken);
    }
}