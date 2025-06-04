"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const architecturalBrands = [
  { name: "FLOS", logo: "/asset/client3.png" },
  { name: "IBL", logo: "/asset/client3.png" },
  { name: "OSRAM", logo: "/asset/client3.png" },
  { name: "NEKO", logo: "/asset/client3.png" },
  { name: "VIBIA", logo: "/asset/client3.png" },
  { name: "TRAXON", logo: "/asset/client3.png" },
  { name: "LIGHT+BUILDING", logo: "/asset/client3.png" },
  { name: "FILIX", logo: "/asset/client3.png" },
  { name: "LedsC4", logo: "/asset/client3.png" },
  { name: "LEDLINEAR", logo: "/asset/client3.png" },
  { name: "GVA", logo: "/asset/client3.png" },
  { name: "ETC", logo: "/asset/client3.png" },
  { name: "intra lighting", logo: "/asset/client3.png" },
  { name: "YAL", logo: "/asset/client3.png" },
  { name: "LIGMAN", logo: "/asset/client3.png" },
  { name: "SYLVANIA", logo: "/asset/client3.png" },
  { name: "iGuzzini", logo: "/asset/client3.png" },
  { name: "RESCO", logo: "/asset/client3.png" },
  { name: "SIMES", logo: "/asset/client3.png" },
  { name: "lumini", logo: "/asset/client3.png" },
  { name: "kreon", logo: "/asset/client3.png" },
  { name: "lumenplus", logo: "/asset/client3.png" },
  { name: "CLS", logo: "/asset/client3.png" },
  { name: "BEGA", logo: "/asset/client3.png" },
 
]

const decorativeBrands = [
  { name: "VIBIA", logo: "/asset/client3.png" },
  { name: "NEMO", logo: "/asset/client3.png" },
  { name: "Artemide", logo: "/asset/client3.png" },
  { name: "LODES", logo: "/asset/client3.png" },
]

export default function LogoShowcase() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-30">
        <source
          src="/asset/banner5.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 px-4 py-12 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Architectural Section */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-wider text-white md:text-3xl">ARCHITECTURAL</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
              {architecturalBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="group relative aspect-[3/2] overflow-hidden rounded-lg bg-white/90 p-4 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex h-full items-center justify-center">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      width={120}
                      height={80}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Section */}
          <div>
            <h2 className="mb-8 text-center text-2xl font-bold tracking-wider text-white md:text-3xl">DECORATIVE</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
              {decorativeBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-decorative-${index}`}
                  className="group relative aspect-[3/2] overflow-hidden rounded-lg bg-white/90 p-4 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex h-full items-center justify-center">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      width={120}
                      height={80}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 h-full w-full animate-pulse rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 h-full w-full animate-pulse rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 blur-3xl animation-delay-2000" />
      </div>
    </div>
  )
}
