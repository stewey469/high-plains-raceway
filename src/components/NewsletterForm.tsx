"use client";

import { useState } from "react";
import { CheckCircle2, Mail, Loader2 } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-sm text-accent">
        <CheckCircle2 className="w-4 h-4" />
        Thanks! You&apos;re subscribed.
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!email) return;
        setStatus("loading");
        try {
          const res = await fetch("/api/newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          });
          if (res.ok) {
            setStatus("success");
          } else {
            setStatus("error");
          }
        } catch {
          setStatus("error");
        }
      }}
      className="flex gap-2"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full bg-white/[0.03] border border-border rounded-lg pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
      >
        {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400 mt-1">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
