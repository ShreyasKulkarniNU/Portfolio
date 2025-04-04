"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import About from "@/components/about"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Blog from "@/components/blog"

export default function Home() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/90 overflow-hidden">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <section id="tech">
          <TechStack />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </motion.div>
      <Footer />
    </main>
  )
}

