import type { Locale } from "./site";

const voiceScriptsEn: Record<string, string> = {
  "/": "Welcome to Apollos Studios. Space to make the work. Browse independent rehearsal rooms, recording nooks, podcast booths, daylight art bays and maker workshops across Nairobi, Lagos, Accra, Johannesburg, Kampala and Dakar. Filter by city, room type, rate band and backup power, then arrange directly with studio hosts.",
  "/spaces":
    "You are on the Apollos Studios directory. Filter rooms by African city, creative discipline, hourly or full-day rate band, and practical amenities such as acoustic treatment, pure-sine inverter backup or ground-floor load-in. Save favourites locally or click any space for full room specs and direct host contact.",
  "/types":
    "This guide explains the six space types on Apollos Studios: music writing rooms, band rehearsal floors, recording nooks, podcast booths, daylight visual art studios and maker benches. Review typical equipment, rate bands and questions to ask hosts before you book.",
  "/hosts":
    "Welcome to the hosts guide. Apollos Studios is a commission-free independent directory. Learn how sharing clear gear lists, power backup details and neighbour-friendly house rules helps fill quiet weekday studio hours with respectful artists.",
  "/cities":
    "Explore creative workspaces across six African cities: Nairobi, Lagos, Accra, Johannesburg, Kampala and Dakar. Each city card highlights active studio neighbourhoods, commute and load-in realities, and direct links to local listings.",
  "/list":
    "Ready to list a rehearsal room, vocal booth, art studio or maker bench? Complete this form with your room specifications, rate band and house rules. Saved submissions also appear in your local My Listings browser drawer.",
  "/saved":
    "Here are your saved spaces and submitted listings stored privately in this browser. No account password, tracking dashboard or cloud profile is required.",
  "/about":
    "About Apollos Studios. Creative work needs room for volume, mess, focus and daylight. We maintain an artist-respectful, independent directory connecting working musicians, podcasters, painters and makers directly with local studio stewards.",
  "/guidelines":
    "Studio guidelines and shared etiquette. Read practical standards for artists and hosts covering punctual pack-downs, hearing safety, clean backup power, transparent pricing and neighbour respect.",
  "/contact":
    "Contact the Apollos Studios editorial desk in Nairobi by message, email or WhatsApp for listing updates, corrections or city suggestions. For room bookings, please reach out directly to the studio host on each listing.",
  "/privacy":
    "Privacy policy. Apollos Studios collects minimal contact and listing details when you submit a form, uses no advertising trackers, and keeps saved spaces and submitted drafts in your local browser storage.",
  "/terms":
    "Terms of use. Apollos Studios is an independent directory only. We do not operate studios, process bookings or payments, or guarantee availability. Always arrange directly with hosts and follow house rules and local laws.",
};

const voiceScriptsSw: Record<string, string> = {
  "/": "Karibu Apollos Studios. Nafasi ya kufanya kazi ya sanaa. Tafuta vyumba vya mazoezi ya muziki, studio za kurekodi, karakana za ufundi na studio za sanaa katika miji ya Nairobi, Lagos, Accra, Johannesburg, Kampala na Dakar. Wasiliana moja kwa moja na wenyeji wa vyumba.",
  "/spaces":
    "Uko kwenye orodha ya vyumba vya Apollos Studios. Chuja kulingana na mji, aina ya chumba, kiwango cha bei ya saa au siku, na huduma kama umeme wa akiba wa sola. Hifadhi vyumba unavyopenda au fungua maelezo kamili.",
};

const voiceScriptsFr: Record<string, string> = {
  "/": "Bienvenue sur Apollos Studios. L'espace pour créer l'œuvre. Découvrez des salles de répétition, cabines d'enregistrement, studios podcast et ateliers d'artistes à Nairobi, Lagos, Accra, Johannesburg, Kampala et Dakar. Contactez directement chaque hôte sans commission.",
  "/spaces":
    "Vous consultez le répertoire Apollos Studios. Filtrez les espaces par ville, discipline créative, tarif horaire ou journée et secours électrique, puis prenez contact directement avec l'hôte.",
};

export function getVoiceScript(pathname: string, locale: Locale): string {
  const normalized =
    pathname.startsWith("/spaces/") && pathname !== "/spaces" ? "/spaces" : pathname;
  if (locale === "sw") {
    return voiceScriptsSw[normalized] ?? voiceScriptsSw["/"] ?? voiceScriptsEn["/"];
  }
  if (locale === "fr") {
    return voiceScriptsFr[normalized] ?? voiceScriptsFr["/"] ?? voiceScriptsEn["/"];
  }
  return voiceScriptsEn[normalized] ?? voiceScriptsEn["/"];
}
