"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Update active section based on scroll position
      const sections = ["home", "projects", "about", "blog", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      // Close mobile menu if open
      setIsMenuOpen(false)

      // Scroll to the element with smooth behavior
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: "smooth",
      })

      // Update URL without page reload
      window.history.pushState({}, "", href)

      // Update active section
      setActiveSection(targetId)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.2 }} className="text-2xl font-bold">
            SK
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <div className="bg-secondary/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "text-foreground"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="ml-2 rounded-full bg-violet-600 hover:bg-violet-700" size="sm">
              Book a Call
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "text-foreground font-medium"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full bg-violet-600 hover:bg-violet-700">Book a Call</Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

