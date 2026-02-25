export const SITE = {
  name: "High Plains Raceway",
  tagline: "Colorado's Premier Amateur Racing Facility",
  phone: "303-769-4771",
  email: "info@highplainsraceway.com",
  trackManagerEmail: "trackmanager@highplainsraceway.com",
  registrationUrl: "https://www.motorsportreg.com",
  address: {
    street: "93301 E US Highway 36",
    city: "Deer Trail",
    state: "CO",
    zip: "80105",
  },
  mailing: {
    street: "PO Box 505",
    city: "Byers",
    state: "CO",
    zip: "80103",
  },
  coordinates: { lat: 39.6119, lng: -104.0369 },
  season: "April through October",
  operatingSeason: "January 1 through Thanksgiving",
  directions:
    "Approximately 60 miles east of Denver — 45 miles on I-70, then 17 miles south on Highway 36.",
  social: {
    facebook: "https://www.facebook.com/HighPlainsRaceway",
  },
};

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Calendar",
    href: "/calendar",
    children: [
      { label: "Event Calendar", href: "/calendar" },
    ],
  },
  {
    label: "Open Lapping",
    href: "/open-lapping",
    children: [
      { label: "Open Lapping Days", href: "/open-lapping" },
      { label: "Registration", href: "/open-lapping#registration" },
      { label: "Pricing & Passes", href: "/open-lapping#passes" },
      { label: "VIP Track Days", href: "/vip-track-days" },
      { label: "Customer Appreciation Days", href: "/customer-appreciation" },
      { label: "Track Day Insurance", href: "/insurance" },
    ],
  },
  {
    label: "Track Info",
    href: "/track-info",
    children: [
      { label: "Track Details & Location", href: "/track-info" },
      { label: "Amenities & Lodging", href: "/track-info#amenities" },
      { label: "Track Rental", href: "/track-info#rental" },
      { label: "Watch Racing", href: "/track-info#watch" },
      { label: "Go Racing", href: "/track-info#go-racing" },
      { label: "Facility Rules", href: "/track-info#rules" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About HPR", href: "/about" },
      { label: "History", href: "/about#history" },
      { label: "Sponsors", href: "/about#sponsors" },
      { label: "Founding Contributors", href: "/about#founders" },
    ],
  },
  {
    label: "RV / Carport",
    href: "/rv-rental",
  },
  { label: "Instruction", href: "/instruction" },
  { label: "FAQ", href: "/faq" },
  {
    label: "Contact",
    href: "/contact",
    children: [
      { label: "Contact Us", href: "/contact" },
      { label: "Member Clubs", href: "/contact#clubs" },
      { label: "Employment", href: "/employment" },
    ],
  },
];

export const TRACK_CONFIGURATIONS = [
  { name: "Full Course", length: "2.55 mi", active: true },
  { name: "West Course", length: "2.00 mi", active: false },
  { name: "North Course", length: "1.86 mi", active: false },
  { name: "Short Course", length: "1.28 mi", active: false },
];

export const TRACK_SPECS = [
  { label: "Full Course", value: "2.55 mi" },
  { label: "Turns", value: "15" },
  { label: "Elevation Change", value: "300+ ft" },
  { label: "Longest Straight", value: "2,838 ft" },
  { label: "Highest Point", value: "5,054 ft ASL" },
  { label: "Steepest Climb", value: "10%" },
  { label: "Steepest Banking", value: "4.0%" },
  { label: "Tightest Turn", value: "80 ft radius" },
];

export const TRACK_HERO_STATS = [
  { label: "Full Course", value: "2.55 mi" },
  { label: "Turns", value: "15" },
  { label: "Elevation Change", value: "300+ ft" },
  { label: "Configurations", value: "4" },
];

export const MOTORSPORTREG_URL = "https://highplainsraceway.motorsportreg.com/";

export type EventStatus = "tentative" | "confirmed";
export type EventCategory = "Cars Lapping" | "Motorcycles Lapping" | "Racing" | "Rental" | "Special Event";

export interface HPREvent {
  id: number;
  title: string;
  date: string;
  time: string;
  category: EventCategory;
  status: EventStatus;
}

