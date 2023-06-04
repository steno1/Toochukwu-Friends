import React from 'react';
import ReactDOM from 'react-dom/client';
import { createLogger } from 'redux-logger';
/* 
The createLogger function from the redux-logger
 library is used to create a logger middleware. 
 This middleware intercepts and logs Redux actions and
  state changes to the console.
*/
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import './index.css';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';
import App from './containers/App';
import thunkMiddleware from "redux-thunk";
/* Redux Thunk is a middleware that allows you to write 
action creators that return functions instead of plain
 action objects. These functions can perform asynchronous
  operations, such as making API calls,
 before dispatching the actual action objects to the Redux store.*/

const logger = createLogger();
/* const logger = createLogger();: This line creates a logger
 middleware using the createLogger function from the redux-logger
  library. The logger middleware intercepts and logs Redux actions 
  and state changes to the console.*/

// Custom middleware function
const customMiddleware = (store) => (next) => (action) => {
  // Perform custom logic here
  console.log('Custom middleware triggered:', action);
  return next(action);
};
/* A custom middleware function called customMiddleware is defined.
 It logs a message to the console whenever an action is dispatched.*/



const store = configureStore({
  reducer: {
    search: searchRobots,
    request: requestRobots,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(thunkMiddleware, logger, customMiddleware),
});
/* The Redux store is created using the configureStore
 function from Redux Toolkit. It takes an object as 
an argument, which includes the reducers and middleware configuration.*/

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
/* the ReactDOM's createRoot function is used to
 render the React application wrapped in the Provider component, 
which provides the Redux store to the entire application.*/