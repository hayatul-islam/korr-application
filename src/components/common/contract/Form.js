import React from "react";

function Form() {
  return (
    <>
      <form>
        <div className="relative z-0 mb-6 w-full">
          <label className="font-medium text-[12px]">Full name</label>
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-xl  text-gray-900 bg-transparent border-0 border-b border-gray-800 appearance-none  focus:outline-none focus:ring-0  peer"
            placeholder="Jone Due"
            required
          />
        </div>
        <div className="relative z-0 mb-6 w-full">
          <label className="font-medium text-[12px]">Email</label>
          <input
            type="email"
            className="block py-2.5 px-0 w-full text-xl  text-gray-900 bg-transparent border-0 border-b border-gray-800 appearance-none  focus:outline-none focus:ring-0  peer"
            placeholder="boss@gmail.com"
            required
          />
        </div>
        <div className="relative z-0 mb-6 w-full">
          <label className="font-medium text-[12px]">Message</label>
          <textarea
            type="text"
            className="block py-2.5 px-0 w-full text-xl  text-gray-900 bg-transparent border-0 border-b border-gray-800 appearance-none  focus:outline-none focus:ring-0  peer"
            placeholder="Type text"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#e9e9e9] text-[#484b47] px-2 py-1 rounded "
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
