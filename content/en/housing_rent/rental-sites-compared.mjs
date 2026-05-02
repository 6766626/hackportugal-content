export default {
  editorialVoice: 'hackportugal',
  id: 'rental-sites-compared',
  categoryId: 'housing_rent',
  title: 'Where to look for rental housing — websites and strategy',
  tldr: 'Four main channels: aggregators (Idealista, Imovirtual, Supercasa), medium-term rentals (Flatio, Uniplaces), directly from owners (OLX Imóveis, Facebook groups), agents (Century 21, ERA, RE/MAX). For long-term rentals, start with Idealista + OLX. For moving before obtaining a NIF — Flatio / Uniplaces (they accept just a passport). Average search time in Lisbon/Porto — 3–8 weeks.',
  tags: ['rent', 'idealista', 'imovirtual', 'olx', 'flatio'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'aggregators',
      title: 'Aggregators — long-term rentals',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Idealista (idealista.pt)', content: [
            { kind: 'checklist', items: [
              'The largest aggregator in Portugal and Spain',
              'Filters: price, number of rooms, floor area, pets, terrace, garage, energy certificate',
              'Notifications about new listings by email / in the app',
              '70% of listings are from agents, 30% from owners',
              'App in English/Spanish, not in Russian'
            ]}
          ]},
          { id: 'a2', title: 'Imovirtual (imovirtual.com)', content: [
            { kind: 'paragraph', text: 'The second largest. More regional listings (small towns). Agent fees are the same.' }
          ]},
          { id: 'a3', title: 'Supercasa (supercasa.pt)', content: [
            { kind: 'paragraph', text: 'Fewer premium homes, but lots of mid-budget options. Convenient maps and filters.' }
          ]},
          { id: 'a4', title: 'Casa Sapo (casa.sapo.pt)', content: [
            { kind: 'paragraph', text: 'The oldest aggregator. Often duplicates Idealista/Imovirtual, but there are exclusives from smaller agencies.' }
          ]}
        ]}
      ]
    },
    {
      id: 'medium-term',
      title: 'Medium-term rentals and furnished housing — for new arrivals',
      content: [
        { kind: 'substeps', items: [
          { id: 'm1', title: 'Flatio (flatio.com)', content: [
            { kind: 'checklist', items: [
              'Czech platform, strong in Portugal',
              'Everything is furnished and utilities are included',
              'Contract from 1 month to 12+ months',
              'They accept a passport + booking without a NIF',
              'The platform takes 10–15% from the landlord, with no extra charge to the client',
              '20–40% more expensive than Idealista, but easier for new arrivals'
            ]}
          ]},
          { id: 'm2', title: 'Uniplaces (uniplaces.com)', content: [
            { kind: 'paragraph', text: 'For students. Flats and rooms, often near universities. Deposit online through the platform. They accept tenants without a NIF.' }
          ]},
          { id: 'm3', title: 'Spotahome, Nestpick, HousingAnywhere', content: [
            { kind: 'paragraph', text: 'International platforms. Fewer listings in Portugal, but an option for those searching before moving.' }
          ]},
          { id: 'm4', title: 'Airbnb (long-term stays)', content: [
            { kind: 'paragraph', text: 'Since 2024, short-term rentals (AL) have been restricted in Portugal. Long-term listings through “Monthly stays” — 28+ days, discounts up to 40%. No Portuguese contract, but expensive.' }
          ]}
        ]}
      ]
    },
    {
      id: 'direct',
      title: 'Directly from the owner',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'OLX Imóveis (olx.pt)', content: [
            { kind: 'checklist', items: [
              'The largest classifieds platform in Portugal',
              '60% from private owners (no agent = no commission)',
              'Replies come faster than on Idealista',
              'Higher risk of scams (always view in person)',
              'Never make an advance payment before viewing'
            ]}
          ]},
          { id: 'd2', title: 'Facebook groups', content: [
            { kind: 'paragraph', text: 'Groups by city: “Arrendamento Lisboa”, “Casas para Alugar Porto”, “Expats in PT — Housing”. Moderation is weak, but quick deals are possible. Check the landlord profile.' }
          ]},
          { id: 'd3', title: 'Word of mouth / noticeboard adverts', content: [
            { kind: 'paragraph', text: 'Still works in small towns. Ask at the Junta de Freguesia (local parish council), cafés, and pastry shops. Often no commission.' }
          ]}
        ]}
      ]
    },
    {
      id: 'agents',
      title: 'Agents (through offices)',
      content: [
        { kind: 'substeps', items: [
          { id: 'ag1', title: 'When to use them', content: [
            { kind: 'paragraph', text: 'If you do not have time to search yourself or need advice. Commission: usually 1 month’s rent + IVA (paid by the landlord, but reflected in the price).' }
          ]},
          { id: 'ag2', title: 'Large networks', content: [
            { kind: 'checklist', items: [
              'Century 21 — 150+ offices',
              'ERA Imobiliária — the largest in Portugal',
              'RE/MAX — American, strong in Lisboa/Porto',
              'Coldwell Banker — premium',
              'Engel & Völkers — premium'
            ]}
          ]},
          { id: 'ag3', title: 'What an agent requires', content: [
            { kind: 'checklist', items: [
              'Cartão de Cidadão / residence permit / passport',
              'NIF',
              'Proof of income (3-month contract / bank statement)',
              'Guarantor or rental insurance',
              'First month + deposit (usually 2–3 months)',
              'Company guarantee — if you are employed'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'strategy',
      title: 'Search strategy',
      content: [
        { kind: 'checklist', items: [
          '📅 Start searching 4–6 weeks BEFORE moving in',
          '🔔 Set up alerts on Idealista + OLX — new listings go quickly',
          '📲 Reply within an hour, view at weekends',
          '💬 Message to the landlord: name, arrival date, working/studying, stable income',
          '🏠 Always view in person or by video call',
          '💶 Do not make an advance payment to Revolut without a signed contract',
          '🤝 Negotiate — the price is often inflated by 5–15%',
          '📄 Every contract must be registered with the tax authority through Portal das Finanças — this is the law'
        ]},
        { kind: 'warning', text: 'Typical scams: request for advance payment via Western Union, “booking” without a viewing, “the landlord lives in another country”. Always meet in person or use a verified platform.' }
      ]
    }
  ],
  sources: [
    { title: 'Institute for Housing and Urban Rehabilitation (IHRU)', url: 'https://www.ihru.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças — Rental Contracts', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMI — Association of Estate Agents', url: 'https://www.ami.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Renting a home', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