export const ALL_EVENTS: HPREvent[] = [
  // Feb/Mar — Winter Lapping (Tentative, weather permitting)
  { id: 1, title: "Cars Lapping — Saturday", date: "2026-02-28", time: "11:00 AM – 3:00 PM", category: "Cars Lapping", status: "tentative" },
  { id: 2, title: "Motorcycles Lapping — Sunday", date: "2026-03-01", time: "11:00 AM – 3:00 PM", category: "Motorcycles Lapping", status: "tentative" },
  { id: 3, title: "Motorcycles Lapping — Saturday", date: "2026-03-07", time: "11:00 AM – 3:00 PM", category: "Motorcycles Lapping", status: "tentative" },
  { id: 4, title: "Cars Lapping — Sunday", date: "2026-03-08", time: "11:00 AM – 3:00 PM", category: "Cars Lapping", status: "tentative" },
  { id: 5, title: "Cars Lapping — Saturday", date: "2026-03-14", time: "11:00 AM – 3:00 PM", category: "Cars Lapping", status: "tentative" },
  { id: 6, title: "Motorcycles Lapping — Sunday", date: "2026-03-15", time: "11:00 AM – 3:00 PM", category: "Motorcycles Lapping", status: "tentative" },
  { id: 7, title: "Motorcycles Lapping — Saturday", date: "2026-03-21", time: "11:00 AM – 3:00 PM", category: "Motorcycles Lapping", status: "tentative" },
  { id: 8, title: "Cars Lapping — Sunday", date: "2026-03-22", time: "11:00 AM – 3:00 PM", category: "Cars Lapping", status: "tentative" },
  { id: 9, title: "Cars Lapping — Saturday", date: "2026-03-28", time: "11:00 AM – 3:00 PM", category: "Cars Lapping", status: "tentative" },
  { id: 10, title: "Motorcycles Lapping — Sunday", date: "2026-03-29", time: "11:00 AM – 3:00 PM", category: "Motorcycles Lapping", status: "tentative" },
  // April — Season starts
  { id: 11, title: "SCCA Track Night in America", date: "2026-04-10", time: "4:00 PM – 9:00 PM", category: "Racing", status: "confirmed" },
  { id: 12, title: "Rocky Mountain Vintage Racing", date: "2026-04-18", time: "8:00 AM – 5:00 PM", category: "Racing", status: "confirmed" },
  { id: 13, title: "Cars Open Lapping", date: "2026-04-19", time: "8:00 AM – 5:00 PM", category: "Cars Lapping", status: "confirmed" },
  { id: 14, title: "Customer Appreciation Days", date: "2026-04-25", time: "9:00 AM – 5:00 PM", category: "Special Event", status: "confirmed" },
  { id: 15, title: "Customer Appreciation Days", date: "2026-04-26", time: "9:00 AM – 5:00 PM", category: "Special Event", status: "confirmed" },
  // May
  { id: 16, title: "NASA Rocky Mountain HPDE", date: "2026-05-02", time: "8:00 AM – 5:00 PM", category: "Racing", status: "confirmed" },
  { id: 17, title: "Cars Open Lapping", date: "2026-05-09", time: "8:00 AM – 5:00 PM", category: "Cars Lapping", status: "confirmed" },
  { id: 18, title: "Motorcycles Open Lapping", date: "2026-05-10", time: "8:00 AM – 5:00 PM", category: "Motorcycles Lapping", status: "confirmed" },
  { id: 19, title: "PCA Rocky Mountain Region", date: "2026-05-16", time: "8:00 AM – 5:00 PM", category: "Racing", status: "confirmed" },
  { id: 20, title: "SCCA Time Trials", date: "2026-05-23", time: "8:00 AM – 5:00 PM", category: "Racing", status: "confirmed" },
  { id: 21, title: "BMW CCA Rocky Mountain HPDE", date: "2026-05-30", time: "8:00 AM – 5:00 PM", category: "Racing", status: "confirmed" },
  // June
  { id: 22, title: "Cars Open Lapping", date: "2026-06-06", time: "8:00 AM – 5:00 PM", category: "Cars Lapping", status: "confirmed" },
  { id: 23, title: "Motorcycles Open Lapping", date: "2026-06-07", time: "8:00 AM – 5:00 PM", category: "Motorcycles Lapping", status: "confirmed" },
  { id: 24, title: "MRA Motorcycle Racing", date: "2026-06-13", time: "8:00 AM – 5:00 PM", category: "Racing", status: "confirmed" },
  { id: 25, title: "SCCA Track Night in America", date: "2026-06-19", time: "4:00 PM – 9:00 PM", category: "Racing", status: "confirmed" },
  { id: 26, title: "NASA Rocky Mountain Weekend", date: "2026-06-27", time: "8:00 AM – 5:00 PM", category: "Racing", status: "confirmed" },
  // July
  { id: 27, title: "Cars Open Lapping", date: "2026-07-04", time: "8:00 AM – 5:00 PM", category: "Cars Lapping", status: "confirmed" },
  { id: 28, title: "Rocky Mountain Vintage Racing", date: "2026-07-11", time: "8:00 AM – 5:00 PM", category: "Racing", status: "confirmed" },
  { id: 29, title: "PCA Rocky Mountain DE", date: "2026-07-18", time: "8:00 AM – 5:00 PM", category: "Racing", status: "confirmed" },
  { id: 30, title: "Cars Open Lapping", date: "2026-07-25", time: "8:00 AM – 5:00 PM", category: "Cars Lapping", status: "confirmed" },
  { id: 31, title: "Motorcycles Open Lapping", date: "2026-07-26", time: "8:00 AM – 5:00 PM", category: "Motorcycles Lapping", status: "confirmed" },
  // Aug
  { id: 32, title: "BMW CCA Rocky Mountain HPDE", date: "2026-08-01", time: "8:00 AM – 5:00 PM", category: "Racing", status: "confirmed" },
  { id: 33, title: "SCCA Majors Tour", date: "2026-08-08", time: "8:00 AM – 5:00 PM", category: "Racing", status: "confirmed" },
  { id: 34, title: "Cars Open Lapping", date: "2026-08-15", time: "8:00 AM – 5:00 PM", category: "Cars Lapping", status: "confirmed" },
  { id: 35, title: "MRA Motorcycle Racing", date: "2026-08-22", time: "8:00 AM – 5:00 PM", category: "Racing", status: "confirmed" },
  { id: 36, title: "NASA Rocky Mountain Weekend", date: "2026-08-29", time: "8:00 AM – 5:00 PM", category: "Racing", status: "confirmed" },
  // Sep
  { id: 37, title: "Cars Open Lapping", date: "2026-09-05", time: "8:00 AM – 5:00 PM", category: "Cars Lapping", status: "confirmed" },
  { id: 38, title: "Motorcycles Open Lapping", date: "2026-09-06", time: "8:00 AM – 5:00 PM", category: "Motorcycles Lapping", status: "confirmed" },
  { id: 39, title: "24 Hours of LeMons", date: "2026-09-12", time: "All Day", category: "Racing", status: "confirmed" },
  { id: 40, title: "24 Hours of LeMons", date: "2026-09-13", time: "All Day", category: "Racing", status: "confirmed" },
  { id: 41, title: "PCA Rocky Mountain Region", date: "2026-09-19", time: "8:00 AM – 5:00 PM", category: "Racing", status: "confirmed" },
  { id: 42, title: "SCCA Track Night in America", date: "2026-09-25", time: "4:00 PM – 9:00 PM", category: "Racing", status: "confirmed" },
  // Oct
  { id: 43, title: "Rocky Mountain Vintage Racing", date: "2026-10-03", time: "8:00 AM – 5:00 PM", category: "Racing", status: "confirmed" },
  { id: 44, title: "Cars Open Lapping", date: "2026-10-10", time: "8:00 AM – 5:00 PM", category: "Cars Lapping", status: "confirmed" },
  { id: 45, title: "Motorcycles Open Lapping", date: "2026-10-11", time: "8:00 AM – 5:00 PM", category: "Motorcycles Lapping", status: "confirmed" },
  { id: 46, title: "NASA Rocky Mountain Season Finale", date: "2026-10-17", time: "8:00 AM – 5:00 PM", category: "Racing", status: "confirmed" },
  { id: 47, title: "End of Season Celebration", date: "2026-10-24", time: "9:00 AM – 5:00 PM", category: "Special Event", status: "confirmed" },
];

