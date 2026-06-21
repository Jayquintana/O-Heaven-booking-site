import './Hero.css';

const FLAVOR_PILLS = [
  '🍓 Strawberry Cream Paleta',
  '🦇 Batman Bar',
  '🥭 Mango Chamoy',
  '🍪 Cookies N\' Cream',
  '🎮 Sonic Bar',
  '🍫 Snickers King Size',
  '🌈 Bunny Tracks Sundae',
  '🍊 Orange Dream',
  '🧁 Strawberry Shortcake',
];

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="home">
      <div className="hero-top">
        <div className="hero-headlines">
          <div className="hero-headline">Denver's</div>
          <div className="hero-headline">Sweetest</div>
        </div>
        <div className="hero-sticker">
          <span>An Ice<br />Cream<br />O'Heaven<br />Joint ✦</span>
        </div>
      </div>

      <div className="hero-mid">
        <div className="hero-headline">Ice Cream</div>
        <div className="hero-badge">Parties & Events 🍦</div>
      </div>

      <div className="hero-headline hero-last">Cart.</div>

      <div className="hero-strip">
        <div className="hero-strip-inner">
          {[...FLAVOR_PILLS, ...FLAVOR_PILLS].map((pill, i) => (
            <span key={i} className="flavor-pill">{pill}</span>
          ))}
        </div>
        <button
          className="scroll-tag"
          onClick={() => scrollTo('menu')}
        >
          Scroll to explore ↓
        </button>
      </div>
    </section>
  );
}
