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
    description:
      'Every interaction reflects our commitment to excellence, discipline, and respect.',
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
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/about-meeting1.png"
          alt="Majestic team meeting"
          fill
          priority
          className="object-cover object-center brightness-110"
          sizes="100vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-[#5c4033]/50" />

        {/* Text content */}
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold mb-4 font-[Raleway]"
          >
            ABOUT US
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl font-[Raleway]"
          >
            What makes us different.
          </motion.p>
        </div>
      </section>

      {/* This is Majestic Section */}
      <section className="py-16 md:py-20 bg-[#eae8e6]">
  <div className="container mx-auto px-4">
    {/* 👇 Make grid with more space for text */}
    <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-16 items-center">
      
      {/* Left Image */}
      <FadeInSection>
        <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto md:mr-[-1.5rem] lg:mr-[-2rem] rounded-full overflow-hidden shadow-2xl">
          <Image
            src="/images/about-meeting.png"
            alt="Majestic Team Meeting"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </FadeInSection>

      {/* Right Text */}
      <FadeInSection delay={0.2}>
        <div className="text-center md:text-left md:ml-12 lg:ml-20 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a47] mb-6 font-[Raleway]">
            THIS IS MAJESTIC.
          </h2>
          <p className="text-gray-700 leading-relaxed font-[Raleway] text-base md:text-lg">
            Majestic Group is a dynamic and diversified business collective based in
            Nepal, committed to delivering excellence across multiple industries.
            With a strong presence in consumer goods, marketing, and entertainment,
            the group has earned a reputation for innovation, quality, and trust.
            From distributing globally recognized brands to crafting impactful
            digital strategies, Majestic Group continues to shape the future of
            Nepal&apos;s commercial landscape.
          </p>
        </div>
      </FadeInSection>
    </div>
  </div>
</section>


      {/* Mission & Vision Section */}
      <section className="py-16 md:py-20 bg-[#eae8e6]">
  <div className="container mx-auto px-4">
    {/* 👇 custom column widths: text = 1.3x, image = 0.7x */}
    <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-10 md:gap-16 items-center">
      
      {/* Left Text */}
      <FadeInSection>
        <div className="text-center md:text-left md:ml-12 lg:ml-20 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a47] mb-6 font-[Raleway]">
            Mission & Vision
          </h2>
          <p className="text-gray-700 leading-relaxed font-[Raleway] text-base md:text-lg">
            At Majestic Group, our mission is to elevate everyday experiences through
            premium products and thoughtful services. We envision a future where
            Nepali consumers enjoy world-class quality without compromise. By
            blending global standards with local insights, we strive to be a catalyst
            for growth, creativity, and sustainable development.
          </p>
        </div>
      </FadeInSection>

      {/* Right Image */}
      <FadeInSection delay={0.2}>
        <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto md:ml-16 lg:ml-24 rounded-full overflow-hidden shadow-2xl">
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
      <section className="py-2 md:py-8 bg-[#E8DCC3]">
  <div className="container mx-auto px-4">
    <FadeInSection>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-gray-800 mb-1 font-[Raleway]">
          Core Values
        </h2>
        <p className="text-lg text-gray-600 font-[Raleway]">what we stand for.</p>
      </div>
    </FadeInSection>

    {/* 👇 Align items to start */}
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
      
      <FadeInSection>
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
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
            >
              <h3 className="text-lg md:text-xl text-gray-800 mb-1 font-[Raleway]">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base font-[Raleway] mb-5">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </FadeInSection>
    </div>
  </div>
</section>


      {/* Trusted Partners Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
          <div className="text-center mb-12">
        {/* Trusted By Industry Leaders */}
        <p
          className="mb-2 font-[Raleway]"
          style={{
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '24px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#5c4033', // Adjust the brown color if needed
          }}
        >
          | Trusted By Industry Leaders
        </p>

        {/* Main Heading */}
        <h2
          className="font-[Raleway]"
          style={{
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '40px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#1e3a47', // Adjust color if needed
          }}
        >
          Together, we’ve built something remarkable
        </h2>
      </div>
          </FadeInSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 items-center">
            {partners.map((partner, index) => (
              <FadeInSection key={partner.name} delay={index * 0.05}>
                <div className="relative h-20 md:h-30 transition-all duration-300 flex items-center justify-center">
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
