export type SpaceType =
  | "music"
  | "rehearsal"
  | "recording"
  | "podcast"
  | "art"
  | "maker";

export type RateBand = "budget" | "standard" | "studio-pro";

export type BillingMode = "hourly" | "day";

export type CitySlug =
  | "nairobi"
  | "lagos"
  | "accra"
  | "johannesburg"
  | "kampala"
  | "dakar";

export type AmenitySlug =
  | "acoustic-treatment"
  | "backup-power"
  | "backline-drums"
  | "condenser-mics"
  | "natural-daylight"
  | "ground-load-in"
  | "engineer-optional"
  | "wifi"
  | "sink-bench"
  | "lockable-storage";

export interface SpaceItem {
  slug: string;
  name: string;
  city: string;
  citySlug: CitySlug;
  country: string;
  neighbourhood: string;
  type: SpaceType;
  rateBand: RateBand;
  hourlyRate: string | null;
  dayRate: string | null;
  currency: string;
  rateSummary: string;
  billingModes: BillingMode[];
  capacity: string;
  areaSqm: number;
  loadIn: string;
  powerBackup: string;
  acousticOrLightNote: string;
  amenities: AmenitySlug[];
  gearIncluded: string[];
  artistBrings: string[];
  houseRules: string[];
  hours: string;
  hostName: string;
  hostRole: string;
  hostResponseNote: string;
  contactEmail: string;
  whatsappPrompt: string;
  summary: string;
  description: string[];
  image: string;
  featured: boolean;
}

export const SPACE_TYPE_OPTIONS: { value: SpaceType; label: string; shortLabel: string; icon: string }[] = [
  { value: "music", label: "Music & Songwriting", shortLabel: "Music", icon: "icon-music" },
  { value: "rehearsal", label: "Band Rehearsal", shortLabel: "Rehearsal", icon: "icon-volume-up" },
  { value: "recording", label: "Recording Nook & Suite", shortLabel: "Recording", icon: "icon-sliders" },
  { value: "podcast", label: "Podcast & Voice Booth", shortLabel: "Podcast", icon: "icon-microphone" },
  { value: "art", label: "Visual Art & Daylight Studio", shortLabel: "Art", icon: "icon-paint-brush" },
  { value: "maker", label: "Maker, Clay & Craft Bench", shortLabel: "Maker", icon: "icon-wrench" },
];

export const RATE_BAND_OPTIONS: { value: RateBand; label: string; hint: string }[] = [
  {
    value: "budget",
    label: "Community / Solo Band",
    hint: "Approx. USD 6 to 15/hr or USD 25 to 55/day in local currency",
  },
  {
    value: "standard",
    label: "Working Studio Band",
    hint: "Approx. USD 16 to 35/hr or USD 60 to 130/day in local currency",
  },
  {
    value: "studio-pro",
    label: "Full Ensemble / Production Band",
    hint: "Approx. USD 36+/hr or USD 140+/day in local currency",
  },
];

export const CITY_OPTIONS: { value: CitySlug; label: string; country: string }[] = [
  { value: "nairobi", label: "Nairobi", country: "Kenya" },
  { value: "lagos", label: "Lagos", country: "Nigeria" },
  { value: "accra", label: "Accra", country: "Ghana" },
  { value: "johannesburg", label: "Johannesburg", country: "South Africa" },
  { value: "kampala", label: "Kampala", country: "Uganda" },
  { value: "dakar", label: "Dakar", country: "Senegal" },
];

export const AMENITY_OPTIONS: { value: AmenitySlug; label: string }[] = [
  { value: "acoustic-treatment", label: "Acoustic Treatment" },
  { value: "backup-power", label: "Inverter / Generator Backup" },
  { value: "backline-drums", label: "Backline & Drum Kit" },
  { value: "condenser-mics", label: "Broadcast / Condenser Mics" },
  { value: "natural-daylight", label: "Natural Daylight" },
  { value: "ground-load-in", label: "Easy Ground Load-In" },
  { value: "engineer-optional", label: "In-House Technician Optional" },
  { value: "wifi", label: "Fibre Wi-Fi" },
  { value: "sink-bench", label: "Utility Sink & Heavy Bench" },
  { value: "lockable-storage", label: "Lockable Gear Storage" },
];

export function amenityLabel(slug: AmenitySlug): string {
  return AMENITY_OPTIONS.find((a) => a.value === slug)?.label ?? slug;
}

export function spaceTypeLabel(type: SpaceType): string {
  return SPACE_TYPE_OPTIONS.find((t) => t.value === type)?.label ?? type;
}

export function rateBandLabel(band: RateBand): string {
  return RATE_BAND_OPTIONS.find((r) => r.value === band)?.label ?? band;
}

