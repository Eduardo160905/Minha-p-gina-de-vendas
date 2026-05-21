import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Map, Zap, Rocket, LucideIcon } from 'lucide-react';

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

const steps: Step[] = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico',
    description: 'Analiso seu negócio, concorrência, público-alvo e oportunidades de mercado para entender onde você está e onde quer chegar.',
    color: '#00e87a',
  },
  {
    number: '02',
    icon: Map,
    title: 'Planejamento',
    description: 'Crio um plano estratégico personalizado com metas claras, canais definidos e ações organizadas por prioridade e potencial de retorno.',
    color: '#00c4ff',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Execução',
    description: 'Coloco tudo em prática com agilidade e precisão. Campanhas, conteúdo, landing pages e automações sendo ativadas em tempo real.',
    color: '#ffb347',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Escala',
    description: 'Com os resultados validados, escalo o que funciona. Mais investimento, mais alcance, mais vendas — crescimento sustentável e previsível.',
    color: '#00e87a',
  },
];

function StepCard({ step, index, mobile = false }: { step: Step; index: number; mobile?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = step.icon;

  if (mobile) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="flex gap-5 items-start"
      >
        <div className="flex flex-col items-center">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${step.color}12`, border: `1px solid ${step.color}30` }}
          >
            <Icon size={22} style={{ color: step.color }} />
          </div>
          {index < steps.length - 1 && (
            <div className="w-px flex-1 mt-2 min-h-[32px]" style={{ background: `${step.color}20` }} />
          )}
        </div>
        <div className="pb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold" style={{ color: step.color }}>{step.number}</span>
            <h3 className="text-white font-bold text-base font-['Poppins']">{step.title}</h3>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="flex flex-col items-center text-center"
    >
      <div
        className="relative w-24 h-24 rounded-2xl flex items-center justify-center mb-6 z-10 transition-all duration-300 hover:scale-105"
        style={{
          background: `${step.color}12`,
          border: `1px solid ${step.color}30`,
          boxShadow: `0 0 30px ${step.color}15`,
        }}
      >
        <Icon size={28} style={{ color: step.color }} />
        <span
          className="absolute -top-2 -right-2 text-xs font-bold px-1.5 py-0.5 rounded-md"
          style={{ background: step.color, color: '#07090e' }}
        >
          {step.number}
        </span>
      </div>
      <h3 className="text-white font-bold text-lg font-['Poppins'] mb-2">{step.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e87a]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00e87a] text-sm font-semibold tracking-widest uppercase mb-3">Como funciona</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Poppins'] text-white mb-4">
            Do zero ao crescimento em{' '}
            <span className="text-gradient">4 passos</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Um processo claro, transparente e focado em resultados desde o primeiro dia.
          </p>
        </motion.div>

        <div className="hidden lg:block relative">
          <div className="absolute top-12 left-0 right-0 h-px">
            <div className="mx-auto max-w-4xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00e87a]/30 via-[#00c4ff]/30 to-[#00e87a]/30" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} mobile />
          ))}
        </div>
      </div>
    </section>
  );
}
