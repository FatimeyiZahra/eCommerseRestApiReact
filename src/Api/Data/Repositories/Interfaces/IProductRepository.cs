using Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories.Interfaces
{
    public interface IProductRepository : IRepository<Product>
    {
        Task<IEnumerable<Product>> GetIsFreeProduct();
        Task<IEnumerable<Product>> GetAllProducts(string sort, int? min, int? max);
        Task<IEnumerable<Product>> GetIsNewProduct();
        Task<IEnumerable<Product>> GetIsComingProduct();
        Task<IEnumerable<Product>> GetProductsByCategoryId(int categoryId);
        //Task<IEnumerable<Product>> GetAllProductsBySort(string sort);
        Task<int> GetProductsCountByCategoryId(int categoryId);
        Task<Product> GetProductById(int id);
    }

}