export const LAPPING_PRICING = {
  singleDay: {
    fullDay: "$209",
    halfDay: "$149",
    dayOfSurcharge: "$20",
    fullDayDayOf: "$229",
    halfDayDayOf: "$169",
  },
  sessionHours: [
    { type: "Full Day", hours: "8:00 AM – 5:00 PM" },
    { type: "Half Day (Thursday)", hours: "1:00 PM – 5:00 PM" },
    { type: "Half Day (Friday AM)", hours: "8:00 AM – 12:00 PM" },
    { type: "Half Day (Friday PM)", hours: "1:00 PM – 5:00 PM" },
    { type: "Winter Days", hours: "11:00 AM – 3:00 PM" },
  ],
  giftCards: {
    validity: "One (1) year from date of purchase",
    terms: [
      "Gift card codes are fully transferable — use yourself or share with friends/teammates",
      "May only be redeemed for HPR Open Lapping Days (not other events held at HPR)",
      "Must be entered at registration to be used as payment",
      "Online pre-registration required prior to arriving at the track",
      "If you register with a gift card code and cannot attend, you must cancel online prior to event start or forfeit the code value",
      "Code values based on pre-registration prices; day-of registration incurs an additional $20 fee NOT covered by the gift card",
      "Gift card purchases are NOT refundable",
      "After expiration, unredeemed codes may not be carried over or redeemed for cash/credit",
    ],
  },
  multiPacks: [
    { qty: "3 Half Days", price: "$380", discount: "15%" },
    { qty: "3 Full Days", price: "$533", discount: "15%" },
    { qty: "6 Half Days", price: "$742", discount: "17%" },
    { qty: "6 Full Days", price: "$1,041", discount: "17%" },
    { qty: "10 Half Days", price: "$1,163", discount: "22%" },
    { qty: "10 Full Days", price: "$1,631", discount: "22%" },
  ],
  seasonPass: {
    price: "$1,500",
    validPeriod: "January 1 through November 23",
    salesPeriod: "December 1 through September 30",
    description: "Unlimited access to ALL HPR Open Lapping Days (cars and motorcycles).",
    terms: [
      "Non-transferable",
      "Non-refundable",
      "Only valid for original recipient",
      "Must still register for each event you wish to attend",
    ],
  },
};

