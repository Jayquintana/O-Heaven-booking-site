import { useState, useEffect } from 'react';
import './Hero.css';

import slide1 from '../assets/hero images/170A6143.JPG';
import slide2 from '../assets/hero images/170A6157.JPG';
import slide3 from '../assets/hero images/Oheaven Ice Cream Cart.png';
import slide4 from '../assets/hero images/170A6995.jpg' ;
import slide5 from '../assets/hero images/170A6996.jpg' ;

const SLIDES = [slide3, slide4, slide5, slide1, slide2];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-body">
        <div className="hero-left">
          <div className="hero-top">
            <div className="hero-headlines">
              <div className="hero-headline">Denver's</div>
              <div className="hero-headline">Sweetest</div>
            </div>
          </div>

          <div className="hero-mid">
            <div className="hero-headline">Ice Cream</div>
          </div>

          <div className="hero-headline hero-last">Cart.</div>

          <button
            className="hero-book-btn"
            onClick={() => scrollTo('book')}
          >
            Book an event
          </button>
        </div>

        <div className="hero-right">
          <div className="hero-slideshow">
            {SLIDES.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className={`hero-slide ${i === current ? 'hero-slide--active' : ''}`}
              />
            ))}
            <div className="hero-slide-dots">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`hero-dot ${i === current ? 'hero-dot--active' : ''}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
