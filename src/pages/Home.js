import React from "react";
import About from "../components/Home/About";
import HomeVideoAnimation from "../components/Home/HomeVideoAnimation";
import Insurance from "../components/Home/Insurance";
import Testimonials from "../components/Home/Testimonials";
import WhyKorrAndProduct from "../components/Home/WhyKorrAndProduct";

export default function Home() {
  return (
    <>
      <div className="px-6">
        <Insurance />
      </div>
      <HomeVideoAnimation />
      <div className="px-6">
        <WhyKorrAndProduct />
      </div>
      <Testimonials />
      <div className="px-6">
        <About />
      </div>
    </>
  );
}
