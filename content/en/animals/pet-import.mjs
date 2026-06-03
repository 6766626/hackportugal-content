export default {
  editorialVoice: 'hackportugal',
  id: 'pet-import',
  categoryId: 'animals',
  title: 'Importing a pet into Portugal',
  tldr: 'For dogs, cats and ferrets: microchip + rabies vaccination at least 21 days before entry + Pet Passport (EU) or AHC (Animal Health Certificate for non-EU countries). From EU countries, entry is almost unrestricted. From non-EU countries — a certificate from a state-accredited vet + documents in English or Portuguese.',
  tags: ['animals', 'dog', 'cat', 'import'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'basics',
      title: 'Mandatory requirements',
      content: [
        { kind: 'checklist', items: [
          'ISO 11784/11785 microchip (international standard)',
          'Rabies vaccination at least 21 days before entry (after the first vaccination)',
          'Rabies antibody titre test (for countries with a high rabies risk — blood sample taken at least 30 days after vaccination, then a 3-month wait before entry)',
          'Pet age — at least 15 weeks (vaccination + 21 days)',
          'Documents: Pet Passport (for the EU/EEA) or Animal Health Certificate (AHC) — for non-EU countries'
        ]},
        { kind: 'warning', text: 'Additional requirements apply to Egypt, Turkey and some African countries. For Russia, titre testing is mandatory for 2026.' }
      ]
    },
    {
      id: 'eu-countries',
      title: 'From the EU / EEA',
      content: [
        { kind: 'paragraph', text: 'A (European) Pet Passport issued by a vet in an EU country. With it, entry into Portugal is unrestricted. Border checks are minimal.' }
      ]
    },
    {
      id: 'russia',
      title: 'From Russia',
      audience: { countryCodes: ['RU'] },
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Chip + vaccination', content: [
            { kind: 'paragraph', text: 'At a veterinary clinic in the Russian Federation. Check that the chip is compatible with the ISO standard.' }
          ]},
          { id: 'r2', title: '2. Rabies titre test', content: [
            { kind: 'paragraph', text: 'Mandatory for the Russian Federation. Blood is sent to an accredited laboratory (in the EU or to certain laboratories in the Russian Federation). Antibodies — at least 0.5 IU/ml.' }
          ]},
          { id: 'r3', title: '3. Wait 3 months', content: [
            { kind: 'paragraph', text: 'Three months must pass from the date the blood is taken for the titre test before entry into the EU. Plan ahead.' }
          ]},
          { id: 'r4', title: '4. Certificate form No. 1 → form No. 5e → AHC', content: [
            { kind: 'paragraph', text: 'A state veterinary clinic issues form No. 1 (for the Russian Federation), which is exchanged for form No. 5e for export. Then, at the state veterinary control checkpoint on departure, you need to obtain an AHC in English.' }
          ]},
          { id: 'r5', title: '5. Entry', content: [
            { kind: 'paragraph', text: 'At the point of entry into the EU (Lisbon, Porto, Faro), you need to show the AHC + passport + chip. The check is carried out by the Border Inspection Post (BIP).' }
          ]}
        ]}
      ]
    },
    {
      id: 'transport',
      title: 'Transport',
      content: [
        { kind: 'checklist', items: [
          'Plane — cargo (for large animals) or cabin (for small animals up to 8 kg). Each airline has its own rules.',
          'Car boot — allowed; a carrier or seat belt is required',
          'Train — usually with a muzzle or in a carrier',
          'Ferry — you need to check the rules of the specific route'
        ]}
      ]
    },
    {
      id: 'after-arrival',
      title: 'After arrival',
      content: [
        { kind: 'checklist', items: [
          'Register the chip with SIAC (Portuguese database) — at a veterinary clinic, around €20',
          'Obtain a Portuguese Pet Passport — it may be useful for trips back',
          'Annual vaccinations — rabies, leptospirosis, etc.',
          'For dogs of dangerous breeds, licensing and insurance are required',
          'On the beach and in the city, a muzzle and lead are often required'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Chip', amountEURMin: 30, amountEURMax: 60 },
    { label: 'Rabies vaccination', amountEURMin: 20, amountEURMax: 40 },
    { label: 'Titre test', amountEURMin: 60, amountEURMax: 150 },
    { label: 'AHC / Pet Passport', amountEURMin: 50, amountEURMax: 150 },
    { label: 'Pet flight', amountEURMin: 100, amountEURMax: 500, note: 'depends on size and distance' },
    { label: 'SIAC registration', amountEURMin: 15, amountEURMax: 25 }
  ],
  sources: [
    { title: 'DGAV — Directorate-General for Food and Veterinary Affairs', url: 'https://www.dgav.pt/animais/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU Commission — Travelling with pets', url: 'https://food.ec.europa.eu/animals/movement-pets_en', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'SIAC — Companion Animal Information System', url: 'https://siac.vet/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
