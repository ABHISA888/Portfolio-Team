import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import "./App.css";
import Mentors from "./component/Mentors";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Define a route for the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/Mentors" element={<Mentors />} />

        </Routes>
      </Router>
    </>
  );
};

export default App;
