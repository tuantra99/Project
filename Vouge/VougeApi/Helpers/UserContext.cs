using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;
using VougeApi.Entities;

namespace VougeApi.Helpers
{
    public partial class UserContext : DbContext
    {
        protected readonly IConfiguration Configuration;
        public UserContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(Configuration.GetConnectionString("connectionString"));
            }
        }

        public DbSet<Images> Images { get; set; }
    }
}
