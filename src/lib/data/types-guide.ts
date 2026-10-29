import type { SpaceType } from "./spaces";

export interface SpaceTypeGuide {
  type: SpaceType;
  title: string;
  subtitle: string;
  image: string;
  typicalSetup: string[];
  whatToExpect: string;
  typicalRates: string;
  questionsToAskHost: string[];
  whatToBring: string;
}

export const SPACE_TYPE_GUIDES: SpaceTypeGuide[] = [
  {
    type: "music",
    title: "Music & Songwriting Rooms",
    subtitle: "Tuned writing rooms, acoustic salons and live ensemble spaces",
    image: "/images/types/type-music.jpg",
    typicalSetup: [
      "Keyboard or upright piano, reference monitors, small mixer and comfortable seating",
      "Balanced acoustic treatment that keeps natural room warmth without harsh slap-back",
      "Reliable inverter power for synths, laptops, pedalboards and preamps",
    ],
    whatToExpect:
      "Music and songwriting rooms bridge the gap between a bedroom desk and a loud band rehearsal bunker. Expect calm acoustics where three or four collaborators can write arrangements, rehearse acoustic strings or horns, and demo ideas without fatigue.",
    typicalRates:
      "Usually USD 8 to 28/hr (or USD 45 to 140/day) in local currency depending on room size and instrument locker.",
    questionsToAskHost: [
      "Is the room suited to brass or hand percussion, or kept strictly low-volume?",
      "Which instruments stay permanently in the room versus requested in advance?",
      "Is backup battery power automatic if grid power drops mid-session?",
    ],
    whatToBring:
      "Personal guitars, horns, sticks, audio interface or laptop if capturing writing demos, and spare 1/4-inch jack leads.",
  },
  {
    type: "rehearsal",
    title: "Band Rehearsal Rooms",
    subtitle: "Sound-isolated floors with backline amps, drum shells and vocal PA",
    image: "/images/types/type-rehearsal.jpg",
    typicalSetup: [
      "5-piece drum shell kit with stands, bass combo, two guitar amps and vocal PA wedges",
      "Heavy doors, bass traps and wall absorption to handle full band SPL safely",
      "Step-free or wide-door load-in for pedalboards, keyboards and percussion cases",
    ],
    whatToExpect:
      "A good rehearsal room saves bands from hauling heavy speaker cabinets across town while keeping neighbours peaceful. Most rooms include drum shells and core amplifiers; drummers are often asked to bring cymbals, snare or kick pedal so delicate bronze stays personal.",
    typicalRates:
      "Typically USD 12 to 25/hr (or USD 70 to 130 for an 8-hour showcase lock-out) split across band members.",
    questionsToAskHost: [
      "Are cymbals, snare drum and kick pedal included or rented separately?",
      "How many vocal microphones and monitor mixes are available on the PA?",
      "What time do evening high-volume rehearsals wrap up?",
    ],
    whatToBring:
      "Cymbals, sticks, guitars, keyboards, patch cables, ear protection and printed setlists.",
  },
  {
    type: "recording",
    title: "Recording Nooks & Tracking Suites",
    subtitle: "Dry-hire vocal booths up to full multi-room analog and digital consoles",
    image: "/images/types/type-recording.jpg",
    typicalSetup: [
      "Isolated vocal booth or treated live room with low-noise condenser/dynamic mics",
      "Calibrated studio monitors, audio interface/converters and cue headphone distribution",
      "Clean conditioned power on online UPS or solar-battery inverter",
    ],
    whatToExpect:
      "Recording listings on Apollos Studios clearly state whether they are dry-hire (bring your own producer/laptop and plug into the house interface) or assisted by an in-house tracking engineer. Always confirm sample rates, mic locker options and stem transfer time before the clock ends.",
    typicalRates:
      "Vocal nooks start around USD 10 to 18/hr; full multi-room tracking suites run USD 30 to 65/hr or day lock-outs.",
    questionsToAskHost: [
      "Is the quoted rate dry-hire, or does it include a tracking/patch engineer?",
      "Which audio interface or console connects to guest laptops (USB-C, Thunderbolt)?",
      "Are booth air-conditioning and inverter fans silent during quiet vocal takes?",
    ],
    whatToBring:
      "Laptop with DAW or fast external SSD (exFAT/APFS), reference tracks, lyrics and water.",
  },
  {
    type: "podcast",
    title: "Podcast & Voice Booths",
    subtitle: "Dead-quiet rooms for interviews, audiobooks, radio drama and video pods",
    image: "/images/types/type-podcast.jpg",
    typicalSetup: [
      "2 to 4 broadcast microphones on boom arms with individual headphone monitoring",
      "Multitrack podcast recorder (SD card + USB) with Bluetooth/phone mix-minus",
      "Battery inverter backup so zero generator rumble enters dialogue tracks",
    ],
    whatToExpect:
      "Built for spoken clarity, podcast desks eliminate street traffic, boda/okada horns and room echo. Many hosts also provide soft key lighting and neutral backdrops if you bring cameras for video episodes.",
    typicalRates:
      "Typically USD 9 to 22/hr in local currency, with half-day batch rates for recording multiple episodes.",
    questionsToAskHost: [
      "Does the desk record isolated multitrack WAV files to an SD card?",
      "Is video lighting included if our producer brings two tripods?",
      "Is there a quiet waiting area for the next episode's guest?",
    ],
    whatToBring:
      "Formatted UHS-I SD card (32 GB+) or laptop, episode outline and backup storage drive.",
  },
  {
    type: "art",
    title: "Visual Art & Daylight Studios",
    subtitle: "High-wall painting bays, print rooms and portfolio documentation spaces",
    image: "/images/types/type-art.jpg",
    typicalSetup: [
      "Tall windows with consistent natural light plus high-CRI evening tubes",
      "Sturdy H-frame easels, ply pinning walls, rolling worktables and deep wash sinks",
      "Wide doors or goods lifts for moving stretched canvases and framed works",
    ],
    whatToExpect:
      "Visual art spaces give painters, illustrators, photographers and mixed-media practitioners room to work large, step back for perspective and leave wet canvases safely on drying racks when booking multi-day runs.",
    typicalRates:
      "Most artists book day rates around USD 20 to 80/day depending on floor area and private storage.",
    questionsToAskHost: [
      "Which solvents, fixatives or mediums are permitted indoors?",
      "Can wet canvases stay on a drying rack overnight between booked days?",
      "What are the maximum door and stairwell dimensions for large stretchers?",
    ],
    whatToBring:
      "Canvases, paper, pigments, brushes, drop cloths and low-odour mediums.",
  },
  {
    type: "maker",
    title: "Maker, Clay & Craft Benches",
    subtitle: "Shared ceramic wheels, textile print tables, industrial stitch & wood bays",
    image: "/images/types/type-maker.jpg",
    typicalSetup: [
      "Heavy workbenches, pottery wheels, industrial sewing machines or hand-tool stations",
      "Clay-trap utility sinks, dust extraction and ventilated finishing courtyards",
      "Lockable project cubbies and optional kiln firing or tool orientation",
    ],
    whatToExpect:
      "Maker studios handle dust, water, clay, ink and heavy clamping that home apartments cannot. Hosts usually run a short safety and tool-care check on your first morning so shared wheels, kilns and blades stay sharp for everyone.",
    typicalRates:
      "Commonly booked by the full day (USD 15 to 55/day in local currency); kiln shelves or consumables billed separately.",
    questionsToAskHost: [
      "Is a short machine or kiln safety induction required on day one?",
      "Which clay bodies, firing cones or water-based inks does the workshop support?",
      "Is lockable shelf space available for pieces drying over several days?",
    ],
    whatToBring:
      "Raw materials (clay, fabric, timber), personal hand tools, closed-toe shoes and work apron.",
  },
];
