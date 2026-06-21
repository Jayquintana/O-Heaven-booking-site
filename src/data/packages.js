// ─────────────────────────────────────────
// Package data — edit packages and features here
// ─────────────────────────────────────────

export const PACKAGES = [
  {
    id: "cart-only",
    number: "01",
    label: "Starter",
    name: "Cart Only",
    desc: "The cart, the ice cream, the smiles.",
    featured: false,
    features: [
      "Full product selection",
      "Self-serve setup",
      "$100 deposit to book",
      "Up to 2 hours",
    ],
  },
  {
    id: "cart-flavors",
    number: "02",
    label: "Most Popular",
    name: "Cart + Custom Flavors",
    desc: "Custom flavors that match your event vibe.",
    featured: true,
    features: [
      "Everything in Starter",
      "Custom flavor selection",
      "Themed for your event",
      "Up to 3 hours",
    ],
  },
  {
    id: "cart-staff",
    number: "03",
    label: "Full Service",
    name: "Cart + Setup + Staff",
    desc: "We show up, set up, and serve all night.",
    featured: false,
    features: [
      "Everything included",
      "Professional setup",
      "Dedicated server on-site",
      "Up to 4 hours",
    ],
  },
  {
    id: "all-inclusive",
    number: "04",
    label: "Premium",
    name: "All Inclusive",
    desc: "The full O'Heaven experience.",
    featured: false,
    features: [
      "Full party package",
      "Custom menu + staff",
      "Setup & breakdown",
      "Unlimited time",
    ],
  },
];

export const EVENT_TYPES = [
  "Birthday party",
  "Corporate event",
  "Wedding",
  "School event",
  "Neighborhood party",
  "Other",
];
