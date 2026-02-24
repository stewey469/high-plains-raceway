import { Metadata } from "next";
import { ALL_EVENTS, MEMBER_CLUBS, SITE, MOTORSPORTREG_URL } from "@/lib/constants";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import CalendarView from "@/components/CalendarView";
import Link from "next/link";
import { Bell, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Event Calendar — Full Season Schedule",
  description:
    "Browse the complete High Plains Raceway schedule — open lapping days, club racing, special events. Register through MotorsportReg.com.",
};

function EventsJsonLd() {
  const events = ALL_EVENTS.slice(0, 20).map((event) => ({
    "@type": "Event",
    name: event.title,
    startDate: event.date,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "High Plains Raceway",
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.state,
        postalCode: SITE.address.zip,
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "High Plains Raceway",
      url: "https://www.highplainsraceway.com",
    },
  }));

  const jsonLd = { "@context": "https://schema.org", "@graph": events };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function CalendarPage() {
  return (
    <>
      <EventsJsonLd />

      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Calendar"
              title="Event Schedule"
              description="Browse the full season. Click any event to register on MotorsportReg.com."
            />
            <div className="flex items-center justify-center gap-4 -mt-6">
              <a
                href={MOTORSPORTREG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]"
              >
                Register on MotorsportReg
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Interactive Calendar */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CalendarView />
        </div>
      </section>

      {/* Sidebar info */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <AnimateIn>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Member Clubs</h3>
                <div className="space-y-2.5">
                  {MEMBER_CLUBS.map((club) => (
                    <div
                      key={club}
                      className="text-sm text-muted flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      {club}
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div className="bg-accent/[0.06] border border-accent/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Bell className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold">Stay Updated</h3>
                </div>
                <p className="text-sm text-muted mb-4">
                  Get notified about new events, schedule changes, and
                  announcements.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-accent hover:bg-accent-hover text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                >
                  Subscribe to Newsletter
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-3">Event Categories</h3>
                <div className="space-y-2.5">
                  {[
                    { color: "bg-blue-500", label: "Cars Lapping" },
                    { color: "bg-orange-500", label: "Motorcycles Lapping" },
                    { color: "bg-accent", label: "Club Racing" },
                    { color: "bg-yellow-500", label: "Special Events" },
                  ].map((cat) => (
                    <div key={cat.label} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <div className={`w-3 h-3 ${cat.color} rounded-sm shrink-0`} />
                      {cat.label}
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
