import { useState } from 'react';
import { PACKAGES, EVENT_TYPES } from '../data/packages';
import './BookingForm.css';

const INITIAL_FORM = {
  fname: '', lname: '', email: '', phone: '',
  date: '', time: '', guests: '', eventType: '',
  package: '', location: '', notes: '',
};

export default function BookingForm({ selectedPackage, onPackageUsed }) {
  const [form, setForm] = useState({ ...INITIAL_FORM, package: selectedPackage || '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Sync selected package from Packages section
  if (selectedPackage && form.package !== selectedPackage) {
    setForm((f) => ({ ...f, package: selectedPackage }));
    onPackageUsed();
  }

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((err) => { const next = { ...err }; delete next[key]; return next; });
  };

  const validate = () => {
    const required = { fname: form.fname, email: form.email, date: form.date, package: form.package, location: form.location };
    const errs = {};
    Object.entries(required).forEach(([k, v]) => { if (!v || (k === 'email' && !v.includes('@'))) errs[k] = true; });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="booking-success">
        <div className="booking-success-icon">🍦</div>
        <h2>You're on the calendar!</h2>
        <p>Thanks for booking with O'Heaven! We'll reach out within 24 hours to confirm your event and collect your $100 deposit to lock in your date.</p>
      </div>
    );
  }

  return (
    <form className="booking-form-card" onSubmit={handleSubmit} noValidate>
      <div className="booking-deposit-strip">
        🍦 A $100 deposit holds your date — balance due at the event.
      </div>

      <div className="form-row">
        <div className="fg">
          <label htmlFor="fname">First name *</label>
          <input id="fname" value={form.fname} onChange={set('fname')} placeholder="John"
            className={errors.fname ? 'input-error' : ''} />
        </div>
        <div className="fg">
          <label htmlFor="lname">Last name</label>
          <input id="lname" value={form.lname} onChange={set('lname')} placeholder="Smith" />
        </div>
        <div className="fg">
          <label htmlFor="email">Email *</label>
          <input id="email" type="email" value={form.email} onChange={set('email')} placeholder="you@email.com"
            className={errors.email ? 'input-error' : ''} />
        </div>
        <div className="fg">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="(720) 555-0000" />
        </div>
        <div className="fg">
          <label htmlFor="date">Event date *</label>
          <input id="date" type="date" value={form.date} onChange={set('date')}
            className={errors.date ? 'input-error' : ''} />
        </div>
        <div className="fg">
          <label htmlFor="time">Event time</label>
          <input id="time" type="time" value={form.time} onChange={set('time')} />
        </div>
        <div className="fg">
          <label htmlFor="guests">Expected guests</label>
          <input id="guests" type="number" value={form.guests} onChange={set('guests')} placeholder="50" min="1" />
        </div>
        <div className="fg">
          <label htmlFor="eventType">Event type</label>
          <select id="eventType" value={form.eventType} onChange={set('eventType')}>
            <option value="">Select one...</option>
            {EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="fg">
        <label htmlFor="package">Package *</label>
        <select id="package" value={form.package} onChange={set('package')}
          className={errors.package ? 'input-error' : ''}>
          <option value="">Select a package...</option>
          {PACKAGES.map((p) => <option key={p.id}>{p.name}</option>)}
        </select>
      </div>

      <div className="fg">
        <label htmlFor="location">Event address *</label>
        <input id="location" value={form.location} onChange={set('location')}
          placeholder="123 Main St, Denver, CO"
          className={errors.location ? 'input-error' : ''} />
      </div>

      <div className="fg">
        <label htmlFor="notes">Anything else we should know?</label>
        <textarea id="notes" value={form.notes} onChange={set('notes')}
          placeholder="Theme, special requests, allergies, dietary needs..." />
      </div>

      {Object.keys(errors).length > 0 && (
        <p className="form-error-msg">Please fill in all required fields marked with *.</p>
      )}

      <button type="submit" className="booking-submit-btn">
        Book The Cart — $100 Deposit To Confirm
      </button>
    </form>
  );
}
