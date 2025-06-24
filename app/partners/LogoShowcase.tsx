"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface BrandPartner {
  _id: string
  title: string
  image: string
}

interface ApiResponse {
  success: boolean
  data: BrandPartner[]
}

const LogoShowcase = () => {
  const [brands, setBrands] = useState<BrandPartner[]>([])
  const [decorativeBrands, setDecorativeBrands] = useState<BrandPartner[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const fetchAllBrands = async () => {
      try {
        setLoading(true)
        setError(null) // Clear previous errors

        const [architecturalResponse, decorativeResponse] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/data?type=brandPartner`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/data?type=decorative`),
        ])

        if (!architecturalResponse.ok) {
          throw new Error("Failed to fetch architectural brands")
        }
        if (!decorativeResponse.ok) {
          throw new Error("Failed to fetch decorative brands")
        }

        const architecturalResult: ApiResponse = await architecturalResponse.json()
        const decorativeResult: ApiResponse = await decorativeResponse.json()

        if (architecturalResult.success) {
          setBrands(architecturalResult.data)
        } else {
          throw new Error("API returned unsuccessful response for architectural brands")
        }

        if (decorativeResult.success) {
          setDecorativeBrands(decorativeResult.data)
        } else {
          throw new Error("API returned unsuccessful response for decorative brands")
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    if (mounted) {
      fetchAllBrands()
    }
  }, [mounted])

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto">
      

        {/* Brand Partners Section */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-wider text-white md:text-4xl">ARCHITECTURAL</h2>

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
              <p className="text-white/70 text-lg">No architectural brand partners found.</p>
            </div>
          )}

          {!loading && !error && brands.length > 0 && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
              {brands.map((brand) => (
                <div
                  key={brand._id}
                  className="group relative aspect-[3/2] overflow-hidden rounded-lg bg-[#E5F4FF] p-4 transition-all duration-300 hover:bg-[#E5F4FF] hover:scale-105 hover:shadow-xl"
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
                  {/* <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-black font-medium truncate bg-white/80 px-2 py-1 rounded">
                      {brand.title}
                    </p>
                  </div> */}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Decorative Brand Partners Section */}
        <div>
          <h2 className="mb-8 text-center text-2xl font-bold tracking-wider text-white md:text-4xl">DECORATIVE</h2>

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

          {!loading && !error && decorativeBrands.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/70 text-lg">No decorative brand partners found.</p>
            </div>
          )}

          {!loading && !error && decorativeBrands.length > 0 && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 ">
              {decorativeBrands.map((brand) => (
                <div
                  key={brand._id}
                  className="group relative aspect-[3/2] overflow-hidden rounded-lg bg-[#E5F4FF] p-4 transition-all duration-300 hover:bg-[#E5F4FFs] hover:scale-105 "
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
                  {/* <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-black font-medium truncate bg-white/80 px-2 py-1 rounded">
                      {brand.title}
                    </p>
                  </div> */}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default LogoShowcase
