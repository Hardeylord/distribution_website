import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { toast, Toaster } from "sonner";
const Footer = () => {
  const menu = [
    {
      name: "Home",
      to: "hero-section",
    },
    {
      name: "About Us",
      to: "about-us",
    },
    {
      name: "Service",
      to: "service",
    },
    {
      name: "Products",
      to: "products",
    },
    {
      name: "FAQ",
      to: "faq",
    },
  ];

  const socials = [
    {
      name: "Instagram",
      to: "#",
    },
    {
      name: "Facebook",
      to: "#",
    },
    {
      name: "Twitter",
      to: "#",
    },
  ];

  const legals = [
    {
      name: "Terms of service",
      to: "#",
    },
    {
      name: "Privacy policy",
      to: "#",
    },
    {
      name: "Cookie policy",
      to: "#",
    },
  ];
  return (
    <>
      <TooltipProvider>
        <Toaster/>
        <div className="w-full border-t flex flex-col md:flex-row bg-[#404040] border-[#d6d6d6] md:h-[70vh] mt-20 py-20 px-4 md:px-10 text-white space-y-3">
          <div className="w-full space-y-5 md:w-1/2 flex flex-col items-start justify-between">
            <div className="flex  items-center">
              <img src="/logo.svg" className="size-11" alt="" srcset="" />
              <p className="text-[9px]">
                Aishat <br /> Multipurpose Ltd
              </p>
            </div>
            <div>
              <p>No 32, Aisha Warehouse, Mokola Area Saki Oyo State</p>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div>
                <h1 className="text-[#d6d6d6] text-xs">Phone number</h1>
                <Tooltip>
                    <TooltipTrigger onClick={() => {
                      navigator.clipboard.writeText("07035071286")
                      toast.success("07035071286 copied", {position: "top-center" })
                    }}
                  className="flex gap-2 items-center cursor-pointer text-sm">
                    <p>07035071286</p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>copy 07035071286</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger onClick={() => {
                      navigator.clipboard.writeText("07086330317")
                      toast.success("07086330317 copied", {position: "top-center" })
                    }}
                  className="flex gap-2 items-center cursor-pointer text-sm">
                    <p>07086330317</p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>copy 07086330317</p>
                    </TooltipContent>
                  </Tooltip>
              </div>
              <div>
                <h1 className="text-[#d6d6d6] text-xs">Email</h1>
                <Tooltip>
                    <TooltipTrigger onClick={() => {
                      navigator.clipboard.writeText("aishamultipurposetradingltd@gmail.com")
                      toast.success("E-mail copied", {position: "top-center" })
                    }}
                  className="flex gap-2 items-center cursor-pointer text-sm">
                    <p>aishamultipurposetradingltd@gmail.com</p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>copy email</p>
                    </TooltipContent>
                  </Tooltip>
              </div>
            </div>
          </div>

          <div className="w-full flex gap-10 md:w-1/2 flex-col md:flex-row">
            <div className="space-y-2">
              <h1 className="text-[#d6d6d6] text-xs">Quick Link</h1>
              <section className="space-y-3">
                {menu.map((menu, i) => (
                  <section className="cursor-pointer" onClick={()=>{
                    const id = menu.to;
                    document.getElementById(id)?.scrollIntoView({behavior:"smooth"})
                  }} key={i}>
                    <p>{menu.name}</p>
                  </section>
                ))}
              </section>
            </div>
            <div className="space-y-2">
              <h1 className="text-[#d6d6d6] text-xs">Quick Link</h1>
              <section className="space-y-3">
                {socials.map((socmed, i) => (
                  <section key={i}>
                    <p>{socmed.name}</p>
                  </section>
                ))}
              </section>
            </div>
            <div className="space-y-2">
              <h1 className="text-[#d6d6d6] text-xs">Quick Link</h1>
              <section className="space-y-3">
                {legals.map((legal, i) => (
                  <section key={i}>
                    <p>{legal.name}</p>
                  </section>
                ))}
              </section>
            </div>
          </div>
        </div>
      </TooltipProvider>
    </>
  );
};

export default Footer;
