import { MENU } from '../data/menu';
import './Menu.css';

export default function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="menu-inner">
        <p className="section-eyebrow">What we serve</p>
        <h2 className="big-title">The Menu.</h2>
        <div className="menu-grid">
          {MENU.map((cat) => (
            <div
              key={cat.id}
              className={`menu-card menu-card--${cat.accent}`}
            >
              <div className="menu-price-tag">{cat.price}</div>
              <h3 className="menu-card-title">{cat.category}</h3>
              <ul className="menu-card-list">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
