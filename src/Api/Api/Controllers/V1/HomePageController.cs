﻿using Api.Resources;
using AutoMapper;
using Data;
using Data.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers.V1
{
    [Route("V1/HomePage")]
    [ApiController]
    public class HomePageController : ControllerBase
    {

        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public HomePageController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [Route("categories")]
        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await _unitOfWork.Category.GetAllOrderedAsync();

            var categoryResources = _mapper.Map<IEnumerable<Category>, IEnumerable<CategoryResource>>(categories);

            return Ok(categoryResources);

        }

        [Route("free-product")]
        [HttpGet]
        public async Task<IActionResult> GetFreeProduct()
        {
            var products = await _unitOfWork.Product.GetIsFreeProduct();
            var productResources = _mapper.Map<IEnumerable<Product>, IEnumerable<ProductResource>>(products);

            return Ok(productResources);

        }

        [Route("coming-product")]
        [HttpGet]
        public async Task<IActionResult> GetComingProduct()
        {
            var products = await _unitOfWork.Product.GetIsComingProduct();
            var productResources = _mapper.Map<IEnumerable<Product>, IEnumerable<ProductResource>>(products);

            return Ok(productResources);

        }

        [Route("all-products")]
        [HttpGet]
        public async Task<IActionResult> GetAllProducts([FromQuery] string sort,
                                                             [FromQuery] int? min,
                                                             [FromQuery] int? max)
        {
            var products = await _unitOfWork.Product.GetAllProducts(sort,min,max);
            var productResources = _mapper.Map<IEnumerable<Product>, IEnumerable<ProductResource>>(products);

            return Ok(productResources);

        }

        //[Route("sort-products")]
        //[HttpGet]
        //public async Task<IActionResult> GetAllProducts([FromQuery] string sort)
        //{
        //    var products = await _unitOfWork.Product.GetAllProductsBySort(sort);
        //    var productResources = _mapper.Map<IEnumerable<Product>, IEnumerable<ProductResource>>(products);
        //    return Ok(productResources);

        //}
         //get products by category
        [Route("products")]
        [HttpGet]
        public async Task<IActionResult> GetProductsByCategory([FromQuery] int categoryId,
                                                             [FromQuery] int page = 1)
        {
            var category = await _unitOfWork.Category.GetByIdAsync(categoryId);

            if (category == null) return NotFound();

            var totalProducts = await _unitOfWork.Product.GetProductsCountByCategoryId(categoryId);

            var products = await _unitOfWork.Product.GetProductsByCategoryId(categoryId, page);

            var productResources = _mapper.Map<IEnumerable<Product>, IEnumerable<ProductResource>>(products);
            return Ok(new
            {
                products = productResources,
                pagination = new
                {
                    current = page,
                    totalPage = Convert.ToInt32(Math.Ceiling(totalProducts / 12.0))
                }
            });
        }

        //get product by id
        [Route("product/{id}")]
        [HttpGet]
        public async Task<IActionResult> GetProductById(int id)
        {
            var product = await _unitOfWork.Product.GetProductById(id);

            if (product == null) return NotFound();

            var productResource = _mapper.Map<Product, ProductResource>(product);

            return Ok(productResource);
        }

        [Route("relative-products")]
        [HttpGet]
        public async Task<IActionResult> GetRelativeProductsById([FromQuery] int productId)
        {

            var product = await _unitOfWork.Product.GetByIdAsync(productId);

            if (product == null) return NotFound();

            var products = await _unitOfWork.Product.GetProductsByCategoryId(product.CategoryId, 1);

            var productList = products.ToList();

            productList.RemoveAll(p => p.Id == product.Id);

            var productResources = _mapper.Map<IEnumerable<Product>, IEnumerable<ProductResource>>(productList.Take(3));

            return Ok(productResources);

        }



    }



}
