import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const points = [
  'Diagnóstico gratuito do seu negócio',
  'Plano estratégico personalizado',
  'Resultados mensuráveis desde o primeiro mês',
];

export default function CTAFinal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00e87a]/5 via-transparent to-[#00c4ff]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00e87a]/4 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,232,122,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,232,122,0.8) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00e87a]/25 bg-[#00e87a]/8 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e87a] animate-pulse" />
            <span className="text-xs font-medium text-[#00e87a]">Vagas limitadas — agende agora</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Poppins'] text-white leading-tight mb-6">
            Seu negócio está perdendo vendas
            <br />
            todos os dias sem uma{' '}
            <span className="text-gradient">estrutura digital profissional.</span>
          </h2>

          <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Cada dia sem uma estratégia digital sólida é um dia que seus concorrentes estão conquistando os seus clientes. Chegou a hora de mudar isso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            {points.map((p) => (
              <div key={p} className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#00e87a] flex-shrink-0" />
                <span className="text-gray-400 text-sm">{p}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/55996348863"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00e87a] to-[#00c4ff] text-[#07090e] font-bold text-base glow-green hover:opacity-90 transition-opacity duration-200"
            >
              Começar agora
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <a
              href="https://wa.me/55996348863"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-base hover:border-white/25 hover:bg-white/5 transition-all duration-200"
            >
              Falar pelo WhatsApp
            </a>
          </div>

          <p className="text-gray-600 text-xs mt-5">
            Sem compromisso. Consultoria inicial 100% gratuita.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
