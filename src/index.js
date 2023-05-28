import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider} from 'react-redux';

import { configureStore } from "@reduxjs/toolkit";

import './index.css';
import "tachyons"
import { searchRobots } from './reducers';

import App from './containers/App';

const store = configureStore({
  reducer: {
    searchRobots: searchRobots,
  },
});

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
