import React from "react";
import { NavLink } from "react-router-dom";
import Contract from "../contract/Contract";

function MobileMenu() {
  return (
    <div className="bg-[#20231f] px-3 py-8 ">
      <div className="grid grid-cols-2">
        <nav>
          <NavLink
            className="block text-[30px] text-white cursor-pointer"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="block text-[30px] text-white cursor-pointer"
            to="/product"
          >
            Product
          </NavLink>
          <NavLink
            className="block text-[30px] text-white cursor-pointer"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="block text-[30px] text-white cursor-pointer"
            to="/mission"
          >
            Misson
          </NavLink>
        </nav>
        <div className="mt-2">
          <NavLink
            to=""
            className="text-white text-[16px] block cursor-pointer "
          >
            Careers
          </NavLink>
          <NavLink
            to=""
            className="text-white text-[16px] block cursor-pointer "
          >
            Terms
          </NavLink>
          <NavLink
            to=""
            className="text-white text-[16px] block cursor-pointer "
          >
            Privacy
          </NavLink>
          <NavLink
            to=""
            className="text-white text-[16px] block cursor-pointer "
          >
            FAQ
          </NavLink>
        </div>
      </div>
      <div className="py-4">
        <Contract />
      </div>
    </div>
  );
}

export default MobileMenu;
