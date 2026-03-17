interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer style={{ backgroundColor: 'var(--brand-dark)' }} className="text-white">
      <div className="h-0.5 bg-brand-blue w-full" />
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <button onClick={() => onNavigate('home')} className="flex items-center gap-3 mb-5">
              <div className="relative w-8 h-8 flex-shrink-0">
                <div className="absolute inset-0 bg-brand-blue" />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5" style={{ backgroundColor: 'var(--brand-blue-hover)' }} />
                <span className="relative z-10 flex items-center justify-center h-full text-white font-display font-bold text-xs">СД</span>
              </div>
              <span className="font-display font-semibold text-sm tracking-widest uppercase">СтройДом</span>
            </button>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Строительство одноэтажных домов под ключ.<br/>Работаем честно, строим надёжно.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Навигация
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'partners', label: 'Партнёры' },
                { id: 'contacts', label: 'Контакты' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left text-sm font-body transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Контакты
            </h4>
            <div className="flex flex-col gap-3 text-sm font-body" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <span>+7 (000) 000-00-00</span>
              <span>info@strojdom.ru</span>
              <span>г. Москва и Московская область</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-xs font-body" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © 2024 СтройДом. Все права защищены.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-4 h-px bg-brand-blue" />
            <span className="text-xs font-display tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Строим с душой
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
