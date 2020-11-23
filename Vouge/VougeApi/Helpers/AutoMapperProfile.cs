
using AutoMapper;
using VougeApi.Entities;
using VougeApi.Models.Danhmuc;
using VougeApi.Models.Tintuc;
using VougeApi.Models.Users;

namespace VougeApi.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Users, UserModel>();
            CreateMap<RegisterUser, Users>();
            CreateMap<UpdateUser, Users>();

            CreateMap<danhMucChung, DmChungModel>();
            CreateMap<RegisterDmChung, danhMucChung>();
            CreateMap<UpdateDmChung, danhMucChung>();

            CreateMap<tinTucChung, TtChungModel>();
            CreateMap<RegisterTtChung, tinTucChung>();
            CreateMap<UpdateTtChung, tinTucChung>();

            CreateMap<tintuc, TintucModel>();
        }
    }
}
