import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  Gift,
  Info,
  Shield,
  Star,
  Users,
  Zap,
  AlertTriangle,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import { LAPPING_PRICING, SITE, MOTORSPORTREG_URL, DRIVER_REQUIREMENTS, REGISTRATION_PROCESS, ON_SITE_SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Open Lapping Days — Pricing, Registration & Information",
  description:
    "Book an open lapping day at High Plains Raceway. Full day $209, half day $149. Season pass $1,500. No speed limits, no tickets — just you and 2.55 miles of track.",
};

export default function OpenLappingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Open Lapping"
              title="Your Track, Your Pace"
              description="Drive any car or motorcycle on 2.55 miles of racing surface — no speed limits, no speeding tickets. Full day from $209, half day from $149."
            />
          </AnimateIn>
        </div>
      </section>

      {/* Key Features */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Shield,
                title: "Staffed & Safe",
                desc: "Corner workers, towing services, and an ALS ambulance on site for every session.",
              },
              {
                icon: Clock,
                title: "Full & Half Days",
                desc: "Multiple run groups organized by experience level. Plenty of quality track time for everyone.",
              },
              {
                icon: Zap,
                title: "All Vehicles Welcome",
                desc: "Cars and motorcycles — from daily drivers and sportbikes to purpose-built track machines.",
              },
              {
                icon: Users,
                title: "Beginner Friendly",
                desc: "No previous track experience necessary. First-timers attend a mandatory Drivers/Riders Meeting.",
              },
            ].map((f, i) => (
              <AnimateIn key={f.title} delay={i * 80}>
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent/20 transition-all h-full">
                  <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Requirements"
              title="Before You Arrive"
              description="Know the rules so you can focus on driving."
            />
          </AnimateIn>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-lg font-bold mb-4">Driver Requirements</h3>
              <div className="space-y-3">
                {[
                  { text: `Must be ${DRIVER_REQUIREMENTS.age.minimum} years of age or older.`, note: null },
                  { text: DRIVER_REQUIREMENTS.age.exception16to17WithLicense, note: null },
                  { text: DRIVER_REQUIREMENTS.age.exception16to17WithoutLicense, note: null },
                  { text: DRIVER_REQUIREMENTS.experience, note: null },
                  { text: DRIVER_REQUIREMENTS.passengers, note: null },
                ].map((rule, i) => (
                  <AnimateIn key={i} delay={i * 50}>
                    <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-accent/20 transition-all">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-300">{rule.text}</p>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Safety & Equipment</h3>
              <div className="space-y-3">
                {[
                  { text: DRIVER_REQUIREMENTS.driversMeeting.firstTime, highlight: true },
                  { text: DRIVER_REQUIREMENTS.driversMeeting.recency, highlight: false },
                  { text: DRIVER_REQUIREMENTS.driversMeeting.attendance, highlight: true },
                  { text: DRIVER_REQUIREMENTS.vehicle, highlight: false },
                  { text: DRIVER_REQUIREMENTS.helmets, highlight: false },
                  { text: DRIVER_REQUIREMENTS.separateSchedules, highlight: false },
                ].map((rule, i) => (
                  <AnimateIn key={i} delay={i * 50}>
                    <div className={`flex items-start gap-3 border rounded-xl p-4 transition-all ${rule.highlight ? "bg-accent/[0.06] border-accent/20" : "bg-card border-border hover:border-accent/20"}`}>
                      {rule.highlight ? <AlertTriangle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> : <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />}
                      <p className="text-sm text-gray-300">{rule.text}</p>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>

          {/* Session hours */}
          <AnimateIn delay={200}>
            <div className="max-w-3xl mx-auto mt-12">
              <h3 className="text-lg font-bold mb-4 text-center">Session Hours</h3>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                {LAPPING_PRICING.sessionHours.map((session, i) => (
                  <div
                    key={session.type}
                    className={`flex items-center justify-between px-6 py-4 text-sm ${i < LAPPING_PRICING.sessionHours.length - 1 ? "border-b border-border" : ""} hover:bg-white/[0.02] transition-colors`}
                  >
                    <span className="font-medium text-gray-300">{session.type}</span>
                    <span className="text-white font-semibold">{session.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted text-center mt-3">
                Session structure and length depend on participation levels. Winter events are TENTATIVE — call {SITE.phone} to verify.
              </p>
            </div>
          </AnimateIn>

          {/* Registration process */}
          <AnimateIn delay={300}>
            <div className="max-w-3xl mx-auto mt-12">
              <h3 className="text-lg font-bold mb-4 text-center">How to Register</h3>
              <div className="space-y-3">
                {REGISTRATION_PROCESS.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-card border border-border rounded-xl p-4 hover:border-accent/20 transition-all">
                    <div className="w-7 h-7 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-xs text-accent font-bold">{i + 1}</span>
                    </div>
                    <p className="text-sm text-gray-300 capitalize-first">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* On-site services */}
          <AnimateIn delay={400}>
            <div className="max-w-3xl mx-auto mt-12">
              <h3 className="text-lg font-bold mb-4 text-center">On-Site Services</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {ON_SITE_SERVICES.map((service) => (
                  <div key={service} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                    <Shield className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Registration CTA */}
      <section id="registration" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="relative bg-gradient-to-br from-accent/[0.08] to-transparent border border-accent/20 rounded-2xl p-8 sm:p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.1),transparent_60%)]" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Register on MotorsportReg.com
                </h2>
                <p className="text-muted text-lg max-w-2xl mx-auto mb-4">
                  All registration and payment is handled through MotorsportReg.com.
                  The system will automatically notify you if you need to attend
                  the Drivers/Riders Meeting.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-yellow-400 mb-8">
                  <AlertTriangle className="w-4 h-4" />
                  Spots fill up fast, especially during peak season. Register early.
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={SITE.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]"
                  >
                    Register Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link
                    href="/calendar"
                    className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white px-8 py-4 rounded-xl text-base font-semibold transition-all"
                  >
                    View Upcoming Dates
                  </Link>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Pricing */}
      <section id="passes" className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Pricing"
              title="Passes & Gift Cards"
              description="From single-day passes to unlimited season access."
            />
          </AnimateIn>

          {/* Main pricing cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <AnimateIn delay={0}>
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/20 transition-all h-full flex flex-col">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-1">Single Day</h3>
                  <p className="text-sm text-muted">Pre-registration pricing</p>
                </div>
                <div className="text-center mb-6 flex-1">
                  <div className="text-4xl font-black text-white">{LAPPING_PRICING.singleDay.fullDay}</div>
                  <div className="text-sm text-muted mt-1">full day (8 AM – 5 PM)</div>
                  <div className="mt-3 text-2xl font-bold text-gray-400">{LAPPING_PRICING.singleDay.halfDay}</div>
                  <div className="text-sm text-muted mt-1">half day (4 hours)</div>
                  <div className="mt-3 text-xs text-yellow-400 font-medium">
                    +{LAPPING_PRICING.singleDay.dayOfSurcharge} surcharge for day-of registration
                  </div>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {["Full track access with multiple sessions", "Corner workers, towing & ALS ambulance", "Tech inspection included", "Free to spectators"].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={SITE.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-white/[0.04] hover:bg-white/[0.08] border border-border text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors mt-auto"
                >
                  Register on MotorsportReg
                </a>
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div className="relative bg-card border border-accent rounded-2xl p-8 shadow-lg shadow-accent/10 scale-[1.02] h-full flex flex-col">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Best Value
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-1">Season Pass</h3>
                  <p className="text-sm text-muted">Unlimited access</p>
                </div>
                <div className="text-center mb-6 flex-1">
                  <div className="text-4xl font-black text-white">{LAPPING_PRICING.seasonPass.price}</div>
                  <div className="text-sm text-muted mt-1">entire season</div>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Unlimited access to ALL Open Lapping Days",
                    "Cars and motorcycles included",
                    `Valid ${LAPPING_PRICING.seasonPass.validPeriod}`,
                    `On sale ${LAPPING_PRICING.seasonPass.salesPeriod}`,
                    "Must still register for each event",
                    "Non-transferable, non-refundable",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={SITE.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors mt-auto"
                >
                  Get Season Pass
                </a>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/20 transition-all h-full flex flex-col">
                <div className="text-center mb-6">
                  <Gift className="w-8 h-8 text-accent mx-auto mb-2" />
                  <h3 className="text-lg font-bold mb-1">Gift Cards</h3>
                  <p className="text-sm text-muted">Great for any occasion</p>
                </div>
                <div className="flex-1">
                  <ul className="space-y-2.5 mb-6">
                    {[
                      "Available as single-day or multi-day packages",
                      `Valid ${LAPPING_PRICING.giftCards.validity}`,
                      "Fully transferable — share with friends",
                      "NOT refundable after purchase",
                      "Only redeemable for HPR Open Lapping Days",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-gray-300">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={SITE.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-white/[0.04] hover:bg-white/[0.08] border border-border text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors mt-auto"
                >
                  Purchase Gift Cards
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* Multi-pack table */}
          <AnimateIn>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-6 text-center">
                Multi-Day Gift Card Packages
              </h3>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3 text-xs font-semibold uppercase tracking-wider text-muted px-6 py-4 border-b border-border bg-white/[0.02]">
                  <span>Package</span>
                  <span className="text-center">Price</span>
                  <span className="text-right">Savings</span>
                </div>
                {LAPPING_PRICING.multiPacks.map((pack, i) => (
                  <div
                    key={pack.qty}
                    className={`grid grid-cols-3 px-6 py-4 text-sm ${
                      i < LAPPING_PRICING.multiPacks.length - 1 ? "border-b border-border" : ""
                    } hover:bg-white/[0.02] transition-colors`}
                  >
                    <span className="font-medium text-gray-300">{pack.qty}</span>
                    <span className="text-center text-white font-semibold">{pack.price}</span>
                    <span className="text-right text-accent font-semibold">{pack.discount} off</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted text-center mt-4">
                Multi-day gift card codes are fully transferable and valid for one year from purchase.
                All purchases via MotorsportReg.com.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Insurance */}
      <section id="insurance" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading
                  eyebrow="Protection"
                  title="Track Day Insurance"
                  description="Your regular auto insurance typically doesn't cover track events. OpenTrack offers both physical damage and liability coverage."
                  align="left"
                />
                <div className="space-y-3">
                  {[
                    "Physical damage coverage — protects your car if you crash on track",
                    "Liability protection — covers damage to others or track property",
                    "Available for all Cars Only Open Lapping Days",
                    "Single-day or 12-month unlimited coverage options",
                    "Quick online enrollment through OpenTrack",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href="/insurance"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all"
                  >
                    Full Insurance Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <Info className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">Important Note</h3>
                  <p className="text-muted leading-relaxed">
                    Most personal auto insurance policies explicitly exclude
                    coverage for any event held at a racetrack, including non-competitive
                    open lapping sessions. We strongly recommend all participants
                    obtain dedicated track day coverage before driving.
                  </p>
                </div>
                <div className="bg-yellow-500/[0.06] border border-yellow-500/20 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-200/80">
                      <strong>Motorcycles are NOT eligible</strong> for OpenTrack coverage at this time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
