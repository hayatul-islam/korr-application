import React from "react";
import AboutTitle from "../components/about/AboutTitle";
import AboutVideoAnimation from "../components/about/AboutVideoAnimation";

function About() {
  return (
    <>
      <div className="px-6">
        <AboutTitle />
      </div>
      <AboutVideoAnimation />
    </>
  );
}

export default About;
