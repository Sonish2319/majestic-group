'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
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
  const [hoveredIndex, setHoveredIndex] = useState(null) // Track hovered logo

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

  const handleBrandClick = (route) => {
    router.push(route)
  }

  const handleMouseEnterLogo = (index) => {
    controls.stop() // Stop marquee when hovering
    setHoveredIndex(index)
  }

  const handleMouseLeaveLogo = () => {
    setHoveredIndex(null)
    // Resume marquee
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
    <section id="brands" className="py-6 overflow-hidden">
      <div className="container mx-auto px-12">
      <motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{ duration: 0.6 }}
  className="text-center mb-12"
>
  <p className="font-[Raleway] font-semibold text-[24px] leading-[100%] tracking-[0%] text-[#663E3E] mb-2">
    | Our Brands
  </p>
</motion.div>


        {/* Animated flowing marquee container */}
        <div className="relative flex overflow-hidden">
          <motion.div
            animate={controls}
            className="flex gap-20 min-w-max"
          >
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  scale: hoveredIndex === index ? 1.2 : 1, // Pop out hovered logo
                  filter:
                    hoveredIndex !== null && hoveredIndex !== index
                      ? 'grayscale(100%) blur(2px)' // Blur and grayscale other logos
                      : 'grayscale(0%) blur(0)',
                }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative w-36 h-20 cursor-pointer"
                onClick={() => handleBrandClick(brand.route)}
                onMouseEnter={() => handleMouseEnterLogo(index)}
                onMouseLeave={handleMouseLeaveLogo}
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
