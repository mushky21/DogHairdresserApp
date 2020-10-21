import * as types from '../actions/types';

const initialState = {
    allItems: []
}

export default function(state = initialState, action) {
    switch (action.type) {
      case types.Get_Turns:
        return {
          ...state,
          allItems: action.payload
        };
/*       case NEW_POST:
        return {
          ...state,
          item: action.payload
        }; */
      default:
        return state;
    }
  }