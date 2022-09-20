import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import viewImgVariants from "../../utils/viewImgVariants";
import viewVariants from "../../utils/viewVariants";
import Product from "./Product";

function KorAndProduct({ product }) {
  const { title, details, product: products } = product;
  const [singleProduct, setSingleProduct] = useState({});
  const [singelProductId, setSingleProductId] = useState(1);

  useEffect(() => {
    const findProduct = products?.find(
      (product) => product?.productId === singelProductId
    );
    setSingleProduct(findProduct);
  }, [singelProductId, products]);

  return (
    <div id={title} className="lg:flex lg:space-x-12">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div variants={viewVariants}>
          <div className="pb-4 lg:pb-0">
            <button className="text-sm border border-black px-[5px] py-px rounded-lg">
              {title}
            </button>
          </div>
        </motion.div>
      </motion.div>
      <div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div variants={viewVariants}>
            <p className="lg:max-w-[680px] text-2xl">{details}</p>
          </motion.div>
        </motion.div>

        <div className="grid lg:flex lg:space-x-20">
          <div
            className={`lg:space-y-10 order-last lg:order-first ${
              products?.length > 0 && "lg:py-6"
            } `}
          >
            {products?.map((product) => (
              <Product
                key={product?.title}
                product={product}
                setSingleProductId={setSingleProductId}
                singelProductId={singelProductId}
              />
            ))}
          </div>

          <div>
            {products !== undefined && products?.length !== 0 && (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
              >
                <motion.div variants={viewImgVariants}>
                  <div className="relative my-5 lg:my-0 lg:w-[350px] lg:h-[390px] border rounded-2xl overflow-hidden">
                    <img
                      src={singleProduct?.img}
                      alt="Avatar"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute w-full py-2.5 top-0 inset-x-0">
                      <div className="flex justify-between px-3 text-white text-[16px]">
                        <h6 className="">{singleProduct?.title}</h6>
                        <h6 className="text-[#8f908e]">
                          {singleProduct?.productId}/{products?.length}
                        </h6>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KorAndProduct;
