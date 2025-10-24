import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Bambusa - Tree Free, Guilt Free | Majestic Group',
  description: 'Discover Bambusa - Eco-friendly toilet paper made from 100% sustainable bamboo. Soft, strong, and biodegradable.',
}

export default function BambusaLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  )
}