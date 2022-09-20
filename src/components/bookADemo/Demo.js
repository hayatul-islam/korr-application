import { motion } from "framer-motion";
import React from "react";
import { viewImgVariants } from "../../utils/viewImgVariants";
import { viewport, viewVariants } from "../../utils/viewVariants";
import Form from "../common/contract/Form";

function Demo() {
  return (
    <>
      <div className="pt-20 md:pt-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-6 py-12 lg:py-28 space-y-8 lg:space-y-0 ">
          <div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={viewport}
            >
              <motion.div variants={viewVariants}>
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium pb-12">
                  Fruitcake Candy Gingerbread
                </h2>
                <p className="text-[16px]">
                  Dragée chocolate sugar plum candy canes pie gingerbread. Jelly
                  beans cotton candy oat cake jelly beans pudding pudding chupa
                  chups. Ice cream bonbon chocolate donut cake sugar plum.
                  Jelly-o macaroon pie gingerbread liquorice sweet. Pie pudding
                  marshmallow gummi bears muffin. Oat cake croissant sesame
                  snaps tiramisu dragée candy carrot cake. Pastry jelly beans
                  gummi bears fruitcake tiramisu chocolate powder ice cream.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={viewport}
            >
              <motion.div variants={viewVariants}>
                <div className="pt-8">
                  <Form />
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={viewport}
              className="lg:h-[650px]"
            >
              <motion.img
                variants={viewImgVariants}
                className="w-full h-full rounded-xl"
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo;
