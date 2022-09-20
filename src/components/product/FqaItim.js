import React, { useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

function FqaItim({ fqa }) {
  const { question, ans, question_type } = fqa;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="py-6 border-t-2">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`flex justify-between lg:grid lg:grid-cols-[70%_30%] ${
            isOpen
              ? "text-[#20231f]"
              : "text-[#8f908e] lg:hover:text-[#34d601] "
          } group `}
        >
          <div>
            <div className="hidden lg:block">
              <h4 className="text-2xl">{question}</h4>
            </div>
            <div className="block lg:hidden">
              {isOpen ? (
                <p className="text-[16px]">{question_type}</p>
              ) : (
                <h4 className="text-[16px]">{question}</h4>
              )}
            </div>
          </div>
          <div className="flex justify-end lg:justify-between">
            <p className="text-[16px] hidden lg:block">{question_type}</p>
            <div>
              {/* large device  */}
              <div className="hidden lg:flex items-center">
                <p className={`hidden group-hover:block`}>
                  {isOpen ? "Close" : "Open"}
                </p>
                <VscChevronRight className=" group-hover:hidden" />
                <VscChevronLeft className="hidden group-hover:block  mt-1" />
              </div>

              {/* mobile and teblate device  */}
              <div className="lg:hidden">
                {isOpen ? (
                  <div className=" flex items-center lg:hidden">
                    <p>{isOpen ? "Close" : "Open"}</p>

                    <VscChevronLeft className=" mt-1" />
                  </div>
                ) : (
                  <VscChevronRight />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:max-w-[600px]">
          {isOpen && (
            <div className="pt-6 ">
              <h4 className="text-xl md:text-2xl lg:hidden mb-4">{question}</h4>
              <p className="text-[16px] text-[#20231f] ">{ans}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FqaItim;
