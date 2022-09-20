import React from "react";
import ProductTitle from "../components/product/ProductTitle";
import ProductVideoAnimation from "../components/product/ProductVideoAnimation";

function Product() {
  return (
    <>
      <div className="px-6">
        <ProductTitle />
      </div>
      <ProductVideoAnimation />
    </>
  );
}

export default Product;
