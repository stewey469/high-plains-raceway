import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Calendar,
  CircleGauge,
  Droplets,
  ExternalLink,
  Info,
  MapPin,
  Plug,
  RectangleHorizontal,
  ShieldCheck,
  Tent,
  Warehouse,
  Zap,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import { SITE, RV_SPOTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "RV Spots & Carport Rental — On-Site Camping at HPR",
  description: `Reserve one of ${RV_SPOTS.total} RV spots (30-amp and 50-amp) or a covered carport at High Plains Raceway. ${RV_SPOTS.spotSize} spots with pull-through options. Reservations open ${RV_SPOTS.reservationOpen}.`,
};

const POWER_TYPES = [
  {
    icon: Plug,
    label: "30-Amp Service",
    spots: `Spots ${RV_SPOTS.thirtyAmp.spots}`,
    count: RV_SPOTS.thirtyAmp.count,
    config: RV_SPOTS.thirtyAmp.config,
    description: `${RV_SPOTS.thirtyAmp.note}. ${RV_SPOTS.thirtyAmp.pullThroughCount} pull-through options available. Standard hookup for most travel trailers and smaller motorhomes.`,
    accent: true,
  },
  {
    icon: Zap,
    label: "50-Amp Service",
    spots: `Spots ${RV_SPOTS.fiftyAmp.spots}`,
    count: RV_SPOTS.fiftyAmp.count,
    config: RV_SPOTS.fiftyAmp.config,
    description: `${RV_SPOTS.fiftyAmp.note}. ${RV_SPOTS.fiftyAmp.pullThroughCount} pull-through options available. Heavy-duty service for larger Class A motorhomes and rigs with dual A/C.`,
    accent: false,
  },
  {
    icon: BatteryCharging,
    label: "20-Amp Outlets",
    spots: "All spots",
    count: null,
    config: RV_SPOTS.twentyAmp.config,
    description: `${RV_SPOTS.twentyAmp.note}. Standard household outlets for charging, tools, and small appliances.`,
    accent: false,
  },
];

const HIGHLIGHTS = [
  {
    icon: RectangleHorizontal,
    title: `${RV_SPOTS.spotSize} Spots`,
    desc: "Generously sized pads with pull-through options available for longer rigs.",
  },
  {
    icon: MapPin,
    title: "Paddock Adjacent",
    desc: "Walk to your pit stall in minutes — no shuttles, no long hauls across the property.",
  },
  {
    icon: ShieldCheck,
    title: "Gated Facility",
    desc: "HPR grounds are gated and monitored. Your rig and equipment stay secure overnight.",
  },
  {
    icon: Calendar,
    title: "Reservations Jan 2",
    desc: "Spots open every January 2nd at 8:00 AM and sell out fast. Book via MotorsportReg.",
  },
];

