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
      <Quote
        className="absolute"
        style={{
          width: '36px',
          height: '27px',
          transform: 'rotate(-180deg)',
          opacity: 1,
          top: '30px',
          left: '20px',
        }}
        color="#5c4033"
      />

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
      <p className="font-[Raleway] font-normal text-[20px] leading-[100%] text-center text-gray-800 mb-6">
        {testimonial.text}
      </p>

      {/* Name and Location */}
      <div>
        <h4 className="font-[Raleway] font-light text-[16px] leading-[100%] text-center text-gray-900">
          {testimonial.name}, {testimonial.location}
        </h4>
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
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-[Raleway] font-semibold text-[24px] leading-[100%] tracking-[0%] text-[#663E3E] mb-2">
            | Testimonials
          </p>

          {/* Line */}
          {/* <div
            className="mx-auto mb-4"
            style={{ width: '60px', border: '2px solid #663E3E' }}
          /> */}

          {/* Heading */}
          <h2 className="font-[Raleway] font-normal text-[40px] leading-[100%] tracking-[0%] text-[#434343] mt-5">
            Because trust isn't optional it's essential.
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
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
