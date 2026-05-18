import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-28 border-b border-brand-border bg-gradient-to-b from-brand-surface to-brand-subtle"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-3 py-1 text-sm font-medium text-brand-slate shadow-sm">
            <ShieldCheck className="h-4 w-4 text-brand-accent" aria-hidden />
            Authorized Signia distributor · Delhi NCR
          </p>
          <h1
            id="hero-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-5xl lg:leading-tight"
          >
            Rediscover the Joy of Sound with Signia Hearing Aids
          </h1>
          <p className="mt-5 max-w-xl text-lg text-brand-muted sm:text-xl">
            Hearing Hope brings world-class Signia technology closer to you —
            with four experience studios across Delhi NCR and specialists who
            help you hear comfortably in real-world places.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#contact"
              className="inline-flex min-h-12 min-w-[12rem] items-center justify-center rounded-md bg-brand-accent px-6 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-brand-accent-hover"
            >
              Schedule a visit
            </a>
            <a
              href="#technology"
              className="inline-flex min-h-12 min-w-[12rem] items-center justify-center rounded-md border-2 border-brand-navy px-6 py-3 text-base font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
            >
              Explore Signia Tech
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-brand-border bg-white shadow-xl">
            <Image
              src="/images/hero-hearing.jpg"
              alt="Discreet, premium listening technology for everyday life"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
