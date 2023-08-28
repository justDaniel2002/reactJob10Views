import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Navbar2, Navbar } from "./Components/Navbar";
import SignUp from "./Pages/SignUp";
import Interships from "./Pages/Interships";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>}/>
          <Route path="/Home" element={<><Navbar /><Home /></>}/>
          <Route path="/SignUp" element={<><Navbar2 /><SignUp /></>}/>
          <Route path="/Intership" element={<><Navbar /><Interships /></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
