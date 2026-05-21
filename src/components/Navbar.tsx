import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Início', section: 'inicio' },
  { label: 'Serviços', section: 'servicos' },
  { label: 'Resultados', section: 'resultados', isPage: true },
  { label: 'FAQ', section: 'faq' },
  { label: 'Sobre mim', section: 'sobre', isPage: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  function handleNavClick(section: string, isPage?: boolean) {
    setMobileOpen(false);
    if (isPage) {
      navigate(`/${section === 'resultados' ? 'resultados' : 'sobre'}`);
      return;
    }
    if (location.pathname !== '/') {
      navigate(`/#${section}`);
      return;
    }
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#07090e]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00e87a] to-[#00c4ff] flex items-center justify-center glow-green-sm">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L8 3L13 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 9H11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-sm font-bold font-['Poppins'] text-white tracking-tight">
              Eduardo <span className="text-gradient">| Marketing &amp; Posicionamento</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.section, link.isPage)}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/55996348863"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#00e87a] to-[#00c4ff] text-[#07090e] text-sm font-semibold hover:opacity-90 transition-all duration-200 glow-green-sm"
            >
              Agendar Consultoria
            </a>
          </div>

          <button
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#07090e]/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.section, link.isPage)}
                  className="text-sm text-gray-400 hover:text-white transition-colors py-2 font-medium text-left"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/55996348863"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full text-center px-5 py-3 rounded-lg bg-gradient-to-r from-[#00e87a] to-[#00c4ff] text-[#07090e] text-sm font-semibold"
              >
                Agendar Consultoria
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
