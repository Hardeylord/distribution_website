import { ArrowRight, MoveRight } from "lucide-react";
import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalContext } from "../hooks/Globalhooks";
export const Header = () => {
  const { open, isOpen } = useContext(GlobalContext);

  const expandMenu = () => {
    isOpen(!open);
  };

  const navigate = (location) => {
    isOpen(!open);
    const id = location.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  const menu = [
    {
      name: "Home",
      to:"#hero-section"
    },
    {
      name: "About Us",
      to:"#about-us"
    },
    {
      name: "Service",
      to:"#service"
    },
    {
      name: "Products",
      to:"#products"
    },
    {
      name: "FAQ",
      to:"#faq"
    },
  ];
  return (
    <>
      <div className="flex bg-white fixed z-50 p-1 md:px-10 w-full border-b border-[#d6d6d6] md:border-b-0">
        <div className="flex w-1/2 md:w-1/3 items-center">
          <img src="/logo.svg" className="size-11" alt="" srcset="" />
          <p className="text-[9px]">
            Aishat <br /> Multipurpose Ltd
          </p>
        </div>

        <div
          onClick={expandMenu}
          className="md:hidden flex flex-col gap-1.5 w-1/2 items-end justify-center"
        >
          <div
            className={`h-0.5 w-10 bg-black transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <div
            className={`h-0.5 w-10 bg-black transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex w-1/3 items-center justify-between">
          {menu.map((menu, index) => (
            <section onClick={()=>{
              const id = menu.to.replace("#", "")
              document.getElementById(id)?.scrollIntoView({"behavior": "smooth"})
            }} className="cursor-pointer" key={index}>
              <p>{menu.name}</p>
            </section>
          ))}
        </div>

        <div className="hidden md:flex md:w-1/3 items-center justify-end">
          <StyledWrapper>
            <button className="button text-xs">Get in touch</button>
          </StyledWrapper>
          {/* <button className="flex items-center gap-2 rounded-full border py-0.5 px-2 text-xs cursor-pointer">
            Contact Us <ArrowRight strokeWidth={1.2} />
          </button> */}
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`bg-white flex flex-col px-4 space-y-5 py-10 fixed z-40 top-13 w-full transition-transform duration-300 ease-in-out ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {menu.map((menu, index) => (
          <section onClick={() => navigate(menu.to)} className="cursor-pointer" key={index}>
            <p className="text-5xl">{menu.name}</p>
          </section>
        ))}
        <div className="flex items-center ">
          <StyledWrapper>
            <button className="button text-xs">Get in touch</button>
          </StyledWrapper>
        </div>
      </div>
    </>
  );
};
const StyledWrapper = styled.div`
  .button {
    display: inline-block;
    padding: 10px 19px;
    border: 1px solid #4f4f4f;
    border-radius: ;
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    font-size: 12px;
    cursor: pointer;
    color: black;
    z-index: 1;
  }

  .button:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #0b5c0d;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:hover {
    color: #ffffff;
    border: 1px solid #0b5c0d;
  }

  .button:hover:before {
    top: -35%;
    background-color: #0b5c0d;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  .button:hover:after {
    top: -45%;
    background-color: #0b5c0d;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`;
