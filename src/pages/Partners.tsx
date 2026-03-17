import Icon from '@/components/ui/icon';

const partners = [
  { name: 'СтройМатериалы Pro', role: 'Поставщик строительных материалов', desc: 'Надёжный партнёр по поставке кирпича, блоков и цемента.', icon: 'Package' },
  { name: 'КровМастер',         role: 'Кровельные материалы',               desc: 'Официальный дистрибьютор ведущих производителей кровли.',  icon: 'Triangle' },
  { name: 'ЭлектроСервис',      role: 'Инженерные системы',                 desc: 'Партнёр по монтажу электрооборудования и коммуникаций.',   icon: 'Zap' },
  { name: 'ПроектБюро',         role: 'Проектирование и архитектура',        desc: 'Архитектурное бюро — от эскиза до рабочих чертежей.',      icon: 'PenTool' },
  { name: 'СекьюрТех',          role: 'Системы безопасности',               desc: 'Поставщик охранных систем и видеонаблюдения.',             icon: 'Shield' },
  { name: 'БетонПлюс',          role: 'Бетонные работы',                    desc: 'Производство и доставка бетона высокого качества.',        icon: 'Layers' },
];

const benefits = [
  { icon: 'Handshake', title: 'Долгосрочное партнёрство', desc: 'Ценим стабильные отношения и работаем на долгосрочной основе.' },
  { icon: 'TrendingUp', title: 'Рост вместе',              desc: 'Совместные проекты увеличивают объёмы и прибыль обеих сторон.' },
  { icon: 'Star',        title: 'Репутация',               desc: 'Работа с нами — рекомендация от профессиональной компании.' },
];

interface PartnersProps {
  onNavigate: (page: string) => void;
}

export default function Partners({ onNavigate }: PartnersProps) {
  return (
    <div className="pt-[66px] min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(var(--brand-line) 1px, transparent 1px), linear-gradient(90deg, var(--brand-line) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            opacity: 0.4,
          }}
        />
        <div className="relative container mx-auto px-6">
          <div className="section-label"><span>Сотрудничество</span></div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold mb-3" style={{ color: 'var(--brand-dark)' }}>
            ПАРТНЁРЫ
          </h1>
          <p className="font-body text-sm max-w-md" style={{ color: 'var(--brand-gray)' }}>
            Работаем с проверенными поставщиками и подрядчиками для гарантии качества на каждом этапе.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <div className="section-label mb-8"><span>Почему выгодно</span></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--brand-line)]">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-8">
                <div className="w-10 h-10 bg-brand-blue flex items-center justify-center mb-5">
                  <Icon name={b.icon} size={20} className="text-white" fallback="Star" />
                </div>
                <h3 className="font-display text-lg font-medium mb-2" style={{ color: 'var(--brand-dark)' }}>{b.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--brand-gray)' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners list */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="section-label mb-8"><span>С кем мы работаем</span></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--brand-line)]">
            {partners.map((p, i) => (
              <div key={i} className="bg-white p-8 group hover:border-l-4 hover:border-l-brand-blue transition-all duration-200">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 bg-brand-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors">
                    <Icon name={p.icon} size={18} className="text-brand-blue group-hover:text-white transition-colors" fallback="Building" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-medium" style={{ color: 'var(--brand-dark)' }}>{p.name}</h3>
                    <p className="text-brand-blue text-xs font-body tracking-wide uppercase">{p.role}</p>
                  </div>
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--brand-gray)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become partner */}
      <section className="bg-brand-blue py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-semibold text-white">ХОТИТЕ СТАТЬ ПАРТНЁРОМ?</h2>
            <p className="font-body text-sm mt-1" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Открыты к сотрудничеству с поставщиками, подрядчиками и архитекторами.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contacts')}
            className="flex-shrink-0 font-display tracking-widest uppercase text-sm px-8 py-3.5 border-2 border-white text-white transition-all duration-200 hover:bg-white inline-flex items-center gap-2"
            style={{ '--tw-text-opacity': '1' } as React.CSSProperties}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--brand-blue)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'white'; }}
          >
            Написать нам
            <Icon name="ArrowRight" size={15} />
          </button>
        </div>
      </section>
    </div>
  );
}
