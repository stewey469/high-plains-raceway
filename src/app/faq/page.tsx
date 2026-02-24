import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, HelpCircle } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import { FAQ_ITEMS } from "@/lib/faq";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about High Plains Raceway — pricing, registration, track details, RV camping, location, and more.",
};

function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <FaqJsonLd />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Everything you need to know about driving, spectating, and experiencing High Plains Raceway."
            />
          </AnimateIn>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <AnimateIn key={i} delay={i * 50}>
                <details className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/20 transition-all">
                  <summary className="flex items-start gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-semibold text-[15px] flex-1 pr-4">
                      {item.question}
                    </span>
                    <span className="shrink-0 w-6 h-6 bg-white/[0.04] rounded-md flex items-center justify-center text-muted text-sm transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pl-15 text-sm text-gray-300 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={500}>
            <div className="mt-12 bg-accent/[0.06] border border-accent/20 rounded-xl p-8 text-center">
              <h3 className="text-lg font-bold mb-2">Still Have Questions?</h3>
              <p className="text-muted text-sm mb-6">
                Can&apos;t find what you&apos;re looking for? Reach out directly
                or register for your next event.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={SITE.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-border text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors"
                >
                  MotorsportReg.com
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
