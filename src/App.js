import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/common/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>{/* <Route path="/" element={} /> */}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
