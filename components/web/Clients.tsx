"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ClientLogos() {
  return (
    <section className="bg-[#F2F7FF] py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-[40px] font-semibold text-center text-[#000000] mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Clients
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="w-32 md:w-40 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="max-h-12 md:max-h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const clients = [
  {
    name: "Client 1",
    logo: "/asset/client1.png",
    width: 120,
    height: 60,
  },
  {
    name: "MIRAL",
    logo: "/asset/client2.png",
    width: 120,
    height: 60,
  },
  {
    name: "BESIX",
    logo: "/asset/client3.png",
    width: 140,
    height: 60,
  },
  {
    name: "Shapoorji Pallonji",
    logo: "/asset/client4.png",
    width: 180,
    height: 60,
  },
  {
    name: "EllisDon",
    logo: "/asset/client5.png",
    width: 160,
    height: 60,
  },
  {
    name: "Client 6",
    logo: "/asset/client6.png",
    width: 120,
    height: 60,
  },
]
