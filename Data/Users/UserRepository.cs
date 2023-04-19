using System.Data.Entity.Core;
using Core.Domains.Posts;
using Core.Domains.Users;
using Core.Domains.Users.Repositories;
using Data.Contexts;
using Microsoft.EntityFrameworkCore;

namespace Data.Users;

public class UserRepository : IUserRepository
{
    private readonly ApplicationContext _applicationContext;

    public UserRepository(ApplicationContext applicationContext)
    {
        _applicationContext = applicationContext;
    }

    public async Task<User> GetById(string id, CancellationToken cancellationToken)
    {
        var entity = await _applicationContext.Users.FirstOrDefaultAsync(it => it.Id == id, cancellationToken);

        if (entity == null)
            throw new ObjectNotFoundException($"User with Id = {id} not found");

        return entity;
    }

    public async Task<User> GetByEmail(string email, CancellationToken cancellationToken)
    {
        var entity = await _applicationContext.Users.FirstOrDefaultAsync(it => it.Email == email, cancellationToken);

        if (entity == null)
            throw new ObjectNotFoundException($"User with Email = {email} not found");

        return entity;
    }

    public async Task<IEnumerable<User>> GetAll(CancellationToken cancellationToken)
    {
        return await _applicationContext.Users.ToListAsync(cancellationToken);
    }

    public async Task<IEnumerable<Post>> GetAllUserPosts(string userId, CancellationToken cancellationToken)
    {
        var entity = await _applicationContext.Users.FirstOrDefaultAsync(x => x.Id == userId, cancellationToken);

        if (entity == null)
            throw new ObjectNotFoundException($"User with Id = {userId} not found");

        await _applicationContext.Entry(entity).Collection(x => x.Posts).LoadAsync(cancellationToken);

        return entity.Posts;
    }

    public async Task Create(User user, CancellationToken cancellationToken)
    {
        await _applicationContext.Users.AddAsync(user, cancellationToken);
    }

    public async Task Delete(string id, CancellationToken cancellationToken)
    {
        var entity = await _applicationContext.Users.FirstOrDefaultAsync(it => it.Id == id, cancellationToken);

        if (entity == null)
            throw new ObjectNotFoundException($"User with id = {id} not found");

        _applicationContext.Users.Remove(entity);
    }

    public async Task Update(User user, CancellationToken cancellationToken)
    {
        var entity = await _applicationContext.Users.FirstOrDefaultAsync(it => it.Id == user.Id, cancellationToken);
        
        if (entity == null)
            throw new ObjectNotFoundException($"User with id = {user.Id} not found");
        
        entity.Login = user.Login;
        entity.Email = user.Email;
        entity.AvatarUri = user.AvatarUri;
        entity.Description = user.Description;
    }

    public bool ContainsByEmail(string email)
    {
        return _applicationContext
            .Users
            .Any(user => user.Email == email);
    }
}