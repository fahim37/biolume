"use client"

import { useState, useEffect } from "react"

const services = [
  { title: "FACADE LIGHTING",  },
  { title: "DECORATIVE LIGHTING",  },
  { title: "ARCHITECTURAL LIGHTING",  },
  { title: "SPORTS LIGHTING",  },
  { title: "ENTERTAINMENT LIGHTING",  },
  { title: "LANDSCAPE LIGHTING", },
]

export default function Component() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
   <div className="">
    <div className="container mx-auto py-10">
      <h2 className="text-3xl md:text-[48px] text-[#000000] font-semibold px-4 md:px-0">SOLUTIONS</h2>
    </div>
      <div className="relative min-h-screen overflow-hidden ">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-80">
          <source
            src="/asset/new.mp4"
            type="video/mp4"
          />
        </video>
        {/* Video Overlay */}
        {/* <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[1px]" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className=" container mx-auto">
          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative flex items-center justify-center"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Circle Container */}
                <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full">
                  {/* Circle Background */}
                  <div className="absolute inset-0 rounded-full border-2 border-white bg-[#00000099] transition-all duration-500 group-hover:border-white/60 group-hover:scale-105" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg xl:text-xl leading-tight tracking-wide">
                      {service.title}
                    </h3>
                 
                  </div>

                  {/* Hover Effect Ring */}
                  <div className="absolute inset-0 rounded-full border border-white/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125" />
                </div>
              </div>
            ))}
          </div>

        
        </div>
      </div>
    </div>
   </div>
  )
}
