'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'lucide-react'

const galleryData = [
  {
    brand: 'Candy',
    tagline: 'Simply, Smart',
    logo: '/images/candy-logo.png',
    route: '/brands/candy',
    images: [
      '/images/gallery/candy/candy-1.png',
      '/images/gallery/candy/candy-2.png',
      '/images/gallery/candy/candy-3.png',
      '/images/gallery/candy/candy-4.png',
      '/images/gallery/candy/candy-5.png',
      '/images/gallery/candy/candy-6.png',
    ],
  },
  {
    brand: 'Elba',
    tagline: 'Italian Taste Experience',
    logo: '/images/elba-logo.png',
    route: '/brands/elba',
    images: [
      '/images/gallery/elba/elba-1.png',
      '/images/gallery/elba/elba-2.png',
      '/images/gallery/elba/elba-3.png',
      '/images/gallery/elba/elba-4.png',
      '/images/gallery/elba/elba-5.png',
      '/images/gallery/elba/elba-6.png',
      '/images/gallery/elba/elba-7.png',
      '/images/gallery/elba/elba-8.png',
      '/images/gallery/elba/elba-9.png',
    ],
  },
  {
    brand: 'Elica',
    tagline: '',
    logo: '/images/elica-logo.png',
    route: '/brands/elica',
    images: [
      '/images/gallery/elica/elica-1.png',
      '/images/gallery/elica/elica-2.png',
      '/images/gallery/elica/elica-3.png',
      '/images/gallery/elica/elica-4.png',
      '/images/gallery/elica/elica-5.png',
      '/images/gallery/elica/elica-6.png',
    ],
  },
  {
    brand: 'NepaKids',
    tagline: '',
    logo: '/images/nepakids-logo.png',
    route: '/brands/nepakids',
    images: [
      '/images/gallery/nepakids/nepakids-1.png',
      '/images/gallery/nepakids/nepakids-2.png',
      '/images/gallery/nepakids/nepakids-3.png',
      '/images/gallery/nepakids/nepakids-4.png',
      '/images/gallery/nepakids/nepakids-5.png',
    ],
  },
  {
    brand: 'Sukoon',
    tagline: 'Waves of Freedom',
    logo: '/images/sukoon-logo.png',
    route: '/brands/sukoon',
    images: [
      '/images/gallery/sukoon/sukoon-1.png',
      '/images/gallery/sukoon/sukoon-2.png',
      '/images/gallery/sukoon/sukoon-3.png',
    ],
  },
  {
    brand: 'Bambusa',
    tagline: '',
    logo: '/images/bambusa-logo.png',
    route: '/brands/bambusa',
    images: [
      '/images/gallery/bambusa/bambusa-1.png',
      '/images/gallery/bambusa/bambusa-2.png',
    ],
  },
]

function Lightbox({ image, onClose }) {
  if (!image) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
      >
        <X className="w-8 h-8" />
      </button>
      <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
        <Image
          src={image}
          alt="Gallery image"
          fill
          className="object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </motion.div>
  )
}

function GallerySection({ brand, tagline, logo, route, images, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-16"
    >
      {/* Brand Header */}
      <div className="flex items-center justify-center mb-8">
        <div className="text-center">
          <Link href={route} className="inline-block relative h-16 w-48 mx-auto mb-2 hover:opacity-90 transition-opacity">
            <Image
              src={logo}
              alt={brand}
              fill
              className="object-contain"
              loading="lazy"
            />
          </Link>
          {tagline && <p className="text-gray-600 text-sm">{tagline}</p>}
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`${brand} gallery ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </motion.section>
  )
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
<section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
  {/* Background image */}
  <Image
    src="/images/about-meeting1.png" 
    alt="Gallery background"
    fill
    priority
    className="object-cover object-center brightness-115 contrast-105"
    sizes="100vw"
  />

  {/* Gradient overlay — lighter, so background is more visible */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-[#5c4033]/50" />

  {/* Text content */}
  <div className="relative z-10 text-center text-white px-4">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-md"
    >
      GALLERY
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-lg md:text-xl drop-shadow-sm"
    >
      Trusted by families across Nepal
    </motion.p>
  </div>
</section>


      {/* Gallery Sections */}
      <div className="container mx-auto px-4 py-16">
        {galleryData.map((section, index) => (
          <GallerySection
            key={section.brand}
            brand={section.brand}
            tagline={section.tagline}
            logo={section.logo}
            route={section.route}
            images={section.images}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
