using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;
using VougeApi.Entities;

namespace VougeApi.Helpers
{
    public partial class DataContext : DbContext
    {
        protected readonly IConfiguration Configuration;
        public DataContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public DbSet<danhMucChung> danhMucChung { get; set; }
        public DbSet<tinTucChung> tinTucChung { get; set; }
        public DbSet<Users> Users { get; set; }
        public DbSet<tintuc> tintuc { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(Configuration.GetConnectionString("VougeAPiDB"));
            }
        }
    }
}
