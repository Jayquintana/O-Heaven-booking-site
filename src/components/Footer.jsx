import './Footer.css';

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="footer-name">O'Heaven</span>
        <small>An Ice Cream Joint · Denver, CO</small>
      </div>

      <nav className="footer-links">
        <a href="#menu" onClick={(e) => { e.preventDefault(); scrollTo('menu'); }}>Menu</a>
        <a href="#packages" onClick={(e) => { e.preventDefault(); scrollTo('packages'); }}>Packages</a>
        <a href="#book" onClick={(e) => { e.preventDefault(); scrollTo('book'); }}>Book</a>
        <a href="mailto:info@oheaven.com">Email us</a>
      </nav>

      <p className="footer-copy">© {new Date().getFullYear()} O'Heaven LLC</p>
    </footer>
  );
}
