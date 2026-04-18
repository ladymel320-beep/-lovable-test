import React from 'react';
import './Pricing.css';

const partners = [
  { name: 'BMW Motorsport', tag: 'Partenaire historique' },
  { name: 'Red Bull Air Race', tag: 'Challenger Class' },
  { name: 'Stand 21', tag: 'Équipement pilote' },
  { name: 'FFA', tag: 'Fédération Française Aéronautique' },
  { name: 'Breitling', tag: 'Horlogerie de précision' },
  { name: 'Aéro-club de France', tag: 'Institution' },
  { name: 'Les Ailes du Petit Prince', tag: 'Ambassadrice' },
  { name: 'Total Energies', tag: 'Carburants aviation' },
];

const Pricing: React.FC = () => {
  return (
    <section id="partenaires" className="partners">
      <div className="container">
        <div className="partners-header">
          <span className="section-kicker">Soutiens</span>
          <h2 className="section-title">Partenaires &amp; Sponsors</h2>
          <div className="gold-rule center" />
          <p className="section-subtitle">
            Voler au plus haut niveau, c'est aussi une aventure collective. Merci à celles et ceux
            qui rendent ce parcours possible.
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((p) => (
            <div className="partner-card" key={p.name}>
              <div className="partner-logo" aria-hidden="true">
                {p.name
                  .split(' ')
                  .map((w) => w[0])
                  .slice(0, 3)
                  .join('')}
              </div>
              <div className="partner-name">{p.name}</div>
              <div className="partner-tag">{p.tag}</div>
            </div>
          ))}
        </div>

        <div className="partners-cta">
          <p>Vous souhaitez associer votre marque à cette aventure&nbsp;?</p>
          <a href="#contact" className="partners-button">Devenir partenaire</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
