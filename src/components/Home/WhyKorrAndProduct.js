import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import KorAndProduct from "./KorAndProduct";

function WhyKorrAndProduct() {
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
            "Insurance is all about expecting the unexpected. Agents need a platform that lets them rapidly adapt to unforeseen changes. Speed is the guiding philosophy driving Korr.",
          img: "https://www.gokorr.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fnwzoe7sd%2Fproduction%2F6edcf6d2f0f3e74b5863ede61a6e73a2c1f821df-2543x2797.png%3Fw%3D1060&w=1920&q=75",
        },
        {
          productId: 2,
          title: "Structure",
          details:
            "Insurance is all about expecting the unexpected. Agents need a platform that lets them rapidly adapt to unforeseen changes. Speed is the guiding philosophy driving Korr.",
          img: "",
        },
        {
          productId: 3,
          title: "Build",
          details:
            "Insurance is all about expecting the unexpected. Agents need a platform that lets them rapidly adapt to unforeseen changes. Speed is the guiding philosophy driving Korr.",
          img: "",
        },
        {
          productId: 4,
          title: "Product",
          details:
            "Insurance is all about expecting the unexpected. Agents need a platform that lets them rapidly adapt to unforeseen changes. Speed is the guiding philosophy driving Korr.",
          img: "",
        },
      ],
    },
  ];
  return (
    <>
      {/* highlight */}
      <section className="flex justify-between py-6">
        <p className="max-w-[725px] text-2xl">
          Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
          yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin
          grog yardarm hempen halter furl. Swab barque interloper chantey
          doubloon starboard grog black jack gangway rutters.
        </p>
        <div>
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

      {/* details  */}
      <section className="space-y-20 py-6">
        {korAndProducts?.map((product) => (
          <KorAndProduct key={product?.id} product={product} />
        ))}
      </section>
    </>
  );
}

export default WhyKorrAndProduct;
