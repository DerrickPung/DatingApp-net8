using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

// This DTO class is the handle the data transfer between different layers.
//Like want to pass the username and password thru the JSON object to C# method instead of query in url
public class RegisterDto
{
    [Required]
    //[MaxLength(100)]
    public required string Username { get; set; }

    [Required]
    public required string Password { get; set; }
}
