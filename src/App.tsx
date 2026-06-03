import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import CheckoutSection from './components/CheckoutSection';
import Footer from './components/Footer';
import SobreMim from './pages/SobreMim';
import Resultados from './pages/Resultados';
import Servicos from './pages/Servicos';

function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Results />
      <Testimonials />
      <Services />
      <FAQ />
      <CTAFinal />
      <CheckoutSection />
    </>
  );
}

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#07090e] text-white">
        <Navbar />
        <main>
          <ScrollHandler />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobreMim />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/servicos" element={<Servicos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
