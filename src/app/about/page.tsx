import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Calendar,
  ChevronRight,
  Crown,
  Flag,
  Heart,
  Landmark,
  MapPin,
  Medal,
  Milestone,
  ShieldCheck,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import {
  SITE,
  MEMBER_CLUBS,
  FOUNDING_CLUBS,
  CONTRIBUTOR_TIERS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `About — ${SITE.name}`,
  description:
    "The only motorsports facility in America conceived, financed, designed, and built entirely by amateur road racing clubs. Learn the story of High Plains Raceway, from the closure of Second Creek to the creation of Colorado's premier amateur track.",
  openGraph: {
    title: `About — ${SITE.name}`,
    description:
      "Built by enthusiasts, for enthusiasts. Discover how five Colorado amateur clubs came together to create one of America's greatest road racing facilities.",
  },
};

const TIMELINE = [
  {
    year: "2003",
    title: "CAMA Is Born",
    desc: "With Second Creek Raceway near Denver International Airport slated for closure, five amateur clubs form Colorado Amateur Motorsports Associates (CAMA): MRA, PCA Rocky Mountain, RMVR, Colorado Region SCCA, and MCCA. Their mission — build a new, permanent home for amateur motorsports in Colorado.",
    icon: Landmark,
  },
  {
    year: "2005",
    title: "The Tracks Go Dark",
    desc: "Second Creek Raceway closes at the end of 2005, along with Pikes Peak International Raceway, Mountain View, and the Stapleton circuit. In a single year, Colorado loses virtually all of its amateur racing venues, leaving thousands of enthusiasts with nowhere to drive.",
    icon: Flag,
  },
  {
    year: "2006–2007",
    title: "Breaking Ground",
    desc: "CAMA secures over 600 acres of rolling prairie east of Denver near Deer Trail, Colorado. Track design and construction begin, funded entirely by private contributions from club members and the broader racing community — no government money, no corporate parent.",
    icon: Milestone,
  },
  {
    year: "2008–2009",
    title: "Grand Opening",
    desc: "High Plains Raceway opens its gates for the first time, delivering 2.55 miles of technical, challenging road course with 15 turns and over 300 feet of elevation change. Over 1,200 Founding Contributors provide capital to make the dream a reality.",
    icon: Trophy,
  },
  {
    year: "2010s",
    title: "Growth & Expansion",
    desc: "HPR matures into one of the nation's finest amateur facilities. Safety systems, paddock amenities, RV hookups, and additional track configurations are added. The roster of member clubs grows as NASA Rocky Mountain and BMW CCA Rocky Mountain join the family.",
    icon: Star,
  },
  {
    year: "Today",
    title: "Colorado's Premier Amateur Track",
    desc: "HPR hosts hundreds of events every season from April through October — wheel-to-wheel racing, track days, driving schools, open lapping, and special events. Seven member clubs call HPR home, continuing the grassroots tradition that built it.",
    icon: ShieldCheck,
  },
];

const SPONSOR_CATEGORIES = [
  { name: "Racing Clubs", desc: "SCCA, NASA, PCA, MRA, RMVR, BMW CCA, MCCA and their member clubs" },
  { name: "Sarian Motorsports", desc: "Official instruction partner — Bell Helmets and OMP Racing Products dealer" },
  { name: "OpenTrack Insurance", desc: "Track day physical damage and liability coverage" },
  { name: "MotorsportReg", desc: "Event registration and payment platform" },
];

const STAT_CARDS = [
  {
    icon: MapPin,
    label: `${SITE.address.city}, ${SITE.address.state}`,
    sublabel: "60 mi east of Denver",
  },
  { icon: Calendar, label: "Apr – Oct", sublabel: "Active season" },
  {
    icon: Users,
    label: `${MEMBER_CLUBS.length} Clubs`,
    sublabel: "Member organizations",
  },
  { icon: Award, label: "Est. 2008", sublabel: "Founded by CAMA" },
];