export const TRACK_RENTAL_OPTIONS = [
  {
    name: "Private Event Rental",
    bestFor: "12+ cars — ONLY option allowing competition (wheel-to-wheel or against-the-clock racing)",
    weekdayPrice: "$5,300/day",
    weekendPrice: "$6,900/day",
    perVehicle: "$17/vehicle entering the track",
    insurance: "Separate General Liability Insurance policy required ($5M coverage, ~$1,000/day). Bring your own (subject to HPR approval) or obtain a quote from HPR's carrier.",
    hours: "Weekdays 8 AM – 5 PM; Weekends 8 AM – 6 PM",
    deposit: "25% deposit and signed contract required",
  },
  {
    name: "Exclusive Test & Tune",
    bestFor: "4–12 cars — testing only, no competition",
    basePrice: "$3,000/day (full days only, no half-day option)",
    included: "Base rate covers 4 vehicles (at $750/vehicle)",
    additionalVehicle: "$450/additional vehicle",
    notes: "No additional GL coverage required if all vehicles/drivers meet Open Lapping Day requirements.",
  },
  {
    name: "Semi-Exclusive Test & Tune",
    bestFor: "1–3 cars — testing only, no competition",
    basePrice: "$1,500/day",
    perVehicle: "$375/vehicle",
    notes: "Base rate covers one vehicle; each additional at $375 regardless of driver count. No additional GL coverage required if all vehicles/drivers meet Open Lapping Day requirements.",
  },
  {
    name: "Video / Photo Shoot",
    bestFor: "Film, photography, and media production",
    notes: "Pricing available upon request. Complete Track Rental Request Form or contact HPR directly.",
  },
];

