import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/header/Header";
import Home from "./Home";

export default function TheLayout() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
