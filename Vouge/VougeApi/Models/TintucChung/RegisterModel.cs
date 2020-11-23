using System;
using System.ComponentModel.DataAnnotations;

namespace VougeApi.Models.Tintuc
{
    public class RegisterTtChung
    {
        [Required]
        public string tenTinTuc { get; set; }
        [Required]
        public string ttTinTuc { get; set; }
        [Required]
        public string ndTinTuc { get; set; }
        [Required]
        public int? idDanhMuc { get; set; }
    }
}
