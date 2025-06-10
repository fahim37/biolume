import Hero from "@/components/web/Hero";
import React from "react";
import Service_solution from "./_component/Service_solution";
import Image from "next/image";
import Solution_Service from "./_component/Solution_Service";

const page = () => {
  return (
    <div>
      <Hero
        vedieoLink="/asset/banner2.mp4"
        title="OUR SERVICES & SOLUTIONS"
        description=""
      />
      <Solution_Service />
      <Service_solution />
      <div className="py-5 bg-white">
        <Image
          src="/asset/cllient_bottom.png"
          alt="clients"
          width={10000}
          height={10000}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default page;
