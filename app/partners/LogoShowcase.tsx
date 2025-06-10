"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface BrandPartner {
  _id: string
  image: string
  title: string
  type: string
  createdAt: string
  updatedAt: string
  __v: number
}

interface ApiResponse {
  success: boolean
  data: BrandPartner[]
}

export default function LogoShowcase() {
  const [mounted, setMounted] = useState(false)
  const [brands, setBrands] = useState<BrandPartner[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data?type=brandPartner`)

        if (!response.ok) {
          throw new Error("Failed to fetch brands")
        }

        const result: ApiResponse = await response.json()

        if (result.success) {
          setBrands(result.data)
        } else {
          throw new Error("API returned unsuccessful response")
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    if (mounted) {
      fetchBrands()
    }
  }, [mounted])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-30">
        <source src="/asset/banner5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 px-4 py-12 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Brand Partners Section */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-wider text-white md:text-3xl">
              BRAND PARTNERS
            </h2>

            {loading && (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <p className="text-red-400 text-lg">Error: {error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-6 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
                >
                  Retry
                </button>
              </div>
            )}

            {!loading && !error && brands.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/70 text-lg">No brand partners found.</p>
              </div>
            )}

            {!loading && !error && brands.length > 0 && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
                {brands.map((brand) => (
                  <div
                    key={brand._id}
                    className="group relative aspect-[3/2] overflow-hidden rounded-lg bg-white/90 p-4 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-xl"
                  >
                    <div className="flex h-full items-center justify-center">
                      <Image
                        src={brand.image || "/placeholder.svg"}
                        alt={brand.title}
                        width={120}
                        height={80}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=80&width=120"
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Optional: Show brand title on hover */}
                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-black font-medium truncate bg-white/80 px-2 py-1 rounded">
                        {brand.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
