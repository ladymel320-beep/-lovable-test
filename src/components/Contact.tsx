import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Merci d\'indiquer votre nom';
    if (!formData.email.trim()) newErrors.email = 'Merci d\'indiquer votre email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Adresse email invalide';
    if (!formData.subject.trim()) newErrors.subject = 'Merci d\'indiquer un sujet';
    if (!formData.message.trim()) newErrors.message = 'Merci de rédiger un message';
    else if (formData.message.trim().length < 10)
      newErrors.message = 'Votre message est trop court (10 caractères minimum)';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 3500);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <span className="section-kicker">Contact</span>
            <h2 className="section-title">Prenons contact</h2>
            <div className="gold-rule" />
            <p className="contact-description">
              Conférences, interviews, partenariats, événements sportifs ou invitations&nbsp;—
              écrivez‑moi directement. Je vous réponds personnellement dans les meilleurs délais.
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon">✉</div>
                <div className="detail-text">
                  <h4>Email</h4>
                  <p>contact@melanieastles.info</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">✈</div>
                <div className="detail-text">
                  <h4>Représentation &amp; booking</h4>
                  <p>Agence conférences &amp; événementiel</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">◎</div>
                <div className="detail-text">
                  <h4>Localisation</h4>
                  <p>Sud de la France · Déplacements internationaux</p>
                </div>
              </div>
            </div>

            <div className="social-row">
              <a href="#" aria-label="Instagram" className="social-pill">Instagram</a>
              <a href="#" aria-label="Facebook" className="social-pill">Facebook</a>
              <a href="#" aria-label="LinkedIn" className="social-pill">LinkedIn</a>
              <a href="#" aria-label="YouTube" className="social-pill">YouTube</a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message envoyé&nbsp;!</h3>
                <p>Merci pour votre message. Je vous répondrai dès que possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="Votre nom"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="votre.email@exemple.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                    placeholder="Conférence, interview, partenariat…"
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Détaillez votre projet ou votre demande…"
                    rows={5}
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="submit-button">
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
