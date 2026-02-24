import { Metadata } from "next";
import Link from "next/link";
import {
  Gift,
  Users,
  Calendar,
  AlertTriangle,
  ExternalLink,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import { CUSTOMER_APPRECIATION_DAYS, MOTORSPORTREG_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Customer Appreciation Days — Free Track Days",
  description:
    "Two free track days per year for eligible HPR participants — one for motorcycles, one for cars. Limited to 100 registrants. Registration opens Christmas Day.",
};

export default function CustomerAppreciationPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Thank You"
              title="Customer Appreciation Days"
              description="Two free track days per year — our way of thanking the community that makes High Plains Raceway possible."
            />
          </AnimateIn>
        </div>
      </section>

      {/* Highlight Strip */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-5">
            <AnimateIn delay={0}>
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">FREE Entry</h3>
                <p className="text-sm text-muted">
                  No cost to participate — our gift to you
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={80}>
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">100 Spots</h3>
                <p className="text-sm text-muted">
                  Limited availability — first come, first served
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={160}>
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Opens Christmas Day
                </h3>
                <p className="text-sm text-muted">
                  Registration opens at noon on December 25th
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Eligibility"
              title="Who Can Participate"
              description="Must meet ONE of these criteria:"
            />
          </AnimateIn>
          <div className="max-w-3xl mx-auto">
            <AnimateIn delay={80}>
              <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                {CUSTOMER_APPRECIATION_DAYS.eligibility.map((criterion, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-muted leading-relaxed">{criterion}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Important Details */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Important Details"
              title="Registration Information"
            />
          </AnimateIn>
          <div className="max-w-3xl mx-auto space-y-6">
            <AnimateIn delay={80}>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  Registration Cap
                </h3>
                <p className="text-muted">
                  Limited to {CUSTOMER_APPRECIATION_DAYS.cap} registrants per
                  day. No wait list available — once full, registration closes.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={160}>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  Registration Opens
                </h3>
                <p className="text-muted">
                  Registration opens at {CUSTOMER_APPRECIATION_DAYS.registrationOpens}{" "}
                  through {CUSTOMER_APPRECIATION_DAYS.registrationPlatform}.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={240}>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-accent" />
                  Event Schedule
                </h3>
                <p className="text-muted">
                  {CUSTOMER_APPRECIATION_DAYS.note}
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* No-Show Policy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Policy"
              title="No-Show Policy"
            />
          </AnimateIn>
          <div className="max-w-3xl mx-auto">
            <AnimateIn delay={80}>
              <div className="bg-card border-2 border-accent/30 rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      {CUSTOMER_APPRECIATION_DAYS.noShowPenalty} No-Show Penalty
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {CUSTOMER_APPRECIATION_DAYS.noShowPolicy}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <SectionHeading
                title="Ready to Register?"
                description="Registration opens at noon on Christmas Day through MotorsportReg."
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={MOTORSPORTREG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Register on MotorsportReg
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <Link
                  href="/calendar"
                  className="inline-flex items-center justify-center gap-2 bg-card hover:bg-card-hover border border-border text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  View Calendar
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
