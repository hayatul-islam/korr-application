import React from "react";
import Form from "../common/contract/Form";

function Demo() {
  return (
    <>
      <div className="pt-20 md:pt-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-6 py-12 lg:py-28 space-y-8 lg:space-y-0 ">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium pb-12">
              Fruitcake Candy Gingerbread
            </h2>
            <p className="text-[16px]">
              Dragée chocolate sugar plum candy canes pie gingerbread. Jelly
              beans cotton candy oat cake jelly beans pudding pudding chupa
              chups. Ice cream bonbon chocolate donut cake sugar plum. Jelly-o
              macaroon pie gingerbread liquorice sweet. Pie pudding marshmallow
              gummi bears muffin. Oat cake croissant sesame snaps tiramisu
              dragée candy carrot cake. Pastry jelly beans gummi bears fruitcake
              tiramisu chocolate powder ice cream.
            </p>
            <div className="pt-8">
              <Form />
            </div>
          </div>
          <div className="">
            <img
              className="w-full h-full rounded-xl"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo;
