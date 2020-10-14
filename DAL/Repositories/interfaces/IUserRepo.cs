using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.interfaces
{
    public interface IUserRepo
    {
        bool addUser(User newUser);
        User getUser(string username, string password);

        User getUserByUsername(string username);
    }
}
