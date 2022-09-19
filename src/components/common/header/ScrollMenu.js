import React from "react";
import { useNavigate } from "react-router-dom";
import Menubar from "./Menubar";

export default function ScrollHeader() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex items-center space-x-2">
        <button
          onClick={handleHome}
          className="text-xl bg-white hover:bg-[#20231f] hover:text-white shadow-lg px-4 py-2 rounded font-normal"
        >
          korr
        </button>
        <div className="w-[410px]">
          <Menubar />
        </div>
      </div>
    </>
  );
}
