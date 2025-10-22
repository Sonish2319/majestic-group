import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'NepaKids - Gentle Protection, Happy Every Step | Majestic Group',
  description: 'Discover NepaKids - Premium baby diapers with Japanese SAP technology for 12-hour protection and gentle care.',
}

export default function NepaKidsLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  )
}