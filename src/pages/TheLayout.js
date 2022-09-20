import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/header/Header";
import About from "./About";
import BookADemo from "./BookADemo";
import Home from "./Home";
import Product from "./Product";

export default function TheLayout() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/book-a-demo" element={<BookADemo />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
