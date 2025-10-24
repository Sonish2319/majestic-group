import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Sukoon - Waves of Freedom | Majestic Group',
  description: 'Discover Sukoon - Premium sanitary pads with superior absorption and ultra-soft comfort for confident protection.',
}

export default function SukoonLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  )
}