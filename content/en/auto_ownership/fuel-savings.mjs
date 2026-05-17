export default {
  editorialVoice: 'hackportugal',
  id: 'fuel-savings',
  categoryId: 'auto_ownership',
  title: 'Petrol and diesel — how to save on fuel',
  tldr: 'Prices at petrol stations in mainland Portugal in 2026: petrol 95 (gasolina) €1.70–€1.90/l, diesel (gasóleo) €1.55–€1.75/l. Prices are free on the mainland; ERSE publishes a weekly “preço eficiente” — a reference, non-binding benchmark, not a maximum cap. In Madeira and the Azores, prices may be administratively regulated. The difference between expensive chains (Galp / BP / Repsol) and cheaper ones (Prio, Intermarché, Continente, Cepsa/Moeve) is up to €0.15/l. ComboMais / IdealGás / Tankpreise apps help find the cheapest petrol station. Loyalty cards give a discount of €0.05–€0.12/l.',
  tags: ['petrol', 'petrol station', 'savings', 'fuel'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'prices',
      title: '⛽ Prices and differences between chains',
      content: [
        { kind: 'paragraph', text: 'Prices in Portugal are free, but regulated by the market. The state publishes weekly recommended maximum prices — all petrol stations stay below them.' },
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Brand tiers', content: [
            { kind: 'checklist', items: [
              '🔴 **Premium** (Galp, BP, Repsol, ENI, Cepsa/Moeve): €1.75–€1.90/l — in cities, on motorways. Usually slightly more expensive',
              '🟡 **Mid-range** (OMV, Prio, BPCarga): €1.65–€1.80/l — in the regions, less often in city centres',
              '🟢 **Budget** (Intermarché petrol stations, Continente Auto, Leclerc): €1.55–€1.70/l — at supermarkets, often the cheapest'
            ]}
          ]},
          { id: 'p2', title: 'Geographical differences', content: [
            { kind: 'checklist', items: [
              'Motorway (Via Rápida / Auto-Estrada): €0.05–€0.10/l more expensive',
              'Airport: €0.10/l more expensive',
              'Regions (Alentejo, inland areas): €0.03–€0.05/l cheaper',
              'Islands (Azores, Madeira): more expensive due to transport costs',
              '✅ **Rule**: leave the motorway for a village petrol station = save €5–€10 on a full tank'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'apps',
      title: '📱 Apps for finding a cheap petrol station',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Best apps', content: [
            { kind: 'checklist', items: [
              '**ComboMais** — Portuguese app, real-time prices for all chains, updates from users',
              '**IdealGás** — similar app, many users',
              '**Buy the Way** — for long routes',
              '**WayZ** (Intermarché) — shows their petrol stations + Continente discounts',
              '**GAS** by Galp — for regular customers (GAS points)',
              '**ERSE portal** (www.erse.pt) — energy regulator, weekly prices'
            ]}
          ]},
          { id: 'a2', title: 'How to use them', content: [
            { kind: 'checklist', items: [
              'Install 2 apps for cross-checking',
              'Search “near me” — 5–10 km radius',
              'Check the price — it is usually €0.02–€0.05 lower than the marker in Google Maps',
              'Is it worth driving for €0.05? → for a full 50 l tank = €2.50 saving. If you have to drive an extra 5 km, you will use roughly €3 of petrol — no point',
              '💡 **Rule**: cheap petrol station 1–2 km away = go, 5+ km away = stay where you are'
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
          { id: 'l1', title: 'Petrol station loyalty cards', content: [
            { kind: 'checklist', items: [
              '**BP PLUS** — €0.06/l discount + €0.02 cashback',
              '**Galp Poupa** — €0.04–€0.08/l + cashback at Continente',
              '**Repsol** — not a very strong programme, small cashback',
              '**Prio Card** — basic discounts',
              'Sign-up: at the petrol station or online, free'
            ]}
          ]},
          { id: 'l2', title: 'Supermarket discounts at petrol stations (best option!)', content: [
            { kind: 'checklist', items: [
              '🏆 **Continente + Galp**: Cartão Continente at Galp = €0.12/l discount (best commercial offer)',
              '🏆 **Pingo Doce + Repsol**: Poupa Mais — €0.10/l',
              '🏆 **Auchan petrol stations**: for Auchan Card holders — €0.08/l',
              '**Intermarché** petrol stations are cheap in themselves; you can combine with an Intermarché card = another -€0.03',
              '💡 Points accumulate in the supermarket — use them in the shop (double discount)'
            ]}
          ]},
          { id: 'l3', title: 'Corporate and fleet cards', content: [
            { kind: 'checklist', items: [
              '**Galp Frota, BP Fleet, Cepsa StarFleet** — corporate',
              '€0.10–€0.15/l discount for companies',
              'Self-employed people (recibos verdes) can also apply if turnover is > €10000/year',
              'Monthly bill (without paying cash every time), easier for invoices with IVA'
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
          '📅 **Fill up from Tuesday to Thursday**: prices are usually lower than from Friday to Sunday',
          '🌅 **In the morning**: petrol stations update prices in the morning — sometimes better than in the evening (but the difference is small)',
          '🏝️ **Before Alentejo / Algarve**: fill up in Lisbon, it is cheaper there than in tourist areas',
          '🇪🇸 **Spain**: at the border (Badajoz, Huelva) — petrol is €0.20–€0.30/l cheaper. If you are going to Spain on holiday — fill up there',
          '⛽ **Full tank** vs frequent refuelling: a full tank = fewer trips to the petrol station. But if it is cheap now — fill up now, it may be more expensive later',
          '🚗 **Your consumption**: **eco-driving** (smooth acceleration/braking, cruise control, correct tyres) — 10–20% less consumption',
          '🎯 **Regular petrol, not premium 98**: for most cars there is no difference (except high-performance ones), saving €0.10–€0.20/l'
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
          '💡 Saving: with a bi-horária tariff + home wallbox — the cost of 100 km of driving is around €2–€3, versus €8–€10 for an internal combustion engine'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Petrol (95)', amountEURMin: 1.70, amountEURMax: 1.90, note: '€/l' },
    { label: 'Diesel', amountEURMin: 1.55, amountEURMax: 1.75, note: '€/l' },
    { label: 'Premium (98)', amountEURMin: 1.85, amountEURMax: 2.05, note: '€/l' },
    { label: 'AutoGás (GPL)', amountEURMin: 0.90, amountEURMax: 1.10, note: '€/l' },
    { label: 'EV DC fast charging', amountEURMin: 0.40, amountEURMax: 0.55, note: '€/kWh' }
  ],
  sources: [
    { title: 'ERSE — fuel prices', url: 'https://www.erse.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGEG — Directorate-General for Energy', url: 'https://www.dgeg.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