export const RENTAL_ADDON_SERVICES = [
  { service: "ALS Ambulance", rate: "$135/hour", note: "Required for all rentals" },
  { service: "Corner Workers", rate: "$19/worker/hour × 9 for full track", note: "Optional" },
  { service: "Towing", rate: "$80/hour", note: "Optional" },
  { service: "Towing + Fire/Rescue", rate: "$135/hour", note: "Optional" },
];

export const TRACK_RENTAL_GENERAL = {
  availability: "Dates must be listed as 'Available for Rental' on the HPR calendar",
  booking: "Must complete the Track Rental Request Form to reserve",
  addons: "Optional services (corner workers, towing, fire/rescue) available at additional cost for all programs",
};

export const INSTRUCTION_OPTIONS = [
  {
    type: "Half-Day Private Instruction",
    price: "$520",
    duration: "4 hours",
    sessions: "3–5 driving sessions",
    availability: "Thursdays, Fridays, or winter days",
    schedule: [
      { day: "Thursday", hours: "1:00 PM – 5:00 PM" },
      { day: "Friday (AM or PM)", hours: "8:00 AM – 12:00 PM or 1:00 PM – 5:00 PM" },
      { day: "Winter Days", hours: "11:00 AM – 3:00 PM" },
    ],
    includes: [
      "Vehicle overview and track orientation",
      "Basic car control: steering, braking, throttle, shifting",
      "Turn apex identification",
      "3–5 driving sessions with instructor",
      "Personalized feedback",
    ],
    provider: "Sarian Motorsports",
  },
  {
    type: "Full-Day Private Instruction",
    price: "$880",
    duration: "8 hours",
    sessions: "7–10 driving sessions",
    availability: "Fridays",
    includes: [
      "Everything in half-day instruction",
      "Advanced techniques: heel-toe braking, trail braking",
      "Understanding of understeer/oversteer",
      "Personalized feedback on specific areas needing improvement",
      "7–10 driving sessions",
    ],
    provider: "Sarian Motorsports",
  },
];

export const SARIAN_MOTORSPORTS = {
  name: "Sarian Motorsports",
  owner: "Chris Sarian",
  experience: "Over 15 years of racing at amateur and professional levels",
  phone: "303-324-8762",
  email: "info@sarianmotorsports.com",
  website: "www.sarianmotorsports.com",
  dealer: "Authorized dealer for Bell Helmets and OMP Racing Products",
  feeNote: "Instruction fees are IN ADDITION to track day registration fees.",
  privateInstruction: "Also available on weekdays when track is marked 'Available For Rental' — max 10 cars, instructors matched to each student.",
};

export const VIP_TRACK_DAYS = {
  price: "$425",
  perDriver: true,
  includes: [
    "Six (6) 30-minute on-track sessions",
    "Maximum 10 cars per session",
    "Carport use for the first 16 registrants (first-come, first-served)",
    "Lunch buffet from the Raceway Café",
    "Full event amenities (lights, workers, ambulance)",
    "Optional instruction from Sarian Motorsports if 10+ drivers register by 8:00 AM the day before",
  ],
  schedule: [
    { time: "7:30 AM", activity: "Gates open" },
    { time: "8:30 AM", activity: "Drivers meeting" },
    { time: "9:00 AM – 12:00 PM", activity: "Track sessions" },
    { time: "12:00 PM", activity: "Lunch" },
    { time: "1:00 PM – 4:00 PM", activity: "Track sessions" },
  ],
  requirements: [
    "Must have attended at least ONE HPR Open Lapping Day within the last two years",
    "$425 is per driver (you can drive multiple cars if desired)",
    "Cars ONLY — no motorcycles, three-wheelers, or karts",
    "Attendance capped at 20 drivers total, split into two groups by lap times",
    "All drivers and cars must meet standard Open Lapping Day requirements",
  ],
  cancellation: {
    beforeEvent: "Before 8:00 AM on event day: 100% credit for future use",
    afterOrNoShow: "After 8:01 AM or no-shows: NO credit issued",
    method: "Must cancel through MotorsportReg website — phone calls, voicemails, and emails will NOT be honored",
    crossUse: "VIP Track Day credits CAN be used toward Open Lapping Days",
  },
};

