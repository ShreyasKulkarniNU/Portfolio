"use client"

import { motion } from "framer-motion"
import { Code, Server, Database, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const workExperience = [
  {
    id: 1,
    company: "SS&C Technologies",
    role: "Software Engineer",
    period: "July 2024 - Dec 2024",
    location: "Boston, MA, USA",
    description: [
      "Actively contributed to REST API development using React, Redux, improved the rendering time by 7%.",
      "Developed standardized API frameworks using OpenAPI, resulting in a 20% reduction in development time.",
      "Implemented auto-generation processes for port-to-port transitions, streamlining API construction.",
      "Developed inventory management system for client SAAS application using Java and AWS, handling 3K+ SKUs with 99.9% uptime.",
    ],
    icon: <Code className="h-10 w-10 text-violet-400" />,
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: 2,
    company: "Infosys",
    role: "Software Engineer - DevOps",
    period: "Jan 2021 - Jul 2023",
    location: "Pune, India",
    description: [
      "Developed ERP SAAS product with Angular, Node.js & cross-functional teams, resulting in 20% increase in product adoption.",
      "Boosted product revenue by 1.4 million $ (60% increase) through Stripe and UPI payment gateway features.",
      "Orchestrated containerized deployments using Kubernetes, enhancing application scalability by 20%.",
      "Pioneered CI/CD pipelines on GitHub Actions, automating build and deployment processes.",
      "Collaborated with cross-functional teams using Azure Boards in scrum meetings.",
    ],
    icon: <Server className="h-10 w-10 text-blue-400" />,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    company: "Itarium Technology",
    role: "Software Engineer DevOps",
    period: "Feb 2020 – Oct 2020",
    location: "India",
    description: [
      "Spearheaded React-based web applications development, resulting in 20% improvement in user engagement metrics.",
      "Translated design mock-ups into 20+ reusable React components, contributing to 15% reduction in development time.",
      "Optimized application performance by decreasing load times through efficient state management using React Context and Redux.",
    ],
    icon: <Database className="h-10 w-10 text-emerald-400" />,
    color: "from-emerald-500/20 to-green-500/20",
  },
]

const skills = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Expert in React, Next.js, Angular, and modern frontend frameworks with a focus on responsive design and performance optimization.",
    icon: <Code className="h-6 w-6 text-violet-400" />,
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Proficient in Node.js, Express, Java, and building RESTful APIs with a strong understanding of database design and optimization.",
    icon: <Server className="h-6 w-6 text-violet-400" />,
  },
  {
    id: 3,
    title: "DevOps & Cloud",
    description:
      "Experienced with AWS, Azure, Docker, Kubernetes, and CI/CD pipelines to deliver scalable and reliable applications.",
    icon: <Database className="h-6 w-6 text-violet-400" />,
  },
  {
    id: 4,
    title: "Team Collaboration",
    description:
      "Strong communicator who thrives in cross-functional teams, with experience in Agile methodologies and project management.",
    icon: <Users className="h-6 w-6 text-violet-400" />,
  },
]

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm uppercase tracking-wider text-foreground/70 mb-2">PROFESSIONAL JOURNEY</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Work Experience</h3>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering impactful solutions across various domains and technologies.
          </p>
        </motion.div>

        <div className="space-y-12 mb-20">
          {workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
            >
              <Card className="overflow-hidden border-none bg-gradient-to-br shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${job.color} opacity-20`}></div>
                <div className="relative">
                  <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-2">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-background/80 backdrop-blur-sm">{job.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{job.company}</CardTitle>
                        <CardDescription className="text-base font-medium text-foreground/70">
                          {job.role}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-sm text-foreground/60">
                      <div>{job.period}</div>
                      <div>{job.location}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 list-disc pl-5">
                      {job.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          viewport={{ once: true }}
                          className="text-foreground/80"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h3 className="text-3xl font-bold">Core Skills & Expertise</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-none bg-secondary/20 backdrop-blur-sm hover:bg-secondary/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-2">{skill.icon}</div>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

