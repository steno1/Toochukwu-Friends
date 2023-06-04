/* This file defines the action creators for Redux.*/

import { CHANGE_SEARCH_FIELD,
REQUEST_ROBOTS_SUCCESS,
REQUEST_ROBOTS_PENDING,
REQUEST_ROBOTS_FAILED } from "./constant.js"

export const setSearchField=(text)=>{
   
    return{
        type: CHANGE_SEARCH_FIELD,
        payload:text
    }
    
}
/* The term "payload" generally refers to the 
data associated with an action*/

/* The setSearchField function is an action creator that returns
 an action object with a type
 of CHANGE_SEARCH_FIELD and a payload containing the provided text.*/
export const requestRobots=()=>(dispatch)=>{
dispatch({type:REQUEST_ROBOTS_PENDING});
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json()
.then(data=>dispatch({type:REQUEST_ROBOTS_SUCCESS, payload:data}))
.catch(error=>dispatch({type:REQUEST_ROBOTS_FAILED, payload:error}))
  );
}
/* The requestRobots function is an action creator that returns
 a function. This is possible because Redux Thunk middleware is 
 applied in the Redux store configuration. Inside the returned 
 function, it dispatches a REQUEST_ROBOTS_PENDING action, performs
 
 an asynchronous fetch request to retrieve robot data from an API,
  and then dispatches either a REQUEST_ROBOTS_SUCCESS action with 
the retrieved data or a REQUEST_ROBOTS_FAILED action with the error.*/
/* The thunk function in the code you provided is requestRobots 
in the action.js file. 

This thunk function follows the Redux Thunk middleware pattern.
 It returns a function instead of an action object. This returned
  function receives the dispatch function as an argument, which allows
   it to dispatch multiple actions asynchronously.

In this specific thunk function:The first action dispatched is
 { type: REQUEST_ROBOTS_PENDING }, indicating that the request 
 for robot data is pending.

The fetch function is used to make an HTTP GET request to the 
specified URL, which retrieves the robot data from the API.

Once the response is received, the data is extracted using 
response.json().The second action dispatched is
 { type: REQUEST_ROBOTS_SUCCESS, payload: data }. This action carries 
 the fetched robot data as the payload and indicates a successful 
 request.If an error occurs during the API request or data extraction,
  the catch block is executed, and the third action dispatched is
   { type: REQUEST_ROBOTS_FAILED, payload: error }. This action 
   carries the error message as the payload and indicates a failed 
   request.

By returning a function instead of a plain action object, 
Redux Thunk middleware intercepts this function and provides the
 dispatch function as an argument. This enables the thunk to dispatch
  actions asynchronously, making it suitable for handling asynchronous
   operations such as API requests.*/
