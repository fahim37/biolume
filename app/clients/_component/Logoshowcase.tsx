"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ClientData {
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
  data: ClientData[];
}

export default function LogoShowcase() {
  const [clients, setClients] = useState<ClientData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
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
      <div className="relative min-h-screen w-full overflow-hidden bg-[#070A0D99]">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/asset/banner4.mp4" type="video/mp4" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
        </video>

        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Loading Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {/* Loading skeleton */}
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center aspect-[3/2] animate-pulse"
                >
                  <div className="w-20 h-8 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden bg-[#070A0D99]">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/asset/banner4.mp4" type="video/mp4" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
        </video>

        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Error Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 text-center">
            <h2 className="text-xl font-bold text-red-600 mb-2">
              Error Loading Clients
            </h2>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#070A0D99]">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/asset/banner4.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
      </video>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-6xl">
          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {clients.map((client) => (
              <div
                key={client._id}
                className="bg-[#E5F4FF] backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center aspect-[3/2] hover:bg-[#E5F4FF] transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.image || "/placeholder.svg"}
                    alt={client.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Show message if no clients */}
          {clients.length === 0 && (
            <div className="text-center text-white">
              <p className="text-lg">No clients found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
