import type { Locale } from "./data/site";

const en = {
  "nav.home": "Home",
  "nav.spaces": "Spaces",
  "nav.types": "Space Types",
  "nav.cities": "Cities",
  "nav.hosts": "For Hosts",
  "nav.more": "More",
  "nav.about": "About",
  "nav.guidelines": "Guidelines",
  "nav.contact": "Contact",
  "nav.saved": "Saved",
  "nav.savedFull": "Saved & My Listings",
  "nav.list": "List a Space",
  "nav.menu": "Menu",

  "hero.kicker": "Creative Workspaces Across Africa",
  "hero.title": "Space to make the work.",
  "hero.subtitle":
    "Find rehearsal rooms, recording nooks, maker studios and creative workspaces across African cities.",
  "hero.browse": "Browse Spaces",
  "hero.list": "List Your Space",

  "home.whySubheading": "Why Space Matters",
  "home.whyHeading": "Good rooms protect both the work and the neighbourhood",
  "home.howSubheading": "Simple Process",
  "home.howHeading": "How to Find or List a Creative Room",
  "home.counterSubheading": "Across the Directory",
  "home.counterHeading": "Practical Rooms Built by Working Creatives",
  "home.featuredSubheading": "Featured Directory",
  "home.featuredHeading": "Rooms Ready for Rehearsal, Recording and Making",
  "home.featuredLead":
    "Every listing shows honest room specs, power backup details, hourly or day rate bands, and direct host contact.",
  "home.voicesSubheading": "Artists & Hosts",
  "home.voicesHeading": "Notes from People Using the Rooms",
  "home.ratesSubheading": "Typical Rate Bands",
  "home.ratesHeading": "Hourly Nooks to Full-Day Studio Sessions",
  "home.ctaTitle": "Have an idle rehearsal room, kiln bench or vocal booth on weekdays?",
  "home.ctaBody":
    "Share clear specs and house rules in our free independent directory so local musicians, podcasters and makers can reach you directly.",

  "disclaimer.label": "Independent Directory Notice:",
  "disclaimer.text":
    "Independent directory only. We do not operate studios, take bookings or payments, or guarantee availability. Arrange directly with hosts. Respect house rules and local laws.",

  "filter.search": "Search by space name, neighbourhood, gear or city",
  "filter.city": "City",
  "filter.allCities": "All Cities",
  "filter.type": "Space Type",
  "filter.allTypes": "All Types",
  "filter.rateBand": "Rate Band",
  "filter.allRates": "All Rate Bands",
  "filter.billing": "Hourly or Day Rate",
  "filter.allBilling": "Any Billing",
  "filter.hourly": "Hourly Available",
  "filter.day": "Day Rate Available",
  "filter.amenities": "Amenities & Power",
  "filter.reset": "Reset Filters",
  "filter.showing": "Showing",
  "filter.spacesWord": "spaces",

  "save.save": "Save",
  "save.saved": "Saved",

  "voice.tourTitle": "Apollos Audio Guide",
  "voice.tourIntro":
    "Hands-free audio tour that keeps playing smoothly even as you switch pages across the site.",
  "voice.statusReady": "Ready to play continuous audio tour.",
  "voice.statusPlaying": "Playing audio tour (continues across pages)...",
  "voice.statusPaused": "Audio guide paused.",
  "voice.statusUnsupported": "Speech synthesis is not available in this browser.",
  "voice.readCurrent": "Read This Page",
  "cta.play": "Play",
  "cta.pause": "Pause",
  "cta.stop": "Stop",

  "cookie.title": "Cookies & Local Browser Preferences",
  "cookie.body":
    "We use a small consent cookie, language preference, and local browser storage for your saved spaces and listings. No ad trackers.",
  "cookie.learnMore": "Read Privacy Policy",
  "cookie.accept": "Accept All",
  "cookie.essential": "Essential Only",

  "footer.directory": "Directory",
  "footer.standards": "Standards & Legal",
  "footer.questions": "Editorial Desk",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms of Use",
  "footer.credits": "Image Credits",
} as const;

export type DictKey = keyof typeof en;

