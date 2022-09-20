import { motion } from "framer-motion";
import React from "react";
import { viewport, viewVariants } from "../../utils/viewVariants";
import FqaItim from "./FqaItim";

// fake data
const data = [
  {
    id: 1,
    question: "Brownie oat cake jelly-o topping pudding?",
    ans: "Macaroon shortbread liquorice topping cake gingerbread. Gummies tiramisu gummies jelly beans dragée toffee cupcake bonbon. Marshmallow cookie apple pie pastry cake oat cake macaroon dragée jujubes. Chupa chups cake gingerbread tart marzipan chocolate pie dragée. Toffee cake pastry icing oat cake jelly. Marzipan jelly beans gummi bears marzipan croissant. Bonbon apple pie dragée cupcake pie oat cake shortbread. Fruitcake soufflé soufflé apple pie ice cream lollipop jelly-o. Sweet roll chupa chups tart croissant icing cake pastry brownie jelly-o",
    question_type: "Product",
  },
  {
    id: 2,
    question: "Candy canes carrot cake muffin tiramisu?",
    ans: " Candy canes carrot cake muffin tiramisu jelly beans sesame snaps biscuit. Powder lollipop powder cake sweet. Ice cream pastry wafer carrot cake tart jelly croissant brownie chupa chups. Sugar plum tiramisu lollipop cotton candy gummies powder chocolate bar. Toffee jelly-o carrot cake donut bonbon lemon drops. Gummi bears bonbon liquorice tiramisu ice cream tiramisu cupcake dessert. Halvah marzipan candy canes bonbon halvah muffin muffin.",
    question_type: "Peoduct",
  },
  {
    id: 3,
    question: "Cheesecake jelly-o apple pie dessert?",
    ans: "Cheesecake jelly-o apple pie dessert liquorice gummi bears tart. Shortbread ice cream chocolate bar liquorice chocolate bar sugar plum cheesecake gingerbread. Marshmallow candy canes jelly jujubes carrot cake cheesecake chocolate cupcake. Donut danish cheesecake carrot cake pastry gummies. Marshmallow marshmallow wafer gingerbread sweet. Wafer toffee cupcake caramels biscuit chupa chups powder sesame snaps. Marshmallow bonbon wafer chocolate cake tart pie.",
    question_type: "Development",
  },
];

function FAQ() {
  return (
    <>
      <div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={viewport}
        >
          <motion.div variants={viewVariants}>
            <div className="py-6 space-y-5">
              <div className="">
                <button
                  className={`text-sm border border-black px-[5px] py-px rounded-md`}
                >
                  FAQ
                </button>
              </div>

              <div>
                <p className="text-[20px] md:text-3xl font-medium md:leading-10">
                  Tart danish lollipop croissant jujubes shortbread shortbread
                  toffee lemon drops. Cake tootsie roll lemon drops marzipan ice
                  cream tiramisu. Liquorice cheesecake tootsie roll candy gummi
                  bears candy tart wafer. Jelly-o fruitcake halvah candy canes
                  apple pie. Caramels tootsie roll croissant brownie.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className="py-8">
          <div className="grid grid-cols-[70%_30%] text-[#8f908e] text-[12px] pb-3">
            <p>Question</p>
            <p>Area</p>
          </div>
          {data?.map((fqa) => (
            <FqaItim key={fqa?.id} fqa={fqa} />
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;
