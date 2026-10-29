export interface HostBenefit {
  number: string;
  title: string;
  body: string;
  icon: string;
}

export interface HostTip {
  title: string;
  detail: string;
}

export interface HostFaq {
  question: string;
  answer: string;
}

export interface ArtistVoice {
  name: string;
  role: string;
  city: string;
  quote: string;
  image: string;
}

export const HOST_BENEFITS: HostBenefit[] = [
  {
    number: "01",
    title: "Zero Commission, Direct Contact",
    body: "Apollos Studios never takes a cut of your hourly or day rate. Artists message you directly by WhatsApp or email, and you handle quotes and payment on your own terms.",
    icon: "flaticon-ideas",
  },
  {
    number: "02",
    title: "Fill Quiet Weekday & Morning Hours",
    body: "Most private studios sit dark on Tuesday mornings or between client projects. Listing clear dry-hire or bench hours helps cover rent, inverter upkeep and fresh drumheads.",
    icon: "flaticon-innovation",
  },
  {
    number: "03",
    title: "Right-Fit Enquiries Only",
    body: "Because listings state exact room dimensions, SPL boundaries, power backup and house rules up front, you spend less time explaining that a quiet vocal booth cannot fit a brass band.",
    icon: "flaticon-idea",
  },
  {
    number: "04",
    title: "Full Control Over Your Calendar",
    body: "Nothing is instant-booked without your say. Vet the project, confirm headcount, run a quick studio orientation and decline anything that does not suit your space.",
    icon: "flaticon-analysis",
  },
];

export const HOST_TIPS: HostTip[] = [
  {
    title: "State power reality plainly",
    detail:
      "Musicians and podcasters care deeply about uninterrupted takes. Specify whether you have an automatic pure-sine inverter, online UPS, solar bank or standby generator, and whether air-con stays on backup.",
  },
  {
    title: "Separate what stays vs. what guests bring",
    detail:
      "List exact backline models, easel sizes or wheel counts, and clearly note personal items guests must bring (for example breakable cymbals, SD cards, clay bodies or low-odour solvents).",
  },
  {
    title: "Publish both hourly and day bands where helpful",
    detail:
      "Voiceover artists and solo rehearsers love 2-hour blocks, while bands prepping tours and painters on deadline prefer predictable 7- or 8-hour day rates.",
  },
  {
    title: "Protect neighbour peace with clear curfews",
    detail:
      "Write down load-in instructions, parking limits and exact evening SPL cut-offs so artists arrive prepared and residential landlords stay supportive.",
  },
  {
    title: "Do a 5-minute check-in walk-through",
    detail:
      "Show first-time guests phantom power switches, fire exits, wash-up sinks and cable coiling hooks before the session clock starts.",
  },
  {
    title: "Use simple written confirmations",
    detail:
      "Confirm date, start/pack-down time, headcount, deposit policy and cancellation window in a short WhatsApp or email note so everyone starts on solid ground.",
  },
];

export const HOST_FAQS: HostFaq[] = [
  {
    question: "Does Apollos Studios handle bookings, deposits or payouts?",
    answer:
      "No. Apollos Studios is strictly an independent directory. We never hold funds, process payments or sit in the middle of agreements. Artists contact you directly and settle fees with you.",
  },
  {
    question: "Does it cost anything to list a creative space?",
    answer:
      "Standard directory listings for genuine rehearsal rooms, recording nooks, podcast booths, daylight art bays and maker workshops across African cities are free to submit.",
  },
  {
    question: "Can home or compound studios apply?",
    answer:
      "Yes, provided the room is safe, respects local zoning and neighbour noise rules, and has dedicated creative equipment. For privacy, we publish your neighbourhood rather than street door numbers until you confirm a guest.",
  },
  {
    question: "How do updates or pauses work if my room goes into private lock-out?",
    answer:
      "Just message our editorial desk via the Contact page or WhatsApp with your studio name to update rates, gear lists or temporarily pause enquiries during long album lock-outs.",
  },
];

export const ARTIST_VOICES: ArtistVoice[] = [
  {
    name: "Wanjiru Mwangi",
    role: "Tenor saxophonist & bandleader",
    city: "Nairobi",
    quote:
      "Finding a ground-floor room in Kilimani with real bass traps and solar backup meant our seven-piece horn band could rehearse three festival sets without worrying about power cuts or upset neighbours.",
    image: "/images/people/person-1.jpg",
  },
  {
    name: "Oluwaseun Adeyemi",
    role: "Narrative podcast producer",
    city: "Lagos",
    quote:
      "Generator hum used to cost us hours of audio cleanup. Filtering by inverter-backed podcast booths in Yaba gave us silent four-mic roundtable recordings on the first take.",
    image: "/images/people/person-2.jpg",
  },
  {
    name: "Akosua Mensah-Bonsu",
    role: "Ceramic sculptor",
    city: "Accra",
    quote:
      "Between gallery commissions I needed a heavy wedging bench and clay-trap sink by the day, not a twelve-month warehouse lease. Labone gave me room to build large coil vessels cleanly.",
    image: "/images/people/person-3.jpg",
  },
  {
    name: "Siphesihle Ndlovu",
    role: "Session bassist & tracking engineer",
    city: "Johannesburg",
    quote:
      "As a studio host, listing exact patchbay specs and house rules upfront changed everything. Every band that messages us already knows our load-in ramp, hours and dry-hire checklist.",
    image: "/images/people/person-4.jpg",
  },
  {
    name: "Aminata Diallo",
    role: "Mixed-media painter",
    city: "Dakar",
    quote:
      "Stepping back five metres in true Plateau daylight let me finish four large canvases on schedule while keeping my home apartment free of turpentine and wet stretchers.",
    image: "/images/people/person-5.jpg",
  },
];
