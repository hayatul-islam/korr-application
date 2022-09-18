import React, { useState } from "react";
import ContractForm from "./ContractForm";
import ContractInfo from "./ContractInfo";

function Contract() {
  const [isContract, setIsContract] = useState(false);
  return (
    <>
      <div className=" bg-white rounded-xl pb-2 z-50">
        {isContract ? (
          <ContractForm setIsContract={setIsContract} />
        ) : (
          <ContractInfo setIsContract={setIsContract} />
        )}
      </div>
    </>
  );
}

export default Contract;
