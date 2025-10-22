'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const products = [
  {
    name: 'NepaKids Diaper',
    size: '38 pcs',
    type: 'Newborn',
    image: '/images/products/nepakids/diaper-38.png',
  },
  {
    name: 'NepaKids Diaper',
    size: '42 pcs',
    type: 'Small',
    image: '/images/products/nepakids/diaper-42.png',
  },
  {
    name: 'NepaKids Diaper',
    size: '50 pcs',
    type: 'Medium',
    image: '/images/products/nepakids/diaper-50.png',
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
      <p className="text-lg text-gray-600 mb-1 text-center">{product.size}</p>
      <p className="text-sm text-[#5c4033] font-semibold text-center">{product.type}</p>
    </motion.div>
  )
}

export default function NepaKidsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/products/nepakids/nepakids-hero-bg.png"
            alt="NepaKids Baby Care"
            fill
            className="object-cover brightness-90"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-purple-700/30" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="mb-6">
              <Image
                src="/images/products/nepakids/nepakids-logo-white.png"
                alt="NepaKids"
                width={250}
                height={100}
                className="mb-4"
              />
            </div>
            {/* <p className="text-2xl md:text-3xl font-light">Gentle Protection. Happy Every Step.</p> */}
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
            <p className="text-sm text-gray-500 mb-2">| Nepakids – Gentle Protection, Happy Every Step.</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Soft on skin, strong on leaks - Nepakids cares
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
                src="/images/products/nepakids/nepakids-ad-1.png"
                alt="NepaKids - Which fits your baby"
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
                src="/images/products/nepakids/nepakids-ad-2.png"
                alt="NepaKids Features"
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
              Designed for comfort and dryness, these diapers use advanced Japanese SAP (Super Absorbent Polymer) technology 
              for long-lasting protection. Engineered to prevent leaks for up to 12 hours, making them ideal for overnight use.
            </p>
            <p className="text-gray-700 leading-relaxed">
              NepaKids diapers are made with soft, breathable materials that are gentle on your baby's delicate skin, 
              ensuring maximum comfort while keeping them dry and happy throughout the day and night.
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
              Keeping little ones dry, happy, and giggling.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={product.size} product={product} index={index} />
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
              Why Choose NepaKids?
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
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">💧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">12-Hour Protection</h3>
              <p className="text-gray-600">
                Advanced Japanese SAP technology locks away moisture for up to 12 hours of leak-free comfort.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🌸</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Soft & Gentle</h3>
              <p className="text-gray-600">
                Ultra-soft materials that are gentle on sensitive baby skin, preventing rashes and irritation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🌬️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Breathable Design</h3>
              <p className="text-gray-600">
                Breathable outer layer keeps baby's skin dry and comfortable all day and night.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}