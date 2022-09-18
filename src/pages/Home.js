import React from "react";
import Insurance from "../components/Home/Insurance";
import Testimonials from "../components/Home/Testimonials";
import VideoAnimation from "../components/Home/VideoAnimation";
// import WhyKorrAndProduct from "../components/Home/WhyKorrAndProduct";

export default function Home() {
  return (
    <>
      <div className="px-6">
        <Insurance />

        {/* <WhyKorrAndProduct /> */}
      </div>
      <VideoAnimation />
      <Testimonials />
      <div className="px-6">{/* <About /> */}</div>
    </>
  );
}
