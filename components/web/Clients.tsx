"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Client {
  _id: string;
  image: string;
  title: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ApiResponse {
  success: boolean;
  data: Client[];
}

export default function ClientLogos() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/data?type=Client`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch clients");
        }
        const result: ApiResponse = await response.json();
        if (result.success) {
          setClients(result.data);
        } else {
          throw new Error("API returned unsuccessful response");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#F2F7FF] py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-[40px] font-semibold text-center text-[#000000] mb-12">
            Our Clients
          </h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[#F2F7FF] py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-[40px] font-semibold text-center text-[#000000] mb-12">
            Our Clients
          </h2>
          <div className="text-center text-red-600">
            Error loading clients: {error}
          </div>
        </div>
      </section>
    );
  }

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

        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center gap-12 md:gap-16 whitespace-nowrap"
            animate={{
              x: [0, -50 + "%"],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20, // Adjust speed here (lower = faster)
                ease: "linear",
              },
            }}
            style={{
              width: "200%",
            }}
          >
            {/* First set of logos */}
            {clients.map((client) => (
              <div
                key={`first-${client._id}`}
                className="flex-shrink-0 w-32 md:w-40 flex items-center justify-center"
              >
                <Image
                  src={client.image || "/placeholder.svg"}
                  alt={client.title}
                  width={160}
                  height={80}
                  className="max-h-12 md:max-h-16 w-auto object-contain"
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clients.map((client) => (
              <div
                key={`second-${client._id}`}
                className="flex-shrink-0 w-32 md:w-40 flex items-center justify-center"
              >
                <Image
                  src={client.image || "/placeholder.svg"}
                  alt={client.title}
                  width={160}
                  height={80}
                  className="max-h-12 md:max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
