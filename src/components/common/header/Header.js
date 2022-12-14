import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menubar from "./Menubar";
import MobileMenu from "./MobileMenu";
import ScrollMenu from "./ScrollMenu";

// const variants = {
//   open: { display: "block", x: 0},
//   closed: { display: "none", x: "-100%" },
// };

const variants = {
  open: {
    x: 0,
    // opacity: 1,
    display: "block",
    transition: {
      y: { stiffness: 1000, velocity: -700, duration: 3 },
    },
  },
  closed: {
    x: 1000,
    // opacity: 0,
    display: "none",
    transition: {
      x: { stiffness: 1000, duration: 1 },
    },
  },
};

export default function Header() {
  const [isMainMenu, setIsMainMenu] = useState(true);
  const [isAnimate, setIsAnimate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      setIsMainMenu(false);
      setIsAnimate(true);
    } else {
      setIsMainMenu(true);
    }
  }

  return (
    <>
      <div
        className={`fixed w-full md:static ${
          isOpen ? "bg-[#20231f] md:bg-white" : "bg-white"
        } z-50`}
      >
        <div className="flex justify-between items-center px-6 py-4 ">
          <div className={`w-[68px] h-[30px] cursor-pointer `}>
            <svg onClick={handleHome} viewBox="0 0 68 30">
              <path
                d="M19.9,10.11h-6.78l-7.94,7.58V0H0V29.39H5.18v-7.58l7.9,7.58h7.18l-10.33-9.81,9.97-9.47Zm19.88,9.66c0-5.76-4.67-10.19-10.73-10.19s-10.77,4.55-10.77,10.19,4.59,10.23,10.69,10.23,10.81-4.47,10.81-10.23Zm-16.27,.04c0-3.22,2.27-5.53,5.5-5.53s5.54,2.31,5.54,5.53-2.31,5.57-5.54,5.57-5.5-2.35-5.5-5.57Zm30.59-9.89h-1.08c-3.11,0-5.26,1.33-6.3,4.05v-3.86h-4.94V29.39h5.02v-9.17c0-4.2,1.99-5.68,5.62-5.68h1.67v-4.62Zm13.9,0h-1.08c-3.11,0-5.26,1.33-6.3,4.05v-3.86h-4.94V29.39h5.02v-9.17c0-4.2,1.99-5.68,5.62-5.68h1.67v-4.62Z"
                fill={`${isOpen ? "white" : "#20231f"}`}
              ></path>
            </svg>
          </div>
          {/* dasktop menu  */}
          <div className="hidden md:block">
            {isMainMenu && !isAnimate && <Menubar />}
            {isMainMenu && isAnimate && (
              <motion.div
                initial={{
                  position: "fixed",
                  left: "50%",
                  transform: "translateX(-50%) ",
                }}
                animate={{
                  position: "static",
                  left: "100%",
                  transform: "translateX(.1%)",
                }}
                transition={{
                  duration: 0.8,
                  ease: [0, 0.1, 0.2, 1.01],
                }}
              >
                <Menubar />
              </motion.div>
            )}
            {!isMainMenu && (
              <motion.div
                initial={{ position: "fixed", left: "100%" }}
                animate={{
                  position: "fixed",
                  left: "50%",
                  transform: "translateX(-50%) ",
                  zIndex: 9999,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0, 0.1, 0.2, 1.01],
                }}
              >
                {/* <Menubar /> */}
                <ScrollMenu />
              </motion.div>
            )}
          </div>
          {/* mobile menu  */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((isOpen) => !isOpen)}
              className={`${
                isOpen ? "bg-white text-[#20231f] " : "bg-[#20231f] text-white"
              } px-2 pb-1 rounded-md text-lg`}
            >
              {isOpen ? "Cancel" : "Menu"}
            </button>
          </div>
        </div>
        <motion.div animate={isOpen ? "open" : "closed"} variants={variants}>
          <div className="md:hidden">
            <MobileMenu setIsOpen={setIsOpen} />
          </div>
        </motion.div>
      </div>
    </>
  );
}
