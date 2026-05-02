export default {
  editorialVoice: 'hackportugal',
  id: 'consumer-rights',
  categoryId: 'emergency_rights',
  title: 'Consumer rights — returns, exchanges, warranty',
  tldr: 'Portugal has standard EU consumer protection: 14 days to withdraw from an online/distance purchase (DL 24/2014), a 3-year warranty on new goods (Lei 84/2021), and 1 year on second-hand goods. If there is a problem: submit a complaint via Livro de Reclamações Online (livroreclamacoes.pt), contact DECO Proteste for help, and ECC Net for cross-border disputes in the EU. Shops must accept defective goods and offer replacement/repair/refund. If they refuse — complain to ASAE (asae.gov.pt).',
  tags: ['consumer', 'return', 'warranty', 'complaint', 'deco', 'asae'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'rights-overview',
      title: '⚖️ Basic rights',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'Warranty on goods (Lei 84/2021)', content: [
            { kind: 'checklist', items: [
              '✅ **New goods**: 3-year warranty (previously 2 — changed in 2022)',
              '✅ **Second-hand goods**: minimum 1 year; seller and buyer may agree a different period',
              '✅ Warranty covers LACK OF CONFORMITY defects — not wear and tear, not damage caused by the buyer',
              '🔁 In the event of a defect, the seller must offer: repair OR replacement OR discount OR refund',
              '⏰ In the first 6 months there is a presumption that the defect existed at the time of sale (burden of proof on the seller)',
              '📋 Keep the receipt (talão de compra) and packaging for the entire warranty period'
            ]}
          ]},
          { id: 'r2', title: 'Right of withdrawal (online/distance only)', content: [
            { kind: 'checklist', items: [
              '🌐 **14 days** to withdraw when buying online / by phone / at home (DL 24/2014)',
              '🚫 WITHOUT giving reasons',
              '✅ Full refund within 14 days',
              '🚚 Return delivery is usually paid by the buyer (unless the shop stated otherwise)',
              '🚫 Exceptions: personalised goods, perishable goods, underwear (unpacked), software (unpacked), subscriptions (after activation)',
              '⚠️ In a physical shop, the 14-day rule does NOT apply (but many shops voluntarily allow returns within 30 days — ask)'
            ]}
          ]},
          { id: 'r3', title: 'Information and price tags', content: [
            { kind: 'checklist', items: [
              '🏷️ The price INCLUDES IVA — no hidden surcharges',
              '⚖️ If the checkout price is higher than the label price, the seller must sell at the lower price',
              '📜 The label must include: ingredients, country of origin, expiry date (for food)',
              '🌐 On the website — all prices with IVA, delivery shown separately',
              '⚠️ “Black Fridays”: the price must be LOWER than the average over the last 30 days (EU Omnibus Directive)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-to-complain',
      title: '📋 How to make a complaint',
      content: [
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Step 1 — Livro de Reclamações', content: [
            { kind: 'checklist', items: [
              '📓 Every commercial establishment or service provider must by law have a “Livro de Reclamações” (physical or electronic)',
              '📝 Ask for it — they must provide it at any time',
              '✍️ You fill in 3 copies: for you, the establishment, and the regulator',
              '🌐 Alternative — Livro de Reclamações Online at livroreclamacoes.pt (same effect)',
              '⏰ Mandatory response deadline from the establishment: 15 days',
              '👮 The regulator (ASAE/DGC) responds, and sometimes fines the shop'
            ]}
          ]},
          { id: 'l2', title: 'Step 2 — DECO Proteste (help)', content: [
            { kind: 'checklist', items: [
              '🛡️ DECO — the largest consumer protection association',
              '💰 Paid subscription: €25/month — personal adviser, letter templates, mediation',
              '🆓 Basic help is free: 707 200 200 (helpline)',
              '📩 Contact via the website deco.proteste.pt',
              '📚 “Pro Teste” magazine with tests of goods and services'
            ]}
          ]},
          { id: 'l3', title: 'Step 3 — Regulator', content: [
            { kind: 'checklist', items: [
              '⚖️ **ASAE** (Autoridade de Segurança Alimentar e Económica) — general trade supervision, asae.gov.pt',
              '⚡ **ERSE** (electricity, gas) — erse.pt',
              '📞 **ANACOM** (telecoms, internet) — anacom.pt',
              '🏥 **INFARMED** (medicines) — infarmed.pt',
              '🏦 **Banco de Portugal** (banks) — bportugal.pt',
              '🚗 **AT IMT** (cars) — imt-ip.pt',
              '✈️ **ANAC** (aviation) — anac.pt'
            ]}
          ]},
          { id: 'l4', title: 'Step 4 — Court / Julgados de Paz', content: [
            { kind: 'checklist', items: [
              '⚖️ **Julgados de Paz**: small claims up to €15,000 — faster than an ordinary court',
              '💰 Court costs €70 (if the claim is ≤ €5000) or €105 (>€5000)',
              '⏱️ Decision usually in 2-6 months',
              '🎓 A lawyer is not mandatory (for claims ≤ €3,740)',
              '🏛️ Addresses: julgadosdepaz.mj.pt'
            ]}
          ]},
          { id: 'l5', title: 'Cross-border dispute (another EU country)', content: [
            { kind: 'checklist', items: [
              '🇪🇺 **Centro Europeu do Consumidor (ECC-Net)**: cec.consumidor.pt',
              '🆓 Free help, mediation between a buyer from Portugal and a foreign shop in the EU',
              '📧 ec.europa.eu/consumers — for online submission',
              '⏱️ Resolution through ECC usually takes 2-3 months'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'sample-cases',
      title: '🎯 Typical cases',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Phone broke after 8 months', content: [
            { kind: 'checklist', items: [
              '✅ Within the 3-year warranty — contact the shop',
              '📋 The shop MUST offer: repair/replacement/refund',
              '⏰ Repair deadline: maximum 30 days; if longer — right to replacement/refund',
              '⚠️ If they refuse — Livro de Reclamações + ASAE'
            ]}
          ]},
          { id: 's2', title: 'Bought uncomfortable clothes online', content: [
            { kind: 'checklist', items: [
              '✅ 14 days from receipt — withdrawal without explanation',
              '📦 Pack it (not necessarily “as new”, but the item must not be damaged)',
              '📩 Notify the seller by email: “exerço o meu direito de livre resolução”',
              '📮 Send it back (delivery cost paid by the buyer)',
              '💸 Money is refunded within 14 days',
              '⚠️ Underwear, unpacked shoes — they may refuse under specific conditions'
            ]}
          ]},
          { id: 's3', title: 'Airline cancelled the flight', content: [
            { kind: 'checklist', items: [
              '🛫 EU Regulation 261/2004 — compensation €250-600 + rerouting',
              '📜 See the separate guide on flight compensation (eu-flight-compensation)',
              '🏛️ Regulator: ANAC (anac.pt)'
            ]}
          ]},
          { id: 's4', title: 'Hidden bank fees', content: [
            { kind: 'checklist', items: [
              '🏦 Banco de Portugal — Portal do Cliente Bancário',
              '📋 Online reclamação at bportugal.pt',
              '⏱️ The bank must respond within 30 days',
              '⚖️ The bank MUST disclose all fees in the “PFFI” (folheto fiscal)'
            ]}
          ]},
          { id: 's5', title: 'Expired goods in the supermarket', content: [
            { kind: 'checklist', items: [
              '🏪 ASAE: photo + receipt + video — complaint at asae.gov.pt',
              '⚠️ If you ate it — see a doctor; the shop’s insurance may cover the damage',
              '💰 ASAE fines for the shop: €2,000-30,000',
              '🛒 Continente / Pingo Doce usually provide a full refund + card bonus'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '📷 Photograph the item on receipt — this is evidence if it is damaged',
          '🧾 Keep receipts in Google Drive — the ChequeCloud app works',
          '📅 Record the purchase date — for calculating the warranty period',
          '🤝 Start amicably: in 90% of cases the shop manager will resolve it themselves, without complaints',
          '⚠️ If the shop has closed: the warranty passes to the manufacturer (if there is one — Apple, Samsung, Bosch)',
          '🌐 Check the shop on “Livro de Reclamações” — frequent complaints = do not buy',
          '📚 “Direitos do Consumidor” — official free DGC booklet',
          '🇪🇺 EU Online Dispute Resolution: ec.europa.eu/odr — for cross-border disputes',
          '⚖️ Annual DECO Proteste membership pays for itself with one serious problem',
          '🛡️ Credit card: chargeback through the bank — last resort (the bank will reverse the debit)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Livro de Reclamações', amountEUR: 0, note: 'mandatory free of charge' },
    { label: 'DECO Proteste subscription', amountEURMin: 25, amountEURMax: 25, note: '€/month' },
    { label: 'Julgados de Paz (≤ €5000)', amountEUR: 70 },
    { label: 'Julgados de Paz (€5000-15000)', amountEUR: 105 },
    { label: 'Lawyer for a serious case', amountEURMin: 200, amountEURMax: 1500, note: '€ one-off' }
  ],
  sources: [
    { title: 'Livro de Reclamações Online', url: 'https://www.livroreclamacoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ASAE — Autoridade de Segurança Alimentar e Económica', url: 'https://www.asae.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 84/2021 — Warranty on goods', url: 'https://diariodarepublica.pt/dr/detalhe/lei/84-2021-176053057', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DL 24/2014 — Distance contracts', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/24-2014-572691', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'European Consumer Centre (ECC-Net Portugal)', url: 'https://cec.consumidor.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
