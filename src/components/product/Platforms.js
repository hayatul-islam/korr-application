import { motion } from "framer-motion";
import React from "react";
import { viewport, viewVariants } from "../../utils/viewVariants";
import Feature from "./Feature";

// fake data
const features = [
  {
    id: 1,
    name: "Why Korr",
    title: "Marzipan donut dessert ",
    img: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    body1:
      "Apple pie gummies dessert muffin soufflé. Halvah dessert soufflé cheesecake halvah carrot cake tiramisu topping marshmallow. Powder biscuit liquorice croissant tootsie roll tiramisu jujubes. Toffee sweet roll carrot cake dessert cheesecake marzipan gummies. Donut apple pie biscuit tart chocolate bar tiramisu candy canes halvah bonbon",
    body2:
      " Apple pie tart toffee cookie topping cake. Toffee wafer danish chocolate cake caramels jelly dragée. Cotton candy cupcake dragée danish caramels sweet. Jujubes cake biscuit fruitcake topping tootsie roll danish marshmallow.",
  },
  {
    id: 2,
    name: "Feature",
    title: "lemon drops topping Lollipop donut ",
    img: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    body1:
      " I love pudding jujubes wafer I love cupcake. Wafer chocolate cake cupcake powder cake candy canes. Danish dragée toffee chocolate cake sesame snaps candy gummi bears marzipan shortbread. Lemon drops dragée marzipan sugar plum fruitcake donut pie toffee donut. Cotton candy tootsie roll tart bonbon sweet candy tiramisu cheesecake",
    body2:
      "Dessert I love icing chocolate cake oat cake sugar plum ice cream sugar plum. Dessert soufflé caramels I love I love danish lollipop I love carrot cake",
  },
  {
    id: 3,
    name: "Feature",
    title: "Chocolate bar powder gummi bears croissant",
    img: "https://images.unsplash.com/photo-1513436539083-9d2127e742f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    body1:
      "Dessert apple pie cupcake tart dragée. Pie halvah brownie ice cream marzipan candy canes. Sweet roll tiramisu cupcake soufflé icing muffin halvah. ",
    body2:
      "Chocolate bar fruitcake caramels jelly-o apple pie gingerbread donut pie bear claw. Cake sesame snaps cake donut soufflé powder chocolate bar. Cake dragée marshmallow muffin dragée oat cake muffin shortbread. Soufflé macaroon cotton candy macaroon marzipan chupa chups halvah. Gummies chocolate sugar plum gingerbread candy soufflé shortbread. Macaroon carrot cake soufflé chocolate bar cheesecake dragée fruitcake muffin gummi bears. ",
  },
];

function Platforms() {
  return (
    <>
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
                Platform
              </button>
            </div>

            <div>
              <p className="text-[20px] md:text-3xl font-medium md:leading-10">
                Cotton candy candy canes brownie cake danish pastry pudding. Pie
                cake danish sugar plum halvah tiramisu. Donut bonbon gingerbread
                cotton candy danish fruitcake. Croissant sweet roll tart gummi
                bears caramels brownie macaroon bonbon tiramisu.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="py-12">
        {features?.map((feature) => (
          <Feature key={feature?.id} feature={feature} />
        ))}
      </div>
    </>
  );
}

export default Platforms;
