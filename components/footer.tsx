"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Linkedin, Github, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold mb-4 block">
              SK
            </Link>
            <p className="text-foreground/70 mb-4">
              Transforming ideas into seamless digital experiences with clean, efficient code.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/shreyas-kulkarni"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/shreyas-kulkarni"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com/shreyas-kulkarni"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="mailto:kulkarni.shreyas@northeastern.edu"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Mail size={18} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-foreground/70 hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-foreground/70" />
                <span className="text-foreground/70">kulkarni.shreyas@northeastern.edu</span>
              </li>
              <li className="flex items-center">
                <Linkedin className="h-4 w-4 mr-2 text-foreground/70" />
                <a
                  href="https://linkedin.com/in/shreyas-kulkarni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  linkedin.com/in/shreyas-kulkarni
                </a>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-border/40 text-center text-foreground/60"
        >
          <p>© {new Date().getFullYear()} Shreyas Kulkarni. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

