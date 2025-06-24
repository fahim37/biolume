"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Props {
  vedieoLink: string;
  title: string;
  description?: string;
  btnText?: string;
}

export default function Sub_banner({
  vedieoLink,
  title,
  description,
  btnText,
}: Props) {
  return (
    // Change: Removed fixed height h-[300px] and overflow-hidden from section
    // Instead, use min-h for a minimum height, allowing it to grow if content is tall
    <section className="relative min-h-[300px] lg:min-h-[572px] bg-slate-900 text-white">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={vedieoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Main Content Container */}
      <div
        className="relative z-10 container mx-auto px-4 py-20 flex flex-col justify-center items-center 
                      min-h-[300px] lg:min-h-[572px] text-center"
      >
        {/*
          Changes:
          - Removed the inner `div className="container"` as it was redundant.
          - Changed `h-screen` to `min-h-[300px]` (or similar responsive value) to ensure it's at least a certain height 
            but can expand if content needs more space. `h-screen` often pushes content out of view if the content itself 
            is also tall.
          - Added `flex-col justify-center` to stack content vertically and center it within this container.
          - Added `text-center` here to ensure all nested text is centered without needing it on every element.
        */}

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // Ensure width is handled responsively
          className="text-[40px] md:text-[50px] lg:text-[72px] text-[#FFFFFF] font-bold leading-[120%] 
                     w-full max-w-full lg:max-w-[1000px] mx-auto mb-4" // Added mb-4 for spacing
        >
          {title}
        </motion.h1>

        {description && ( // Only render description if it exists
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-[24px] text-[#E6E6E6] mb-8 mt-4 
                       w-full max-w-full lg:max-w-[1100px] mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {btnText && ( // Only render button if btnText exists
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="border border-[white] text-base font-normal px-[32px] h-[51px] relative group"
            >
              <span className="relative z-10">{btnText}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
