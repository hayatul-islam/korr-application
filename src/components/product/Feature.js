import { motion } from "framer-motion";
import React from "react";
import { viewImgVariants } from "../../utils/viewImgVariants";
import { viewport, viewVariants } from "../../utils/viewVariants";

function Feature({ feature }) {
  const { name, title, img, body1, body2 } = feature || {};
  return (
    <>
      <div className="block space-y-12 lg:space-y-0 lg:flex lg:space-x-28 py-6">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={viewport}
        >
          <motion.div variants={viewVariants}>
            <div className="block xl:flex">
              <div className="py-2 xl:w-[100px]">
                <button
                  className={`text-sm block border border-black px-[5px] py-px rounded-md`}
                >
                  {name}
                </button>
              </div>
              <div>
                <div className="lg:max-w-[620px]">
                  <h4 className="text-[20px] md:text-3xl font-medium pb-5">
                    {title}
                  </h4>
                  <p className="text-[16px] ">{body1}</p>
                  <p className="text-[16px] pt-3 ">{body2}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={viewport}
        >
          <motion.div variants={viewImgVariants}>
            <div className="max:h-[360px] max:w-[475px] ">
              <img className="w-full h-full rounded" src={img} alt={title} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Feature;
