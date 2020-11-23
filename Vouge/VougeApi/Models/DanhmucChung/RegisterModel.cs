using System;
using System.ComponentModel.DataAnnotations;

namespace VougeApi.Models.Danhmuc
{
    public class RegisterDmChung
    {
        [Required]
        public string tenDanhMuc { get; set; }
    }
}
