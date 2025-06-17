"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Dynamic navigation items with routes
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "OUR SERVICES & SOLUTIONS", href: "/services" },
    { name: "CLIENTS", href: "/clients" },
    { name: "BRAND PARTNERS", href: "/partners" },
    { name: "PROJECTS", href: "/project" },
    { name: "ABOUT US", href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/95`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {" "}
        {/* Added lg:py-4 for more padding on larger screens */}
        <div className="flex items-center justify-between">
          {" "}
          {/* Removed fixed lg:gap-x-[250px] here */}
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="block">
              <Image
                src="/asset/logo.png"
                alt="logo"
                width={300}
                height={100}
                className="w-[120px] h-[32px] sm:w-[140px] sm:h-[38px] lg:w-[240px] lg:h-[60px] object-contain"
              />
            </Link>
          </motion.div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-10 flex-1 justify-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className="text-sm xl:text-[22px] text-[#FFFFFF] font-normal duration-300 relative group whitespace-nowrap overflow-hidden"
                >
                  <motion.span
                    className="relative z-10 block"
                    whileHover={{
                      scale: 1.05,
                      textShadow: "0 0 8px rgba(255,255,255,0.8)",
                      letterSpacing: "0.5px",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {item.name.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        className="inline-block"
                        whileHover={{
                          y: -2,
                          color: "#00ffff",
                        }}
                        transition={{
                          duration: 0.2,
                          delay: charIndex * 0.02,
                          ease: "easeOut",
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>

                  {/* Background glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-white/10 to-cyan-400/20 rounded-lg -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{
                      opacity: 1,
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(0,255,255,0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Active/Hover underline */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px]"
                    style={{
                      background: isActive(item.href)
                        ? "linear-gradient(90deg, #FFFFFF 0%, #262626 100%)"
                        : "transparent",
                    }}
                    initial={{ width: isActive(item.href) ? "100%" : 0 }}
                    animate={{ width: isActive(item.href) ? "100%" : 0 }}
                    whileHover={{
                      width: "100%",
                      background:
                        "linear-gradient(90deg, #00ffff 0%, #FFFFFF 50%, #00ffff 100%)",
                      boxShadow: "0 0 10px rgba(0,255,255,0.5)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-cyan-400 hover:bg-white/10"
                >
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] sm:w-[320px] bg-black/95 backdrop-blur-md border-l border-white/10"
              >
                <div className="flex flex-col h-full">
                  {/* Logo in sidebar */}
                  <div className="flex items-center justify-between py-4 border-b border-white/10">
                    <Image
                      src="/asset/logo.png"
                      alt="logo"
                      width={120}
                      height={32}
                      className="object-contain"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:text-cyan-400 hover:bg-white/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>{" "}
                      {/* Added sr-only for accessibility */}
                    </Button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex flex-col space-y-1 py-6 flex-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className="relative overflow-hidden rounded-lg"
                      >
                        <Link
                          href={item.href}
                          className="block py-3 px-4 text-sm font-medium text-white transition-all duration-300 rounded-lg relative group"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {/* Background slide effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-white/10 -z-10"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          />

                          {/* Text with hover animation */}
                          <motion.span
                            className="relative z-10 block"
                            whileHover={{
                              x: 8,
                              color: "#00ffff",
                              textShadow: "0 0 8px rgba(0,255,255,0.6)",
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            {item.name}
                          </motion.span>

                          {/* Active indicator */}
                          {isActive(item.href) && (
                            <motion.div
                              className="absolute left-0 top-0 bottom-0 w-1 rounded-r"
                              style={{
                                background:
                                  "linear-gradient(180deg, #FFFFFF 0%, #262626 100%)",
                              }}
                              layoutId="activeIndicator"
                            />
                          )}

                          {/* Hover glow effect */}
                          <motion.div
                            className="absolute right-2 top-1/2 w-2 h-2 bg-cyan-400 rounded-full -translate-y-1/2"
                            initial={{ opacity: 0, scale: 0 }}
                            whileHover={{
                              opacity: 1,
                              scale: 1,
                              boxShadow: "0 0 10px rgba(0,255,255,0.8)",
                            }}
                            transition={{ duration: 0.2 }}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
