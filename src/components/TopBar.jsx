import './TopBar.css';
import logo from '../assets/isolated heaven.png';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-social">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
      </div>
      <div className="topbar-logo">
        <img src={logo} alt="Isolated Heaven" />
      </div>
      <div className="topbar-links">
        <a href="#menu">Menu</a>
        <a href="#packages">Packages</a>
        <a href="#book">Contact</a>
      </div>
    </div>
  );
}
