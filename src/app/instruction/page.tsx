import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  GraduationCap,
  HardHat,
  Mail,
  Target,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import { SITE, INSTRUCTION_OPTIONS, SARIAN_MOTORSPORTS, MOTORSPORTREG_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Driving Instruction | High Plains Raceway",
  description:
    "Professional driving instruction at High Plains Raceway by Sarian Motorsports. Half-day instruction from $520, full-day from $880. Track orientation, car control, apex identification, and personalized coaching for all skill levels.",
  openGraph: {
    title: "Driving Instruction | High Plains Raceway",
    description:
      "Professional driving instruction at HPR by Sarian Motorsports. Half-day $520 · Full-day $880. Personalized coaching from novice to advanced.",
  },
};

const CURRICULUM = [
  {
    icon: Target,
    title: "Track Orientation",
    desc: "Learn the full layout, braking zones, corner entries, and the safest lines around every configuration of HPR.",
  },
  {
    icon: Wrench,
    title: "Car Control Techniques",
    desc: "Master throttle management, weight transfer, trail braking, and vehicle dynamics at speed.",
  },
  {
    icon: BookOpen,
    title: "Apex Identification",
    desc: "Understand geometric, early, and late apexes — and when to use each for maximum corner speed.",
  },
  {
    icon: Users,
    title: "Personalized Coaching",
    desc: "Every session is tailored to your goals, whether you want smoother laps, faster times, or race preparation.",
  },
];

const AUDIENCES = [
  {
    icon: GraduationCap,
    level: "Novice",
    title: "First Time on Track",
    desc: "Never lapped a racetrack? Start with fundamentals — track etiquette, flag signals, safe braking points, and building confidence at speed.",
  },
  {
    icon: Target,
    level: "Intermediate",
    title: "Building Speed",
    desc: "You've done a few track days and want to refine technique. Work on advanced line theory, trail braking, threshold braking, and shaving seconds.",
  },
  {
    icon: Trophy,
    level: "Advanced",
    title: "Competition Ready",
    desc: "Preparing for wheel-to-wheel racing or chasing personal bests. Focus on racecraft, consistency, data review, and mental preparation.",
  },
];

