import React from "react";

function Product({ product, singelProductId, setSingleProductId }) {
  const { title, details, productId } = product;
  return (
    <div className="flex space-x-12">
      <div className="min-w-[70px] mt-1">
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
        <p className="max-w-[474px] text-[16px]">{details}</p>
      </div>
    </div>
  );
}

export default Product;