export default function RVRentalPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Stay at HPR"
              title="RV Spots & Carport Rental"
              description={`${RV_SPOTS.total} electric-hookup RV spots right alongside the paddock. Camp on-site for multi-day events and never miss a session.`}
            />
          </AnimateIn>

          <AnimateIn delay={150}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.title}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <h.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-1">{h.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── RV Spot Types ── */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Electrical Service"
              title="Choose Your Power"
              description={`All ${RV_SPOTS.total} spots include electricity — pick the amperage that fits your rig.`}
            />
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6">
            {POWER_TYPES.map((type, i) => (
              <AnimateIn key={type.label} delay={i * 100}>
                <div
                  className={`relative bg-card border rounded-2xl p-8 h-full transition-colors ${
                    type.accent
                      ? "border-accent/40 hover:border-accent/60"
                      : "border-border hover:border-accent/30"
                  }`}
                >
                  {type.accent && (
                    <span className="absolute -top-3 left-6 bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Most Common
                    </span>
                  )}

                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                    <type.icon className="w-7 h-7 text-accent" />
                  </div>

                  <h3 className="text-xl font-bold mb-1">{type.label}</h3>
                  <p className="text-sm text-accent font-medium mb-4">
                    {type.spots}
                    {type.count !== null && (
                      <span className="text-muted">
                        {" "}
                        · {type.count} available
                      </span>
                    )}
                  </p>

                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {type.description}
                  </p>

                  <div className="mt-auto border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <CircleGauge className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-gray-300">
                        Connector:{" "}
                        <span className="font-semibold text-white">
                          {type.config}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Carport Rental ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="left">
              <SectionHeading
                eyebrow="Carports"
                title="Covered Workspace"
                description="Rent a carport for protected workspace right at the track. Ideal for race prep, wrenching between sessions, or keeping your equipment out of the Colorado sun."
                align="left"
              />
              <ul className="space-y-4">
                {[
                  "Smooth concrete floor for comfortable work",
                  "Electrical power at each carport",
                  "Covered protection from sun, wind, and weather",
                  "Steps from the paddock and pit lane",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="bg-card border border-border rounded-2xl p-8 lg:p-10">
                <Warehouse className="w-10 h-10 text-accent mb-5" />
                <h3 className="text-2xl font-bold mb-3">Carport Features</h3>
                <p className="text-muted leading-relaxed mb-6">
                  Each carport provides a covered workspace with a smooth
                  concrete floor and electrical power — everything you need for
                  race-day prep without hauling a canopy.
                </p>
                <Link
                  href={SITE.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-sm font-semibold transition-colors"
                >
                  Check availability on MotorsportReg
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Important Details ── */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Good to Know"
              title="Important Details"
              description="A few things to plan for before your stay at HPR."
            />
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimateIn delay={0}>
              <div className="bg-card border border-border rounded-2xl p-7 h-full">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Electricity Only
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  RV spots provide <strong className="text-white">electrical hookups only</strong> —
                  no water or sewer connections are available on-site. Plan to
                  arrive with full fresh-water tanks.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div className="bg-card border border-border rounded-2xl p-7 h-full">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Nearest Dump Station
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  The closest dump station is the{" "}
                  <strong className="text-white">
                    KOA in Strasburg, approximately 20 minutes away
                  </strong>
                  . Plan your departure to allow time for a dump stop on the way
                  home.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="bg-card border border-border rounded-2xl p-7 h-full sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Tent className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Free Camping Nights
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {RV_SPOTS.freeCamping} Check the{" "}
                  <Link
                    href="/calendar"
                    className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors"
                  >
                    event calendar
                  </Link>{" "}
                  for eligible dates.
                </p>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={300}>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 bg-card border border-border rounded-2xl p-6">
                <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-sm text-muted leading-relaxed space-y-1.5">
                  <p>
                    <strong className="text-white">Spot size:</strong>{" "}
                    {RV_SPOTS.spotSize}. Pull-through spots are {RV_SPOTS.pullThroughSize}
                    {" "}({RV_SPOTS.thirtyAmp.pullThroughCount} available in 30A, {RV_SPOTS.fiftyAmp.pullThroughCount} in 50A).
                  </p>
                  <p className="text-yellow-400 font-medium">{RV_SPOTS.longRigNote}</p>
                  <p>{RV_SPOTS.orientation}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-2xl p-6">
                <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-sm text-muted leading-relaxed space-y-1.5">
                  <p><strong className="text-white">Overnight stays:</strong> {RV_SPOTS.overnightNote}</p>
                  <p><strong className="text-white">Multi-day events:</strong> {RV_SPOTS.multiDayNote}</p>
                  <p><strong className="text-white">Pricing:</strong> {RV_SPOTS.pricingNote}</p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Reservation CTA ── */}
      <section id="reservation" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Reserve Your Spot</h2>
              <p className="text-muted text-lg mb-3 leading-relaxed">
                Reservations for {SITE.name} RV spots and carports open{" "}
                <strong className="text-white">
                  January 2nd at 8:00 AM
                </strong>{" "}
                each year. Spots sell out quickly — don&apos;t wait.
              </p>
              <p className="text-sm text-muted mb-8">
                All reservations are handled through MotorsportReg.com.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={SITE.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl text-base font-semibold transition-all"
                >
                  Reserve on MotorsportReg
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/calendar"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all"
                >
                  Check Event Calendar
                </Link>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
                <Info className="w-4 h-4" />
                {RV_SPOTS.total} total spots — {RV_SPOTS.thirtyAmp.count}×30A
                and {RV_SPOTS.fiftyAmp.count}×50A
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
