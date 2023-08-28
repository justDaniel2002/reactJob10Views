import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Navbar2 } from "./Components/Navbar";
import SignUp from "./Pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/SignUp" element={<><Navbar2 /><SignUp /></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
