export default {
  editorialVoice: 'hackportugal',
  id: 'apicultura-registo-iniciante',
  categoryId: 'food_leisure',
  title: 'Beekeeping for beginners — registration with DGAV (Direção-Geral de Alimentação e Veterinária)',
  tldr: 'Any apiary in Portugal (even one hive in a garden) must be registered with DGAV (Direção-Geral de Alimentação e Veterinária — the public authority for food safety and veterinary matters). Registration is free: you apply at the Junta de Freguesia (local parish council) or through ePortugal (public services portal). After registration, you receive a beekeeper number and must keep a health logbook (caderno sanitário). Minimum distances: 200 m in an urban area, 50 m in a rural area (closer is possible with a high fence). Honey for personal consumption — no HACCP. For sales, you need a registered extraction room (sala de extração) and an ASAE inspection (Autoridade de Segurança Alimentar e Económica — food safety regulator). FNAP (national federation of beekeepers) is the main association. Beginner courses: €150-300. One hive produces 15-30 kg of honey per year; starter kit (hive + swarm + protective equipment) €250-500.',
  tags: ['beekeeping', 'bee', 'honey', 'dgav', 'fnap'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-portugal',
      title: 'Why Portugal is good for beekeeping',
      content: [
        { kind: 'paragraph', text: 'Portugal is one of the EU leaders in honey production (~10,000 tonnes per year). The climate is mild, with many wild nectar sources: eucalipto (eucalyptus), rosemary, lavender, lemon balm, mato (wild scrubland), citrus, chestnut, sobreiro (cork oak). The season is long: from February to October.' },
        { kind: 'checklist', items: [
          'Mel de Eucalipto — the most recognisable Portuguese honey, dark, with a strong flavour',
          'Mel de Rosmaninho — aromatic, an Alentejo classic',
          'Mel de Castanha — with a slight bitterness, astringent',
          'Mel multifloral — a basic blend',
          'Royal jelly, propolis, pollen — premium products',
          'Wax — for candles and cosmetics, a separate market'
        ] }
      ]
    },
    {
      id: 'registration',
      title: 'Registration — mandatory for every colony',
      content: [
        { kind: 'paragraph', text: 'Since 2014, registration has been mandatory for all bee keepers in Portugal. Decreto-Lei 203/2005 and subsequent amendments. No registration — a fine of €100-500 and the risk of losing your bees during a DGAV inspection.' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Gather the documents',
            content: [
              { kind: 'checklist', items: [
                'NIF (tax number) and Cartão de Cidadão (citizen card) or passport + atestado de residência (residence certificate)',
                'Address where the hives will be kept (your own plot or written permission from the owner)',
                'Number and type of hives: Lusitano and Langstroth bodies are common',
                'If there are several sites (apiaries) — each one is listed separately'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Submit the application',
            content: [
              { kind: 'checklist', items: [
                'Through ePortugal (public services portal): eportugal.gov.pt → Cidadão → Apicultura',
                'Or in person at the Junta de Freguesia (local parish council)',
                'Or through DRAP (Direção Regional de Agricultura e Pescas — regional directorate for agriculture and fisheries; 5 regions)',
                'After approval, a beekeeper number is issued (format AA-NN-NNNN)'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Mark the hives',
            content: [
              { kind: 'paragraph', text: 'Each hive must display your beekeeper number and the hive number. Use indelible paint on two sides, with characters at least 5 cm high. This is critical for DGAV inspections.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'distance-rules',
      title: 'Minimum distances — where you can place hives',
      content: [
        { kind: 'paragraph', text: 'This is the most common cause of conflicts with neighbours. Decreto-Lei 203/2005 and Portaria 9/2021 set minimum distances:' },
        { kind: 'checklist', items: [
          '200 m from any buildings where people are present (housing, schools, hospitals) in an urban area',
          '50 m in a rural area',
          '25 m if a solid barrier at least 2 m high is installed (hedge or wooden partition)',
          'Right up close is possible with a sight-line barrier — a high wall or fence',
          '500 m from areas with a high concentration of apiaries',
          '200 m from municipal waste landfill sites and places where pesticides are stored/decanted',
          'Between neighbouring sites — at least 50 m, to reduce swarm competition'
        ] },
        { kind: 'warning', text: 'If neighbours complain and the distances are not respected, the municipality (Câmara Municipal — town council) can require the hives to be moved. This often happens after the first cases of neighbours’ children being stung. Check your municipality’s rules — they may be stricter.' }
      ]
    },
    {
      id: 'starter-equipment',
      title: 'Starter kit — what to buy',
      content: [
        { kind: 'paragraph', text: 'Minimum for one hive:' },
        { kind: 'checklist', items: [
          'Hive (colmeia): Lusitano type €30-60, Langstroth €50-100',
          'Swarm (enxame): bees + queen. Purchase: €80-150',
          'Protective suit (fato de apicultor): €50-150',
          'Beekeeper gloves: €10-30',
          'Smoker: €30-60',
          'Hive tool/tools for frames: €10-20',
          'Super (extension box) for honey: €30-50',
          'Frames and foundation: €20-40 per hive',
          'Hive stands: €10-20',
          'Tools: uncapping fork, knife, honey extractor — basic manual from €100 (can be shared through a local association)'
        ] },
        { kind: 'paragraph', text: 'Shops: Apifix (Lisboa, Porto, Évora), Carlos Ferreira Apicultura (Évora), Apivar (Algarve). Online: apicultura.pt, abelhas.com.' },
        { kind: 'paragraph', text: 'FNAP (national federation of beekeepers) gives discounts to members, runs courses and publishes supplier catalogues.' }
      ]
    },
    {
      id: 'health-checks',
      title: 'Colony health and mandatory treatment',
      content: [
        { kind: 'paragraph', text: 'Hives in Portugal face the same diseases as everywhere else:' },
        { kind: 'checklist', items: [
          'Varroa destructor (mite): mandatory treatment in autumn and spring. Products include Apivar, Bayvarol or organic methods (oxalic acid)',
          'Aethina tumida (small hive beetle): not critical in Portugal, but monitoring is needed',
          'American foulbrood: a notifiable disease; if suspected, report it to DGAV immediately',
          'Vespa velutina (Asian hornet): the main threat in the north of the country, protective measures are mandatory',
          'Nosema: weakens colonies in winter',
          'Health logbook (caderno sanitário): records of all treatments must be kept — DGAV checks this'
        ] },
        { kind: 'paragraph', text: 'DGAV recommends consulting a veterinarian at least once a year. A vet visit usually costs €30-80.' }
      ]
    },
    {
      id: 'selling-honey',
      title: 'Selling honey — a separate matter',
      content: [
        { kind: 'paragraph', text: 'If you want to sell honey, there are more requirements:' },
        { kind: 'checklist', items: [
          'Beekeeper registration has already been completed',
          'Open an activity with Finanças (tax authority) under CIRS code 1311 — apicultura',
          'Register the extraction premises (sala de extração) with DGAV — the place where you extract honey (HACCP requirements)',
          'The premises must be suitable for food production: washable surfaces, insect protection, temperature control',
          'Laboratory analysis of honey batches (moisture, HMF, diastase) at least once per season: €30-80 per analysis',
          'Labelling according to EU requirements: name, beekeeper NIF, batch number, country of origin, weight, best-before date',
          'Sales at markets — permit from the municipality (Câmara Municipal)',
          'Online sales — IVA is mandatory if turnover is > €14,500 per year (changes may occur from 2025)',
          'IGP (Indicação Geográfica Protegida — protected geographical indication): Mel da Serra de Aire, Mel do Alentejo, Mel de Trás-os-Montes — premium segment, additional registration is needed'
        ] }
      ]
    },
    {
      id: 'training',
      title: 'Courses and community',
      content: [
        { kind: 'checklist', items: [
          'FNAP — beginner courses in Lisboa, Évora, Porto, Algarve',
          'Beginner courses: 16-30 hours, €100-300',
          'Advanced topics: extraction, controlling Vespa velutina, queen rearing, pollen production',
          'CONFAGRI (union of cooperatives) organises regional courses through cooperatives',
          'Universidade do Algarve (Faro) — occasionally runs technical courses',
          'Local associations: Associação dos Apicultores do Algarve (AAA), Associação dos Apicultores de Trás-os-Montes',
          'Telegram/WhatsApp groups: regional chats for beginners',
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
          'Subsidy for migratory beekeeping (transumância): around €2-5 per hive',
          'Support for restoring colonies after losses from Vespa velutina',
          'Investment in extraction equipment: co-financing up to 50%',
          'Funded training courses: reimbursement up to 70%',
          'Pollination contracts: farmers pay the beekeeper to place hives during the flowering period (€5-50 per hive per season)',
          'Applications — through IFAP (financing institute for agriculture and fisheries)'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Beekeeper registration', amountEUR: 0, note: 'Free' },
    { label: 'Basic hive with swarm (starter)', amountEURMin: 150, amountEURMax: 300, note: 'Per hive' },
    { label: 'Protective suit + gloves + smoker', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Honey extractor (manual)', amountEURMin: 80, amountEURMax: 200 },
    { label: 'FNAP beginner course', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Annual: varroa treatment + analyses', amountEURMin: 30, amountEURMax: 80, note: 'Per hive per year' },
    { label: 'Vet visit/health document', amountEURMin: 30, amountEURMax: 80, note: 'per visit' },
    { label: 'Extraction room (sala de extração) — initial investment', amountEURMin: 1000, amountEURMax: 5000, note: 'If you plan to sell' }
  ],
  sources: [
    { title: 'DGAV — Direção-Geral de Alimentação e Veterinária', url: 'https://www.dgav.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'DGAV — Apicultura: registration and legislation', url: 'https://www.dgav.pt/animais/conteudo/animais-de-producao/abelhas/identificacao-registo-e-movimentacao-animal/registo/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 203/2005 — beekeeper registration', url: 'https://dre.pt/dre/detalhe/decreto-lei/203-2005-243676', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portaria 9/2021 — hive distances', url: 'https://dre.pt/dre/detalhe/portaria/9-2021-153700104', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IFAP — beekeeping support', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
