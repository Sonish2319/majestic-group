import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Candy - Simply Smart | Majestic Group',
  description: 'Discover Candy - Smart appliances designed for modern living with innovative technology and energy efficiency.',
}

export default function CandyLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  )
}