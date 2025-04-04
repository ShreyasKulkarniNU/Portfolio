"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, MapPin, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-wider text-foreground/70 mb-2">FROM CONCEPT TO CREATION</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              LET's MAKE IT <span className="text-primary">HAPPEN!</span>
            </h3>
            <p className="text-lg mb-8">I'm available for full-time roles & freelance projects.</p>
            <p className="text-lg mb-8">
              I thrive on crafting dynamic web applications, and delivering seamless user experiences.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-secondary/50 mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-foreground/80">kulkarni.shreyas@northeastern.edu</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-secondary/50 mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-foreground/80">Boston, MA</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-secondary/50 mr-4">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Remote</h4>
                  <p className="text-foreground/80">Available for remote work</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-secondary/20 backdrop-blur-sm rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>
              <Button className="w-full rounded-full">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

