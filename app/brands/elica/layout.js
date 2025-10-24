import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Elica - Innovative Kitchen Appliances | Majestic Group',
  description:
    'Explore Elica – modern kitchen chimneys, hoods, and appliances combining style, innovation, and performance for every home.',
}

export default function ElicaLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  )
}
