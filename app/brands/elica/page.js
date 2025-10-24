'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    name: 'Elica Chimney',
    model: 'Wall Mounted 90cm',
    type: 'Kitchen Hood',
    image: '/images/products/elica/chimney-wall-90.jpg',
  },
  {
    name: 'Elica Hob',
    model: 'Gas 4 Burner',
    type: 'Cooktop',
    image: '/images/products/elica/hob-gas-4.jpg',
  },
  {
    name: 'Elica Chimney',
    model: 'Island 90cm',
    type: 'Kitchen Hood',
    image: '/images/products/elica/chimney-island.jpg',
  },
  {
    name: 'Elica Hob',
    model: 'Induction 4 Zone',
    type: 'Cooktop',
    image: '/images/products/elica/hob-induction.jpg',
  },
  {
    name: 'Elica Chimney',
    model: 'Curved Glass 60cm',
    type: 'Kitchen Hood',
    image: '/images/products/elica/chimney-curved.jpg',
  },
  {
    name: 'Elica Built-in Hob',
    model: 'Gas 3 Burner',
    type: 'Cooktop',
    image: '/images/products/elica/hob-builtin.jpg',
  },
  // optional extras to show pagination working
  {
    name: 'Elica Chimney',
    model: 'Designer 120cm',
    type: 'Kitchen Hood',
    image: '/images/products/elica/chimney-designer.jpg',
  },
  {
    name: 'Elica Hob',
    model: 'Ceramic 2 Zone',
    type: 'Cooktop',
    image: '/images/products/elica/hob-ceramic-2.jpg',
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
          alt={`${product.name} ${product.model}`}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-1">{product.model}</p>
      <p className="text-sm text-[#5c4033] font-semibold">{product.type}</p>
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

export default function ElicaPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6
  const totalPages = Math.ceil(products.length / productsPerPage)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/brands/elica-hero-bg.jpg"
            alt="Elica Kitchen Solutions"
            fill
            className="object-cover brightness-90"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/40 to-slate-700/20" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="mb-6">
              <Image
                src="/images/elica-logo-white.png"
                alt="Elica"
                width={250}
                height={100}
                className="mb-4"
              />
            </div>
            <p className="text-2xl md:text-3xl font-light">Cook with Confidence</p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 bg-[#eaf0ee]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm text-gray-500 mb-2">| Elica – Innovation in the Kitchen</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Elegant design, powerful performance — kitchen solutions for modern homes.
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
                src="/images/brands/elica-ad-1.jpg"
                alt="Elica Performance"
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
                src="/images/brands/elica-ad-2.jpg"
                alt="Elica Design"
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
              Elica brings decades of experience in kitchen appliances — focusing on aerodynamic design, quiet performance, and
              superior extraction power. Every product we build balances aesthetics with efficiency so your kitchen performs as beautifully as it looks.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From hobs to chimneys and built-in systems, Elica products are engineered for reliability, easy maintenance, and energy-conscious operation.
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
              Advanced kitchen appliances built to last
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentProducts.map((product, index) => (
              <ProductCard key={`${product.model}-${index}`} product={product} index={index} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                if (page < 1 || page > totalPages) return
                setCurrentPage(page)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            />
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#f7faf9]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Elica?
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
              <div className="w-16 h-16 bg-[#5c4033] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Powerful Extraction</h3>
              <p className="text-gray-600">
                High performance motors ensure fast and efficient removal of cooking fumes and odors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-[#5c4033] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🎛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Smart Controls</h3>
              <p className="text-gray-600">
                Intuitive control panels and multiple speed settings for personalized cooking experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-[#5c4033] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Durable Build</h3>
              <p className="text-gray-600">
                Built with premium materials for longevity and low-maintenance operation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
