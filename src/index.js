import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ProgressContext } from './lib/context/ProgressContext';
import { store } from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProgressContext>
    <Provider store={store}>
      <App />
      </Provider>
    </ProgressContext>
    </BrowserRouter>
  </React.StrictMode>
);


