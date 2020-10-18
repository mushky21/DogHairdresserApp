using DAL;
using DAL.Repositories.interfaces;
using Newtonsoft.Json;
using Server.Models;
using Server.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services.Implemantations
{
    public class UserService : IUserService
    {
        private IUserRepo _userRepo;
        public UserService(IUserRepo userRepo)
        {
            _userRepo = userRepo;
        }
        public string Login(LoginModel loginData)
        {
            User user = _userRepo.getUser(loginData.Username, loginData.Password);
            if (user != null)
            {
                var res = new
                {
                    userId = user.userId
                };
                return JsonConvert.SerializeObject(res);

            }
            else
            {
                var res = new
                {
                    errMsg = "The username or password is incorrect"
                };
                return JsonConvert.SerializeObject(res);
            }
        }

        public string SignUp(UserModel user)
        {
            var foundedUser = _userRepo.getUserByUsername(user.username);
            if (foundedUser != null)
            {
                var res = new
                {
                    errMsg = "Username already axist. Please type again"
                };
            }
            User newUser = new User
            {
                username = user.username,
                password = user.password,
                firstName = user.firstName
            };

            bool isSucceeded = _userRepo.addUser(newUser);

            if (isSucceeded)
            {
                var res = new
                {
                    successMsg = "Registration proccess been successfully",
                };
                return JsonConvert.SerializeObject(res);

            }
            else
            {
                var res = new
                {
                    errMsg = "Temporary problem occured. Try again"
                };
                return JsonConvert.SerializeObject(res);
            }


        }
    }
}
