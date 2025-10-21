import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Gallery - Majestic Group',
  description: 'Explore our collection of premium products from Candy, Elba, Elica, NepaKids, Sukoon, and Bambusa.',
}

export default function GalleryLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  )
}