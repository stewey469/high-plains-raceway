import { Metadata } from "next";
import Link from "next/link";
import {
  Crown,
  Clock,
  Users,
  CarFront,
  Utensils,
  ShieldCheck,
  ExternalLink,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import { VIP_TRACK_DAYS, SITE, MOTORSPORTREG_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "VIP Track Days — $425/Driver Premium Experience",
  description:
    "Premium track day experience at High Plains Raceway — six 30-minute sessions, max 10 cars per session, carport, catered lunch. $425 per driver.",
};

export default function VIPTrackDaysPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="VIP Experience"
              title="VIP Track Days"
              description="The premium track experience — six sessions, catered lunch, limited to 20 drivers. $425 per driver."
            />
          </AnimateIn>
        </div>
      </section>

      {/* Price Card */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4">
                  <Crown className="w-8 h-8 text-accent" />
                </div>
                <div className="text-5xl lg:text-6xl font-bold mb-2">
                  {VIP_TRACK_DAYS.price}
                </div>
                <div className="text-muted text-lg">per driver</div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  What's Included
                </h3>
                {VIP_TRACK_DAYS.includes.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-muted leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Schedule"
              title="Event Timeline"
              description="A full day of premium track time and amenities."
            />
          </AnimateIn>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

              <div className="space-y-8">
                {VIP_TRACK_DAYS.schedule.map((item, i) => (
                  <AnimateIn key={i} delay={i * 100}>
                    <div className="relative flex gap-6">
                      {/* Time */}
                      <div className="shrink-0 w-20 text-right">
                        <div className="text-accent font-semibold text-sm">
                          {item.time}
                        </div>
                      </div>

                      {/* Dot */}
                      <div className="relative shrink-0">
                        <div className="w-4 h-4 bg-accent rounded-full border-4 border-card"></div>
                      </div>

                      {/* Activity */}
                      <div className="flex-1 pb-8">
                        <div className="bg-card border border-border rounded-xl p-5">
                          <p className="font-medium">{item.activity}</p>
                        </div>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Requirements"
              title="Eligibility & Rules"
              description="Important information before you register."
            />
          </AnimateIn>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {VIP_TRACK_DAYS.requirements.map((req, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-muted leading-relaxed">{req}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Cancellation Policy"
              title="Know Before You Register"
              description="Important cancellation terms and credit information."
            />
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Before Event */}
            <AnimateIn delay={0}>
              <div className="bg-card border border-border rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold">Before Event</h3>
                </div>
                <p className="text-muted mb-4">
                  {VIP_TRACK_DAYS.cancellation.beforeEvent}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted">
                    <strong className="text-white">Method:</strong>{" "}
                    {VIP_TRACK_DAYS.cancellation.method}
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* After/No-Show */}
            <AnimateIn delay={100}>
              <div className="bg-card border border-border rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">After/No-Show</h3>
                </div>
                <p className="text-muted mb-4">
                  {VIP_TRACK_DAYS.cancellation.afterOrNoShow}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted">
                    <strong className="text-white">Cross-Use:</strong>{" "}
                    {VIP_TRACK_DAYS.cancellation.crossUse}
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready for the VIP Experience?
              </h2>
              <p className="text-muted text-lg mb-8">
                Register now through MotorsportReg to secure your spot. Limited
                to 20 drivers per event.
              </p>
              <Link
                href={MOTORSPORTREG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Register Now
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
