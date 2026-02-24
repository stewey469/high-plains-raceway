import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Flag,
  Gauge,
  MapPin,
  Trophy,
  Users,
  Zap,
  Timer,
  Eye,
  GraduationCap,
  Car,
  ChevronRight,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import CountUp from "@/components/CountUp";
import SectionHeading from "@/components/SectionHeading";
import { ALL_EVENTS, MOTORSPORTREG_URL, TRACK_HERO_STATS, SITE, FOUNDING_CLUBS } from "@/lib/constants";
import { TESTIMONIALS, FAQ_ITEMS } from "@/lib/faq";

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return {
    month: d.toLocaleDateString("en-US", { month: "short" }),
    day: d.getDate(),
    weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
  };
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Real track photo background */}
        <Image
          src="/images/home-slider-car-pack.jpg"
          alt="Wheel-to-wheel racing at High Plains Raceway"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(220,38,38,0.12),transparent)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 lg:py-40">
          <AnimateIn direction="up" delay={0}>
            <div className="inline-flex items-center gap-2.5 bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-full px-5 py-2 mb-10">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-gray-400 font-medium tracking-wide">
                {SITE.season} Season
              </span>
            </div>
          </AnimateIn>

          <AnimateIn direction="up" delay={100}>
            <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-black tracking-[-0.03em] leading-[0.9] mb-8">
              <span className="block">High Plains</span>
              <span className="block text-accent">Raceway</span>
            </h1>
          </AnimateIn>

          <AnimateIn direction="up" delay={200}>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-12">
              The only motorsports facility in America conceived, financed,
              designed, and built entirely by amateur racing clubs. 2.55 miles of
              rolling Colorado terrain. 15 turns. 300+ feet of elevation change.
            </p>
          </AnimateIn>

          <AnimateIn direction="up" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Link
                href="/open-lapping"
                className="group flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]"
              >
                Book Open Lapping
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/calendar"
                className="flex items-center gap-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.12] text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200"
              >
                <Calendar className="w-5 h-5 opacity-60" />
                View Schedule
              </Link>
            </div>
          </AnimateIn>

          <AnimateIn direction="up" delay={400}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {TRACK_HERO_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    <CountUp value={stat.value} />
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── What We Offer ────────────────────────────────── */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="What We Offer"
              title="Everything You Need on Track"
              description="From first-time drivers to seasoned racers, HPR has events and amenities for everyone."
            />
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Gauge,
                title: "Open Lapping Days",
                desc: "Drive any car or motorcycle on track — no speed limits, no tickets. Full day from $209, half day from $149. Corner workers, towing, and ALS ambulance on site.",
                href: "/open-lapping",
              },
              {
                icon: Trophy,
                title: "Wheel-to-Wheel Racing",
                desc: "Amateur clubs host competitive events every weekend in season — from SCCA and NASA to vintage racing and PCA. All skill levels welcome.",
                href: "/track-info#go-racing",
              },
              {
                icon: GraduationCap,
                title: "Driving Instruction",
                desc: "Sarian Motorsports offers half-day ($520) and full-day ($880) instruction covering car control, racing lines, and advanced technique.",
                href: "/instruction",
              },
              {
                icon: Users,
                title: "Club Events",
                desc: "Home to SCCA, NASA, PCA, BMW CCA, RMVR, MRA, and MCCA. The biggest amateur motorsport organizations run their seasons here.",
                href: "/calendar",
              },
              {
                icon: Car,
                title: "4 Track Configurations",
                desc: "Full course (2.55 mi), West course (2.00 mi), North course (1.86 mi), and Short course (1.28 mi) — all running clockwise.",
                href: "/track-info",
              },
              {
                icon: Eye,
                title: "Free to Watch",
                desc: "All events are open to the public with free spectator access. Bring the family and experience high-speed action up close.",
                href: "/track-info#watch",
              },
            ].map((card, i) => (
              <AnimateIn key={card.title} delay={i * 80} direction="up">
                <Link
                  href={card.href}
                  className="group block bg-card hover:bg-card-hover border border-border rounded-2xl p-7 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_60px_rgba(220,38,38,0.04)] h-full"
                >
                  <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                    <card.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold mb-2 group-hover:text-accent transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {card.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Heritage Strip ───────────────────────────────── */}
      <section className="py-20 border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
                Built By Enthusiasts, For Enthusiasts
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                HPR is the only motorsports facility in America conceived,
                financed, designed, and built entirely by amateur road racing
                clubs. Founded by five Colorado clubs after Second Creek Raceway
                closed in 2005, over 1,200 contributors made this dream a
                reality.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {FOUNDING_CLUBS.map((club) => (
                  <span key={club} className="text-xs text-muted-light whitespace-nowrap">
                    {club}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Photo Strip ────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/home-slider-car-pack.jpg"
                  alt="Spec Racer Ford pack racing at High Plains Raceway"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/home-slider-wheelie.jpg"
                  alt="Motorcycle racer at speed on the HPR front straight"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/home-slider-two-bikes.jpg"
                  alt="Two motorcycle racers battling through a corner at HPR"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Upcoming Events ──────────────────────────────── */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                  Upcoming
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Next on Track
                </h2>
              </div>
              <Link
                href="/calendar"
                className="shrink-0 flex items-center gap-2 text-accent hover:text-accent-hover text-sm font-semibold transition-colors group"
              >
                Full Calendar
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </AnimateIn>

          <div className="grid gap-3">
            {ALL_EVENTS.filter((e) => new Date(e.date + "T00:00:00") >= new Date(new Date().toDateString()))
              .slice(0, 5)
              .map((event, i) => {
              const { month, day, weekday } = formatDate(event.date);
              return (
                <AnimateIn key={event.id} delay={i * 60} direction="up">
                  <a
                    href={MOTORSPORTREG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 sm:gap-8 bg-card hover:bg-card-hover border border-border rounded-xl px-5 py-5 sm:px-7 sm:py-6 transition-all duration-300 hover:border-accent/20"
                  >
                    <div className="shrink-0 text-center w-14">
                      <div className="text-[10px] text-accent font-bold uppercase tracking-wider">
                        {month}
                      </div>
                      <div className="text-2xl font-bold leading-tight">{day}</div>
                      <div className="text-[10px] text-muted">{weekday}</div>
                    </div>
                    <div className="h-10 w-px bg-border shrink-0 hidden sm:block" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold truncate text-[15px] group-hover:text-accent transition-colors">{event.title}</h3>
                        {event.status === "tentative" && (
                          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider bg-yellow-500/10 text-yellow-400 px-2.5 py-0.5 rounded-full border border-yellow-500/20">
                            Tentative
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted">
                        <span className="flex items-center gap-1.5">
                          <Timer className="w-3.5 h-3.5" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Flag className="w-3.5 h-3.5" />
                          {event.category}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted group-hover:text-accent transition-colors shrink-0 hidden sm:block" />
                  </a>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Track Details ────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                  The Track
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  Built for Real Racing
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  2.55 miles of rolling Colorado terrain with 15 turns, a 2,838-foot
                  longest straight, and 300+ feet of cumulative elevation change per
                  lap — topping out at 5,054 feet above sea level.
                </p>
                <div className="space-y-3.5 mb-10">
                  {[
                    "4 configurations: Full (2.55 mi), West (2.00 mi), North (1.86 mi), Short (1.28 mi)",
                    "Tightest turn: 80-foot radius, 160°, 1.5% off-camber",
                    "Steepest banking: 4.0% — Steepest climb: 10%",
                    "40–50 foot track width with massive runoff areas",
                    "On-site: paddock facilities, cafe, RV hookups, carports",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Zap className="w-4 h-4 text-accent shrink-0 mt-1" />
                      <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/track-info"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold text-sm transition-colors group"
                >
                  Full Track Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="relative">
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hpr-track.jpg"
                    alt="High Plains Raceway track map — 2.55 mile full course with 15 turns"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                    quality={90}
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-accent text-white rounded-xl px-5 py-3 text-sm font-semibold shadow-lg shadow-accent/25 flex items-center gap-2 border border-accent-hover">
                  <MapPin className="w-4 h-4" />
                  Deer Trail, CO
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────── */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="What Drivers Say"
              title="From the Paddock"
              description="Hear from the people who drive, race, and experience HPR firsthand."
            />
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <blockquote className="bg-card border border-border rounded-2xl p-7 h-full flex flex-col hover:border-accent/20 transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-4 h-4 text-accent">★</div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 pt-5 border-t border-border">
                    <div className="text-sm font-semibold">{t.author}</div>
                    <div className="text-xs text-muted mt-0.5">{t.context}</div>
                  </div>
                </blockquote>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Preview ──────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-card/30 border-y border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="FAQ"
              title="Common Questions"
              description="Quick answers to the most frequently asked questions."
            />
          </AnimateIn>
          <div className="space-y-3 mb-10">
            {FAQ_ITEMS.slice(0, 5).map((item, i) => (
              <AnimateIn key={i} delay={i * 60}>
                <details className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/20 transition-all">
                  <summary className="flex items-start gap-4 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="font-semibold text-sm flex-1 pr-4">
                      {item.question}
                    </span>
                    <span className="shrink-0 w-6 h-6 bg-white/[0.04] rounded-md flex items-center justify-center text-muted text-sm transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-300 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn>
            <div className="text-center">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold text-sm transition-colors group"
              >
                View All FAQs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.08),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Ready to Hit the Track?
            </h2>
            <p className="text-muted text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re looking to race, learn, or just enjoy a day on
              one of America&apos;s greatest tracks — full days from $209, half
              days from $149. Register through MotorsportReg.com.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/open-lapping"
                className="group flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]"
              >
                Book Open Lapping
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
