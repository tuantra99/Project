using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace VougeApi.Entities
{
    public partial class Users
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Username { get; set; }
    }
}
