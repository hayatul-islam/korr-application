import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const active = {
    color: "red",
  };
  return (
    <>
      <div className="flex justify-between items-center px-6 pt-6">
        <div className="w-[68px] h-[30px]">
          <svg viewBox="0 0 68 30">
            <path
              d="M19.9,10.11h-6.78l-7.94,7.58V0H0V29.39H5.18v-7.58l7.9,7.58h7.18l-10.33-9.81,9.97-9.47Zm19.88,9.66c0-5.76-4.67-10.19-10.73-10.19s-10.77,4.55-10.77,10.19,4.59,10.23,10.69,10.23,10.81-4.47,10.81-10.23Zm-16.27,.04c0-3.22,2.27-5.53,5.5-5.53s5.54,2.31,5.54,5.53-2.31,5.57-5.54,5.57-5.5-2.35-5.5-5.57Zm30.59-9.89h-1.08c-3.11,0-5.26,1.33-6.3,4.05v-3.86h-4.94V29.39h5.02v-9.17c0-4.2,1.99-5.68,5.62-5.68h1.67v-4.62Zm13.9,0h-1.08c-3.11,0-5.26,1.33-6.3,4.05v-3.86h-4.94V29.39h5.02v-9.17c0-4.2,1.99-5.68,5.62-5.68h1.67v-4.62Z"
              fill="#20231f"
            ></path>
          </svg>
        </div>
        <nav className="text-xl space-x-4 bg-white shadow-lg px-4 py-2 rounded">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#34d601]" : "text-[#20231f]"
            }
            to="/product"
            activeClassName={active}
          >
            Product
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#34d601]" : "text-[#20231f]"
            }
            to="/book"
          >
            Book a Demo
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#34d601]" : "text-[#20231f]"
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#34d601]" : "text-[#20231f]"
            }
            to="/misson"
          >
            Misson
          </NavLink>
        </nav>
      </div>
    </>
  );
}
