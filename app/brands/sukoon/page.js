'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    name: 'Washing Machine',
    model: 'Front Load 8kg',
    type: 'Laundry',
    image: '/images/products/sukoon/washer-front-load.png',
  },
  {
    name: 'Washing Machine',
    model: 'Top Load 7kg',
    type: 'Laundry',
    image: '/images/products/sukoon/washer-top-load.png',
  },
  {
    name: 'Refrigerator',
    model: 'Double Door',
    type: 'Cooling',
    image: '/images/products/sukoon/refrigerator.png',
  },
  {
    name: 'Dishwasher',
    model: 'Built-in',
    type: 'Kitchen',
    image: '/images/products/sukoon/dishwasher.png',
  },
  {
    name: 'Oven',
    model: 'Built-in Electric',
    type: 'Kitchen',
    image: '/images/products/sukoon/oven.png',
  },
  {
    name: 'Microwave',
    model: 'Convection',
    type: 'Kitchen',
    image: '/images/products/sukoon/microwave.png',
  },
  {
    name: 'Cooktop',
    model: 'Gas 4 Burner',
    type: 'Kitchen',
    image: '/images/products/sukoon/cooktop.png',
  },
  {
    name: 'Dryer',
    model: 'Heat Pump',
    type: 'Laundry',
    image: '/images/products/sukoon/dryer.png',
  },
  {
    name: 'Washing Machine',
    model: 'Front Load 9kg',
    type: 'Laundry',
    image: '/images/products/sukoon/microwave.png',
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
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-[#f5e6d3] rounded-lg p-6 hover:shadow-xl transition-all group"
    >
      <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-1 font-[Raleway]">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-1 font-[Raleway]">{product.model}</p>
      <p className="text-sm text-[#5c4033] font-semibold font-[Raleway]">{product.type}</p>
    </motion.div>
  )
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex items-center justify-center gap-4 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => onPageChange(idx + 1)}
            className={`w-10 h-10 rounded-full transition ${
              currentPage === idx + 1
                ? 'bg-[#5c4033] text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

export default function BambusaPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 9
  const totalPages = Math.ceil(products.length / productsPerPage)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/products/sukoon/sukoon-hero-bg1.png"
            alt="Candy Appliances"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="mb-6">
              <Image
                src="/images/sukoon-logo.png"
                alt="Candy"
                width={200}
                height={80}
                className="mb-4"
              />
            </div>
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
                      <p
            className="font-[Raleway] text-[#663E3E] mb-2"
            style={{
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '100%',
            }}
          >| Sukoon – Comfort & Confidence</p>
                      <h2
            className="font-[Raleway] text-[#434343]"
            style={{
              fontWeight: 400,
              fontSize: '40px',
              lineHeight: '100%',
            }}
          >
             Premium sanitary pads designed for your comfort and confidence.
            </h2>
          </motion.div>

<div className="flex flex-col md:flex-row justify-center items-start gap-8 mb-16">
          {/* Left Big Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden shadow-xl flex-shrink-0 mx-auto md:mx-0"
            style={{
              width: '768px',
              height: '765px',
            }}
          >
            <Image
              src="/images/products/sukoon/left-first1.png"
              alt="Elba History"
              fill
              className="object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Right Column (Two stacked images) */}
          <div
            className="flex flex-col justify-between mx-auto md:mx-0"
            style={{
              width: '526px',
            }}
          >
            {/* Top Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden mb-5 shadow-xl"
              style={{
                width: '522px',
                height: '382px',
              }}
            >
              <Image
                src="/images/products/sukoon/bambusa-modern.png"
                alt="Elba Modern Kitchen"
                fill
                className="object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-xl"
              style={{
                width: '526px',
                height: '360px',
              }}
            >
              <Image
                src="/images/products/sukoon/bambusa-modern.png"
                alt="75 Years of Artisan Excellence"
                fill
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-700 leading-relaxed font-[Raleway] text-lg">
          Sukoon offers premium sanitary pads designed with women's comfort and confidence in mind. Our pads feature 
              advanced absorption technology, ultra-soft materials, and a secure fit that allows you to move freely 
              throughout your day.
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
          <p
            className="font-[Raleway]"
            style={{
              fontWeight: 600,
              fontStyle: 'SemiBold',
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#663E3E',
            }}
          >| Product Range Overview</p>
                     <h2
            className="font-[Raleway] mt-3"
            style={{
              fontWeight: 400,
              fontStyle: 'Regular',
              fontSize: '40px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#434343',
            }}
          >
              Protection You Can Trust
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product, index) => (
              <ProductCard key={product.model + index} product={product} index={index} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-[Raleway]">
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
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-[Raleway]">Superior Absorption</h3>
              <p className="text-gray-600 font-[Raleway]">
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
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-[Raleway]">Ultra Soft</h3>
              <p className="text-gray-600 font-[Raleway]">
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
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-[Raleway]">Breathable</h3>
              <p className="text-gray-600 font-[Raleway]">
                Breathable design keeps you fresh and comfortable all day long.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}