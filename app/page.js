import dynamic from 'next/dynamic'
import Header from './components/Header'

// Dynamic imports with lazy loading
const Hero = dynamic(() => import('./components/Hero'), {
  loading: () => (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
    </div>
  ),
})

const ProductsSection = dynamic(() => import('./components/ProductsSection'), {
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800"></div>
    </div>
  ),
})

const BrandsSection = dynamic(() => import('./components/BrandsSection'), {
  loading: () => (
    <div className="py-20 flex items-center justify-center bg-[#f5e6d3]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800"></div>
    </div>
  ),
})

const AboutSection = dynamic(() => import('./components/AboutSection'), {
  loading: () => (
    <div className="py-20 flex items-center justify-center bg-[#e8dcc8]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800"></div>
    </div>
  ),
})

const TestimonialsSection = dynamic(() => import('./components/TestimonialsSection'), {
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800"></div>
    </div>
  ),
})

const Footer = dynamic(() => import('./components/Footer'), {
  loading: () => (
    <div className="py-12 flex items-center justify-center bg-[#3d2817]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
    </div>
  ),
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductsSection />
      <BrandsSection />
      <AboutSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}