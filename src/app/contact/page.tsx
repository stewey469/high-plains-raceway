"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Clock,
  Users,
  Briefcase,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import { SITE, MEMBER_CLUBS, MEMBER_CLUB_CONTACTS, SARIAN_MOTORSPORTS } from "@/lib/constants";

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (status === "success") {
    return (
      <div className="bg-card border border-accent/30 rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
        <p className="text-muted">
          Thank you for reaching out. We&apos;ll get back to you as soon as
          possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-accent hover:text-accent-hover text-sm font-semibold transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("loading");
        const form = e.currentTarget;
        const data = new FormData(form);
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              firstName: data.get("firstName"),
              lastName: data.get("lastName"),
              email: data.get("email"),
              phone: data.get("phone"),
              subject: data.get("subject"),
              message: data.get("message"),
            }),
          });
          if (res.ok) {
            setStatus("success");
            form.reset();
          } else {
            setStatus("error");
          }
        } catch {
          setStatus("error");
        }
      }}
      className="space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-first" className="block text-sm font-medium mb-2">First Name</label>
          <input
            id="contact-first"
            name="firstName"
            type="text"
            required
            className="w-full bg-white/[0.03] border border-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="contact-last" className="block text-sm font-medium mb-2">Last Name</label>
          <input
            id="contact-last"
            name="lastName"
            type="text"
            required
            className="w-full bg-white/[0.03] border border-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
            placeholder="Doe"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium mb-2">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="w-full bg-white/[0.03] border border-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium mb-2">Phone (optional)</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          className="w-full bg-white/[0.03] border border-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
          placeholder="(303) 555-1234"
        />
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium mb-2">Subject</label>
        <select id="contact-subject" name="subject" className="w-full bg-white/[0.03] border border-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all">
          <option value="">Select a topic...</option>
          <option value="general">General Inquiry</option>
          <option value="lapping">Open Lapping</option>
          <option value="rental">Track Rental</option>
          <option value="rv">RV/Carport Rental</option>
          <option value="instruction">Instruction</option>
          <option value="club">Club Events</option>
          <option value="sponsorship">Sponsorship</option>
          <option value="employment">Employment</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium mb-2">Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full bg-white/[0.03] border border-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
          placeholder="How can we help you?"
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Please try again or email us directly.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white px-6 py-3.5 rounded-lg text-sm font-semibold transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]"
      >
        {status === "loading" ? (
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        Send Message
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Contact"
              title="Get in Touch"
              description="Questions about events, track rentals, registration, or anything else? We're here to help."
            />
          </AnimateIn>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <AnimateIn direction="left">
                <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
                  <h3 className="font-semibold text-lg">Contact Information</h3>

                  <div className="space-y-5">
                    <a
                      href={`tel:${SITE.phone}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm font-medium group-hover:text-accent transition-colors">
                          Track Information Hotline
                        </div>
                        <div className="text-sm text-muted">{SITE.phone}</div>
                      </div>
                    </a>

                    <a
                      href={`mailto:${SITE.email}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm font-medium group-hover:text-accent transition-colors">
                          Email
                        </div>
                        <div className="text-sm text-muted">{SITE.email}</div>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          Physical Address
                        </div>
                        <div className="text-sm text-muted">
                          {SITE.address.street}
                          <br />
                          {SITE.address.city}, {SITE.address.state}{" "}
                          {SITE.address.zip}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Mailing Address</div>
                        <div className="text-sm text-muted">
                          {SITE.mailing.street}
                          <br />
                          {SITE.mailing.city}, {SITE.mailing.state}{" "}
                          {SITE.mailing.zip}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Track Manager</div>
                        <div className="text-sm text-muted">
                          <a href={`mailto:${SITE.trackManagerEmail}`} className="hover:text-accent transition-colors">
                            {SITE.trackManagerEmail}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Availability</div>
                        <div className="text-sm text-muted">
                          Active during scheduled events
                          <br />
                          Season: {SITE.season}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn direction="left" delay={100}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-semibold mb-4">Registration</h3>
                  <p className="text-sm text-muted mb-4">
                    All event registration and payment is handled through
                    MotorsportReg.com.
                  </p>
                  <a
                    href={SITE.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-border text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                  >
                    MotorsportReg.com
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </AnimateIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimateIn direction="right">
                <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                  <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
                  <ContactForm />
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345!2d${SITE.coordinates.lng}!3d${SITE.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876fb89b4b9c0b5b%3A0x8e14a17d21f3b3e1!2sHigh+Plains+Raceway!5e0!3m2!1sen!2sus!4v1`}
                className="w-full h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="High Plains Raceway Location"
              />
            </div>
            <p className="text-sm text-muted text-center mt-4">
              {SITE.directions}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Member Clubs */}
      <section id="clubs" className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <SectionHeading
              eyebrow="Clubs"
              title="Contact Member Clubs"
              description="Our member clubs organize events throughout the season. Reach out to them directly for event-specific questions."
            />
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MEMBER_CLUB_CONTACTS.map((club, i) => (
              <AnimateIn key={club.name} delay={i * 40}>
                <div className="bg-card border border-border rounded-xl p-5 hover:border-accent/20 transition-all h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm font-semibold">{club.name}</span>
                  </div>
                  <div className="space-y-1 pl-7">
                    {club.contact && (
                      <p className="text-xs text-muted">{club.contact}</p>
                    )}
                    {club.email && (
                      <p className="text-xs">
                        <a href={`mailto:${club.email}`} className="text-accent hover:underline">{club.email}</a>
                      </p>
                    )}
                    {club.phone && (
                      <p className="text-xs text-muted">{club.phone}</p>
                    )}
                    {club.website && (
                      <p className="text-xs">
                        <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{club.website}</a>
                      </p>
                    )}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Sarian Motorsports */}
          <AnimateIn delay={200}>
            <div className="mt-8 bg-card border border-accent/20 rounded-2xl p-6 max-w-md mx-auto">
              <h3 className="font-semibold mb-3 text-center">Driving Instruction</h3>
              <div className="space-y-1.5 text-sm text-center">
                <p className="font-medium">{SARIAN_MOTORSPORTS.name}</p>
                <p className="text-muted">{SARIAN_MOTORSPORTS.owner}</p>
                <p><a href={`tel:${SARIAN_MOTORSPORTS.phone}`} className="text-accent hover:underline">{SARIAN_MOTORSPORTS.phone}</a></p>
                <p><a href={`mailto:${SARIAN_MOTORSPORTS.email}`} className="text-accent hover:underline">{SARIAN_MOTORSPORTS.email}</a></p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Employment */}
      <section id="employment" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <SectionHeading
              eyebrow="Careers"
              title="Work at HPR"
              description="Join our team for the racing season. Seasonal positions available from April through October."
            />
            <div className="bg-card border border-border rounded-2xl p-8">
              <Briefcase className="w-10 h-10 text-accent mx-auto mb-4" />
              <p className="text-muted leading-relaxed mb-4">
                Positions include Front Gate Staff, Concessions Staff,
                Corner Workers, and Office Assistants. Peak season runs
                Thursday through Monday, 7:00 AM – 6:00 PM.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`mailto:${SITE.email}?subject=Employment Inquiry`}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Send Your Resume
                </a>
                <Link
                  href="/employment"
                  className="inline-flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-border text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors"
                >
                  View All Positions
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