const sw: Record<DictKey, string> = {
  "nav.home": "Mwanzo",
  "nav.spaces": "Vyumba",
  "nav.types": "Aina za Vyumba",
  "nav.cities": "Miji",
  "nav.hosts": "Kwa Wenyeji",
  "nav.more": "Zaidi",
  "nav.about": "Kuhusu",
  "nav.guidelines": "Mwongozo",
  "nav.contact": "Wasiliana",
  "nav.saved": "Hifadhi",
  "nav.savedFull": "Vilivyohifadhiwa",
  "nav.list": "orodhesha Chumba",
  "nav.menu": "Menyu",

  "hero.kicker": "Vyumba vya Ubunifu Afrika",
  "hero.title": "Nafasi ya kufanya kazi ya sanaa.",
  "hero.subtitle":
    "Pata vyumba vya mazoezi ya muziki, studio za kurekodi, karakana za ufundi na nafasi za ubunifu katika miji ya Afrika.",
  "hero.browse": "Tazama Vyumba",
  "hero.list": "Orodhesha Chumba",

  "home.whySubheading": "Kwa Nini Nafasi Ni Muhimu",
  "home.whyHeading": "Chumba kizuri hulinda kazi ya msanii na amani ya mtaa",
  "home.howSubheading": "Hatua Rahisi",
  "home.howHeading": "Jinsi ya Kupata au Kuorodhesha Studio",
  "home.counterSubheading": "Katika Orodha Yetu",
  "home.counterHeading": "Vyumba Halisi Vinavyotunzwa na Wasanii",
  "home.featuredSubheading": "Vyumba Vilivyochaguliwa",
  "home.featuredHeading": "Vyumba Tayari kwa Mazoezi, Kurekodi na Ufundi",
  "home.featuredLead":
    "Kila tangazo linaonyesha vifaa halisi, umeme wa akiba, viwango vya saa au siku, na mawasiliano ya moja kwa moja na mwenyeji.",
  "home.voicesSubheading": "Wasanii na Wenyeji",
  "home.voicesHeading": "Ushuhuda Kutoka Vyumba vya Kazi",
  "home.ratesSubheading": "Viwango vya Gharama",
  "home.ratesHeading": "Kuanzia Saa Moja Hadi Siku Nzima ya Studio",
  "home.ctaTitle": "Je, una chumba cha mazoezi, studio au karakana iliyo wazi katikati ya wiki?",
  "home.ctaBody":
    "Weka maelezo ya vifaa na sheria za nyumba kwenye orodha yetu huru bila malipo ili wasanii wawasiliane nawe moja kwa moja.",

  "disclaimer.label": "Ilani ya Orodha Huru:",
  "disclaimer.text":
    "Orodha huru pekee. Hatuendeshi studio, hatupokei malipo wala miadi, na hatuhakikishi upatikanaji. Panga moja kwa moja na wenyeji. Heshimu sheria za chumba na sheria za nchi.",

  "filter.search": "Tafuta kwa jina la studio, mtaa, vifaa au mji",
  "filter.city": "Mji",
  "filter.allCities": "Miji Yote",
  "filter.type": "Aina ya Chumba",
  "filter.allTypes": "Aina Zote",
  "filter.rateBand": "Kiwango cha Bei",
  "filter.allRates": "Viwango Vyote",
  "filter.billing": "Malipo ya Saa au Siku",
  "filter.allBilling": "Mpangilio Wowote",
  "filter.hourly": "Bei ya Saa Ipo",
  "filter.day": "Bei ya Siku Ipo",
  "filter.amenities": "Vifaa na Huduma",
  "filter.reset": "Futa Vichujio",
  "filter.showing": "Inaonyesha",
  "filter.spacesWord": "vyumba",

  "save.save": "Hifadhi",
  "save.saved": "Imehifadhiwa",

  "voice.tourTitle": "Mwongozo wa Sauti wa Apollos",
  "voice.tourIntro":
    "Sikiliza mwongozo wa sauti unaoendelea kucheza hata ukibadilisha kurasa za tovuti.",
  "voice.statusReady": "Tayari kucheza mwongozo wa sauti.",
  "voice.statusPlaying": "Inacheza mwongozo wa sauti (unaendelea ukibadili kurasa)...",
  "voice.statusPaused": "Mwongozo wa sauti umesimamishwa kwa muda.",
  "voice.statusUnsupported": "Kivinjari hiki hakina huduma ya kusoma kwa sauti.",
  "voice.readCurrent": "Soma Ukurasa Huu",
  "cta.play": "Cheza",
  "cta.pause": "Sitisha",
  "cta.stop": "Simamisha",

  "cookie.title": "Vidakuzi na Mapendeleo ya Kivinjari",
  "cookie.body":
    "Tunatumia kidakuzi cha idhini, lugha, na hifadhi ya kivinjari chako kwa vyumba ulivyohifadhi. Hakuna ufuatiliaji wa matangazo.",
  "cookie.learnMore": "Soma Sera ya Faragha",
  "cookie.accept": "Kubali Vyote",
  "cookie.essential": "Muhimu Pekee",

  "footer.directory": "Orodha",
  "footer.standards": "Kanuni na Sheria",
  "footer.questions": "Dawati la Wahariri",
  "footer.privacy": "Sera ya Faragha",
  "footer.terms": "Masharti ya Matumizi",
  "footer.credits": "chanzo cha Picha",
};