const TIER_ICONS = [Crown, Medal, Award, Heart];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(220,38,38,.12),transparent_70%)]"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimateIn>
            <SectionHeading
              eyebrow="About HPR"
              title="Built by Enthusiasts. For Enthusiasts."
              description="High Plains Raceway is the only motorsports facility in America conceived, financed, designed, and built entirely by amateur road racing clubs and their members."
            />
          </AnimateIn>

          <AnimateIn delay={200}>
            <p className="max-w-2xl mx-auto text-center text-muted text-base leading-relaxed">
              When Colorado lost its amateur racing venues, five clubs refused to
              let the sport die. They pooled their resources, rallied over 1,200
              contributors, and built a world-class track from scratch — no
              government money, no corporate sponsor, just passion.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── About Content ── */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimateIn direction="left">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Welcome to one of America&apos;s greatest amateur road racing
                  facilities. Nestled on 600+ acres of rolling prairie near Deer
                  Trail, Colorado, High Plains Raceway offers 2.55 miles of
                  technical, challenging, and very safe racing surface — with 15
                  turns and over 300 feet of elevation change.
                </p>
                <p>
                  HPR was born out of necessity. In 2003, with Second Creek
                  Raceway near Denver International Airport slated for closure,
                  five amateur clubs formed{" "}
                  <span className="text-white font-medium">
                    Colorado Amateur Motorsports Associates (CAMA)
                  </span>{" "}
                  to ensure that amateur road racing would have a permanent home
                  in Colorado. By the end of 2005, Second Creek, Pikes Peak
                  International Raceway, Mountain View, and the Stapleton circuit
                  had all closed — making the mission urgent.
                </p>
                <p>
                  Virtually every weekend from April through October is packed
                  with high-speed action. Amateur clubs host events ranging from
                  track days and driving schools to wheel-to-wheel racing.
                  HPR-run Open Lapping Days give everyone a safe and legal
                  environment to explore the performance envelope of their
                  vehicle — cars and motorcycles alike.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {STAT_CARDS.map((item, i) => (
                  <div
                    key={item.label}
                    className="bg-card border border-border rounded-2xl p-6 text-center hover:border-accent/30 transition-all group"
                  >
                    <item.icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="font-semibold">{item.label}</div>
                    <div className="text-xs text-muted mt-1">
                      {item.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── History Timeline ── */}
      <section id="history" className="py-28 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="History"
              title="The Road to High Plains"
              description="From the loss of Colorado's racing venues to the creation of an all-volunteer, all-amateur facility unlike anything else in America."
            />
          </AnimateIn>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div
                aria-hidden
                className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-border"
              />
              <div className="space-y-10">
                {TIMELINE.map((item, i) => (
                  <AnimateIn key={item.year} delay={i * 100}>
                    <div className="relative flex gap-6">
                      <div className="shrink-0 w-10 h-10 bg-accent/10 border border-accent/30 rounded-full flex items-center justify-center z-10">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div className="pb-2">
                        <div className="text-accent font-bold text-sm tracking-wide mb-1">
                          {item.year}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sponsors ── */}
      <section id="sponsors" className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Partners"
              title="Our Sponsors"
              description="HPR is proud to be supported by outstanding partners in the motorsport community."
            />
          </AnimateIn>

          <AnimateIn delay={100}>
            <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {SPONSOR_CATEGORIES.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                      <Star className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold">{sponsor.name}</h3>
                  </div>
                  <p className="text-sm text-muted pl-[52px]">{sponsor.desc}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div className="text-center mt-12">
              <p className="text-sm text-muted mb-4">
                Interested in partnering with HPR?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold text-sm transition-colors"
              >
                Become a Sponsor
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Founding Contributors ── */}
      <section id="founders" className="py-28 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Thank You"
              title="Founding Contributors"
              description="Over 1,200 individuals and organizations provided capital in 2008–2009 to make High Plains Raceway a reality. HPR exists because of their vision and generosity."
            />
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {CONTRIBUTOR_TIERS.map((tier, i) => {
              const Icon = TIER_ICONS[i];
              return (
                <AnimateIn key={tier.tier} delay={i * 100}>
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-all h-full flex flex-col">
                    <Icon className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-bold text-lg mb-1">{tier.tier}</h3>
                    <div className="text-accent font-semibold text-sm mb-3">
                      {tier.amount}
                    </div>
                    <p className="text-xs text-muted leading-relaxed flex-1">
                      {tier.examples}
                    </p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>

          <AnimateIn delay={500}>
            <div className="mt-12 max-w-2xl mx-auto text-center">
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="text-4xl font-bold text-accent mb-2">
                  1,200+
                </div>
                <div className="text-sm font-semibold mb-1">
                  Total Founding Contributors
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  These individuals, families, and businesses across all four
                  tiers provided the capital that turned the CAMA vision into
                  concrete, asphalt, and 2.55 miles of world-class racing
                  surface.
                </p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={600}>
            <div className="mt-10 max-w-3xl mx-auto">
              <h3 className="text-center font-semibold text-sm uppercase tracking-widest text-accent mb-6">
                The Five Founding Clubs of CAMA
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {FOUNDING_CLUBS.map((club) => (
                  <div
                    key={club}
                    className="bg-card border border-border rounded-xl px-5 py-3 text-sm font-medium hover:border-accent/30 transition-all flex items-center gap-2"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-accent shrink-0" />
                    {club}
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Member Clubs ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Community"
              title="Member Clubs"
              description="These organizations call HPR home and run events throughout the season."
            />
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {MEMBER_CLUBS.map((club, i) => (
              <AnimateIn key={club} delay={i * 60}>
                <div className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4 hover:border-accent/30 transition-all group">
                  <div className="w-3 h-3 bg-accent rounded-full shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-sm font-medium">{club}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
