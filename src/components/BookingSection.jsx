import BookingForm from './BookingForm';
import './BookingSection.css';

export default function BookingSection({ selectedPackage, onPackageUsed }) {
  return (
    <section className="booking-section" id="book">
      <div className="booking-inner">
        <p className="section-eyebrow">Let's do this</p>
        <h2 className="big-title">Request a Booking</h2>
        <BookingForm
          selectedPackage={selectedPackage}
          onPackageUsed={onPackageUsed}
        />
      </div>
    </section>
  );
}
