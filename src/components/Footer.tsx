import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-mark">MA</span>
            <div>
              <div className="footer-name">Mélanie Astles</div>
              <div className="footer-tag">Pilote de voltige aérienne</div>
            </div>
          </div>
          <p className="footer-tagline">
            Championne de France, pionnière de la Red Bull Air Race et ambassadrice de la voltige
            aérienne française.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Site</h4>
            <a href="#biographie">Biographie</a>
            <a href="#palmares">Palmarès</a>
            <a href="#partenaires">Partenaires</a>
            <a href="#presse">Presse</a>
          </div>

          <div className="footer-column">
            <h4>Demandes</h4>
            <a href="#contact">Conférences</a>
            <a href="#contact">Interviews</a>
            <a href="#contact">Partenariats</a>
            <a href="#contact">Événements</a>
          </div>

          <div className="footer-column">
            <h4>Suivre</h4>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>&copy; {year} Mélanie Astles — Tous droits réservés.</p>
        <p className="footer-legal">
          <a href="#">Mentions légales</a> · <a href="#">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
