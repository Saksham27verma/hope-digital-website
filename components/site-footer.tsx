import Link from "next/link";
import { Link2, MessageCircle, Phone, Share2 } from "lucide-react";
import {
  COMPANY_ADDRESS_LINES,
  COMPANY_LEGAL_NAME,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
} from "@/lib/company";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#why-signia", label: "Why Signia" },
  { href: "#technology", label: "Technology" },
  { href: "#centers", label: "Our Centers" },
  { href: "#contact", label: "Contact" },
] as const;

const social = [
  {
    href: "https://www.linkedin.com/",
    label: "Hearing Hope on LinkedIn",
    Icon: Link2,
  },
  {
    href: "https://www.instagram.com/",
    label: "Hearing Hope on Instagram",
    Icon: Share2,
  },
  {
    href: "https://www.facebook.com/",
    label: "Hearing Hope on Facebook",
    Icon: MessageCircle,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-border bg-brand-navy text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white">Hearing Hope</p>
            <p className="mt-1 text-sm text-slate-300">{COMPANY_LEGAL_NAME}</p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
              Address
            </p>
            <address className="mt-2 not-italic text-sm leading-relaxed text-slate-300">
              {COMPANY_ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-4 text-sm text-slate-300">
              GSTIN:{" "}
              <span className="font-mono text-slate-100">07AAHCH3320A1Z9</span>
            </p>
            <a
              href={COMPANY_PHONE_TEL}
              className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-white underline-offset-4 transition-colors hover:underline"
            >
              <Phone className="h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
              {COMPANY_PHONE_DISPLAY}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Quick links
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-200 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Connect
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {social.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-slate-600 text-slate-100 transition-colors hover:border-white hover:bg-white/10"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-8 text-sm text-slate-400">
          <p className="max-w-3xl leading-relaxed">
            <strong className="text-slate-200">Note:</strong> Hearing aid
            comfort and sound balance are best fine-tuned with experience. Visit our centers for a complimentary listening check and
            personalized fitting guidance.
          </p>
          <p className="mt-6 text-slate-500">
            Copyright © 2026 Hearing Hope, {COMPANY_LEGAL_NAME}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
