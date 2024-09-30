"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive online store with cart functionality.",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Kanban-style task organizer with drag-and-drop interface.",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather data visualization for multiple locations.",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Comprehensive analytics tool for social media performance.",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts and nutrition goals.",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Virtual Event Platform",
    description: "Seamless virtual conference and networking experience.",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
]

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-card rounded-lg overflow-hidden shadow-lg"
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
      </div>
    </motion.div>
  )
}

export default function AnimatedProjects() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}