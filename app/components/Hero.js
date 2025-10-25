'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const slides = [
  {
    title: 'Bespoke AI Laundry Combo',
    subtitle: 'Introducing',
    image: '/images/hero-laundry.png',
    link: '/brands/elba',
  },
  {
    title: 'Premium Kitchen Appliances',
    subtitle: 'Discover',
    image: '/images/elba.png',
    link: '/gallery',
  },
  {
    title: 'Eco-Friendly Products',
    subtitle: 'Experience',
    image: '/images/bambusa.png',
    link: '/brands/bambusa',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)
  const next = () => setCurrent((current + 1) % slides.length)

  const handleExplore = () => {
    router.push(slides[current].link)
  }

  return (
    <section id="home" className="relative h-screen bg-black mt-16 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-contain opacity-60"
              priority
            />
          </div>

          {/* Text center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl mb-4"
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
            >
              {slides[current].title}
            </motion.h2>
          </div>

          {/* Explore button bottom right */}
{/* Explore button bottom right */}
<motion.button
  onClick={handleExplore}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="absolute bottom-10 right-6 md:bottom-20 md:right-10 
             text-white border-2 border-[#663E3E] rounded-[10px]
             px-4 py-2 md:px-5 md:py-3 flex items-center justify-center gap-3 
             hover:bg-[#663E3E] hover:text-white transition w-[180px] md:w-[235px]"
>
  Explore Products <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
</motion.button>

        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots bottom left */}
      <div className="absolute bottom-20 left-10 flex gap-3 items-center">
        {slides.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrent(idx)}
            animate={{
              width: idx === current ? 24 : 10,
              height: 10,
              borderRadius: 20,
              backgroundColor: idx === current ? '#fff' : 'rgba(255,255,255,0.4)',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="transition-all"
          />
        ))}
      </div>
    </section>
  )
}
