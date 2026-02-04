import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Build Amazing
            <span className="gradient-text"> Experiences</span>
          </h1>
          <p className="hero-description">
            Create stunning, modern websites that captivate your audience. 
            Fast, beautiful, and built for the future.
          </p>
          <div className="hero-buttons">
            <a href="/builder" className="primary-button">Start Building</a>
            <a href="#features" className="secondary-button">Learn More</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">🚀</div>
            <div className="card-text">Fast Performance</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">💎</div>
            <div className="card-text">Beautiful Design</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">⚡</div>
            <div className="card-text">Modern Stack</div>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
};

export default Hero;
