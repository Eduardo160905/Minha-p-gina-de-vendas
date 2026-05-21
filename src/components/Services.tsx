import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MousePointer2, Globe, Search, PenTool, ShoppingCart, Bot, ArrowRight, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  color: string;
  highlight: boolean;
  path: string;
};

const services: Service[] = [
  {
    icon: MousePointer2,
    title: 'Gestão de Tráfego Pago',
    description: 'Campanhas profissionais em Google Ads, Meta Ads, TikTok Ads e mais, otimizadas para gerar o máximo de retorno.',
    tags: ['Google Ads', 'Meta Ads', 'TikTok Ads'],
    color: '#00e87a',
    highlight: true,
    path: '/servicos#trafego-pago',
  },
  {
    icon: Globe,
    title: 'Landing Pages',
    description: 'Páginas de alta conversão com design profissional, copy persuasivo e estrutura otimizada para capturar leads.',
    tags: ['Design', 'Copy', 'CRO'],
    color: '#00c4ff',
    highlight: false,
    path: '/servicos#landing-pages',
  },
  {
    icon: Search,
    title: 'Posicionamento Digital',
    description: 'SEO, estratégia de conteúdo e presença orgânica para sua marca aparecer onde seus clientes buscam.',
    tags: ['SEO', 'Conteúdo', 'Autoridade'],
    color: '#ffb347',
    highlight: false,
    path: '/servicos#posicionamento',
  },
  {
    icon: PenTool,
    title: 'Copywriting',
    description: 'Textos persuasivos para anúncios, emails, páginas e roteiros que convencem e convertem visitantes em clientes.',
    tags: ['Anúncios', 'Email', 'Roteiros'],
    color: '#00e87a',
    highlight: false,
    path: '/servicos#copywriting',
  },
  {
    icon: ShoppingCart,
    title: 'Estrutura de Vendas',
    description: 'Funis completos, CRM e estruturas de vendas digitais para converter mais com menos esforço.',
    tags: ['Funil', 'CRM', 'Conversão'],
    color: '#00c4ff',
    highlight: false,
    path: '/servicos#estrutura-vendas',
  },
  {
    icon: Bot,
    title: 'Automação',
    description: 'Fluxos automáticos de nutrição, follow-up e relacionamento para escalar seu processo comercial.',
    tags: ['Email Flow', 'WhatsApp', 'CRM'],
    color: '#ffb347',
    highlight: false,
    path: '/servicos#automacao',
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      className={`group relative rounded-2xl p-6 border transition-all duration-300 ${
        service.highlight
          ? 'bg-gradient-to-br from-[#00e87a]/8 to-[#00c4ff]/8 border-[#00e87a]/25 hover:border-[#00e87a]/40'
          : 'bg-white/[0.03] border-white/6 hover:border-white/12 hover:bg-white/[0.05]'
      }`}
    >
      {service.highlight && (
        <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-[#00e87a]/15 text-[#00e87a] text-xs font-semibold border border-[#00e87a]/25">
          Popular
        </span>
      )}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}
      >
        <Icon size={20} style={{ color: service.color }} />
      </div>
      <h3 className="text-white font-semibold text-base mb-2 font-['Poppins']">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md text-xs font-medium"
            style={{ background: `${service.color}10`, color: service.color, border: `1px solid ${service.color}20` }}
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        to={service.path}
        className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5"
        style={{ color: service.color }}
      >
        Ver planos e preços <ArrowRight size={12} />
      </Link>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="servicos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#00e87a] text-sm font-semibold tracking-widest uppercase mb-3">Serviços</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Poppins'] text-white mb-4">
            Tudo que você precisa para
            <br />
            <span className="text-gradient">dominar o digital</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Soluções completas com planos flexíveis para estruturar, crescer e escalar sua presença online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
