import Link from "next/link";
import { ArrowLeft, Flag } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Flag className="w-8 h-8 text-accent" />
        </div>
        <h1 className="text-5xl font-black mb-4">
          4<span className="text-accent">0</span>4
        </h1>
        <h2 className="text-xl font-semibold mb-3">Off Track</h2>
        <p className="text-muted leading-relaxed mb-8">
          Looks like you&apos;ve gone off the racing line. The page you&apos;re
          looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
