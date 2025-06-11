"use client";
import Hero from "@/components/web/Hero";
import React from "react";
import Service_solution from "./_component/Service_solution";
import Image from "next/image";
import Solution_Service from "./_component/Solution_Service";
import { Particles } from "@/components/magicui/particles";

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

      <div className="relative overflow-hidden h-[150px] w-full">
        <Particles
          className="absolute inset-0 z-0"
          quantity={700}
          ease={80}
          color={"#155FFF"}
          refresh
        />
      </div>
    </div>
  );
};

export default page;
