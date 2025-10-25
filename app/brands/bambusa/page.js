'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const products = [
  {
    name: 'Bambusa Toilet Paper',
    variant: '2-Ply Premium',
    pack: '12 Rolls',
    image: '/images/products/bambusa/toilet-paper-12.jpg',
  },
  {
    name: 'Bambusa Toilet Paper',
    variant: '3-Ply Ultra Soft',
    pack: '6 Rolls',
    image: '/images/products/bambusa/toilet-paper-6.jpg',
  },
  {
    name: 'Bambusa Toilet Paper',
    variant: 'Eco-Friendly',
    pack: '24 Rolls',
    image: '/images/products/bambusa/toilet-paper-24.jpg',
  },
]

function ProductCard({ product, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#f5e6d3] rounded-lg p-8 hover:shadow-xl transition-all group"
    >
      <div className="relative h-72 mb-4 overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">{product.name}</h3>
      <p className="text-lg text-gray-600 mb-1 text-center">{product.variant}</p>
      <p className="text-sm text-[#5c4033] font-semibold text-center">{product.pack}</p>
    </motion.div>
  )
}

export default function BambusaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/brands/bambusa-hero-bg.jpg"
            alt="Bambusa Eco-Friendly"
            fill
            className="object-cover brightness-90"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/50 to-green-700/40" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="mb-6">
              <Image
                src="/images/bambusa-logo-white.png"
                alt="Bambusa"
                width={250}
                height={100}
                className="mb-4"
              />
            </div>
            <p className="text-2xl md:text-3xl font-light">Tree Free. Guilt Free.</p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 bg-[#e8dcc8]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm text-gray-500 mb-2">| Bambusa – Sustainable Living</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Eco-friendly toilet paper that's soft, strong, and sustainable.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/brands/bambusa-ad-1.jpg"
                alt="Bambusa Tree Free"
                fill
                className="object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/brands/bambusa-ad-2.jpg"
                alt="Bambusa Features"
                fill
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-gray-700 leading-relaxed mb-6">
              Bambusa is revolutionizing the toilet paper industry with 100% bamboo-based products. Bamboo grows 30 times 
              faster than trees, making it the perfect sustainable alternative. Our toilet paper is soft, strong, and 
              biodegradable, providing comfort while caring for the planet.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Made without harsh chemicals, dyes, or fragrances, Bambusa toilet paper is gentle on your skin and the 
              environment. Join us in making a positive impact—one roll at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm text-gray-500 mb-2">| Product Range Overview</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Premium Quality, Planet Friendly
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={product.pack} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#e8dcc8]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Bambusa?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">100% Bamboo</h3>
              <p className="text-gray-600">
                Made from sustainably harvested bamboo, the fastest-growing plant on Earth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">♻️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Biodegradable</h3>
              <p className="text-gray-600">
                Breaks down naturally without harming the environment or septic systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Soft & Strong</h3>
              <p className="text-gray-600">
                Ultra-soft texture that's durable and gentle on sensitive skin.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}