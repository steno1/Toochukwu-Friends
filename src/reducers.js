
import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_FAILED } from "./constant.js"

const initialStateSearch={
    searchFielder:""
}
export const searchRobots=(state=initialStateSearch, action={})=>{
  
switch (action.type) {
    case CHANGE_SEARCH_FIELD :
        return {...state, searchField: action.payload}

        
        

    default:
        return state
}
}

const initialStateRobots={
IsPending:false,
robots:[],
error:""

}


export const requestRobots=(state=initialStateRobots, action={})=>{
  
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING :
            return {...state,
            IsPending:true,
            
            }

            case REQUEST_ROBOTS_SUCCESS :
            return {...state,
            robot:action.payload,
            IsPending:false
            
            }

            case REQUEST_ROBOTS_FAILED :
            return {...state,
            error:action.payload,
            IsPending:false
            
            }

        default:
            return state
    }
    }