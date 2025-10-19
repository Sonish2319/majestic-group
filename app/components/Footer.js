'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#3d2817] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-64 rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5!2d85.32!3d27.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzQwLjAiTiA4NcKwMTknMTIuMCJF!5e0!3m2!1sen!2snp!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="text-sm mt-2">Gwarko-6, Kathmandu, Nepal</p>
          </motion.div>

          {/* Brand Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#f5e6d3]">OUR BRANDS</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <a href="#" className="block hover:text-[#f5e6d3] transition mb-2">Elba</a>
                <a href="#" className="block hover:text-[#f5e6d3] transition mb-2">Candy</a>
                <a href="#" className="block hover:text-[#f5e6d3] transition mb-2">Elica</a>
              </div>
              <div>
                <a href="#" className="block hover:text-[#f5e6d3] transition mb-2">Sukoon</a>
                <a href="#" className="block hover:text-[#f5e6d3] transition mb-2">NepaKids</a>
                <a href="#" className="block hover:text-[#f5e6d3] transition mb-2">Bambusa</a>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">MAJESTIC GROUP</h3>
            <p className="mb-2">9847-347700</p>
            <p className="mb-4">4977-1, 4977-2, 4977-3</p>
            <a href="mailto:info@majesticgroup.com" className="hover:text-[#f5e6d3] transition block mb-4">
              info@majesticgroup.com
            </a>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>© 2025 Majestic Group • Crafted by Softfly Studios • Engineered by BCD Company</p>
        </div>
      </div>
    </footer>
  )
}