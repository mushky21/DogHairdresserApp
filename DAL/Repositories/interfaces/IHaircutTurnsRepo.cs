using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.interfaces
{
    public interface IHaircutTurnsRepo
    {
        bool addTurn(HaircutTurn newTurn);
        bool updateTurnByDate(DateTime arrivalDate, int turnId);

        bool updateCanceling(int turnId);

        List<HaircutTurnWithFirstName> getAllTurns();
    }
}
