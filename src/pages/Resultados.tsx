import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, X, Check, TrendingUp, BarChart3, Users, Target, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function BeforeAfterCard({ title, beforeItems, afterItems, beforeLabel, afterLabel }: {
  title: string;
  beforeItems: string[];
  afterItems: string[];
  beforeLabel: string;
  afterLabel: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white/[0.03] border border-white/6 rounded-2xl overflow-hidden"
    >
      <div className="p-5 border-b border-white/5">
        <h3 className="text-white font-semibold font-['Poppins']">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-5 border-r border-white/5 bg-red-500/[0.03]">
          <div className="flex items-center gap-2 mb-4">
            <X size={16} className="text-red-400" />
            <span className="text-red-400 text-sm font-semibold">{beforeLabel}</span>
          </div>
          <ul className="space-y-2.5">
            {beforeItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                <X size={14} className="text-red-400/60 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5 bg-[#00e87a]/[0.02]">
          <div className="flex items-center gap-2 mb-4">
            <Check size={16} className="text-[#00e87a]" />
            <span className="text-[#00e87a] text-sm font-semibold">{afterLabel}</span>
          </div>
          <ul className="space-y-2.5">
            {afterItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                <Check size={14} className="text-[#00e87a] mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

const instagramComparisons = [
  {
    title: 'Perfil do Instagram',
    beforeLabel: 'Sem autoridade',
    afterLabel: 'Com autoridade',
    beforeItems: [
      'Bio genérica e sem posicionamento',
      'Feed desorganizado e sem identidade',
      'Sem destaque para serviços',
      'Poucos seguidores engajados',
      'Conteúdo inconsistente',
    ],
    afterItems: [
      'Bio estratégica com proposta de valor clara',
      'Feed profissional com identidade visual consistente',
      'Destaques organizados por serviço e prova social',
      'Crescimento orgânico com público qualificado',
      'Conteúdo planejado com calendário estratégico',
    ],
  },
  {
    title: 'Conteúdo e Comunicação',
    beforeLabel: 'Amador',
    afterLabel: 'Profissional',
    beforeItems: [
      'Postagens aleatórias sem estratégia',
      'Imagens de baixa qualidade',
      'Sem call-to-action nas postagens',
      'Legendas fracas e sem persuasão',
      'Nenhum storytelling',
    ],
    afterItems: [
      'Conteúdo estratégico por funil de vendas',
      'Design profissional e padronizado',
      'CTAs claros em cada publicação',
      'Copy persuasiva e engajadora',
      'Narrativa que conecta e converte',
    ],
  },
];

const landingPageComparisons = [
  {
    title: 'Landing Page de Serviço',
    beforeLabel: 'Página amadora',
    afterLabel: 'Página profissional',
    beforeItems: [
      'Design genérico e desatualizado',
      'Sem estrutura de conversão',
      'Carregamento lento',
      'Sem responsividade mobile',
      'Nenhuma prova social',
    ],
    afterItems: [
      'Design premium e moderno',
      'Funil estratégico de conversão',
      'Otimizada para velocidade',
      '100% responsiva em qualquer dispositivo',
      'Depoimentos e resultados reais',
    ],
  },
  {
    title: 'Página de Captura',
    beforeLabel: 'Ineficiente',
    afterLabel: 'Alta conversão',
    beforeItems: [
      'Formulário longo e complexo',
      'Sem proposta de valor clara',
      'Zero otimização para mobile',
      'Sem urgência ou escassez',
      'Sem integração com automação',
    ],
    afterItems: [
      'Formulário otimizado e rápido',
      'Headline persuasiva e clara',
      'Design mobile-first',
      'Elementos de urgência estratégicos',
      'Integração completa com CRM e email',
    ],
  },
];

const serviceResults = [
  {
    icon: MousePointer2,
    title: 'Tráfego Pago',
    results: [
      { label: 'Aumento de leads', value: '+340%' },
      { label: 'Redução do CAC', value: '-60%' },
      { label: 'ROI médio', value: '5.8x' },
    ],
    color: '#00e87a',
  },
  {
    icon: BarChart3,
    title: 'Landing Pages',
    results: [
      { label: 'Taxa de conversão', value: '+180%' },
      { label: 'Velocidade', value: '<2s' },
      { label: 'Leads por página', value: '120+/mês' },
    ],
    color: '#00c4ff',
  },
  {
    icon: Target,
    title: 'Posicionamento Digital',
    results: [
      { label: 'Autoridade percebida', value: '+250%' },
      { label: 'Engajamento', value: '+190%' },
      { label: 'Seguidores qualificados', value: '+320%' },
    ],
    color: '#ffb347',
  },
  {
    icon: Users,
    title: 'Copywriting',
    results: [
      { label: 'Conversão de anúncios', value: '+140%' },
      { label: 'Taxa de abertura email', value: '+85%' },
      { label: 'Engajamento', value: '+200%' },
    ],
    color: '#00e87a',
  },
  {
    icon: TrendingUp,
    title: 'Estrutura de Vendas',
    results: [
      { label: 'Vendas mensais', value: '+280%' },
      { label: 'Taxa de conversão funil', value: '+160%' },
      { label: 'LTV do cliente', value: '+220%' },
    ],
    color: '#00c4ff',
  },
  {
    icon: BarChart3,
    title: 'Automação',
    results: [
      { label: 'Tempo operacional', value: '-70%' },
      { label: 'Respostas automáticas', value: '24/7' },
      { label: 'Captação automatizada', value: '+400%' },
    ],
    color: '#ffb347',
  },
];

export default function Resultados() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-[#07090e] text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div ref={heroRef} className="py-16 lg:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#00e87a] text-sm font-semibold tracking-widest uppercase mb-4">Resultados reais</p>
            <h1 className="text-4xl sm:text-5xl font-bold font-['Poppins'] leading-tight mb-6">
              Veja a diferença que uma{' '}
              <span className="text-gradient">estratégia profissional</span> faz
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Comparativos reais de perfis, páginas e campanhas antes e depois de aplicar estratégias profissionais de marketing e posicionamento digital.
            </p>
          </motion.div>
        </div>

        {/* Results by service */}
        <section className="py-12">
          <h2 className="text-2xl font-bold font-['Poppins'] text-white mb-8 text-center">
            Resultados por <span className="text-gradient">serviço</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceResults.map((s, i) => {
              const Icon = s.icon;
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: '-60px' });
              return (
                <motion.div
                  key={s.title}
                  ref={ref}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white/[0.03] border border-white/6 rounded-2xl p-6 hover:border-white/12 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}
                    >
                      <Icon size={18} style={{ color: s.color }} />
                    </div>
                    <h3 className="text-white font-semibold font-['Poppins']">{s.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {s.results.map((r) => (
                      <div key={r.label} className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">{r.label}</span>
                        <span className="font-bold text-sm" style={{ color: s.color }}>{r.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Instagram comparisons */}
        <section className="py-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold font-['Poppins'] text-white mb-3">
              Instagram: <span className="text-gradient">Antes e Depois</span>
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Veja como um perfil sem estratégia se compara a um perfil com posicionamento profissional.
            </p>
          </div>
          <div className="space-y-6">
            {instagramComparisons.map((comp) => (
              <BeforeAfterCard key={comp.title} {...comp} />
            ))}
          </div>
        </section>

        {/* Landing page comparisons */}
        <section className="py-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold font-['Poppins'] text-white mb-3">
              Landing Pages: <span className="text-gradient">Antes e Depois</span>
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              A diferença entre uma página amadora e uma página profissional focada em conversão.
            </p>
          </div>
          <div className="space-y-6">
            {landingPageComparisons.map((comp) => (
              <BeforeAfterCard key={comp.title} {...comp} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-white/5 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Poppins'] text-white mb-4">
            Quer resultados assim no <span className="text-gradient">seu negócio</span>?
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto mb-8">
            Entre em contato e descubra como posso transformar sua presença digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/55996348863"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00e87a] to-[#00c4ff] text-[#07090e] font-semibold text-sm hover:opacity-90 transition-all duration-200 glow-green"
            >
              Quero resultados assim
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-white font-semibold text-sm hover:border-white/25 hover:bg-white/5 transition-all duration-200"
            >
              Voltar ao início
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
