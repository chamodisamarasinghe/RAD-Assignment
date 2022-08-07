import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import '../App.css';
import Login from "../pages/sessions/Login";
import Register from "../pages/sessions/UserRegistration";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
