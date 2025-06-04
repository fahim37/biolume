"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["HOME", "OUR SERVICES & SOLUTIONS", "CLIENTS", "BRAND PARTNERS", "PROJECTS", "ABOUT US"]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.8)_0%,_rgba(51,_51,_51,_0.4)_47.6%,_rgba(102,_102,_102,_0)_100%)] backdrop-blur-md shadow-lg" : "bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.8)_0%,_rgba(51,_51,_51,_0.4)_47.6%,_rgba(102,_102,_102,_0)_100%)]"
      }`}
    >
      <div className="container mx-auto px-4 py-7">
        <div className="flex items-center gap-x-[250px] ">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-white w-[154px] h-[42px] cursor-pointer "
          >
            <Image src="/asset/logo.png" alt="logo" width={1000} height={1000} className="w-full h-full"  />
          
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-base text-[#FFFFFF] font-normal   duration-300 relative group"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-cyan-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 overflow-hidden"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="block py-2 text-sm text-white hover:text-cyan-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Animated border bottom */}
      <motion.div
        className="h-[1px] "
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </motion.header>
  )
}
