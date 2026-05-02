export default {
  editorialVoice: 'hackportugal',
  id: 'buying-property',
  categoryId: 'housing_buy',
  title: 'Buying property in Portugal — step by step',
  tldr: 'Foreigners can buy property without restrictions. Route: NIF → search → CPCV + sinal 10% → financing/legal checks → escritura at the notary → registration. Taxes: IMT (1-10% progressive), IS 0.8%. Total costs are 8-12% on top of the price.',
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
          'Decide: cash or mortgage (see the separate guide)',
          'Choose a lawyer — recommended for non-residents, €500-2000'
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
        { kind: 'warning', text: '2026 prices in Lisboa: €4000-8000/m² centre, €3000-5000/m² suburbs. Algarve: €2500-6000/m². North (Braga, Coimbra): €1500-3000/m².' }
      ]
    },
    {
      id: 'due-diligence',
      title: 'Legal due diligence (before signing)',
      content: [
        { kind: 'checklist', items: [
          'Certidão Permanente Imóvel — ownership status, encumbrances',
          'Caderneta Predial Urbana — tax record',
          'Licença de utilização — residential use licence',
          'Ficha Técnica da Habitação — technical housing file (for buildings built after 2004)',
          'Certificado Energético (CE) — energy certificate (mandatory)',
          'No debts to the condomínio (owners’ association)',
          'No outstanding IMI debts'
        ]},
        { kind: 'paragraph', text: 'Your lawyer checks all of this — around 1-2 weeks.' }
      ]
    },
    {
      id: 'cpcv',
      title: 'CPCV (Contrato Promessa de Compra e Venda)',
      content: [
        { kind: 'paragraph', text: 'Preliminary contract. Stronger than a simple offer. It binds both parties.' },
        { kind: 'checklist', items: [
          'Parties + NIF',
          'Property description + matrix number',
          'Price + payment method',
          'Deposit (sinal) 10-20% — paid to the seller',
          'Deadline until escritura (usually 30-90 days)',
          'Penalties for termination: if the buyer pulls out — they lose the sinal; if the seller pulls out — they return sinal × 2'
        ]}
      ]
    },
    {
      id: 'escritura',
      title: 'Escritura (notarial deed)',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: '1. Document preparation at the notary', content: [
            { kind: 'paragraph', text: 'The notary collects up-to-date extracts, checks the parties, and prepares the draft.' }
          ]},
          { id: 'e2', title: '2. Paying taxes BEFORE escritura', content: [
            { kind: 'checklist', items: [
              'IMT — via Portal das Finanças (tax portal), proof for the escritura',
              'IS 0.8% — automatically',
              'With a mortgage — IS on the mortgage 0.6%'
            ]}
          ]},
          { id: 'e3', title: '3. Signing', content: [
            { kind: 'paragraph', text: 'At the notary. Both parties + interpreter if needed. Payment to the seller by bank cheque / transfer. The bank releases the mortgage funds.' }
          ]},
          { id: 'e4', title: '4. Registration at the Conservatória do Registo Predial', content: [
            { kind: 'paragraph', text: 'Usually done electronically by the notary. Ownership transfers upon registration.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'After purchase',
      content: [
        { kind: 'checklist', items: [
          'Notify Finanças of your change of address (if this is your main home)',
          'Transfer utilities into your name (EDP, Águas, gas)',
          'Home insurance is mandatory if you have a mortgage',
          'IMI (municipal tax) — paid annually in May/August, 0.3-0.8% of the taxable value',
          'If you plan to rent it out — registration with Finanças + possibly an AL licence for short-term rental'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IMT for a main home (up to €104,261)', amountEUR: 0, note: 'OE 2026 threshold; for non-permanent housing — from 1%' },
    { label: 'IMT for a main home (€104,261 – €142,618)', amountEURMin: 0, amountEURMax: 2800, note: '2%' },
    { label: 'IMT (€142,618 – €194,458)', amountEURMin: 2800, amountEURMax: 6900, note: '5%' },
    { label: 'IMT (€194,458 – €324,058)', amountEURMin: 6900, amountEURMax: 18000, note: '7%' },
    { label: 'IMT (€324,058 – €648,022)', amountEURMin: 18000, amountEURMax: 60000, note: '8%' },
    { label: 'IMT (€648,022+)', amountEURMin: 40000, amountEURMax: 100000, note: 'flat rate 6% or 7.5% > €1,128,287' },
    { label: 'Young buyers under 35 (main home ≤ €324,058)', amountEUR: 0, note: 'IMT+IS 0% under Decreto-Lei 48-A/2024; check the conditions (residency, main home, no previous ownership, etc.) in the current text' },
    { label: 'IMT for buyers from tax havens', amountEUR: 0, note: 'flat rate 10% — regardless of value' },
    { label: 'IS (stamp duty)', amountEUR: 0, note: '0.8% of the value (for young buyers under 35 = 0%)' },
    { label: 'Escritura + notary', amountEURMin: 500, amountEURMax: 1500 },
    { label: 'Registration', amountEURMin: 250, amountEURMax: 400 },
    { label: 'Lawyer', amountEURMin: 500, amountEURMax: 2000 },
    { label: 'Home insurance annually', amountEURMin: 150, amountEURMax: 500 },
    { label: 'IMI annually', amountEURMin: 100, amountEURMax: 3000, note: '0.3-0.45% of the taxable value, the rate is set by the Câmara Municipal' }
  ],
  timelineDaysMin: 45,
  timelineDaysMax: 120,
  sources: [
    { title: 'Portal das Finanças — IMT', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Registo Predial', url: 'https://irn.justica.gov.pt/registos/predial', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Buying a house', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/comprar-uma-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ADENE — Certificado Energético', url: 'https://www.adene.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
