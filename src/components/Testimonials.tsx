import React from 'react';
import './Testimonials.css';

const quotes = [
  {
    text: "Mélanie Astles, première femme à décrocher une victoire en Red Bull Air Race, symbolise l'élégance et la détermination d'une génération de pilotes qui ne connaît plus de plafond.",
    source: 'Le Figaro',
    type: 'Presse écrite',
  },
  {
    text: "Six titres de championne de France, une carrière internationale : Mélanie incarne la voltige aérienne française au plus haut niveau.",
    source: 'Fédération Française Aéronautique',
    type: 'Institution',
  },
  {
    text: "Une trajectoire hors norme, de la station-service aux cockpits les plus convoités au monde — l'histoire de Mélanie Astles inspire par sa rigueur et sa passion.",
    source: 'Vice Sports',
    type: 'Interview',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="presse" className="press">
      <div className="container">
        <div className="press-header">
          <span className="section-kicker">Presse</span>
          <h2 className="section-title">Ils en parlent</h2>
          <div className="gold-rule center" />
          <p className="section-subtitle">
            Retrouvez Mélanie Astles dans les médias français et internationaux — de la télévision
            aux plus grands titres de la presse spécialisée.
          </p>
        </div>

        <div className="press-grid">
          {quotes.map((q) => (
            <figure className="press-card" key={q.source}>
              <div className="quote-mark" aria-hidden="true">&ldquo;</div>
              <blockquote>{q.text}</blockquote>
              <figcaption>
                <span className="press-source">{q.source}</span>
                <span className="press-type">{q.type}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="press-logos" aria-label="Médias">
          {['BFMTV', 'Le Figaro', 'France 3', 'Vice', 'Paris Match', 'RTL', 'L\'Équipe'].map((m) => (
            <span key={m} className="press-logo">{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
