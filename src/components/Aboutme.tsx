'use client'

import { motion } from 'framer-motion'
import { Code, Server, Palette, Zap } from 'lucide-react'

const skills = [
  { name: 'Frontend Development', icon: Code, description: 'Crafting responsive and interactive user interfaces using modern frameworks and libraries.' },
  { name: 'Backend Development', icon: Server, description: 'Building robust server-side applications and RESTful APIs to power web applications.' },
  { name: 'UI/UX Design', icon: Palette, description: 'Creating intuitive and visually appealing designs that enhance user experience.' },
  { name: 'Performance Optimization', icon: Zap, description: 'Improving website speed and efficiency through code optimization and best practices.' },
]

export default function AboutMe() {
  return (
    <section className="py-20 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <motion.img
                src="/images/farooq-abdulla.webp"
                alt="farooq-abdulla"
                width={200}
                height={200}
                className="rounded-full mb-4 md:mb-0 md:mr-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
              <div>
                <motion.h3
                  className="text-2xl font-semibold mb-2 text-blue-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  K Farooq Abdulla
                </motion.h3>
                <motion.p
                  className="text-gray-400 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                Web Developer | Problem Solver | Tech Enthusiast
                </motion.p>
                <motion.p
                  className="text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Hello! I'm a dedicated web developer with a keen eye for detail and a passion for creating seamless digital experiences. With 1 years of experience in the field, I've honed my skills in both frontend and backend development, always staying up-to-date with the latest technologies and best practices.
                </motion.p>
              </div>
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-gray-700 p-4 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-center mb-2">
                    <skill.icon className="w-6 h-6 mr-2 text-blue-400" />
                    <h4 className="font-semibold text-gray-100">{skill.name}</h4>
                  </div>
                  <p className="text-gray-300 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}