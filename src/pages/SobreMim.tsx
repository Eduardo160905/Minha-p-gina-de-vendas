import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Target, TrendingUp, Shield, Lightbulb, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  { icon: Target, title: 'Foco em Resultados', description: 'Cada estratégia é desenvolvida com um objetivo claro e mensurável.', color: '#00e87a' },
  { icon: TrendingUp, title: 'Crescimento Sustentável', description: 'Construo bases sólidas para que seu negócio cresça de forma consistente.', color: '#00c4ff' },
  { icon: Shield, title: 'Transparência Total', description: 'Relatórios honestos, comunicação clara e sem promessas vazias.', color: '#ffb347' },
  { icon: Lightbulb, title: 'Inovação Constante', description: 'Sempre atualizado com as melhores práticas e tendências do mercado.', color: '#00e87a' },
];

const differentials = [
  'Atendimento personalizado e direto',
  'Estratégias sob medida para cada negócio',
  'Relatórios transparentes e periódicos',
  'Foco real em conversão e vendas',
  'Compromisso com resultados mensuráveis',
  'Experiência comprovada em marketing digital',
];

export default function SobreMim() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-[#07090e] text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div ref={heroRef} className="py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-[#00e87a] text-sm font-semibold tracking-widest uppercase mb-4">Conheça meu trabalho</p>
            <h1 className="text-4xl sm:text-5xl font-bold font-['Poppins'] leading-tight mb-8">
              Sobre <span className="text-gradient">Mim</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Avatar / visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00e87a]/20 to-[#00c4ff]/20 rounded-3xl blur-2xl scale-110" />
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-[#00e87a]/10 to-[#00c4ff]/10 border border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00e87a] to-[#00c4ff] mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold font-['Poppins'] text-[#07090e]">E</span>
                    </div>
                    <p className="text-white font-bold font-['Poppins']">Eduardo</p>
                    <p className="text-gray-500 text-xs">Marketing &amp; Posicionamento</p>
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-2 border border-[#00e87a]/20"
                >
                  <p className="text-xs text-[#00e87a] font-semibold">+15 projetos</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-3 space-y-5"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                Acredito que presença digital vai muito além de apenas estar online. Meu foco é desenvolver estratégias que fortalecem marcas, aumentam a autoridade no mercado e geram crescimento real através do posicionamento digital.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Trabalho com soluções modernas de marketing, estruturação digital e performance, criando experiências profissionais que conectam negócios ao público certo de forma estratégica e eficiente.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Cada projeto é desenvolvido com atenção aos detalhes, alinhando identidade visual, comunicação, posicionamento e conversão para construir uma presença digital sólida, profissional e preparada para crescer.
              </p>
              <p className="text-gray-300 text-base leading-relaxed font-medium">
                Meu objetivo é ajudar negócios a se destacarem no mercado através de estratégia, credibilidade e resultados consistentes.
              </p>
              <div className="pt-4">
                <a
                  href="https://wa.me/55996348863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00e87a] to-[#00c4ff] text-[#07090e] font-semibold text-sm hover:opacity-90 transition-all duration-200 glow-green"
                >
                  Fale comigo
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Values */}
        <section className="py-16 border-t border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-['Poppins'] text-white mb-3">
              Meus <span className="text-gradient">valores</span>
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
              Princípios que guiam cada projeto e cada estratégia que desenvolvo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: '-60px' });
              return (
                <motion.div
                  key={v.title}
                  ref={ref}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/[0.03] border border-white/6 rounded-2xl p-6 text-center hover:border-white/12 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${v.color}15`, border: `1px solid ${v.color}25` }}
                  >
                    <Icon size={22} style={{ color: v.color }} />
                  </div>
                  <h3 className="text-white font-semibold mb-2 font-['Poppins']">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Differentials */}
        <section className="py-16 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-['Poppins'] text-white mb-4">
                Por que <span className="text-gradient">trabalhar comigo</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Diferente de agências que tratam você como mais um número, ofereço atendimento personalizado e dedicação real ao crescimento do seu negócio.
              </p>
              <div className="space-y-4">
                {differentials.map((d, i) => {
                  const ref = useRef(null);
                  const inView = useInView(ref, { once: true, margin: '-40px' });
                  return (
                    <motion.div
                      key={d}
                      ref={ref}
                      initial={{ opacity: 0, x: -16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle size={16} className="text-[#00e87a] flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{d}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00e87a]/5 to-[#00c4ff]/5 rounded-2xl blur-3xl" />
              <div className="relative glass rounded-2xl p-8 border border-white/8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Projetos entregues', value: '15+' },
                    { label: 'Leads gerados', value: '2.8k+' },
                    { label: 'ROI médio', value: '5.8x' },
                    { label: 'Satisfação', value: '100%' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/[0.04] rounded-xl p-4 text-center border border-white/5">
                      <p className="text-2xl font-bold font-['Poppins'] text-gradient">{stat.value}</p>
                      <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-white/5 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Poppins'] text-white mb-4">
            Pronto para <span className="text-gradient">crescer</span>?
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto mb-8">
            Vamos conversar sobre como posso ajudar seu negócio a se destacar no digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/55996348863"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00e87a] to-[#00c4ff] text-[#07090e] font-semibold text-sm hover:opacity-90 transition-all duration-200 glow-green"
            >
              Falar pelo WhatsApp
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
