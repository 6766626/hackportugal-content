export default {
  editorialVoice: 'hackportugal',
  id: 'wine-regions',
  categoryId: 'food_leisure',
  title: 'Portuguese wines — regions and what to buy',
  tldr: 'Portugal is one of the largest wine producers in the EU, usually around 5th place by volume. It is convenient to navigate by the 14 wine regions; DOC/DO/DOP are protected designations within regions. The classics: Port (fortified wine from the Douro), Vinho Verde (young wine from the north), Alentejo (full-bodied red), Douro DOC, Madeira, Bairrada. Supermarkets have excellent inexpensive wines for €3-8 per bottle.',
  tags: ['wine', 'port', 'douro', 'alentejo'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'regions',
      title: 'Portugal’s 14 wine regions',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'North', content: [
            { kind: 'checklist', items: [
              'Vinho Verde — young, light, for summer (Casal Garcia is a classic)',
              'Porto e Douro — the region where Port/Porto and unfortified Douro DOC come from; for red Douro tinto: Duorum, Quinta do Crasto and others.',
              'Trás-os-Montes — border area with Spain, powerful red wines'
            ]}
          ]},
          { id: 'r2', title: 'Centre', content: [
            { kind: 'checklist', items: [
              'Bairrada — sparkling wine + red wines from the Baga grape variety',
              'Dão e Lafões — elegant reds, the “Portuguese Burgundy”',
              'Távora-Varosa — sparkling wines, in the hills between the Douro and Dão',
              'Beira Interior — mountain wines, less well known but high quality',
              'Lisboa — around the capital, accessible prices, growing quality',
              'Tejo — the Tejo river, accessible wines'
            ]}
          ]},
          { id: 'r3', title: 'South', content: [
            { kind: 'checklist', items: [
              'Alentejo — hot south, full-bodied red wines (Herdade do Esporão)',
              'Península de Setúbal — Moscatel de Setúbal/Moscatel Roxo as fortified sweet wines; Palmela and dry reds/whites',
              'Algarve — a small but interesting region'
            ]}
          ]},
          { id: 'r4', title: 'Islands', content: [
            { kind: 'checklist', items: [
              'Madeira — fortified wine, unique heat-ageing process',
              'Açores — volcanic wines on basalt (Pico), including Paisagem da Cultura da Vinha da Ilha do Pico UNESCO'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'port',
      title: 'Port — what you need to understand',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Ruby', content: [
            { kind: 'paragraph', text: 'Young (2-3 years), fruity, accessible. A good option to start with.' }
          ]},
          { id: 'p2', title: 'Tawny', content: [
            { kind: 'paragraph', text: 'Aged in wood; it can be basic/Reserve and with an age indication of 10/20/30/40/50 years old. The age on the label is a category of style and the average character of the blend.' }
          ]},
          { id: 'p3', title: 'Vintage', content: [
            { kind: 'paragraph', text: 'From one especially successful year, bottle-aged. Expensive, iconic. Only in “declared” years.' }
          ]},
          { id: 'p4', title: 'LBV (Late Bottled Vintage)', content: [
            { kind: 'paragraph', text: 'An accessible alternative to Vintage. From one year, 4-6 years in barrel.' }
          ]},
          { id: 'p5', title: 'White Port', content: [
            { kind: 'paragraph', text: 'White Port, often with tonic = a “Portonic” cocktail.' }
          ]}
        ]},
        { kind: 'paragraph', text: 'Well-known producers: Taylor\'s, Graham\'s, Croft, Niepoort, Sandeman, Ramos Pinto. Cellars in Vila Nova de Gaia — tours with tasting for €15-30.' }
      ]
    },
    {
      id: 'buying',
      title: 'Where to buy',
      content: [
        { kind: 'checklist', items: [
          'Supermarket — good wine for €3-8, very good wine for €10-20',
          'Garrafeira (wine shop) — advice, a wider selection',
          'Directly from the producer — tours at quintas in the Douro and Alentejo, buying on site',
          'Online: Garrafeira Nacional, Wine With Spirit',
          'Airport — not always better value, prices comparable with Lidl',
          'Lidl is often good for budget wines and promotional selections (Deluxe range, Cimarosa and others)'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips for residents',
      content: [
        { kind: 'checklist', items: [
          'Wine from grocery shops in Portugal is very good — do not look for Italian/French wine at the basic €5 level',
          'Mass-market Vinho Verde is often light, fresh and slightly sparkling; but the region also makes serious still Alvarinho/Loureiro',
          'Bairrada sparkling wine is a cheaper alternative to Prosecco',
          'In a restaurant — Vinho da Casa (house wine) is often decent, €3-5 for 0.5 l',
          'Restaurants add 100-200% mark-ups on bottles — think before ordering',
          'Learning: tastings in Lisboa and Porto (Ultimate Wine Experience, Bacalhau), €25-60'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Wines of Portugal — official', url: 'https://www.winesofportugal.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IVDP — Instituto dos Vinhos do Douro e Porto', url: 'https://www.ivdp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Wine tourism', url: 'https://www.visitportugal.com/pt-pt/experiencias/gastronomia-e-vinhos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
