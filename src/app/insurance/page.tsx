import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  XCircle,
  CheckCircle2,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import { TRACK_DAY_INSURANCE, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Track Day Insurance — Protect Your Vehicle",
  description:
    "OpenTrack insurance for High Plains Raceway track days — physical damage and liability coverage for cars. Single-day or 12-month plans available.",
};

export default function InsurancePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Protection"
              title="Track Day Insurance"
              description="Protect your vehicle and yourself with track day insurance through OpenTrack."
            />
          </AnimateIn>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-5">
            {TRACK_DAY_INSURANCE.coverageTypes.map((coverage, i) => (
              <AnimateIn key={coverage.type} delay={i * 80}>
                <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:bg-card-hover hover:border-accent/20 transition-all h-full">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                    <ShieldCheck className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{coverage.type}</h3>
                  <p className="text-muted leading-relaxed">{coverage.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible Events */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Eligibility"
              title="Eligible Events"
              description="OpenTrack insurance is available for the following events at High Plains Raceway."
            />
          </AnimateIn>
          <div className="max-w-3xl mx-auto space-y-4 mt-12">
            {TRACK_DAY_INSURANCE.eligibleEvents.map((event, i) => (
              <AnimateIn key={event} delay={i * 60}>
                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:bg-card-hover hover:border-accent/20 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-muted">{event}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl mx-auto bg-card border-2 border-accent/30 rounded-2xl p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <XCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-accent">
                    Important Exclusion
                  </h3>
                  <p className="text-lg font-medium">
                    {TRACK_DAY_INSURANCE.exclusions[0]}
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Purchase Options */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Options"
              title="Purchase Options"
              description="Choose the coverage plan that works best for your track day schedule."
            />
          </AnimateIn>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5 mt-12">
            {TRACK_DAY_INSURANCE.purchaseOptions.map((option, i) => (
              <AnimateIn key={option} delay={i * 80}>
                <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:bg-card-hover hover:border-accent/20 transition-all text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{option}</h3>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted mb-6">
                Questions about insurance?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Contact Us
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
