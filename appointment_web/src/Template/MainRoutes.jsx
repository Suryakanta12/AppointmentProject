import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from "./FrontWebsite/Views/Home/Home.jsx";

var hist = createBrowserHistory();
export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}
