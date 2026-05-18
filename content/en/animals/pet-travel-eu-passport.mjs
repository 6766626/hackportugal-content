export default {
  editorialVoice: 'hackportugal',
  id: 'pet-travel-eu-passport',
  categoryId: 'animals',
  title: 'Pet passport and travelling with animals in the EU',
  tldr: 'For travel within the EU with a dog, cat or ferret from Portugal, you need an EU pet passport, an ISO microchip and a valid rabies vaccination. A primary vaccination only starts to count after 21 days; the animal usually has to be over 12 weeks old. Up to 5 animals counts as non-commercial travel. Madeira/Açores may ask for additional health documents from the carrier/region. To return from “unfavourable” non-EU countries, a rabies titre ≥0.5 IU/ml is required; for the UK in 2026, a titre is usually not needed.',
  tags: ['animals', 'petpassport', 'dgav', 'travel'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-passport-covers',
      title: 'What an EU pet passport is',
      content: [
        { kind: 'paragraph', text: 'An EU pet passport is an EU-standard booklet for dogs, cats and ferrets.\n\nIn Portugal, it is issued by a veterinário autorizado. The passport is needed for movements between EU countries and for returning to the EU from some third countries, if all entries were made correctly before departure.' },
        { kind: 'paragraph', text: 'The passport is not a “visa” for the animal and does not replace the rules of the airline, ferry, hotel or rental accommodation. It confirms the animal’s identification, rabies vaccinations, and sometimes parasite treatments and clinical examinations.' },
        { kind: 'checklist', items: [
          'Who needs it: dog, cat, ferret',
          'Where to get it in Portugal: from a vet who has access to issue an EU pet passport',
          'Mandatory basis for resident animals: registration in SIAC by microchip',
          'The passport is valid as long as the microchip can be read and the vaccination records are up to date',
          'Different rules apply to birds, rabbits, rodents and reptiles — the EU pet passport is not used for them'
        ] }
      ]
    },
    {
      id: 'minimum-eu-rules',
      title: 'Minimum EU rules: chip, rabies, 21 days',
      content: [
        { kind: 'paragraph', text: 'For standard non-commercial travel within the EU, the animal must be identified by an ISO 11784/11785 microchip or a readable tattoo applied before 03/07/2011. The rabies vaccine must be given after the chip is implanted or on the same day, but not before it.' },
        { kind: 'checklist', items: [
          'Microchip: ISO 11784/11785; if the chip is non-standard, the owner must have a reader',
          'Age: primary rabies vaccination is usually not earlier than 12 weeks',
          'Waiting period after the first vaccination: 21 days before travel',
          'Booster without a lapse: valid immediately if the previous vaccine was still valid',
          'Booster after a lapse: treated as a primary vaccination — another 21-day wait',
          'Dates in the passport must be entered by the vet: vaccination date, validity period, vaccine manufacturer/batch',
          'Up to 5 animals per owner/authorised accompanying person — the standard limit for non-commercial travel',
          'More than 5 animals are allowed for exhibitions/competitions/training with proof of registration and animals over 6 months old'
        ] },
        { kind: 'warning', text: 'Do not buy a ticket until you have checked the dates. The most common mistake is that the rabies vaccination was given before the microchip, or the flight is scheduled before the 21st day after the primary vaccination. At the border, this can result in refusal of entry, quarantine or return at your expense.' }
      ]
    },
    {
      id: 'documents-before-trip',
      title: 'What to check 1–2 months before travel',
      content: [
        { kind: 'substeps', items: [
          { id: 'vet-check', title: '1. Veterinary check', content: [
            { kind: 'checklist', items: [
              'Match the microchip number with a scanner against the number in the passport and SIAC',
              'Check the rabies vaccination validity on the date of entry and return entry',
              'Ask the vet to correct anything only by lawful means: no erasures, with signature/stamp where required',
              'Clarify whether a clinical examination / health certificate is needed for the carrier',
              'Check the destination country’s rules on parasite treatments'
            ] }
          ] },
          { id: 'carrier-check', title: '2. Carrier', content: [
            { kind: 'paragraph', text: 'Airlines and ferries have their own limits on weight, carrier, brachycephalic breeds, the number of animals in the cabin and the transport season. These are commercial rules, and they may be stricter than EU law.' }
          ] },
          { id: 'route-check', title: '3. Route', content: [
            { kind: 'paragraph', text: 'If you fly in transit through a non-EU country or return from one to the EU, check not only the final country but also all connections, leaving the transit zone, changing airport and baggage.' }
          ] }
        ] }
      ]
    },
    {
      id: 'madeira-azores',
      title: 'Madeira and Açores: what is different',
      content: [
        { kind: 'paragraph', text: 'Madeira and Açores are Portugal, but they are island autonomous regions with their own health procedures and control practices among carriers. For dogs, cats and ferrets, the basic requirements are a microchip, EU pet passport and valid rabies vaccine, even if you are flying from Lisboa or Porto.' },
        { kind: 'checklist', items: [
          'Check the DGAV page on viagens de animais de companhia before buying a ticket',
          'Check the rules of Região Autónoma da Madeira or Região Autónoma dos Açores if the carrier refers to them',
          'Confirm with the airline in advance: animal in the cabin, in the hold or as cargo',
          'Take the animal’s passport in hand luggage; do not put it in a suitcase',
          'For some flights/operators, they may ask for a declaração de saúde / atestado sanitário from a vet a few days before departure',
          'For dogs, check local rules on muzzles/leads and access to public transport',
          'For the return flight to the mainland, keep the same documents: passport, vaccine, chip, animal booking with the carrier'
        ] },
        { kind: 'warning', text: 'Do not treat a domestic flight to the islands “like a bus within Portugal”.\n\nIn practice, denied boarding happens more often not because of DGAV, but because airline requirements have not been met: the wrong carrier, no confirmed animal booking, expired vaccine or no recent veterinary declaration if one was requested.' }
      ]
    },
    {
      id: 'uk-and-non-eu-return',
      title: 'UK and non-EU: when a rabies titre is needed',
      content: [
        { kind: 'paragraph', text: 'A rabies titre is a blood test for rabies antibodies. For entry into the EU, it is mandatory when returning from countries not included in the EU safe lists for rabies. The minimum result is 0.5 IU/ml. The sample is taken no earlier than 30 days after vaccination, and then entry from such countries usually requires a 3-month waiting period.' },
        { kind: 'paragraph', text: 'If the test is done in the EU before departure, the result ≥0.5 IU/ml is entered in the EU pet passport, and the rabies vaccination is then maintained without lapses, the 3-month waiting period on return usually does not apply. This is the best option for long trips outside the EU.' },
        { kind: 'checklist', items: [
          'UK / Great Britain in 2026 usually does not require a rabies titre for return to the EU, because it is classed as a listed third country',
          'For travel with a dog to the UK, tapeworm treatment by a vet is usually required 24–120 hours before entry',
          'If the animal received a new rabies booster in the UK, check whether the EU passport recognises it; sometimes an animal health certificate is needed for the return',
          'From an unlisted non-EU country without a titre done in advance, delays, quarantine or refusal of entry into the EU are possible',
          'The laboratory for the titre must be approved by the EU',
          'A route through a country with a high rabies risk may change the requirements, even if the final country is “safe”'
        ] },
        { kind: 'warning', text: 'The UK is not the EU. Do not confuse the rules for entering the UK with the rules for returning to the EU. For the UK, British requirements matter, including tapeworm treatment for dogs; for returning to Portugal, EU/DGAV rules and the status of the country of departure matter.' }
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
          '21 days have passed after the primary vaccine, if this is the first vaccination or a booster had lapsed',
          'The animal booking has been confirmed by the carrier in writing',
          'The carrier meets the airline’s size requirements',
          'There is a lead, harness and muzzle for dogs, if required',
          'For Madeira/Açores or the carrier — a recent declaração de saúde, if requested',
          'For the UK/Ireland/Finland/Malta/Norway with a dog — check tapeworm treatment 24–120 hours before entry',
          'Vet contacts and copies of documents are saved on the phone'
        ] },
        { kind: 'paragraph', text: 'At the border or when boarding, you may be asked to show the animal and have the chip read. If the chip cannot be read, the documents are effectively not linked to the animal — this is a risk of refusal of transport.' }
      ]
    }
  ],
  costs: [
    { label: 'EU pet passport from a vet', amountEURMin: 10, amountEURMax: 30, note: 'Indicative range for private clinics; the price does not include vaccination and chip' },
    { label: 'Microchip + SIAC registration', amountEURMin: 20, amountEURMax: 45, note: 'Depends on the clinic and included services' },
    { label: 'Rabies vaccine', amountEURMin: 20, amountEURMax: 45, note: 'Usually annually or for the period specified by the manufacturer and vet' },
    { label: 'Rabies titre', amountEURMin: 60, amountEURMax: 140, note: 'The price depends on the clinic, laboratory and sample delivery' },
    { label: 'Declaração de saúde / atestado sanitário', amountEURMin: 20, amountEURMax: 60, note: 'May be required by the carrier or for specific routes' }
  ],
  sources: [
    { title: 'DGAV — Travelling? FAQ (pets)', url: 'https://www.dgav.pt/faq/conteudo/vai-viajar/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Regulation (EU) No 576/2013: non-commercial movement of pet animals', url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX%3A32013R0576', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'European Commission: travelling with pets and other animals in the EU', url: 'https://europa.eu/youreurope/citizens/travel/carry/animal-plant/index_en.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'UK Government: bring your pet dog, cat or ferret to Great Britain', url: 'https://www.gov.uk/bring-pet-to-great-britain', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
