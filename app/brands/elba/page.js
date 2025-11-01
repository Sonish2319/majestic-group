'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    name: 'Elementum',
    model: 'EN60c-269 XD',
    type: 'Gas hob',
    image: '/images/products/elba/elementum-gashob.png',
  },
  {
    name: 'Fusion',
    model: '95G6c-400 XXD',
    type: 'Cooker',
    image: '/images/products/elba/fusion-cooker-1.png',
  },
  {
    name: 'Fusion',
    model: '90B6n-400 XD',
    type: 'Cooker',
    image: '/images/products/elba/fusion-cooker-2.png',
  },
  {
    name: 'Fusion',
    model: '94G8n-400 XD',
    type: 'Cooker',
    image: '/images/products/elba/fusion-cooker-3.png',
  },
  {
    name: 'Elio',
    model: 'EN60c-800 XX',
    type: 'Oven',
    image: '/images/products/elba/elio-oven.png',
  },
  {
    name: 'Elementum',
    model: 'EN60c-800 XD',
    type: 'Oven',
    image: '/images/products/elba/elementum-oven.png',
  },
  {
    name: 'Excellence',
    model: 'EX66C-400 XD',
    type: 'Cooker',
    image: '/images/products/elba/excellence-cooker-1.png',
  },
  {
    name: 'Fusion',
    model: '95G6c-400 XD',
    type: 'Cooker',
    image: '/images/products/elba/fusion-cooker-4.png',
  },
  {
    name: 'Excellence',
    model: 'EN66c-400 XD',
    type: 'Cooker',
    image: '/images/products/elba/excellence-cooker-2.png',
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

export default function ElbaPage() {
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
            src="/images/products/elba/elba-hero-bg.png"
            alt="Elba Kitchen"
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
                src="/images/products/elba/elba-logo-white.png"
                alt="Elba"
                width={200}
                height={80}
                className="mb-4"
              />
            </div>
            {/* <p className="text-2xl md:text-3xl font-light">Italian Taste Experience</p> */}
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-[#e8dcc8]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="font-[Raleway] text-[#663E3E] mb-2"
            style={{
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '100%',
            }}
          >
            | Elba – Talent for Cooking Since 1950
          </p>

          <h2
            className="font-[Raleway] text-[#434343]"
            style={{
              fontWeight: 400,
              fontSize: '40px',
              lineHeight: '100%',
            }}
          >
            Italian-made appliances blending style, technology, and tradition.
          </h2>
        </motion.div>

        {/* Image Grid (Left big + right two stacked) */}
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
              src="/images/products/elba/elba-history.png"
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
                src="/images/products/elba/elba-modern.png"
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
                src="/images/products/elba/elba-75-years.png"
                alt="75 Years of Artisan Excellence"
                fill
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-700 leading-relaxed font-[Raleway] text-lg">
            Founded in 1950 by Elio Baggio in Marostica, Italy, Elba has grown
            from a local workshop into a globally respected brand. With over 70
            years of expertise, Elba continues to craft high-performance cooking
            appliances that reflect Italian style, precision, and passion.
          </p>
        </motion.div>
      </div>
    </section>

      {/* Product Range Section */}
      <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
          >
            | Product Range Overview
          </p>

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
            For Every Kitchen, Every Style
          </h2>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-[Raleway]">
          {currentProducts.map((product, index) => (
            <ProductCard key={product.model} product={product} index={index} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </section>
    </div>
  )
}