import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/HomePage/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
