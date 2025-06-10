"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

interface Service {
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
  data: Service[]
}

export default function Solution_Service() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data?type=service`)

        if (!response.ok) {
          throw new Error(`Failed to fetch services: ${response.status}`)
        }

        const data: ApiResponse = await response.json()

        if (data.success && data.data) {
          setServices(data.data)
        } else {
          throw new Error("Invalid data format received from API")
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
        console.error("Error fetching services:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  return (
    <section id="services" ref={ref} className="py-20 bg-[#e5f4ff]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[48px] font-semibold mb-16 text-[#000000]"
        >
          SERVICES
        </motion.h2>

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {error && <div className="text-red-500 text-center py-8">Error loading services: {error}</div>}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="overflow-hidden group transition-all duration-500 border-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      width={1000}
                      height={1000}
                      alt={service.title}
                      className="w-full h-[300px] lg:h-[443px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay with animated lines */}
                    <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                  </div>
                  <div className="p-6 bg-[#e5f4ff] relative">
                    <motion.h3
                      className="text-[24px] font-medium text-[#000000] mb-2 text-center"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
