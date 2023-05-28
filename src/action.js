import { CHANGE_SEARCH_FIELD } from "./constant.js"

export const setSearchField=(text)=>{
    console.log(text)
    return{
        type: CHANGE_SEARCH_FIELD,
        payload:text
    }
    
}