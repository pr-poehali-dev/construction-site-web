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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}
      style={{ backgroundColor: 'var(--brand-gray-light)', borderBottom: '1px solid var(--brand-line)' }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-3">
          <div
            className="w-8 h-8 flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'var(--brand-blue)' }}
          >
            <span className="text-white font-display font-bold text-xs" style={{ fontFamily: 'Playfair Display, serif' }}>СД</span>
          </div>
          <span
            className="font-display font-semibold text-base"
            style={{ color: 'var(--brand-dark)', fontFamily: 'Playfair Display, serif' }}
          >
            СтройДом
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="font-body text-sm transition-colors relative group"
              style={{ color: activePage === link.id ? 'var(--brand-blue)' : 'var(--brand-dark)' }}
            >
              {link.label}
              <span
                className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                style={{
                  backgroundColor: 'var(--brand-blue)',
                  width: activePage === link.id ? '100%' : '0',
                }}
              />
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
        <div style={{ backgroundColor: 'var(--brand-gray-light)', borderTop: '1px solid var(--brand-line)' }}>
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
                className="text-left font-body text-sm py-3 border-b"
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
