using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Server.Models;
using Server.Services.Interfaces;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }
        // GET: api/users/login?username=mushky&password=mushky23
        [HttpGet("Login")]
        public IActionResult Login(string username, string password)
        {
            LoginModel loginModel = new LoginModel
            {
                Username = username,
                Password = password
            };
            var res = _userService.Login(loginModel);
            //if (foundedUser != null)
            //    return Ok(new { userId = foundedUser.userId });
            return Ok(res);

        }

        [HttpPost("SignUp")]
        //[FromBody] string username, [FromBody] string password, [FromBody] string firstName
        public IActionResult SignUp(UserModel user)
        {
         var res =   _userService.SignUp(user);
            //var res = _userService.SignUp(new UserModel
            //{
            //    username = username,
            //    password = password,
            //    firstName = firstName
            //});
            //if (foundedUser != null)
            //    return Ok(new { userId = foundedUser.userId });
            return Ok(res);

    }
}
}
