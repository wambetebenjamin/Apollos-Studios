import type { CitySlug } from "./spaces";

export interface CityProfile {
  slug: CitySlug;
  name: string;
  country: string;
  currency: string;
  image: string;
  headline: string;
  creativeNeighbourhoods: string[];
  sceneNote: string;
  practicalTip: string;
  powerAndAccessNote: string;
}

export const CITY_PROFILES: CityProfile[] = [
  {
    slug: "nairobi",
    name: "Nairobi",
    country: "Kenya",
    currency: "KES (Kenyan Shilling)",
    image: "/images/cities/nairobi.jpg",
    headline: "Garden rehearsal annexes, Ngong Road vocal booths and industrial maker yards.",
    creativeNeighbourhoods: [
      "Kilimani & Kileleshwa",
      "Ngong Road & Adams Arcade",
      "Westlands & Lower Kabete",
      "Industrial Area & Lavington",
    ],
    sceneNote:
      "Nairobi's live band circuit, Benga-jazz fusion players, spoken-word collectives and documentary podcasters rely heavily on converted residential compounds where soundproofing and neighbour etiquette matter.",
    practicalTip:
      "Rainy evening traffic along Ngong Road and Uhuru Highway builds fast after 16:30; aim for morning blocks or ground-floor courtyard load-ins when moving amps or percussion.",
    powerAndAccessNote:
      "Most working studios run solar-lithium inverters or automatic UPS racks to protect preamps during KPLC feeder switches.",
  },
  {
    slug: "lagos",
    name: "Lagos",
    country: "Nigeria",
    currency: "NGN (Nigerian Naira)",
    image: "/images/cities/lagos.jpg",
    headline: "Surulere live rehearsal lofts, Yaba podcast rooms and Lekki/Ikeja vocal suites.",
    creativeNeighbourhoods: [
      "Surulere (Adeniran Ogunsanya)",
      "Yaba & Sabo",
      "Ikeja GRA & Maryland",
      "Victoria Island & Lekki Phase 1",
    ],
    sceneNote:
      "From twelve-piece Afrobeat and gospel rhythm sections on the Mainland to late-night songwriting camps and tech-culture podcasts in Yaba, Lagos studios work hard round the clock.",
    practicalTip:
      "Cross-bridge travel between Mainland and Island can double session commute time; filter spaces on the side of town where most of your band or guests live.",
    powerAndAccessNote:
      "Prioritise rooms listing pure-sine lithium inverter banks so condenser mics and podcast takes never pick up diesel generator rumble.",
  },
  {
    slug: "accra",
    name: "Accra",
    country: "Ghana",
    currency: "GHS (Ghanaian Cedi)",
    image: "/images/cities/accra.jpg",
    headline: "Osu highlife rehearsal rooms, Labone ceramic benches and East Legon mix suites.",
    creativeNeighbourhoods: [
      "Osu & Ako-Adjei",
      "Labone & Cantonments",
      "Adabraka & Asylum Down",
      "East Legon & Spintex",
    ],
    sceneNote:
      "Accra blends deep highlife and traditional percussion heritage with contemporary alté vocal rooms, ceramic workshops and gallery preparation spaces.",
    practicalTip:
      "Coastal humidity in Accra is tough on drumheads, guitar strings and untreated timber; wipe down shared instruments and use silica packs inside mic lockers.",
    powerAndAccessNote:
      "Solar battery backups and voltage stabilisers are standard in serious Accra rooms to keep tube amps and kilns steady.",
  },
  {
    slug: "johannesburg",
    name: "Johannesburg",
    country: "South Africa",
    currency: "ZAR (South African Rand)",
    image: "/images/cities/johannesburg.jpg",
    headline: "Braamfontein analog suites, Maboneng north-light art bays and Newtown band floors.",
    creativeNeighbourhoods: [
      "Braamfontein & Juta Street",
      "Maboneng & Jeppestown",
      "Newtown & Marshalltown",
      "Melville & Rosebank",
    ],
    sceneNote:
      "Joburg's former warehouse and commercial floors offer generous ceiling heights for large-scale painting, jazz tracking, amapiano vocal production and printmaking.",
    practicalTip:
      "In the southern hemisphere, north-facing warehouse windows give the cleanest colour-true daylight for painters and textile studios.",
    powerAndAccessNote:
      "Check each listing's solar/inverter capacity and secure off-street basement or courtyard parking for evening load-outs.",
  },
  {
    slug: "kampala",
    name: "Kampala",
    country: "Uganda",
    currency: "UGX (Ugandan Shilling)",
    image: "/images/cities/kampala.jpg",
    headline: "Ntinda garden audio cabins, Kololo maker ateliers and Muyenga acoustic rooms.",
    creativeNeighbourhoods: [
      "Ntinda & Bukoto",
      "Kololo & Kamwokya",
      "Muyenga & Kabalagala",
      "Bugolobi",
    ],
    sceneNote:
      "Kampala's creative rooms thrive in leafy hillside compounds set back from boda-boda thoroughfares, uniting Kadongo Kamu and jazz players with fashion, print and wood makers.",
    practicalTip:
      "Compound studios tucked 30 metres off main roads offer far cleaner vocal and podcast floors than roadside commercial blocks.",
    powerAndAccessNote:
      "Solar-inverter setups dominate Kampala's best small studios, keeping recording booths cool and fan-free.",
  },
  {
    slug: "dakar",
    name: "Dakar",
    country: "Senegal",
    currency: "XOF (West African CFA Franc)",
    image: "/images/cities/dakar.jpg",
    headline: "Médina acoustic salons, Plateau daylight ateliers and Ouakam rehearsal floors.",
    creativeNeighbourhoods: [
      "Médina & Gueule Tapée",
      "Dakar Plateau",
      "Ouakam & Mamelles",
      "Sacré-Cœur & Mermoz",
    ],
    sceneNote:
      "Home to mbalax percussion powerhouses, griot string masters, French/Wolof podcast collectives and the Dak'Art contemporary visual art community.",
    practicalTip:
      "Many hosts correspond fluently in French and Wolof alongside English; send clear session hours, headcount and instrument lists up front.",
    powerAndAccessNote:
      "Courtyard load-ins and shuttered tall windows keep Plateau and Médina ateliers naturally bright while blocking coastal Harmattan dust.",
  },
];
