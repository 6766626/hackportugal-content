export default {
  editorialVoice: 'hackportugal',
  id: 'wine-regions',
  categoryId: 'food_leisure',
  title: 'Portuguese wines — regions and what to buy',
  tldr: 'Portugal is the 4th largest wine producer in the EU. 14 DOC regions. Iconic choices: port (fortified wine from the Douro), Vinho Verde (young wine from the north), Alentejo (full-bodied red), Douro DOC, Madeira, Bairrada. Supermarkets have excellent inexpensive wines for €3–8 per bottle.',
  tags: ['wine', 'port', 'douro', 'alentejo'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'regions',
      title: '14 DOC regions',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'North', content: [
            { kind: 'checklist', items: [
              'Vinho Verde — young, light, for summer (Casal Garcia is a classic)',
              'Douro DOC — the home of port, also red wines (Duorum, Quinta do Crasto)',
              'Port — fortified wine, Ruby/Tawny/Vintage styles, legendary cellars in Vila Nova de Gaia',
              'Trás-os-Montes — border area with Spain, powerful red wines'
            ]}
          ]},
          { id: 'r2', title: 'Centre', content: [
            { kind: 'checklist', items: [
              'Bairrada — sparkling wine + reds from the Baga grape variety',
              'Dão — elegant reds, “Portuguese Burgundy”',
              'Beira Interior — mountain wines, less well known but high quality',
              'Lisboa — around the capital, accessible prices, improving quality'
            ]}
          ]},
          { id: 'r3', title: 'South', content: [
            { kind: 'checklist', items: [
              'Alentejo — hot south, full-bodied red wines (Herdade do Esporão)',
              'Setúbal — dessert Moscatel de Setúbal, dry white wines',
              'Algarve — a small but interesting region',
              'Tejo — the Tagus river, affordable wines'
            ]}
          ]},
          { id: 'r4', title: 'Islands', content: [
            { kind: 'checklist', items: [
              'Madeira — fortified wine, unique ageing process in heat',
              'Açores — volcanic wines on basalt (Pico), a rarity'
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
            { kind: 'paragraph', text: 'Young (2–3 years), fruity, affordable. A good place to start.' }
          ]},
          { id: 'p2', title: 'Tawny', content: [
            { kind: 'paragraph', text: 'Aged in oak for 10/20/30/40 years. Nutty notes, more complex flavour.' }
          ]},
          { id: 'p3', title: 'Vintage', content: [
            { kind: 'paragraph', text: 'From a single especially successful year, aged in bottle. Expensive, iconic. Only in “declared” years.' }
          ]},
          { id: 'p4', title: 'LBV (Late Bottled Vintage)', content: [
            { kind: 'paragraph', text: 'An affordable alternative to Vintage. From a single year, 4–6 years in barrel.' }
          ]},
          { id: 'p5', title: 'White Port', content: [
            { kind: 'paragraph', text: 'White port, often with tonic = a “Portonic” cocktail.' }
          ]}
        ]},
        { kind: 'paragraph', text: 'Well-known producers: Taylor\'s, Graham\'s, Croft, Niepoort, Sandeman, Ramos Pinto. Cellars in Vila Nova de Gaia — tours with tasting for €15–30.' }
      ]
    },
    {
      id: 'buying',
      title: 'Where to buy',
      content: [
        { kind: 'checklist', items: [
          'Supermarket — good wine for €3–8, very good wine for €10–20',
          'Garrafeira (wine shop) — advice, broader selection',
          'Directly from the producer — tours at quintas in the Douro and Alentejo, buying on site',
          'Online: Garrafeira Nacional, Wine With Spirit',
          'Airport — not always better value, prices are comparable with Lidl',
          'Lidl “Provinho” / “Delicatessen” range — excellent value for money'
        ]}
      ]
    },
    {
      id: 'tips',
      title: 'Tips for residents',
      content: [
        { kind: 'checklist', items: [
          'Wine from grocery shops in Portugal is very good — do not look for Italian/French wine at the basic €5 level',
          'Vinho Verde — ideal for summer, lightly sparkling',
          'Bairrada sparkling wine — a cheaper alternative to Prosecco',
          'In a restaurant — Vinho da Casa (house wine) is often decent, €3–5 for 0.5 l',
          'Restaurants add mark-ups of 100–200% on bottles — think before ordering',
          'Learning: tastings in Lisboa and Porto (Ultimate Wine Experience, Bacalhau), €25–60'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Wines of Portugal — official', url: 'https://www.winesofportugal.com/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IVDP — Instituto dos Vinhos do Douro e Porto', url: 'https://www.ivdp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Wine tourism', url: 'https://www.visitportugal.com/pt-pt/experiencias/gastronomia-e-vinhos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
