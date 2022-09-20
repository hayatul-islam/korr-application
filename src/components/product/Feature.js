import React from "react";

function Feature({ feature }) {
  const { name, title, img, body1, body2 } = feature || {};
  return (
    <>
      <div className="flex space-x-28 py-6">
        <div className="lg:flex">
          <div className="w-[100px] pt-2">
            <button
              className={`text-sm border border-black px-[5px] py-px rounded-md`}
            >
              {name}
            </button>
          </div>
          <div className="max-w-[620px]">
            <h4 className="text-[20px] md:text-3xl font-medium pb-5">
              {title}
            </h4>
            <p className="text-[16px] ">{body1}</p>
            <p className="text-[16px] pt-3 ">{body2}</p>
          </div>
        </div>
        <div className="max:h-[360px] max:w-[475px] ">
          <img className="w-full h-full rounded" src={img} alt={title} />
        </div>
      </div>
    </>
  );
}

export default Feature;
