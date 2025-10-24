'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const products = [
  {
    name: 'Sukoon Sanitary Pads',
    variant: 'Ultra Thin',
    pack: 'Day Use - 10 Pads',
    image: '/images/products/sukoon/pads-day.jpg',
  },
  {
    name: 'Sukoon Sanitary Pads',
    variant: 'Maxi',
    pack: 'Night Use - 8 Pads',
    image: '/images/products/sukoon/pads-night.jpg',
  },
  {
    name: 'Sukoon Sanitary Pads',
    variant: 'Super Soft',
    pack: 'Regular - 12 Pads',
    image: '/images/products/sukoon/pads-regular.jpg',
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

export default function SukoonPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/brands/sukoon-hero-bg.jpg"
            alt="Sukoon Women Care"
            fill
            className="object-cover brightness-90"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/50 to-pink-700/40" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="mb-6">
              <Image
                src="/images/sukoon-logo-white.png"
                alt="Sukoon"
                width={250}
                height={100}
                className="mb-4"
              />
            </div>
            <p className="text-2xl md:text-3xl font-light">Waves of Freedom</p>
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
            <p className="text-sm text-gray-500 mb-2">| Sukoon – Comfort & Confidence</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Premium sanitary pads designed for your comfort and confidence.
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
                src="/images/brands/sukoon-ad-1.jpg"
                alt="Sukoon Freedom"
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
                src="/images/brands/sukoon-ad-2.jpg"
                alt="Sukoon Comfort"
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
              Sukoon offers premium sanitary pads designed with women's comfort and confidence in mind. Our pads feature 
              advanced absorption technology, ultra-soft materials, and a secure fit that allows you to move freely 
              throughout your day.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With breathable layers and leak-proof protection, Sukoon pads keep you dry and comfortable for up to 8 hours. 
              We believe every woman deserves to feel confident and secure during her period.
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
              Protection You Can Trust
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
              Why Choose Sukoon?
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
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">💧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Superior Absorption</h3>
              <p className="text-gray-600">
                Advanced absorption technology locks away moisture for up to 8 hours of leak-free protection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🌸</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Ultra Soft</h3>
              <p className="text-gray-600">
                Soft, cotton-like surface that's gentle on sensitive skin and prevents irritation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🌬️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Breathable</h3>
              <p className="text-gray-600">
                Breathable design keeps you fresh and comfortable all day long.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}