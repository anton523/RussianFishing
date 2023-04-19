using Core.Domains.Posts;

namespace Core.Domains.Users.Repositories;

public interface IUserRepository
{
    Task<User> GetById(string id, CancellationToken cancellationToken);
    Task<User> GetByEmail(string email, CancellationToken cancellationToken);
    Task<IEnumerable<User>> GetAll(CancellationToken cancellationToken);
    Task<IEnumerable<Post>> GetAllUserPosts(string userId, CancellationToken cancellationToken);
    Task Create(User user, CancellationToken cancellationToken);
    Task Update(User user, CancellationToken cancellationToken);
    Task Delete(string id, CancellationToken cancellationToken);
    bool ContainsByEmail(string login);
}