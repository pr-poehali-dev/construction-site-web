import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Home',
    title: 'Дома под ключ',
    short: 'Полный цикл строительства',
    desc: 'Берёмся за строительство одноэтажного дома с нулевого цикла до финальной отделки и сдачи. Работаем по договору с фиксированной стоимостью — без скрытых доплат.',
    features: ['Проектирование и планировка', 'Возведение стен и перекрытий', 'Внутренняя и внешняя отделка', 'Сдача «под ключ»'],
  },
  {
    icon: 'Layers',
    title: 'Заливка фундамента',
    short: 'Надёжная основа',
    desc: 'Фундамент — основа любого дома. Выполняем ленточный, плитный и свайный фундаменты с соблюдением всех технологических норм.',
    features: ['Земляные работы', 'Установка опалубки', 'Армирование', 'Заливка бетоном'],
  },
  {
    icon: 'Hammer',
    title: 'Кладочные работы',
    short: 'Кирпич, газобетон, блок',
    desc: 'Профессиональная кладка из любых материалов: кирпич, газобетон, керамоблок, пеноблок. Соблюдаем геометрию и температурные швы.',
    features: ['Кирпичная кладка', 'Кладка из газобетона', 'Перемычки и перегородки', 'Декоративные фасады'],
  },
  {
    icon: 'Zap',
    title: 'Инженерные коммуникации',
    short: 'Электрика, вода, тепло',
    desc: 'Полная прокладка инженерных сетей внутри и снаружи здания. Подключение к центральным сетям или монтаж автономных систем.',
    features: ['Электроснабжение', 'Водоснабжение и канализация', 'Отопление и тёплый пол', 'Вентиляция'],
  },
  {
    icon: 'Triangle',
    title: 'Кровельные работы',
    short: 'Тепло и защита сверху',
    desc: 'Монтаж кровли любой сложности — от простой двускатной до вальмовой и мансардной. Качественные кровельные материалы с гарантией.',
    features: ['Стропильная система', 'Металлочерепица, профнастил', 'Мягкая кровля', 'Утепление и гидроизоляция'],
  },
  {
    icon: 'Shield',
    title: 'Системы безопасности',
    short: 'Умный дом и охрана',
    desc: 'Установка и настройка систем видеонаблюдения, охранной сигнализации, контроля доступа. Интеграция с мобильным приложением.',
    features: ['Видеонаблюдение', 'Охранная сигнализация', 'Контроль доступа', 'Удалённый мониторинг'],
  },
];

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
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
          <div className="section-label"><span>Что мы делаем</span></div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold mb-3" style={{ color: 'var(--brand-dark)' }}>
            УСЛУГИ
          </h1>
          <p className="font-body text-sm max-w-md" style={{ color: 'var(--brand-gray)' }}>
            Полный спектр строительных работ — от закладки фундамента до систем безопасности готового дома.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--brand-line)]">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-10 group hover:border-l-4 hover:border-l-brand-blue transition-all duration-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-blue flex items-center justify-center flex-shrink-0">
                    <Icon name={service.icon} size={22} className="text-white" fallback="Wrench" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium" style={{ color: 'var(--brand-dark)' }}>
                      {service.title}
                    </h3>
                    <p className="font-body text-xs uppercase tracking-widest text-brand-blue">{service.short}</p>
                  </div>
                </div>
                <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'var(--brand-gray)' }}>
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-body" style={{ color: 'var(--brand-dark)' }}>
                      <div className="w-3 h-px bg-brand-blue flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t" style={{ borderColor: 'var(--brand-line)' }}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'var(--brand-dark)' }}>
              НЕ НАШЛИ НУЖНУЮ УСЛУГУ?
            </h2>
            <p className="font-body text-sm mt-1" style={{ color: 'var(--brand-gray)' }}>
              Свяжитесь с нами — обсудим ваш проект.
            </p>
          </div>
          <button onClick={() => onNavigate('contacts')} className="btn-blue flex-shrink-0">
            Связаться с нами
            <Icon name="ArrowRight" size={15} />
          </button>
        </div>
      </section>
    </div>
  );
}
