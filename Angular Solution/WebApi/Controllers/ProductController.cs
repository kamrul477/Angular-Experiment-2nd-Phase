﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApi.Controllers
{
    [EnableCors("*", "*", "*")]
    public class ProductController : ApiController
    {
        ProductContext _context = new ProductContext();
        // GET: api/Product
        public IEnumerable<Product> Get()
        {
            var product = new Product
            {
                Id = Guid.NewGuid(),
                CountryOfOrigin = "Bangladesh",
                ManufactureDate = DateTime.Now,
                ProductBasePrice = 300,
                ProductDescription = "example",
                ProductImageUrl = "dfdfd",
                ProductModel = "inital",
                ProductName = "Hammer",
                ProductVendor = "Unknown"
            };
            _context.Products.Add(product);
            _context.SaveChanges();
            return _context.Products.ToList();
        }

        // GET: api/Product/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Product
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Product/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Product/5
        public void Delete(int id)
        {
        }
    }
}
