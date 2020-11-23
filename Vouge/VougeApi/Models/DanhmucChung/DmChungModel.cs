using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VougeApi.Models.Danhmuc
{
    public class DmChungModel
    {
        [Key]
        public int idDanhMuc { get; set; }
        public string tenDanhMuc { get; set; }
    }
}
