import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./components/Header/Header.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import Products from "./pages/Products.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
