import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import viewVariants from "../../utils/viewVariants";
import Contract from "./contract/Contract";

function Footer() {
  return (
    <>
      <div className="bg-[#20231f] py-8 px-6 ">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div variants={viewVariants}>
            <div className="block md:flex md:justify-between md:space-x-2">
              <div className="lg:flex">
                <div className="min-w-[100px]">
                  <button
                    className={`text-sm border border-[#484b47] text-[#8f908e] px-[5px] pb-1 rounded-md`}
                  >
                    Contract
                  </button>
                </div>
                <div className="text-white md:max-w-[480px] md:space-y-6 space-y-4 pt-2 lg:pt-0">
                  <h3 className="text-3xl md:text-4xl lg:text-7xl ">
                    Chocolate bar jelly lollipop.
                  </h3>
                  <p className="text-[16px] ">
                    Chocolate bar jelly lollipop brownie brownie. Pie dessert
                    powder cake cake dessert cake. Cake cake muffin tootsie roll
                    carrot cake dragée marshmallow candy canes. Sweet roll
                    croissant cookie sweet roll dessert dessert topping.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[400px] lg:w-[474px] py-6 md:py-0 z-50">
                <Contract />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* footer bottom bar  */}
        <div className="flex items-end justify-between">
          <div className="hidden md:flex space-x-6 pt-6">
            <div className="min-w-[100px]">
              <NavLink
                to=""
                className="text-white text-[16px] hover:underline block "
              >
                Home
              </NavLink>
              <NavLink
                to=""
                className="text-white text-[16px] hover:underline block "
              >
                Product
              </NavLink>
              <NavLink
                to=""
                className="text-white text-[16px] hover:underline block "
              >
                FAG
              </NavLink>
            </div>
            <div className="min-w-[100px]">
              <NavLink
                to="/about"
                className="text-white text-[16px] hover:underline block "
              >
                About
              </NavLink>
              <NavLink
                to=""
                className="text-white text-[16px] hover:underline block "
              >
                Contract
              </NavLink>
              <NavLink
                to=""
                className="text-white text-[16px] hover:underline block "
              >
                Careers
              </NavLink>
            </div>
            <div className="min-w-[100px]">
              <NavLink
                to=""
                className="text-white text-[16px] hover:underline block "
              >
                Terms
              </NavLink>
              <NavLink
                to=""
                className="text-white text-[16px] hover:underline block "
              >
                Privacy
              </NavLink>
            </div>
          </div>
          <p className="text-[#8f908e] text-[16px]">© copyright 2022 </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
