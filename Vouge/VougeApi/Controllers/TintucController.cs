using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VougeApi.Services;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VougeApi.Entities;
using VougeApi.Helpers;
using VougeApi.Models.Tintuc;

namespace VougeApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TintucController : ControllerBase
    {
        private ITintucService _baoService;
        private IMapper _mapper;
        private DataContext _context;

        public TintucController(ITintucService baoService, IMapper mapper, DataContext context)
        {
            _baoService = baoService;
            _mapper = mapper;
            _context = context;
        }

        // GET: api/Baos
        [HttpGet]
        public IActionResult GetAll()
        {
            var baos = _baoService.GetAll();
            var model = _mapper.Map<IList<TintucModel>>(baos);
            return Ok(model);
        }

        // GET: api/Baos/5
        [HttpGet("tintuc/{idTinTuc}")]
        public IActionResult GetByIdTt(int idTinTuc)
        {
            /*var bao = _baoService.GetByName(tenTinTuc);
            var model = _mapper.Map<TtChungModel>(bao);
            return Ok(model);*/
            var chungList = (from e in _context.tinTucChung
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
            return Ok(chungList);
        }

        [HttpGet("danhmuc/{idDanhMuc}")]
        public IActionResult GetByIdDm(int idDanhMuc)
        {
            /*var bao = _baoService.GetByName(tenTinTuc);
            var model = _mapper.Map<TtChungModel>(bao);
            return Ok(model);*/
            var chungList = (from e in _context.tinTucChung
                             join d in _context.danhMucChung on e.idDanhMuc equals d.idDanhMuc
                             where d.idDanhMuc == idDanhMuc
                             select new tintuc()
                             {
                                 idTinTuc = e.idTinTuc,
                                 tenDanhMuc = d.tenDanhMuc,
                                 tenTinTuc = e.tenTinTuc,
                                 ttTinTuc = e.ttTinTuc,
                                 ndTinTuc = e.ndTinTuc
                             }).ToList();
            return Ok(chungList);
        }

    }
}
