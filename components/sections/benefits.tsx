import { Brain, CheckCircle, Navigation, Users, Volume2 } from "lucide-react";

const items = [
  {
    title: "Sharper focus through the day",
    description:
      "When conversations are easy to follow, you spend less energy straining to listen — leaving more room for work, hobbies, and people you love.",
    Icon: Brain,
  },
  {
    title: "Confidence in every conversation",
    description:
      "Catch nuance at dinners and gatherings. Clearer speech means less guessing — and warmer, more relaxed moments with family and colleagues.",
    Icon: Users,
  },
  {
    title: "Awareness in busy places",
    description:
      "Better sense of where voices and ambient cues come from helps you move through markets, crossings, and crowds with steadier confidence.",
    Icon: Navigation,
  },
  {
    title: "Softer background buzz in your ears",
    description:
      "Many Signia solutions include gentle sound-shaping features that can ease ringing or humming between conversations so quiet moments feel calmer.",
    Icon: Volume2,
  },
] as const;

export function Benefits() {
  return (
    <section
      id="benefits"
      className="scroll-mt-28 bg-brand-surface"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <h2
            id="benefits-heading"
            className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
          >
            Everyday wins with modern devices
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Today&apos;s Signia solutions are discreet, intelligent, and built for
            real routines — not just louder sound, but sound that fits your life.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {items.map(({ title, description, Icon }) => (
            <li
              key={title}
              className="flex gap-4 rounded-2xl border border-brand-border bg-brand-subtle/60 p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-brand-accent shadow-sm ring-1 ring-brand-border">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy">{title}</h3>
                <p className="mt-2 flex items-start gap-2 text-base text-brand-slate">
                  <CheckCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent"
                    aria-hidden
                  />
                  <span>{description}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
