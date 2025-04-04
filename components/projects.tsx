"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Next Ventures",
    description:
      "A platform for virtual pitch competitions using Next.js 15, enabling smooth idea sharing and exploration with optimal performance.",
    image: "/images/next-ventures.png",
    gradient: "from-pink-600 to-purple-600",
    features: [
      "Leveraged Partial Prerendering and After for faster loading",
      "Simplified idea submission with a clean, intuitive design",
      "Enhanced browsing with seamless performance optimization",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "Sanity CMS",
      "Auth.js",
      "Markdown",
    ],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Zenith Minds",
    description:
      "An educational platform connecting students and instructors, fostering global collaboration and continuous learning.",
    image: "/images/zenith-minds.png",
    gradient: "from-blue-600 to-indigo-600",
    features: [
      "Built with Next.js, React, and TypeScript for scalability",
      "Styled using Tailwind CSS with animations by Framer Motion",
      "Used Zustand for state management and Zod for validation",
      "Integrated MongoDB and RESTful APIs with Node.js and Express",
      "Designed a user-friendly interface for seamless interactions",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "Zod",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Turborepo",
      "Razorpay",
    ],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Talent Palette",
    description:
      "A responsive MERN platform for creative professionals with dynamic functionalities including job creation, user profile management, and content feed.",
    image: "/images/talent-palette.jpg",
    gradient: "from-purple-600 to-indigo-600",
    features: [
      "Integrated PostgreSQL and Prisma for efficient data handling",
      "Built with Next.js and TypeScript for performance and scalability",
      "Implemented state management with Zustand and validation using Zod",
      "Secured authentication with Auth.js for user account management",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "Auth.js",
    ],
    link: "#",
    github: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-foreground/70 mb-2">FEATURED PROJECTS</h2>
          <h3 className="text-4xl md:text-5xl font-bold">My Recent Work</h3>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button variant="outline" size="lg" className="rounded-full">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      <div className={`${isEven ? "md:order-1" : "md:order-2"}`}>
        <motion.div
          className="project-card overflow-hidden rounded-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`project-card-gradient ${project.gradient}`}></div>
          <div className="relative z-10 overflow-hidden rounded-xl border border-white/10">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] z-10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex gap-4">
                <Button size="sm" variant="secondary" className="rounded-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </div>
            </div>
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={450}
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>

      <div className={`${isEven ? "md:order-2" : "md:order-1"}`}>
        <div className="space-y-4">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={`h-1 w-10 mr-3 bg-gradient-to-r ${project.gradient}`}></div>
            <h4 className="text-2xl font-bold">{project.title}</h4>
          </motion.div>

          <motion.p
            className="text-lg text-foreground/80"
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {project.description}
          </motion.p>

          <motion.ul
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {project.features.map((feature: string, i: number) => (
              <motion.li
                key={i}
                className="flex items-start"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-primary mr-2">+</span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="flex flex-wrap gap-2 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {project.technologies.map((tech: string, i: number) => (
              <Badge key={i} variant="outline" className="bg-secondary/20">
                {tech}
              </Badge>
            ))}
          </motion.div>

          <motion.div
            className="flex space-x-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Button size="sm" className="rounded-full bg-violet-600 hover:bg-violet-700">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
            <Button size="sm" variant="outline" className="rounded-full border-violet-500/30 hover:bg-violet-800/20">
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

