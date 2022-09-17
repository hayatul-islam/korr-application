import React from "react";

function Testimonial({ testimonial, totolTestimonial, setId }) {
  const { title, body, id, img } = testimonial;
  const hanleLoaded = (value) => {
    switch (value) {
      case "next":
        if (id < totolTestimonial) {
          return setId(id + 1);
        } else {
          return setId(1);
        }
      case "previous":
        if (id > 1) {
          return setId(id - 1);
        } else {
          return setId(totolTestimonial);
        }
      default:
        return setId(1);
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <div className="grid items-between">
          <div>
            <div className="flex justify-between pb-6">
              <button
                className={`text-sm border border-[#484b47] text-[#8f908e] px-[5px] py-px rounded-lg`}
              >
                Testimonials
              </button>
              <p className="text-[16px] text-[#e9e9e9]">{title}</p>
            </div>
            <p className="text-3xl text-white leading-10">{body}</p>
          </div>
          <div className="flex justify-between items-end">
            <button
              onClick={() => hanleLoaded("previous")}
              className="text-white text-[16px] hover:underline "
            >
              Previous
            </button>
            <div className="flex space-x-48">
              <h5 className="text-white">
                {id}/{totolTestimonial}
              </h5>
              <button
                onClick={() => hanleLoaded("next")}
                className="text-white text-[16px] hover:underline "
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[600px]">
          <img className="w-full h-full rounded-xl" src={img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Testimonial;
