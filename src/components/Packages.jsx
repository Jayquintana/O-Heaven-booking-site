import { PACKAGES } from '../data/packages';
import './Packages.css';

export default function Packages({ onSelect }) {
  const handleSelect = (pkgName) => {
    onSelect(pkgName);
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pkg-section" id="packages">
      <div className="pkg-inner">
        <p className="section-eyebrow pkg-eyebrow-label">How we roll</p>
        <h2 className="big-title">Pick Your Package.</h2>
        <div className="pkg-grid">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`pkg-card${pkg.featured ? ' pkg-card--featured' : ''}`}
              onClick={() => handleSelect(pkg.name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect(pkg.name)}
            >
              <div className="pkg-number">{pkg.number}</div>
              <p className="pkg-label">{pkg.label}</p>
              <h3 className="pkg-name">{pkg.name}</h3>
              <p className="pkg-desc">{pkg.desc}</p>
              <ul className="pkg-features">
                {pkg.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
