using Data.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public interface IUnitOfWork
    {
        ICategoryRepository Category { get; }
        IDiscountProductRepository DiscountProduct { get; }
        IDiscountRepository Discount { get; }
        IProductPhotoRepository ProductPhoto { get; }
        IProductRepository Product { get; }
        IStockRepository Stock { get; }
        Task<int> CommitAsync();
    }

}
