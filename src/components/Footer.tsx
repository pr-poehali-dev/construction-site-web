interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & desc */}
          <div>
            <button onClick={() => onNavigate('home')} className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-brand-blue rounded-sm" />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-brand-red rounded-sm" />
                <span className="relative z-10 text-white font-display font-bold text-sm">СД</span>
              </div>
              <span className="font-display font-semibold text-xl tracking-wide">СТРОЙДОМ</span>
            </button>
            <p className="text-white/50 text-sm font-body leading-relaxed">
              Строительство одноэтажных домов под ключ. Работаем честно, строим надёжно.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-xs tracking-widest uppercase text-white/40 mb-5">Навигация</h4>
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
                  className="text-left text-white/60 hover:text-white transition-colors text-sm font-body"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-display text-xs tracking-widest uppercase text-white/40 mb-5">Контакты</h4>
            <div className="flex flex-col gap-3 text-sm font-body text-white/60">
              <span>+7 (000) 000-00-00</span>
              <span>info@strojdom.ru</span>
              <span>г. Москва и Московская область</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-body">
            © 2024 СтройДом. Все права защищены.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-red rounded-full" />
            <span className="text-white/30 text-xs font-body">Строим с душой</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
