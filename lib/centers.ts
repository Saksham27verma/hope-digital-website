import { COMPANY_ADDRESS_LINES } from "@/lib/company";

export type HearingCenter = {
  id: string;
  name: string;
  addressLines: string[];
  mapsQuery: string;
};

/** Experience centers across Delhi NCR (includes Rohini at the company address). */
export const HEARING_CENTERS: HearingCenter[] = [
  {
    id: "rohini",
    name: "Rohini, New Delhi",
    addressLines: [...COMPANY_ADDRESS_LINES],
    mapsQuery:
      "G-14 Kings Mall Twin District Centre Sector 10 Rohini New Delhi 110085",
  },
  {
    id: "green-park",
    name: "Green Park, New Delhi",
    addressLines: [
      "Shop No. 1, Front Portion, E-12, Ground Floor,",
      "Green Park, New Delhi, Delhi — 110016",
    ],
    mapsQuery:
      "Shop No 1 E-12 Ground Floor Green Park New Delhi 110016",
  },
  {
    id: "indirapuram",
    name: "Indirapuram, Ghaziabad",
    addressLines: [
      "Ground Floor, Krishna Apra, G-17, Plot No. 1,",
      "Shakti Khand 2, Indirapuram, Ghaziabad, Uttar Pradesh — 201014",
    ],
    mapsQuery:
      "Krishna Apra G-17 Shakti Khand 2 Indirapuram Ghaziabad 201014",
  },
  {
    id: "sanjay-nagar",
    name: "Sanjay Nagar, Ghaziabad",
    addressLines: [
      "Ardhman Hospital, District Centre, near District Centre,",
      "Duplex Flats, Block P, Sector 23, Sanjay Nagar, Ghaziabad, Uttar Pradesh — 201017",
    ],
    mapsQuery:
      "Ardhman Hospital Sector 23 Sanjay Nagar Ghaziabad 201017",
  },
];

export function getDirectionsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
