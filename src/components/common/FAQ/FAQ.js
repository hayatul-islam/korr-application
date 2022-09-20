import { motion } from "framer-motion";
import React from "react";
import { viewport, viewVariants } from "../../../utils/viewVariants";
import FqaItim from "./FqaItim";

function FAQ({ data }) {
  return (
    <>
      <div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={viewport}
        >
          <motion.div variants={viewVariants}>
            <div className="py-6 space-y-5">
              <div className="">
                <button
                  className={`text-sm border border-black px-[5px] py-px rounded-md`}
                >
                  FAQ
                </button>
              </div>

              <div>
                <p className="text-[20px] md:text-3xl font-medium md:leading-10">
                  {data?.title}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className="py-8">
          <div className="grid lg:grid-cols-[70%_30%] text-[#8f908e] text-[12px] pb-3">
            <p>Question</p>
            <p className="hidden lg:block">Area</p>
          </div>
          {data?.faq?.map((fqa) => (
            <FqaItim key={fqa?.id} fqa={fqa} />
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;
