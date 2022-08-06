import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import '../App.css';
import Login from "../pages/sessions/Login";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
