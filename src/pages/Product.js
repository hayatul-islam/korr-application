import React from "react";
import Platforms from "../components/product/Platforms";
import ProductTitle from "../components/product/ProductTitle";
import ProductVideoAnimation from "../components/product/ProductVideoAnimation";

function Product() {
  return (
    <>
      <div className="px-6">
        <ProductTitle />
      </div>
      <ProductVideoAnimation />
      <div className="px-6">
        <Platforms />
      </div>
    </>
  );
}

export default Product;
