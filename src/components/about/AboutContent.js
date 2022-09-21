import { motion } from "framer-motion";
import React from "react";
import { viewImgVariants } from "../../utils/viewImgVariants";
import { viewport, viewVariants } from "../../utils/viewVariants";

function AboutContent() {
  return (
    <>
      <div className="py-8">
        <div className="space-y-8">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={viewport}
          >
            <motion.div variants={viewVariants}>
              <h4 className="text-[20px] md:text-3xl font-medium md:leading-10">
                Cotton candy candy canes brownie cake danish pastry pudding. Pie
                cake danish sugar plum halvah tiramisu. Donut bonbon gingerbread
                cotton candy danish fruitcake. Croissant sweet roll tart gummi
                bears caramels brownie macaroon bonbon tiramisu.
              </h4>
            </motion.div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={viewport}
          >
            <motion.div variants={viewVariants}>
              <p className="text-[16px] md:text-2xl max-w-5xl">
                Cotton candy candy canes brownie cake danish pastry pudding. Pie
                cake danish sugar plum halvah tiramisu. Donut bonbon gingerbread
                cotton candy danish fruitcake. Croissant sweet roll tart gummi
                bears caramels brownie macaroon bonbon tiramisu.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="pt-12 space-y-6 lg:space-y-12">
          <div className="lg:grid lg:grid-cols-[58%_42%] py-12 space-y-10 lg:space-y-0">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={viewport}
            >
              <motion.div variants={viewVariants}>
                <div className="md:pt-12 space-y-4 lg:max-w-[600px] m-auto">
                  <button
                    className={`text-sm border border-black px-[5px] py-px rounded-lg`}
                  >
                    Why Korr
                  </button>
                  <p className="text-[20px] md:text-2xl">
                    Activated charcoal banh mi banjo master cleanse yr celiac
                    you probably haven't heard of them art party. Locavore tacos
                    XOXO kombucha echo park, tousled chambray pour-over
                    readymade pickled small batch shabby chic bespoke. Stumptown
                    waistcoat austin normcore unicorn, leggings intelligentsia
                    air plant green juice sustainable butcher bodega boys
                    gochujang DIY sus. Migas austin cred cold-pressed.
                    Asymmetrical mumblecore farm-to-table yuccie poke, keytar
                    YOLO artisan DSA flannel.
                  </p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={viewport}
            >
              <motion.div variants={viewImgVariants}>
                <div>
                  <img
                    className="w-full rounded-xl"
                    src="https://images.unsplash.com/photo-1603673329776-28248af53fc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="lg:grid lg:grid-cols-[58%_42%] py-12 space-y-10 lg:space-y-0">
            <motion.div
              className="lg:order-last"
              initial="offscreen"
              whileInView="onscreen"
              viewport={viewport}
            >
              <motion.div variants={viewVariants}>
                <div className="md:pt-12 space-y-4 lg:max-w-[600px] m-auto">
                  <button
                    className={`text-sm border border-black px-[5px] py-px rounded-lg`}
                  >
                    Mission
                  </button>
                  <p className="text-[20px] md:text-2xl">
                    Activated charcoal banh mi banjo master cleanse yr celiac
                    you probably haven't heard of them art party. Locavore tacos
                    XOXO kombucha echo park, tousled chambray pour-over
                    readymade pickled small batch shabby chic bespoke. Stumptown
                    waistcoat austin normcore unicorn, leggings intelligentsia
                    air plant green juice sustainable butcher bodega boys
                    gochujang DIY sus. Migas austin cred cold-pressed.
                    Asymmetrical mumblecore farm-to-table yuccie poke, keytar
                    YOLO artisan DSA flannel.
                  </p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={viewport}
            >
              <motion.div variants={viewImgVariants}>
                <div className="lg:max-w-[720px]">
                  <img
                    className="w-full rounded-xl"
                    src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutContent;
