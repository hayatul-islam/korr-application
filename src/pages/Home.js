import React from "react";
import Insurance from "../components/Home/Insurance";
import VideoAnimation from "../components/Home/VideoAnimation";
import WhyKorrAndProduct from "../components/Home/WhyKorrAndProduct";

export default function Home() {
  return (
    <>
      <div className="px-6">
        <Insurance />
        <VideoAnimation />
        <WhyKorrAndProduct />
      </div>
    </>
  );
}
