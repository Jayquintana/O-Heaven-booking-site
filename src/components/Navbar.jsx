import './Navbar.css';

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#menu" onClick={(e) => { e.preventDefault(); scrollTo('menu'); }}>Menu</a>
        <a href="#packages" onClick={(e) => { e.preventDefault(); scrollTo('packages'); }}>Packages</a>
      </div>

      <div className="nav-logo">
        <img src="/logo.png" alt="O'Heaven Ice Cream" />
      </div>

      <div className="nav-right">
        <a href="#book" onClick={(e) => { e.preventDefault(); scrollTo('book'); }}>Contact</a>
        <a
          href="#book"
          className="nav-book-btn"
          onClick={(e) => { e.preventDefault(); scrollTo('book'); }}
        >
          Book an event
        </a>
      </div>
    </nav>
  );
}
