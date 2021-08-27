using Data.Repositories.Implementations;
using Data.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;

        private CategoryRepository _categoryRepository;
        private DiscountProductRepository _discountProductRepository;
        private DiscountRepository _discountRepository;
        private ProductPhotoRepository _productPhotoRepository;
        private ProductRepository _productRepository;
        private StockRepository _stockRepository;
        private UserRepository _userRepository;

        public UnitOfWork(ApplicationDbContext context)
        {
            this._context = context;
        }

        public ICategoryRepository Category => _categoryRepository ??= new CategoryRepository(_context);

        public IDiscountProductRepository DiscountProduct => _discountProductRepository ??= new DiscountProductRepository(_context);

        public IDiscountRepository Discount => _discountRepository ??= new DiscountRepository(_context);


        public IProductPhotoRepository ProductPhoto => _productPhotoRepository ??= new ProductPhotoRepository(_context);

        public IProductRepository Product => _productRepository ??= new ProductRepository(_context);

        public IStockRepository Stock => _stockRepository ??= new StockRepository(_context);
        public IUserRepository User => _userRepository ??= new UserRepository(_context);



        public async Task<int> CommitAsync()
        {
            return await _context.SaveChangesAsync();
        }
    }

}
