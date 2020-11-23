using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VougeApi.Entities;
using VougeApi.Helpers;

namespace VougeApi.Services
{
    public interface ITtCServices
    {
        IEnumerable<tinTucChung> GetAll();
        tinTucChung GetById(int idTinTuc);
        tinTucChung Create(tinTucChung ttChung);
        void Update(tinTucChung ttChung);
        void Delete(int idTinTuc);
    }
    public class TtChungServices : ITtCServices
    {
        private DataContext _context;
        public TtChungServices(DataContext context)
        {
            _context = context;
        }
        public tinTucChung Create(tinTucChung ttChung)
        {
            if (_context.tinTucChung.Any(x => x.tenTinTuc == ttChung.tenTinTuc))
                throw new AppException("Tên tin tức \"" + ttChung.tenTinTuc + "\" đã có");

            _context.tinTucChung.Add(ttChung);
            _context.SaveChanges();

            return ttChung;
        }

        public void Delete(int idTinTuc)
        {
            var ttChung = _context.tinTucChung.Find(idTinTuc);
            if (ttChung != null)
            {
                _context.tinTucChung.Remove(ttChung);
                _context.SaveChanges();
            }
        }

        public IEnumerable<tinTucChung> GetAll()
        {
            return _context.tinTucChung; ;
        }

        public tinTucChung GetById(int idTinTuc)
        {
            return _context.tinTucChung.Find(idTinTuc);
        }

        public void Update(tinTucChung ttChungParam)
        {
            var ttChung = _context.tinTucChung.Find(ttChungParam.idTinTuc);

            if (ttChung == null)
                throw new AppException("Không tìm thấy tin tức");

            //Cập nhập danh mục
            if (!string.IsNullOrWhiteSpace(ttChungParam.tenTinTuc))
                ttChung.tenTinTuc = ttChungParam.tenTinTuc;

            if (!string.IsNullOrWhiteSpace(ttChungParam.ttTinTuc))
                ttChung.ttTinTuc = ttChungParam.ttTinTuc;

            if (!string.IsNullOrWhiteSpace(ttChungParam.ndTinTuc))
                ttChung.ndTinTuc = ttChungParam.ndTinTuc;


            ttChung.idDanhMuc = ttChungParam.idDanhMuc;

            _context.tinTucChung.Update(ttChung);
            _context.SaveChanges();
        }
    }
}
