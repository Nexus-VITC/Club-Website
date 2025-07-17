"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Team", path: "/team" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
]

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const scaleX = useSpring(0, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
      scaleX.set(latest / (document.documentElement.scrollHeight - window.innerHeight))
    })
    return () => unsubscribe()
  }, [scrollY, scaleX])

  // Close menu when path changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Desktop Navigation - Now properly centered */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-4 z-40 px-6 py-3 rounded-full transition-all duration-300 hidden md:flex justify-center items-center  max-w-4xl mx-auto",
          "left-[40%] transform -translate-x-1/2", 
          isScrolled
            ? "bg-white/10 backdrop-blur-lg shadow-lg border border-white/20"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="relative group"
            >
              <span
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  pathname === item.path
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                )}
              >
                {item.name}
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                initial={false}
                animate={{
                  width: pathname === item.path ? "100%" : "0%",
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                initial={false}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Hamburger Button */}
      <motion.button
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-4 right-4 z-50 p-3 rounded-full md:hidden transition-all duration-300",
          isScrolled
            ? "bg-white/10 backdrop-blur-lg shadow-lg border border-white/20"
            : "bg-transparent"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
      </motion.button>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-20 right-4 z-40 p-6 rounded-2xl shadow-lg backdrop-blur-lg border border-white/20 md:hidden",
          isScrolled ? "bg-white/10" : "bg-black/80"
        )}
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="relative group"
            >
              <span
                className={cn(
                  "text-base font-medium transition-colors duration-300 block",
                  pathname === item.path
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                )}
              >
                {item.name}
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                initial={false}
                animate={{
                  width: pathname === item.path ? "100%" : "0%",
                }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  )
}