"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

interface DataItem {
  _id: string;
  title?: string;
  image: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [beamConfig, setBeamConfig] = useState<
    Array<{
      top: number;
      rotation: number;
      duration: number;
      repeatDelay: number;
    }>
  >([]);

  const [services, setServices] = useState<DataItem[]>([]);
  const [projects, setProjects] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Generate random values only on client side to avoid hydration mismatch
    const config = Array.from({ length: 8 }).map(() => ({
      top: Math.random() * 100,
      rotation: Math.random() * 20 - 10,
      duration: 8 + Math.random() * 10,
      repeatDelay: Math.random() * 5,
    }));
    setBeamConfig(config);

    // Fetch services and projects data
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch services
      const servicesResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/data?type=service`
      );
      const servicesResult = await servicesResponse.json();

      // Fetch projects
      const projectsResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/data?type=project`
      );
      const projectsResult = await projectsResponse.json();

      if (servicesResult.success) {
        setServices(servicesResult.data.slice(0, 6));
      }

      if (projectsResult.success) {
        setProjects(projectsResult.data.slice(0, 6));
      }
    } catch (error) {
      console.error("Error fetching footer data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fallback data if API fails or is loading
  const fallbackContent = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Digital Marketing",
    "Brand Strategy",
    "Consulting",
  ];

  const fallbackServices = [
    "Custom Software",
    "E-commerce Solutions",
    "Cloud Services",
    "Data Analytics",
    "API Development",
    "Technical Support",
  ];

  const contentLinks = loading
    ? fallbackContent
    : projects.map((project) => project.title || "Untitled Project");
  const serviceLinks = loading
    ? fallbackServices
    : services.map((service) => service.title || "Untitled Service");

  return (
    <footer
      ref={ref}
      className="bg-black text-white py-16 relative overflow-hidden"
    >
      {/* Animated light beams */}
      <div className="absolute inset-0 overflow-hidden">
        {beamConfig.map((config, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] w-[200px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
            style={{
              top: `${config.top}%`,
              left: `-200px`,
              filter: "blur(3px)",
              transform: `rotate(${config.rotation}deg)`,
            }}
            animate={{
              left: ["0%", "100%"],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: config.duration,
              delay: i * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: config.repeatDelay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 sm:col-span-2 lg:col-span-2"
          >
            <div className="w-[174px] h-[42px] max-w-full">
              <Image
                src={"/asset/logo.png"}
                width={174}
                height={42}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-400 text-base mb-6 mt-4 max-w-[370px]">
              Join us on social media for exclusive updates, and special offers!
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{
                    scale: 1.2,
                    color: "#22d3ee",
                    boxShadow: "0 0 10px rgba(34, 211, 238, 0.7)",
                  }}
                  className="w-8 h-8 bg-[#000000] border border-white rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Projects Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 sm:col-span-1 lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Projects</h3>
            <ul className="space-y-2">
              {contentLinks.slice(0, 6).map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={
                    isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                  }
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm relative group"
                  >
                    {link}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[1px] bg-cyan-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Service Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 sm:col-span-1 lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.slice(0, 6).map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={
                    isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                  }
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm relative group"
                  >
                    {link}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[1px] bg-cyan-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1 sm:col-span-2 lg:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-4">Contact us</h3>
            <div className="space-y-2 text-sm text-gray-400">
              {[
                "biolumeconsulting@gmail.com",
                "+971 50 123 4567",
                "123 Business Bay",
                "Dubai, UAE 12345",
              ].map((item, index) => (
                <motion.p
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={
                    isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                  }
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5, color: "#22d3ee" }}
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="border-t border-gray-800 mt-12 pt-8 px-4 container mx-auto text-sm text-gray-400 text-center sm:text-left"
      >
        © 2024 Agency All rights reserved.
      </motion.div>
    </footer>
  );
}
