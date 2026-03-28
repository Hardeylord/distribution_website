import { Dot, Zap, Lock, ClockFading, AudioWaveform, MapPinHouse } from "lucide-react";
import React from "react";

const Whyus = () => {
  const services = [
    {
      icon: Zap,
      h1: "24/7 Service",
      p: "Our customer service team is available around the clock to resolve issues, answer questions, and keep deliveries on track.",
      bg_img:"https://res.cloudinary.com/dujx04o4m/image/upload/v1774563617/247_g8wygs.png"
    },
    {
      icon: Lock,
      h1: "Guranteed Security",
      p: "Every package is handled with care. Our trained team ensures goods arrive in perfect condition, every single time.",
      bg_img:"https://res.cloudinary.com/dujx04o4m/image/upload/v1774563624/locked_elcir0.png"
    },
    {
      icon: ClockFading,
      h1: "On-Time Delivery",
      p: "99% on-time delivery for all types of products, both long and short distance.",
      bg_img:"https://res.cloudinary.com/dujx04o4m/image/upload/v1774563598/illustration_c4hxdx.png"
    },
    {
      icon: MapPinHouse,
      h1: "Nationwide Coverage",
      p: "Our distribution network spans across major cities and remote areas, ensuring no customer is too far to reach.",
      bg_img:"https://res.cloudinary.com/dujx04o4m/image/upload/v1774563600/nwc_sadlrg.png"
    },
  ];
  return (
    <>
      <div className="w-full flex flex-col py-5 px-5 md:px-10 md:h-screen justify-between space-y-5 md:mb-20">
        <section className="text-[#0b5c0d] flex items-center gap-1">
          <section className="rounded-full bg-[#0b5c0d] p-1 size-0.5"></section>{" "}
          Why Choose Us
        </section>

        <div className="flex space-y-3 flex-col md:flex-row justify-between">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl">Distribution built for e-commerce,
            at every scale</h1>
          </div>
          <div className="md:w-1/2">
            <p className="text-[#434343] text-[15px] text-right">
              Aishat Multipurpose LTD delivers fast, reliable e-commerce
              distribution so you always get what you ordered — on time, every
              time.
            </p>
          </div>
        </div>
        <div class="grid md:grid-cols-4 gap-4">
          {services.map((Service, index) => (
            <div
              key={index}
              className="border relative overflow-hidden border-[#d6d6d6] h-87.5 flex flex-col justify-between p-2"
            >
              <section className="rounded-full z-20 bg-[#d6d6d6] p-2 w-fit">
                <Service.icon size={16} strokeWidth={1.25} />
              </section>
              <div style={{
                backgroundImage: `url(${Service.bg_img})`
              }} className={` absolute -left-8 bg-cover bg-no-repeat bg-center size-60`}/>
              <div>
                <h1 className="">{Service.h1}</h1>
                <p className="text-[#575757] text-[13px]">{Service.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Whyus;
