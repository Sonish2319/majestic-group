'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 bg-[#e8dcc8]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 mb-2">| Who we are !</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Discover who we are and what we stand for.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/about-team.png"
              alt="Majestic Group Team"
              fill
              className="object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed">
              Majestic Group is a proudly Nepali company dedicated to redefining everyday living through homegrown essentials. From NepaKids diapers to Sukoon sanitary pads, and Bambusa eco-friendly toilet paper, we deliver comfort, care, and quality to households across Nepal.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Alongside these trusted local brands, we also bring world-class kitchen appliances from Elba, Candy, and Elica. These renowned brands offer innovation, reliability, and style. At Majestic, we believe the best solutions start at home.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#5c4033] text-white px-8 py-3 rounded-md hover:bg-[#3d2817] transition"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}