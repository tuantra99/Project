using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VougeApi.Entities;
using VougeApi.Helpers;

namespace VougeApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly UserContext _context;

        public ImagesController(UserContext context)
        {
            _context = context;
        }

        // GET: api/Images
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            try
            {
                var users = _context.Images.ToList();

                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        [HttpPost]
        public IActionResult CreateUser([FromBody] Images user)
        {
            try
            {
                if (user == null)
                {
                    return BadRequest("User object is null");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid model object");
                }

                user.Id = Guid.NewGuid();
                _context.Add(user);
                _context.SaveChanges();

                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        // DELETE: api/Images/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Images>> DeleteImages(Guid id)
        {
            var images = await _context.Images.FindAsync(id);
            if (images == null)
            {
                return NotFound();
            }

            _context.Images.Remove(images);
            await _context.SaveChangesAsync();

            return images;
        }

        private bool ImagesExists(Guid id)
        {
            return _context.Images.Any(e => e.Id == id);
        }
    }
}
