import React from 'react';
import './Pricing.css';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      description: 'Perfect for small projects and personal websites',
      features: [
        '5 Projects',
        'Basic Templates',
        'Community Support',
        'Mobile Responsive',
        '10GB Storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '79',
      description: 'Best for professionals and growing businesses',
      features: [
        'Unlimited Projects',
        'Premium Templates',
        'Priority Support',
        'Advanced Features',
        '100GB Storage',
        'Custom Domain',
        'Analytics Dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '199',
      description: 'For large teams and organizations',
      features: [
        'Everything in Pro',
        'Dedicated Support',
        'Custom Development',
        'Team Collaboration',
        'Unlimited Storage',
        'API Access',
        'White Label Option',
        'Advanced Security'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="pricing-subtitle">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/month</span>
              </div>
              <p className="plan-description">{plan.description}</p>

              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`plan-button ${plan.popular ? 'popular-button' : ''}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <p className="pricing-note">
          All plans include SSL certificate, 99.9% uptime guarantee, and can be cancelled anytime.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
