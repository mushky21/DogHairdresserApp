﻿using DAL;
using DAL.models;
using DAL.Repositories.implementations;
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
    public class HaircutTurnService : IHaircutTurnService
    {
        private IHaircutTurnsRepo _haircutTurnsRepo;

        public HaircutTurnService(IHaircutTurnsRepo haircutTurnsRepo)
        {
            _haircutTurnsRepo = haircutTurnsRepo;
        }

        public string addTurn(HaircutTurnModel turn)
        {
            HaircutTurn newTurn = new HaircutTurn
            {
                userId = turn.userId,
                arrivalDate = Convert.ToDateTime(turn.arrivalDate),
                dateOfRequest = Convert.ToDateTime(turn.dateOfRequest)
            };
            bool isSucceeded = _haircutTurnsRepo.addTurn(newTurn);

            if (isSucceeded)
            {
                var res = new
                {
                    successMsg = "Your turn been added successfully",
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

        public string deleteTurn(int turnId)
        {
            bool isSucceeded = _haircutTurnsRepo.updateCanceling(turnId);
            if (isSucceeded)
            {
                var res = new
                {
                    successMsg = "Your turn been deleted successfully",
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

        public string editTurn(UpdateTurn updatedData)
        {
            bool isSucceeded = _haircutTurnsRepo.updateTurnByDate(Convert.ToDateTime(updatedData.ArrivalDate), updatedData.TurnId);
            if (isSucceeded)
            {
                var res = new
                {
                    successMsg = "Your turn been edited successfully",
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

        public  List<HaircutTurnWithFirstName> getTurns()
        {
            List<HaircutTurnWithFirstName> turns =  _haircutTurnsRepo.getAllTurns();
            return turns;
        }
    }
}
