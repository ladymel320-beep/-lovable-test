import React from 'react';
import './CTA.css';

const CTA: React.FC = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Build Something <span className="gradient-text">Amazing?</span>
          </h2>
          <p className="cta-description">
            Join thousands of creators building beautiful websites with Website Builder Express. 
            Start your free trial today - no credit card required.
          </p>
          <div className="cta-buttons">
            <button className="cta-primary-button">Start Free Trial</button>
            <button className="cta-secondary-button">Schedule Demo</button>
          </div>
          <p className="cta-note">
            ✨ 14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
        
        <div className="cta-stats">
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100K+</div>
            <div className="stat-label">Websites Created</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Customer Rating</div>
          </div>
        </div>
      </div>
      
      <div className="cta-background">
        <div className="cta-orb orb-1"></div>
        <div className="cta-orb orb-2"></div>
      </div>
    </section>
  );
};

export default CTA;
