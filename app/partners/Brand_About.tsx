"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"

import Image from "next/image"
import { useRef } from "react"

export default function Brand_About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
  }

  // Split text into paragraphs


  return (
    <section ref={ref} className="py-20 bg-[#e5f4ff] relative overflow-hidden">
      {/* Subtle light beam animation */}
      <div className=" absolute top-1/2 translate-y-[-50%] ">
        <Image src={"/asset/left.png"} alt="1" width={1000} height={1000} className="w-full h-full object-center" />
      </div>
      <div className=" absolute right-0 top-1/2 translate-y-[-50%] ">
        <Image src={"/asset/right.png"} alt="1" width={1000} height={1000} className="w-full h-full object-center" />
      </div>
      <motion.div
        className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, rgba(34, 211, 238, 0) 70%)",
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
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, rgba(34, 211, 238, 0) 70%)",
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
           <p className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#000000] mb-6 sm:mb-8 leading-tight text-center">
            PARTNERS WHO LIGHT THE WAY
           </p>
          <motion.p
            initial="hidden"
            variants={textVariants}
            animate={isInView ? "visible" : "hidden"}
            className="text-lg text-center md:text-[24px] text-[#272727] font-normal leading-[120%] mb-6 w-auto md:w-[1170px]  mx-auto"
          >
         We are proud to work with manufacturers who are as passionate about lighting as we are and known for their innovation quality and performance. Our partnerships allow us to offer high-quality, reliable and design driven solutions to meet the requirements of commercial, residential and architectural projects throughout the region.
          </motion.p>


         
        </div>
      </div>
    </section>
  )
}
