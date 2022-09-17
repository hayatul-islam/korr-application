import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ContractForm from "./ContractForm";
import ContractInfo from "./ContractInfo";

function Footer() {
  const [isContract, setIsContract] = useState(false);
  return (
    <>
      <div className="bg-[#20231f] py-8 px-6 ">
        <div className="flex justify-between">
          <div className="flex">
            <div className="min-w-[100px]">
              <button
                className={`text-sm border border-[#484b47] text-[#8f908e] px-[5px] pb-1 rounded-md`}
              >
                Contract
              </button>
            </div>
            <div className="text-white max-w-[480px] space-y-6">
              <h3 className="text-7xl ">Chocolate bar jelly lollipop.</h3>
              <p className="text-[16px] ">
                Chocolate bar jelly lollipop brownie brownie. Pie dessert powder
                cake cake dessert cake. Cake cake muffin tootsie roll carrot
                cake dragée marshmallow candy canes. Sweet roll croissant cookie
                sweet roll dessert dessert topping.
              </p>
            </div>
          </div>
          <div className="w-[478px] h-[530px] bg-white rounded-xl">
            {isContract ? (
              <ContractForm setIsContract={setIsContract} />
            ) : (
              <ContractInfo setIsContract={setIsContract} />
            )}
          </div>
        </div>

        {/* footer bottom bar  */}
        <div className="flex items-end justify-between">
          <div className="flex space-x-6 pt-6">
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
