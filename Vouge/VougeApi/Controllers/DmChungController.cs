using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VougeApi.Models.Danhmuc;
using VougeApi.Services;
using VougeApi.Entities;
using VougeApi.Helpers;

namespace VougeApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DmChungsController : ControllerBase
    {
        private IDmCService _dmCService;
        private IMapper _mapper;

        public DmChungsController(IDmCService dmCService, IMapper mapper)
        {
            _dmCService = dmCService;
            _mapper = mapper;
        }

        // GET: api/DmChungs
        [HttpGet]
        public IActionResult GetAll()
        {
            var dmchung = _dmCService.GetAll();
            var model = _mapper.Map<IList<DmChungModel>>(dmchung);
            return Ok(model);
        }

        // GET: api/DmChungs/5
        [HttpGet("{idDanhMuc}")]
        public IActionResult GetById(int idDanhMuc)
        {
            var dmChung = _dmCService.GetById(idDanhMuc);
            var model = _mapper.Map<DmChungModel>(dmChung);
            return Ok(model);
        }

        // PUT: api/DmChungs/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{idDanhMuc}")]
        public IActionResult Update(int idDanhMuc, [FromBody] UpdateDmChung model)
        {
            // map model to entity and set id
            var dmchung = _mapper.Map<danhMucChung>(model);
            dmchung.idDanhMuc = idDanhMuc;

            try
            {
                // update user 
                _dmCService.Update(dmchung);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        // POST: api/DmChungs
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterDmChung model)
        {
            // map model to entity
            var danhmuc = _mapper.Map<danhMucChung>(model);

            try
            {
                // create user
                _dmCService.Create(danhmuc);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        // DELETE: api/DmChungs/5
        [HttpDelete("{idDanhMuc}")]
        public IActionResult Delete(int idDanhMuc)
        {
            _dmCService.Delete(idDanhMuc);
            return Ok();
        }
    }
}