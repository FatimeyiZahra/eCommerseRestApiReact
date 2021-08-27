using Api.Resources;
using Api.Resources.User;
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

            CreateMap<Stock, StockResource>();

            CreateMap<Discount, DiscountResource>();

            CreateMap<Product, ProductResource>()
                                             .ForMember(d => d.Photos, opt => opt
                                             .MapFrom(src => src.Photos
                                             .Select(p => BaseUrl + p.Photo)
                                             .ToArray()))
                                              .ForMember(d => d.Quantity, opt => opt.MapFrom(src => src.Stocks.FirstOrDefault().Quantity))
                                             .ForMember(d => d.Discount, opt => opt
                                             .MapFrom(src => src.Discounts
                                             .FirstOrDefault().Discount));
            CreateMap<RegisterResource, User>()
                                    .ForMember(d => d.Status, opt => 
                                    opt.MapFrom(src => true))
                                    .ForMember(d => d.AddedDate,
                                    opt => opt.MapFrom(src => DateTime.Now))
                                    .ForMember(d => d.Password, opt => 
                                    opt.MapFrom(src => CryptoHelper.Crypto
                                    .HashPassword(src.Password)))
                                    .ForMember(d => d.Token, opt => 
                                    opt.MapFrom(src => CryptoHelper.Crypto.HashPassword(DateTime.Now.ToString())));

            CreateMap<User, UserResource>()
                .ForMember(d => d.RegisterDate, opt => opt.MapFrom(src => src.AddedDate.ToString("dd.MM.yyyy")));
        }
    }
}
