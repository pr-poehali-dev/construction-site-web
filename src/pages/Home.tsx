import Icon from '@/components/ui/icon';

const HERO_IMG  = 'https://cdn.poehali.dev/projects/0507dada-f548-4e69-98b3-d0fe6b8ed0ec/files/2d134f44-41ca-40b3-950a-f4bdc77d3d07.jpg';
const HOUSE_IMG = 'https://cdn.poehali.dev/projects/0507dada-f548-4e69-98b3-d0fe6b8ed0ec/files/3d46b495-70d5-49f6-8e48-04b5a0b9dec5.jpg';
const WORK_IMG  = 'https://cdn.poehali.dev/projects/0507dada-f548-4e69-98b3-d0fe6b8ed0ec/files/823798af-3d67-4240-9365-8d92af8568ba.jpg';

const stats = [
  { value: '50+',  label: 'Объектов сдано'     },
  { value: '5 лет', label: 'На рынке'           },
  { value: '100%', label: 'Гарантия качества'   },
  { value: '0',    label: 'Срывов сроков'       },
];

const services = [
  { icon: 'Home',    title: 'Дома под ключ',        desc: 'Строительство одноэтажных домов от проекта до финальной отделки' },
  { icon: 'Layers',  title: 'Фундамент',             desc: 'Заливка и устройство фундаментов любой сложности' },
  { icon: 'Hammer',  title: 'Кладочные работы',      desc: 'Кирпич, газобетон, керамоблок — профессионально и в срок' },
  { icon: 'Zap',     title: 'Коммуникации',          desc: 'Прокладка инженерных сетей: электрика, вода, отопление' },
  { icon: 'Triangle','title': 'Кровля',              desc: 'Монтаж кровли любых форм и материалов с гарантией' },
  { icon: 'Shield',  title: 'Системы безопасности',  desc: 'Видеонаблюдение, сигнализация, умный дом' },
];

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      {/* ── HERO ────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Большой номер-фон */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-semibold select-none pointer-events-none leading-none"
          style={{ fontSize: 'clamp(160px, 28vw, 340px)', color: 'var(--brand-gray-light)', lineHeight: 1 }}
        >
          01
        </div>

        {/* Горизонтальные линии-акценты */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: 'var(--brand-line)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: 'var(--brand-line)' }} />

        {/* Вертикальная синяя полоса */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue" />

        <div className="relative container mx-auto px-6 pt-28 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

            {/* Левая колонка — текст */}
            <div className="md:col-span-7">
              <div className="section-label anim-in op0">
                <span>Строительство под ключ</span>
              </div>

              <h1
                className="font-display font-semibold leading-none mb-8 anim-up op0 d1"
                style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'var(--brand-dark)' }}
              >
                СТРОИМ
                <br />
                <span className="text-brand-blue">НАДЁЖНО.</span>
                <br />
                СДАЁМ
                <br />
                ВОВРЕМЯ.
              </h1>

              <div className="flex flex-col sm:flex-row gap-3 anim-up op0 d2">
                <button onClick={() => onNavigate('contacts')} className="btn-blue">
                  Получить консультацию
                  <Icon name="ArrowRight" size={15} />
                </button>
                <button onClick={() => onNavigate('services')} className="btn-blue-outline">
                  Наши услуги
                </button>
              </div>
            </div>

            {/* Правая колонка — вертикальный текст + описание */}
            <div className="md:col-span-5 flex items-start gap-6 anim-up op0 d3">
              <div
                className="hidden md:block font-display text-xs tracking-[0.3em] uppercase"
                style={{
                  color: 'var(--brand-blue)',
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  paddingTop: 4,
                }}
              >
                Москва и МО
              </div>
              <div style={{ borderLeft: '1px solid var(--brand-line)', paddingLeft: '1.5rem' }}>
                <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'var(--brand-gray)' }}>
                  Одноэтажные дома под ключ в Москве и Подмосковье.
                  Весь цикл — от фундамента до систем безопасности.
                </p>
                <div className="space-y-3">
                  {['Фиксированная цена', 'Гарантия качества', 'Сдача в срок'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-4 h-px bg-brand-blue flex-shrink-0" />
                      <span className="font-body text-xs uppercase tracking-widest" style={{ color: 'var(--brand-dark)' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────── */}
      <section className="bg-brand-blue">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((s, i) => (
              <div key={i} className="py-10 px-8 text-center">
                <div className="font-display text-4xl font-semibold text-white">{s.value}</div>
                <div className="font-body text-xs uppercase tracking-widest mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label"><span>О компании</span></div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6" style={{ color: 'var(--brand-dark)' }}>
                МЫ СТРОИМ,<br />КАК ДЛЯ СЕБЯ
              </h2>
              <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--brand-gray)' }}>
                СтройДом — молодая и амбициозная строительная компания. Мы начинали с небольших
                объектов и выросли в команду профессионалов, которые берутся за полный цикл строительства.
              </p>
              <p className="font-body text-sm leading-relaxed mb-10" style={{ color: 'var(--brand-gray)' }}>
                Каждый дом — ответственность перед людьми, которые в нём будут жить. Поэтому мы
                не срезаем углы и не экономим на качестве.
              </p>
              <button onClick={() => onNavigate('contacts')} className="btn-blue">
                Обсудить проект
                <Icon name="ArrowRight" size={15} />
              </button>
            </div>

            <div className="relative">
              <img src={HOUSE_IMG} alt="Готовый дом" className="w-full h-[400px] object-cover" />
              {/* corner bracket decoration */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-brand-blue" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-brand-blue" />
              <div className="absolute -bottom-6 -left-6 bg-brand-blue text-white p-5 w-40">
                <div className="font-display text-3xl font-semibold">5+</div>
                <div className="font-body text-xs mt-1 uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  лет опыта
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ────────────────────────── */}
      <section className="py-24 bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="section-label"><span>Что мы делаем</span></div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: 'var(--brand-dark)' }}>
                НАШИ УСЛУГИ
              </h2>
            </div>
            <button onClick={() => onNavigate('services')} className="btn-blue-outline self-start md:self-auto">
              Все услуги
              <Icon name="ArrowRight" size={15} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--brand-line)]">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white p-8 cursor-pointer group transition-colors hover:bg-brand-blue"
                onClick={() => onNavigate('services')}
              >
                <div className="w-10 h-10 flex items-center justify-center mb-6 border border-[var(--brand-line)] group-hover:border-white/30 transition-colors">
                  <Icon
                    name={s.icon}
                    size={18}
                    className="text-brand-blue group-hover:text-white transition-colors"
                    fallback="Wrench"
                  />
                </div>
                <h3
                  className="font-display text-lg font-medium mb-2 transition-colors group-hover:text-white"
                  style={{ color: 'var(--brand-dark)' }}
                >
                  {s.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed transition-colors group-hover:text-white/70"
                  style={{ color: 'var(--brand-gray)' }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <img src={WORK_IMG} alt="Строители" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(17,20,24,0.82)' }} />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue" />
        <div className="relative container mx-auto px-6 text-center">
          <div className="section-label justify-center" style={{ marginBottom: '1.2rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Начните сегодня</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6">
            ГОТОВЫ НАЧАТЬ ВАШ ПРОЕКТ?
          </h2>
          <p className="font-body text-base mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Оставьте заявку — свяжемся в течение часа для бесплатной консультации.
          </p>
          <button onClick={() => onNavigate('contacts')} className="btn-blue">
            Оставить заявку
            <Icon name="ArrowRight" size={15} />
          </button>
        </div>
      </section>
    </div>
  );
}