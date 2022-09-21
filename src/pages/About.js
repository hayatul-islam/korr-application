import React from "react";
import AboutContent from "../components/about/AboutContent";
import AboutTitle from "../components/about/AboutTitle";
import AboutVideoAnimation from "../components/about/AboutVideoAnimation";

function About() {
  return (
    <>
      <div className="px-6">
        <AboutTitle />
      </div>
      <AboutVideoAnimation />
      <div className="px-6">
        <AboutContent />
      </div>
    </>
  );
}

export default About;
