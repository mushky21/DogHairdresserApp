using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Services.Interfaces;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HaircutTurnsController : ControllerBase
    {
        private IHaircutTurnService _haircutTurnService;

        public HaircutTurnsController(IHaircutTurnService haircutTurnService)
        {
            _haircutTurnService = haircutTurnService;
        }

        [HttpGet("GetTurns")]
        public IActionResult GetTurns()
        {
            var res = _haircutTurnService.getTurns();
            return Ok(res);

        }

        [HttpPost("AddTurn")]
        public IActionResult AddTurn(HaircutTurnModel turn)
        {
           var myDt = DateTime.SpecifyKind(turn.arrivalDate, DateTimeKind.Local);
            var res = _haircutTurnService.addTurn(turn);
            return Ok(res);

        }

        [HttpGet("DeleteTurn")]
        public IActionResult DeleteTurn(int turnId)
        {
            var res = _haircutTurnService.deleteTurn(turnId);
            return Ok(res);

        }

        [HttpPost("EditTurn")]
        public IActionResult EditTurn(UpdateTurn updateData)
        {
            var res = _haircutTurnService.editTurn(updateData);
            return Ok(res);

        }

    }
}
