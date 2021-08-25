using Data.Entities;
using Data.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Z.EntityFramework.Plus;

namespace Data.Repositories.Implementations
{
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        public ProductRepository(ApplicationDbContext context) : base(context) { }
        private ApplicationDbContext _context => Context as ApplicationDbContext;

        public async Task<IEnumerable<Product>> GetAllProducts(string sort, int? min, int? max)
        {
            if (min != null && max != null && !string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "priceAsc":
                        return await _context.Products
                                             .OrderBy(p => p.Price)
                                             .Where(p => p.Price >= min && p.Price <= max)
                                             .Include(p => p.Category)
                                             .Include(p => p.Stocks)
                                             .Include(p => p.Photos)
                                             .Where(p => p.Stocks.Any(s => s.Quantity > 0))
                                             .Include(p => p.Discounts).ThenInclude(p => p.Discount)
                                             .IncludeFilter(p => p.Discounts.FirstOrDefault(d => d.Discount.Status && d.Discount.StartDate <= DateTime.Now && d.Discount.EndDate >= DateTime.Now))
                                             .ToListAsync();

                    //break;
                    case "priceDesc":
                        return await _context.Products
                                             .OrderByDescending(p => p.Price)
                                             .Where(p => p.Price >= min && p.Price <= max)
                                             .Include(p => p.Category)
                                             .Include(p => p.Stocks)
                                             .Include(p => p.Photos)
                                             .Where(p => p.Stocks.Any(s => s.Quantity > 0))
                                             .Include(p => p.Discounts).ThenInclude(p => p.Discount)
                                             .IncludeFilter(p => p.Discounts.FirstOrDefault(d => d.Discount.Status && d.Discount.StartDate <= DateTime.Now && d.Discount.EndDate >= DateTime.Now))
                                            .ToListAsync();
                    //break;
                    default:
                        return await _context.Products.OrderBy(p => p.Name).Include(p => p.Category).Include(p => p.Stocks)
                                             .Include(p => p.Photos)
                                             .Where(p => p.Stocks.Any(s => s.Quantity > 0))
                                             .Include(p => p.Discounts).ThenInclude(p => p.Discount)
                                             .IncludeFilter(p => p.Discounts.FirstOrDefault(d => d.Discount.Status && d.Discount.StartDate <= DateTime.Now && d.Discount.EndDate >= DateTime.Now))
                                            .ToListAsync();
                        //break;
                }
            }
            if (min == null && max == null && !string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "priceAsc":
                        return await _context.Products
                                             .OrderBy(p => p.Price)
                                             //.Where(p => p.Price >= min && p.Price <= max)
                                             .Include(p => p.Category)
                                             .Include(p => p.Stocks)
                                             .Include(p => p.Photos)
                                             .Where(p => p.Stocks.Any(s => s.Quantity > 0))
                                             .Include(p => p.Discounts).ThenInclude(p => p.Discount)
                                             .IncludeFilter(p => p.Discounts.FirstOrDefault(d => d.Discount.Status && d.Discount.StartDate <= DateTime.Now && d.Discount.EndDate >= DateTime.Now))
                                             .ToListAsync();

                    //break;
                    case "priceDesc":
                        return await _context.Products.OrderByDescending(p => p.Price).Include(p => p.Category).Include(p => p.Stocks)
                                             .Include(p => p.Photos)
                                             .Where(p => p.Stocks.Any(s => s.Quantity > 0))
                                             .Include(p => p.Discounts).ThenInclude(p => p.Discount)
                                             .IncludeFilter(p => p.Discounts.FirstOrDefault(d => d.Discount.Status && d.Discount.StartDate <= DateTime.Now && d.Discount.EndDate >= DateTime.Now))
                                            .ToListAsync();
                    //break;
                    default:
                        return await _context.Products.OrderBy(p => p.Name).Include(p => p.Category).Include(p => p.Stocks)
                                             .Include(p => p.Photos)
                                             .Where(p => p.Stocks.Any(s => s.Quantity > 0))
                                             .Include(p => p.Discounts).ThenInclude(p => p.Discount)
                                             .IncludeFilter(p => p.Discounts.FirstOrDefault(d => d.Discount.Status && d.Discount.StartDate <= DateTime.Now && d.Discount.EndDate >= DateTime.Now))
                                            .ToListAsync();
                        //break;
                }
            }

            if (min != null && max != null )
            {
                return await _context.Products
                                              .Where(p => p.Price >= min && p.Price <= max)
                                              .Include(p => p.Category)
                                              .Include(p => p.Stocks)
                                              .Include(p => p.Photos)
                                              .Where(p => p.Stocks.Any(s => s.Quantity > 0))
                                              .Include(p => p.Discounts).ThenInclude(p => p.Discount)
                                              .IncludeFilter(p => p.Discounts.FirstOrDefault(d => d.Discount.Status && d.Discount.StartDate <= DateTime.Now && d.Discount.EndDate >= DateTime.Now))
                                              .ToListAsync();
            }

            return await _context.Products
                                             .OrderByDescending(p => p.Id)
                                             .Include(p => p.Category)
                                             .Include(p => p.Stocks)
                                             .Include(p => p.Photos)
                                             .Where(p => p.Stocks.Any(s => s.Quantity > 0))
                                             .Include(p => p.Discounts).ThenInclude(p => p.Discount)
                                             .IncludeFilter(p => p.Discounts.FirstOrDefault(d => d.Discount.Status && d.Discount.StartDate <= DateTime.Now && d.Discount.EndDate >= DateTime.Now))
                                             .ToListAsync();

        }

      
        public async Task<IEnumerable<Product>> GetIsComingProduct()
        {
            return await _context.Products
                                             .Include(p => p.Category)
                                             .Include(p => p.Stocks)
                                             .Include(p => p.Photos)
                                             .Where(p => p.Status && p.IsComing)
                                             .Where(p => p.Stocks.Any(s => s.Quantity > 0))
                                             .Include(p => p.Discounts).ThenInclude(p => p.Discount)
                                             .IncludeFilter(p => p.Discounts.FirstOrDefault(d => d.Discount.Status && d.Discount.StartDate <= DateTime.Now && d.Discount.EndDate >= DateTime.Now))
                                             .ToListAsync();
        }

        public async Task<IEnumerable<Product>> GetIsFreeProduct()
        {
            return await _context.Products
                                 .Include(p => p.Category)
                                 .Include(p => p.Stocks)
                                 .Include(p => p.Photos)
                                 .Where(p => p.Status && p.IsFree)
                                 .Where(p => p.Stocks.Any(s => s.Quantity > 0))
                                 .Include(p => p.Discounts).ThenInclude(p => p.Discount)
                                 .IncludeFilter(p => p.Discounts.FirstOrDefault(d => d.Discount.Status && d.Discount.StartDate <= DateTime.Now && d.Discount.EndDate >= DateTime.Now))
                                 .ToListAsync();

        }

        public async Task<IEnumerable<Product>> GetIsNewProduct()
        {
            return await _context.Products
                                           .Include(p => p.Category)
                                           .Include(p => p.Stocks)
                                           .Include(p => p.Photos)
                                           .Where(p => p.Stocks.Any(s => s.Quantity > 0))
                                           .Include(p => p.Discounts).ThenInclude(p => p.Discount)
                                           .IncludeFilter(p => p.Discounts.FirstOrDefault(d => d.Discount.Status && d.Discount.StartDate <= DateTime.Now && d.Discount.EndDate >= DateTime.Now))
                                           .ToListAsync();
        }

        public async Task<Product> GetProductById(int id)
        {
            return await _context.Products
                                .Include(p => p.Category)   
                                .Include(s=>s.Stocks)
                                .Include(p => p.Photos)
                                .Include(p => p.Discounts).ThenInclude(p => p.Discount)
                                .IncludeFilter(p => p.Discounts.FirstOrDefault(d => d.Discount.Status && d.Discount.StartDate <= DateTime.Now && d.Discount.EndDate >= DateTime.Now))
                                .Where(p => p.Status && p.Id == id)
                                .Where(p => p.Stocks.Any(s => s.Quantity > 0))
                                .FirstOrDefaultAsync();
        }
        public async Task<IEnumerable<Product>> GetProductsByCategoryId(int categoryId)
        {
            return await _context.Products
                                                      .Include(p => p.Category)
                                                      .Include(p => p.Stocks)
                                                      .Include(p => p.Photos)
                                                      .Where(p => p.Status && p.CategoryId == categoryId)
                                                      .Where(p => p.Stocks.Any(s => s.Quantity > 0))
                                                      .Include(p => p.Discounts).ThenInclude(p => p.Discount)
                                                      .IncludeFilter(p => p.Discounts.FirstOrDefault(d => d.Discount.Status && d.Discount.StartDate <= DateTime.Now && d.Discount.EndDate >= DateTime.Now))
                                                      .OrderByDescending(p => p.AddedDate)
                                                      .ToListAsync();
        }

        public async Task<int> GetProductsCountByCategoryId(int categoryId)
        {
            return await _context.Products
                                           .Include(p => p.Stocks)
                                           .Where(p => p.Status && p.CategoryId == categoryId)
                                           .Where(p => p.Stocks.Any(s => s.Quantity > 0))
                                           .CountAsync();

        }
    }
}
