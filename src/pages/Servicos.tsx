import { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import {
  MousePointer2, Globe, Search, PenTool, ShoppingCart, Bot,
  Check, X, ArrowRight, ChevronDown, Star, Zap, Shield, Clock,
  LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WA_BASE = 'https://wa.me/55996348863?text=';

function waLink(msg: string) {
  return `${WA_BASE}${encodeURIComponent(msg)}`;
}

type Plan = {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  cta: string;
  whatsappMsg: string;
};

type ServiceData = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  plans: Plan[];
  howItWorks: string[];
  beforeAfter: { before: string[]; after: string[] };
  support: string[];
  faq: { q: string; a: string }[];
  cta: string;
  ctaWhatsappMsg: string;
};

const services: ServiceData[] = [
  {
    id: 'trafego-pago',
    icon: MousePointer2,
    title: 'Gestão estratégica de tráfego pago para gerar leads e vendas.',
    description: 'Campanhas profissionais para aumentar alcance, autoridade e conversões através de anúncios estratégicos.',
    color: '#00e87a',
    plans: [
      {
        name: 'Essencial',
        price: 'A partir de R$397/mês',
        features: ['Gestão básica de anúncios', 'Facebook e Instagram Ads', 'Otimização inicial', 'Relatórios mensais', 'Suporte básico'],
        cta: 'Começar agora',
        whatsappMsg: 'Olá, tenho interesse no plano Essencial de Tráfego Pago e gostaria de mais informações.',
      },
      {
        name: 'Performance',
        price: 'A partir de R$697/mês',
        features: ['Estratégia personalizada', 'Meta Ads + Google Ads', 'Otimizações semanais', 'Criativos estratégicos', 'Relatórios detalhados', 'Suporte prioritário'],
        highlight: true,
        badge: 'Mais popular',
        cta: 'Começar agora',
        whatsappMsg: 'Olá, tenho interesse no plano Performance de Tráfego Pago e gostaria de mais informações.',
      },
      {
        name: 'Escala',
        price: 'Sob consulta',
        features: ['Gestão completa', 'Estratégia avançada', 'Funil de conversão', 'Remarketing', 'Testes A/B', 'Consultoria estratégica', 'Suporte premium'],
        cta: 'Falar sobre este plano',
        whatsappMsg: 'Olá, tenho interesse no plano Escala de Tráfego Pago e gostaria de mais informações.',
      },
    ],
    howItWorks: [
      'Análise do seu negócio e concorrência',
      'Criação de estratégia de campanhas',
      'Configuração de anúncios e públicos',
      'Otimização contínua e testes',
      'Relatórios de performance',
    ],
    beforeAfter: {
      before: ['Poucos alcance e impressões', 'Alto custo por clique', 'Sem otimização de campanhas', 'Anúncios genéricos', 'Zero remarketing'],
      after: ['Alcance qualificado expandido', 'Custo por lead reduzido', 'Otimizações semanais', 'Criativos estratégicos', 'Remarketing ativo'],
    },
    support: ['Suporte via WhatsApp', 'Relatórios periódicos', 'Ajustes de campanha inclusos', 'Otimização contínua'],
    faq: [
      { q: 'Em quanto tempo terei resultados?', a: 'Resultados iniciais aparecem em 2 a 4 semanas. Resultados consistentes e otimizados se consolidam entre 60 e 90 dias.' },
      { q: 'O investimento em anúncios está incluso?', a: 'Não. O valor dos planos refere-se à gestão. O orçamento de mídia é investido diretamente nas plataformas.' },
      { q: 'Posso escolher quais plataformas anunciar?', a: 'Sim. Defino a melhor estratégia de canais conforme seu público e objetivos.' },
    ],
    cta: 'Quero anunciar meu negócio',
    ctaWhatsappMsg: 'Olá, tenho interesse no serviço de Gestão de Tráfego Pago e gostaria de mais informações.',
  },
  {
    id: 'landing-pages',
    icon: Globe,
    title: 'Landing Pages profissionais focadas em conversão.',
    description: 'Criação de páginas modernas, rápidas e estrategicamente desenvolvidas para gerar autoridade e vendas.',
    color: '#00c4ff',
    plans: [
      {
        name: 'Landing Start',
        price: 'A partir de R$397',
        features: ['Página simples', 'Responsiva', 'Botão WhatsApp', 'SEO básico', 'Publicação gratuita'],
        cta: 'Começar agora',
        whatsappMsg: 'Olá, tenho interesse no plano Landing Start e gostaria de mais informações.',
      },
      {
        name: 'Landing Premium',
        price: 'A partir de R$797',
        features: ['Design premium', 'Copy estratégica', 'Animações suaves', 'Integração com formulários', 'Estrutura profissional', 'Responsividade completa'],
        highlight: true,
        badge: 'Mais escolhido',
        cta: 'Começar agora',
        whatsappMsg: 'Olá, tenho interesse no plano Landing Premium e gostaria de mais informações.',
      },
      {
        name: 'Landing Performance',
        price: 'A partir de R$1.297',
        features: ['Estrutura avançada', 'Funil estratégico', 'Otimização de conversão', 'Integrações completas', 'Design exclusivo', 'Suporte prioritário'],
        cta: 'Falar sobre este plano',
        whatsappMsg: 'Olá, tenho interesse no plano Landing Performance e gostaria de mais informações.',
      },
    ],
    howItWorks: [
      'Briefing e análise do seu negócio',
      'Desenvolvimento da copy estratégica',
      'Design e construção da página',
      'Integrações e testes',
      'Publicação e entrega otimizada',
    ],
    beforeAfter: {
      before: ['Design amador e desatualizado', 'Carregamento lento', 'Sem responsividade mobile', 'Zero otimização de conversão', 'Nenhuma prova social'],
      after: ['Design premium e moderno', 'Carregamento em menos de 2s', '100% responsiva', 'Funil estratégico de conversão', 'Prova social e credibilidade'],
    },
    support: ['Atualizações disponíveis', 'Alterações futuras', 'Suporte técnico', 'Ajustes visuais'],
    faq: [
      { q: 'Quanto tempo leva para criar uma landing page?', a: 'O prazo médio é de 7 a 15 dias úteis, dependendo da complexidade do projeto.' },
      { q: 'Posso pedir alterações depois?', a: 'Sim. Ofereço suporte para ajustes e atualizações conforme a necessidade.' },
      { q: 'A página é minha após a entrega?', a: 'Sim. Após a entrega, a página é 100% sua, hospedada e funcional.' },
    ],
    cta: 'Quero minha Landing Page',
    ctaWhatsappMsg: 'Olá, tenho interesse no serviço de Landing Pages e gostaria de mais informações.',
  },
  {
    id: 'posicionamento',
    icon: Search,
    title: 'Posicionamento estratégico para fortalecer sua presença digital.',
    description: 'Desenvolvimento de imagem, autoridade e identidade digital para tornar sua marca mais forte e profissional.',
    color: '#ffb347',
    plans: [
      {
        name: 'Posicionamento Base',
        price: 'A partir de R$297',
        features: ['Análise de perfil', 'Ajustes básicos', 'Estratégia inicial'],
        cta: 'Começar agora',
        whatsappMsg: 'Olá, tenho interesse no plano Posicionamento Base e gostaria de mais informações.',
      },
      {
        name: 'Posicionamento Pro',
        price: 'A partir de R$597',
        features: ['Estratégia completa', 'Identidade visual', 'Planejamento de conteúdo', 'Otimização de perfil'],
        highlight: true,
        badge: 'Recomendado',
        cta: 'Começar agora',
        whatsappMsg: 'Olá, tenho interesse no plano Posicionamento Pro e gostaria de mais informações.',
      },
      {
        name: 'Posicionamento Elite',
        price: 'Sob consulta',
        features: ['Estratégia avançada', 'Planejamento completo', 'Estrutura de autoridade', 'Consultoria personalizada', 'Acompanhamento estratégico'],
        cta: 'Falar sobre este plano',
        whatsappMsg: 'Olá, tenho interesse no plano Posicionamento Elite e gostaria de mais informações.',
      },
    ],
    howItWorks: [
      'Diagnóstico completo da sua presença digital',
      'Definição de identidade e posicionamento',
      'Estruturação de perfil e comunicação',
      'Planejamento de conteúdo estratégico',
      'Acompanhamento e ajustes',
    ],
    beforeAfter: {
      before: ['Perfil sem identidade visual', 'Bio genérica', 'Sem autoridade percebida', 'Conteúdo sem estratégia', 'Baixo engajamento'],
      after: ['Identidade visual profissional', 'Bio estratégica e clara', 'Autoridade no mercado', 'Conteúdo que gera conexão', 'Engajamento qualificado'],
    },
    support: ['Acompanhamento mensal', 'Ajustes de estratégia', 'Suporte via WhatsApp', 'Relatórios de evolução'],
    faq: [
      { q: 'Em quanto tempo vejo mudanças no posicionamento?', a: 'As primeiras mudanças são percebidas em 2 semanas. O fortalecimento completo da autoridade leva de 60 a 90 dias.' },
      { q: 'Inclui criação de conteúdo?', a: 'O plano Pro e Elite incluem planejamento de conteúdo. A criação pode ser adicionada como serviço extra.' },
    ],
    cta: 'Quero fortalecer minha marca',
    ctaWhatsappMsg: 'Olá, tenho interesse no serviço de Posicionamento Digital e gostaria de mais informações.',
  },
  {
    id: 'copywriting',
    icon: PenTool,
    title: 'Textos estratégicos que aumentam conexão e conversão.',
    description: 'Copy persuasiva desenvolvida para anúncios, páginas, conteúdos e estruturas de vendas.',
    color: '#00e87a',
    plans: [
      {
        name: 'Copy Essencial',
        price: 'A partir de R$197',
        features: ['Headlines', 'CTA', 'Textos básicos'],
        cta: 'Começar agora',
        whatsappMsg: 'Olá, tenho interesse no plano Copy Essencial e gostaria de mais informações.',
      },
      {
        name: 'Copy Conversão',
        price: 'A partir de R$397',
        features: ['Landing page completa', 'Estratégia persuasiva', 'Estrutura de vendas'],
        highlight: true,
        badge: 'Mais valorizado',
        cta: 'Começar agora',
        whatsappMsg: 'Olá, tenho interesse no plano Copy Conversão e gostaria de mais informações.',
      },
      {
        name: 'Copy Premium',
        price: 'A partir de R$797',
        features: ['Copy avançada', 'Funil completo', 'Sequência estratégica', 'Otimização de conversão'],
        cta: 'Falar sobre este plano',
        whatsappMsg: 'Olá, tenho interesse no plano Copy Premium e gostaria de mais informações.',
      },
    ],
    howItWorks: [
      'Pesquisa do seu público e mercado',
      'Desenvolvimento da estratégia de comunicação',
      'Criação dos textos persuasivos',
      'Revisão e otimização',
      'Entrega e aplicação',
    ],
    beforeAfter: {
      before: ['Textos genéricos e sem impacto', 'Sem call-to-action eficaz', 'Comunicação sem conexão', 'Baixa taxa de conversão', 'Mensagens que não convencem'],
      after: ['Copy persuasiva e estratégica', 'CTAs que geram ação', 'Comunicação que conecta', 'Taxa de conversão elevada', 'Mensagens que convencem e vendem'],
    },
    support: ['Revisões inclusas', 'Ajustes pós-entrega', 'Suporte para aplicação', 'Otimização contínua'],
    faq: [
      { q: 'A copy é original e exclusiva?', a: 'Sim. Todo texto é criado do zero, sob medida para seu negócio, público e objetivos.' },
      { q: 'Inclui revisões?', a: 'Sim. Incluo revisões até que o texto atenda plenamente suas expectativas.' },
    ],
    cta: 'Quero melhorar minha comunicação',
    ctaWhatsappMsg: 'Olá, tenho interesse no serviço de Copywriting e gostaria de mais informações.',
  },
  {
    id: 'estrutura-vendas',
    icon: ShoppingCart,
    title: 'Estrutura digital desenvolvida para transformar visitas em clientes.',
    description: 'Criação de processos digitais organizados para melhorar captação, conversão e escalabilidade.',
    color: '#00c4ff',
    plans: [
      {
        name: 'Estrutura Base',
        price: 'A partir de R$497',
        features: ['Organização básica', 'Funil simples', 'Integrações iniciais'],
        cta: 'Começar agora',
        whatsappMsg: 'Olá, tenho interesse no plano Estrutura Base e gostaria de mais informações.',
      },
      {
        name: 'Estrutura Pro',
        price: 'A partir de R$997',
        features: ['Funil estratégico', 'CRM básico', 'Automação inicial', 'Estrutura otimizada'],
        highlight: true,
        badge: 'Mais completo',
        cta: 'Começar agora',
        whatsappMsg: 'Olá, tenho interesse no plano Estrutura Pro e gostaria de mais informações.',
      },
      {
        name: 'Estrutura Escala',
        price: 'Sob consulta',
        features: ['Estrutura completa', 'Automação avançada', 'Integrações profissionais', 'Estratégia de escala'],
        cta: 'Falar sobre este plano',
        whatsappMsg: 'Olá, tenho interesse no plano Estrutura Escala e gostaria de mais informações.',
      },
    ],
    howItWorks: [
      'Mapeamento do processo de vendas atual',
      'Design do funil e jornada do cliente',
      'Configuração de ferramentas e integrações',
      'Automação dos fluxos de venda',
      'Testes, ajustes e entrega',
    ],
    beforeAfter: {
      before: ['Processo de vendas manual', 'Sem funil estruturado', 'Perda de leads por falta de follow-up', 'Sem automação', 'Dados descentralizados'],
      after: ['Processo digital e automatizado', 'Funil estratégico completo', 'Follow-up automático e inteligente', 'Automações que convertem', 'Dashboard e métricas centralizadas'],
    },
    support: ['Suporte técnico inclusivo', 'Ajustes de fluxo', 'Atualizações disponíveis', 'Atendimento estratégico personalizado'],
    faq: [
      { q: 'Quais ferramentas você utiliza?', a: 'Trabalho com as melhores ferramentas do mercado conforme a necessidade: CRM, automação de email, chatbot, entre outras.' },
      { q: 'A integração com meu sistema atual é possível?', a: 'Na maioria dos casos sim. Faço uma análise prévia para garantir compatibilidade.' },
    ],
    cta: 'Quero estruturar minhas vendas',
    ctaWhatsappMsg: 'Olá, tenho interesse no serviço de Estrutura de Vendas e gostaria de mais informações.',
  },
  {
    id: 'automacao',
    icon: Bot,
    title: 'Automação inteligente para otimizar atendimento e vendas.',
    description: 'Automatizações que reduzem tempo operacional e aumentam eficiência comercial.',
    color: '#ffb347',
    plans: [
      {
        name: 'Automação Inicial',
        price: 'A partir de R$397',
        features: ['WhatsApp automático', 'Respostas rápidas', 'Integração básica'],
        cta: 'Começar agora',
        whatsappMsg: 'Olá, tenho interesse no plano Automação Inicial e gostaria de mais informações.',
      },
      {
        name: 'Automação Business',
        price: 'A partir de R$797',
        features: ['Fluxos inteligentes', 'Integração com CRM', 'Captação automatizada'],
        highlight: true,
        badge: 'Mais eficiente',
        cta: 'Começar agora',
        whatsappMsg: 'Olá, tenho interesse no plano Automação Business e gostaria de mais informações.',
      },
      {
        name: 'Automação Premium',
        price: 'Sob consulta',
        features: ['Estrutura avançada', 'Automação completa', 'Integrações personalizadas', 'Otimização contínua'],
        cta: 'Falar sobre este plano',
        whatsappMsg: 'Olá, tenho interesse no plano Automação Premium e gostaria de mais informações.',
      },
    ],
    howItWorks: [
      'Análise dos processos manuais atuais',
      'Mapeamento de fluxos automatizáveis',
      'Configuração das automações',
      'Integração com ferramentas',
      'Testes, ativação e monitoramento',
    ],
    beforeAfter: {
      before: ['Atendimento 100% manual', 'Respostas lentas ao cliente', 'Perda de oportunidades por demora', 'Processos repetitivos', 'Sem escala no atendimento'],
      after: ['Atendimento automático 24/7', 'Respostas instantâneas', 'Captação e qualificação automática', 'Processos inteligentes', 'Escala sem aumentar equipe'],
    },
    support: ['Suporte técnico incluso', 'Ajustes de fluxo', 'Atualizações disponíveis', 'Monitoramento de performance'],
    faq: [
      { q: 'Funciona com WhatsApp Business?', a: 'Sim. A automação é configurada diretamente no WhatsApp e outras plataformas de atendimento.' },
      { q: 'Posso personalizar as mensagens automáticas?', a: 'Completamente. Cada fluxo é criado sob medida para seu negócio e tom de voz.' },
    ],
    cta: 'Quero automatizar meu negócio',
    ctaWhatsappMsg: 'Olá, tenho interesse no serviço de Automação e gostaria de mais informações.',
  },
];

function PlanCard({ plan, color }: { plan: Plan; color: string }) {
  return (
    <div
      className={`relative rounded-2xl p-6 border transition-all duration-300 ${
        plan.highlight
          ? 'bg-white/[0.05] border-white/15 scale-[1.02]'
          : 'bg-white/[0.03] border-white/6'
      }`}
    >
      {plan.badge && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold"
          style={{ background: color, color: '#07090e' }}
        >
          {plan.badge}
        </span>
      )}
      <h3 className="text-white font-bold text-lg font-['Poppins'] mb-1">{plan.name}</h3>
      <p className="text-sm font-semibold mb-4" style={{ color }}>{plan.price}</p>
      <ul className="space-y-2.5 mb-6">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-gray-400 text-sm">
            <Check size={14} style={{ color }} className="mt-0.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <a
        href={waLink(plan.whatsappMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
          plan.highlight
            ? 'text-[#07090e]'
            : 'border border-white/10 text-white hover:border-white/25 hover:bg-white/5'
        }`}
        style={plan.highlight ? { background: `linear-gradient(135deg, ${color}, #00c4ff)` } : {}}
      >
        {plan.cta}
      </a>
    </div>
  );
}

function ServiceFAQ({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-white/6 rounded-xl overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-4 py-3 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-white text-sm font-medium pr-4">{item.q}</span>
            <ChevronDown
              size={16}
              className={`text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="px-4 pb-3 text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function ServiceSection({ service }: { service: ServiceData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = service.icon;

  return (
    <motion.section
      id={service.id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="py-20 border-t border-white/5 scroll-mt-20"
    >
      <div className="flex items-start gap-4 mb-6">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}
        >
          <Icon size={26} style={{ color: service.color }} />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold font-['Poppins'] text-white leading-tight">
            {service.title}
          </h2>
          <p className="text-gray-500 text-base mt-2 leading-relaxed">{service.description}</p>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-white font-semibold font-['Poppins'] mb-4 flex items-center gap-2">
          <Zap size={16} style={{ color: service.color }} />
          Como funciona
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {service.howItWorks.map((step, i) => (
            <div key={step} className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-center">
              <span className="text-xs font-bold block mb-1" style={{ color: service.color }}>Passo {i + 1}</span>
              <p className="text-gray-400 text-xs">{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-white font-semibold font-['Poppins'] mb-6 flex items-center gap-2">
          <Star size={16} style={{ color: service.color }} />
          Planos e preços
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {service.plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} color={service.color} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-white font-semibold font-['Poppins'] mb-4 flex items-center gap-2">
          <Shield size={16} style={{ color: service.color }} />
          Antes e depois
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-red-500/[0.03] border border-red-500/10 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <X size={14} className="text-red-400" />
              <span className="text-red-400 text-sm font-semibold">Antes</span>
            </div>
            <ul className="space-y-2">
              {service.beforeAfter.before.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                  <X size={12} className="text-red-400/50 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#00e87a]/[0.02] border border-[#00e87a]/10 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Check size={14} style={{ color: service.color }} />
              <span className="text-sm font-semibold" style={{ color: service.color }}>Depois</span>
            </div>
            <ul className="space-y-2">
              {service.beforeAfter.after.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                  <Check size={12} style={{ color: service.color }} className="mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-white font-semibold font-['Poppins'] mb-4 flex items-center gap-2">
          <Clock size={16} style={{ color: service.color }} />
          Suporte e manutenção
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {service.support.map((item) => (
            <div key={item} className="bg-white/[0.03] border border-white/5 rounded-xl p-4 flex items-center gap-3">
              <Check size={14} style={{ color: service.color }} className="flex-shrink-0" />
              <span className="text-gray-400 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-white font-semibold font-['Poppins'] mb-4">
          Perguntas frequentes sobre {service.plans[0].name.split(' ')[0]}
        </h3>
        <ServiceFAQ items={service.faq} />
      </div>

      <div className="text-center py-8 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl border border-white/5">
        <h3 className="text-white font-bold text-xl font-['Poppins'] mb-3">Pronto para começar?</h3>
        <p className="text-gray-500 text-sm mb-5">Entre em contato e vamos discutir o melhor plano para o seu negócio.</p>
        <a
          href={waLink(service.ctaWhatsappMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[#07090e] font-semibold text-sm hover:opacity-90 transition-all duration-200"
          style={{ background: `linear-gradient(135deg, ${service.color}, #00c4ff)` }}
        >
          {service.cta}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.section>
  );
}

export default function Servicos() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-[#07090e] text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={heroRef} className="py-16 lg:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#00e87a] text-sm font-semibold tracking-widest uppercase mb-4">Serviços completos</p>
            <h1 className="text-4xl sm:text-5xl font-bold font-['Poppins'] leading-tight mb-6">
              Soluções profissionais para{' '}
              <span className="text-gradient">crescer no digital</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Cada serviço é desenvolvido com planos flexíveis, suporte dedicado e foco total em resultados reais para o seu negócio.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/6 text-gray-400 text-sm font-medium hover:text-white hover:border-white/15 transition-all duration-200"
              >
                <Icon size={14} style={{ color: s.color }} />
                {s.plans[0].name.split(' ')[0]}
              </a>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {[
            'Suporte e manutenção inclusos nos planos premium',
            'Atualizações disponíveis conforme necessidade do projeto',
            'Atendimento estratégico personalizado',
            'Entrega profissional e otimizada',
          ].map((badge) => (
            <span key={badge} className="px-3 py-1.5 rounded-full bg-[#00e87a]/8 border border-[#00e87a]/15 text-[#00e87a] text-xs font-medium">
              {badge}
            </span>
          ))}
        </div>

        {services.map((service) => (
          <ServiceSection key={service.id} service={service} />
        ))}

        <section className="py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Poppins'] text-white mb-4">
            Não encontrou o que procura?
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto mb-8">
            Fale comigo e encontro a melhor solução para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLink('Olá, gostaria de saber mais sobre os serviços de marketing digital.')}
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