const fr: Record<DictKey, string> = {
  "nav.home": "Accueil",
  "nav.spaces": "Espaces",
  "nav.types": "Types de lieux",
  "nav.cities": "Villes",
  "nav.hosts": "Hôtes",
  "nav.more": "Plus",
  "nav.about": "À propos",
  "nav.guidelines": "Charte",
  "nav.contact": "Contact",
  "nav.saved": "Favoris",
  "nav.savedFull": "Favoris et Annonces",
  "nav.list": "Proposer un lieu",
  "nav.menu": "Menu",

  "hero.kicker": "Espaces Créatifs en Afrique",
  "hero.title": "L'espace pour créer l'œuvre.",
  "hero.subtitle":
    "Trouvez salles de répétition, cabines d'enregistrement, ateliers d'artisans et espaces créatifs dans les villes africaines.",
  "hero.browse": "Explorer les lieux",
  "hero.list": "Proposer un espace",

  "home.whySubheading": "Pourquoi le lieu compte",
  "home.whyHeading": "Un bon atelier protège à la fois la création et le voisinage",
  "home.howSubheading": "Fonctionnement simple",
  "home.howHeading": "Comment trouver ou référencer un studio",
  "home.counterSubheading": "Dans le répertoire",
  "home.counterHeading": "Des salles concrètes tenues par des créatifs",
  "home.featuredSubheading": "Sélection du répertoire",
  "home.featuredHeading": "Salles prêtes pour répéter, enregistrer et fabriquer",
  "home.featuredLead":
    "Chaque fiche détaille l'équipement réel, le secours électrique, les tranches horaires ou journalières et le contact direct de l'hôte.",
  "home.voicesSubheading": "Artistes et Hôtes",
  "home.voicesHeading": "Retours de terrain dans les ateliers",
  "home.ratesSubheading": "Tranches tarifaires",
  "home.ratesHeading": "De la cabine à l'heure à la journée complète",
  "home.ctaTitle": "Vous gérez une salle de répétition, une cabine voix ou un établi libre en semaine ?",
  "home.ctaBody":
    "Publiez gratuitement vos équipements et règles internes dans notre répertoire indépendant pour être contacté en direct.",

  "disclaimer.label": "Répertoire indépendant :",
  "disclaimer.text":
    "Répertoire indépendant uniquement. Nous ne gérons aucun studio, ne prenons ni réservation ni paiement et ne garantissons pas les disponibilités. Organisez-vous directement avec les hôtes. Respectez le règlement intérieur et les lois locales.",

  "filter.search": "Rechercher par nom, quartier, matériel ou ville",
  "filter.city": "Ville",
  "filter.allCities": "Toutes les villes",
  "filter.type": "Type d'espace",
  "filter.allTypes": "Tous les types",
  "filter.rateBand": "Tranche tarifaire",
  "filter.allRates": "Tous les tarifs",
  "filter.billing": "Tarif horaire ou journée",
  "filter.allBilling": "Tout mode",
  "filter.hourly": "À l'heure disponible",
  "filter.day": "À la journée disponible",
  "filter.amenities": "Équipements et énergie",
  "filter.reset": "Réinitialiser",
  "filter.showing": "Affichage de",
  "filter.spacesWord": "espaces",

  "save.save": "Enregistrer",
  "save.saved": "Enregistré",

  "voice.tourTitle": "Guide Audio Apollos",
  "voice.tourIntro":
    "Visite vocale continue qui poursuit sa lecture même lorsque vous changez de page.",
  "voice.statusReady": "Prêt à lancer la visite audio continue.",
  "voice.statusPlaying": "Lecture en cours (continue entre les pages)...",
  "voice.statusPaused": "Guide audio en pause.",
  "voice.statusUnsupported": "La synthèse vocale n'est pas disponible sur ce navigateur.",
  "voice.readCurrent": "Lire cette page",
  "cta.play": "Lire",
  "cta.pause": "Pause",
  "cta.stop": "Arrêter",

  "cookie.title": "Cookies et préférences locales",
  "cookie.body":
    "Nous utilisons uniquement un cookie de consentement, votre langue et le stockage local du navigateur pour vos espaces enregistrés. Aucun traceur publicitaire.",
  "cookie.learnMore": "Politique de confidentialité",
  "cookie.accept": "Tout accepter",
  "cookie.essential": "Essentiel uniquement",

  "footer.directory": "Répertoire",
  "footer.standards": "Règles et Mentions",
  "footer.questions": "Bureau éditorial",
  "footer.privacy": "Confidentialité",
  "footer.terms": "Conditions d'utilisation",
  "footer.credits": "Crédits photo",
};

const dictionaries: Record<Locale, Record<DictKey, string>> = {
  en,
  sw: { ...sw, "nav.list": "Orodhesha Chumba", "footer.credits": "Chanzo cha Picha" },
  fr,
};

export function getDict(locale: Locale): Record<DictKey, string> {
  return dictionaries[locale] ?? dictionaries.en;
}
