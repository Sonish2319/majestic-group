'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const brands = [
  { name: 'aKids', logo: '/images/akids-logo.png', route: '/brands/nepakids' },
  { name: 'Sukoon', logo: '/images/sukoon-logo.png', route: '/brands/sukoon' },
  { name: 'Bambusa', logo: '/images/bambusa-logo.png', route: '/brands/bambusa' },
  { name: 'Elba', logo: '/images/elba-logo.png', route: '/brands/elba' },
  { name: 'Candy', logo: '/images/candy-logo.png', route: '/brands/candy' },
  { name: 'Elica', logo: '/images/elica-logo.png', route: '/brands/elica' },
]

export default function BrandsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const router = useRouter()
  const controls = useAnimation()

  // Start infinite flow animation when in view
  useEffect(() => {
    if (isInView) {
      controls.start({
        x: ['0%', '-50%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        },
      })
    }
  }, [isInView, controls])

  // Navigate to brand page
  const handleBrandClick = (route) => {
    router.push(route)
  }

  // Pause animation on hover
  const handleMouseEnter = () => {
    controls.stop()
  }

  // Resume animation on mouse leave
  const handleMouseLeave = () => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        },
      },
    })
  }

  return (
    <section id="brands" className="py-20 bg-[#f5e6d3] overflow-hidden">
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

        {/* Animated flowing marquee container */}
        <div
          className="relative flex overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            animate={controls}
            className="flex gap-12 md:gap-16 min-w-max"
          >
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                onClick={() => handleBrandClick(brand.route)}
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
