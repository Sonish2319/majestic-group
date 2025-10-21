import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'About Us - Majestic Group',
  description: 'Learn about Majestic Group, a dynamic and diversified business collective based in Nepal, committed to delivering excellence across multiple industries.',
}

export default function AboutLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  )
}