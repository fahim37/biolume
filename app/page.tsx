"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import About from "@/components/web/About";
import Clients from "@/components/web/Clients";
import ParticleHero from "@/components/web/Particle-hero";
import Services from "@/components/web/Services";
import Solutions from "@/components/web/Solutions";

export default function Home() {
  const [showHero, setShowHero] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileScreen = window.innerWidth <= 768;
    setIsMobile(isMobileScreen);

    // if (isMobileScreen) {
    //   setShowHero(true); // instantly show hero on mobile
    // } else {
    const timer = setTimeout(() => {
      setShowHero(true);
    }, 4000);
    return () => clearTimeout(timer);
    // }
  }, []);

  return (
    <main className="min-h-screen relative">
      <div className="relative">
        <AnimatePresence mode="wait">
          {!showHero ? (
            <motion.div
              key="video"
              className={`relative w-full ${isMobile ? "h-[400px]" : "h-[724px]"} overflow-hidden`}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                playsInline
              >
                <source src="/asset/hero-updated.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          ) : (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <ParticleHero
                btnText="Contact Us"
                title="Lighting with Purpose and Precision"
                description="With over a decade of experience delivering lighting packages for high-end construction projects, Biolume brings together creative design, technical expertise, and seamless project management. We provide a comprehensive, tailored, hands-on solution to construction lighting shaped by deep industry knowledge."
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Other Sections */}
      <About />
      <Clients />
      <Services />
      <Solutions />
    </main>
  );
}
