import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'remixicon/fonts/remixicon.css'
import "./assets/styles/main.css";
import { Routes, Route } from "react-router-dom";
import { Home, Flight, Auth, NotFound, Tickets, Promo } from "./pages";
import Protected from "./utils/Protected";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
