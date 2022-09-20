import React from "react";
import Form from "./Form";

function ContractForm({ setIsContract }) {
  const handleContract = () => {
    setIsContract(false);
  };
  return (
    <>
      <div className="px-3 p-4">
        <div className="pb-6 relative">
          <h3 className="text-[32px]">Get In Touch</h3>
          <div className="absolute right-1 top-0 z-50">
            <button onClick={handleContract} className=" text-[16px]">
              Close
            </button>
          </div>
        </div>

        <Form />
      </div>
    </>
  );
}

export default ContractForm;
