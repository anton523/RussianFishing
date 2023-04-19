using Microsoft.AspNetCore.Http;

namespace Core;

public class ImageUploader
{
    public static async Task<string> UploadImage(IFormFile image, string webRootPath, CancellationToken cancellationToken)
    {
        byte[] bytes;
        using (var stream = new MemoryStream())
        {
            await image.CopyToAsync(stream, cancellationToken);
            bytes = stream.ToArray();
        }

        var name = Guid.NewGuid() + "." + image.FileName.Split(".")[^1];
        var avatarUrl = $"/api/imgs/{name}";

        var savePath = Path.Combine(webRootPath, "api/imgs", name);

        await File.WriteAllBytesAsync(savePath, bytes.ToArray(), cancellationToken);

        return avatarUrl;
    }
}