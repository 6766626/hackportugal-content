export default {
  editorialVoice: 'hackportugal',
  id: 'buying-property',
  categoryId: 'housing_buy',
  title: 'Buying property in Portugal — step by step',
  tldr: 'Foreigners can buy property without restrictions. Route: NIF → search → CPCV + sinal 10% → financing/legal checks → escritura at a notary → registration. Taxes: **IMT** — marginal progressive scale with abatements (for own permanent residence — 0% up to a certain threshold, then rates increase step by step up to a fixed top rate); **IS 0.8%**. Total costs are 8-12% on top of the price. Important: from 7 October 2023 (Lei 56/2023), the Golden Visa via the purchase of residential property was **abolished** — this residence permit route is no longer available for new applications. **Youth relief up to age 35** was introduced by **Decreto-Lei 48-A/2024** (not DL 44/2024).',
  tags: ['purchase', 'property', 'escritura', 'imt'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'preparation',
      title: 'Preparation',
      content: [
        { kind: 'checklist', items: [
          'Obtain a NIF',
          'Open an account with a Portuguese bank (ActivoBank, Millennium, Caixa)',
          'Set your budget (price + ~10% costs)',
          'Decide: cash or mortgage (see separate guide)',
          'Choose a lawyer — recommended for non-residents, €500-2,000'
        ]}
      ]
    },
    {
      id: 'search',
      title: 'Search',
      content: [
        { kind: 'checklist', items: [
          'Idealista.pt — the main aggregator',
          'Imovirtual.com',
          'Casa Sapo, Supercasa, ERA, Century 21',
          'OLX Imóveis — often direct from owners',
          'Estate agents — the seller pays the commission (usually 5%)'
        ]},
        { kind: 'warning', text: '2026 prices in Lisboa: €4,000-8,000/m² centre, €3,000-5,000/m² suburbs. Algarve: €2,500-6,000/m². North (Braga, Coimbra): €1,500-3,000/m².' }
      ]
    },
    {
      id: 'due-diligence',
      title: 'Legal due diligence (before signing)',
      content: [
        { kind: 'checklist', items: [
          'Certidão Permanente Imóvel — ownership status, encumbrances',
          'Caderneta Predial Urbana — tax record',
          'Licença de utilização — practice after Simplex Urbanístico has changed (presentation for escritura is no longer required in the previous form), but the buyer should still check the usage status',
          'Ficha Técnica da Habitação — for buildings after 2004; presentation for escritura has also been simplified, but the contents are useful for the buyer',
          'Certificado Energético (CE) — energy certificate (mandatory)',
          'No debts to the condomínio (owners’ association)',
          'No IMI debts'
        ]},
        { kind: 'paragraph', text: 'A lawyer checks all of this — around 1-2 weeks.' }
      ]
    },
    {
      id: 'cpcv',
      title: 'CPCV (Contrato Promessa de Compra e Venda)',
      content: [
        { kind: 'paragraph', text: 'Preliminary contract. Stronger than a simple offer. It binds both parties.' },
        { kind: 'checklist', items: [
          'Parties + NIF',
          'Property description + matricial number',
          'Price + payment method',
          'Deposit (sinal) 10-20% — paid to the seller',
          'Deadline until escritura (usually 30-90 days)',
          'Penalties for termination: if the buyer withdraws — they lose the sinal; if the seller withdraws — they return the sinal × 2'
        ]}
      ]
    },
    {
      id: 'escritura',
      title: 'Escritura (notarial deed)',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: '1. Preparing documents with the notary', content: [
            { kind: 'paragraph', text: 'The notary collects up-to-date extracts, checks the parties, and prepares the draft.' }
          ]},
          { id: 'e2', title: '2. Paying taxes BEFORE escritura', content: [
            { kind: 'checklist', items: [
              'IMT — via Portal das Finanças (tax portal), proof at escritura',
              'IS 0.8% — automatically',
              'With a mortgage — IS on the mortgage 0.6%'
            ]}
          ]},
          { id: 'e3', title: '3. Signing', content: [
            { kind: 'paragraph', text: 'At the notary. Both parties + interpreter if needed. Payment to the seller by banker’s draft / transfer. The bank releases the mortgage funds.' }
          ]},
          { id: 'e4', title: '4. Registration at the Conservatória do Registo Predial', content: [
            { kind: 'paragraph', text: 'Usually done electronically by the notary. **Ownership transfers** through a valid sale and purchase title (escritura pública/documento particular autenticado); registo predial is critically important for opposability against third parties — without it, you are not protected from subsequent transactions by the seller. Register immediately.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'After purchase',
      content: [
        { kind: 'checklist', items: [
          'Notify Finanças of the change of address (if this is your main home)',
          'Transfer utilities into your name (EDP, Águas, gas)',
          'Home insurance is mandatory if there is a mortgage',
          'IMI (municipal tax) — for urban residential **0.3–0.45% of VPT** (0.8% — for the former rural rate); the rate is set by the Câmara Municipal. Payment in instalments (1/2/3 times per year) depends on the amount due',
          'If you plan to rent it out — registration with Finanças + possibly an AL licence for short-term rental'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IMT — for own permanent residence (continente)', note: 'marginal progressive scale with abatements up to a certain threshold (0% base threshold), then increasing rates; above the highest threshold — fixed rate. Exact 2026 figures — see AT/CIMT' },
    { label: 'IMT — for secondary/other residential property', note: 'the same escalões, but without the 0% first threshold; starts at 1%' },
    { label: 'Youth relief up to age 35 — main home', amountEUR: 0, note: 'IMT+IS 0% under **Decreto-Lei 48-A/2024** up to a certain price threshold; conditions (residency, no previous ownership, main home) — check in the current text' },
    { label: 'IMT for buyers from tax havens', amountEUR: 0, note: 'fixed rate of 10% regardless of value' },
    { label: 'IS (stamp duty)', amountEUR: 0, note: '0.8% of the value (for young people up to 35 within the relief = 0%)' },
    { label: 'Escritura + notary', amountEURMin: 500, amountEURMax: 1500 },
    { label: 'Registration', amountEURMin: 250, amountEURMax: 400 },
    { label: 'Lawyer', amountEURMin: 500, amountEURMax: 2000 },
    { label: 'Home insurance annually', amountEURMin: 150, amountEURMax: 500 },
    { label: 'IMI annually (urban residential)', amountEURMin: 100, amountEURMax: 3000, note: '0.3–0.45% VPT; rate set by the Câmara Municipal. Payment 1/2/3 times per year according to amount' }
  ],
  timelineDaysMin: 45,
  timelineDaysMax: 120,
  sources: [
    { title: 'Portal das Finanças — IMT', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Justiça.gov.pt — Request a land registry entry', url: 'https://justica.gov.pt/Servicos/Pedir-registo-predial', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'ePortugal — Buying a house', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/comprar-uma-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ADENE — Energy Certificate', url: 'https://www.adene.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
