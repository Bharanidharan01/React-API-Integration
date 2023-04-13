import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* import LoginScreen from './Screens/Login-screen'; */
import 'bootstrap/dist/css/bootstrap.css';
import Screen from './Screens/main-screens/Screen';
import Following from './Screens/main-screens/following';
import LoginScreen from './Screens/Login-screen';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login-page' element={<LoginScreen />} />

      <Route path='/home' element={<Screen />} />
      <Route path='/following' element={<Following/>}/>
     
    </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
