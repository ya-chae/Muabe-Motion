import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technology from './components/Technology';
import Demo from './components/Demo';
import Architecture from './components/Architecture';
import Products from './components/Products';
import Industries from './components/Industries';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // 1. Section navigation tracking
    const handleScroll = () => {
      const sections = ['hero', 'technology', 'demo', 'products', 'contact'];
      const scrollPosition = window.scrollY + 120;

      const isBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;

      if (isBottom) {
        setActiveSection('contact');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    // 2. Scroll Reveal Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15, // Trigger at 15% visibility as requested
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => revealObserver.observe(el));

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative bg-bg-0 min-h-screen selection:bg-accent selection:text-white">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="technology">
          <Technology />
        </section>

        <section id="demo" className="bg-bg-1">
          <Demo />
        </section>

        <section id="architecture" className="bg-bg-0">
          <Architecture />
        </section>

        <section id="products" className="bg-bg-1">
          <Products />
        </section>

        <section id="industries" className="bg-bg-0">
          <Industries />
        </section>

        <section id="contact" className="bg-bg-1">
          <Contact />
        </section>
      </main>

      <footer className="py-20 border-t border-border-subtle bg-bg-0 text-center text-text-3 text-[12px] tracking-[0.4em] uppercase">
        <p>&copy; {new Date().getFullYear()} MUABE MOTION, INC. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default App;