import { motion } from "framer-motion";
import React from "react";
import { viewImgVariants } from "../../utils/viewImgVariants";
import { viewport, viewVariants } from "../../utils/viewVariants";

function MissionContent() {
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
                  Mission
                </button>
              </div>

              <div>
                <p className="text-[20px] md:text-3xl font-medium md:leading-10">
                  Air plant vice PBR&B lomo occupy twee DSA chillwave polaroid
                  chambray distillery shaman. Typewriter tote bag iceland pop-up
                  ugh scenester raw denim. Shaman hell of unicorn DSA ethical.
                  Knausgaard chicharrones hell of YOLO everyday carry tbh art
                  party gluten-free vaporware.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className=" pt-6 md:pt-2 lg:pt-8 space-y-4 lg:space-y-12">
          <div className="lg:grid lg:grid-cols-[58%_42%] py-6 lg:py-12 space-y-10 lg:space-y-0">
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
                    Mission
                  </button>
                  <p className="text-[20px] md:text-2xl">
                    Lyft wayfarers ethical skateboard yes plz hammock actually
                    flannel photo booth readymade meggings. Salvia disrupt
                    bicycle rights pabst, swag direct trade crucifix fam
                    chartreuse lumbersexual seitan. Semiotics quinoa jean shorts
                    put a bird on it. Brunch migas godard etsy keffiyeh irony
                    flexitarian Brooklyn hammock YOLO sus whatever yuccie same
                    taxidermy.
                  </p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="order-last lg:order-first"
              initial="offscreen"
              whileInView="onscreen"
              viewport={viewport}
            >
              <motion.div variants={viewImgVariants}>
                <div className="lg:max-w-[720px]">
                  <img
                    className="w-full rounded-xl"
                    src="https://images.unsplash.com/photo-1575886876783-ea3cbbc8204d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="lg:grid lg:grid-cols-[58%_42%] py-6 lg:py-12 space-y-10 lg:space-y-0">
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
                    Hashtag fixie migas biodiesel chicharrones polaroid.
                    Try-hard migas tote bag cred jean shorts, heirloom blue
                    bottle hammock cornhole yr chia gatekeep. Church-key put a
                    bird on it listicle, mukbang affogato brunch poutine celiac
                    fingerstache JOMO skateboard narwhal sus disrupt. JOMO
                    farm-to-table try-hard heirloom vexillologist. Chillwave
                    etsy try-hard, pour-over bespoke fanny pack typewriter tofu
                    kinfolk chicharrones. Actually succulents normcore cloud
                    bread vaporware plaid. Microdosing franzen heirloom banjo
                    succulents kickstarter flexitarian mustache pitchfork
                    stumptown mlkshk lumbersexual kogi.
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
                    src="https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzE0fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
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

export default MissionContent;
