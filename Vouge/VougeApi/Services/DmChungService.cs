using VougeApi.Entities;
using VougeApi.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VougeApi.Services
{
    public interface IDmCService
    {
        IEnumerable<danhMucChung> GetAll();
        danhMucChung GetById(int idDanhMuc);
        danhMucChung Create(danhMucChung dmChung);
        void Update(danhMucChung dmChung);
        void Delete(int idDanhMuc);
    }
    public class DmChungService : IDmCService
    {
        private DataContext _context;

        public DmChungService(DataContext context)
        {
            _context = context;
        }

        public danhMucChung Create(danhMucChung dmChung)
        {
            if (_context.danhMucChung.Any(x => x.tenDanhMuc == dmChung.tenDanhMuc))
                throw new AppException("Tên danh mục \"" + dmChung.tenDanhMuc + "\" đã có");

            _context.danhMucChung.Add(dmChung);
            _context.SaveChanges();

            return dmChung;
        }

        public void Delete(int idDanhMuc)
        {
            var dmChung = _context.danhMucChung.Find(idDanhMuc);
            if (dmChung != null)
            {
                _context.danhMucChung.Remove(dmChung);
                _context.SaveChanges();
            }
        }

        public IEnumerable<danhMucChung> GetAll()
        {
            return _context.danhMucChung;
        }

        public danhMucChung GetById(int idDanhMuc)
        {
            return _context.danhMucChung.Find(idDanhMuc);
        }

        public void Update(danhMucChung dmChungParam)
        {
            var dmChung  = _context.danhMucChung.Find(dmChungParam.idDanhMuc);

            if (dmChung == null)
                throw new AppException("Không tìm thấy danh mục");

            //Cập nhập danh mục
            if (!string.IsNullOrWhiteSpace(dmChungParam.tenDanhMuc))
                dmChung.tenDanhMuc = dmChungParam.tenDanhMuc;

            _context.danhMucChung.Update(dmChung);
            _context.SaveChanges();
        }
    }
}
