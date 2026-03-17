import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Home',
    title: 'Дома под ключ',
    short: 'Полный цикл строительства',
    desc: 'Берёмся за строительство одноэтажного дома с нулевого цикла до финальной отделки и сдачи. Работаем по договору с фиксированной стоимостью — без скрытых доплат.',
    features: ['Проектирование и планировка', 'Возведение стен и перекрытий', 'Внутренняя и внешняя отделка', 'Сдача "под ключ"'],
    color: 'bg-brand-blue',
  },
  {
    icon: 'Layers',
    title: 'Заливка фундамента',
    short: 'Надёжная основа',
    desc: 'Фундамент — основа любого дома. Выполняем ленточный, плитный и свайный фундаменты с соблюдением всех технологических норм.',
    features: ['Земляные работы', 'Установка опалубки', 'Армирование', 'Заливка бетоном'],
    color: 'bg-brand-gray',
  },
  {
    icon: 'Hammer',
    title: 'Кладочные работы',
    short: 'Кирпич, газобетон, блок',
    desc: 'Профессиональная кладка из любых материалов: кирпич, газобетон, керамоблок, пеноблок. Соблюдаем геометрию и температурные швы.',
    features: ['Кирпичная кладка', 'Кладка из газобетона', 'Перемычки и перегородки', 'Декоративные фасады'],
    color: 'bg-brand-blue',
  },
  {
    icon: 'Zap',
    title: 'Инженерные коммуникации',
    short: 'Электрика, вода, тепло',
    desc: 'Полная прокладка инженерных сетей внутри и снаружи здания. Подключение к центральным сетям или монтаж автономных систем.',
    features: ['Электроснабжение', 'Водоснабжение и канализация', 'Отопление и тёплый пол', 'Вентиляция'],
    color: 'bg-brand-red',
  },
  {
    icon: 'Home',
    title: 'Кровельные работы',
    short: 'Тепло и защита сверху',
    desc: 'Монтаж кровли любой сложности — от простой двускатной до вальмовой и мансардной. Используем качественные кровельные материалы с гарантией.',
    features: ['Стропильная система', 'Металлочерепица, профнастил', 'Мягкая кровля', 'Утепление и гидроизоляция'],
    color: 'bg-brand-gray',
  },
  {
    icon: 'Shield',
    title: 'Системы безопасности',
    short: 'Умный дом и охрана',
    desc: 'Установка и настройка систем видеонаблюдения, охранной сигнализации, контроля доступа. Интеграция с мобильным приложением.',
    features: ['Видеонаблюдение', 'Охранная сигнализация', 'Контроль доступа', 'Удалённый мониторинг'],
    color: 'bg-brand-blue',
  },
];

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Page header */}
      <section className="bg-brand-dark py-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red" />
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-brand-red" />
            <span className="text-brand-red font-display text-xs tracking-widest uppercase">Что мы делаем</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mb-4">УСЛУГИ</h1>
          <p className="font-body text-white/50 max-w-xl text-base">
            Полный спектр строительных работ — от закладки фундамента до систем безопасности готового дома.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="border border-gray-100 hover:border-brand-blue hover:shadow-xl transition-all duration-300 group bg-white">
                <div className={`${service.color} p-6 flex items-center gap-4`}>
                  <div className="w-12 h-12 bg-white/20 flex items-center justify-center">
                    <Icon name={service.icon} size={24} className="text-white" fallback="Wrench" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-white">{service.title}</h3>
                    <p className="text-white/70 text-xs font-body tracking-wide uppercase">{service.short}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="font-body text-brand-gray leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm font-body text-brand-dark">
                        <div className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gray-light py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-dark mb-4">
            НЕ НАШЛИ НУЖНУЮ УСЛУГУ?
          </h2>
          <p className="font-body text-brand-gray mb-8 max-w-md mx-auto">
            Позвоните или напишите нам — обсудим ваш проект и предложим решение.
          </p>
          <button
            onClick={() => onNavigate('contacts')}
            className="bg-brand-blue text-white font-display tracking-widest uppercase px-10 py-4 text-sm hover:bg-brand-red transition-colors duration-300"
          >
            Связаться с нами
          </button>
        </div>
      </section>
    </div>
  );
}
