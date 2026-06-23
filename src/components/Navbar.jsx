import './Navbar.css';
import logo from '../assets/isolated heaven.png';

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
        <img src={logo} alt="Isolated Heaven" />
      </div>

    </nav>
  );
}
