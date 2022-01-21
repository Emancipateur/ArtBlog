import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import  CatSlice  from './store'


const store = configureStore({
  reducer : { category : CatSlice.reducer}
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
  <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
