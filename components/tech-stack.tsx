"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  Html5,
  Css3,
  Javascript,
  TypeScript,
  ReactLogo,
  NextJs,
  TailwindCss,
  FramerMotion,
  Database,
  Github,
  Vercel,
  Java,
  Docker,
  Kubernetes,
} from "@/components/tech-icons"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function TechStack() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-foreground/70 mb-2">I constantly try to improve</h2>
          <h3 className="text-4xl md:text-5xl font-bold">My Tech Stack</h3>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          <TechCard icon={<Html5 />} name="HTML" />
          <TechCard icon={<Css3 />} name="CSS" />
          <TechCard icon={<Javascript />} name="JavaScript" />
          <TechCard icon={<TypeScript />} name="TypeScript" />
          <TechCard icon={<ReactLogo />} name="React" />
          <TechCard icon={<NextJs />} name="Next.js" />
          <TechCard icon={<TailwindCss />} name="Tailwind CSS" />
          <TechCard icon={<FramerMotion />} name="Framer Motion" />
          <TechCard icon={<Database />} name="MongoDB" />
          <TechCard icon={<Database />} name="MySQL" />
          <TechCard icon={<Database />} name="PostgreSQL" />
          <TechCard icon={<Github />} name="GitHub" />
          <TechCard icon={<Vercel />} name="Vercel" />
          <TechCard icon={<Java />} name="Java" />
          <TechCard icon={<Docker />} name="Docker" />
          <TechCard icon={<Kubernetes />} name="Kubernetes" />
          <TechCard icon={<Database />} name="Prisma" />
          <TechCard icon={<Database />} name="Zod" />
          <TechCard icon={<Database />} name="Zustand" />
          <TechCard icon={<Database />} name="Node.js" />
          <TechCard icon={<Database />} name="Express.js" />
        </motion.div>
      </div>
    </section>
  )
}

function TechCard({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <motion.div variants={item} className="tech-card bg-secondary/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-2">
        <div className="text-2xl">{icon}</div>
        <span className="text-xs font-medium">{name}</span>
      </div>
    </motion.div>
  )
}

