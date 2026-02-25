"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, NavItem, SITE, MOTORSPORTREG_URL } from "@/lib/constants";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

function DropdownMenu({ item, onClose }: { item: NavItem; onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 pt-2 z-50 min-w-[220px]">
      <div className="bg-card border border-border rounded-lg shadow-2xl py-2 overflow-hidden">
        {item.children!.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={onClose}
            className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image
              src="/logo.png"
              alt="High Plains Raceway"
              width={48}
              height={48}
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
              priority
            />
            <span className="hidden sm:inline text-lg font-bold tracking-tight">
              HPR
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children ? handleMouseEnter(item.label) : undefined}
                onMouseLeave={item.children ? handleMouseLeave : undefined}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/5"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <DropdownMenu item={item} onClose={() => setOpenDropdown(null)} />
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
            <a
              href={MOTORSPORTREG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Book Track Time
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background/[0.98] backdrop-blur-md border-t border-border overflow-y-auto overscroll-contain -webkit-overflow-scrolling-touch">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1 pb-24" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white active:bg-white/10 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 border-l border-border pl-4 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2.5 text-sm text-muted hover:text-white active:bg-white/10 transition-colors rounded-md"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 mt-2 border-t border-border space-y-3">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center justify-center gap-2 text-sm text-muted hover:text-white transition-colors py-2"
              >
                <Phone className="w-4 h-4" />
                {SITE.phone}
              </a>
              <a
                href={MOTORSPORTREG_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-accent hover:bg-accent-hover text-white px-5 py-3.5 rounded-lg text-sm font-semibold transition-colors"
              >
                Book Track Time
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
