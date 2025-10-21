'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const coreValues = [
  {
    title: 'Customer Service',
    description: 'We prioritize the needs of our clients and customers.',
  },
  {
    title: 'Professionalism',
    description: 'Every interaction reflects our commitment to excellence, discipline, and respect.',
  },
  {
    title: 'Integrity',
    description: 'We operate with transparency and honesty.',
  },
  {
    title: 'Excellence',
    description: 'We strive for world-class standards in everything we do.',
  },
]

const partners = [
  { name: 'Ncell', logo: '/images/partners/ncell.png' },
  { name: 'Griffity', logo: '/images/partners/griffity.png' },
  { name: 'Prabhu Bank', logo: '/images/partners/prabhu-bank.png' },
  { name: 'Secretions', logo: '/images/partners/secretions.png' },
  { name: 'CG Corp Global', logo: '/images/partners/cg-corp.png' },
  { name: 'Elba', logo: '/images/partners/elba-partner.png' },
//   { name: '70 Years', logo: '/images/partners/70-years.png' },
  { name: 'Ather', logo: '/images/partners/ather.png' },
  { name: 'Mahindra Rise', logo: '/images/partners/mahindra.png' },
  { name: 'Goldman Sachs', logo: '/images/partners/goldman-sachs.png' },
  { name: 'White Lamb', logo: '/images/partners/white-lamb.png' },
]

function FadeInSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-gray-900 to-[#5c4033] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            ABOUT US
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            What makes us different.
          </motion.p>
        </div>
      </section>

      {/* This is Majestic Section */}
      <section className="py-20 bg-[#e8dcc8]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-meeting.png"
                  alt="Majestic Team Meeting"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                THIS IS MAJESTIC.
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Majestic Group is a dynamic and diversified business collective based in Nepal, committed to delivering excellence across multiple industries. With a strong presence in consumer goods, marketing, and entertainment, the group has earned a reputation for innovation, quality, and trust.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From distributing globally recognized brands to crafting impactful digital strategies, Majestic Group continues to shape the future of Nepal's commercial landscape.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Mission & Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Majestic Group, our mission is to elevate everyday experiences through premium products and thoughtful services. We are driven by the belief that progress should never compromise quality without compromise.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By blending global standards with local insights, we strive to be a catalyst for growth, creativity, and sustainable development.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/mission-vision.png"
                  alt="Mission and Vision"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#e8dcc8]">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Core Values
              </h2>
              <p className="text-xl text-gray-600">what we stand for.</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/core-values-team.png"
                  alt="Team celebrating"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-[#5c4033] pl-4"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="text-sm text-gray-500 mb-2">| Trusted By Industry Leaders</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Together, we've built something remarkable
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <FadeInSection key={partner.name} delay={index * 0.05}>
                <div className="relative h-24 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-4"
                    loading="lazy"
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}