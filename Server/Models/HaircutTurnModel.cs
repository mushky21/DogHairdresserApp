using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class HaircutTurnModel
    {
        public long userId { get; set; }
        public string arrivalDate { get; set; }
        public string dateOfRequest { get; set; }
    }
}
