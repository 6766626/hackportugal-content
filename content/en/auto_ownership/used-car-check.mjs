export default {
  editorialVoice: 'hackportugal',
  id: 'used-car-check',
  categoryId: 'auto_ownership',
  title: 'Used car checks before buying in Portugal',
  tldr: 'Five checks before buying a used car: (1) **Registo Automóvel** via IRN/Conservatória/Automóvel Online (NOT IMT — the ownership and encumbrance register is kept by IRN; via automovelonline.mj.pt you get a certidão with entries on the owner, reserva de propriedade, penhoras, hipotecas), (2) Finanças — IUC with no debts, (3) a recent IPO, (4) Carvertical as a Carfax analogue for history, (5) an inspection at an independent workshop. For about ~€50 you can avoid buying a car with debts or hidden defects.',
  tags: ['used car', 'check', 'purchase', 'dua'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'check-registo',
      title: '1. Registo Automóvel — official ownership register (IRN)',
      content: [
        { kind: 'paragraph', text: 'The vehicle ownership and encumbrances register is maintained by **IRN (Instituto dos Registos e do Notariado)** via the Conservatória do Registo Automóvel and the online service **Automóvel Online** (automovelonline.mj.pt). NOT IMT — IMT handles the technical side (matrícula, IPO, driving licences) but not the ownership register.' },
        { kind: 'checklist', items: [
          '💻 automovelonline.mj.pt → request a **certidão permanente do registo automóvel** (requires Chave Móvel Digital (CMD) or Cartão de Cidadão (CC) + reader)',
          '🔍 Enter the matrícula (registration number)',
          '📋 The certidão will show: current owner, registration date, registry encumbrances (reserva de propriedade, penhoras, hipotecas, locação financeira)',
          '🔒 “Penhora” (seizure) — red flag, do not buy',
          '💰 “Reserva de propriedade” — means the car is on credit; only buy after the reserva is closed',
          '🏦 “Hipoteca” — bank mortgage/charge',
          '🚗 “Locação financeira” — leasing',
          '💶 Cost: the certidão permanente is usually around €25 for 6 months of online access (check current tariff at irn.justica.gov.pt / automovelonline.mj.pt)'
        ]}
      ]
    },
    {
      id: 'check-finances',
      title: '2. Finanças — IUC and debts',
      content: [
        { kind: 'paragraph', text: 'The seller must show a Declaração sem dívidas for IUC and IMT for the last 3 years. Request it in Portal das Finanças → “Certidões” → “Certidão de Não Dívida (certificate of no debt)”.' },
        { kind: 'checklist', items: [
          'If IUC has not been paid, the debt passes to you',
          'Demand a comprovativo (proof) for the last 3 years',
          'Also check fines — via CGA / Finanças'
        ]}
      ]
    },
    {
      id: 'check-ipo',
      title: '3. IPO (inspection) and DUA',
      content: [
        { kind: 'checklist', items: [
          '🧾 DUA (Documento Único Automóvel) — the main document',
          '🔎 VIN on the vehicle matches the DUA',
          '📅 The last IPO is no more than a year old (recent is a good sign)',
          '📋 IPO report without “deficiências graves”',
          '🛣️ Mileage is genuine — check by comparing IPO reports from different years',
          '⚠️ If IPO has not been done for a long time — buy on the condition “IPO first”'
        ]}
      ]
    },
    {
      id: 'history-check',
      title: '4. History and Carvertical',
      content: [
        { kind: 'paragraph', text: 'Carvertical (carvertical.com), CarfaxPT, Autobiz — paid VIN history services. They show accidents, mileage, owners across all EU countries.' },
        { kind: 'checklist', items: [
          '💶 €15–€30 per report',
          '🔍 Mileage by date (rollbacks visible)',
          '💥 Accidents and insurance claims',
          '🌍 Previous countries of registration',
          '🔧 Repairs in large networks (Bosch, Norauto)',
          '🚨 “Salvage” / “Total loss” — red flag'
        ]}
      ]
    },
    {
      id: 'oficina-check',
      title: '5. Inspection at a workshop',
      content: [
        { kind: 'checklist', items: [
          '🔧 Take it for diagnostics: €40–€80 at an independent workshop',
          '📋 Full check: engine, transmission, suspension, brakes, body rust',
          '💻 OBD diagnostics — ECU error codes',
          '🛞 Tyres, tread pattern, manufacturing date',
          '🪟 Body for repainting, filler (measure with a paint thickness gauge)',
          '❄️ Air conditioning works in summer / winter',
          '🧰 All buttons / electrics work',
          '🗒️ Ask for a written report — useful for negotiation'
        ]}
      ]
    },
    {
      id: 'purchase',
      title: 'Completing the purchase',
      content: [
        { kind: 'checklist', items: [
          '📝 Contrato de compra e venda — 2 copies with all parties’ details',
          '🆔 Both parties: CC/residence permit, NIF, IBAN',
          '📋 Handover of DUA + keys + spares',
          '💶 Payment — bank transfer with the reference “compra viatura matrícula X”',
          '🏢 Registo de propriedade at IRN (irn.justica.gov.pt) — €45 + processing',
          '📅 Deadline to register the change — 60 days from signing',
          '🛡️ Insurance in your name from the day of handover',
          '🧾 IUC is no longer recalculated — the current year remains with the seller, the next with you'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Certidão Permanente Registo Automóvel (IRN/Automóvel Online)', amountEURMin: 15, amountEURMax: 25, note: 'rates may vary, check at irn.justica.gov.pt' },
    { label: 'Carvertical report', amountEURMin: 15, amountEURMax: 30 },
    { label: 'Diagnostics at a workshop', amountEURMin: 40, amountEURMax: 80 },
    { label: 'Registo de propriedade to the new owner (IRN)', amountEURMin: 45, amountEURMax: 65 },
    { label: 'TOTAL pre-purchase checks', amountEURMin: 60, amountEURMax: 130 }
  ],
  sources: [
    { title: 'Automóvel Online — IRN/Conservatória', url: 'https://automovelonline.mj.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IRN — Registo Automóvel', url: 'https://justica.gov.pt/Servicos/Registar-automovel', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — Certidões', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IMT — IPO (technical inspection)', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}
