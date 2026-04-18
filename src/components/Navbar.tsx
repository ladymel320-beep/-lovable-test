import React, { useEffect, useState } from 'react';
import './Navbar.css';

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#biographie', label: 'Biographie' },
  { href: '#palmares', label: 'Palmarès' },
  { href: '#partenaires', label: 'Partenaires' },
  { href: '#presse', label: 'Presse' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#accueil" className="nav-logo" onClick={() => setIsMenuOpen(false)}>
          <span className="logo-mark">MA</span>
          <span className="logo-text">
            <span className="logo-name">Mélanie Astles</span>
            <span className="logo-tag">Pilote de voltige aérienne</span>
          </span>
        </a>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="cta-button">Me contacter</a>

        <button
          className="hamburger"
          aria-label="Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
