"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#why-signia", label: "Why Signia" },
  { href: "#technology", label: "Technology" },
  { href: "#centers", label: "Our Centers" },
  { href: "#contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          aria-label="Hearing Hope — go to top"
          className="group flex min-w-0 items-center gap-3 rounded-sm transition-opacity hover:opacity-90"
          onClick={() => setMenuOpen(false)}
        >
          <BrandLogo />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-brand-slate transition-colors hover:bg-brand-subtle hover:text-brand-navy"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex min-h-11 min-w-[11rem] items-center justify-center rounded-md bg-brand-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-accent-hover"
          >
            Book a visit
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-accent px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-hover"
          >
            Book visit
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-brand-border text-brand-navy transition-colors hover:bg-brand-subtle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-brand-border bg-brand-surface lg:hidden ${menuOpen ? "block" : "hidden"}`}
        aria-hidden={!menuOpen}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="min-h-11 rounded-md px-3 py-3 text-base font-medium text-brand-slate transition-colors hover:bg-brand-subtle"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-flex min-h-11 items-center justify-center rounded-md bg-brand-accent px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-accent-hover"
            onClick={() => setMenuOpen(false)}
          >
            Book a visit
          </a>
        </div>
      </div>
    </header>
  );
}
