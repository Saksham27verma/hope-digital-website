import Image from "next/image";
import { COMPANY_LEGAL_NAME } from "@/lib/company";

/**
 * Logo file: replace `public/logo.svg` (or switch to `public/logo.png`) with your
 * final brand artwork. Recommended height ~40–48px for the header bar.
 */
export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt={`Hearing Hope — ${COMPANY_LEGAL_NAME}`}
      width={200}
      height={48}
      priority
      className={`h-20 w-25 shrink-0 sm:h-20 ${className}`}
    />
  );
}
