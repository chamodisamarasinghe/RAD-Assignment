import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import '../App.css';
import Login from "../pages/sessions/Login";
import Register from "../pages/sessions/UserRegistration";
import DashBoard from "../pages/sessions/Dash";
import Product from "../pages/sessions/Product";
import UserTable from "../pages/sessions/UserRegistration/table";



function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='register' element={<Register/>}/>
            <Route exact path='dash' element={<DashBoard/>}/>
            <Route exact path='product' element={<Product/>}/>
            <Route exact path='table' element={<UserTable/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
