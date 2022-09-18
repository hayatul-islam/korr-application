import React from "react";
import About from "../components/Home/About";
import Insurance from "../components/Home/Insurance";
import Testimonials from "../components/Home/Testimonials";
import VideoAnimation from "../components/Home/VideoAnimation";

export default function Home() {
  return (
    <>
      <div className="px-6">
        <Insurance />
        <VideoAnimation />
        {/* <WhyKorrAndProduct /> */}
      </div>
      <Testimonials />
      <div className="px-6">
        <About />
      </div>
    </>
  );
}
