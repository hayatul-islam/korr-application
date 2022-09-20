import { motion } from "framer-motion";
import React from "react";
import { viewImgVariants } from "../../utils/viewImgVariants";
import { viewport } from "../../utils/viewVariants";

function Testimonial({ testimonial, totolTestimonial, setId }) {
  const { title, body, id, img } = testimonial;
  const hanleLoaded = (value) => {
    switch (value) {
      case "next":
        if (id < totolTestimonial) {
          return setId(id + 1);
        } else {
          return setId(1);
        }
      case "previous":
        if (id > 1) {
          return setId(id - 1);
        } else {
          return setId(totolTestimonial);
        }
      default:
        return setId(1);
    }
  };
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="grid items-between order-last lg:order-none">
          <div className="pt-12 lg:pt-0">
            <div className="lg:flex lg:justify-between pb-4 lg:pb-6">
              <button
                className={`hidden lg:block text-sm border border-[#484b47] text-[#8f908e] px-[5px] py-px rounded-lg`}
              >
                Testimonials
              </button>
              <p className="text-[16px] text-[#e9e9e9]">{title}</p>
            </div>
            <p className="text-[16px] md:text-[24px] lg:text-3xl text-white lg:leading-10">
              {body}
            </p>
          </div>
          <div className="flex justify-between lg:items-end pt-12 lg:pt-0">
            <button
              onClick={() => hanleLoaded("previous")}
              className="text-white text-[16px] hover:underline "
            >
              Previous
            </button>
            <button
              onClick={() => hanleLoaded("next")}
              className="text-white text-[16px] hover:underline  lg:hidden"
            >
              Next
            </button>
            <div className="hidden lg:flex  space-x-48">
              <h5 className="text-white ">
                {id}/{totolTestimonial}
              </h5>
              <button
                onClick={() => hanleLoaded("next")}
                className="text-white text-[16px] hover:underline z-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={viewport}
        >
          <motion.div variants={viewImgVariants}>
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] lg:pb-6">
              <div className="flex justify-between pb-6">
                <button
                  className={`lg:hidden text-sm border border-[#484b47] text-[#8f908e] px-[5px] py-px rounded-lg`}
                >
                  Testimonials
                </button>
                <h5 className="text-white lg:hidden">
                  {id}/{totolTestimonial}
                </h5>
              </div>

              <img className="w-full h-full rounded-xl" src={img} alt="" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Testimonial;
