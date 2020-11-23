using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace VougeApi.Entities
{
    public partial class tinTucChung
    {
        [Key]
        public int idTinTuc { get; set; }
        public string tenTinTuc { get; set; }
        public string ttTinTuc { get; set; }
        public string ndTinTuc { get; set; }
        public int? idDanhMuc { get; set; }
    }
}
