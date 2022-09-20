import { motion } from "framer-motion";
import React from "react";
import { viewport, viewVariants } from "../../utils/viewVariants";

function ProductTitle() {
  return (
    <>
      <div className="pt-32 md:pt-28 lg:pt-48 py-6">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={viewport}
        >
          <motion.div variants={viewVariants}>
            <h4 className=" text-[#20231f] text-4xl sm:text-5xl lg:text-7xl font-medium mb-4 ">
              Croissant sweet roll tart gummi bears brownie macaroon.
            </h4>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default ProductTitle;
