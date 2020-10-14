using DAL.Repositories.interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.implementations
{
    public class UserRepo : IUserRepo
    {
        private HairdresserDBEntities _context = new HairdresserDBEntities();

        public bool addUser(User newUser)
        {
            _context.Users.Add(newUser);
            int addedRows = _context.SaveChanges();
            return addedRows > 0;

        }

        public User getUser(string username, string password)
        {

            User foundedUser = _context.Users.FirstOrDefault((user) => user.password == password && user.username == username);
            return foundedUser;


        }

        public User getUserByUsername(string username)
        {

            User foundedUser = _context.Users.FirstOrDefault((user) => user.username == username);
            return foundedUser;
        }
    }
}
