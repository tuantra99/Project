using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace VougeApi.Entities
{
    public  partial class danhMucChung
    {
        [Key]
        public int idDanhMuc { get; set; }
        public string tenDanhMuc { get; set; }
    }
}
