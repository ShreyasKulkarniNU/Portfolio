"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js",
    description: "Learn how to leverage Next.js features to build performant and scalable React applications.",
    date: "April 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Mastering Framer Motion Animations",
    description: "A comprehensive guide to creating smooth and engaging animations with Framer Motion.",
    date: "March 28, 2024",
    readTime: "7 min read",
    category: "UI/UX",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "DevOps Best Practices for Modern Web Applications",
    description: "Explore essential DevOps practices to streamline your development workflow and deployment process.",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "DevOps",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function Blog() {
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
          <h2 className="text-sm uppercase tracking-wider text-foreground/70 mb-2">LATEST INSIGHTS</h2>
          <h3 className="text-4xl md:text-5xl font-bold">From My Blog</h3>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, learnings, and perspectives on web development, design, and technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: post.id * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full border-none bg-secondary/20 backdrop-blur-sm hover:bg-secondary/30 transition-colors">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-violet-400 hover:text-violet-300 hover:bg-transparent"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button variant="outline" className="rounded-full border-violet-500/30 hover:bg-violet-800/20">
            View All Posts <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

