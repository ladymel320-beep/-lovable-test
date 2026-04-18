import React from 'react';
import './FAQ.css';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: '2024',
    title: 'Championne Nationale Britannique',
    description:
      "Victoire à l'Open International d'Angleterre. Première femme britannique à monter sur un podium international mixte avec une médaille FAI."
  },
  {
    year: '2017',
    title: 'Vainqueure de la Red Bull Air Race d\'Indianapolis',
    description:
      'Première femme de l\'histoire à remporter une course du Red Bull Air Race World Championship, au cœur du mythique Indianapolis Motor Speedway.'
  },
  {
    year: '2016',
    title: 'Entrée dans la Red Bull Air Race',
    description:
      'Première femme sélectionnée en catégorie Challenger du Red Bull Air Race World Championship. Podium à Abu Dhabi.'
  },
  {
    year: '2015',
    title: 'Équipe de France Unlimited',
    description:
      'Intégration de l\'équipe de France de voltige aérienne Unlimited, la plus haute catégorie de la discipline.'
  },
  {
    year: '2014',
    title: 'Championne du monde féminine Advanced',
    description:
      'Première du classement féminin et 7ᵉ au classement général des Championnats du Monde Advanced.'
  },
  {
    year: '2007',
    title: 'Championne de France Espoir',
    description:
      'Premier titre national, un an seulement après la découverte de la voltige aérienne.'
  },
  {
    year: '2006',
    title: 'Découverte de la voltige',
    description:
      'Coup de foudre pour la voltige aérienne — une discipline qui deviendra une véritable vocation.'
  },
  {
    year: '2003',
    title: 'Brevet de pilote privée',
    description:
      'Obtention du PPL à 21 ans, après un DAEU et des années de sacrifices pour financer sa formation.'
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="palmares" className="palmares">
      <div className="container">
        <div className="palmares-header">
          <span className="section-kicker">Parcours</span>
          <h2 className="section-title">Palmarès &amp; faits d'armes</h2>
          <div className="gold-rule center" />
          <p className="section-subtitle">
            Vingt années de passion, de titres et de premières historiques — de la voltige nationale
            aux circuits internationaux.
          </p>
        </div>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={item.year}>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.description}</p>
              </div>
              <div className="timeline-dot" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
