export default {
  editorialVoice: 'hackportugal',
  id: 'pet-travel-eu-passport',
  categoryId: 'animals',
  title: 'Pet passport and travelling with animals in the EU',
  tldr: 'For travel within the EU with a dog, cat or ferret from Portugal, you need an EU pet passport, an ISO microchip and a valid rabies vaccination. A primary vaccination only starts to count after 21 days; the animal usually has to be over 12 weeks old. Up to 5 animals counts as non-commercial travel. Madeira/Açores may ask for additional health documents via the carrier/region. To return from “high-risk” non-EU countries, a rabies titre ≥0.5 IU/ml is required; for the UK in 2026, a titre is usually not needed.',
  tags: ['animals', 'petpassport', 'dgav', 'travel'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-passport-covers',
      title: 'What an EU pet passport is',
      content: [
        { kind: 'paragraph', text: 'An EU pet passport is an EU-standard booklet for dogs, cats and ferrets. In Portugal it is issued by a veterinário autorizado. The passport is needed for movements between EU countries and for returning to the EU from some third countries, provided all entries were made correctly before departure.' },
        { kind: 'paragraph', text: 'The passport is not a “visa” for the animal and does not replace the rules of an airline, ferry company, hotel or rental accommodation. It confirms the animal’s identification, rabies vaccinations, sometimes parasite treatments and clinical examinations.' },
        { kind: 'checklist', items: [
          'Who needs one: dog, cat, ferret',
          'Where to get one in Portugal: from a vet with access to issue an EU pet passport',
          'Mandatory base requirement for resident animals: registration in SIAC by microchip',
          'The passport is valid as long as the microchip is readable and the vaccination records are up to date',
          'Different rules apply to birds, rabbits, rodents and reptiles — an EU pet passport is not used for them'
        ] }
      ]
    },
    {
      id: 'minimum-eu-rules',
      title: 'Minimum EU rules: chip, rabies, 21 days',
      content: [
        { kind: 'paragraph', text: 'For standard non-commercial travel within the EU, the animal must be identified with an ISO 11784/11785 microchip or a readable tattoo applied before 03.07.2011. The rabies vaccine must be given after the chip is implanted or on the same day, but not before it.' },
        { kind: 'checklist', items: [
          'Microchip: ISO 11784/11785; if the chip is non-standard, the owner must have a reader',
          'Age: primary rabies vaccination is usually no earlier than 12 weeks',
          'Waiting period after the first vaccination: 21 days before travel',
          'Booster without a gap: valid immediately if the previous vaccine was still valid',
          'Booster after expiry: treated as a primary vaccination — another 21-day waiting period',
          'Dates in the passport must be entered by the vet: vaccination date, validity period, vaccine manufacturer/batch',
          'Up to 5 animals per owner/authorised accompanying person — the standard limit for non-commercial travel',
          'More than 5 animals is permitted for exhibitions/competitions/training with proof of registration and if the animals are over 6 months old'
        ] },
        { kind: 'warning', text: 'Do not buy a ticket until you have checked the dates. The most common mistake is a rabies vaccination given before the microchip, or a flight scheduled before the 21st day after primary vaccination. At the border, this can result in refusal of entry, quarantine or return at your expense.' }
      ]
    },
    {
      id: 'documents-before-trip',
      title: 'What to check 1–2 months before the trip',
      content: [
        { kind: 'substeps', items: [
          { id: 'vet-check', title: '1. Veterinary check', content: [
            { kind: 'checklist', items: [
              'Check the microchip number with a scanner against the number in the passport and SIAC',
              'Check the rabies vaccination validity on the date of entry and re-entry',
              'Ask the vet to correct entries only lawfully: no erasures, with signature/stamp where required',
              'Clarify whether a clinical examination / health certificate is needed for the carrier',
              'Check the destination country’s rules on parasite treatments'
            ] }
          ] },
          { id: 'carrier-check', title: '2. Carrier', content: [
            { kind: 'paragraph', text: 'Airlines and ferry companies have their own limits on weight, carriers, brachycephalic breeds, the number of animals in the cabin and transport season. These are commercial rules and may be stricter than EU law.' }
          ] },
          { id: 'route-check', title: '3. Route', content: [
            { kind: 'paragraph', text: 'If you fly in transit through a non-EU country or return from one to the EU, check not only the final country but also all connections, whether you leave the transit zone, airport changes and baggage handling.' }
          ] }
        ] }
      ]
    },
    {
      id: 'madeira-azores',
      title: 'Madeira and Açores: what is different',
      content: [
        { kind: 'paragraph', text: 'Madeira and Açores are Portugal, but they are island autonomous regions with their own health procedures and carrier control practices. For dogs, cats and ferrets, the basic requirements are a microchip, an EU pet passport and a valid rabies vaccine, even if you are flying from Lisboa or Porto.' },
        { kind: 'checklist', items: [
          'Check the DGAV page on viagens de animais de companhia before buying a ticket',
          'Check the rules of Região Autónoma da Madeira or Região Autónoma dos Açores if the carrier refers to them',
          'Confirm with the airline in advance: animal in the cabin, in the hold or as cargo',
          'Take the animal’s passport in your hand luggage; do not check it in inside a suitcase',
          'For some flights/operators, a declaração de saúde / atestado sanitário from a vet may be requested a few days before departure',
          'For dogs, check local rules on muzzles/leads and access to public transport',
          'For the return flight to the mainland, keep the same documents: passport, vaccine, chip, animal booking with the carrier'
        ] },
        { kind: 'warning', text: 'Do not treat a domestic flight to the islands as “like taking a bus within Portugal”. In practice, refusal to board more often happens not because of DGAV, but because airline requirements were not met: the wrong carrier, no confirmed animal booking, an expired vaccine or no recent veterinary declaration if one was requested.' }
      ]
    },
    {
      id: 'uk-and-non-eu-return',
      title: 'UK and non-EU: when a rabies titre is needed',
      content: [
        { kind: 'paragraph', text: 'A rabies titre is a blood test for rabies antibodies. For entry into the EU, it is mandatory when returning from countries that are not on the EU safe lists for rabies. The minimum result is 0.5 IU/ml. The sample is taken no earlier than 30 days after vaccination; after that, entry from such countries usually requires a 3-month waiting period.' },
        { kind: 'paragraph', text: 'If the test is done in the EU before departure, the result ≥0.5 IU/ml is entered in the EU pet passport, and rabies vaccination is then maintained without gaps, the 3-month waiting period usually does not apply on return. This is the best option for long trips outside the EU.' },
        { kind: 'checklist', items: [
          'UK / Great Britain in 2026 usually does not require a rabies titre for return to the EU because it is classed as a listed third country',
          'For travel with a dog to the UK, tapeworm treatment by a vet is usually required 24–120 hours before entry',
          'If the animal received a new rabies booster in the UK, check whether the EU passport recognises it; sometimes an animal health certificate is needed for the return',
          'From an unlisted non-EU country without a titre done in advance, delays, quarantine or refusal of entry to the EU are possible',
          'The laboratory for the titre must be EU-approved',
          'A route through a country with a high rabies risk may change the requirements, even if the final country is “safe”'
        ] },
        { kind: 'warning', text: 'The UK is not the EU. Do not confuse the rules for entry into the UK with the rules for returning to the EU. UK requirements matter for the UK, including tapeworm treatment for dogs; EU/DGAV rules and the status of the country of departure matter for return to Portugal.' }
      ]
    },
    {
      id: 'day-of-travel',
      title: 'On the day of travel: short checklist',
      content: [
        { kind: 'checklist', items: [
          'EU pet passport in hand luggage',
          'The microchip number in the passport matches the animal',
          'Rabies vaccine is valid on the date of entry',
          '21 days have passed after the primary vaccine if this is the first vaccination or a booster had expired',
          'The animal booking has been confirmed by the carrier in writing',
          'The carrier meets the airline’s size requirements',
          'There is a lead, harness and muzzle for dogs if required',
          'For Madeira/Açores or the carrier — a recent declaração de saúde if requested',
          'For the UK/Ireland/Finland/Malta/Norway with a dog — check tapeworm treatment 24–120 hours before entry',
          'Vet contacts and copies of documents are saved on your phone'
        ] },
        { kind: 'paragraph', text: 'At the border or when boarding, you may be asked to show the animal and have the chip scanned. If the chip cannot be read, the documents are effectively not linked to the animal — this creates a risk of refusal of transport.' }
      ]
    }
  ],
  costs: [
    { label: 'EU pet passport from a vet', amountEURMin: 10, amountEURMax: 30, note: 'Indicative private clinic range; the price does not include vaccination or chip' },
    { label: 'Microchip + SIAC registration', amountEURMin: 20, amountEURMax: 45, note: 'Depends on the clinic and included services' },
    { label: 'Rabies vaccine', amountEURMin: 20, amountEURMax: 45, note: 'Usually annually or for the period stated by the manufacturer and vet' },
    { label: 'Rabies titre', amountEURMin: 60, amountEURMax: 140, note: 'The price depends on the clinic, laboratory and sample delivery' },
    { label: 'Declaração de saúde / atestado sanitário', amountEURMin: 20, amountEURMax: 60, note: 'May be required by the carrier or for specific routes' }
  ],
  sources: [
    { title: 'DGAV — Going travelling? FAQ (companion animals)', url: 'https://www.dgav.pt/faq/conteudo/vai-viajar/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Regulation (EU) No 576/2013: non-commercial movement of pet animals', url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX%3A32013R0576', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'European Commission: travelling with pets and other animals in the EU', url: 'https://europa.eu/youreurope/citizens/travel/carry/animal-plant/index_en.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'UK Government: bring your pet dog, cat or ferret to Great Britain', url: 'https://www.gov.uk/bring-pet-to-great-britain', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
