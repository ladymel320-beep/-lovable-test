import React from 'react';
import './Biography.css';

const Biography: React.FC = () => {
  return (
    <section id="biographie" className="biography">
      <div className="container bio-grid">
        <div className="bio-visual">
          <div className="bio-portrait" aria-hidden="true">
            <div className="portrait-frame">
              <div className="portrait-silhouette">
                <svg viewBox="0 0 200 260" width="100%" height="100%">
                  <defs>
                    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#0a1f3d" />
                    </linearGradient>
                  </defs>
                  <rect width="200" height="260" fill="url(#skyGrad)" />
                  <circle cx="100" cy="95" r="38" fill="#fdf6e3" opacity="0.95" />
                  <path d="M40 260 Q100 140 160 260 Z" fill="#fdf6e3" opacity="0.95" />
                  <path d="M10 200 L70 194 L100 188 L130 194 L190 200" stroke="#fbbf24" strokeWidth="1.5" fill="none" opacity="0.7" />
                </svg>
              </div>
            </div>
            <div className="portrait-caption">
              <span className="cap-year">Depuis 2006</span>
              <span className="cap-title">Pilote de voltige</span>
            </div>
          </div>
        </div>

        <div className="bio-text">
          <span className="section-kicker">Biographie</span>
          <h2 className="section-title">Un rêve d'enfant<br/>devenu vocation.</h2>
          <div className="gold-rule" />
          <p>
            Née en 1982 à Rugby, en Angleterre, Mélanie Astles grandit dans le sud de la France.
            Très jeune, elle développe une passion pour l'aviation et se fixe un objectif qui paraît
            inaccessible&nbsp;: devenir pilote.
          </p>
          <p>
            À 18 ans, sans baccalauréat, elle travaille dans une station-service pour financer sa
            formation. Elle passe le DAEU, puis décroche sa licence de pilote privée à 21 ans. En 2006,
            elle découvre la voltige aérienne&nbsp;— un coup de foudre qui changera sa vie.
          </p>
          <p>
            Dès 2007, elle devient Championne de France Espoir. Depuis, elle collectionne les titres&nbsp;:
            <strong> 6 fois Championne de France</strong>, membre de l'équipe de France, et en 2016 elle
            entre dans l'histoire en devenant la <strong>première femme à participer au Red Bull Air
            Race World Championship</strong>. Un an plus tard, elle remporte l'étape d'Indianapolis —
            une première mondiale pour une femme.
          </p>
          <p>
            En 2024, elle décroche l'Open International d'Angleterre et devient Championne Nationale
            Britannique, première femme britannique à monter sur un podium international mixte avec
            une médaille FAI.
          </p>

          <blockquote className="bio-quote">
            «&nbsp;Voler, c'est faire le choix de la liberté&nbsp;— et se donner les moyens de
            l'assumer.&nbsp;»
            <cite>— Mélanie Astles</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Biography;
