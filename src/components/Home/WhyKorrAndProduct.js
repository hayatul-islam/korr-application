import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

function WhyKorrAndProduct() {
  return (
    <>
      <div className="flex justify-between py-6">
        <p className="max-w-[720px] text-2xl">
          Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
          yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin
          grog yardarm hempen halter furl. Swab barque interloper chantey
          doubloon starboard grog black jack gangway rutters.
        </p>
        <div>
          <NavLink className="flex items-center" to="#why-kor">
            <VscChevronRight />
            <span>Why korr</span>
          </NavLink>
          <NavLink to="#why-kor">
            <VscChevronRight />
            Why korr
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default WhyKorrAndProduct;
