"use client"

import { motion } from "framer-motion"

import Image from "next/image"
import { useInView } from "react-intersection-observer"

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const projects = [
    {
      id: 1,
      name: "W HOTEL YAS ISLAND",
      location: "ABU DHABI",
      image: "/asset/project1.jpg",
      query: "aerial view of W Hotel Yas Island Abu Dhabi at night with purple lighting",
    },
    {
      id: 2,
      name: "SEAWORLD YAS ISLAND",
      location: "ABU DHABI",
     image: "/asset/project2.jpg",
      query: "aerial view of Seaworld Yas Island Abu Dhabi",
    },
    {
      id: 3,
      name: "NATIONAL HISTORY MUSEUM",
      location: "ABU DHABI",
        image: "/asset/project3.jpg",
      query: "National History Museum Abu Dhabi aerial view at dusk",
    },
    {
      id: 4,
      name: "WYNN AL MARJAN ISLAND",
      location: "RAS AL KHAIMAH",
        image: "/asset/project4.jpg",
      query: "Wynn Al Marjan Island Ras Al Khaimah resort aerial view at sunset",
    },
    {
      id: 5,
      name: "MARSA AL ARAB HOTEL",
      location: "DUBAI",
       image: "/asset/project5.png",
      query: "Marsa Al Arab Hotel Dubai aerial view of palm-shaped island",
    },
    {
      id: 6,
      name: "CENTRE OF CURIOSITY",
      location: "ABU DHABI",
      image: "/asset/project6.png",
      query: "Centre of Curiosity Abu Dhabi futuristic dome building at dusk",
    },
     {
      id: 7,
      name: "CENTRE OF CURIOSITY",
      location: "ABU DHABI",
      image: "/asset/project7.jpg",
      query: "Centre of Curiosity Abu Dhabi futuristic dome building at dusk",
    },
     {
      id: 8,
      name: "CENTRE OF CURIOSITY",
      location: "ABU DHABI",
      image: "/asset/project8.jpg",
      query: "Centre of Curiosity Abu Dhabi futuristic dome building at dusk",
    },
  ]

  return (
  <div className="bg-[#e5f4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <p className="text-sm md:text-[24px] text-[#272727] leading-[120%] font-normal mx-auto mb-[100px]">
          These are some of the featured projects were led by our founder during her previous roles in the lighting and
          construction industry across Middle East that reflect the level of care, expertise, and resolution we now
          guide every brand engagement.
        </p>
        <motion.h2
          className="text-3xl md:text-[40px] font-semibold text-[#000000]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          PROJECTS
        </motion.h2>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="relative h-64 md:h-72 lg:h-[570px] w-auto lg:w-[570px] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 z-10"></div>
            <Image
              src={project.image}
              width={1000}
              height={1000}
              alt={`${project.name} in ${project.location}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20">
              <motion.h3 className="text-xl md:text-2xl font-semibold text-center text-[#FFFFFF]" whileHover={{ scale: 1.05 }}>
                {project.name}
              </motion.h3>
              <p className="text-sm md:text-base">{project.location}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
  )
}
