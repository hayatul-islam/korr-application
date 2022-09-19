import { motion } from "framer-motion";
import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import viewVariants from "../../utils/viewVariants";
import KorAndProduct from "./KorAndProduct";
//fake data
const korAndProducts = [
  {
    id: 1,
    title: "Why korr",
    details:
      "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
  },
  {
    id: 2,
    title: "Product",
    details:
      "Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.",
    product: [
      {
        productId: 1,
        title: "Concept",
        details:
          "Sweet carrot cake biscuit gummies lemon drops biscuit wafer apple pie jelly. Halvah gummi bears chupa chups candy canes sweet halvah tart sweet. Lemon drops sweet chocolate cake croissant topping cotton candy bonbon chocolate.",
        img: "https://images.unsplash.com/photo-1658248165252-71e116af1b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA3fHxkZXNpZ24lMjBkYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        productId: 2,
        title: "Structure",
        details:
          "Sugar plum topping cotton candy sesame snaps powder topping oat cake. Shortbread powder cake sweet powder toffee. Cake topping chocolate candy canes cheesecake chupa chups topping cake sesame snaps. ",
        img: "https://images.unsplash.com/photo-1659117296097-6347168cea00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjIwfHxkZXNpZ24lMjBkYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        productId: 3,
        title: "Build",
        details:
          "Candy gingerbread marzipan jujubes chocolate cotton candy donut. Wafer cake icing lollipop halvah marzipan. Caramels gummies liquorice lollipop liquorice croissant topping jujubes. Dessert carrot cake oat cake dragée apple pie wafer tart. ",
        img: "https://images.unsplash.com/photo-1656427411300-4a35e3c7d058?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGRlc2lnbiUyMGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        productId: 4,
        title: "Product",
        details:
          "Cake dessert jelly-o muffin icing jelly dessert lollipop. Icing chocolate cheesecake carrot cake pastry macaroon. Caramels fruitcake chocolate cake dragée chocolate bar carrot cake icing cheesecake. Cotton candy candy canes brownie cake danish pastry pudding.",
        img: "https://images.unsplash.com/photo-1658248165127-f880b5a74e98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA1fHxkZXNpZ24lMjBkYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },
];
function WhyKorrAndProduct() {
  return (
    <>
      {/* highlight */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div variants={viewVariants}>
          <section className="flex justify-between py-6">
            <p className="max-w-[725px] text-2xl">
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper chantey doubloon starboard grog black jack gangway
              rutters.
            </p>
            <div className="hidden lg:block">
              <NavLink
                className="flex items-center justify-end group text-[16px] text-[#8f908e] hover:text-[#34d601] "
                to="#why-korr"
              >
                <VscChevronRight className="hidden group-hover:block" />
                <span>Why korr</span>
              </NavLink>
              <NavLink
                className="flex items-center justify-end group text-[16px] text-[#8f908e] hover:text-[#34d601] "
                to="/#product"
              >
                <VscChevronRight className="hidden group-hover:block" />
                <span>Product</span>
              </NavLink>
            </div>
          </section>
        </motion.div>
      </motion.div>

      {/* details  */}
      <section className="space-y-10 lg:space-y-20 py-6">
        {korAndProducts?.map((product) => (
          <KorAndProduct key={product?.id} product={product} />
        ))}
      </section>
    </>
  );
}

export default WhyKorrAndProduct;
