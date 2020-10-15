using DAL;
using Microsoft.AspNetCore.Mvc;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services.Interfaces
{
    public interface IUserService
    {
        string Login(LoginModel loginData);

        string SignUp(UserModel user);
    }
}
