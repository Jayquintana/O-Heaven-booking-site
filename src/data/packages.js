// ─────────────────────────────────────────
// Package data — edit packages and features here
// ─────────────────────────────────────────

export const PACKAGES = [
  {
    id: "cart-only",
    number: "01",
    label: "Cart Only",
    name: "Package 1 — Cart Only",
    desc: "$150 booking fee + custom product quote — Includes 2 hours",
    featured: false,
    features: [
      "O'Heaven cart comes to your event",
      "You select products and quantities in advance",
      "We provide a custom quote for the products",
      "Attendees help themselves — host covers everything",
      "No staff included",
      "+$50 for each additional hour",
    ],
  },
  {
    id: "cart-staff",
    number: "02",
    label: "Most Popular",
    name: "Package 2 — Cart + Staff",
    desc: "$200 — Includes 2 hours",
    featured: true,
    features: [
      "O'Heaven cart with a dedicated server",
      "Attendees pay per item at the cart ($3, $4, $5)",
      "Professional setup and serving included",
      "+$75 for each additional hour",
    ],
  },
  {
    id: "pre-selected",
    number: "03",
    label: "Premium",
    name: "Package 3 — Pre-Selected Products + Staff",
    desc: "$200 booking fee + custom product quote — Includes 2 hours",
    featured: false,
    features: [
      "You select products and quantities in advance",
      "We provide a custom quote for the products",
      "Dedicated server on site",
      "Attendees receive items complimentary — host covers everything",
      "Perfect for corporate events, weddings, and school events",
      "+$75 for each additional hour",
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