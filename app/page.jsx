import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Features from "../components/Features"
import Pricing from "../components/Pricing"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
