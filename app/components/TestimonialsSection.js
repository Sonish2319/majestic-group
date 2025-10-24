'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Aarav Shrestha',
    location: 'Bhaktapur',
    text: 'Majestic Group has completely transformed our kitchen experience. Majestic Group has completely transformed our kitchen experience.',
    avatar: '/images/testimonial-avatar.png',
  },
  {
    name: 'Anishma Shrestha',
    location: 'Bhaktapur',
    text: "I switched to Nepakids after trying several brands, and I'm genuinely impressed. My baby sleeps through the night without any leaks, and the gentle material doesn't irritate the skin.",
    avatar: '/images/testimonial-avatar.png',
  },
  {
    name: 'Priya Singh',
    location: 'Bhaktapur',
    text: "I never thought eco-friendly toilet paper could feel this soft, strong, and doesn't irritate my skin. Plus, I love knowing I'm making an eco-conscious choice.",
    avatar: '/images/testimonial-avatar.png',
  },
]

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative bg-[#f5e6d3] rounded-2xl p-8 shadow-lg transition-all overflow-hidden group text-center flex flex-col items-center justify-between"
      style={{
        width: '413px',
        height: '419px',
        opacity: 1,
      }}
    >
      {/* Hover Border Animation */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#5c4033] transition-all duration-500"></div>

      {/* Quotation Icon */}
      <Quote className="absolute top-5 left-5 w-7 h-7 text-[#5c4033] opacity-80 group-hover:scale-110 transition-transform duration-300" />

      {/* Avatar */}
      <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-[#5c4033]/30 group-hover:border-[#5c4033] transition-all duration-500">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Text */}
      <p className="text-gray-800 mb-6 italic leading-relaxed max-w-[90%]">
        "{testimonial.text}"
      </p>

      {/* Name and Location */}
      <div>
        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
        <p className="text-sm text-gray-600">{testimonial.location}</p>
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 mb-2">| Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Because trust isn't optional — it's essential.
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name + index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
