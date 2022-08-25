import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from './Log/Login';
import Cart from './Cart items/Cart';
import Logout from './Log/Logout';
import Signup from './Log/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/cart" element={<Cart/>}/>

      </Routes>
      </BrowserRouter>

  // </React.StrictMode>
);


