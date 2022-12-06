import React,{useState, useEffect} from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products/index'
import Error from './Components/Pages/Error'
import Login from './Components/Pages/Login/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import './App.css';

function App() {

  const token = Cookies.get("token");


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {token ? <>
            <Route path='/' element={<Home />} />
              <Route path='/Products' element={<Products />} />
              <Route path='*' element={<Error />} />
          </> : <>
          <Route path='*' element={<Login />} />
          </>}
             
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
