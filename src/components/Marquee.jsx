import './Marquee.css';

const ITEMS = [
  'Mobile Ice Cream', 'Denver CO', 'Private Events', 'Birthday Parties',
  'Corporate Events', 'Novelty Ice Cream', 'Book The Cart', "O'Heaven LLC",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}<span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
