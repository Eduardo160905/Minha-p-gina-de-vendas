import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

type Testimonial = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  color: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Rafaela Monteiro',
    role: 'CEO',
    company: 'Bloom Studio',
    avatar: 'RM',
    color: 'from-emerald-500 to-teal-600',
    rating: 5,
    text: 'O Eduardo transformou completamente nossa presença digital. Em 4 meses aumentamos nossas vendas em 280% e hoje nossa marca é referência no segmento de moda sustentável.',
  },
  {
    name: 'Carlos Henrique',
    role: 'Fundador',
    company: 'TechFlow SaaS',
    avatar: 'CH',
    color: 'from-sky-500 to-blue-600',
    rating: 5,
    text: 'O trabalho de tráfego pago e estrutura de funil que o Eduardo implementou foi impressionante. Nosso CAC caiu 60% e o LTV triplicou em menos de 6 meses.',
  },
  {
    name: 'Amanda Souza',
    role: 'Diretora Comercial',
    company: 'Espaço Saúde & Bem-estar',
    avatar: 'AS',
    color: 'from-amber-500 to-orange-600',
    rating: 5,
    text: 'Antes do Eduardo ficávamos dependentes de indicação. Hoje temos um fluxo constante de mais de 80 novos leads qualificados por semana através dos canais digitais.',
  },
  {
    name: 'Fernando Costa',
    role: 'Sócio-fundador',
    company: 'Construtora Nova Era',
    avatar: 'FC',
    color: 'from-rose-500 to-pink-600',
    rating: 5,
    text: 'Resultados concretos e trabalho extremamente competente. A transparência nos relatórios e o comprometimento nos deram total confiança no investimento.',
  },
  {
    name: 'Juliana Pires',
    role: 'Proprietária',
    company: 'JP Consultoria',
    avatar: 'JP',
    color: 'from-cyan-500 to-teal-500',
    rating: 5,
    text: 'Em 90 dias o Eduardo estruturou nossa presença online do zero e já estávamos fechando 3x mais clientes do que antes. Trabalho incrível e resultados reais.',
  },
  {
    name: 'Rodrigo Alves',
    role: 'Gerente de Marketing',
    company: 'Grupo Nexus',
    avatar: 'RA',
    color: 'from-sky-400 to-cyan-600',
    rating: 5,
    text: 'Nossa estratégia digital estava estagnada há anos. O Eduardo chegou com uma visão totalmente diferente e em poucos meses os resultados superaram todas as nossas expectativas.',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="#FFB347">
          <path d="M6 1l1.5 3h3l-2.5 2 1 3L6 7.5 3 9l1-3L1.5 4h3z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      className="break-inside-avoid bg-white/[0.03] border border-white/6 rounded-2xl p-5 hover:border-white/12 transition-all duration-300 mb-5"
    >
      <Quote size={20} className="text-[#00e87a]/30 mb-3" />
      <p className="text-gray-300 text-sm leading-relaxed mb-5">{testimonial.text}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
          >
            {testimonial.avatar}
          </div>
          <div>
            <p className="text-white text-sm font-semibold">{testimonial.name}</p>
            <p className="text-gray-600 text-xs">{testimonial.role} · {testimonial.company}</p>
          </div>
        </div>
        <StarRating count={testimonial.rating} />
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00e87a]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#00e87a] text-sm font-semibold tracking-widest uppercase mb-3">Depoimentos</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Poppins'] text-white mb-4">
            Quem confia no meu trabalho
            <br />
            <span className="text-gradient">não volta atrás</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Histórias reais de empresários que transformaram seus negócios com minhas estratégias.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
