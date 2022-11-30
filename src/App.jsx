import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/styles/main.css"
import { Routes, Route } from "react-router-dom";
import { Home, Flight, Auth, SearchFlight } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/search-flight" element={<SearchFlight />} />
    </Routes>
  );
};

export default App;
