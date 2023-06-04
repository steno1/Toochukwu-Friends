/* This file contains the Redux reducers.
It imports the action constants from constant.js.*/
import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_FAILED } from "./constant.js"

const initialStateSearch={
    searchField:""
}


export const searchRobots=(state=initialStateSearch, action={})=>{
  
switch (action.type) {
    case CHANGE_SEARCH_FIELD :
        return {...state, searchField: action.payload}

    default:
        return state
}
}
/* The searchRobots reducer handles the state related
 to search functionality. It takes the current state and an action
  as parameters and switches based on the action's type. 
  If the action type is CHANGE_SEARCH_FIELD, it returns a new 
  state object with the searchField property updated to the value
   provided in the action's payload.
 Otherwise, it returns the current state unchanged.*/

const initialStateRobots={
IsPending:false,
robots:[],
error:""

}

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
      case REQUEST_ROBOTS_PENDING:
        return {
          ...state,
          isPending: true,
        };
  
      case REQUEST_ROBOTS_SUCCESS:
        return {
          ...state,
          robots: action.payload, // Corrected property name
          isPending: false,
        };
  
      case REQUEST_ROBOTS_FAILED:
        return {
          ...state,
          error: action.payload,
          isPending: false,
        };
  
      default:
        return state;
    }
  };
  /* The requestRobots reducer handles the state related
   to robot requests. It takes the current state and an action 
as parameters and switches based on the action's type.
 If the action type is REQUEST_ROBOTS_PENDING, it returns a new 
   state object with the isPending property set to true. If the 
 action type is REQUEST_ROBOTS_SUCCESS, it returns a new state
  object with the robots property updated to the data provided
     in the action's payload and the isPending property set to false.
  If the action type is REQUEST_ROBOTS_FAILED, it returns a new
 state object with the error property set to the error provided
  in the action's payload and the isPending property
set to false. Otherwise, it returns the current state unchanged.*/
