import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from "./FrontWebsite/Views/Home/Home.jsx";
import SignIn from "./FrontWebsite/Views/Auth/SignIn.jsx";
import SignUp from "./FrontWebsite/Views/Auth/SignUp.jsx";

var hist = createBrowserHistory();
export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/SignIn" element={<SignIn/>} />
        <Route exact path="/SignUp" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}
