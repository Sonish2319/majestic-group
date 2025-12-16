'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// const products = [
//   { name: 'NepaKids', image: '/images/nepakids.png', category: 'Baby Care' },
//   { name: 'Sukoon', image: '/images/sukoon.png', category: 'Sanitary Pads' },
//   { name: 'Bambusa', image: '/images/bambusa.png', category: 'Eco-Friendly' },
//   { name: 'Candy', image: '/images/candy.png', category: 'Kitchen Appliances' },
//   { name: 'Elba', image: '/images/elba.png', category: 'Kitchen Appliances' },
//   { name: 'Elica', image: '/images/elica.png', category: 'Kitchen Appliances' },
// ]

const products = [
  { name: 'NepaKids', image: '/images/nepakids.png', route: 'brands/nepakids' },
  { name: 'Sukoon', image: '/images/sukoon.png', route: 'brands/sukoon' },
  { name: 'Bambusa', image: '/images/bambusa.png', route: 'brands/bambusa' },
  // { name: 'Candy', image: '/images/candy.png', route: 'brands/candy' },
  // { name: 'Elba', image: '/images/elba.png', route: 'brands/elba' },
  // { name: 'Elica', image: '/images/elica.png', route: 'brands/elica' },
]

function ProductCard({ product, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [imageLoaded, setImageLoaded] = useState(false)
  const router = useRouter()

  // Handle click to navigate to product route
  const handleClick = () => {
    router.push(`/${product.route}`)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#f5e6d3] rounded-lg p-8 hover:shadow-xl transition-shadow cursor-pointer group mx-auto"
      style={{
        width: '100%',
        maxWidth: '400px',
        height: '360px',
        opacity: 1,
      }}
      onClick={handleClick} // Add onClick to handle navigation
    >
      {/* <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center group-hover:text-[#5c4033] transition">
        {product.name}
      </h3> */}

      <div className="relative w-full h-16 mb-6 flex items-center justify-center">
  <Image
    src={`/images/home_products_logo/${product.name}.png`}
    alt={`${product.name} logo`}
    width={140}
    height={42}
    className="object-contain group-hover:scale-105 transition-transform duration-300 opacity-100"
    style={{
      transform: 'rotate(0deg)',
      top: '61px',
      left: '124.5px',
    }}
    priority={index < 3} // prioritize first row logos
  />
</div>

      <div className="relative h-48 mb-4">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-400"></div>
          </div>
        )}
        {isInView && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-contain group-hover:scale-105 transition-transform duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoadingComplete={() => setImageLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <p className="text-center text-gray-600 text-sm">{product.category}</p>
    </motion.div>
  )
}

export default function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-[Raleway] font-semibold text-[24px] leading-[100%] tracking-[0%] text-[#663E3E] mb-2">
  | Our Products
</p>

          <h2
  className="font-[Raleway] font-normal text-[40px] leading-[100%] tracking-[0%] text-[#434343]"
>
  A curated selection of trusted brands for every home.
</h2>

        </motion.div>

        {/* Responsive grid with increased row gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 justify-items-center"> {/* Increased row gap here */}
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
