import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, BarChart2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' as const },
  }),
};

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      className="relative w-full max-w-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00e87a]/10 to-[#00c4ff]/10 rounded-2xl blur-3xl scale-110" />
      <div className="relative glass rounded-2xl p-5 border border-white/8">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Painel de Performance</p>
            <p className="text-sm font-semibold text-white">Maio 2026</p>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#00e87a]/10 text-[#00e87a] text-xs font-semibold border border-[#00e87a]/20">
            Ao vivo
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: 'Leads', value: '847', icon: <Users size={14} />, color: '#00e87a', up: '+38%' },
            { label: 'Vendas', value: 'R$32k', icon: <TrendingUp size={14} />, color: '#00c4ff', up: '+24%' },
            { label: 'ROI', value: '5.8x', icon: <BarChart2 size={14} />, color: '#ffb347', up: '+17%' },
          ].map((s) => (
            <div key={s.label} className="bg-white/[0.04] rounded-xl p-3 border border-white/5">
              <div className="flex items-center gap-1.5 mb-2" style={{ color: s.color }}>
                {s.icon}
                <span className="text-xs text-gray-500">{s.label}</span>
              </div>
              <p className="text-base font-bold text-white leading-none">{s.value}</p>
              <p className="text-xs mt-1" style={{ color: s.color }}>{s.up}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5 mb-4">
          <p className="text-xs text-gray-500 mb-3">Crescimento mensal</p>
          <div className="flex items-end gap-2 h-20">
            {[35, 52, 48, 65, 72, 68, 85, 90, 78, 95, 100, 88].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.04, ease: 'easeOut' }}
                className="flex-1 rounded-sm"
                style={{
                  background: i >= 9 ? 'linear-gradient(to top, #00e87a, #00c4ff)' : 'rgba(0, 232, 122, 0.25)',
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {['bg-emerald-500', 'bg-sky-500', 'bg-amber-500', 'bg-rose-500'].map((c, i) => (
              <div key={i} className={`w-6 h-6 rounded-full ${c} border-2 border-[#0f1420]`} />
            ))}
          </div>
          <p className="text-xs text-gray-500">+18 novos clientes este mês</p>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 border border-[#00e87a]/20 glow-green-sm"
      >
        <p className="text-xs text-[#00e87a] font-semibold">+127% conversões</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 border border-[#00c4ff]/20"
      >
        <p className="text-xs text-[#00c4ff] font-semibold">ROI médio: 5.8x</p>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00e87a]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00c4ff]/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00e87a]"
            style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%`, opacity: 0.4 }}
            animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Poppins'] leading-[1.12] tracking-tight mb-6"
            >
              Desenvolvendo presença digital estratégica para negócios que querem{' '}
              <span className="text-gradient">crescer com consistência.</span>
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Estratégias de marketing digital, tráfego pago e posicionamento online para gerar autoridade, leads e vendas reais para o seu negócio.
            </motion.p>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/55996348863"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00e87a] to-[#00c4ff] text-[#07090e] font-semibold text-sm hover:opacity-90 transition-all duration-200 glow-green"
              >
                Quero crescer
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resultados"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-white font-semibold text-sm hover:border-white/25 hover:bg-white/5 transition-all duration-200"
              >
                Ver resultados
              </a>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 mt-10"
            >
              <div className="flex -space-x-2">
                {['bg-emerald-500', 'bg-sky-500', 'bg-amber-500', 'bg-rose-500'].map((c, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-[#07090e]`} />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">+15 projetos</p>
                <p className="text-xs text-gray-500">confiam no meu trabalho</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#FFB347">
                      <path d="M6 1l1.5 3h3l-2.5 2 1 3L6 7.5 3 9l1-3L1.5 4h3z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-gray-500">5.0/5 avaliação</p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
