export default {
  editorialVoice: 'hackportugal',
  id: 'exotic-pets-cats',
  categoryId: 'animals',
  title: 'Cats and exotic pets — rules',
  tldr: 'Cats: SIAC microchip is mandatory since 2022 (DL 82/2019). The transition period for cats and ferrets that already existed ended on **25 October 2022**; for newborn cats, the chip must be fitted within 120 days. **Annual Junta de Freguesia licence — a national requirement ONLY for dogs**, there is NONE for cats; individual municipalities may introduce local registrations, but this is the exception. Exotic animals (reptiles, birds, rodents): CITES species and protected species require a microchip and DGAV registration. Ban: dangerous wild animals — great apes, big cats, certain venomous snakes. Import from outside the EU: AHC, vaccinations, microchip, sometimes a CITES permit. Vet cost: cat — €25–40 per appointment; rare animal — €50–80.',
  tags: ['cats', 'exotic', 'siac', 'cites'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'cats',
      title: '🐈 Cats — mandatory registration',
      content: [
        { kind: 'paragraph', text: 'DL 82/2019 introduced mandatory microchipping for cats and ferrets. The transition period for animals that already existed ended on **25 October 2022**. For those born after this date, the chip must be fitted within the first **120 days** of life.' },
        { kind: 'checklist', items: [
          '🆔 **SIAC microchip** — mandatory (for newborn cats — in the first 120 days)',
          '💉 **Rabies**: recommended, but not mandatory under national law if the cat is not being imported or exported',
          '⚠️ **Junta de Freguesia licence for cats — does NOT exist as a national requirement**. The annual licence was introduced only for dogs (DL 313/2003 + subsequent rules). Individual municipalities may introduce local cat registration or paid record-keeping, but this is the exception, not the rule. Check with your Junta',
          '🔍 **Identification**: the SIAC chip number is the main identifier; a collar with a tag is at the owner’s discretion',
          '🚪 **Street/colony cats** — CER (capture–neuter–return) programmes are run by municipalities together with associations; the chip is registered to the association/municipality'
        ]}
      ]
    },
    {
      id: 'cat-import',
      title: '✈️ Bringing in a cat',
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
              '**AHC (Animal Health Certificate)** from the state vet of the country of origin',
              'Apostille + translation into PT/EN',
              'At the border: checks at the point of entry — often Lisbon or Porto airport',
              'You can arrange a DGAV import permit in advance, especially for rare breeds'
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
          'Purchase: pet shops, breeders, online — there are many adverts on OLX',
          'Exotic-animal vet: specialist vets are available in every major city',
          'Import from countries outside the EU: AHC + veterinary certificate; rabies vaccination is not needed for rodents',
          'Ferrets: processed like cats — chip + Pet Passport are mandatory'
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
              'Free to buy',
              'Aviaries and large cages: comfort requirements under Lei 92/95'
            ]}
          ]},
          { id: 'b2', title: 'Parrots', content: [
            { kind: 'checklist', items: [
              '**CITES permit** is mandatory for most species:',
              '  - African grey parrots, cockatoos, macaws, Amazons — Annex II',
              '  - A document from the breeder confirms legal origin under CITES',
              'Import from countries outside the EU is complex — CITES export and import permits are needed',
              'ICNF (icnf.pt) — the national CITES authority',
              'Birds weighing up to 180 g, for example small long-tailed parakeets, are exempt from ringing rules'
            ]}
          ]},
          { id: 'b3', title: 'Wild birds: birds of prey, owls, etc.', content: [
            { kind: 'paragraph', text: 'It is forbidden to buy or keep them as pets without ICNF permission. Falconry requires a licence. If you find an injured bird — contact Centro de Recuperação RIAS / LPN.' }
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
              'Bearded dragons, leopard geckos, corn snakes, small royal pythons, tortoises — Hermann’s and Horsfield’s — are often sold in pet shops',
              'Aquatic turtles, for example red-eared sliders: since 2016 they have been banned for new owners as an invasive species',
              'Iguanas, common geckos: allowed'
            ]}
          ]},
          { id: 'r2', title: 'Restricted or banned', content: [
            { kind: 'checklist', items: [
              '🚫 **Venomous snakes** — cobras, mambas, etc.: ownership is prohibited',
              '🚫 **Large boas and pythons** (>3 m): an ICNF licence is required because of public-safety handling requirements',
              '🚫 **Crocodiles and alligators**: only registered wildlife centres',
              '🚫 **Some monitor lizards** — Komodo dragons and large savannah monitors: CITES + special licence',
              '⚠️ **Tortoises and turtles**: many species are protected in the EU — they cannot be caught in the wild, only captive-bred animals with CITES documents are allowed'
            ]}
          ]},
          { id: 'r3', title: 'Vivaria', content: [
            { kind: 'checklist', items: [
              'Pet-shop equipment: €100–500 for a complete set',
              'Heating, UV and humidity — depending on the species',
              'Exotic-animal vet: €50–80 per appointment; specialist clinics exist in Lisboa and Porto',
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
          'CITES species — some corals, seahorses: an import permit is required',
          'Banned: piranhas, certain invasive cichlids in Algarve water bodies',
          'Aquarium services: companies offer installation and maintenance by subscription for €30–100/month',
          'Aquarist clubs: Aquariofilia.pt, Facebook groups for swaps and advice'
        ]}
      ]
    },
    {
      id: 'banned-species',
      title: '🚫 Banned species',
      content: [
        { kind: 'paragraph', text: 'EU Invasive Alien Species (Regulation 1143/2014) + national Portuguese additions ban many species as pets.' },
        { kind: 'checklist', items: [
          '🐢 Trachemys scripta (red-eared slider), Pseudemys (FL slider) — must be transferred properly or handed over to an authorised rescue centre',
          '🐦 Common myna, ring-necked parakeet — banned in the wild',
          '🐍 Burmese python, anaconda — risk to wildlife',
          '🐀 Wild squirrels (Sciurus carolinensis) — banned',
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
          'Specialist foods: only in specialist pet shops or online, for example Zooplus',
          'Insurance for exotic pets: limited, usually does not cover reptiles and birds'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'SIAC chip for a cat (vet + registration)', amountEURMin: 20, amountEURMax: 40 },
    { label: 'CITES permit for a parrot', amountEURMin: 30, amountEURMax: 100 },
    { label: 'Exotic-animal vet appointment', amountEURMin: 50, amountEURMax: 80 },
    { label: 'DGAV import permit', amountEURMin: 30, amountEURMax: 80 }
  ],
  sources: [
    { title: 'DGAV — companion animals', url: 'https://www.dgav.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ICNF — CITES Portugal', url: 'https://www.icnf.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DL 82/2019 — animal registration', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/82-2019-122722988', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EU Regulation 1143/2014 — invasive species', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R1143', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
