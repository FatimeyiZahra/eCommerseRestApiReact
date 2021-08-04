﻿using Data.Entities;
using Data.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Repositories.Implementations
{
    public class DiscountProductRepository : Repository<DiscountProduct>, IDiscountProductRepository
    {
        public DiscountProductRepository(ApplicationDbContext context) : base(context) { }
    }
}
