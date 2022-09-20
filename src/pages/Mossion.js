import React from "react";
import MissionFAQ from "../components/mossion/MissionFAQ";
import MissionVideoAnimation from "../components/mossion/MissionVideoAnimation";
import MossionTitle from "../components/mossion/MossionTitle";

function Mossion() {
  return (
    <>
      <div className="px-6">
        <MossionTitle />
      </div>
      <MissionVideoAnimation />
      <div className="px-6">
        <MissionFAQ />
      </div>
    </>
  );
}

export default Mossion;
