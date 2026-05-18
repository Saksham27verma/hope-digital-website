"use client";

import { useMemo, useState } from "react";
import { CheckCircle, Phone } from "lucide-react";
import { HEARING_CENTERS } from "@/lib/centers";
import {
  COMPANY_LEGAL_NAME,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
} from "@/lib/company";

type FormState = {
  name: string;
  phone: string;
  location: string;
  date: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  location: "",
  date: "",
};

function normalizePhone(value: string): string {
  return value.replace(/\D/g, "");
}

function isValidIndianMobile(digits: string): boolean {
  if (digits.length === 10) return /^[6-9]\d{9}$/.exec(digits) !== null;
  if (digits.length === 12 && digits.startsWith("91")) {
    return /^91[6-9]\d{9}$/.exec(digits) !== null;
  }
  if (digits.length === 13 && digits.startsWith("091")) {
    return /^091[6-9]\d{9}$/.exec(digits) !== null;
  }
  return false;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  const minDate = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.toISOString().slice(0, 10);
  }, []);

  function validate(values: FormState): Partial<Record<keyof FormState, string>> {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim() || values.name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }
    const digits = normalizePhone(values.phone);
    if (!isValidIndianMobile(digits)) {
      next.phone =
        "Enter a valid 10-digit Indian mobile number (or +91 followed by 10 digits).";
    }
    if (!values.location) {
      next.location = "Please choose a preferred studio.";
    }
    if (!values.date) {
      next.date = "Please select a preferred date.";
    } else if (values.date < minDate) {
      next.date = "Date cannot be in the past.";
    }
    return next;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-brand-surface"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
            >
              Book your complimentary listening session
            </h2>
            <p className="mt-4 text-lg text-brand-muted">
              Share your details and preferred studio. Our team will reach out
              to confirm your visit and answer any questions about Signia
              options.
            </p>
            <a
              href={COMPANY_PHONE_TEL}
              className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-lg border border-brand-border bg-white px-4 py-3 text-base font-semibold text-brand-navy shadow-sm transition-colors hover:border-brand-accent hover:bg-brand-subtle"
            >
              <Phone className="h-5 w-5 text-brand-accent" aria-hidden />
              Call {COMPANY_PHONE_DISPLAY}
            </a>
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-brand-border bg-brand-subtle p-4">
              <CheckCircle
                className="mt-0.5 h-6 w-6 shrink-0 text-brand-accent"
                aria-hidden
              />
              <div>
                <p className="font-semibold text-brand-navy">
                  Authorized Signia Distributor
                </p>
                <p className="mt-1 text-sm text-brand-muted">
                  Genuine Signia products and manufacturer-aligned support from{" "}
                  {COMPANY_LEGAL_NAME}.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-brand-border bg-white p-6 shadow-lg sm:p-8"
              noValidate
            >
              <fieldset className="space-y-5">
                <legend className="sr-only">Appointment request</legend>

                <div>
                  <label
                    htmlFor="lead-name"
                    className="block text-sm font-semibold text-brand-slate"
                  >
                    Full name
                  </label>
                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="mt-2 block w-full min-h-12 rounded-md border border-brand-border px-3 py-2 text-base text-brand-navy shadow-sm transition-colors placeholder:text-brand-muted/70 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
                    placeholder="e.g. Priya Sharma"
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? "lead-name-error" : undefined}
                  />
                  {errors.name ? (
                    <p id="lead-name-error" className="mt-1 text-sm text-brand-accent" role="alert">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="lead-phone"
                    className="flex items-center gap-2 text-sm font-semibold text-brand-slate"
                  >
                    <Phone className="h-4 w-4 text-brand-accent" aria-hidden />
                    Phone number
                  </label>
                  <input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className="mt-2 block w-full min-h-12 rounded-md border border-brand-border px-3 py-2 text-base text-brand-navy shadow-sm transition-colors placeholder:text-brand-muted/70 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
                    placeholder="10-digit mobile or +91…"
                    aria-invalid={errors.phone ? true : undefined}
                    aria-describedby={
                      errors.phone ? "lead-phone-error" : undefined
                    }
                  />
                  {errors.phone ? (
                    <p id="lead-phone-error" className="mt-1 text-sm text-brand-accent" role="alert">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="lead-location"
                    className="block text-sm font-semibold text-brand-slate"
                  >
                    Preferred studio
                  </label>
                  <select
                    id="lead-location"
                    name="location"
                    value={form.location}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, location: e.target.value }))
                    }
                    className="mt-2 block w-full min-h-12 rounded-md border border-brand-border bg-white px-3 py-2 text-base text-brand-navy shadow-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
                    aria-invalid={errors.location ? true : undefined}
                    aria-describedby={
                      errors.location ? "lead-location-error" : undefined
                    }
                  >
                    <option value="">Select a center</option>
                    {HEARING_CENTERS.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  {errors.location ? (
                    <p id="lead-location-error" className="mt-1 text-sm text-brand-accent" role="alert">
                      {errors.location}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="lead-date"
                    className="block text-sm font-semibold text-brand-slate"
                  >
                    Preferred date
                  </label>
                  <input
                    id="lead-date"
                    name="date"
                    type="date"
                    min={minDate}
                    value={form.date}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, date: e.target.value }))
                    }
                    className="mt-2 block w-full min-h-12 rounded-md border border-brand-border px-3 py-2 text-base text-brand-navy shadow-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
                    aria-invalid={errors.date ? true : undefined}
                    aria-describedby={errors.date ? "lead-date-error" : undefined}
                  />
                  {errors.date ? (
                    <p id="lead-date-error" className="mt-1 text-sm text-brand-accent" role="alert">
                      {errors.date}
                    </p>
                  ) : null}
                </div>

                <p className="text-xs text-brand-muted">
                  This form is for visit requests only. Prefer to talk now? Call{" "}
                  <a
                    className="font-semibold text-brand-slate underline-offset-2 hover:underline"
                    href={COMPANY_PHONE_TEL}
                  >
                    {COMPANY_PHONE_DISPLAY}
                  </a>
                  .
                </p>

                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-brand-accent px-6 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-brand-accent-hover sm:w-auto"
                >
                  Submit request
                </button>
              </fieldset>

              {submitted ? (
                <div
                  className="mt-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-900"
                  role="status"
                >
                  <p className="font-semibold">Thank you — request received.</p>
                  <p className="mt-1 text-sm">
                    Our team will call you shortly to confirm your visit time.
                  </p>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
