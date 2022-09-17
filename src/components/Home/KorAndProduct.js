import React, { useEffect, useState } from "react";
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
  }, [singelProductId]);

  return (
    <div className="flex space-x-12">
      <div>
        <button className="text-sm border border-black px-[5px] py-px rounded-lg">
          {title}
        </button>
      </div>
      <div>
        <p className="max-w-[680px] text-2xl">{details}</p>
        <div className="py-6 flex space-x-20">
          <div className="space-y-20 ">
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
              <div className="relative w-[350px] h-[390px] border rounded-2xl overflow-hidden">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KorAndProduct;
