export default {
  editorialVoice: 'hackportugal',
  id: 'apicultura-registo-iniciante',
  categoryId: 'food_leisure',
  title: 'Beekeeping for beginners — registration with DGAV (Direção-Geral de Alimentação e Veterinária)',
  tldr: 'Any apiary in Portugal (even a single hive in the garden) must be registered with DGAV (Direção-Geral de Alimentação e Veterinária — the food safety and veterinary authority). Registration is free: submit via the Junta de Freguesia (local parish council) or through ePortugal (the government services portal). After registration you receive a beekeeper number and the obligation to keep a sanitary logbook (caderno sanitário). Minimum distances: 200 m in urban areas, 50 m in rural areas (can be closer with a high fence). Honey for own consumption — no HACCP. For sales you need a registered extraction room (sala de extração) and an ASAE (Autoridade de Segurança Alimentar e Económica — food safety enforcement) inspection. FNAP (national federation of beekeepers) is the main union. Courses for beginners: €150-300. One hive yields 15-30 kg of honey per year; a starter kit (hive + swarm + protective gear) €250-500.',
  tags: ['beekeeping', 'bee', 'honey', 'dgav', 'fnap'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-portugal',
      title: 'Why Portugal is good for beekeeping',
      content: [
        { kind: 'paragraph', text: 'Portugal is one of the EU leaders in honey production (~10,000 tonnes per year). The climate is mild, with many wild nectar sources: eucalipto (eucalyptus), rosemary, lavender, lemon balm, mato (wild shrubland), citrus, chestnut, sobreiro (cork oak). The season is long: from February to October.' },
        { kind: 'checklist', items: [
          'Mel de Eucalipto — the most recognisable Portuguese honey, dark, with a pronounced flavour',
          'Mel de Rosmaninho — aromatic, an Alentejo classic',
          'Mel de Castanha — with a slight bitterness, astringent',
          'Mel multifloral — a basic blend',
          'Royal jelly, propolis, pollen — premium products',
          'Wax — for candles and cosmetics, its own market'
        ] }
      ]
    },
    {
      id: 'registration',
      title: 'Registration — mandatory for every colony',
      content: [
        { kind: 'paragraph', text: 'Since 2014 registration has been mandatory for all beekeepers in Portugal. Decreto-Lei 203/2005 and subsequent amendments. No registration — a fine of €100-500 and a risk of losing the bees during a DGAV inspection.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Gather the documents',
            content: [
              { kind: 'checklist', items: [
                'NIF (tax number) and Cartão de Cidadão (citizen card) or passport + atestado de residência (residence certificate)',
                'Address where the hives will be placed (your plot or written permission from the owner)',
                'Number and type of hives: Lusitano and Langstroth hive bodies are common',
                'If there are several sites (apiaries) — each must be listed separately'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submit the application',
            content: [
              { kind: 'checklist', items: [
                'Through ePortugal (government services portal): eportugal.gov.pt → Cidadão → Apicultura',
                'Or in person at the Junta de Freguesia (local parish council)',
                'Or via DRAP (Direção Regional de Agricultura e Pescas — regional directorate of agriculture and fisheries; 5 regions)',
                'After approval a beekeeper number is issued (format AA-NN-NNNN)'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Marking the hives',
            content: [
              { kind: 'paragraph', text: 'Each hive must display your beekeeper number and the hive number. Use indelible paint on both sides, with character height of at least 5 cm. This is critical for DGAV inspections.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'distance-rules',
      title: 'Minimum distances — where hives may be placed',
      content: [
        { kind: 'paragraph', text: 'This is the most common cause of conflicts with neighbours. Decreto-Lei 203/2005 and Portaria 9/2021 set the minimum distances:' },
        { kind: 'checklist', items: [
          '200 m from any buildings where people are present (housing, schools, hospitals) in urban areas',
          '50 m in rural areas',
          '25 m if a continuous barrier at least 2 m high is installed (a hedge or a wooden partition)',
          'May be placed right up against a line-of-sight barrier — a high wall or fence',
          '500 m from areas with a high concentration of apiaries',
          '200 m from landfill sites and places where pesticides are stored/transferred',
          'Between neighbouring sites — at least 50 m to reduce swarming competition'
        ] },
        { kind: 'warning', text: 'If neighbours complain and the distances are not observed, the municipality (Câmara Municipal — city council) may require you to move the hives. This often happens after the first stinging incidents involving neighbours’ children. Check your municipality’s rules — they can be stricter.' }
      ]
    },
    {
      id: 'starter-equipment',
      title: 'Starter kit — what to buy',
      content: [
        { kind: 'paragraph', text: 'Minimum for one hive:' },
        { kind: 'checklist', items: [
          'Hive (colmeia): type Lusitano €30-60, Langstroth €50-100',
          'Swarm (enxame): bees + queen. Purchase: €80-150',
          'Protective suit (fato de apicultor): €50-150',
          'Beekeeper gloves: €10-30',
          'Smoker: €30-60',
          'Hive tool/frame tools: €10-20',
          'Super (honey super): €30-50',
          'Frames and foundation: €20-40 per hive',
          'Hive stands: €10-20',
          'Tools: uncapping fork, knife, extractor — basic manual from €100 (can be shared via the local association)'
        ] },
        { kind: 'paragraph', text: 'Shops: Apifix (Lisboa, Porto, Évora), Carlos Ferreira Apicultura (Évora), Apivar (Algarve). Online: apicultura.pt, abelhas.com.' },
        { kind: 'paragraph', text: 'FNAP (national federation of beekeepers) offers discounts to members, runs courses and publishes supplier catalogues.' }
      ]
    },
    {
      id: 'health-checks',
      title: 'Colony health and mandatory treatment',
      content: [
        { kind: 'paragraph', text: 'Hives in Portugal face the same diseases as everywhere:' },
        { kind: 'checklist', items: [
          'Varroa destructor (mite): mandatory treatment in autumn and spring. Products Apivar, Bayvarol or organic methods (oxalic acid)',
          'Aethina tumida (small hive beetle): not critical in Portugal, but monitoring is required',
          'American foulbrood: a notifiable disease; on suspicion immediately inform DGAV',
          'Vespa velutina (Asian hornet): the main threat in the north of the country, protective measures are mandatory',
          'Nosema: weakens colonies in winter',
          'Sanitary logbook (caderno sanitário): it is mandatory to record all treatments — DGAV checks'
        ] },
        { kind: 'paragraph', text: 'DGAV recommends consulting a veterinarian at least once a year. A vet visit usually costs €30-80.' }
      ]
    },
    {
      id: 'selling-honey',
      title: 'Selling honey — a separate story',
      content: [
        { kind: 'paragraph', text: 'If you want to sell honey, there are more requirements:' },
        { kind: 'checklist', items: [
          'Beekeeper registration already completed',
          'Open activity with Finanças (tax authority) under CIRS code 1311 — apicultura',
          'Register the extraction room (sala de extração) with DGAV — the place where you extract honey (HACCP requirements)',
          'The facility must be suitable for food production: washable surfaces, insect protection, temperature control',
          'Laboratory analyses of honey batches (moisture, HMF, diastase) at least once per season: €30-80 per analysis',
          'Labelling under EU requirements: name, beekeeper’s NIF, batch number, country of origin, net weight, best-before date',
          'Selling at markets — a permit from the municipality (Câmara Municipal)',
          'Online sales — IVA is mandatory if turnover > €14,500 per year (changes possible from 2025)',
          'IGP (Indicação Geográfica Protegida — protected geographical indication): Mel da Serra de Aire, Mel do Alentejo, Mel de Trás-os-Montes — premium segment, additional registration required'
        ] }
      ]
    },
    {
      id: 'training',
      title: 'Courses and community',
      content: [
        { kind: 'checklist', items: [
          'FNAP — courses for beginners in Lisboa, Évora, Porto, Algarve',
          'Courses for beginners: 16-30 hours, €100-300',
          'Advanced topics: extraction, control of Vespa velutina, queen rearing, pollen production',
          'CONFAGRI (union of cooperatives) organises regional courses through cooperatives',
          'Universidade do Algarve (Faro) — occasionally runs technical courses',
          'Local associations: Associação dos Apicultores do Algarve (AAA), Associação dos Apicultores de Trás-os-Montes',
          'Groups on Telegram/WhatsApp: regional chats for beginners',
          'YouTube: channels in Portuguese — Apicultura Portugal, Mel & Cera'
        ] }
      ]
    },
    {
      id: 'subsidies',
      title: 'Subsidies and support',
      content: [
        { kind: 'paragraph', text: 'Beekeeping receives support through PNAA (national beekeeping programme) and PEPAC (CAP programme).' },
        { kind: 'checklist', items: [
          'Subsidy for transhumance (transumância): about €2-5 per hive',
          'Support to rebuild colonies after losses from Vespa velutina',
          'Investments in extraction equipment: co-financing up to 50%',
          'Training courses with funding: reimbursement up to 70%',
          'Pollination contracts: farmers pay the beekeeper for placing hives during flowering (€5-50 per hive per season)',
          'Applications — via IFAP (financing institute for agriculture and fisheries)'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Beekeeper registration', amountEUR: 0, note: 'Free' },
    { label: 'Basic hive with swarm (starter)', amountEURMin: 150, amountEURMax: 300, note: 'Per hive' },
    { label: 'Protective suit + gloves + smoker', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Extractor (manual)', amountEURMin: 80, amountEURMax: 200 },
    { label: 'FNAP beginner course', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Annually: varroa treatment + analyses', amountEURMin: 30, amountEURMax: 80, note: 'Per hive per year' },
    { label: 'Vet visit/health document', amountEURMin: 30, amountEURMax: 80, note: 'per visit' },
    { label: 'Extraction room (sala de extração) — initial investment', amountEURMin: 1000, amountEURMax: 5000, note: 'If you plan to sell' }
  ],
  sources: [
    { title: 'DGAV — Direção-Geral de Alimentação e Veterinária', url: 'https://www.dgav.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'DGAV — Apiculture: registration and legislation', url: 'https://www.dgav.pt/animais/conteudo/animais-de-producao/apicultura/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 203/2005 — registration of beekeepers', url: 'https://dre.pt/dre/detalhe/decreto-lei/203-2005-243676', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portaria 9/2021 — hive distances', url: 'https://dre.pt/dre/detalhe/portaria/9-2021-153700104', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IFAP — support for apiculture', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