export const CUSTOMER_APPRECIATION_DAYS = {
  price: "FREE",
  eligibility: [
    "Participated in an HPR Open Lapping Day in the current year",
    "Were a current-year member of a CAMA owner club AND participated in an HPR Open Lapping Day in the prior year",
  ],
  registrationOpens: "Noon on Christmas Day",
  registrationPlatform: "MotorsportReg",
  cap: 100,
  noShowPenalty: "$159",
  noShowPolicy: "If registered but cannot attend, MUST cancel through MotorsportReg BEFORE gates open. No-shows will have MSR account billed $159 and must pay before participating in future lapping events.",
  note: "Two free Customer Appreciation Days per year — one for motorcycles, one for cars.",
};

export const TRACK_DAY_INSURANCE = {
  provider: "OpenTrack",
  coverageTypes: [
    { type: "Physical Damage Insurance", description: "Coverage for your car if you crash on track" },
    { type: "Liability Protection Insurance", description: "Coverage for actions that harm others or their property, including track property" },
  ],
  eligibleEvents: [
    "All Cars Only Open Lapping Days",
    "Non-competition privately hosted events (no wheel-to-wheel racing or Time Trials)",
    "HPDE-only participants at SCCA, PCA, NASA events (NOT if also competing)",
  ],
  exclusions: ["Motorcycles are NOT eligible for OpenTrack coverage"],
  purchaseOptions: [
    "Single-day coverage",
    "12-month unlimited event coverage",
  ],
};

export const EMPLOYMENT = {
  positions: [
    { title: "Front Gate Staff", description: "Verify waivers, provide general information", shifts: "Daytime and overnight" },
    { title: "Concessions Staff", description: "Take orders, prepare/serve food, sell HPR merchandise", shifts: "Event days" },
    { title: "Corner Workers", description: "Monitor track safety from protected bunkers; use flags, lights, and radio to signal hazards and communicate with event officials", shifts: "Event days" },
    { title: "Office Assistant", description: "Check in attendees, handle office duties", shifts: "Event days" },
  ],
  schedule: {
    operatingSeason: "January 1 through Thanksgiving",
    peakSeason: "April through October",
    typicalHours: "Thursday through Monday, 7:00 AM – 6:00 PM (during peak season)",
  },
};

export const DRIVER_REQUIREMENTS = {
  age: {
    minimum: 18,
    exception16to17WithLicense: "Riders aged 16-17 with a valid competition license from a nationally recognized sanctioning body (SCCA, NASA, PCA, etc.) — must contact trackmanager@highplainsraceway.com to arrange",
    exception16to17WithoutLicense: "Riders aged 16-17 WITHOUT a competition license may participate only if accompanied at ALL times on track by an instructor from Sarian Motorsports",
  },
  experience: "No previous race track experience necessary. Virtually any type of car or motorcycle is allowed.",
  driversMeeting: {
    firstTime: "ALL first-time participants REQUIRED to attend the Drivers/Riders Meeting before being allowed on track — NO EXCEPTIONS",
    recency: "Participants who haven't attended an HPR Open Lapping Day within the last two years must also attend",
    attendance: "Your name will be called at the beginning of the meeting; you must be present for the ENTIRE meeting or you will NOT be allowed on track",
  },
  vehicle: "All cars must meet technical and safety requirements. Each participant responsible for inspecting their vehicle and completing a Technical Inspection Form before driving on track.",
  helmets: "Helmets required at all times during on-track activities (rentals available)",
  passengers: "Passengers allowed in cars (must be 18+) at no additional charge",
  separateSchedules: "Cars and motorcycles are on SEPARATE scheduled dates",
};

export const REGISTRATION_PROCESS = [
  "Read the information page — review policies, age requirements, pricing, hours, and cancellation policies",
  "Check the calendar — visit the HPR Calendar to find available lapping days for your vehicle type",
  "Decide on instruction — sign up for instruction during registration if interested",
  "Create a MotorsportReg account — free account required",
  "Register — each participant must register themselves under their OWN MotorsportReg account; do NOT use 'Register Someone Else' or allow others to register you",
];

export const ON_SITE_SERVICES = [
  "Corner workers stationed around the track",
  "Towing services available",
  "ALS ambulance on site at all times",
  "Raceway Café with food and refreshments",
];

