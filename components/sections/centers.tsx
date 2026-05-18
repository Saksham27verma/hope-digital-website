import { MapPin } from "lucide-react";
import { HEARING_CENTERS, getDirectionsUrl } from "@/lib/centers";

export function Centers() {
  return (
    <section
      id="centers"
      className="scroll-mt-28 border-t border-brand-border bg-brand-subtle"
      aria-labelledby="centers-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2
          id="centers-heading"
          className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
        >
          Our centers across Delhi NCR
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-brand-muted">
          Four welcoming studios for personalized listening sessions, device
          demos, fittings, and ongoing support — with teams who know Signia
          inside and out.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {HEARING_CENTERS.map((center) => (
            <li
              key={center.id}
              className="flex flex-col rounded-2xl border border-brand-border bg-brand-surface p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-brand-accent">
                <MapPin className="h-5 w-5 shrink-0" aria-hidden />
                <span className="text-sm font-semibold uppercase tracking-wide text-brand-muted">
                  Location
                </span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-brand-navy">
                {center.name}
              </h3>
              <address className="mt-3 flex-1 not-italic text-sm leading-relaxed text-brand-slate">
                {center.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={getDirectionsUrl(center.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md border border-brand-navy px-4 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
              >
                Get Directions
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
