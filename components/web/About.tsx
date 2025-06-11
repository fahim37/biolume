"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
      },
    }),
  };

  // Animation variants for the floating images
  const floatingVariants = {
    float: {
      y: ["0%", "-5%", "-10%", "-5%", "0%", "5%", "10%", "5%", "0%"], // More keyframes for smoother Y
      x: ["0%", "1%", "2%", "1%", "0%", "-1%", "-2%", "-1%", "0%"], // More keyframes for smoother X
      transition: {
        duration: 8, // Slightly longer duration for more gradual movement
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    floatRight: {
      y: ["0%", "-5%", "-10%", "-5%", "0%", "5%", "10%", "5%", "0%"], // More keyframes for smoother Y
      x: ["0%", "-1%", "-2%", "-1%", "0%", "1%", "2%", "1%", "0%"], // More keyframes for smoother X
      transition: {
        duration: 8, // Slightly longer duration
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-[#e5f4ff] relative overflow-hidden">
      {/* Left image with floating animation */}
      <motion.div
        className="absolute top-[30%]"
        variants={floatingVariants}
        animate="float"
      >
        <Image
          src={"/asset/left.png"}
          alt="1"
          width={1000}
          height={1000}
          className="w-full h-full object-center"
        />
      </motion.div>

      {/* Right image with floating animation */}
      <motion.div
        className="absolute right-0 top-[30%]"
        variants={floatingVariants}
        animate="floatRight"
      >
        <Image
          src={"/asset/right.png"}
          alt="1"
          width={1000}
          height={1000}
          className="w-full h-full object-center"
        />
      </motion.div>

      {/* Rest of your component remains the same */}
      <motion.div
        className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, rgba(34, 211, 238, 0) 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute -bottom-20 -left-20 w-[250px] h-[250px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, rgba(34, 211, 238, 0) 70%)",
          filter: "blur(30px)",
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          delay: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className=" container mx-auto">
          <motion.p
            initial="hidden"
            variants={textVariants}
            animate={isInView ? "visible" : "hidden"}
            className="text-lg text-center md:text-[24px] text-[#272727] font-normal leading-[120%] mb-6 w-auto md:w-[1170px]   mx-auto"
          >
            At Bolume, lighting is more than a package—it&apos;s an integral
            part of the story each space tells. Founded by a lighting specialist
            with over a decade of experience across luxury, residential, and
            commercial developments, we deliver bespoke, design-driven solutions
            grounded in technical expertise. We understand the demands of
            construction timelines, consultant coordination, and the importance
            of design integrity. Our approach balances creativity with
            precision, helping clients meet their project goals with clarity,
            consistency, and excellence. Bolume offers end-to-end lighting
            solutions for architects, developers, and construction
            professionals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 text-center"
          >
            <Link href="/services#services">
              <motion.button
                className="relative bg-[#434343] h-[50px] px-[32px] text-white rounded-[8px] font-semibold text-lg group flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Services
                <span className="mt-1">
                  <MoveRight />
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[2px] "
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
