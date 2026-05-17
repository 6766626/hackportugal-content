export default {
  editorialVoice: 'hackportugal',
  id: 'exotic-pets-cats',
  categoryId: 'animals',
  title: 'Cats and exotic pets — rules',
  tldr: 'Cats: SIAC chip has been mandatory since 2022 for all cats over 4 months old. Licence from Junta de Freguesia — €5–15/year in most municipalities. Exotic animals (reptiles, birds, rodents): CITES species and protected species require a microchip and DGAV registration. Prohibited: dangerous wild animals — great apes, big cats, certain venomous snakes. Import from outside the EU: AHC, vaccinations, microchip, sometimes a CITES permit. Vet cost: cat — €25–40 per appointment; rare animal — €50–80.',
  tags: ['cats', 'exotics', 'siac', 'cites'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'cats',
      title: '🐈 Cats — mandatory registration',
      content: [
        { kind: 'paragraph', text: 'For cats, the mandatory microchipping regime has applied since **22 December 2022** (DL 82/2019, phased implementation). Similar to dogs.' },
        { kind: 'checklist', items: [
          '🆔 **SIAC microchip** — mandatory from 4 months old',
          '💉 **Rabies**: recommended, but not mandatory if the cat is not being imported or exported',
          '📋 **Licence from Junta de Freguesia**: around €5–15/year; not required everywhere — small municipalities may not monitor compliance',
          '🔍 **Identification**: chip number + Junta de Freguesia licence tag — optional on the collar',
          '🚪 **Outdoor cats** — chip is mandatory; some municipalities make neutering a condition for an outdoor cat licence'
        ]}
      ]
    },
    {
      id: 'cat-import',
      title: '✈️ Importing a cat',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: 'From the EU without customs', content: [
            { kind: 'checklist', items: [
              '✅ EU Pet Passport, issued by a vet in the EU',
              '✅ Microchip (ISO 11784/11785)',
              '✅ Rabies vaccination at least 21 days before entry',
              '✅ The animal has not been ill during the previous 30 days',
              'For movement within the EU, a rabies antibody titre test is not needed'
            ]}
          ]},
          { id: 'i2', title: 'From countries outside the EU (RU, UA, US, BR)', content: [
            { kind: 'checklist', items: [
              '🇷🇺 RU = high-risk country — **rabies antibody titre test** (blood test) is mandatory',
              'Test result: ≥ 0.5 IU/ml',
              'Wait 3 months after the test',
              '**AHC (Animal Health Certificate)** from the official vet of the country of origin',
              'Apostille + translation into PT/EN',
              'At the border: checks at the point of entry — often Lisbon or Porto airport',
              'You can arrange a DGAV import authorisation in advance, especially for rare breeds'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'rabbits-rodents',
      title: '🐰 Rabbits and rodents',
      content: [
        { kind: 'checklist', items: [
          'Hamsters, guinea pigs, dwarf rabbits — no special rules',
          'Chip and registration are not required',
          'Purchase: pet shops, breeders, online — there are many listings on OLX',
          'Exotic animal vet: specialist vets are available in every major city',
          'Import from countries outside the EU: AHC + veterinary certificate; rabies vaccination is not needed for rodents',
          'Ferrets: handled like cats — chip + Pet Passport are mandatory'
        ]}
      ]
    },
    {
      id: 'birds',
      title: '🦜 Birds',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Common pet birds: canaries, lovebirds, budgerigars', content: [
            { kind: 'checklist', items: [
              'No special registration',
              'Free purchase',
              'Aviaries and large cages: comfort requirements under Lei 92/95'
            ]}
          ]},
          { id: 'b2', title: 'Parrots', content: [
            { kind: 'checklist', items: [
              '**CITES permit** is mandatory for most species:',
              '  - African grey parrots, cockatoos, macaws, Amazons — Annex II',
              '  - A document from the breeder confirms lawful origin under CITES',
              'Import from countries outside the EU is complicated — CITES export and import permits are needed',
              'ICNF (icnf.pt) — national CITES authority',
              'Birds weighing up to 180 g, for example small long-tailed parrots, are exempt from ringing rules'
            ]}
          ]},
          { id: 'b3', title: 'Wild birds: birds of prey, owls, etc.', content: [
            { kind: 'paragraph', text: 'It is prohibited to buy or keep them as pets without ICNF authorisation. Falconry requires a licence. If you find an injured bird — contact Centro de Recuperação RIAS / LPN.' }
          ]}
        ]}
      ]
    },
    {
      id: 'reptiles',
      title: '🦎 Reptiles',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Allowed without a licence', content: [
            { kind: 'checklist', items: [
              'Bearded dragons, leopard geckos, corn snakes, small royal pythons, tortoises — Balkan and Central Asian — are often sold in pet shops',
              'Aquatic turtles, for example red-eared sliders: since 2016 they have been prohibited for new owners as an invasive species',
              'Iguanas, common geckos: allowed'
            ]}
          ]},
          { id: 'r2', title: 'Restricted or prohibited', content: [
            { kind: 'checklist', items: [
              '🚫 **Venomous snakes** — cobras, mambas, etc.: ownership is prohibited',
              '🚫 **Large boas and pythons** (>3 m): an ICNF licence is required due to public safety requirements for handling',
              '🚫 **Crocodiles and alligators**: only registered wildlife centres',
              '🚫 **Some monitor lizards** — Komodo and large savannah monitors: CITES + special licence',
              '⚠️ **Turtles and tortoises**: many species are protected in the EU — you cannot catch them in the wild, only captive-bred animals with CITES documents'
            ]}
          ]},
          { id: 'r3', title: 'Vivaria', content: [
            { kind: 'checklist', items: [
              'Pet shop equipment: €100–500 for a full kit',
              'Heating, UV and humidity — depending on the species',
              'Exotic animal vet: €50–80 per appointment; specialist clinics are available in Lisboa and Porto',
              'Common health problems: metabolic bone disease due to incorrect UV, parasites, scale rot'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'fish',
      title: '🐠 Fish and aquariums',
      content: [
        { kind: 'checklist', items: [
          'No registration, no licence',
          'Pet shops: tropicalfish.pt, Petline, Fauna&Flora, specialist aquarists',
          'CITES species — some corals, seahorses: a permit is required for import',
          'Prohibited: piranhas, certain invasive cichlids in Algarve water bodies',
          'Aquarium services: companies offer installation and maintenance by subscription for €30–100/month',
          'Aquarist clubs: Aquariofilia.pt, Facebook groups for exchanges and advice'
        ]}
      ]
    },
    {
      id: 'banned-species',
      title: '🚫 Prohibited species',
      content: [
        { kind: 'paragraph', text: 'EU Invasive Alien Species (Regulation 1143/2014) + national Portuguese additions prohibit many species as pets.' },
        { kind: 'checklist', items: [
          '🐢 Trachemys scripta (red-eared slider), Pseudemys (FL slider) — must be transferred properly or handed over to an authorised rescue centre',
          '🐦 Common myna, rose-ringed parakeet — prohibited in the wild',
          '🐍 Burmese python, anaconda — risk to wildlife',
          '🐀 Wild squirrels (Sciurus carolinensis) — prohibited',
          '🐠 Large plecostomus catfish: release into open water bodies is illegal',
          '🦗 Tropical insects and spiders — restricted',
          'Full list: ec.europa.eu/environment/invasive-species'
        ]}
      ]
    },
    {
      id: 'vet-exotic',
      title: '👨‍⚕️ Vets for exotic animals',
      content: [
        { kind: 'checklist', items: [
          '**Centro Veterinário Berna** (Lisboa) — specialist in exotic animals',
          '**Hospital Veterinário do Porto** — large clinic for exotic animals',
          '**Clínica Veterinária do Lis** (Leiria) — reptiles, birds',
          '**Hospital Vet ULP** — Porto, university clinic',
          'Prices: consultation €50–80, surgery €200–1000, blood tests €30–60',
          'Specialist food: only in specialist pet shops or online, for example Zooplus',
          'Insurance for exotic pets: limited, usually does not cover reptiles and birds'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'SIAC chip for a cat', amountEURMin: 20, amountEURMax: 40 },
    { label: 'Licence from Junta de Freguesia for a cat', amountEURMin: 5, amountEURMax: 15, note: '€/year' },
    { label: 'CITES permit for a parrot', amountEURMin: 30, amountEURMax: 100 },
    { label: 'Exotic animal vet appointment', amountEURMin: 50, amountEURMax: 80 },
    { label: 'DGAV import authorisation', amountEURMin: 30, amountEURMax: 80 }
  ],
  sources: [
    { title: 'DGAV — companion animals', url: 'https://www.dgav.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ICNF — CITES Portugal', url: 'https://www.icnf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DL 82/2019 — animal registration', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/82-2019-122722988', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU Regulation 1143/2014 — invasive species', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R1143', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
