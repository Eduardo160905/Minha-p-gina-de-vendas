import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Target, LucideIcon } from 'lucide-react';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString('pt-BR') + suffix);

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

type Stat = {
  icon: LucideIcon;
  label: string;
  value: number;
  suffix: string;
  color: string;
  isFloat?: boolean;
};

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/[0.03] border border-white/6 rounded-2xl p-6 text-center hover:border-white/12 transition-all duration-300"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
        style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}25` }}
      >
        <Icon size={18} style={{ color: stat.color }} />
      </div>
      <div className="text-3xl font-bold font-['Poppins'] text-white mb-1">
        {stat.isFloat ? (
          <span>{stat.value}{stat.suffix}</span>
        ) : (
          <Counter value={stat.value} suffix={stat.suffix} />
        )}
      </div>
      <p className="text-gray-500 text-xs">{stat.label}</p>
    </motion.div>
  );
}

type ChannelBar = {
  name: string;
  value: number;
  color: string;
};

function ChannelBarItem({ channel, index }: { channel: ChannelBar; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-gray-400">{channel.name}</span>
        <span className="font-semibold" style={{ color: channel.color }}>{channel.value}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${channel.value}%` } : {}}
          transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${channel.color}, ${channel.color}80)` }}
        />
      </div>
    </div>
  );
}

const stats: Stat[] = [
  { icon: Users, label: 'Leads gerados', value: 2800, suffix: '+', color: '#00e87a' },
  { icon: TrendingUp, label: 'Crescimento médio', value: 280, suffix: '%', color: '#00c4ff' },
  { icon: DollarSign, label: 'ROI médio', value: 5.8, suffix: 'x', color: '#ffb347', isFloat: true },
  { icon: Target, label: 'Projetos entregues', value: 15, suffix: '+', color: '#00e87a' },
];

const channels: ChannelBar[] = [
  { name: 'Google Ads', value: 87, color: '#00e87a' },
  { name: 'Meta Ads', value: 92, color: '#00c4ff' },
  { name: 'SEO Orgânico', value: 74, color: '#ffb347' },
  { name: 'Email / CRM', value: 68, color: '#00e87a' },
];

export default function Results() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="resultados" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00c4ff]/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00e87a] text-sm font-semibold tracking-widest uppercase mb-3">Meus números</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Poppins'] text-white mb-4">
            Resultados que falam
            <br />
            <span className="text-gradient">por si mesmos</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Números reais dos meus projetos. Transparência total em cada campanha que gerencio.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/[0.03] border border-white/6 rounded-2xl p-6"
          >
            <h3 className="text-white font-semibold mb-5 font-['Poppins']">Performance por canal</h3>
            <div className="space-y-4">
              {channels.map((c, i) => (
                <ChannelBarItem key={c.name} channel={c} index={i} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/[0.03] border border-white/6 rounded-2xl p-6"
          >
            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="text-white font-semibold font-['Poppins']">Crescimento em 12 meses</h3>
                <p className="text-gray-500 text-xs mt-0.5">Média dos projetos ativos</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#00e87a]/10 text-[#00e87a] text-xs font-semibold border border-[#00e87a]/20">
                +280%
              </span>
            </div>
            <ChartBars inView={inView} />
            <div className="flex justify-between mt-2 text-xs text-gray-600">
              <span>Jan</span>
              <span>Mar</span>
              <span>Jun</span>
              <span>Set</span>
              <span>Dez</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ChartBars({ inView }: { inView: boolean }) {
  const bars = [22, 30, 28, 42, 50, 46, 62, 68, 72, 80, 88, 100];
  return (
    <div className="flex items-end gap-1.5 h-32">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={inView ? { height: `${h}%` } : {}}
          transition={{ duration: 0.6, delay: 0.5 + i * 0.05, ease: 'easeOut' }}
          className="flex-1 rounded-t-sm"
          style={{
            background: i >= 9 ? 'linear-gradient(to top, #00e87a, #00c4ff)' : 'rgba(0, 232, 122, 0.2)',
          }}
        />
      ))}
    </div>
  );
}
