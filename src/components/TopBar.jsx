import './TopBar.css';
import logo from '../assets/isolated heaven.png';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-social">
        <a href="https://www.instagram.com/oheavenicecream?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.tiktok.com/@oheavenicecream?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer">TikTok</a>
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
