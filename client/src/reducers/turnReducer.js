import * as types from '../actions/types';
var moment = require('moment');

const initialState = {
  items: [],
  allItems: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.Get_Turns:
      return {
        ...state,
        items: action.payload,
        allItems: action.payload
      };
    case types.Delete_Turn: {
      const newItems = state.items.filter(turn => {
        return turn.id !== action.payload
      })
      return {
        ...state,
        items: newItems,
        allItems: newItems
      };

    }
    case types.Edit_Turn: {//? if we need update in the page of edit somthing ehich connected to this state - here we update!
      /*       const { turnId, arrivalDate } = action.payload
            const updatedItems = state.items.map(i => {
             return i.id == turnId ?
                { ...i, arrivalDate: arrivalDate } : i
      
            })
            return {
              ...state,
              items: updatedItems
            } */
    }
    case types.Add_Turn: {

    }
    case types.Filter_Turns: {
      const { date, firstName } = action.payload
      let dateOfTurn;
      const items = state.allItems.filter(turn => {
        dateOfTurn = date ? moment(turn.arrivalDate).format("YYYY/MM/DD") : null
        return (date == dateOfTurn || !date)
          && (firstName == turn.firstName || !firstName)
      })
      return {
        ...state,
        items
      }
    }
    case types.Clear_Filter:{
      return {
        ...state,
        items: state.allItems
      }
    }

    default:
      return state;
  }
}