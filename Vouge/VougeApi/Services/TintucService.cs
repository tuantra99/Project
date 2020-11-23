
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VougeApi.Entities;
using VougeApi.Helpers;

namespace VougeApi.Services
{
    public interface ITintucService
    {
        IEnumerable<tintuc> GetAll();
 /*       tintuc GetByIdTt(int idTinTuc);*/

    }
    public class TintucService : ITintucService
    {
        private DataContext _context;

        public TintucService(DataContext context)
        {
            _context = context;
        }

        public IEnumerable<tintuc> GetAll()
        {
            var chungList = (from e in _context.tinTucChung
                             join d in _context.danhMucChung on e.idDanhMuc equals d.idDanhMuc
                             select new tintuc()
                             {
                                 idTinTuc = e.idTinTuc,
                                 tenDanhMuc = d.tenDanhMuc,
                                 tenTinTuc = e.tenTinTuc,
                                 ttTinTuc = e.ttTinTuc,
                                 ndTinTuc = e.ndTinTuc
                             }).ToList();
            return chungList;
            /*return _context.Baos;*/
        }

       /* public tintuc GetByIdTt(int idTinTuc)
        {
            var chungLists = (from e in _context.tinTucChung
                             join d in _context.danhMucChung
                             on e.idDanhMuc equals d.idDanhMuc
                             where e.idTinTuc == idTinTuc
                             select new tintuc()
                             {
                                 idTinTuc = e.idTinTuc,
                                 tenDanhMuc = d.tenDanhMuc,
                                 tenTinTuc = e.tenTinTuc,
                                 ttTinTuc = e.ttTinTuc,
                                 ndTinTuc = e.ndTinTuc
                             }).ToList();
            *//*return List<chungLists);*//*
            return _context.tintuc.Find(chungLists);
        }*/
    }
}
