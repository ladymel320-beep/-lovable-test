import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Stunning, modern interfaces that captivate users and enhance brand identity.'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance ensuring your site loads instantly on any device.'
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Perfect experience across all devices - mobile, tablet, and desktop.'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Built with security best practices and reliable infrastructure in mind.'
    },
    {
      icon: '🚀',
      title: 'Easy to Deploy',
      description: 'Streamlined deployment process gets your site live in minutes.'
    },
    {
      icon: '💡',
      title: 'Innovative Features',
      description: 'Cutting-edge functionality that keeps you ahead of the competition.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="features-subtitle">
            Powerful features designed to help you build amazing digital experiences
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
