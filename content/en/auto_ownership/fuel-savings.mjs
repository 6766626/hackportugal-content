export default {
  editorialVoice: 'hackportugal',
  id: 'fuel-savings',
  categoryId: 'auto_ownership',
  title: 'Petrol and diesel — how to save on fuel',
  tldr: 'Forecourt prices in mainland Portugal in 2026: 95 petrol (gasolina) €1.85–€2.05/l, diesel (gasóleo) €1.80–€2.00/l.\n\nPrices are free on the mainland; ERSE publishes a weekly “preço eficiente” — a reference, non-binding benchmark, not a maximum cap.\n\nIn Madeira and the Azores, prices may be administratively regulated. The difference between expensive chains (Galp / BP / Repsol) and cheaper ones (Prio, Intermarché, Continente, Cepsa/Moeve) is up to €0.15/l. ComboMais / IdealGás / Tankpreise apps help find the cheapest filling station. Loyalty cards give a discount of €0.05–€0.12/l.',
  tags: ['petrol', 'filling station', 'savings', 'fuel'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'prices',
      title: '⛽ Prices and differences between chains',
      content: [
        { kind: 'paragraph', text: 'Prices on the mainland are free: each chain sets its own. The regulator ERSE publishes a weekly reference “efficient” benchmark (preço eficiente), but it is not a cap — actual forecourt prices can be both above and below it.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Brand levels', content: [
            { kind: 'checklist', items: [
              '🔴 Premium (Galp, BP, Repsol, ENI, Cepsa/Moeve): €1.95–€2.10/l — in cities, on motorways. Usually slightly more expensive',
              '🟡 Mid-range (OMV, Prio, BPCarga): €1.90–€2.00/l — in regions, less often in centres',
              '🟢 Budget (Intermarché filling stations, Continente Auto, Leclerc): €1.80–€1.95/l — at supermarkets, often the cheapest'
            ]}
          ]},
          { id: 'p2', title: 'Geographical differences', content: [
            { kind: 'checklist', items: [
              'Motorway (Via Rápida / Auto-Estrada): €0.05–€0.10/l more expensive',
              'Airport: €0.10/l more expensive',
              'Regions (Alentejo, inland areas): €0.03–€0.05/l cheaper',
              'Islands (Azores, Madeira): more expensive due to transport costs',
              '✅ Rule: leave the motorway for a village filling station = save €5–€10 on a full tank'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'apps',
      title: '📱 Apps for finding a cheap filling station',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Best apps', content: [
            { kind: 'checklist', items: [
              'ComboMais — Portuguese app, real-time prices for all chains, user updates',
              'IdealGás — similar app, many users',
              'Buy the Way — for long routes',
              'WayZ (Intermarché) — shows their filling stations + Continente discounts',
              'GAS by Galp — for regular customers (GAS points)',
              'ERSE portal (www.erse.pt) — energy regulator, weekly prices'
            ]}
          ]},
          { id: 'a2', title: 'How to use them', content: [
            { kind: 'checklist', items: [
              'Install 2 apps for cross-checking',
              'Search “near me” — 5–10 km radius',
              'Check the price — it is usually €0.02–€0.05 lower than the marker in Google Maps',
              'Is it worth driving for €0.05? → for a full 50 l tank = €2.50 saved. If you drive an extra 5 km, you will use roughly €3 of petrol — no point',
              '💡 Rule: cheap filling station 1–2 km away = go, 5+ km away = stay where you are'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'loyalty',
      title: '💳 Loyalty programmes and discounts',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Filling station loyalty cards', content: [
            { kind: 'checklist', items: [
              'BP PLUS — €0.06/l discount + €0.02 cashback',
              'Galp Poupa — €0.04–€0.08/l + cashback at Continente',
              'Repsol — not a very strong programme, small cashback',
              'Prio Card — basic discounts',
              'Registration: at the filling station or online, free'
            ]}
          ]},
          { id: 'l2', title: 'Supermarket discounts at filling stations (best option!)', content: [
            { kind: 'checklist', items: [
              '🏆 Continente + Galp: Cartão Continente at Galp = €0.12/l discount (best commercial offer)',
              '🏆 Pingo Doce + Repsol: Poupa Mais — €0.10/l',
              '🏆 Auchan filling stations: for Auchan Card holders — €0.08/l',
              'Intermarché filling stations are cheap in themselves; can be combined with an Intermarché card = another -€0.03',
              '💡 Points are accumulated in the supermarket — use them in store (double discount)'
            ]}
          ]},
          { id: 'l3', title: 'Corporate cards and fleet cards', content: [
            { kind: 'checklist', items: [
              'Galp Frota, BP Fleet, Cepsa StarFleet — corporate',
              '€0.10–€0.15/l discount for companies',
              'Sole traders (recibos verdes) can also apply if turnover is > €10000/year',
              'Monthly invoice (no cash payment each time), easier for invoices with IVA'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'strategies',
      title: '💡 Saving strategies',
      content: [
        { kind: 'checklist', items: [
          '📅 Fill up from Tuesday to Thursday: prices are usually lower than from Friday to Sunday',
          '🌅 In the morning: filling stations update prices in the morning — sometimes better than in the evening (but the difference is small)',
          '🏝️ Before Alentejo / Algarve: fill up in Lisbon; it is cheaper there than in tourist areas',
          '🇪🇸 Spain: at the border (Badajoz, Huelva) — petrol is €0.20–€0.30/l cheaper. If you are going to Spain on holiday — fill up there',
          '⛽ Full tank vs frequent refuelling: full tank = fewer trips to the filling station. But if it is cheap now — fill up now, it may be more expensive later',
          '🚗 Your consumption: eco-driving (smooth acceleration/braking, cruise control, correct tyres) — 10–20% less consumption',
          '🎯 Regular petrol, not premium 98: for most cars there is no difference (except high-performance ones), saving €0.10–€0.20/l'
        ]}
      ]
    },
    {
      id: 'ev',
      title: '⚡ For electric vehicles',
      content: [
        { kind: 'checklist', items: [
          'AC charging: €0.25–€0.35/kWh (at home / slow public charging)',
          'DC fast charging: €0.40–€0.55/kWh',
          'Night-time home tariff (tarifa bi-horária): €0.15–€0.20/kWh (the cheapest!)',
          'Tesla Supercharger: €0.35–€0.45/kWh (for non-Tesla), -10% for Tesla owners',
          '💡 Saving: with a bi-horária tariff + home wallbox — the cost of 100 km of driving is around €2–€3, versus €8–€10 for an ICE car'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Petrol (95)', amountEURMin: 1.85, amountEURMax: 2.05, note: '€/l' },
    { label: 'Diesel', amountEURMin: 1.80, amountEURMax: 2.00, note: '€/l' },
    { label: 'Premium (98)', amountEURMin: 2.10, amountEURMax: 2.30, note: '€/l' },
    { label: 'AutoGás (GPL)', amountEURMin: 0.90, amountEURMax: 1.15, note: '€/l' },
    { label: 'EV DC fast charging', amountEURMin: 0.40, amountEURMax: 0.55, note: '€/kWh' }
  ],
  sources: [
    { title: 'ERSE — fuel prices', url: 'https://www.erse.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGEG — Directorate-General for Energy', url: 'https://www.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
