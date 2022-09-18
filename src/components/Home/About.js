import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <div className="py-8 md:py-12">
        <div className="md:pt-12 space-y-4">
          <button
            className={`text-sm border border-black px-[5px] py-px rounded-lg`}
          >
            Learn more
          </button>
          <p className="text-[20px] md:text-3xl md:leading-10">
            Liquorice croissant topping lemon drops fruitcake tootsie roll.
            Pudding muffin dessert jelly beans sugar plum wafer wafer. Soufflé
            cake sweet jelly beans tiramisu caramels cake sesame snaps.
            Marshmallow jujubes brownie gummies topping tiramisu. Sweet
            shortbread croissant caramels lemon drops jelly. Sweet candy powder
            dessert tart carrot cake. Bonbon lollipop cupcake marshmallow powder
            chocolate bar cake soufflé.
          </p>
        </div>
        {/* about  */}
        <div className="grid md:grid-cols-2 gap-8 pt-8">
          <div className="space-y-6">
            <div className="h-[230px] sm:h-[260px]">
              <img
                className="w-full h-full rounded"
                src="https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxjb2xvcmZ1bCUyMGFib3V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div>
              <div className="lg:flex space-y-3 lg:space-y-0">
                <div className="min-w-[120px]">
                  <NavLink
                    to="/about"
                    className="text-sm border border-black px-[5px] py-px rounded-lg mt-1 pb-1"
                  >
                    Learn more
                  </NavLink>
                </div>
                <p className="text-[16px]">
                  Sweet roll cupcake liquorice cotton candy croissant halvah.
                  Jujubes donut sweet roll chocolate cake wafer liquorice
                  lollipop sesame snaps. Oat cake marzipan chocolate pastry
                  wafer jujubes bear claw sweet liquorice. Lemon drops chupa
                  chups halvah bear claw candy gummi bears topping tootsie roll.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="h-[230px] sm:h-[260px]">
              <img
                className="w-full h-full rounded"
                src="https://images.unsplash.com/photo-1628841878739-f2f0fc1c0fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTAwfDE3ODE0MDh8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div>
              <div className="lg:flex space-y-3 lg:space-y-0">
                <div className="min-w-[100px]">
                  <NavLink
                    to="/mission"
                    className="text-sm border border-black px-[5px] py-px rounded-lg mt-1 pb-1"
                  >
                    Mission
                  </NavLink>
                </div>
                <p className="text-[16px]">
                  Chocolate bar jelly lollipop brownie brownie. Pie dessert
                  powder cake cake dessert cake. Cake cake muffin tootsie roll
                  carrot cake dragée marshmallow candy canes. Sweet roll
                  croissant cookie sweet roll dessert dessert topping. Sesame
                  snaps gummies muffin croissant candy pie. Bear claw chupa
                  chups cotton candy gummi bears marshmallow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
