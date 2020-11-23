using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VougeApi.Entities
{
    public partial class tintuc
    {
        [Key]
        public int idTinTuc { get; set; }
        public string tenDanhMuc { get; set; }
        public string tenTinTuc { get; set; }
        public string ttTinTuc { get; set; }
        public string ndTinTuc { get; set; }
    }
}
