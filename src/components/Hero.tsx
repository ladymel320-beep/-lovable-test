import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="hero">
      <div className="hero-backdrop">
        <div className="sky-gradient" />
        <div className="contrail contrail-1" />
        <div className="contrail contrail-2" />
        <div className="contrail contrail-3" />
        <svg
          className="hero-plane"
          viewBox="0 0 120 40"
          aria-hidden="true"
        >
          <path
            d="M2 20 L60 16 L100 8 L110 10 L90 18 L118 20 L90 22 L110 30 L100 32 L60 24 L2 20 Z"
            fill="#fbbf24"
            stroke="#fff"
            strokeWidth="0.6"
          />
        </svg>
      </div>

      <div className="hero-content container">
        <div className="hero-kicker">
          <span className="kicker-line" />
          <span>Site officiel</span>
        </div>
        <h1 className="hero-title">
          Mélanie <span className="accent">Astles</span>
        </h1>
        <p className="hero-lead">
          Pilote de voltige aérienne · 6 fois Championne de France ·
          <br />
          Première femme de l'histoire à avoir remporté une course Red Bull Air Race.
        </p>
        <div className="hero-buttons">
          <a href="#biographie" className="primary-button">Découvrir mon parcours</a>
          <a href="#palmares" className="secondary-button">Voir le palmarès</a>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <span className="scroll-line" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
