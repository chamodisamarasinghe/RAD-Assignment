import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import '../App.css';
import Login from "../pages/sessions/Login";
import Register from "../pages/sessions/UserRegistration";
import DashBoard from "../pages/sessions/Dash";
import Product from "../pages/sessions/Product";



function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='register' element={<Register/>}/>
            <Route exact path='dash' element={<DashBoard/>}/>
            <Route exact path='product' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
