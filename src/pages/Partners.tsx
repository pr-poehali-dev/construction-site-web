import Icon from '@/components/ui/icon';

const partners = [
  {
    name: 'СтройМатериалы Pro',
    role: 'Поставщик строительных материалов',
    desc: 'Надёжный партнёр по поставке кирпича, блоков и цемента высокого качества.',
    icon: 'Package',
  },
  {
    name: 'КровМастер',
    role: 'Кровельные материалы',
    desc: 'Официальный дистрибьютор ведущих производителей кровельных покрытий.',
    icon: 'Triangle',
  },
  {
    name: 'ЭлектроСервис',
    role: 'Инженерные системы',
    desc: 'Партнёр по монтажу электрооборудования и инженерных коммуникаций.',
    icon: 'Zap',
  },
  {
    name: 'ПроектБюро',
    role: 'Проектирование и архитектура',
    desc: 'Архитектурное бюро — разрабатываем проекты совместно от эскиза до чертежей.',
    icon: 'PenTool',
  },
  {
    name: 'СекьюрТех',
    role: 'Системы безопасности',
    desc: 'Поставщик и монтажник охранных систем и систем видеонаблюдения.',
    icon: 'Shield',
  },
  {
    name: 'БетонПлюс',
    role: 'Бетонные работы',
    desc: 'Специализированная компания по производству и доставке бетона.',
    icon: 'Layers',
  },
];

const benefits = [
  {
    icon: 'Handshake',
    title: 'Долгосрочное партнёрство',
    desc: 'Мы ценим стабильные отношения и работаем на долгосрочной основе.',
  },
  {
    icon: 'TrendingUp',
    title: 'Рост вместе',
    desc: 'Совместные проекты — это увеличение объёмов и прибыли для каждой стороны.',
  },
  {
    icon: 'Star',
    title: 'Репутация',
    desc: 'Работа с нами — это рекомендация от профессиональной строительной компании.',
  },
];

interface PartnersProps {
  onNavigate: (page: string) => void;
}

export default function Partners({ onNavigate }: PartnersProps) {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-brand-dark py-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red" />
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-brand-red" />
            <span className="text-brand-red font-display text-xs tracking-widest uppercase">Наши партнёры</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mb-4">ПАРТНЁРЫ</h1>
          <p className="font-body text-white/50 max-w-xl text-base">
            Мы работаем с проверенными поставщиками и подрядчиками, чтобы гарантировать качество на каждом этапе строительства.
          </p>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-20 bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-brand-red" />
              <span className="text-brand-red font-display text-xs tracking-widest uppercase">Почему мы</span>
              <div className="h-px w-10 bg-brand-red" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-dark">ВЫГОДЫ ПАРТНЁРСТВА</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-8 text-center">
                <div className="w-14 h-14 bg-brand-blue flex items-center justify-center mx-auto mb-5">
                  <Icon name={b.icon} size={26} className="text-white" fallback="Star" />
                </div>
                <h3 className="font-display text-xl font-medium text-brand-dark mb-3">{b.title}</h3>
                <p className="font-body text-sm text-brand-gray leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-brand-red" />
              <span className="text-brand-red font-display text-xs tracking-widest uppercase">С кем мы работаем</span>
              <div className="h-px w-10 bg-brand-red" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-dark">НАШИ ПАРТНЁРЫ</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p, i) => (
              <div key={i} className="border border-gray-100 p-8 hover:border-brand-blue hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors duration-300">
                    <Icon name={p.icon} size={22} className="text-brand-blue group-hover:text-white transition-colors duration-300" fallback="Building" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-brand-dark">{p.name}</h3>
                    <p className="text-brand-red text-xs font-body tracking-wide uppercase">{p.role}</p>
                  </div>
                </div>
                <p className="font-body text-sm text-brand-gray leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become partner CTA */}
      <section className="bg-brand-blue py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-semibold text-white mb-4">
            ХОТИТЕ СТАТЬ ПАРТНЁРОМ?
          </h2>
          <p className="font-body text-white/70 mb-8 max-w-md mx-auto">
            Мы открыты к сотрудничеству с поставщиками, подрядчиками и архитектурными бюро.
          </p>
          <button
            onClick={() => onNavigate('contacts')}
            className="bg-brand-red text-white font-display tracking-widest uppercase px-10 py-4 text-sm hover:bg-white hover:text-brand-dark transition-all duration-300"
          >
            Написать нам
          </button>
        </div>
      </section>
    </div>
  );
}
