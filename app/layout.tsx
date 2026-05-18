import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { COMPANY_LEGAL_NAME } from "@/lib/company";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hearing Hope | Authorized Signia Hearing Aids — Delhi NCR",
  description: `Hearing Hope (${COMPANY_LEGAL_NAME}) — authorized Signia distributor with studios across Delhi NCR. Book a complimentary listening session.`,
  openGraph: {
    title: "Hearing Hope | Signia Hearing Aids Delhi NCR",
    description:
      "Authorized Signia distributor. Premium listening experiences across Delhi NCR.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased text-brand-navy bg-background">
        {children}
      </body>
    </html>
  );
}
