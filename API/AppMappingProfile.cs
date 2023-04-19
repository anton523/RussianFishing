using API.Controllers.Contents.Baits.Dto;
using API.Controllers.Contents.Fishes.Dto;
using API.Controllers.Contents.Foods.Dto;
using API.Controllers.Contents.Gears.Dto;
using API.Controllers.Contents.Hooks.Dto;
using API.Controllers.Contents.Tools.Dto;
using API.Controllers.Users.Dto;
using AutoMapper;
using Core.Domains.Baits;
using Core.Domains.Fishes;
using Core.Domains.Foods;
using Core.Domains.Gears;
using Core.Domains.Hooks;
using Core.Domains.Tools;
using Core.Domains.Users;

namespace API;

public class AppMappingProfile : Profile
{
    public AppMappingProfile()
    {
        CreateMap<User, UserDto>().ReverseMap();
        CreateMap<User, CreateUserDto>().ReverseMap();
        CreateMap<Fish, FishDto>().ReverseMap();
        CreateMap<NaturalBait, NaturalBaitDto>().ReverseMap();
        CreateMap<UnnaturalBait, UnnaturalBaitDto>().ReverseMap();
        CreateMap<CreateUnnaturalBaitDto, UnnaturalBait>()
            .ForMember(
                x => x.Image, 
                opt => opt.Ignore()
                );
        CreateMap<Alcohol, CreateAlcoholDto>().ReverseMap();
        CreateMap<Coil, CreateCoilDto>().ReverseMap();
        CreateMap<Rod, CreateRodDto>().ReverseMap();
        CreateMap<FishingLine, CreateFishingLineDto>().ReverseMap();
        CreateMap<Hook, CreateHookDto>().ReverseMap();
        CreateMap<Slingshot, CreateSlingshotDto>().ReverseMap();
        CreateMap<CreateToolDto, Tool>()
            .ForMember(
                x => x.Image, 
                opt => opt.Ignore()
            );
    }
}