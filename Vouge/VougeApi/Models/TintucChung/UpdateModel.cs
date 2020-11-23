using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VougeApi.Models.Tintuc
{
    public class UpdateTtChung
    {
        public string tenTinTuc { get; set; }
        public string ttTinTuc { get; set; }
        public string ndTinTuc { get; set; }
        public int? idDanhMuc { get; set; }
    }
}
