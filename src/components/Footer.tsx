import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  Serviços: [
    'Tráfego Pago',
    'Landing Pages',
    'Posicionamento Digital',
    'Copywriting',
    'Estrutura de Vendas',
    'Automação',
  ],
  Empresa: [
    'Sobre mim',
    'Resultados',
  ],
};

const socials = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/eduardomachdo_/' },
  { icon: Phone, label: 'WhatsApp', href: 'https://wa.me/55996348863' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00e87a] to-[#00c4ff] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L8 3L13 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 9H11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-sm font-bold font-['Poppins'] text-white tracking-tight">
                Eduardo <span className="text-gradient">| Marketing &amp; Posicionamento</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs">
              Desenvolvo presença digital estratégica para negócios que querem crescer com consistência através de estratégias de alto impacto.
            </p>
            <div className="space-y-2.5 mb-6">
              <a href="mailto:dudu9996148863@gmail.com" className="flex items-center gap-2.5 text-gray-500 hover:text-white transition-colors text-sm">
                <Mail size={14} className="text-[#00e87a]" />
                dudu9996148863@gmail.com
              </a>
              <a href="https://wa.me/55996348863" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-gray-500 hover:text-white transition-colors text-sm">
                <Phone size={14} className="text-[#00e87a]" />
                +55 (55) 9 9634-8863
              </a>
              <div className="flex items-center gap-2.5 text-gray-500 text-sm">
                <MapPin size={14} className="text-[#00e87a]" />
                Santa Maria, RS — Brasil
              </div>
            </div>
            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all duration-200"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold font-['Poppins'] mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    {link === 'Sobre mim' ? (
                      <Link to="/sobre" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200">
                        {link}
                      </Link>
                    ) : link === 'Resultados' ? (
                      <Link to="/resultados" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200">
                        {link}
                      </Link>
                    ) : (
                      <a href="/#servicos" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200">
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Eduardo | Marketing &amp; Posicionamento. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            Feito com <span className="text-[#00e87a]">dedicacao</span> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
