// ──────────────────────────────────────────────────────────────────────────
// Central source of truth for all MurliLeela contact + brand info.
// Update here once; Footer, Contact, Careers, and metadata all read from this.
// ──────────────────────────────────────────────────────────────────────────

export const CONTACT = {
  company: "MurliLeela Private Limited",

  // Phone — used for tel: and WhatsApp. Digits only for wa.me / tel href.
  phoneDisplay: "+91 97844 87346",
  phoneDigits: "919784487346", // for tel: and wa.me
  whatsappUrl: "https://wa.me/919784487346",

  // Email
  email: "info@murlilila.com",

  // Address
  addressLine1: "E-514, Ganesh Glory 11",
  addressLine2: "Jagatpur Road, near BSNL Office, off SG Highway",
  addressCity: "Jagatpur, Ahmedabad, Gujarat 382470",
  addressShort: "Ganesh Glory 11, Jagatpur, Ahmedabad",
  // Registered presence
  presence: "Ahmedabad, Gujarat · Jodhpur, Rajasthan",

  // Google Maps
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ganesh+Glory+11+Jagatpur+Ahmedabad",

  // Social
  linkedinCompany: "https://www.linkedin.com/company/murlilila/",
  linkedinCeo: "https://www.linkedin.com/in/pratik-gaur-6ab6b673",

  // Convenience pre-filled WhatsApp links
  whatsappGeneral:
    "https://wa.me/919784487346?text=" +
    encodeURIComponent("Hi MurliLeela, I'd like to know more about your services."),
  whatsappFurniture:
    "https://wa.me/919784487346?text=" +
    encodeURIComponent("Hi MurliLeela, I'm interested in your furniture collection."),
  whatsappRealEstate:
    "https://wa.me/919784487346?text=" +
    encodeURIComponent("Hi MurliLeela, I'd like to discuss a real estate enquiry."),
  whatsappCareers:
    "https://wa.me/919784487346?text=" +
    encodeURIComponent("Hi MurliLeela, I'd like to enquire about career opportunities."),
} as const;
