import { Copy, Mail, MapPin, Phone } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner"

import React from "react";
import { toast } from "sonner";

const Aboutus = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Phone number copied", {position: "top-center" })
  };
  return (
    <>
      <TooltipProvider>
        <Toaster/>
        <div className="mt-20">
          <h1 className="text-center text-2xl md:text-4xl">
            From Warehouse to Doorstep, Faster.
          </h1>
          <p className="text-center">Moving Goods. Building Trust.</p>
        </div>
        <div
          id="about-us"
          className="w-full overflow-hidden min-h-[80vh] flex flex-col md:flex-row relative px-4 md:px-0"
        >
          {/* LEFT IMAGE */}
          <div className="hidden md:block md:w-1/4 relative">
            <div
              style={{ backgroundImage: "url(/trucks.png)" }}
              className="absolute top-48 -left-24 bg-cover bg-no-repeat bg-center w-72 h-72"
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="w-full md:w-2/4 flex justify-center items-center py-10">
            <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 md:gap-10 items-center justify-center">
              {/* LEFT GRID */}
              <div className="flex flex-col md:mt-20 gap-4 w-full md:w-auto">
                <div
                  style={{
                    backgroundImage: "url(/bg-truck.png)",
                  }}
                  className={` md:hidden opacity-40 absolute -left-8 bg-cover bg-no-repeat bg-center size-60`}
                />
                <div className="flex flex-col justify-center items-center w-full md:w-64 py-6 border-b border-[#d6d6d6]">
                  <section className="rounded-full bg-[#d6d6d6] p-2 w-fit">
                    <Phone size={16} strokeWidth={1.25} />
                  </section>

                  {/* <div
                  onClick={() => handleCopy("07035071286")}
                  className="flex gap-2 items-center cursor-pointer text-sm"
                >
                  <p>07035071286</p>
                  <Copy size={12} strokeWidth={1.25} />
                </div> */}
                  <Tooltip>
                    <TooltipTrigger onClick={() => handleCopy("07035071286")}
                  className="flex gap-2 items-center cursor-pointer text-sm">
                    <p>07035071286</p>
                    <Copy size={12} strokeWidth={1.25} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>copy 07035071286</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger onClick={() => handleCopy("07086330317")}
                  className="flex gap-2 items-center cursor-pointer text-sm">
                    <p>07035071286</p>
                    <Copy size={12} strokeWidth={1.25} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>copy 07086330317</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* <div
                    onClick={() => handleCopy("07086330317")}
                    className="flex gap-2 items-center cursor-pointer text-sm"
                  >
                    <p>07086330317</p>
                    <Copy size={12} strokeWidth={1.25} />
                  </div> */}

                  <section className="rounded-full bg-[#d6d6d6] p-2 w-fit mt-2">
                    <Mail size={16} strokeWidth={1.25} />
                  </section>

                  {/* <div
                    onClick={() =>
                      handleCopy("aishamultipurposetradingltd@gmail.com")
                    }
                    className="flex gap-2 z-20 items-center cursor-pointer text-xs text-center break-all"
                  >
                    <p>aishamultipurposetradingltd@gmail.com</p>
                    <Copy size={12} strokeWidth={1.25} />
                  </div> */}
                  <Tooltip>
                    <TooltipTrigger onClick={() => {
                      navigator.clipboard.writeText("aishamultipurposetradingltd@gmail.com")
                      toast.success("E-mail copied", {position: "top-center" })
                    }}
                  className="flex gap-2 items-center cursor-pointer text-sm">
                    <p>aishamultipurposetradingltd@gmail.com</p>
                    <Copy size={12} strokeWidth={1.25} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>copy email</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className="flex flex-col items-center gap-2 w-full md:w-64 py-6">
                  <section className="rounded-full bg-[#d6d6d6] p-2 w-fit">
                    <MapPin size={16} strokeWidth={1.25} />
                  </section>
                  <h1 className="font-medium">Main office</h1>
                  <p className="text-xs text-center">
                    No 32, Aisha Warehouse, Mokola Area Saki Oyo State
                  </p>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="hidden md:block h-64 w-px bg-[#535353]" />

              {/* RIGHT GRID */}
              <div className="flex flex-col gap-4 w-full md:w-auto">
                <div className="flex flex-col items-center gap-2 w-full md:w-64 py-6 border-b border-[#d6d6d6]">
                  <h1 className="font-medium">Branch 1</h1>
                  <section className="rounded-full bg-[#d6d6d6] p-2 w-fit">
                    <MapPin size={16} strokeWidth={1.25} />
                  </section>
                  <p className="text-xs text-center">
                    Aisha Store, Opposite Iseyin Police Station, Iseyin - Oyo
                    Express way
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2 w-full md:w-64 py-6">
                  <h1 className="font-medium">Branch 2</h1>
                  <section className="rounded-full bg-[#d6d6d6] p-2 w-fit">
                    <MapPin size={16} strokeWidth={1.25} />
                  </section>
                  <p className="text-xs text-center">
                    Aisha Store, Chikanda General Market, Kwara State
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block md:w-1/4 relative">
            <div
              style={{ backgroundImage: "url(/trucks.png)" }}
              className="absolute -right-24 bg-cover bg-no-repeat bg-center w-72 h-72"
            />
          </div>
        </div>
        {/* <div id="about-us" className="w-full overflow-hidden h-screen flex-col relative flex md:flex-row">
        <div className="w-1/4">
          <div
            style={{ backgroundImage: "url(/trucks.png)" }}
            className="absolute top-48 -left-30 bg-cover bg-no-repeat bg-center size-96"
          />
        </div>
        
        <div className="w-2/4 flex justify-center items-center">
        <div className="size-full gap-10 flex justify-center items-center">
        
        <div className="grid grid-cols-1 gap-2 md:mt-20">
        <div className="h-44 flex flex-col justify-center items-center w-64 border-b border-[#d6d6d6]">
        <section className="rounded-full bg-[#d6d6d6] p-2 w-fit">
        <Phone size={16} strokeWidth={1.25} />
          </section>
          <div className="flex gap-2 justify-center items-center cursor-pointer"><p>07035071286</p> <span><Copy size={12} strokeWidth={1.25} /></span></div>
            <div className="flex gap-2 justify-center items-center cursor-pointer"><p>07086330317</p> <span><Copy size={12} strokeWidth={1.25} /></span></div>
            <section className="rounded-full bg-[#d6d6d6] p-2 w-fit">
            <Mail size={16} strokeWidth={1.25} />
          </section>
          <div className="flex gap-2 justify-center items-center cursor-pointer text-xs"><p> aishamultipurposetradingltd@gmail.com</p> <span><Copy size={12} strokeWidth={1.25} /></span></div>
        </div>
        <div className="h-44 flex justify-center items-center flex-col gap-2 w-64">
        <section className="rounded-full bg-[#d6d6d6] p-2 w-fit">
        <MapPin size={16} strokeWidth={1.25} />
          </section>
          <h1>Main office</h1>
          <p className="text-xs text-center">No 32, Aisha Warehouse, Mokola Area Saki Oyo State</p>
        </div>
        </div>
        
        <div className="h-1/2 border bg-[#535353]"/>
        
        <div className="grid grid-cols-1 gap-2">
        <div className="h-44 flex justify-center items-center flex-col w-64 gap-2 border-b border-[#d6d6d6]">
          <h1>Branch 1</h1>
        <section className="rounded-full bg-[#d6d6d6] p-2 w-fit">
        <MapPin size={16} strokeWidth={1.25} />
        </section>
          <p className="text-xs text-center">Aisha Store, Opposite Iseyin Polica Station, Iseyin -Oyo Express way Iseyin Oyo State</p>
          </div>
          <div className="h-44 flex justify-center items-center flex-col w-64 gap-2">
          <h1>Branch 2</h1>
          <section className="rounded-full bg-[#d6d6d6] p-2 w-fit">
          <MapPin size={16} strokeWidth={1.25} />
          </section>
          <p className="text-xs text-center">Aisha Store, Chikanda General Market Chikanda Kwara State</p>
          </div>
          </div>
          </div>
          
        </div>

        <div className="w-1/4">
        <div
        style={{ backgroundImage: "url(/trucks.png)" }}
            className="absolute -right-32 bg-cover bg-no-repeat bg-center size-96"
            />
            </div>
      </div> */}
      </TooltipProvider>
    </>
  );
};

export default Aboutus;
