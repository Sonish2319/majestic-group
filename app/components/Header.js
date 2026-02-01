'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [brandsOpen, setBrandsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Scroll to footer (works even if on other pages)
  const handleContactClick = async (e) => {
    e.preventDefault()
    setIsOpen(false)

    if (pathname !== '/') {
      await router.push('/')
      setTimeout(() => {
        const footer = document.querySelector('footer')
        if (footer) footer.scrollIntoView({ behavior: 'smooth' })
      }, 600)
    } else {
      const footer = document.querySelector('footer')
      if (footer) footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Check if menu item should be active (based on route)
  const isActive = (href) => {
    if (href === '/' && pathname === '/') return false // HOME never highlighted
    return pathname.startsWith(href)
  }

const baseClasses =
    'px-3 py-2 rounded-md transition opacity-100 font-[Raleway] font-normal text-sm md:text-base uppercase leading-[100%] tracking-[0%]'

  const activeClasses = 'bg-[#5c4033] text-white'
  const inactiveClasses = 'text-gray-700 hover:text-[#5c4033]'

  const menuItemClass = (href) =>
    `${baseClasses} ${isActive(href) ? activeClasses : inactiveClasses}`

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* <h1 className="text-2xl font-bold text-gray-800">MAJESTIC GROUP</h1> */}
            <button
  onClick={() => router.push('/')}
  className="w-[308px] h-[42px] opacity-100 font-raleway font-normal text-[36px] leading-[100%] tracking-[0%] uppercase cursor-pointer"
  style={{ transform: 'rotate(0deg)' }}
>
  MAJESTIC GROUP SONISH UPADHYAYA
</button>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => router.push('/')}
              className={`${baseClasses} ${inactiveClasses}`}
            >
              HOME
            </button>

            <div className="relative group">
              <button
                className={`${baseClasses} ${
                  pathname.startsWith('/brands') ? activeClasses : inactiveClasses
                } flex items-center`}
              >
                OUR BRANDS
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {/* {['Elba', 'Candy', 'Elica', 'Bambusa', 'Sukoon', 'NepaKids'].map( */}
                {['Bambusa', 'Sukoon', 'NepaKids'].map(
                  (brand) => (
                    <button
                      key={brand}
                      onClick={() =>
                        router.push(`/brands/${brand.toLowerCase()}`)
                      }
                      className={`block w-full text-left px-4 py-2 ${
                        pathname === `/brands/${brand.toLowerCase()}`
                          ? 'bg-[#5c4033] text-white'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-[#5c4033]'
                      }`}
                    >
                      {brand}
                    </button>
                  )
                )}
              </div>
            </div>

            <button
              onClick={() => router.push('/gallery')}
              className={menuItemClass('/gallery')}
            >
              GALLERY
            </button>

            <button
              onClick={() => router.push('/about')}
              className={menuItemClass('/about')}
            >
              ABOUT US
            </button>

            <button onClick={handleContactClick} className={menuItemClass('#contact')}>
              CONTACT US
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden mt-4 flex flex-col space-y-2"
    >
      {/* HOME */}
      <button
        onClick={() => {
          router.push('/')
          setIsOpen(false)
        }}
        className={`${baseClasses} ${inactiveClasses} text-left`}
      >
        HOME
      </button>

      {/* OUR BRANDS (Dropdown) */}
      <div className="flex flex-col">
        <button
          onClick={() => setBrandsOpen(!brandsOpen)}
          className={`${baseClasses} flex items-center justify-between ${
            pathname.startsWith('/brands')
              ? activeClasses
              : inactiveClasses
          }`}
        >
          OUR BRANDS
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              brandsOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {brandsOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="ml-4 mt-2 flex flex-col space-y-1"
            >
              {['Elba', 'Candy', 'Elica', 'Bambusa', 'Sukoon', 'NepaKids'].map(
                (brand) => (
                  <button
                    key={brand}
                    onClick={() => {
                      router.push(`/brands/${brand.toLowerCase()}`)
                      setIsOpen(false)
                      setBrandsOpen(false)
                    }}
                    className={`text-left px-3 py-2 rounded-md ${
                      pathname === `/brands/${brand.toLowerCase()}`
                        ? activeClasses
                        : 'text-gray-700 hover:text-[#5c4033] hover:bg-gray-100'
                    }`}
                  >
                    {brand}
                  </button>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* GALLERY */}
      <button
        onClick={() => {
          router.push('/gallery')
          setIsOpen(false)
        }}
        // className={menuItemClass('/gallery')}
        className={`${menuItemClass('/gallery')} w-full text-left`}
      >
        GALLERY
      </button>

      {/* ABOUT */}
      <button
        onClick={() => {
          router.push('/about')
          setIsOpen(false)
        }}
        // className={menuItemClass('/about')}
        className={`${menuItemClass('/about')} w-full text-left`}

      >
        ABOUT US
      </button>

      {/* CONTACT */}
      <button
        onClick={handleContactClick}
        // className={menuItemClass('#contact')}
        className={`${menuItemClass('#contact')} w-full text-left`}

      >
        CONTACT US
      </button>
    </motion.div>
  )}
</AnimatePresence>

      </nav>
    </header>
  )
}
