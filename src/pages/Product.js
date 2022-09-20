import React from "react";
import FAQ from "../components/product/FAQ";
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
        <FAQ />
      </div>
    </>
  );
}

export default Product;
