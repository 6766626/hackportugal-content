export default {
  editorialVoice: 'hackportugal',
  id: 'buying-property',
  categoryId: 'housing_buy',
  title: 'Buying property in Portugal — step by step',
  tldr: 'Foreigners can buy property without restrictions. Path: NIF → search → CPCV + 10% sinal → financing/legal due diligence → escritura at a notary → registration. Taxes: IMT (1–10% progressive), IS 0.8%. Total costs 8–12% on top of the price. Important: from 7 October 2023 (Lei 56/2023) the Golden Visa via purchase of residential property was abolished — this residence permit route is no longer available for new applications. Important: from 7 October 2023 (Lei 56/2023) the Golden Visa via purchase of residential property was abolished — this residence permit route is no longer available for new applications.',
  tags: ['purchase', 'property', 'escritura', 'imt'],
  estimatedReadMinutes: 8,
  steps: [
    {
      id: 'preparation',
      title: 'Preparation',
      content: [
        { kind: 'checklist', items: [
          'Obtain NIF',
          'Open an account with a Portuguese bank (ActivoBank, Millennium, Caixa)',
          'Set your budget (price + ~10% costs)',
          'Decide: cash or mortgage (see separate guide)',
          'Choose a lawyer — recommended for non-residents, €500–2,000'
        ]}
      ]
    },
    {
      id: 'search',
      title: 'Search',
      content: [
        { kind: 'checklist', items: [
          'Idealista.pt — main aggregator',
          'Imovirtual.com',
          'Casa Sapo, Supercasa, ERA, Century 21',
          'OLX Imóveis — often directly from owners',
          'Estate agents — commission paid by the seller (usually 5%)'
        ]},
        { kind: 'warning', text: '2026 prices in Lisbon: €4,000–8,000/m² in the centre, €3,000–5,000/m² in the suburbs. Algarve: €2,500–6,000/m². North (Braga, Coimbra): €1,500–3,000/m².' }
      ]
    },
    {
      id: 'due-diligence',
      title: 'Legal due diligence (before signing)',
      content: [
        { kind: 'checklist', items: [
          'Certidão Permanente Imóvel — ownership status, encumbrances',
          'Caderneta Predial Urbana — tax registry card',
          'Licença de utilização — licence for residential use',
          'Ficha Técnica da Habitação — technical data sheet (for buildings after 2004)',
          'Certificado Energético (CE) — energy certificate (mandatory)',
          'No outstanding debts to the condomínio (owners’ association)',
          'No outstanding IMI debts'
        ]},
        { kind: 'paragraph', text: 'A lawyer checks all of this — about 1–2 weeks.' }
      ]
    },
    {
      id: 'cpcv',
      title: 'CPCV (Contrato Promessa de Compra e Venda)',
      content: [
        { kind: 'paragraph', text: 'Preliminary contract. Stronger than a simple offer. Binds both parties.' },
        { kind: 'checklist', items: [
          'Parties + NIF',
          'Property description + matricial number',
          'Price + method of payment',
          'Deposit (sinal) 10–20% — transferred to the seller',
          'Deadline until the escritura (usually 30–90 days)',
          'Penalties for termination: buyer backs out — loses the sinal; seller — returns the sinal ×2'
        ]}
      ]
    },
    {
      id: 'escritura',
      title: 'Escritura (notarial deed)',
      content: [
        { kind: 'substeps', items: [
          { id: 'e1', title: '1. Preparing documents at the notary', content: [
            { kind: 'paragraph', text: 'The notary gathers up-to-date extracts, verifies the parties, prepares the draft.' }
          ]},
          { id: 'e2', title: '2. Pay taxes BEFORE the escritura', content: [
            { kind: 'checklist', items: [
              'IMT — via Portal das Finanças (tax portal), confirmation for the escritura',
              'IS 0.8% — automatic',
              'For a mortgage — IS on the mortgage 0.6%'
            ]}
          ]},
          { id: 'e3', title: '3. Signing', content: [
            { kind: 'paragraph', text: 'At the notary. Both parties + an interpreter if needed. Payment to the seller by bank cheque/transfer. The bank releases the mortgage funds.' }
          ]},
          { id: 'e4', title: '4. Registration at the Conservatória do Registo Predial', content: [
            { kind: 'paragraph', text: 'Usually done electronically by the notary. Title passes upon registration.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'After the purchase',
      content: [
        { kind: 'checklist', items: [
          'Notify Finanças of change of address (if this is your primary residence)',
          'Put utilities in your name (EDP, Águas, gas)',
          'Home insurance is mandatory if you have a mortgage',
          'IMI (municipal tax) — paid annually in May/August, 0.3–0.8% of the rateable value',
          'If you plan to rent it out — register with Finanças + possibly an AL licence for short-term lets'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IMT for primary residence (up to €106,346)', amountEUR: 0, note: 'OE 2026 threshold (escalões raised by 2%); for non-primary residence — from 1%' },
    { label: 'IMT for primary residence (€106,346–€145,471)', amountEURMin: 0, amountEURMax: 2800, note: '2%' },
    { label: 'IMT (€145,471–€198,347)', amountEURMin: 2800, amountEURMax: 6900, note: '5%' },
    { label: 'IMT (€198,347–€330,539)', amountEURMin: 6900, amountEURMax: 18000, note: '7%' },
    { label: 'IMT (€330,539–€661,078)', amountEURMin: 18000, amountEURMax: 60000, note: '8%' },
    { label: 'IMT (€661,078+)', amountEURMin: 40000, amountEURMax: 100000, note: 'flat rate 6% or 7.5% > €1,150,853' },
    { label: 'Young buyers up to 35 years (primary residence ≤ €330,539)', amountEUR: 0, note: 'IMT+IS 0% under Decreto-Lei 44/2024; check the current text for conditions (residency, primary residence, no previous ownership, etc.)' },
    { label: 'IMT for buyers from tax havens', amountEUR: 0, note: 'flat rate 10% — regardless of price' },
    { label: 'IS (stamp duty)', amountEUR: 0, note: '0.8% of the price (for under-35s = 0%)' },
    { label: 'Escritura + notary', amountEURMin: 500, amountEURMax: 1500 },
    { label: 'Registration', amountEURMin: 250, amountEURMax: 400 },
    { label: 'Lawyer', amountEURMin: 500, amountEURMax: 2000 },
    { label: 'Home insurance annually', amountEURMin: 150, amountEURMax: 500 },
    { label: 'IMI annually', amountEURMin: 100, amountEURMax: 3000, note: '0.3–0.45% of the rateable value; the rate is set by the Câmara Municipal' }
  ],
  timelineDaysMin: 45,
  timelineDaysMax: 120,
  sources: [
    { title: 'Portal das Finanças — IMT', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Justiça.gov.pt — Request property registration', url: 'https://justica.gov.pt/Servicos/Pedir-registo-predial', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' },
    { title: 'ePortugal — Buy a house', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/comprar-uma-casa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ADENE — Energy Certificate', url: 'https://www.adene.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
