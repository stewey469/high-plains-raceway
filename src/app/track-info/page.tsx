import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Car,
  CheckCircle2,
  Coffee,
  CornerDownLeft,
  Eye,
  Flag,
  Flame,
  Gauge,
  Lock,
  MapPin,
  Mountain,
  Plug,
  RotateCcw,
  Ruler,
  Shield,
  TrendingUp,
  Trophy,
  Truck,
  Users,
  Utensils,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import CountUp from "@/components/CountUp";
import {
  SITE,
  TRACK_SPECS,
  TRACK_CONFIGURATIONS,
  TRACK_RENTAL_OPTIONS,
  RENTAL_ADDON_SERVICES,
  TRACK_RENTAL_GENERAL,
  MEMBER_CLUBS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Track Information",
  description:
    "Explore High Plains Raceway: 2.55 miles, 15 turns, 300+ feet of elevation change. Track specs, configurations, rental options, amenities, facility rules, and directions to Colorado's premier amateur racing facility in Deer Trail, CO.",
};

const SPEC_ICONS: LucideIcon[] = [
  Ruler,
  Flag,
  Mountain,
  Gauge,
  ArrowUpRight,
  TrendingUp,
  RotateCcw,
  CornerDownLeft,
];

const AMENITIES = [
  {
    icon: Utensils,
    title: "On-Site Cafe",
    desc: "Breakfast and lunch served during most scheduled events",
  },
  {
    icon: Car,
    title: "Paddock Facilities",
    desc: "Spacious paved and gravel paddock with room for trailers and pit setup",
  },
  {
    icon: Plug,
    title: "RV Hookups",
    desc: "26 powered spots with 30-amp and 50-amp electrical service",
  },
  {
    icon: Shield,
    title: "Covered Carports",
    desc: "Sheltered vehicle prep areas available for seasonal rental",
  },
  {
    icon: Wrench,
    title: "Tech Inspection",
    desc: "Dedicated inspection area for pre-session vehicle safety checks",
  },
  {
    icon: Coffee,
    title: "Refreshments",
    desc: "Coffee, cold drinks, water, and snacks available on-site",
  },
];

const RENTAL_ICONS: LucideIcon[] = [Users, Lock, Users, Camera];
const ADDON_ICONS: LucideIcon[] = [Flag, Truck, Flame];

const FACILITY_RULES = [
  "All participants must sign a waiver before entering the track surface.",
  "Helmets are required for all drivers and riders — Snell SA2015 or newer.",
  "All vehicles must pass a technical inspection before any on-track activity.",
  "Speed limits are strictly enforced in the paddock area — 5 MPH maximum.",
  "No alcohol consumption permitted before or during track sessions.",
  "Noise limits apply — vehicles must meet the posted dB limit for the event.",
  "All spills and fluids must be cleaned immediately — no dumping allowed.",
  "Follow all flag signals and corner worker instructions at all times.",
  "Passing only in designated zones unless otherwise noted by the event organizer.",
  "Pets must be leashed at all times within the facility grounds.",
];

function RentalPriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2.5 border-b border-border/60 last:border-0">
      <span className="text-muted text-sm">{label}</span>
      <span className="font-semibold text-sm">{value}</span>
    </div>
  );
}

