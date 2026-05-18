import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Technology } from "@/components/sections/technology";
import { Benefits } from "@/components/sections/benefits";
import { Centers } from "@/components/sections/centers";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:inline-flex focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal focus:rounded-md focus:bg-brand-navy focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <Technology />
        <Benefits />
        <Centers />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
}
