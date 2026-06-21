import { useState } from 'react';

// Styles
import './styles/global.css';

// Components
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Menu from './components/Menu';
import Packages from './components/Packages';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

export default function App() {
  // Lifted state so clicking a package card pre-fills the booking form
  const [selectedPackage, setSelectedPackage] = useState('');

  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Marquee />
      <Menu />
      <Packages onSelect={setSelectedPackage} />
      <BookingSection
        selectedPackage={selectedPackage}
        onPackageUsed={() => setSelectedPackage('')}
      />
      <Footer />
    </>
  );
}
