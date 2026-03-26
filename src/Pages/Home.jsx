import React from "react";
import Whyus from "./homeComponent/Whyus";

export const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-center px-10 space-y-3">
        <div className="h-112.5 flex px-15 justify-between items-end bg-[url(/1111_upscayl_4x.jpg)] bg-cover bg-no-repeat bg-center w-full">
          <h1 className="text-white text-5xl">
            Powering E-Commerce Deliveries{" "}
          </h1>
          <h1 className="text-white">
          Seamless Distribution.<br/> Zero Compromise.
          </h1>
        </div>
        <div className="px-15">
        <h1 className="text-5xl">Across Every Route</h1>
        </div>

        <div className="border w-full border-[#a5a5a5]"></div>
      </div>

      <Whyus/>
    </>
  );
};
