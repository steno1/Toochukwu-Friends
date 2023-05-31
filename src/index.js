import React from 'react';
import ReactDOM from 'react-dom/client';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import './index.css';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';
import App from './containers/App';
import thunkMiddleware from "redux-thunk";

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



const store = configureStore({
  reducer: {
    search: searchRobots,
    request: requestRobots,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware, logger, customMiddleware),
});


const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);