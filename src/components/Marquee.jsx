import './Marquee.css';

const ITEMS = [
  'Private Events', 'Birthday Parties',
  'Corporate Events', 'Farmers Markets', 'Quinceañeras',
  'Graduation parties', 'Baby showers and gender reveals',
  'Anniversary parties', 'Office appreciation days',
  'Real estate open houses'
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
