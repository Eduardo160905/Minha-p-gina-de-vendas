import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Quanto tempo leva para ver resultados?',
    answer: 'Os primeiros resultados costumam aparecer já nas primeiras 2 a 4 semanas, especialmente com campanhas de tráfego pago. Resultados mais sólidos e escaláveis normalmente se consolidam entre 60 e 90 dias, após a fase de aprendizado e otimização das estratégias.',
  },
  {
    question: 'Você trabalha com pequenos negócios?',
    answer: 'Sim! Atendo desde empreendedores individuais até empresas de médio porte. Desenvolvo estratégias adaptadas ao orçamento e aos objetivos de cada cliente. O importante é o potencial de crescimento, não o tamanho atual.',
  },
  {
    question: 'O tráfego pago é obrigatório?',
    answer: 'Não. Embora o tráfego pago acelere muito os resultados, trabalho com estratégias orgânicas (SEO, conteúdo, redes sociais) que também geram crescimento real. O mix ideal depende dos seus objetivos, orçamento e prazo.',
  },
  {
    question: 'Como funciona o suporte durante o processo?',
    answer: 'Você terá atendimento direto comigo. Ofereço reuniões periódicas de alinhamento, relatórios semanais e acesso a um canal de comunicação direto para dúvidas e atualizações em tempo real.',
  },
  {
    question: 'Precisarei me envolver muito no processo?',
    answer: 'Sou altamente independente — minha missão é tirar o máximo de peso dos seus ombros. Preciso da sua participação nas reuniões estratégicas iniciais e em aprovações pontuais. Depois disso, cuido de tudo com autonomia.',
  },
  {
    question: 'Como é feita a precificação dos serviços?',
    answer: 'Trabalho com modelos de contrato personalizados com base nos serviços e na complexidade do projeto. Após o diagnóstico gratuito, apresento uma proposta sob medida com escopo, prazos e investimento detalhados.',
  },
  {
    question: 'Você garante resultados?',
    answer: 'Não trabalho com promessas milagrosas — trabalho com método, dados e transparência. Garanto dedicação total, estratégias comprovadas, otimizações constantes e relatórios honestos. Os resultados são consequência desse processo.',
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer: 'Nossos contratos têm um período mínimo para que as estratégias possam ser implementadas e otimizadas com eficácia. Após esse período, há flexibilidade. Todas as condições são discutidas e acordadas antes do início do projeto.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
      className={`border rounded-xl transition-all duration-300 ${
        open ? 'border-[#00e87a]/25 bg-[#00e87a]/4' : 'border-white/6 bg-white/[0.02] hover:border-white/10'
      }`}
    >
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white text-sm font-medium pr-4 font-['Poppins']">{faq.question}</span>
        <div
          className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            open ? 'bg-[#00e87a]/20' : 'bg-white/5'
          }`}
        >
          {open ? <Minus size={14} className="text-[#00e87a]" /> : <Plus size={14} className="text-gray-400" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#00e87a] text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Poppins'] text-white mb-4">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Tire suas dúvidas antes de dar o próximo passo.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
