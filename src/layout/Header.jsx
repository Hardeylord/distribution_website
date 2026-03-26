import { ArrowRight, MoveRight } from "lucide-react";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = () => {
  const menu = [
    {
      name: "Home",
    },
    {
      name: "About Us",
    },
    {
      name: "Service",
    },
    {
      name: "Process",
    },
    {
      name: "FAQ",
    },
  ];
  return (
    <>
      <div className="flex p-2 px-10 w-full">
        <div className="flex w-1/3 items-center">
          <img src="/logo.svg" className="size-11" alt="" srcset="" />
          <p className="text-[9px]">
            Aishat <br /> Multipurpose Ltd
          </p>
        </div>

        <div className="flex w-1/3 items-center justify-between">
          {menu.map((menu, index) => (
            <section className="cursor-pointer" key={index}>
              <p>{menu.name}</p>
            </section>
          ))}
        </div>

        <div className="flex w-1/3 items-center justify-end">
          <StyledWrapper>
            <button className="button text-xs">Get in touch</button>
          </StyledWrapper>
          {/* <button className="flex items-center gap-2 rounded-full border py-0.5 px-2 text-xs cursor-pointer">
            Contact Us <ArrowRight strokeWidth={1.2} />
          </button> */}
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
