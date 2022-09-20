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
          className={`grid grid-cols-[70%_30%] ${
            isOpen ? "text-[#20231f]" : "text-[#8f908e] hover:text-[#34d601] "
          } group `}
        >
          <div>
            <h4 className="text-2xl ">{question}</h4>
          </div>
          <div className="flex justify-between">
            <p className="text-[16px]">{question_type}</p>
            <div className="flex items-center">
              <p className="hidden group-hover:block">
                {isOpen ? "Close" : "Open"}
              </p>
              <VscChevronRight className=" group-hover:hidden" />
              <VscChevronLeft className="hidden group-hover:block  mt-1" />
            </div>
          </div>
        </div>
        <div className="max-w-[600px]">
          {isOpen && <p className="text-[16px] text-[#20231f] pt-6 ">{ans}</p>}
        </div>
      </div>
    </>
  );
}

export default FqaItim;
