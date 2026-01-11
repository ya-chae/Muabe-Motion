import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial mount reveal
    setTimeout(() => setIsVisible(true), 100);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Technology', id: 'technology' },
    { name: 'Demo', id: 'demo' },
    { name: 'Products', id: 'products' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-700 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'}
      `}
    >
      <nav 
        className={`
          flex items-center justify-between px-6 md:px-8 transition-all duration-500 rounded-full border w-full max-w-[1200px] py-4
          ${isScrolled 
            ? 'bg-bg-0/80 backdrop-blur-2xl border-white/10 shadow-2xl scale-[0.98] md:scale-100' 
            : 'bg-white/5 backdrop-blur-lg border-white/5'}
        `}
      >
        <div 
          className="cursor-pointer transition-base hover:opacity-80 active:scale-95 flex items-center shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Logo size="custom" variant="horizontal" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative text-[15px] tracking-[0.2em] uppercase transition-all duration-300 font-bold px-2 group flex flex-col items-center
                ${activeSection === item.id ? 'text-accent' : 'text-text-1/60 hover:text-text-1'}
              `}
            >
              {item.name}
              <span className={`
                absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-accent transition-all duration-300
                ${activeSection === item.id ? 'opacity-100 scale-100 shadow-[0_0_10px_rgba(255,59,77,1)]' : 'opacity-0 scale-0 group-hover:opacity-40 group-hover:scale-100'}
              `} />
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center text-text-1 transition-base hover:text-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          lg:hidden absolute top-[100px] left-6 right-6 bg-bg-0/95 backdrop-blur-3xl border border-white/10 rounded-[32px] overflow-hidden transition-all duration-500 ease-in-out shadow-2xl
          ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-8 py-10 flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`
                flex items-center text-[15px] tracking-[0.2em] uppercase transition-all duration-300 font-bold
                ${activeSection === item.id ? 'text-accent' : 'text-text-1/50'}
              `}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;