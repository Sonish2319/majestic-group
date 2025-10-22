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
    image: '/images/products/candy/washer-front-load.jpg',
  },
  {
    name: 'Washing Machine',
    model: 'Top Load 7kg',
    type: 'Laundry',
    image: '/images/products/candy/washer-top-load.jpg',
  },
  {
    name: 'Refrigerator',
    model: 'Double Door',
    type: 'Cooling',
    image: '/images/products/candy/refrigerator.jpg',
  },
  {
    name: 'Dishwasher',
    model: 'Built-in',
    type: 'Kitchen',
    image: '/images/products/candy/dishwasher.jpg',
  },
  {
    name: 'Oven',
    model: 'Built-in Electric',
    type: 'Kitchen',
    image: '/images/products/candy/oven.jpg',
  },
  {
    name: 'Microwave',
    model: 'Convection',
    type: 'Kitchen',
    image: '/images/products/candy/microwave.jpg',
  },
  {
    name: 'Cooktop',
    model: 'Gas 4 Burner',
    type: 'Kitchen',
    image: '/images/products/candy/cooktop.jpg',
  },
  {
    name: 'Dryer',
    model: 'Heat Pump',
    type: 'Laundry',
    image: '/images/products/candy/dryer.jpg',
  },
  {
    name: 'Washing Machine',
    model: 'Front Load 9kg',
    type: 'Laundry',
    image: '/images/products/candy/washer-premium.jpg',
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

export default function CandyPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 9
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
            src="/images/brands/candy-hero-bg.jpg"
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
                src="/images/candy-logo-white.png"
                alt="Candy"
                width={200}
                height={80}
                className="mb-4"
              />
            </div>
            <p className="text-2xl md:text-3xl font-light">Simply. Smart</p>
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
            <p className="text-sm text-gray-500 mb-2">| Candy – Innovation for Modern Living</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Smart appliances designed for your everyday life.
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
                src="/images/brands/candy-lifestyle-1.jpg"
                alt="Candy Modern Home"
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
                src="/images/brands/candy-lifestyle-2.jpg"
                alt="Candy Kitchen"
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
              Candy is a leading global brand in home appliances, offering innovative solutions that combine technology, 
              design, and sustainability. From washing machines to kitchen appliances, Candy products are designed to make 
              everyday life simpler, smarter, and more efficient.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With advanced features like smart connectivity, energy efficiency, and intuitive controls, Candy brings 
              cutting-edge technology into your home, making household tasks easier and more enjoyable.
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
              Smart Solutions for Every Home
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Candy?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-[#5c4033] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🔌</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Smart Technology</h3>
              <p className="text-gray-600">
                Connect and control your appliances remotely with smart features and intuitive interfaces.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-[#5c4033] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Energy Efficient</h3>
              <p className="text-gray-600">
                Save energy and reduce costs with eco-friendly appliances designed for sustainability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-[#5c4033] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Modern Design</h3>
              <p className="text-gray-600">
                Sleek, contemporary designs that complement any home interior and lifestyle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}