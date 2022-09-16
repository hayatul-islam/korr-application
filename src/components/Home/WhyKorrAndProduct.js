import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { NavLink, useNavigate } from "react-router-dom";

function WhyKorrAndProduct() {
  const navigate = useNavigate();
  const handleNavigate = (value) => {
    navigate(`/#${value}`);
  };
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
        <div id="why-korr" className="flex space-x-12">
          <div>
            <button className="text-sm border border-black px-[5px] py-px rounded-lg">
              Why korr
            </button>
          </div>
          <p className="max-w-[680px] text-2xl">
            Deadlights jack lad schooner scallywag dance the hempen jig carouser
            broadside cable strike colors. Bring a spring upon her cable
            holystone blow the man down spanker Shiver me timbers to go on
            account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul
            squiffy black spot yardarm spyglass sheet transom heave to.
          </p>
        </div>
        <div id="product" className="flex space-x-12">
          <div>
            <button className="text-sm border border-black px-[5px] py-px rounded-lg">
              Product
            </button>
          </div>
          <div>
            <p className="max-w-[680px] text-2xl">
              Trysail Sail ho Corsair red ensign hulk smartly boom jib rum
              gangway. Case shot Shiver me timbers gangplank crack Jennys tea
              cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge
              of the seven seas boatswain schooner gaff booty Jack Tar transom
              spirits.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyKorrAndProduct;
