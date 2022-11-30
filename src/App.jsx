import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from "react-router-dom";
import { Home, Flight, Auth } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default App;
