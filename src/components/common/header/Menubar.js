import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Menubar() {
  const [hover, setHover] = useState(false);
  const handleNavigate = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <nav className="flex text-xl space-x-6 bg-white shadow-lg px-4 py-2 rounded font-norma ">
        <NavLink
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleNavigate}
          className={({ isActive }) =>
            isActive
              ? "text-[#34d601] font-medium"
              : `${hover && "hover:text-[#20231f] text-[#8f908e]"}`
          }
          to="/product"
        >
          Product
        </NavLink>
        <NavLink
          onClick={handleNavigate}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={({ isActive }) =>
            isActive
              ? "text-[#34d601] font-medium"
              : `${hover && "hover:text-[#20231f] text-[#8f908e]"}`
          }
          to="/book-a-demo"
        >
          Book a Demo
        </NavLink>
        <NavLink
          onClick={handleNavigate}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={({ isActive }) =>
            isActive
              ? "text-[#34d601] font-medium"
              : `${hover && "hover:text-[#20231f] text-[#8f908e]"}`
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          onClick={handleNavigate}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={({ isActive }) =>
            isActive
              ? "text-[#34d601] font-medium"
              : `${hover && "hover:text-[#20231f] text-[#8f908e]"}`
          }
          to="/mission"
        >
          Misson
        </NavLink>
      </nav>
    </>
  );
}

export default Menubar;
