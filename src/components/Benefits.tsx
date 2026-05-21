import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Star, Layers, Target, Shield, BarChart, LucideIcon } from 'lucide-react';

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

const benefits: Benefit[] = [
  {
    icon: TrendingUp,
    title: 'Mais Vendas',
    description: 'Estratégias focadas em conversão real que transformo visitantes em clientes pagantes todos os dias.',
    color: '#00e87a',
  },
  {
    icon: Star,
    title: 'Mais Autoridade',
    description: 'Posicionamento digital de alto impacto que faço sua marca ser reconhecida como referência no mercado.',
    color: '#00c4ff',
  },
  {
    icon: Layers,
    title: 'Crescimento Escalável',
    description: 'Estruturas digitais que crescem junto com seu negócio, sem limites de expansão ou gargalos.',
    color: '#ffb347',
  },
  {
    icon: Target,
    title: 'Estratégias Personalizadas',
    description: 'Planejamento que desenvolvo sob medida para o seu nicho, público e objetivos específicos de negócio.',
    color: '#00e87a',
  },
  {
    icon: Shield,
    title: 'Gestão Profissional',
    description: 'Dedicação especializada ao crescimento da sua marca, com relatórios transparentes e periódicos.',
    color: '#00c4ff',
  },
  {
    icon: BarChart,
    title: 'Resultados Mensuráveis',
    description: 'Métricas claras, dashboards em tempo real e relatórios detalhados para você acompanhar cada resultado.',
    color: '#ffb347',
  },
];

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = benefit.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      className="group relative bg-white/[0.03] border border-white/6 rounded-2xl p-6 hover:border-white/12 hover:bg-white/[0.05] transition-all duration-300 cursor-default"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at 50% 0%, ${benefit.color}10, transparent 70%)` }}
      />
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ background: `${benefit.color}15`, border: `1px solid ${benefit.color}25` }}
      >
        <Icon size={20} style={{ color: benefit.color }} />
      </div>
      <h3 className="text-white font-semibold text-base mb-2 font-['Poppins']">{benefit.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
    </motion.div>
  );
}

export default function Benefits() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#00e87a] text-sm font-semibold tracking-widest uppercase mb-3">Por que escolher meu trabalho</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Poppins'] text-white mb-4">
            Tudo que seu negócio precisa
            <br />
            para <span className="text-gradient">crescer de verdade</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Combino estratégia, tecnologia e criatividade para entregar resultados que fazem diferença real no seu faturamento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} benefit={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
