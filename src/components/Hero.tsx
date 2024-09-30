'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { Marquee3D } from './Marquee3D'


const socialLinks = [
  { name: 'Github', icon: Github, href: 'https://github.com/farooqabdulla' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/k-farooq-abdulla/' },
  { name: 'Email', icon: Mail, href: 'mailto:farooqabdulla15@gmail.com' },
]

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div 
      className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white overflow-hidden"
    style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #3c3b3b2e 0%, #000000d6 50%), url(https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
     >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          K Farooq Abdulla
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Web Developer & Designer
        </motion.p>
        
        {/* Animated underline */}
        <motion.div
          className="w-24 h-1 bg-blue-500 mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />

        {/* Social links */}
        <motion.div 
          className="flex justify-center space-x-4 mb-12"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="w-6 h-6" />
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
      </motion.div>
          <Marquee3D/>
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </div>
  )
}
