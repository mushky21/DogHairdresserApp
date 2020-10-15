using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Services.Interfaces
{
    public interface IHaircutTurnService
    {
        string deleteTurn(int turnId);

        string editTurn(DateTime arrivalDate, int turnId);

        string getTurns();

        string addTurn(HaircutTurnModel turn);
    }
}