export default function InstructionPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Instruction"
              title="Professional Driving Instruction"
              description="Sarian Motorsports offers performance and race driving instruction at High Plains Raceway during open lapping days and private rentals. From your first laps to advanced racecraft — personalized coaching matched to your goals."
            />
          </AnimateIn>

          <AnimateIn delay={150}>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-5 py-2.5">
                <DollarSign className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold">
                  From {INSTRUCTION_OPTIONS[0].price} half-day
                </span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm text-gray-300">
                  Half-day &amp; full-day sessions
                </span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5">
                <GraduationCap className="w-4 h-4 text-accent" />
                <span className="text-sm text-gray-300">
                  All skill levels welcome
                </span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Provider Spotlight — Pricing Cards ── */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Provider"
              title="Sarian Motorsports"
              description={`Led by ${SARIAN_MOTORSPORTS.owner} — ${SARIAN_MOTORSPORTS.experience}. ${SARIAN_MOTORSPORTS.dealer}.`}
            />
          </AnimateIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {INSTRUCTION_OPTIONS.map((opt, i) => (
              <AnimateIn key={opt.type} delay={i * 120}>
                <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-accent/40 transition-all group h-full">
                  {i === 1 && (
                    <div className="absolute -top-3 right-6 bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">
                    {opt.type}
                  </div>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold">{opt.price}</span>
                    <span className="text-muted text-sm">/ session</span>
                  </div>
                  <div className="text-sm text-muted mb-5">
                    {opt.duration} · {opt.sessions}
                  </div>

                  <div className="space-y-2.5 mb-5">
                    <div className="flex items-start gap-2.5">
                      <Calendar className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Available {opt.availability}
                      </span>
                    </div>
                    {opt.includes?.map((inc) => (
                      <div key={inc} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{inc}</span>
                      </div>
                    ))}
                  </div>

                  {"schedule" in opt && opt.schedule && (
                    <div className="bg-white/[0.02] border border-border rounded-xl p-4 mb-5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Schedule</h4>
                      {opt.schedule.map((s) => (
                        <div key={s.day} className="flex items-center justify-between text-sm py-1">
                          <span className="text-gray-400">{s.day}</span>
                          <span className="text-gray-300 font-medium">{s.hours}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link
                    href={MOTORSPORTREG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all"
                  >
                    Register on MotorsportReg
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={300}>
            <p className="text-center text-muted text-sm mt-6">
              {SARIAN_MOTORSPORTS.feeNote} A technical vehicle inspection is required before going on track.
            </p>
          </AnimateIn>

          {/* Sarian contact info */}
          <AnimateIn delay={350}>
            <div className="bg-card border border-border rounded-2xl p-6 mt-8 max-w-lg mx-auto">
              <h3 className="font-semibold mb-3 text-center">Contact Sarian Motorsports</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <a href={`mailto:${SARIAN_MOTORSPORTS.email}`} className="hover:text-accent transition-colors">{SARIAN_MOTORSPORTS.email}</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-accent shrink-0" />
                  <span>{SARIAN_MOTORSPORTS.phone}</span>
                </div>
              </div>
              <p className="text-xs text-muted text-center mt-3">
                {SARIAN_MOTORSPORTS.privateInstruction}
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── What Instruction Covers ── */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Curriculum"
              title="What Instruction Covers"
              description="Every session is structured around core driving disciplines, then customized to your specific goals and skill level."
            />
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CURRICULUM.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 100}>
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-all h-full">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Skill Levels"
              title="Who It's For"
              description="Whether you've never turned a wheel on track or you're chasing tenths, instruction is tailored to where you are and where you want to go."
            />
          </AnimateIn>

          <div className="space-y-6">
            {AUDIENCES.map((a, i) => (
              <AnimateIn key={a.level} delay={i * 100}>
                <div className="bg-card border border-border rounded-2xl p-8 sm:p-10 hover:border-accent/30 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center">
                      <a.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-accent font-semibold uppercase tracking-wider">
                        {a.level}
                      </div>
                      <h3 className="text-xl font-bold">{a.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted leading-relaxed max-w-3xl">
                    {a.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Book ── */}
      <section className="py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Book Now"
              title="How to Register"
              description="Securing your instruction session is easy through MotorsportReg.com — the same platform used for all HPR registrations."
            />
          </AnimateIn>

          <AnimateIn delay={100}>
            <div className="bg-card border border-border rounded-2xl p-8 sm:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Steps to Register</h3>
                  <ol className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold shrink-0 mt-0.5">
                        1
                      </span>
                      <span>
                        Visit{" "}
                        <Link
                          href={SITE.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline"
                        >
                          MotorsportReg.com
                        </Link>{" "}
                        and search for High Plains Raceway
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold shrink-0 mt-0.5">
                        2
                      </span>
                      <span>
                        Select the open lapping day you want to attend and add instruction
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold shrink-0 mt-0.5">
                        3
                      </span>
                      <span>
                        Complete registration and payment for both the lapping day and instruction
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold shrink-0 mt-0.5">
                        4
                      </span>
                      <span>
                        Ensure your vehicle passes the required technical inspection on event day
                      </span>
                    </li>
                  </ol>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Have Questions?</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Contact High Plains Raceway for general inquiries about
                    instruction availability, scheduling, or vehicle requirements.
                  </p>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5 text-sm text-gray-300">
                      <Mail className="w-4 h-4 text-accent shrink-0" />
                      <a
                        href={`mailto:${SITE.email}`}
                        className="hover:text-accent transition-colors"
                      >
                        {SITE.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-gray-300">
                      <Clock className="w-4 h-4 text-accent shrink-0" />
                      <span>{SITE.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={SITE.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl text-base font-semibold transition-all"
                >
                  Register on MotorsportReg
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Helmet Rental Note ── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="bg-card border border-border rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-5">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                <HardHat className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Helmet Rentals Available
                </h3>
                <p className="text-muted leading-relaxed text-sm">
                  Don&apos;t have a helmet? Helmet rentals are available at the
                  track. All drivers and riders are required to wear an approved
                  helmet while on course. Check with registration for availability
                  and rental details.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
