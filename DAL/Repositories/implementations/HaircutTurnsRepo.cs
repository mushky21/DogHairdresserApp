using DAL.models;
using DAL.Repositories.interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.implementations
{
    public class HaircutTurnsRepo : IHaircutTurnsRepo
    {
        private HairdresserDBEntities _context = new HairdresserDBEntities();
        public bool addTurn(HaircutTurn newTurn)
        {
            _context.HaircutTurns.Add(newTurn);
            int addedRows = _context.SaveChanges();
            return addedRows > 0;
        }

        //get turn which arrival date is not been over
        public  List<HaircutTurnWithFirstName> getAllTurns()
        {
            var filtered = from turn in _context.HaircutTurns
                           join user in _context.Users on turn.userId equals user.userId
                           where !turn.isCanceled && turn.arrivalDate >= DateTime.Now
                           orderby turn.arrivalDate ascending
                           select new HaircutTurnWithFirstName()
                           {
                               FirstName = user.firstName,
                               dateOfRequest = turn.dateOfRequest,
                               arrivalDate = turn.arrivalDate,
                               userId = turn.userId,
                               Id = turn.Id
                           }; ;
            //try
            //{
                var res = filtered.ToList();
            //}
            //catch(Exception e)
            //{
                  
            //}
            return filtered.ToList();

        }

        public bool updateCanceling(int turnId)
        {
            int updatedRows = _context.Database.ExecuteSqlCommand("SP_UpdateCanelingOfTurn @p0", turnId);
            return Math.Abs(updatedRows) > 0;
        }

        public bool updateTurnByDate(DateTime arrivalDate, int turnId)
        {
            int updated = 0;
            var foundedTurn = _context.HaircutTurns.FirstOrDefault(turn => turn.Id == turnId);
            if (foundedTurn != null)
            {
                foundedTurn.arrivalDate = arrivalDate;
                updated = _context.SaveChanges();
            }
            return updated > 0;

        }
    }
}
