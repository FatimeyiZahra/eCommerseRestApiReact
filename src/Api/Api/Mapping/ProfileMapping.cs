using Api.Resources;
using AutoMapper;
using Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Mapping
{
    public class ProfileMapping : Profile
    {
        private static string BaseUrl = "https://localhost:44368/img/";
        public ProfileMapping()
        {
            CreateMap<Category, CategoryResource>();

            CreateMap<Discount, DiscountResource>();

            CreateMap<Product, ProductResource>()
                                             .ForMember(d => d.Photos, opt => opt
                                             .MapFrom(src => src.Photos
                                             .Select(p => BaseUrl + p.Photo)
                                             .ToArray()))
                                             .ForMember(d => d.Discount, opt => opt
                                             .MapFrom(src => src.Discounts
                                             .FirstOrDefault().Discount));
        }
    }
}
