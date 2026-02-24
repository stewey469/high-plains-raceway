import { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Clock, MapPin, Mail, Users } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import { EMPLOYMENT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Employment — Work at High Plains Raceway",
  description:
    "Join the High Plains Raceway team — seasonal positions for front gate staff, concessions, corner workers, and office assistants. April through October.",
};

export default function EmploymentPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Careers"
              title="Work at High Plains Raceway"
              description="Join the team that keeps Colorado's premier racing facility running."
            />
          </AnimateIn>
        </div>
      </section>

      {/* Positions Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EMPLOYMENT.positions.map((position, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:bg-card-hover transition-colors"
                >
                  <Briefcase className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                  <p className="text-muted mb-4">{position.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Clock className="w-4 h-4" />
                    <span>{position.shifts}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="bg-card border border-border rounded-2xl p-8">
              <Clock className="w-10 h-10 text-accent mb-6" />
              <h2 className="text-2xl font-semibold mb-6">Work Schedule</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted mb-1">Operating Season</p>
                  <p className="text-lg">{EMPLOYMENT.schedule.operatingSeason}</p>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Peak Season</p>
                  <p className="text-lg">{EMPLOYMENT.schedule.peakSeason}</p>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Typical Hours</p>
                  <p className="text-lg">{EMPLOYMENT.schedule.typicalHours}</p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="bg-card border border-border rounded-2xl p-8">
              <Mail className="w-10 h-10 text-accent mb-6" />
              <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
              <p className="text-muted mb-4">
                Send your application to{" "}
                <Link
                  href={`mailto:${SITE.email}`}
                  className="text-accent hover:text-accent-hover underline"
                >
                  {SITE.email}
                </Link>
                .
              </p>
              <p className="text-muted">
                These are seasonal positions running from April through October,
                making it a great opportunity for motorsport enthusiasts who want
                to be part of the racing action.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Location Note */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="bg-card border border-border rounded-2xl p-8">
              <MapPin className="w-10 h-10 text-accent mb-6" />
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <p className="text-muted mb-2">
                {SITE.address.street}, {SITE.address.city}, {SITE.address.state}{" "}
                {SITE.address.zip}
              </p>
              <p className="text-muted">
                Located approximately 60 miles east of Denver.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
