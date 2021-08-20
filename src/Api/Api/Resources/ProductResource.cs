using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Resources
{
    public class ProductResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Desc { get; set; }
        public decimal Price { get; set; }
        public bool IsComing { get; set; }
        public bool IsNew { get; set; }
        public double Quantity { get; set; }
        public DateTime AddedDate { get; set; }
        public DiscountResource Discount { get; set; }
        public string[] Photos { get; set; }
        public CategoryResource Category { get; set; }

    }

}
