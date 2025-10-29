'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 bg-[#E8DCC3]">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Who we are */}
          <p className="font-[Raleway] font-semibold text-[24px] leading-[100%] tracking-[0%] text-[#663E3E] mb-2">
            | Who we are !
          </p>

          {/* Line */}
          {/* <div className="mx-auto mb-4" style={{ width: '60px', border: '2px solid #663E3E' }} /> */}

          {/* Discover who we are */}
          <h2 className="font-[Raleway] font-normal text-[40px] leading-[100%] tracking-[0%] text-[#434343] mb-8">
            Discover who we are and what we stand for.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-30 items-center">
          {/* Image */}
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

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6 -mt-30"
          >
            <p className="font-[Raleway] font-normal text-[20px] leading-[150%] tracking-[0%] text-gray-700">
            Majestic Group is a proudly Nepali company dedicated to redefining everyday living through homegrown essentials. From Nepakids diapers to Sukoon sanitary pads and Bambusa eco-friendly toilet paper, we deliver comfort, care, and quality to households across Nepal. Alongside these trusted local brands, we also bring world-class kitchen appliances from Elba, Candy, and Elica—ensuring that every corner of your home reflects innovation, reliability, and style. At Majestic, we believe the best solutions start at home.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#5c4033] text-white px-8 py-3 rounded-md hover:bg-[#3d2817] transition mt-4"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