export const SPACES: SpaceItem[] = [
  {
    slug: "kilimani-brass-rhythm-room",
    name: "Kilimani Brass & Rhythm Room",
    city: "Nairobi",
    citySlug: "nairobi",
    country: "Kenya",
    neighbourhood: "Kilimani, off Argwings Kodhek Rd",
    type: "rehearsal",
    rateBand: "standard",
    hourlyRate: "KES 2,200 / hr",
    dayRate: "KES 13,500 / 8-hr day",
    currency: "KES",
    rateSummary: "KES 2,200/hr or KES 13,500/day",
    billingModes: ["hourly", "day"],
    capacity: "Up to 8 musicians",
    areaSqm: 38,
    loadIn: "Ground-floor courtyard ramp with shaded van bay.",
    powerBackup: "5 kVA pure-sine solar inverter for uninterrupted amps and mixer.",
    acousticOrLightNote:
      "Double-door timber airlock, rockwool bass traps and ceiling cloud panels keep horn and drum bleed contained.",
    amenities: [
      "acoustic-treatment",
      "backup-power",
      "backline-drums",
      "ground-load-in",
      "wifi",
      "lockable-storage",
    ],
    gearIncluded: [
      "5-piece birch shell drum kit with hardware (drummers bring breakables or rent cymbals on site)",
      "1x 200W bass combo, 2x twin-channel guitar amps, 88-key weighted stage piano stand",
      "12-channel vocal PA mixer with 4 dynamic stage mics and floor wedges",
      "Music stands, power conditioners and filtered drinking water station",
    ],
    artistBrings: [
      "Instruments, patch cables, personal in-ear monitors and cymbal pack if preferred",
    ],
    houseRules: [
      "Pack-down starts 10 minutes before the next band's slot so changeovers stay calm.",
      "No open drinks on amplifier heads or the mixer desk.",
      "Brass and full-kit rehearsals run until 21:30 in respect of courtyard neighbours.",
    ],
    hours: "Mon to Sun, 08:30 to 21:30",
    hostName: "Kamau & Wanjiku Sound Collective",
    hostRole: "Musician-run rehearsal annex",
    hostResponseNote: "Usually replies within 3 hours on WhatsApp or email",
    contactEmail: "kilimani-room@apollosstudios.africa",
    whatsappPrompt:
      "Hello, I saw Kilimani Brass & Rhythm Room on Apollos Studios and would like to check rehearsal availability.",
    summary:
      "Treated ground-floor rehearsal room built by gigging Nairobi horn and rhythm players, with full backline and clean inverter backup.",
    description: [
      "Built inside a converted garden outbuilding off Argwings Kodhek Road, Kilimani Brass & Rhythm Room gives working bands a dead-honest rehearsal floor where everyone can actually hear vocals over the snare without ringing ears.",
      "Because power dips shouldn't cut a tour run-through in half, the entire backline and PA run on a dedicated pure-sine solar inverter. Bands preparing festival sets can also reserve lockable overnight cases between consecutive day bookings.",
    ],
    image: "/images/spaces/kilimani-brass-room.jpg",
    featured: true,
  },
  {
    slug: "ngong-road-vocal-mix-nook",
    name: "Ngong Road Vocal & Mix Nook",
    city: "Nairobi",
    citySlug: "nairobi",
    country: "Kenya",
    neighbourhood: "Adams Arcade, Ngong Road",
    type: "recording",
    rateBand: "budget",
    hourlyRate: "KES 1,500 / hr",
    dayRate: "KES 9,000 / 7-hr day",
    currency: "KES",
    rateSummary: "KES 1,500/hr or KES 9,000/day",
    billingModes: ["hourly", "day"],
    capacity: "1 to 3 people (vocalist, producer, writer)",
    areaSqm: 16,
    loadIn: "First-floor quiet corridor near Adams matatu stage.",
    powerBackup: "Online UPS + building backup generator.",
    acousticOrLightNote:
      "Floating vocal booth with broadband fabric panels and silent split ventilation.",
    amenities: [
      "acoustic-treatment",
      "backup-power",
      "condenser-mics",
      "engineer-optional",
      "wifi",
    ],
    gearIncluded: [
      "Large-diaphragm cardioid condenser mic + pop shield + reflection halo",
      "2-in/2-out low-latency USB-C interface and calibrated 7-inch studio monitors",
      "2 pairs of closed-back tracking headphones",
      "Optional house tracking engineer (agreed separately with host)",
    ],
    artistBrings: [
      "Laptop with DAW or SSD drive for stem transfers",
    ],
    houseRules: [
      "Dry-hire guests test monitor gain with the host for 5 minutes at check-in.",
      "Strictly smoke-free and fragrance-light inside the vocal booth.",
    ],
    hours: "Mon to Sat, 09:00 to 21:00",
    hostName: "Achieng Otieno",
    hostRole: "Independent vocal producer & songwriter",
    hostResponseNote: "Replies same business day",
    contactEmail: "ngong-nook@apollosstudios.africa",
    whatsappPrompt:
      "Hello Achieng, I found Ngong Road Vocal & Mix Nook on Apollos Studios and want to ask about booking hours.",
    summary:
      "Quiet, dry-hire friendly vocal booth and mixing desk along Ngong Road for singers, voiceover artists and bedroom producers finishing releases.",
    description: [
      "Not every vocal session needs a forty-channel commercial complex. Ngong Road Vocal & Mix Nook was set up so independent vocalists, spoken-word poets and beatmakers can cut clean lead vocals and check low-end translation on treated monitors at an honest hourly rate.",
      "Bring your own laptop and plug straight into the audio interface over USB-C, or request an in-house tracking engineer when you contact the host.",
    ],
    image: "/images/spaces/ngong-vocal-booth.jpg",
    featured: false,
  },
  {
    slug: "surulere-afrobeat-live-loft",
    name: "Surulere Afrobeat Live Loft",
    city: "Lagos",
    citySlug: "lagos",
    country: "Nigeria",
    neighbourhood: "Adeniran Ogunsanya, Surulere",
    type: "music",
    rateBand: "studio-pro",
    hourlyRate: "NGN 28,000 / hr",
    dayRate: "NGN 185,000 / 8-hr day",
    currency: "NGN",
    rateSummary: "NGN 28,000/hr or NGN 185,000/day",
    billingModes: ["hourly", "day"],
    capacity: "Up to 12 musicians",
    areaSqm: 58,
    loadIn: "Wide gated compound with covered equipment loading bay.",
    powerBackup: "10 kVA hybrid inverter bank plus silenced diesel backup.",
    acousticOrLightNote:
      "High timber ceiling with diffused wall slats tuned for talking drums, horns and electric guitars.",
    amenities: [
      "acoustic-treatment",
      "backup-power",
      "backline-drums",
      "condenser-mics",
      "ground-load-in",
      "engineer-optional",
      "wifi",
    ],
    gearIncluded: [
      "Full 6-piece maple drum kit, conga pair and percussion riser",
      "2x tube guitar combos, 4x10 bass rig, 73-key stage electric piano",
      "24-channel digital stagebox for live multitrack rehearsal capture",
      "Silent split air-conditioning sized for 12 players",
    ],
    artistBrings: [
      "Horns, guitars, sticks, personal percussion and USB drive for rehearsal board mixes",
    ],
    houseRules: [
      "Confirm headcount in advance so seating, stands and headphone mixes are ready.",
      "Compound gate closes to heavy vehicles at 22:30.",
    ],
    hours: "Daily, 09:00 to 23:00",
    hostName: "Tunde & Bisi Soundworks",
    hostRole: "Live arrangement & rehearsal studio",
    hostResponseNote: "Replies within 2 hours",
    contactEmail: "surulere-loft@apollosstudios.africa",
    whatsappPrompt:
      "Hello Surulere Afrobeat Live Loft, I saw your listing on Apollos Studios and want to enquire about dates.",
    summary:
      "Spacious Surulere live room built for full rhythm sections, horn lines, choir arrangements and live-off-the-floor session prep.",
    description: [
      "Surulere has decades of live music lineage, and this 58-square-metre room honours that craft with reliable cooling, clean inverter power and sightlines that let a twelve-piece band lock grooves effortlessly.",
      "Groups rehearsing for concert showcases can capture a 24-track board recording onto their own USB drive at the end of the session.",
    ],
    image: "/images/spaces/surulere-afrobeat-loft.jpg",
    featured: true,
  },
  {
    slug: "yaba-story-podcast-desk",
    name: "Yaba Story & Podcast Desk",
    city: "Lagos",
    citySlug: "lagos",
    country: "Nigeria",
    neighbourhood: "Sabo, Yaba",
    type: "podcast",
    rateBand: "budget",
    hourlyRate: "NGN 14,000 / hr",
    dayRate: "NGN 85,000 / 7-hr day",
    currency: "NGN",
    rateSummary: "NGN 14,000/hr or NGN 85,000/day",
    billingModes: ["hourly", "day"],
    capacity: "Up to 4 hosts/guests + 1 producer",
    areaSqm: 22,
    loadIn: "Second-floor creative hub off Herbert Macaulay Way.",
    powerBackup: "Dedicated silent lithium inverter (zero generator hum during takes).",
    acousticOrLightNote:
      "Heavy acoustic curtains, felt wall tiles and soft key lights for clean audio and optional two-camera video.",
    amenities: [
      "acoustic-treatment",
      "backup-power",
      "condenser-mics",
      "engineer-optional",
      "wifi",
    ],
    gearIncluded: [
      "4 broadcast dynamic mics on low-profile boom arms",
      "4-channel podcast production console with mix-minus phone call-in",
      "4 monitoring headphones and two soft LED key panels",
    ],
    artistBrings: [
      "MicroSD card (UHS-I V30) or laptop for direct multitrack recording",
    ],
    houseRules: [
      "Phones on airplane or silent mode when the red booth indicator is active.",
      "Please arrive 15 minutes early to seat guests comfortably.",
    ],
    hours: "Mon to Sat, 08:00 to 20:00",
    hostName: "Chidinma Okafor",
    hostRole: "Audio journalist & studio host",
    hostResponseNote: "Usually replies within 2 hours",
    contactEmail: "yaba-voice@apollosstudios.africa",
    whatsappPrompt:
      "Hello Chidinma, I found Yaba Story & Podcast Desk on Apollos Studios and would like to ask about recording slots.",
    summary:
      "Inverter-backed four-mic podcast and oral-history room in Yaba with zero generator rumble and mix-minus remote guest support.",
    description: [
      "Nothing ruins a great interview faster than background generator drone or street horn bleed. Yaba Story & Podcast Desk runs 100% on silent lithium batteries during sessions so dialogue stays crisp and intimate.",
      "Ideal for independent roundtables, literary podcasts, audiobook narration and remote radio interviews.",
    ],
    image: "/images/spaces/yaba-voice-desk.jpg",
    featured: true,
  },
  {
    slug: "osu-highlife-percussion-annex",
    name: "Osu Highlife & Percussion Annex",
    city: "Accra",
    citySlug: "accra",
    country: "Ghana",
    neighbourhood: "Osu Ako-Adjei",
    type: "rehearsal",
    rateBand: "budget",
    hourlyRate: "GHS 180 / hr",
    dayRate: "GHS 1,100 / 8-hr day",
    currency: "GHS",
    rateSummary: "GHS 180/hr or GHS 1,100/day",
    billingModes: ["hourly", "day"],
    capacity: "Up to 7 musicians",
    areaSqm: 32,
    loadIn: "Step-free side gate directly off quiet residential lane.",
    powerBackup: "Solar battery backup for PA, amps and fans.",
    acousticOrLightNote:
      "Treated block walls with woven palm-fibre acoustic absorbers and sprung timber drum mat.",
    amenities: [
      "acoustic-treatment",
      "backup-power",
      "backline-drums",
      "ground-load-in",
      "lockable-storage",
    ],
    gearIncluded: [
      "Acoustic drum kit, traditional kpanlogo and djembe pair",
      "Bass amp, 2 guitar combos, 8-channel powered mixer and two vocal mics",
      "Ceiling and floor quiet-blade fans plus shaded courtyard seating",
    ],
    artistBrings: [
      "Guitars, brass, sticks and instrument leads",
    ],
    houseRules: [
      "Acoustic percussion and amplified rehearsals finish by 21:00.",
      "Wipe down shared hand drums and stands after humid evening sessions.",
    ],
    hours: "Mon to Sun, 09:00 to 21:00",
    hostName: "Nii Armah Mensah",
    hostRole: "Percussionist & community room steward",
    hostResponseNote: "Replies within half a day",
    contactEmail: "osu-annex@apollosstudios.africa",
    whatsappPrompt:
      "Hello Nii Armah, I saw Osu Highlife & Percussion Annex on Apollos Studios and would like to check open rehearsal times.",
    summary:
      "Grounded rehearsal room in Osu welcoming highlife ensembles, percussion circles, gospel rhythm sections and young acoustic bands.",
    description: [
      "Stewarded by veteran percussionist Nii Armah Mensah, this step-free Osu room pairs practical acoustic treatment with durable backline gear that works every single evening.",
      "Young ensembles and student trios often split weekday morning blocks at approachable hourly rates.",
    ],
    image: "/images/spaces/osu-highlife-annex.jpg",
    featured: false,
  },
  {
    slug: "labone-clay-sculpture-bench",
    name: "Labone Clay & Sculpture Bench",
    city: "Accra",
    citySlug: "accra",
    country: "Ghana",
    neighbourhood: "Labone, near Dade Street",
    type: "maker",
    rateBand: "standard",
    hourlyRate: null,
    dayRate: "GHS 390 / full day",
    currency: "GHS",
    rateSummary: "GHS 390/day (kiln firing quoted by shelf)",
    billingModes: ["day"],
    capacity: "Up to 6 makers at shared benches",
    areaSqm: 52,
    loadIn: "Wide courtyard double doors for clay bags, armatures and crates.",
    powerBackup: "Grid + backup inverter for wheels and task lighting.",
    acousticOrLightNote:
      "Cross-ventilated workshop with tall louvre windows, plaster wedging tables and clay-trap sinks.",
    amenities: [
      "backup-power",
      "natural-daylight",
      "ground-load-in",
      "sink-bench",
      "lockable-storage",
    ],
    gearIncluded: [
      "3 electric throwing wheels and 2 banding sculpture stands",
      "Heavy hardwood worktables, slab roller and plaster wedging board",
      "Three-stage clay trap wash sink and damp-cabinet shelf space",
      "Scheduled electric kiln bisque/glaze firings (arranged directly with host)",
    ],
    artistBrings: [
      "Stoneware or terracotta clay body, personal ribs/trimming tools, glazes and apron",
    ],
    houseRules: [
      "Wet-sponge benches and wheel splash pans at day's end; never dry-sweep silica dust.",
      "Confirm clay firing cone temperature with the studio tech before loading kiln shelves.",
    ],
    hours: "Tue to Sun, 08:30 to 18:30",
    hostName: "Ama Boateng Ceramics",
    hostRole: "Sculptor & ceramic studio host",
    hostResponseNote: "Replies within 24 hours",
    contactEmail: "labone-clay@apollosstudios.africa",
    whatsappPrompt:
      "Hello Ama, I found Labone Clay & Sculpture Bench on Apollos Studios and would like to enquire about day bench access.",
    summary:
      "Daylight ceramic and sculpture workshop in Labone offering wheel benches, heavy hand-building tables, clay-trap sinks and scheduled kiln access.",
    description: [
      "Ceramists and sculptors rarely fit inside tidy co-working offices. Labone Clay & Sculpture Bench gives makers wet-floor freedom, sturdy wedging tables and proper clay-trap plumbing.",
      "Ideal for independent potters between commissions, visiting residency artists and small-batch sculptural runs.",
    ],
    image: "/images/spaces/labone-clay-kiln.jpg",
    featured: true,
  },
  {
    slug: "maboneng-north-light-canvas-bay",
    name: "Maboneng North-Light Canvas Bay",
    city: "Johannesburg",
    citySlug: "johannesburg",
    country: "South Africa",
    neighbourhood: "Fox Street, Maboneng Precinct",
    type: "art",
    rateBand: "standard",
    hourlyRate: "ZAR 260 / hr",
    dayRate: "ZAR 1,450 / full day",
    currency: "ZAR",
    rateSummary: "ZAR 260/hr or ZAR 1,450/day",
    billingModes: ["hourly", "day"],
    capacity: "1 to 4 visual artists",
    areaSqm: 46,
    loadIn: "Goods lift + wide stairwell for stretched canvases up to 2.2m.",
    powerBackup: "Building solar inverter keeps lighting and Wi-Fi live through load-shedding.",
    acousticOrLightNote:
      "Consistent southern-hemisphere north-facing steel windows providing glare-free colour-accurate daylight.",
    amenities: [
      "backup-power",
      "natural-daylight",
      "wifi",
      "sink-bench",
      "lockable-storage",
    ],
    gearIncluded: [
      "3 heavy H-frame studio easels and 3.6m ply pinning wall",
      "Rolling tabouret carts, solvent-safe metal cabinet and deep wash-up trough",
      "5000K high-CRI daylight tubes for evening critique hours",
    ],
    artistBrings: [
      "Canvases, paper, pigments, brushes and odourless mineral spirits only",
    ],
    houseRules: [
      "Low-odour solvents only; seal rags in the provided metal fire bin.",
      "Use drop cloths when working with fluid acrylics, ink or charcoal.",
    ],
    hours: "Mon to Sun, 08:00 to 20:00",
    hostName: "Thandiwe & Lerato Print/Paint",
    hostRole: "Shared fine-art atelier",
    hostResponseNote: "Replies within 4 hours",
    contactEmail: "maboneng-bay@apollosstudios.africa",
    whatsappPrompt:
      "Hello Thandiwe, I saw Maboneng North-Light Canvas Bay on Apollos Studios and would like to ask about studio days.",
    summary:
      "High-ceilinged fine-art bay in Maboneng with steady north daylight, large-format pinning walls, goods lift access and deep brush sinks.",
    description: [
      "Preparing an exhibition on a bedroom floor limits scale and light accuracy. Maboneng North-Light Canvas Bay offers 46 square metres of unobstructed wall and floor space where painters, illustrators and mixed-media artists can step back six metres from large works.",
      "Solar backup ensures evening work and studio visits never stall during municipal load-shedding.",
    ],
    image: "/images/spaces/maboneng-canvas-bay.jpg",
    featured: true,
  },
  {
    slug: "braamfontein-analog-tracking-suite",
    name: "Braamfontein Analog Tracking Suite",
    city: "Johannesburg",
    citySlug: "johannesburg",
    country: "South Africa",
    neighbourhood: "Juta Street, Braamfontein",
    type: "recording",
    rateBand: "studio-pro",
    hourlyRate: "ZAR 680 / hr",
    dayRate: "ZAR 4,400 / 8-hr day",
    currency: "ZAR",
    rateSummary: "ZAR 680/hr or ZAR 4,400/day",
    billingModes: ["hourly", "day"],
    capacity: "Control room + iso room up to 6 players",
    areaSqm: 54,
    loadIn: "Secure basement parking with ramp straight to studio corridor.",
    powerBackup: "Three-phase solar + battery backup on conditioned studio ground.",
    acousticOrLightNote:
      "Hardwood live room, sightline glass to control room console and tuned main soffit monitors.",
    amenities: [
      "acoustic-treatment",
      "backup-power",
      "backline-drums",
      "condenser-mics",
      "ground-load-in",
      "engineer-optional",
      "wifi",
      "lockable-storage",
    ],
    gearIncluded: [
      "24-channel inline analog console bridged to 32-in/32-out converter",
      "Tuned upright acoustic piano, matched ribbon and condenser mic locker",
      "Near-field and main wood-housed monitors, 4 independent headphone cue boxes",
    ],
    artistBrings: [
      "Hard drive (formatted exFAT or APFS) and personal instruments",
    ],
    houseRules: [
      "Dry-hire engineers complete a 20-minute patchbay orientation before first booking.",
      "Upright piano lid stays closed when moving mic booms nearby.",
    ],
    hours: "Daily, 09:00 to 22:00",
    hostName: "Sipho Khumalo",
    hostRole: "Chief maintenance & mix engineer",
    hostResponseNote: "Replies same day",
    contactEmail: "braam-suite@apollosstudios.africa",
    whatsappPrompt:
      "Hello Sipho, I found Braamfontein Analog Tracking Suite on Apollos Studios and want to discuss tracking dates.",
    summary:
      "Warm wood-panelled control room and tracking booth on Juta Street for jazz ensembles, film scoring, vocal tracking and album mixing.",
    description: [
      "Built for sessions where room tone and sightlines matter, Braamfontein Analog Tracking Suite pairs an inline console workflow with fast digital recall and solar-backed clean power.",
      "Visiting producers can book with Sipho assisting on patch setup or bring their own trusted tracking engineer.",
    ],
    image: "/images/spaces/braam-analog-suite.jpg",
    featured: true,
  },
  {
    slug: "ntinda-garden-podcast-cabin",
    name: "Ntinda Garden Podcast Cabin",
    city: "Kampala",
    citySlug: "kampala",
    country: "Uganda",
    neighbourhood: "Ntinda, off Kiwatule Road",
    type: "podcast",
    rateBand: "budget",
    hourlyRate: "UGX 45,000 / hr",
    dayRate: "UGX 260,000 / 7-hr day",
    currency: "UGX",
    rateSummary: "UGX 45,000/hr or UGX 260,000/day",
    billingModes: ["hourly", "day"],
    capacity: "Up to 3 speakers",
    areaSqm: 18,
    loadIn: "Quiet garden walkway away from boda-boda road noise.",
    powerBackup: "Solar battery bank powers mixer, lights and fibre router all day.",
    acousticOrLightNote:
      "Detached timber cabin lined with barkcloth-wrapped mineral wool panels.",
    amenities: [
      "acoustic-treatment",
      "backup-power",
      "condenser-mics",
      "ground-load-in",
      "wifi",
    ],
    gearIncluded: [
      "3 XLR broadcast microphones with shock mounts and desk stands",
      "Multitrack recorder/interface to SD card or USB laptop",
      "3 studio headphones and shaded veranda prep table",
    ],
    artistBrings: [
      "SD card (32 GB+) or laptop and episode run-sheet",
    ],
    houseRules: [
      "Keep cabin door latched during takes to preserve acoustic seal.",
      "Outdoor garden seating is welcome for guest warm-up chats.",
    ],
    hours: "Mon to Sat, 08:30 to 19:30",
    hostName: "Namukasa Audio Collective",
    hostRole: "Radio producers & storytellers",
    hostResponseNote: "Replies within 3 hours",
    contactEmail: "ntinda-cabin@apollosstudios.africa",
    whatsappPrompt:
      "Hello Namukasa Collective, I saw Ntinda Garden Podcast Cabin on Apollos Studios and want to ask about booking.",
    summary:
      "Solar-powered timber podcast and voiceover cabin tucked inside a leafy Ntinda compound, insulated from street traffic.",
    description: [
      "Set forty metres back from the road in a tree-shaded Ntinda compound, this timber cabin uses locally tailored barkcloth acoustic panels that look warm on camera and sound dead-clean on tape.",
      "Popular with Kampala documentary podcasters, Luganda and English audiobook narrators, and regional NGO radio dramas.",
    ],
    image: "/images/spaces/ntinda-podcast-cabin.jpg",
    featured: false,
  },
  {
    slug: "kololo-print-wood-maker-atelier",
    name: "Kololo Print, Stitch & Wood Atelier",
    city: "Kampala",
    citySlug: "kampala",
    country: "Uganda",
    neighbourhood: "Lower Kololo Terrace",
    type: "maker",
    rateBand: "budget",
    hourlyRate: "UGX 35,000 / hr",
    dayRate: "UGX 190,000 / full day",
    currency: "UGX",
    rateSummary: "UGX 35,000/hr or UGX 190,000/day",
    billingModes: ["hourly", "day"],
    capacity: "Up to 8 makers across textile & joinery zones",
    areaSqm: 64,
    loadIn: "Drive-in courtyard right up to workshop roller shutter.",
    powerBackup: "Solar inverter for sewing machines, exposure unit and hand tools.",
    acousticOrLightNote:
      "Bright clerestory daylight with separated dust-extracted wood bench and clean textile cutting table.",
    amenities: [
      "backup-power",
      "natural-daylight",
      "ground-load-in",
      "wifi",
      "sink-bench",
      "lockable-storage",
    ],
    gearIncluded: [
      "2.8m textile cutting & screen-printing padded table with washout booth",
      "2 industrial straight-stitch machines + 1 four-thread overlocker",
      "Separate joinery bench with vices, clamps, orbital sanders and dust vac",
      "Lockable project cubbies for multi-day garment or prototype runs",
    ],
    artistBrings: [
      "Fabrics, water-based inks, thread, timber stock and personal safety glasses",
    ],
    houseRules: [
      "Keep sawdust work strictly inside the partitioned wood bay.",
      "Water-based screen-print inks only; rinse screens promptly after pulling.",
    ],
    hours: "Mon to Sat, 08:30 to 18:30",
    hostName: "Kato & Nassali Makerspace",
    hostRole: "Textile & furniture designer hosts",
    hostResponseNote: "Replies within 4 hours",
    contactEmail: "kololo-atelier@apollosstudios.africa",
    whatsappPrompt:
      "Hello Kato & Nassali, I saw Kololo Print, Stitch & Wood Atelier on Apollos Studios and want to ask about bench access.",
    summary:
      "Practical dual-zone maker workshop in Lower Kololo with a clean textile and screen-print floor alongside a partitioned wood-assembly bench.",
    description: [
      "Fashion capsule designers, costume makers and small-batch object builders often need long cutting tables and industrial stitch machines for three days rather than a full-year lease.",
      "Kololo Print, Stitch & Wood Atelier rents benches by the hour or full day with clear tool inductions and lockable cubbies.",
    ],
    image: "/images/spaces/kololo-textile-atelier.jpg",
    featured: false,
  },
  {
    slug: "medina-acoustic-kora-salon",
    name: "Medina Acoustic & Kora Salon",
    city: "Dakar",
    citySlug: "dakar",
    country: "Senegal",
    neighbourhood: "Médina, Rue 22",
    type: "music",
    rateBand: "standard",
    hourlyRate: "XOF 12,000 / hr",
    dayRate: "XOF 72,000 / 8-hr day",
    currency: "XOF",
    rateSummary: "XOF 12,000/hr or XOF 72,000/day",
    billingModes: ["hourly", "day"],
    capacity: "Up to 6 acoustic/hybrid musicians",
    areaSqm: 30,
    loadIn: "Interior tiled courtyard off Rue 22, one low step.",
    powerBackup: "Battery inverter for preamps, monitors and quiet ventilation.",
    acousticOrLightNote:
      "Cedar wall diffusers and tuned rug zones crafted for kora, balafon, acoustic guitar, flute and vocals.",
    amenities: [
      "acoustic-treatment",
      "backup-power",
      "condenser-mics",
      "ground-load-in",
      "engineer-optional",
      "wifi",
    ],
    gearIncluded: [
      "Matched stereo small-diaphragm condensers + warm vocal condenser",
      "8-channel clean preamp interface and near-field reference monitors",
      "Armless wooden musician chairs, acoustic guitar stands and tuning station",
    ],
    artistBrings: [
      "Acoustic instruments and laptop/recorder if self-tracking",
    ],
    houseRules: [
      "Designed for acoustic, vocal and low-volume amp sessions rather than heavy drum kits.",
      "Tea is enjoyed in the tiled courtyard outside the cedar salon.",
    ],
    hours: "Mon to Sun, 09:30 to 21:30",
    hostName: "Moussa Ndiaye",
    hostRole: "Acoustic engineer & multi-instrumentalist",
    hostResponseNote: "Replies in French, Wolof or English within 3 hours",
    contactEmail: "medina-salon@apollosstudios.africa",
    whatsappPrompt:
      "Bonjour Moussa, I saw Medina Acoustic & Kora Salon on Apollos Studios and would like to ask about studio availability.",
    summary:
      "Intimate cedar-diffused acoustic writing and recording salon in Dakar's Médina, tailored for strings, griot percussion, vocals and duo rehearsals.",
    description: [
      "Loud band rooms often swallow the delicate overtones of a 21-string kora, nylon guitar or unaccompanied voice. Moussa Ndiaye tuned this quiet courtyard room specifically for acoustic dynamics and intimate songwriting.",
      "Ideal for duo rehearsals, film cue overdubs and unplugged live sessions.",
    ],
    image: "/images/spaces/medina-kora-room.jpg",
    featured: false,
  },
  {
    slug: "plateau-daylight-visual-studio",
    name: "Plateau Daylight Visual Studio",
    city: "Dakar",
    citySlug: "dakar",
    country: "Senegal",
    neighbourhood: "Plateau, near Avenue Lamine Guèye",
    type: "art",
    rateBand: "standard",
    hourlyRate: "XOF 10,000 / hr",
    dayRate: "XOF 58,000 / full day",
    currency: "XOF",
    rateSummary: "XOF 10,000/hr or XOF 58,000/day",
    billingModes: ["hourly", "day"],
    capacity: "1 to 5 artists or lookbook team",
    areaSqm: 44,
    loadIn: "Wide first-floor Colonial-era stairwell with landing pulley hook.",
    powerBackup: "Inverter backup on outlets, fans and daylight lamps.",
    acousticOrLightNote:
      "3.8m ceilings, tall shuttered windows for controllable natural light, matte white critique walls.",
    amenities: [
      "backup-power",
      "natural-daylight",
      "wifi",
      "sink-bench",
      "lockable-storage",
    ],
    gearIncluded: [
      "2 wooden studio easels, 2.4m rolling worktable and vertical drying rack",
      "Seamless backdrop crossbar for artwork documentation shoots",
      "Deep utility sink and lockable flat-file drawers for works on paper",
    ],
    artistBrings: [
      "Substrates, paints, drawing media or camera for portfolio documentation",
    ],
    houseRules: [
      "No aerosol spray paint indoors; courtyard spray zone available by prior request.",
      "Return shutters latched before leaving evening bookings.",
    ],
    hours: "Mon to Sat, 08:30 to 20:00",
    hostName: "Fatou Sow Atelier",
    hostRole: "Visual artist & curator",
    hostResponseNote: "Replies within half a day",
    contactEmail: "plateau-studio@apollosstudios.africa",
    whatsappPrompt:
      "Bonjour Fatou, I found Plateau Daylight Visual Studio on Apollos Studios and would like to ask about day rates.",
    summary:
      "Airy high-ceilinged visual art and portfolio documentation room in Dakar Plateau with shuttered natural light, flat-files and drying racks.",
    description: [
      "Whether preparing canvases for Dak'Art off-venues or photographing finished textiles in true daylight, Plateau Daylight Visual Studio gives visual artists clean walls, generous ceiling height and calm focus.",
      "Bookable by the half-day hour block for artwork documentation or by the full day/week for painting and assembly.",
    ],
    image: "/images/spaces/plateau-light-studio.jpg",
    featured: false,
  },
];

export function getSpaceBySlug(slug: string): SpaceItem | undefined {
  return SPACES.find((s) => s.slug === slug);
}

export function getFeaturedSpaces(): SpaceItem[] {
  return SPACES.filter((s) => s.featured);
}

export function getSpacesByCity(citySlug: CitySlug): SpaceItem[] {
  return SPACES.filter((s) => s.citySlug === citySlug);
}

export function getSpacesByType(type: SpaceType): SpaceItem[] {
  return SPACES.filter((s) => s.type === type);
}
