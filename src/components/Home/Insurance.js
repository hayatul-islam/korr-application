import React from "react";
import { NavLink } from "react-router-dom";

function Insurance() {
  return (
    <>
      <div className=" md:flex justify-between pt-24 md:pt-20 lg:pt-48 py-6">
        <div className="md:w-[550px]">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium mb-4">
            The Rebirth of Insurance
          </h2>
        </div>
        <div className="md:w-[480px] ">
          <p className="text-[16px]">
            Korr is the first truly versatile insurance management tool. With
            Korr, insurance professionals develop and manage new and innovative
            insurance products in minutes.
          </p>
          <div className=" md:text-end pt-8 md:pt-12 space-x-4">
            <NavLink to="/product">
              <button className="px-2 bg-[#e9e9e9] hover:bg-[#34d601] text-[#484b47] hover:text-white rounded">
                See the Product
              </button>
            </NavLink>
            <NavLink to="/book-a-demo">
              <button className="px-2 bg-[#e9e9e9] hover:bg-[#34d601] text-[#484b47] hover:text-white rounded">
                Book a demo
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Insurance;