export const RV_SPOTS = {
  total: 26,
  thirtyAmp: { count: 20, spots: "1–20", config: "NEMA TT-30", pullThroughCount: 6, note: "One 30A outlet + half of a 20A duplex outlet per spot" },
  fiftyAmp: { count: 6, spots: "21–26", config: "NEMA 14-50", pullThroughCount: 3, note: "One 50A outlet per spot" },
  twentyAmp: { config: "NEMA 5-15", note: "Available at all spots" },
  spotSize: "22' × 40' (oriented back-to-back)",
  pullThroughSize: "22' × 80'",
  longRigNote: "Long rigs (over 40') MUST reserve pull-through spaces",
  orientation: "Rigs should be oriented North-South",
  water: false,
  sewer: false,
  nearestDump: "KOA dump station, ~20 min away in Strasburg",
  freeCamping: "Free tent camping and dry RV camping allowed on nights when 'Paddock Open 24 Hours' is listed on the calendar.",
  reservationOpen: "January 2nd at 8:00 AM each year via MotorsportReg.com",
  overnightNote: "Overnight occupancy must be pre-arranged. May only stay overnight on nights when the event calendar indicates 'Paddock Open 24 Hours'.",
  multiDayNote: "Multi-day weekend event rentals include use during preceding lapping days.",
  carports: "Covered workspace with smooth concrete floors and electrical power included.",
  pricingNote: "Per-event pricing available on MotorsportReg.com or call 303-769-4771.",
};

export const FOUNDING_CLUBS = [
  "Motorcycle Roadracing Association (MRA)",
  "Porsche Club of America — Rocky Mountain Region",
  "Rocky Mountain Vintage Racing (RMVR)",
  "Colorado Region SCCA",
  "Multi-Car Club Alliance (MCCA)",
];

export interface ClubContact {
  name: string;
  contact?: string;
  phone?: string;
  email?: string;
  website?: string;
}

export const MEMBER_CLUBS: string[] = [
  "SCCA — Colorado Region",
  "Rocky Mountain Vintage Racing",
  "NASA Rocky Mountain",
  "Porsche Club of America — Rocky Mountain",
  "BMW CCA — Rocky Mountain Chapter",
  "Motorcycle Roadracing Association",
  "Multi-Car Club Alliance",
];

export const MEMBER_CLUB_CONTACTS: ClubContact[] = [
  { name: "SCCA — Colorado Region", website: "www.coloradoscca.org" },
  { name: "Rocky Mountain Vintage Racing (RMVR)", website: "www.rmvr.com" },
  { name: "NASA Rocky Mountain", website: "www.nasarockymountain.com" },
  { name: "Porsche Club of America — Rocky Mountain", website: "www.rmrporscheclub.com" },
  { name: "BMW CCA — Rocky Mountain Chapter", website: "www.rmcbmwcca.org" },
  { name: "Motorcycle Roadracing Association (MRA)", website: "www.mra-racing.org" },
  { name: "Alfa Club", contact: "Karen McGowan", email: "fastalfa1@aol.com" },
  { name: "CECA", contact: "Bill Miller", phone: "303-421-3009", email: "registrar@cecaevents.org" },
  { name: "Colorado Viper Club", email: "bob@protsys.com" },
  { name: "High Plains Drifters (Audi)", website: "USAudiClub.com" },
  { name: "Lotus Colorado", website: "LotusColorado.com" },
  { name: "Mercedes Benz Club", contact: "Ryan Bunn", email: "rebunn@comcast.net" },
  { name: "Z Car Club of Colorado" },
];

export const CONTRIBUTOR_TIERS = [
  { tier: "Grand Prix Patrons", amount: "$10,000+", examples: "3R Automotive, Engineering Economic Inc., Barry Tiller, Robert Fuller, Timothy Hoiles" },
  { tier: "Gold Patrons", amount: "$5,000–$9,999", examples: "Rocky Mountain automotive clubs and individuals" },
  { tier: "Silver Patrons", amount: "$2,500–$4,999", examples: "Local businesses and individuals" },
  { tier: "Green Flag Contributors", amount: "$1,000–$2,499", examples: "Community members and small businesses" },
];
