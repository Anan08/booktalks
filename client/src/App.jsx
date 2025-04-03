import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Books from "./pages/Books";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/books" element={<Books/>} />
        {/* <Route path="/channel" element={<Channel/>} /> */}
        <Route path="/register" element={<Register/>} />
        {/* <Route path="/register" element={<Register/>} /> */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App
