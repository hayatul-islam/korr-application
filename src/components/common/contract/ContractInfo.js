import { motion } from "framer-motion";
import React from "react";
import viewImgVariants from "../../../utils/viewImgVariants";

function ContractInfo({ setIsContract }) {
  const handleContract = () => {
    setIsContract(true);
  };
  return (
    <>
      <div onClick={handleContract}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div variants={viewImgVariants}>
            <div className="lg:h-[388px]">
              <img
                className="w-full h-full rounded "
                src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </motion.div>
        </motion.div>
        <div className="px-3 pt-4 space-y-2">
          <button
            onClick={handleContract}
            className={`text-sm border border-[#484b47] text-[#20231f] px-[5px] pb-1 rounded-md tracking-wide`}
          >
            Get in touch
          </button>
          <p>
            Ready to replace your outdated insurance software with a platform
            you’ll be excited to use every day? Schedule a demo today.
          </p>
        </div>
      </div>
    </>
  );
}

export default ContractInfo;
