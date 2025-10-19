'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [brandsOpen, setBrandsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-gray-800">MAJESTIC GROUP</h1>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#5c4033] transition">
              HOME
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#5c4033] transition flex items-center">
                OUR BRANDS <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="#brands" className="block px-4 py-2 hover:bg-gray-100">Elba</a>
                <a href="#brands" className="block px-4 py-2 hover:bg-gray-100">Candy</a>
                <a href="#brands" className="block px-4 py-2 hover:bg-gray-100">Elica</a>
                <a href="#brands" className="block px-4 py-2 hover:bg-gray-100">Bambusa</a>
                <a href="#brands" className="block px-4 py-2 hover:bg-gray-100">Sukoon</a>
                <a href="#brands" className="block px-4 py-2 hover:bg-gray-100">NepaKids</a>
              </div>
            </div>
            <a href="#gallery" className="text-gray-700 hover:text-[#5c4033] transition">
              GALLERY
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#5c4033] transition">
              ABOUT US
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#5c4033] transition">
              CONTACT US
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4"
            >
              <a href="#home" className="block text-gray-700 hover:text-[#5c4033]">
                HOME
              </a>
              <div>
                <button
                  onClick={() => setBrandsOpen(!brandsOpen)}
                  className="w-full text-left text-gray-700 hover:text-[#5c4033] flex items-center justify-between"
                >
                  OUR BRANDS <ChevronDown className={`w-4 h-4 transition-transform ${brandsOpen ? 'rotate-180' : ''}`} />
                </button>
                {brandsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="#brands" className="block text-gray-600">Elba</a>
                    <a href="#brands" className="block text-gray-600">Candy</a>
                    <a href="#brands" className="block text-gray-600">Elica</a>
                    <a href="#brands" className="block text-gray-600">Bambusa</a>
                    <a href="#brands" className="block text-gray-600">Sukoon</a>
                    <a href="#brands" className="block text-gray-600">NepaKids</a>
                  </div>
                )}
              </div>
              <a href="#gallery" className="block text-gray-700 hover:text-[#5c4033]">
                GALLERY
              </a>
              <a href="#about" className="block text-gray-700 hover:text-[#5c4033]">
                ABOUT US
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-[#5c4033]">
                CONTACT US
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}