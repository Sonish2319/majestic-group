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
      className="bg-[#f5e6d3] rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
    >
      <Quote className="w-8 h-8 text-[#5c4033] mb-4" />
      <p className="text-gray-700 mb-6 italic leading-relaxed">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.location}</p>
        </div>
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
            Because trust isn't optional it's essential.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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