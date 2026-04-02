import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { barsoap } from "../../products/barsoap";
import {detergent} from "../../products/detergent"
import {creams} from "../../products/cream"
import {sacks} from "../../products/sack"
import {cement} from "../../products/cement"
const Productlist = () => {
  return (
    <>
      <div className="w-full mt-20 space-y-5 px-2 md:px-10">
        <div id="products">
          <h1 className="text-2xl md:text-4xl text-center">
            Bulk Distributor of ...
          </h1>
        </div>
        <Tabs defaultValue="Bar Soaps" className="w-full productList flex items-center">
          <TabsList>
            <TabsTrigger value="Bar Soaps">Bar Soaps</TabsTrigger>
            <TabsTrigger value="Creams">Creams</TabsTrigger>
            <TabsTrigger value="Detergents">Detergents</TabsTrigger>
            <TabsTrigger value="Cement">Cement</TabsTrigger>
            <TabsTrigger value="Sacks">Sacks</TabsTrigger>
          </TabsList>
          <TabsContent className="w-full" value="Bar Soaps">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
              {barsoap.map((soap, index)=>(
              <div key={index} className="h-60 flex flex-col justify-between items-center border border-[#d6d6d6]">
                <div className="px-2 w-full h-full flex items-center justify-center">
                <img src={`${soap.img}`} className="size-48" alt="" srcset="" />
                </div>
                <section className="border-t  border-[#d6d6d6] flex items-center justify-center w-full">
                  <p className="text-center ">{soap.name}</p>
                </section>
              </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent className="w-full" value="Creams">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
              {creams.map((cream, index)=>(
              <div key={index} className="h-60 flex flex-col justify-between items-center border border-[#d6d6d6]">
                <div className="px-2 w-full h-full flex items-center justify-center">
                <img src={`${cream.img}`} className="size-48" alt="" srcset="" />
                </div>
                <section className="border-t  border-[#d6d6d6] flex items-center justify-center w-full">
                  <p className="text-center ">{cream.name}</p>
                </section>
              </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent className="w-full" value="Detergents">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
              {detergent.map((dtg, index)=>(
              <div key={index} className="h-60 flex flex-col justify-between items-center border border-[#d6d6d6]">
                <div className="px-2 w-full h-full flex items-center justify-center">
                <img src={`${dtg.img}`} className="size-48" alt="" srcset="" />
                </div>
                <section className="border-t  border-[#d6d6d6] flex items-center justify-center w-full">
                  <p className="text-center ">{dtg.name}</p>
                </section>
              </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent className="w-full" value="Cement">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
              {cement.map((cements, index)=>(
              <div key={index} className="h-60 flex flex-col justify-between items-center border border-[#d6d6d6]">
                <div className="px-2 w-full h-full flex items-center justify-center">
                <img src={`${cements.img}`} className="size-48" alt="" srcset="" />
                </div>
                <section className="border-t  border-[#d6d6d6] flex items-center justify-center w-full">
                  <p className="text-center ">{cements.name}</p>
                </section>
              </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent className="w-full" value="Sacks">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
              {sacks.map((sack, index)=>(
              <div key={index} className="h-60 flex flex-col justify-between items-center border border-[#d6d6d6]">
                <div className="px-2 w-full h-full flex items-center justify-center">
                <img src={`${sack.img}`} className="size-48" alt="" srcset="" />
                </div>
                <section className="border-t  border-[#d6d6d6] flex items-center justify-center w-full">
                  <p className="text-center ">{sack.name}</p>
                </section>
              </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Productlist;
