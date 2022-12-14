import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { viewport, viewVariants } from "../../utils/viewVariants";

function Product({ product, singelProductId, setSingleProductId }) {
  const { title, details, productId } = product;
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setSingleProductId(productId);
    } else {
      setSingleProductId(productId);
    }
  }, [isInView, productId, setSingleProductId]);

  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={viewport}
      >
        <motion.div variants={viewVariants}>
          <div ref={ref} id={productId} className="lg:flex lg:space-x-12 ">
            <div className="min-w-[70px] mt-1 py-3 lg:py-0">
              <button
                onClick={() => setSingleProductId(productId)}
                className={`text-sm border border-black px-[5px] py-px rounded-lg ${
                  singelProductId === productId && "bg-[#20231f] text-white"
                }`}
              >
                {title}
              </button>
            </div>
            <div>
              <p className="lg:max-w-[474px] text-[16px]">{details}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Product;
