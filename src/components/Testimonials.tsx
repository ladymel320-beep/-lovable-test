import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Founder, TechStart',
      image: '👩‍💼',
      rating: 5,
      text: 'Website Builder Express transformed how we build our web presence. The intuitive interface and powerful features saved us countless hours and thousands of dollars.'
    },
    {
      name: 'Michael Chen',
      role: 'Designer, CreativeHub',
      image: '👨‍🎨',
      rating: 5,
      text: 'As a designer, I appreciate the attention to detail and the beautiful templates. The customization options are endless, and the results are always stunning.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthCo',
      image: '👩‍💻',
      rating: 5,
      text: 'The best investment we made this year! Our website traffic increased by 150% within the first month. The performance and SEO features are top-notch.'
    },
    {
      name: 'David Park',
      role: 'Entrepreneur',
      image: '👨‍💼',
      rating: 5,
      text: 'I launched my business website in just 2 days without any coding knowledge. The support team is incredible, and the platform is so easy to use.'
    },
    {
      name: 'Lisa Anderson',
      role: 'Blogger, LifestyleDaily',
      image: '👩',
      rating: 5,
      text: 'Finally, a website builder that gets it right! Fast loading times, beautiful designs, and the pricing is very reasonable. Highly recommend!'
    },
    {
      name: 'James Wilson',
      role: 'CEO, InnovateLabs',
      image: '👨',
      rating: 5,
      text: 'We switched from our old platform and never looked back. The migration was smooth, and the features are exactly what a modern business needs.'
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Loved by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="testimonials-subtitle">
            See what our customers are saying about Website Builder Express
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.image}</div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-footer">
          <div className="trust-badges">
            <div className="trust-badge">
              <span className="badge-icon">🏆</span>
              <span className="badge-text">Award Winning</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">⭐</span>
              <span className="badge-text">4.9/5 Rating</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span className="badge-text">Trusted by 50K+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
