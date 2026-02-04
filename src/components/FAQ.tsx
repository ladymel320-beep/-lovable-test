import React, { useState } from 'react';
import './FAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What is Website Builder Express?',
      answer: 'Website Builder Express is a powerful, user-friendly platform that allows you to create stunning, professional websites without any coding knowledge. With our drag-and-drop interface, premium templates, and advanced features, you can build and launch your website in minutes.'
    },
    {
      question: 'Do I need coding knowledge to use this platform?',
      answer: 'Not at all! Website Builder Express is designed for everyone, from complete beginners to experienced developers. Our intuitive interface makes it easy to create beautiful websites without writing a single line of code. However, if you do know code, you have the flexibility to customize further.'
    },
    {
      question: 'Can I use my own domain name?',
      answer: 'Yes! All our paid plans include the ability to connect your custom domain. You can either purchase a new domain through us or connect an existing domain you already own. We provide step-by-step instructions to make the process seamless.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer comprehensive support including email support for all users, priority support for Professional plans, and dedicated support for Enterprise customers. We also have an extensive knowledge base, video tutorials, and an active community forum to help you succeed.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely! There are no long-term contracts or cancellation fees. You can cancel your subscription at any time from your account settings. If you cancel, you\'ll continue to have access until the end of your billing period.'
    },
    {
      question: 'Is my website mobile-friendly?',
      answer: 'Yes! All websites created with Website Builder Express are fully responsive and mobile-optimized by default. Your site will look great and function perfectly on desktops, tablets, and smartphones without any extra work required.'
    },
    {
      question: 'How secure are the websites?',
      answer: 'Security is our top priority. All websites include free SSL certificates (HTTPS), automatic backups, DDoS protection, and enterprise-grade security measures. We comply with industry standards and regularly update our security protocols.'
    },
    {
      question: 'Can I migrate my existing website?',
      answer: 'Yes! We offer free migration assistance for Professional and Enterprise plans. Our team will help you transfer your existing website content, ensuring a smooth transition with minimal downtime. Contact our support team to get started.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about Website Builder Express
          </p>
        </div>

        <div className="faq-content">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-cta">
            <div className="faq-cta-card">
              <h3>Still have questions?</h3>
              <p>Can't find the answer you're looking for? Our friendly team is here to help.</p>
              <button className="faq-contact-button">Contact Support</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
