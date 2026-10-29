import type { Locale } from "./site";

export const VOICE_TOUR_ORDER = [
  "/",
  "/spaces",
  "/types",
  "/cities",
  "/hosts",
  "/about",
  "/guidelines",
  "/list",
  "/saved",
  "/contact",
] as const;

const voiceScriptsEn: Record<string, string> = {
  "/": "Welcome to Apollos Studios. Space to make the work. Browse independent rehearsal rooms, recording nooks, podcast booths, daylight art bays and maker workshops across Nairobi, Lagos, Accra, Johannesburg, Kampala and Dakar. Filter by city, room type, rate band and backup power, then arrange directly with studio hosts.",
  "/spaces":
    "In the Apollos Studios directory, you can filter rooms by African city, creative discipline, hourly or full-day rate band, and practical amenities such as acoustic treatment, pure-sine inverter backup or ground-floor load-in. Save favourites locally or open any space for full room specs and direct host contact.",
  "/types":
    "Our space types guide covers six disciplines on Apollos Studios: music writing rooms, band rehearsal floors, recording nooks, podcast booths, daylight visual art studios and maker benches, with typical gear lists, rate bands and questions to ask hosts before you book.",
  "/hosts":
    "For studio hosts and collectives, Apollos Studios is a commission-free independent directory. Sharing clear gear lists, power backup details and neighbour-friendly house rules helps fill quiet weekday studio hours with respectful artists.",
  "/cities":
    "Across six African cities, Nairobi, Lagos, Accra, Johannesburg, Kampala and Dakar, each city guide highlights active studio neighbourhoods, transit and load-in realities, and direct links to local listings.",
  "/list":
    "To list a rehearsal room, vocal booth, art studio or maker bench, complete the listing form with your room specifications, rate band and house rules. Saved submissions also appear in your local My Listings browser drawer.",
  "/saved":
    "Your saved spaces and submitted listings are stored privately in this browser, with no account password, tracking dashboard or cloud profile required.",
  "/about":
    "About Apollos Studios. Creative work needs room for volume, mess, focus and daylight. We maintain an artist-respectful, independent directory connecting working musicians, podcasters, painters and makers directly with local studio stewards.",
  "/guidelines":
    "Our studio guidelines outline practical standards for artists and hosts covering punctual pack-downs, hearing safety, clean backup power, transparent pricing and neighbour respect.",
  "/contact":
    "You can reach the Apollos Studios editorial desk in Nairobi by message, email or WhatsApp for listing updates, corrections or city suggestions. For room bookings, always contact the studio host directly on each listing.",
  "/privacy":
    "Privacy policy. Apollos Studios collects minimal contact and listing details when you submit a form, uses no advertising trackers, and keeps saved spaces and submitted drafts in your local browser storage.",
  "/terms":
    "Terms of use. Apollos Studios is an independent directory only. We do not operate studios, process bookings or payments, or guarantee availability. Always arrange directly with hosts and follow house rules and local laws.",
};

const voiceScriptsSw: Record<string, string> = {
  "/": "Karibu Apollos Studios. Nafasi ya kufanya kazi ya sanaa. Tafuta vyumba vya mazoezi ya muziki, studio za kurekodi, karakana za ufundi na studio za sanaa katika miji ya Nairobi, Lagos, Accra, Johannesburg, Kampala na Dakar. Wasiliana moja kwa moja na wenyeji wa vyumba.",
  "/spaces":
    "Katika orodha ya vyumba vya Apollos Studios, chuja kulingana na mji, aina ya chumba, kiwango cha bei ya saa au siku, na huduma kama umeme wa akiba wa sola. Hifadhi vyumba unavyopenda au fungua maelezo kamili.",
  "/types":
    "Mwongozo wa aina sita za vyumba unaeleza vyumba vya kutunga muziki, mazoezi ya bendi, kurekodi sauti, podikasti, studio za uchoraji zenye mwanga wa mchana na karakana za ufundi.",
  "/cities":
    "Gundua mitaa ya ubunifu katika miji sita ya Afrika: Nairobi, Lagos, Accra, Johannesburg, Kampala na Dakar pamoja na usafiri na upakiaji wa vifaa.",
  "/hosts":
    "Apollos Studios ni orodha huru isiyotoza kamisheni. Weka maelezo ya vifaa, umeme wa akiba na sheria za chumba ili wasanii wawasiliane nawe moja kwa moja.",
  "/about":
    "Kuhusu Apollos Studios. Kazi ya ubunifu inahitaji nafasi ya sauti, mwanga na utulivu. Tunaunganisha wasanii moja kwa moja na watunzaji wa studio.",
};

const voiceScriptsFr: Record<string, string> = {
  "/": "Bienvenue sur Apollos Studios. L'espace pour créer l'œuvre. Découvrez des salles de répétition, cabines d'enregistrement, studios podcast et ateliers d'artistes à Nairobi, Lagos, Accra, Johannesburg, Kampala et Dakar. Contactez directement chaque hôte sans commission.",
  "/spaces":
    "Dans le répertoire Apollos Studios, filtrez les espaces par ville, discipline créative, tarif horaire ou journée et secours électrique, puis prenez contact directement avec l'hôte.",
  "/types":
    "Notre guide présente six types de lieux créatifs : salles d'écriture musicale, répétition de groupe, cabines voix, studios podcast, ateliers lumière du jour et établis d'artisans.",
  "/cities":
    "Explorez les quartiers créatifs de six villes africaines : Nairobi, Lagos, Accra, Johannesburg, Kampala et Dakar, avec leurs accès matériel et leurs ateliers actifs.",
  "/hosts":
    "Pour les hôtes, Apollos Studios est un répertoire indépendant sans commission permettant de publier vos équipements, votre secours électrique et vos règles d'atelier.",
  "/about":
    "À propos d'Apollos Studios. Nous relions directement musiciens, podcasteurs, peintres et artisans aux responsables d'ateliers locaux.",
};

export function normalizeVoicePath(pathname: string): string {
  if (!pathname) return "/";
  if (pathname.startsWith("/spaces/") && pathname !== "/spaces") {
    return "/spaces";
  }
  return voiceScriptsEn[pathname] ? pathname : "/";
}

export function getVoiceScript(pathname: string, locale: Locale): string {
  const normalized = normalizeVoicePath(pathname);
  if (locale === "sw") {
    return voiceScriptsSw[normalized] ?? voiceScriptsEn[normalized] ?? voiceScriptsEn["/"];
  }
  if (locale === "fr") {
    return voiceScriptsFr[normalized] ?? voiceScriptsEn[normalized] ?? voiceScriptsEn["/"];
  }
  return voiceScriptsEn[normalized] ?? voiceScriptsEn["/"];
}

export function getVoiceTourOrder(startPathname: string): string[] {
  const start = normalizeVoicePath(startPathname);
  const rest = VOICE_TOUR_ORDER.filter((p) => p !== start);
  return [start, ...rest];
}
