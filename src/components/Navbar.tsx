import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { id: 'home',     label: 'Главная'  },
  { id: 'services', label: 'Услуги'   },
  { id: 'partners', label: 'Партнёры' },
  { id: 'contacts', label: 'Контакты' },
];

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="h-0.5 bg-brand-blue w-full" />
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-3">
          <div className="relative w-8 h-8 flex-shrink-0">
            <div className="absolute inset-0 bg-brand-blue" />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5" style={{ backgroundColor: 'var(--brand-blue-hover)' }} />
            <span className="relative z-10 flex items-center justify-center h-full text-white font-display font-bold text-xs">СД</span>
          </div>
          <span className="font-display font-semibold text-sm tracking-widest uppercase" style={{ color: 'var(--brand-dark)' }}>
            СтройДом
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`font-display text-xs tracking-widest uppercase transition-colors relative group ${
                activePage === link.id ? 'text-brand-blue' : 'hover:text-brand-blue'
              }`}
              style={{ color: activePage === link.id ? 'var(--brand-blue)' : 'var(--brand-dark)' }}
            >
              {link.label}
              <span className={`absolute -bottom-0.5 left-0 h-px bg-brand-blue transition-all duration-300 ${
                activePage === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
          <button onClick={() => onNavigate('contacts')} className="btn-blue py-2.5 px-5 text-xs">
            Связаться
          </button>
        </nav>

        <button className="md:hidden" style={{ color: 'var(--brand-dark)' }} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t" style={{ borderColor: 'var(--brand-line)' }}>
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
                className="text-left font-display tracking-widest uppercase text-xs py-3 border-b"
                style={{
                  borderColor: 'var(--brand-line)',
                  color: activePage === link.id ? 'var(--brand-blue)' : 'var(--brand-dark)',
                }}
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => { onNavigate('contacts'); setMenuOpen(false); }} className="btn-blue mt-3 justify-center">
              Связаться
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
