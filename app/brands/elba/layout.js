import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Elba - Italian Taste Experience | Majestic Group',
  description: 'Discover Elba - Italian-made appliances blending style, technology, and tradition. Talent for cooking since 1950.',
}

export default function ElbaLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  )
}