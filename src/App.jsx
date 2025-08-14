import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ChatIcon from "./components/ChatIcon.jsx";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Forum from "./pages/Forum";
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ChatIcon />
    </Router>
  );
}