export default function TrackInfoPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Track Info"
              title="Know the Track"
              description="2.55 miles of rolling high-desert terrain, 15 turns, and 300+ feet of cumulative elevation change per lap. Here's everything you need to know about Colorado's premier amateur racing facility."
            />
          </AnimateIn>
        </div>
      </section>

      {/* ── Track Specs Grid ── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {TRACK_SPECS.map((spec, i) => {
                const Icon = SPEC_ICONS[i];
                return (
                  <div
                    key={spec.label}
                    className="group relative bg-card border border-border rounded-2xl p-6 text-center hover:border-accent/20 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">
                        <CountUp value={spec.value} />
                      </div>
                      <div className="text-sm text-muted">{spec.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Track Configurations ── */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Configurations"
              title="Four Ways to Race"
              description="HPR offers four distinct configurations — all run clockwise. Choose the layout that fits your event or skill level."
            />
          </AnimateIn>
          <AnimateIn delay={150}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TRACK_CONFIGURATIONS.map((config) => {
                const lengthNum = parseFloat(config.length);
                const pct = Math.round((lengthNum / 2.55) * 100);
                return (
                  <div
                    key={config.name}
                    className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/20 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold">{config.name}</h3>
                      {config.active && (
                        <span className="text-[10px] uppercase tracking-wider font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                          Primary
                        </span>
                      )}
                    </div>
                    <p className="text-3xl font-bold text-accent mb-5 tracking-tight">
                      <CountUp value={config.length} />
                    </p>
                    <div className="w-full bg-border/60 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-accent-hover rounded-full transition-all duration-700"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Track Details + Map ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <SectionHeading
                  eyebrow="Details"
                  title="Track Characteristics"
                  align="left"
                />
                <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                  <p>
                    The full course at High Plains Raceway is 2.55 miles with 15
                    turns, and all configurations run clockwise. The tightest turn
                    has an 80-foot radius through 160° with a 1.5% off-camber
                    surface — demanding precision braking and patient throttle
                    application.
                  </p>
                  <p>
                    The longest straight stretches 2,838 feet, giving high-power
                    cars room to stretch their legs before a hard braking zone.
                    Banking ranges from the common 1.5% up to a steepest of 4.0%,
                    while the steepest climb hits 10% — contributing to over 300
                    feet of cumulative elevation change per lap. The highest point
                    on circuit reaches 5,054 feet above sea level.
                  </p>
                  <p>
                    Located approximately 60 miles east of Denver — 45 miles on
                    I-70, then 17 miles south on Highway 36 — the track sits in the
                    open Colorado high plains, offering expansive visibility and
                    dramatic weather that adds another dimension to every session.
                  </p>
                </div>

                <div className="mt-8 flex items-start gap-4 bg-accent/10 border border-accent/20 rounded-xl p-5">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-muted">
                      {SITE.address.street}, {SITE.address.city},{" "}
                      {SITE.address.state} {SITE.address.zip}
                    </div>
                    <div className="text-muted mt-1">{SITE.directions}</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <Image
                  src="/images/hpr-track.jpg"
                  alt="High Plains Raceway full course track map with turn names and radii"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  quality={90}
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Amenities ── */}
      <section id="amenities" className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Amenities"
              title="Amenities & Facilities"
              description="More than just a race track. HPR provides everything you need for a great day — or weekend — at the raceway."
            />
          </AnimateIn>

          <AnimateIn delay={150}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {AMENITIES.map((a) => (
                <div
                  key={a.title}
                  className="group relative bg-card border border-border rounded-2xl p-6 hover:border-accent/20 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 mb-4 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                      <a.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-1">{a.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={300}>
            <div className="bg-card border border-border rounded-2xl p-8 sm:p-10">
              <h3 className="text-xl font-bold mb-4">Overnight &amp; Extended Stay</h3>
              <p className="text-muted leading-relaxed mb-6">
                For multi-day events, HPR offers 26 RV hookup spots with 30-amp and
                50-amp electrical service, plus free dry camping and tent camping on
                nights when the paddock is listed as open 24 hours. Reserve early —
                spots open January 2nd each year via MotorsportReg.
              </p>
              <Link
                href="/rv-rental"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold text-sm transition-colors"
              >
                View RV &amp; Carport Rental Options
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Track Rental ── */}
      <section id="rental" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Private Events"
              title="Rent the Track"
              description="Host your own event at HPR. Perfect for corporate track days, club events, private testing, film shoots, and more."
            />
          </AnimateIn>

          <AnimateIn delay={150}>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {TRACK_RENTAL_OPTIONS.map((option, i) => {
                const Icon = RENTAL_ICONS[i];
                const opt = option as Record<string, string | undefined>;
                return (
                  <div
                    key={option.name}
                    className="group relative bg-card border border-border rounded-2xl p-8 hover:border-accent/20 transition-all duration-300 flex flex-col overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex flex-col flex-1">
                      <div className="flex items-start gap-4 mb-5">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold leading-tight">
                            {option.name}
                          </h3>
                          <p className="text-sm text-accent font-medium">
                            {option.bestFor}
                          </p>
                        </div>
                      </div>

                      <div className="flex-1 mb-5">
                        {opt.weekdayPrice && (
                          <div className="divide-y divide-border/60">
                            <RentalPriceRow
                              label="Weekday"
                              value={opt.weekdayPrice}
                            />
                            <RentalPriceRow
                              label="Weekend"
                              value={opt.weekendPrice ?? ""}
                            />
                            <RentalPriceRow
                              label="Per Vehicle"
                              value={opt.perVehicle ?? ""}
                            />
                          </div>
                        )}
                        {opt.basePrice && (
                          <div className="divide-y divide-border/60">
                            <RentalPriceRow
                              label="Base Rate"
                              value={opt.basePrice}
                            />
                            <RentalPriceRow
                              label="Includes"
                              value={opt.included ?? ""}
                            />
                            <RentalPriceRow
                              label="Additional Vehicle"
                              value={opt.additionalVehicle ?? ""}
                            />
                          </div>
                        )}
                        {!opt.weekdayPrice && !opt.basePrice && (
                          <div className="flex items-center gap-2 py-3 text-sm text-muted">
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                            Contact for pricing and availability
                          </div>
                        )}
                      </div>

                      <div className="text-xs text-muted leading-relaxed border-t border-border/40 pt-4 space-y-1">
                        <p>{option.notes}</p>
                        {"hours" in option && (
                          <p className="text-gray-400"><strong>Hours:</strong> {(option as { hours?: string }).hours}</p>
                        )}
                        {"deposit" in option && (
                          <p className="text-gray-400"><strong>Deposit:</strong> {(option as { deposit?: string }).deposit}</p>
                        )}
                        {"insurance" in option && (
                          <p className="text-yellow-400/80">{(option as { insurance?: string }).insurance}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimateIn>

          {/* Add-On Services */}
          <AnimateIn delay={300}>
            <div className="bg-card border border-border rounded-2xl p-8 sm:p-10 mb-10">
              <h3 className="text-xl font-bold mb-6">Add-On Services</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {RENTAL_ADDON_SERVICES.map((addon, i) => {
                  const Icon = ADDON_ICONS[i % ADDON_ICONS.length];
                  return (
                    <div
                      key={addon.service}
                      className="flex items-center gap-4 bg-white/[0.02] border border-border rounded-xl p-4"
                    >
                      <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">
                          {addon.service}
                        </div>
                        <div className="text-accent font-bold text-lg tracking-tight">
                          {addon.rate}
                        </div>
                        {"note" in addon && (
                          <div className="text-xs text-muted">{(addon as { note?: string }).note}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimateIn>

          {/* Rental general notes */}
          <AnimateIn delay={350}>
            <div className="bg-card border border-border rounded-2xl p-6 mb-10 space-y-2">
              <h4 className="font-semibold text-sm">Important Rental Notes</h4>
              <ul className="space-y-1.5 text-sm text-muted">
                <li>• {TRACK_RENTAL_GENERAL.availability}</li>
                <li>• {TRACK_RENTAL_GENERAL.booking}</li>
                <li>• {TRACK_RENTAL_GENERAL.addons}</li>
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-xl text-sm font-semibold transition-colors"
              >
                Request Rental Information
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/calendar"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-border text-white px-8 py-3.5 rounded-xl text-sm font-semibold transition-colors"
              >
                Check Availability
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Watch Racing + Go Racing ── */}
      <section id="watch" className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Watch */}
              <div className="group relative bg-card border border-border rounded-2xl p-8 lg:p-10 hover:border-accent/20 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-14 h-14 mb-6 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                    <Eye className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Watch Racing</h3>
                  <p className="text-muted leading-relaxed mb-6">
                    Virtually all events at HPR are free to watch and open to the
                    public. Bring the family and enjoy high-speed racing action from
                    multiple vantage points around the circuit. Free parking, no
                    ticket required — just show up and enjoy the atmosphere.
                  </p>
                  <Link
                    href="/calendar"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold text-sm transition-colors"
                  >
                    See Upcoming Events
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Go Racing */}
              <div
                id="go-racing"
                className="group relative bg-card border border-border rounded-2xl p-8 lg:p-10 hover:border-accent/20 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-14 h-14 mb-6 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                    <Trophy className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Go Racing</h3>
                  <p className="text-muted leading-relaxed mb-4">
                    Ready for wheel-to-wheel competition? Multiple member clubs host
                    racing events throughout the season — from novice driving schools
                    to full championship series. There&apos;s a class for every skill
                    level, vehicle, and budget.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {MEMBER_CLUBS.map((club) => (
                      <span
                        key={club}
                        className="text-xs bg-accent/10 text-accent/90 border border-accent/10 px-3 py-1 rounded-full font-medium"
                      >
                        {club}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/instruction"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold text-sm transition-colors"
                  >
                    Start with Instruction
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Facility Rules ── */}
      <section id="rules" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Safety First"
              title="Facility Rules"
              description="HPR is committed to providing a safe environment for all participants and spectators. Please review and follow these rules at all times."
            />
          </AnimateIn>

          <AnimateIn delay={150}>
            <div className="max-w-3xl mx-auto space-y-3">
              {FACILITY_RULES.map((rule, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-accent/20 transition-all duration-300"
                >
                  <span className="shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent text-sm font-bold group-hover:bg-accent/15 transition-colors duration-300">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-300 leading-relaxed pt-1">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
