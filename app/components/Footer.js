'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#663E3E] text-white relative overflow-hidden"
      style={{
        width: '100%',
        opacity: 1,
      }}
    >
      <div
        className="container mx-auto px-6 py-12 flex flex-col gap-12 md:gap-[197px] md:flex-row justify-between items-start"
        style={{
          maxWidth: '1462px',
          marginTop: '20px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden flex-shrink-0"
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
          <p className="text-sm mt-2 text-center md:text-left">Gwarko-6, Kathmandu, Nepal</p>
        </motion.div>

        {/* Brand Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3"
        >
          <h3 className="text-xl font-bold mb-4 text-[#f5e6d3]">OUR BRANDS</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <a
                href="http://localhost:3000/brands/elba"
                className="block hover:text-[#f5e6d3] transition mb-2"
              >
                Elba
              </a>
              <a
                href="http://localhost:3000/brands/candy"
                className="block hover:text-[#f5e6d3] transition mb-2"
              >
                Candy
              </a>
              <a
                href="http://localhost:3000/brands/elica"
                className="block hover:text-[#f5e6d3] transition mb-2"
              >
                Elica
              </a>
            </div>
            <div>
              <a
                href="http://localhost:3000/brands/sukoon"
                className="block hover:text-[#f5e6d3] transition mb-2"
              >
                Sukoon
              </a>
              <a
                href="http://localhost:3000/brands/nepakids"
                className="block hover:text-[#f5e6d3] transition mb-2"
              >
                NepaKids
              </a>
              <a
                href="http://localhost:3000/brands/bambusa"
                className="block hover:text-[#f5e6d3] transition mb-2"
              >
                Bambusa
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#f5e6d3]">MAJESTIC GROUP</h3>
          <p className="mb-2">+977-1-4277007</p>
          <p className="mb-4">+977-1-4277866</p>
          <a
            href="mailto:info@majesticgroup.com"
            className="hover:text-[#f5e6d3] transition blo ck mb-4"
          >
            info@majestic-grp.com
          </a>
          <div className="flex gap-4 mt-3">
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

      {/* Footer Bottom */}
      <div className="border-t border-white/20 pt-8 mb-5 text-center text-sm">
        <p>© 2025 Majestic Group • Crafted by Softfly Studios • Engineered by BCD Company</p>
      </div>
    </footer>       
  )
}
