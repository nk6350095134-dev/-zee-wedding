import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PreWeddingPackages from "./pages/PreWeddingPackages";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Customers from "./pages/Customers";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pre-wedding-packages" element={<PreWeddingPackages/>}/>
        <Route path="/customers" element={<Customers />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;