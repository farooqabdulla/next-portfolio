"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Send, User, Mail, MessageSquare } from "lucide-react"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row"
      >
        <div className="md:w-1/2 relative">
          <img
            src="/placeholder.svg?height=600&width=600"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-80 flex flex-col items-center justify-center p-8">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold text-white text-center mb-4"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-white text-center"
            >
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </div>
        </div>
        <div className="md:w-1/2 p-8 bg-white">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="peer w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-600 placeholder-transparent pt-5 pb-2 px-4"
                    placeholder="Your Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-purple-600 peer-focus:text-sm"
                  >
                    Your Name
                  </label>
                  <User className="absolute right-4 top-4 text-gray-400" size={20} />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="peer w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-600 placeholder-transparent pt-5 pb-2 px-4"
                    placeholder="Email Address"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-purple-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                  <Mail className="absolute right-4 top-4 text-gray-400" size={20} />
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="peer w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-purple-600 placeholder-transparent rounded-md p-4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-2 -top-3 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-purple-600 peer-focus:text-sm"
                  >
                    Your Message
                  </label>
                  <MessageSquare className="absolute right-4 top-4 text-gray-400" size={20} />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-md font-semibold hover:from-purple-700 hover:to-blue-700 transition duration-300 flex items-center justify-center"
                  type="submit"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center text-gray-800 py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Check className="text-green-500" size={40} />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">Your message has been sent successfully. We'll get back to you soon.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="bg-purple-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-purple-700 transition duration-300"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}