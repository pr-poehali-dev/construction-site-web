import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/0507dada-f548-4e69-98b3-d0fe6b8ed0ec/files/5b376e50-4c6d-4662-89ff-e612bcdfb3be.jpg';
const HOUSE_IMG = 'https://cdn.poehali.dev/projects/0507dada-f548-4e69-98b3-d0fe6b8ed0ec/files/3d46b495-70d5-49f6-8e48-04b5a0b9dec5.jpg';
const WORK_IMG = 'https://cdn.poehali.dev/projects/0507dada-f548-4e69-98b3-d0fe6b8ed0ec/files/823798af-3d67-4240-9365-8d92af8568ba.jpg';

const stats = [
  { value: '50+', label: 'Объектов сдано' },
  { value: '5 лет', label: 'На рынке' },
  { value: '100%', label: 'Гарантия качества' },
  { value: '0', label: 'Срывов сроков' },
];

const services = [
  { icon: 'Home', title: 'Дома под ключ', desc: 'Строительство одноэтажных домов от проекта до финальной отделки' },
  { icon: 'Layers', title: 'Фундамент', desc: 'Заливка и устройство фундаментов любой сложности' },
  { icon: 'Brick', title: 'Кладочные работы', desc: 'Кирпич, газобетон, керамоблок — профессионально и в срок' },
  { icon: 'Zap', title: 'Коммуникации', desc: 'Прокладка инженерных сетей: электрика, водоснабжение, отопление' },
  { icon: 'Triangle', title: 'Кровля', desc: 'Монтаж кровли любых форм и материалов с гарантией' },
  { icon: 'Shield', title: 'Безопасность', desc: 'Видеонаблюдение, сигнализация, умный дом' },
];

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-transparent" />
        {/* Decorative line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red" />

        <div className="relative container mx-auto px-6 pt-28 pb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="h-px w-12 bg-brand-red" />
              <span className="text-brand-red font-display text-xs tracking-widest uppercase">Строительство под ключ</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
              СТРОИМ
              <br />
              <span className="text-brand-red">НАДЁЖНО.</span>
              <br />
              СДАЁМ ВОВРЕМЯ.
            </h1>
            <p className="text-white/70 font-body text-lg leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
              Одноэтажные дома под ключ в Москве и Подмосковье.
              Весь цикл работ — от фундамента до систем безопасности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.45s', opacity: 0 }}>
              <button
                onClick={() => onNavigate('contacts')}
                className="bg-brand-red text-white font-display tracking-widest uppercase px-8 py-4 hover:bg-brand-blue transition-colors duration-300 text-sm"
              >
                Получить консультацию
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="border border-white/40 text-white font-display tracking-widest uppercase px-8 py-4 hover:border-white hover:bg-white/10 transition-all duration-300 text-sm"
              >
                Наши услуги
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s', opacity: 0 }}>
          <span className="text-white/40 text-xs font-body tracking-widest uppercase">Листайте вниз</span>
          <Icon name="ChevronDown" size={20} className="text-white/40" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-brand-blue py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-4xl font-semibold text-white mb-1">{stat.value}</div>
                <div className="text-white/60 text-xs font-body tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-brand-red" />
                <span className="text-brand-red font-display text-xs tracking-widest uppercase">О компании</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-brand-dark mb-6 leading-tight">
                МЫ СТРОИМ,
                <br />
                КАК ДЛЯ СЕБЯ
              </h2>
              <p className="font-body text-brand-gray leading-relaxed mb-6">
                СтройДом — молодая, но амбициозная строительная компания. Мы начинали с небольших объектов
                и выросли в команду профессионалов, которые берутся за полный цикл строительства.
              </p>
              <p className="font-body text-brand-gray leading-relaxed mb-8">
                Каждый дом для нас — это ответственность перед людьми, которые будут в нём жить. Поэтому
                мы не срезаем углы и не экономим на качестве материалов.
              </p>
              <button
                onClick={() => onNavigate('contacts')}
                className="bg-brand-blue text-white font-display tracking-widest uppercase px-7 py-3 text-sm hover:bg-brand-dark transition-colors duration-300 inline-flex items-center gap-2"
              >
                Обсудить проект
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
            <div className="relative">
              <img
                src={HOUSE_IMG}
                alt="Готовый дом"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-red text-white p-6 w-48">
                <div className="font-display text-3xl font-semibold">5+</div>
                <div className="font-body text-xs text-white/80 mt-1 uppercase tracking-wide">лет опыта в строительстве</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-brand-red" />
              <span className="text-brand-red font-display text-xs tracking-widest uppercase">Что мы делаем</span>
              <div className="h-px w-10 bg-brand-red" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-brand-dark">НАШИ УСЛУГИ</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-8 group hover:shadow-xl transition-all duration-300 border-b-2 border-transparent hover:border-brand-blue cursor-pointer"
                onClick={() => onNavigate('services')}
              >
                <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300">
                  <Icon name={service.icon} size={22} className="text-brand-blue group-hover:text-white transition-colors duration-300" fallback="Wrench" />
                </div>
                <h3 className="font-display text-xl font-medium text-brand-dark mb-3">{service.title}</h3>
                <p className="font-body text-sm text-brand-gray leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('services')}
              className="border-2 border-brand-blue text-brand-blue font-display tracking-widest uppercase px-8 py-3 text-sm hover:bg-brand-blue hover:text-white transition-all duration-300 inline-flex items-center gap-2"
            >
              Все услуги
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative py-20 overflow-hidden">
        <img src={WORK_IMG} alt="Строители за работой" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6">
            ГОТОВЫ НАЧАТЬ ВАШ ПРОЕКТ?
          </h2>
          <p className="font-body text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Оставьте заявку — и мы свяжемся с вами в течение часа для бесплатной консультации.
          </p>
          <button
            onClick={() => onNavigate('contacts')}
            className="bg-brand-red text-white font-display tracking-widest uppercase px-10 py-4 text-sm hover:bg-white hover:text-brand-dark transition-all duration-300"
          >
            Оставить заявку
          </button>
        </div>
      </section>
    </div>
  );
}