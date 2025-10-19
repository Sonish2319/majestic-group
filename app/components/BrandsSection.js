'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const brands = [
  { name: 'aKids', logo: '/images/akids-logo.png' },
  { name: 'Sukoon', logo: '/images/sukoon-logo.png' },
  { name: 'Bambusa', logo: '/images/bambusa-logo.png' },
  { name: 'Elba', logo: '/images/elba-logo.png' },
  { name: 'Candy', logo: '/images/candy-logo.png' },
  { name: 'Elica', logo: '/images/elica-logo.png' },
]

export default function BrandsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="brands" className="py-20 bg-[#f5e6d3]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 mb-2">| Our Brands</p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}