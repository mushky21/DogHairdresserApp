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
    public class HaircutsTurnsController : ControllerBase
    {
        private IHaircutTurnService _haircutTurnService;

        public HaircutsTurnsController(IHaircutTurnService haircutTurnService)
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
        public IActionResult SignUp(HaircutTurnModel turn)
        {
            var res = _haircutTurnService.addTurn(turn);
            return Ok(res);

        }

        [HttpGet("DeleteTurn")]
        public IActionResult DeleteTurn(int turnId)
        {
            var res = _haircutTurnService.deleteTurn(turnId);
            return Ok(res);

        }

        [HttpPut("EditTurn")]
        public IActionResult EditTurn(int turnId, DateTime arrivalDate)
        {
            var res = _haircutTurnService.editTurn(arrivalDate, turnId);
            return Ok(res);

        }

    }
}
