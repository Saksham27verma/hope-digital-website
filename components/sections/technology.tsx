"use client";

import { useCallback, useId, useState } from "react";
import {
  BatteryCharging,
  Bluetooth,
  Ear,
  Sparkles,
  Waves,
} from "lucide-react";

type TechTab = {
  id: string;
  label: string;
  shortLabel: string;
  Icon: typeof Waves;
  headline: string;
  body: string;
};

const tabs: TechTab[] = [
  {
    id: "ax",
    label: "Signia AX & Integrated Xperience",
    shortLabel: "AX / IX",
    Icon: Waves,
    headline: "Augmented Xperience — speech clarity in noise",
    body: "Signia AX and the Integrated Xperience platform process speech and background sound on separate paths, then recombine them so conversations stay crisp while ambient sound feels natural — ideal for restaurants, offices, and busy Delhi streets.",
  },
  {
    id: "ovp",
    label: "OVP 2.0 (Own Voice Processing)",
    shortLabel: "OVP 2.0",
    Icon: Ear,
    headline: "Your own voice, naturally yours",
    body: "OVP 2.0 detects and processes your own voice separately from other speakers so it never sounds boomy or hollow — a common pain point for first-time wearers. The result is comfortable, all-day wear from day one.",
  },
  {
    id: "bluetooth",
    label: "Bluetooth streaming",
    shortLabel: "Bluetooth",
    Icon: Bluetooth,
    headline: "Calls, music, and media — wirelessly",
    body: "Stream phone calls, podcasts, and music directly to your hearing aids from compatible Android and iOS devices. Stable connectivity keeps you present in conversations without fumbling for earbuds.",
  },
  {
    id: "assistant",
    label: "AI Signia Assistant",
    shortLabel: "AI Assistant",
    Icon: Sparkles,
    headline: "Smarter sound adjustments on demand",
    body: "The Signia app puts an AI assistant in your pocket for quick tuning when environments change — from a quiet workspace to a lively family gathering — so you stay in control without a return visit for every tweak.",
  },
  {
    id: "recharge",
    label: "Rechargeability on the go",
    shortLabel: "Recharge",
    Icon: BatteryCharging,
    headline: "All-day power, sleek charging cases",
    body: "Modern Signia rechargeables pair long-lasting batteries with pocket-friendly charging cases — perfect for commutes across the NCR. Drop them in the case and focus on your day, not disposable batteries.",
  },
];

export function Technology() {
  const baseId = useId();
  const [active, setActive] = useState(0);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => (i + 1) % tabs.length);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => (i - 1 + tabs.length) % tabs.length);
      }
      if (e.key === "Home") {
        e.preventDefault();
        setActive(0);
      }
      if (e.key === "End") {
        e.preventDefault();
        setActive(tabs.length - 1);
      }
    },
    [],
  );

  const current = tabs[active];
  const ActiveIcon = current.Icon;

  return (
    <>
      <section
        id="why-signia"
        className="scroll-mt-28 bg-brand-surface"
        aria-labelledby="why-signia-heading"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2
            id="why-signia-heading"
            className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
          >
            Why Signia with Hearing Hope
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-brand-muted">
            Signia is trusted worldwide for forward-thinking sound innovation.
            Hearing Hope is a brand by Hope Digital Innovations Pvt Ltd, an{" "}
            <strong className="font-semibold text-brand-slate">
              authorized Signia distributor
            </strong>{" "}
            — so you receive genuine products, firmware support, and service
            steps aligned with manufacturer standards.
          </p>
        </div>
      </section>

      <section
        id="technology"
        className="scroll-mt-28 border-t border-brand-border bg-brand-subtle"
        aria-labelledby="technology-heading"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2
            id="technology-heading"
            className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
          >
            Signia technology highlights
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-brand-muted">
            Explore the engineering behind clearer speech, effortless streaming,
            and rechargeable convenience — curated for Delhi NCR lifestyles.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div
                role="tablist"
                aria-label="Signia technology topics"
                aria-orientation="vertical"
                className="flex flex-col gap-2"
                onKeyDown={onKeyDown}
              >
                {tabs.map((tab, index) => {
                  const selected = index === active;
                  const tabId = `${baseId}-tab-${tab.id}`;
                  const panelId = `${baseId}-panel-${tab.id}`;
                  const Icon = tab.Icon;
                  return (
                    <button
                      key={tab.id}
                      id={tabId}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-controls={panelId}
                      tabIndex={selected ? 0 : -1}
                      className={`flex min-h-12 w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-semibold transition-colors sm:text-base ${
                        selected
                          ? "border-brand-accent bg-white text-brand-navy shadow-sm ring-1 ring-brand-accent/20"
                          : "border-transparent bg-white/60 text-brand-slate hover:border-brand-border hover:bg-white"
                      }`}
                      onClick={() => setActive(index)}
                    >
                      <Icon
                        className={`h-5 w-5 shrink-0 ${selected ? "text-brand-accent" : "text-brand-muted"}`}
                        aria-hidden
                      />
                      <span className="flex flex-col">
                        <span>{tab.shortLabel}</span>
                        <span className="text-xs font-normal text-brand-muted sm:hidden">
                          {tab.label}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-8">
              <div
                role="tabpanel"
                id={`${baseId}-panel-${current.id}`}
                aria-labelledby={`${baseId}-tab-${current.id}`}
                className="h-full rounded-2xl border border-brand-border bg-brand-surface p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-subtle text-brand-accent">
                    <ActiveIcon className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy sm:text-2xl">
                      {current.headline}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-brand-muted sm:text-base">
                      {current.label}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-brand-slate sm:text-lg">
                      {current.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
