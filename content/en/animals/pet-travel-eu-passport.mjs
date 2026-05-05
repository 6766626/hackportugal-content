export default {
  editorialVoice: 'hackportugal',
  id: 'pet-travel-eu-passport',
  categoryId: 'animals',
  title: 'EU pet passport and travelling with animals in the EU',
  tldr: 'To travel within the EU with a dog, cat or ferret from Portugal you need an EU pet passport, an ISO microchip and a valid rabies vaccination. A primary vaccination only counts after 21 days; the animal usually must be older than 12 weeks. Up to 5 animals — a non-commercial trip. Madeira/Açores may ask for additional sanitary documents via the carrier/region. For return from "high-risk" non-EU countries a rabies titre ≥0.5 IU/ml is required; for the UK in 2026 a titre is usually not needed.',
  tags: ['animals', 'petpassport', 'dgav', 'travel'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-passport-covers',
      title: 'What the EU pet passport is',
      content: [
        { kind: 'paragraph', text: 'The EU pet passport is a standard EU booklet for dogs, cats and ferrets. In Portugal it is issued by an authorised veterinarian. The passport is needed for movements between EU countries and for returning to the EU from certain third countries, if all entries are made correctly before departure.' },
        { kind: 'paragraph', text: 'The passport is not a “visa” for the animal and does not replace the rules of an airline, ferry, hotel or rental. It confirms the animal’s identification, rabies vaccinations, sometimes parasite treatments and clinical examinations.' },
        { kind: 'checklist', items: [
          'Who it applies to: dog, cat, ferret',
          'Where to obtain in Portugal: at an authorised veterinarian who can issue an EU pet passport',
          'Mandatory database for resident animals: SIAC registration linked to the microchip',
          'The passport remains valid while the microchip is readable and vaccination records are current',
          'For birds, rabbits, rodents and reptiles, different rules apply — the EU pet passport is not used for them'
        ] }
      ]
    },
    {
      id: 'minimum-eu-rules',
      title: 'EU minimum rules: microchip, rabies, 21 days',
      content: [
        { kind: 'paragraph', text: 'For a standard non-commercial trip within the EU, the animal must be identified by a microchip ISO 11784/11785 or a readable tattoo applied before 03.07.2011. The rabies vaccination must be administered after the chip is implanted or on the same day, but not before it.' },
        { kind: 'checklist', items: [
          'Microchip: ISO 11784/11785; if the chip is non-standard, the owner must have a reader',
          'Age: primary rabies vaccination usually no earlier than 12 weeks old',
          'Waiting after the first vaccination: 21 days before travel',
          'Booster without lapse: effective immediately if the previous vaccination was still valid',
          'Booster after lapse: treated as a primary vaccination — again a 21-day wait',
          'Dates in the passport must be entered by the veterinarian: vaccination date, validity period, manufacturer/batch of the vaccine',
          'Up to 5 animals per owner/authorised accompanying person — the standard non-commercial trip limit',
          'More than 5 animals is permitted for shows/competitions/training with proof of registration and animals older than 6 months'
        ] },
        { kind: 'warning', text: 'Do not buy a ticket before checking the dates. The most common mistake is a rabies vaccination given before the microchip, or a flight booked earlier than the 21st day after the primary vaccination. At the border this can result in refusal of entry, quarantine or return at your expense.' }
      ]
    },
    {
      id: 'documents-before-trip',
      title: 'What to check 1–2 months before the trip',
      content: [
        { kind: 'substeps', items: [
          { id: 'vet-check', title: '1. Veterinary check', content: [
            { kind: 'checklist', items: [
              'Match the microchip number scanned with the number in the passport and SIAC',
              'Check the validity of the rabies vaccination on the date of entry and of return',
              'Ask the veterinarian to correct entries only in a lawful way: no erasures; with signature/stamp where required',
              'Confirm whether a clinical examination/health certificate is required by the carrier',
              'Check the destination country’s rules on parasite treatments'
            ] }
          ] },
          { id: 'carrier-check', title: '2. Carrier', content: [
            { kind: 'paragraph', text: 'Airlines and ferries have their own limits on weight, carrier dimensions, brachycephalic breeds, the number of animals in the cabin and the season of carriage. These are commercial rules and may be stricter than EU law.' }
          ] },
          { id: 'route-check', title: '3. Route', content: [
            { kind: 'paragraph', text: 'If you are flying in transit via a non-EU country or returning from one to the EU, check not only the final country but all connections, whether you leave the transit area, any airport change and baggage rules.' }
          ] }
        ] }
      ]
    },
    {
      id: 'madeira-azores',
      title: 'Madeira and Açores: what is different',
      content: [
        { kind: 'paragraph', text: 'Madeira and Açores are Portugal, but they are island autonomous regions with their own sanitary procedures and carrier control practices. For dogs, cats and ferrets you basically need a microchip, an EU pet passport and a valid rabies vaccination, even if you are flying from Lisbon or Porto.' },
        { kind: 'checklist', items: [
          'Check the DGAV page on viagens de animais de companhia before buying the ticket',
          'Check the rules of Região Autónoma da Madeira or Região Autónoma dos Açores, if the carrier refers to them',
          'Confirm with the airline in advance: animal in cabin, in the hold, or cargo',
          'Carry the animal’s passport in your hand luggage; do not put it in checked baggage',
          'For some flights/operators they may request a declaração de saúde / atestado sanitário from a veterinarian a few days before departure',
          'For dogs, check local rules on muzzle/lead and access to public transport',
          'For the return flight to the mainland keep the same documents: passport, vaccination, chip, booking of the animal with the carrier'
        ] },
        { kind: 'warning', text: 'Do not treat a domestic flight to the islands "like a bus in Portugal". In practice, boarding refusal happens more often not because of DGAV, but because airline requirements are not met: incorrect travel crate/carrier, no confirmed booking for the animal, expired vaccination or no recent veterinary declaration if one was requested.' }
      ]
    },
    {
      id: 'uk-and-non-eu-return',
      title: 'UK and non-EU: when a rabies titre is required',
      content: [
        { kind: 'paragraph', text: 'A rabies titre is a blood test for antibodies to rabies. For entry into the EU it is mandatory when returning from countries not on the EU’s safe lists for rabies. The minimum result is 0.5 IU/ml. The sample is taken no earlier than 30 days after vaccination; for entry from such countries a 3‑month waiting period is then usually required.' },
        { kind: 'paragraph', text: 'If the test is done in the EU before departure, the result ≥0.5 IU/ml is entered in the EU pet passport, and the rabies vaccination is then maintained without lapses, the 3‑month waiting period on return usually does not apply. This is the best option for long trips outside the EU.' },
        { kind: 'checklist', items: [
          'The UK / Great Britain in 2026 usually does not require a rabies titre for return to the EU, because it is a listed third country',
          'For travel with a dog to the UK, a tapeworm treatment by a veterinarian 24–120 hours before entry is usually required',
          'If the animal received a new rabies booster in the UK, check whether it is recognised in the EU passport; sometimes an animal health certificate is needed for return',
          'From an unlisted non-EU country without a pre-done titre, delays, quarantine or refusal of entry to the EU are possible',
          'The laboratory for the titre must be EU-approved',
          'A route via a country with a high rabies risk may change the requirements, even if the final country is “safe”'
        ] },
        { kind: 'warning', text: 'The UK is not the EU. Do not confuse the rules for entry to the UK with the rules for return to the EU. For the UK, British requirements apply, including tapeworm treatment for dogs; for return to Portugal, EU/DGAV rules and the status of the country of departure apply.' }
      ]
    },
    {
      id: 'day-of-travel',
      title: 'On the day of travel: a short checklist',
      content: [
        { kind: 'checklist', items: [
          'EU pet passport in hand luggage',
          'The microchip number in the passport matches the animal',
          'Rabies vaccination valid on the date of entry',
          '21 days have passed since the primary vaccine, if this is the first vaccination or the booster had lapsed',
          'Animal booking confirmed by the carrier in writing',
          'Travel crate/carrier meets the airline’s size requirements',
          'Lead, harness, muzzle for dogs, if required',
          'For Madeira/Açores or the carrier — a recent declaração de saúde if requested',
          'For the UK/Ireland/Finland/Malta/Norway with a dog — check tapeworm treatment 24–120 hours before entry',
          'Veterinarian contacts and copies of documents saved on your phone'
        ] },
        { kind: 'paragraph', text: 'At the border or at boarding you may be asked to show the animal and have the chip read. If the chip cannot be read, the documents are effectively not linked to the animal — this risks refusal of carriage.' }
      ]
    }
  ],
  costs: [
    { label: 'EU pet passport at a veterinarian', amountEURMin: 10, amountEURMax: 30, note: 'Indicative private clinic pricing; price excludes vaccination and microchip' },
    { label: 'Microchip + SIAC registration', amountEURMin: 20, amountEURMax: 45, note: 'Depends on the clinic and included services' },
    { label: 'Rabies vaccination', amountEURMin: 20, amountEURMax: 45, note: 'Usually annually or for the period stated by the manufacturer and the veterinarian' },
    { label: 'Rabies titre', amountEURMin: 60, amountEURMax: 140, note: 'Price depends on the clinic, laboratory and sample transport' },
    { label: 'Declaração de saúde / atestado sanitário', amountEURMin: 20, amountEURMax: 60, note: 'May be required by the carrier or for particular routes' }
  ],
  sources: [
    { title: 'DGAV — Travelling? FAQ (pet animals)', url: 'https://www.dgav.pt/faq/conteudo/vai-viajar/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Regulation (EU) No 576/2013: non-commercial movement of pet animals', url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX%3A32013R0576', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'European Commission: travelling with pets and other animals in the EU', url: 'https://europa.eu/youreurope/citizens/travel/carry/animal-plant/index_en.htm', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'UK Government: bring your pet dog, cat or ferret to Great Britain', url: 'https://www.gov.uk/bring-pet-to-great-britain', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
