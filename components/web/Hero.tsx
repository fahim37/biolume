"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

interface Props {
  title: string
  description?: string
  btnText?: string
}

export default function Hero({ title, description, btnText }: Props) {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load particles.js script dynamically
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
    script.onload = () => {
      // Initialize particles after script loads
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 150, // PARTICLE COUNT: Increase this number for more particles
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff", // PARTICLE COLOR: Change this hex value for different particle colors
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5, // PARTICLE OPACITY: 0.1 to 1.0
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 8, // PARTICLE SIZE: Increase this number for larger particles
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150, // CONNECTION DISTANCE: How far particles connect
              color: "#ffffff", // CONNECTION LINE COLOR: Change hex value for different line colors
              opacity: 0.4, // CONNECTION LINE OPACITY: 0.1 to 1.0
              width: 1, // CONNECTION LINE WIDTH: Thickness of connecting lines
            },
            move: {
              enable: true,
              speed: 6, // PARTICLE SPEED: How fast particles move
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab", // HOVER EFFECT: "grab", "bubble", "repulse", or false to disable
              },
              onclick: {
                enable: true,
                mode: "push", // CLICK EFFECT: "push", "remove", "bubble", "repulse", or false to disable
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="relative h-screen lg:h-[724px] bg-slate-900 text-white overflow-hidden">
      {/* Particles.js Background */}
      <div
        id="particles-js"
        ref={particlesRef}
        className="absolute inset-0 w-full h-full"
        style={{
          // BACKGROUND COLOR: Change this for different background colors
          backgroundColor: "#1e293b", // This is slate-800, you can change to any color
          backgroundImage: 'url("")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      />

      {/* Optional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center h-screen lg:h-[724px]">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[40px] text-center md:text-[50px] lg:text-[72px] text-[#FFFFFF] font-bold leading-[120%] w-auto lg:w-[1000px] mx-auto"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-[24px] text-center text-[#E6E6E6] mb-8 mt-4 w-auto lg:w-[1100px] mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {btnText && (
              <Button
                size="lg"
                className="border bg-transparent hover:bg-transparent border-[white] text-base font-normal px-[32px] h-[51px] relative group"
              >
                <span className="relative z-10">{btnText}</span>
              </Button>
            )}
          </motion.div>
        </div>
      </div>

      {/* Particle count display (optional - remove if not needed) */}
      {/* <div className="absolute top-12 left-0 w-20 bg-black/80 text-cyan-400 text-xs text-left pl-1 leading-[14px] pb-0.5 font-bold rounded-br-md z-20">
        <span id="js-count-particles">--</span> particles
      </div> */}
    </section>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    particlesJS: any
    pJSDom: any
  }
}
