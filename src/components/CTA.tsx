import React from 'react';
import './CTA.css';

const CTA: React.FC = () => {
  return (
    <section className="conferences">
      <div className="conferences-backdrop" aria-hidden="true">
        <div className="conf-orb orb-a" />
        <div className="conf-orb orb-b" />
      </div>
      <div className="container conferences-inner">
        <div className="conferences-content">
          <span className="section-kicker gold">Conférences &amp; Événements</span>
          <h2 className="conferences-title">
            Inviter Mélanie&nbsp;:<br/>
            <span className="accent">la voltige comme moteur&nbsp;d'inspiration.</span>
          </h2>
          <p className="conferences-text">
            Entreprises, écoles, événements sportifs&nbsp;— Mélanie partage son parcours,
            sa méthode et sa passion pour transmettre des valeurs de dépassement,
            de résilience et d'engagement.
          </p>
          <div className="conf-topics">
            <span className="topic-chip">Motivation</span>
            <span className="topic-chip">Leadership</span>
            <span className="topic-chip">Femmes &amp; sport</span>
            <span className="topic-chip">Gestion du stress</span>
            <span className="topic-chip">Performance</span>
          </div>
          <a href="#contact" className="conferences-button">Organiser une conférence</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
