import Image from "next/image";
import Link from "next/link";
import { SITE, NAV_ITEMS } from "@/lib/constants";
import { MapPin, Phone, Mail, Facebook, ArrowUpRight, ExternalLink } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const quickLinks = NAV_ITEMS.filter(
    (i) => !["Home", "Contact"].includes(i.label)
  );

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="High Plains Raceway"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              The only motorsports facility in America conceived, financed,
              designed, and built entirely by amateur racing clubs. 2.55 miles of
              rolling Colorado terrain.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/[0.04] hover:bg-white/[0.08] border border-border rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-muted" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-start gap-3 text-sm text-muted hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    Track Hotline
                    <br />
                    <span className="text-white font-medium">{SITE.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-3 text-sm text-muted hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Get Started
            </h3>
            <div className="space-y-3">
              <a
                href={SITE.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white/[0.04] hover:bg-white/[0.08] border border-border rounded-lg px-4 py-3 text-sm font-medium transition-colors group"
              >
                Register on MotorsportReg
                <ExternalLink className="w-3.5 h-3.5 text-muted group-hover:text-white transition-colors" />
              </a>
              <Link
                href="/open-lapping"
                className="flex items-center justify-between bg-white/[0.04] hover:bg-white/[0.08] border border-border rounded-lg px-4 py-3 text-sm font-medium transition-colors group"
              >
                Open Lapping Days
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="/calendar"
                className="flex items-center justify-between bg-white/[0.04] hover:bg-white/[0.08] border border-border rounded-lg px-4 py-3 text-sm font-medium transition-colors group"
              >
                View Calendar
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                HPR Newsletter
              </h3>
              <p className="text-xs text-muted">
                Get schedule updates, event announcements, and special offers.
              </p>
            </div>
            <div className="w-full sm:w-80">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} High Plains Raceway. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/track-info#rules"
              className="text-xs text-muted hover:text-white transition-colors"
            >
              Facility Rules
            </Link>
            <Link
              href="/contact"
              className="text-xs text-muted hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
