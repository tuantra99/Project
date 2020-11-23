using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VougeApi.Entities;
using VougeApi.Helpers;
using VougeApi.Models.Tintuc;
using VougeApi.Services;

namespace VougeApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TtChungController : ControllerBase
    {
        private ITtCServices _ttCService;
        private IMapper _mapper;

        public TtChungController(ITtCServices ttCService, IMapper mapper)
        {
            _ttCService = ttCService;
            _mapper = mapper;
        }

        // GET: ttchungs
        [HttpGet]
        public IActionResult GetTtChung()
        {
            var ttchung = _ttCService.GetAll();
            var model = _mapper.Map<IList<TtChungModel>>(ttchung);
            return Ok(model);
        }

        // GET: ttchungs/5
        [HttpGet("{idTinTuc}")]
        public IActionResult GetById(int idTinTuc)
        {
            var ttchung = _ttCService.GetById(idTinTuc);
            var model = _mapper.Map<TtChungModel>(ttchung);
            return Ok(model);
        }


        // PUT: ttchungs/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{idTinTuc}")]
        public IActionResult Update(int idTinTuc, [FromBody] UpdateTtChung model)
        {
            // map model to entity and set id
            var ttchung = _mapper.Map<tinTucChung>(model);
            ttchung.idTinTuc = idTinTuc;

            try
            {
                // update user 
                _ttCService.Update(ttchung);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        // POST: ttchungs
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterTtChung model)
        {
            var tintuc = _mapper.Map<tinTucChung>(model);

            try
            {
                // create user
                _ttCService.Create(tintuc);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        // DELETE: api/TtChungs/5
        [HttpDelete("{idTinTuc}")]
        public IActionResult Delete(int idTinTuc)
        {
            _ttCService.Delete(idTinTuc);
            return Ok();
        }
    }
}
