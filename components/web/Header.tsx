"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Dynamic navigation items with routes
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "OUR SERVICES & SOLUTIONS", href: "/services" },
    { name: "CLIENTS", href: "/clients" },
    { name: "BRAND PARTNERS", href: "/partners" },
    { name: "PROJECTS", href: "/project" },
    { name: "ABOUT US", href: "/about" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.8)_0%,_rgba(51,_51,_51,_0.4)_47.6%,_rgba(102,_102,_102,_0)_100%)] backdrop-blur-md shadow-lg"
          : "bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.8)_0%,_rgba(51,_51,_51,_0.4)_47.6%,_rgba(102,_102,_102,_0)_100%)]"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-7">
        <div className="flex items-center justify-between lg:gap-x-[250px]">
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
                width={154}
                height={42}
                className="w-[120px] h-[32px] sm:w-[140px] sm:h-[38px] lg:w-[154px] lg:h-[42px] object-contain"
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
                  className="text-sm xl:text-base text-[#FFFFFF] font-normal duration-300 relative group whitespace-nowrap "
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] bg-cyan-400"
                    initial={{ width: isActive(item.href) ? "100%" : 0 }}
                    animate={{ width: isActive(item.href) ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
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
                <Button variant="ghost" size="icon" className="text-white hover:text-cyan-400 hover:bg-white/10">
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
                    <Image src="/asset/logo.png" alt="logo" width={120} height={32} className="object-contain" />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:text-cyan-400 hover:bg-white/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <X className="h-5 w-5" />
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
                      >
                        <Link
                          href={item.href}
                          className="block py-3 px-4 text-sm font-medium text-white hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 rounded-lg relative group"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                          {isActive(item.href) && (
                            <motion.div
                              className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 rounded-r"
                              layoutId="activeIndicator"
                            />
                          )}
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

      {/* Animated border bottom */}
      <motion.div
        className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </motion.header>
  )
}
