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
          setClients(result.data.slice(0, 6));
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

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10">
          {clients.map((client, index) => (
            <motion.div
              key={client._id}
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
                src={client.image || "/placeholder.svg"}
                alt={client.title}
                width={160}
                height={80}
                className="max-h-12 md:max-h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
