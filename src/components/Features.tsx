import React from 'react';
import './Features.css';

const stats = [
  { value: '6', label: 'Titres de Championne de France de voltige' },
  { value: '1ʳᵉ', label: "Femme de l'histoire de la Red Bull Air Race" },
  { value: '4', label: 'Podiums en Red Bull Air Race Challenger' },
  { value: '2024', label: 'Championne Nationale Britannique' },
];

const Features: React.FC = () => {
  return (
    <section id="chiffres" className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
