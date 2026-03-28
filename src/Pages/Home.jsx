import React from "react";
import Whyus from "./homeComponent/Whyus";
import Productlist from "./homeComponent/Productlist";

export const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-center md:px-10 md:mb-20 space-y-3">
        {/* h-112.5 */}
        <div className="h-150 md:h-122.5 flex px-5 md:px-15 justify-between items-end bg-[url(/1111_upscayl_4x.jpg)] bg-cover bg-no-repeat bg-center w-full">
          <h1 className="text-white text-xl md:text-5xl">
            Powering E-Commerce Deliveries{" "}
          </h1>
          <h1 className="text-white">
          Seamless Distribution.<br/> Zero Compromise.
          </h1>
        </div>
        <div className="px-5 md:px-15">
        <h1 className="md:text-5xl">Across Every Route</h1>
        </div>

        <div className="border w-full border-[#a5a5a5]"></div>
      </div>

      <Whyus/>
      <Productlist/>
    </>
  );
};
