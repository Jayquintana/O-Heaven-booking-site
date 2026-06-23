import './Menu.css';

import img1 from '../assets/Menu images/2.8oz-Butterfinger-Bar-Wrap_Render.png';
import img2 from '../assets/Menu images/3.75oz-Powerpuff-Face-Bar-Wrap.png';
import img3 from '../assets/Menu images/3oz-BB-Cookies-N-Cream-Bar-Wrap.png';
import img4 from '../assets/Menu images/4.0oz-Batman-Face-Bar-Wrap.png';
import img5 from '../assets/Menu images/4.6oz-BB-Vanilla-Cone-Wrap.png';
import img6 from '../assets/Menu images/5.5-BB-Loadd-Sundaes-Bunny-Tracks-1024x964.png';
import img7 from '../assets/Menu images/6oz-BB-Big-Bopper-Wrap-2048x1433.png';
import img8 from '../assets/Menu images/Mango-400x245-1.png';
import img9 from '../assets/Menu images/Mango-Chamoy-400x245-1.png';
import img10 from '../assets/Menu images/Strawb-400x245-1.png';

const MENU_ITEMS = [
  'Paletas',
  'Novelty Pre-Packaged Ice Cream',
  'King Sized Bars',
  'Face Bars',
  'Bomb Pops / Push Pops / Cool Tubes',
  'Cones',
  'Sandwiches',
  'Scooped Ice Cream Per Request',
];

const MENU_PHOTOS = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="menu-inner">
        <p className="section-eyebrow">The Menu</p>
        <h2 className="big-title">What We Can Serve.</h2>

        <div className="menu-items">
          {MENU_ITEMS.map((item) => (
            <div key={item} className="menu-item">
              <span className="menu-item-dot" />
              {item}
            </div>
          ))}
        </div>

        <p className="section-eyebrow">Examples</p>
        <div className="menu-photos">
          {MENU_PHOTOS.map((photo, i) => (
            <div key={i} className="menu-photo">
              <img src={photo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
