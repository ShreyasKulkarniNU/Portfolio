"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Lena Torres",
    role: "Product Lead • Creatify",
    content:
      "Shreyas has an exceptional ability to bring our design concepts to life. His attention to detail and dedication to creating seamless user experiences have greatly enhanced our projects. His skills in frontend development are truly impressive, and he's always ready to tackle any challenge that comes his way.",
    color: "bg-pink-100 dark:bg-pink-950/30",
    textColor: "text-pink-900 dark:text-pink-200",
  },
  {
    id: 2,
    name: "Emma Thompson",
    role: "Senior Designer • PixelCraft",
    content:
      "Working with Shreyas has been a fantastic experience. He's not only highly skilled in frontend technologies but also brings a refreshing creativity to every project. His ability to solve complex problems quickly and effectively makes him a key asset to our team. Plus, he's a great collaborator who makes the work environment better for everyone.",
    color: "bg-blue-100 dark:bg-blue-950/30",
    textColor: "text-blue-900 dark:text-blue-200",
  },
  {
    id: 3,
    name: "Ethan Parker",
    role: "Manager • TechFusion",
    content:
      "Shreyas delivered exceptional work on our project. His meticulous approach and strong communication skills greatly enhanced the quality of our web applications. He's a dependable developer who collaborates seamlessly with the team.",
    color: "bg-purple-100 dark:bg-purple-950/30",
    textColor: "text-purple-900 dark:text-purple-200",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "CTO • InnovateTech",
    content:
      "Shreyas consistently delivers high-quality code and innovative solutions. His technical expertise and problem-solving abilities have been invaluable to our projects. He's proactive, detail-oriented, and a pleasure to work with.",
    color: "bg-green-100 dark:bg-green-950/30",
    textColor: "text-green-900 dark:text-green-200",
  },
]

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = direction === "left" ? -current.offsetWidth : current.offsetWidth
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

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
          <h2 className="text-sm uppercase tracking-wider text-foreground/70 mb-2">WORD ON THE STREET</h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            about <span className="gradient-text">me</span>
          </h3>
        </motion.div>

        <div className="relative">
          <div ref={scrollRef} className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`flex-shrink-0 w-full md:w-[400px] rounded-xl p-6 snap-center ${testimonial.color}`}
              >
                <div className="space-y-4">
                  <h4 className={`text-xl font-bold ${testimonial.textColor}`}>
                    {testimonial.id === 1 && "A frontend developer who transforms visions into reality"}
                    {testimonial.id === 2 && "Efficient, innovative, and a pleasure to work with"}
                    {testimonial.id === 3 && "A reliable developer with a keen eye for detail"}
                    {testimonial.id === 4 && "Consistent quality and technical excellence"}
                  </h4>
                  <p className="text-foreground/80">{testimonial.content}</p>
                  <div className="flex items-center pt-4">
                    <div className="w-10 h-10 rounded-full bg-foreground/20 mr-3"></div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute top-1/2 -left-4 -translate-y-1/2 hidden md:block">
            <Button size="icon" variant="outline" className="rounded-full" onClick={() => scroll("left")}>
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Scroll left</span>
            </Button>
          </div>

          <div className="absolute top-1/2 -right-4 -translate-y-1/2 hidden md:block">
            <Button size="icon" variant="outline" className="rounded-full" onClick={() => scroll("right")}>
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

