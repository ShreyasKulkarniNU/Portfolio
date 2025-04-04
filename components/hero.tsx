"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-violet-950 to-violet-900"
    >
      <div className="absolute inset-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-400 via-violet-900 to-transparent"></div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-violet-500/20 text-violet-300 rounded-full mb-4">
              Available for new opportunities
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              I help founders turn ideas into{" "}
              <span className="block mt-2">
                seamless <span className="gradient-text italic">digital experiences</span>
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Hello, I'm Shreyas Kulkarni, a Full Stack Developer specializing in creating modern web applications with
              exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button size="lg" className="rounded-full group bg-violet-600 hover:bg-violet-700">
                Let's Connect
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-violet-500/30 hover:bg-violet-800/20">
                <Mail className="mr-2 h-4 w-4" />
                kulkarni.shreyas@northeastern.edu
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 blur-md"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-violet-400/30">
                <Image src="/images/profile.jpeg" alt="Shreyas Kulkarni" fill className="object-cover" priority />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-0 right-0 flex justify-center"
        >
          <div className="w-full max-w-6xl h-[2px] bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

