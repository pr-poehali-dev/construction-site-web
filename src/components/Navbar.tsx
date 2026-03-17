import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Главная' },
  { id: 'services', label: 'Услуги' },
  { id: 'partners', label: 'Партнёры' },
  { id: 'contacts', label: 'Контакты' },
];

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-brand-blue rounded-sm" />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-brand-red rounded-sm" />
            <span className="relative z-10 text-white font-display font-bold text-sm leading-none">СД</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-display font-semibold text-lg tracking-wide transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
              СТРОЙДОМ
            </span>
            <span className={`text-[10px] tracking-widest uppercase font-body transition-colors ${scrolled ? 'text-brand-gray' : 'text-white/70'}`}>
              Строительство под ключ
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`font-display font-normal text-sm tracking-widest uppercase transition-all duration-200 relative group ${
                activePage === link.id
                  ? 'text-brand-blue'
                  : scrolled ? 'text-brand-dark hover:text-brand-blue' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-brand-red transition-all duration-300 ${
                  activePage === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}
          <button
            onClick={() => onNavigate('contacts')}
            className="bg-brand-red text-white font-display text-sm tracking-widest uppercase px-6 py-2.5 hover:bg-brand-blue transition-colors duration-300"
          >
            Связаться
          </button>
        </nav>

        {/* Mobile burger */}
        <button
          className={`md:hidden transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
                className={`text-left font-display tracking-widest uppercase text-sm py-2 border-b border-gray-100 ${
                  activePage === link.id ? 'text-brand-blue' : 'text-brand-dark'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { onNavigate('contacts'); setMenuOpen(false); }}
              className="bg-brand-red text-white font-display text-sm tracking-widest uppercase px-6 py-3 mt-2 text-center"
            >
              Связаться
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
