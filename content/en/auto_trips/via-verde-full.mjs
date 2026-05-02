export default {
  editorialVoice: 'hackportugal',
  id: 'via-verde-full',
  categoryId: 'auto_trips',
  title: 'Via Verde (electronic toll payment system) — full guide to paying tolls in Portugal',
  tldr: 'Via Verde is electronic toll payment via a transponder (identificador). Subscription from €5 for activation + €1.75/month. Alternative — post-payment via portagens.ctt.pt or CTT/Payshop terminals: for Portuguese number plates, payment usually becomes available **after ~48 hours** following passage and remains valid for **15 working days**. Late payment → the debt moves to administrative collection: a fixed fine for an administrative offence (range according to the table, not “25× the toll cost”), plus % for non-payment. IMPORTANT: from 01.01.2025 tolls have been abolished on the A22, A23, A24, A25, parts of the A28, A4, A13. “Automatic DUA blocking” is NOT a standard consequence.',
  tags: ['via verde', 'tolls', 'roads', 'car', 'motorways'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'what-is',
      title: 'What Via Verde is',
      content: [
        { kind: 'paragraph', text: 'Via Verde Portugal is a Brisa / Ascendi / IP (Infraestruturas de Portugal) concession. It is the leading electronic toll payment system: a small device (identificador) on the windscreen, which automatically charges the toll when passing under a gantry without stopping.' },
        { kind: 'checklist', items: [
          'Covers ALL toll motorways and bridges in Portugal',
          'Also works in car parks at many airports and shopping centres',
          'Works in Spain (Bip&Drive) and France (TIS) with the same device',
          'Separate tariff for motorcycles',
          'Vehicle classes 1–4 by dimensions'
        ]}
      ]
    },
    {
      id: 'how-to-get',
      title: 'How to get an identificador',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: 'A. Resident of Portugal', content: [
            { kind: 'checklist', items: [
              'Online at `viaverde.pt` or via the “Via Verde” app',
              'You need: NIF, ID (Cartão de Cidadão/residence permit), vehicle details (matrícula, modelo), IBAN or card',
              'Delivery of the identificador — 3–5 working days via CTT',
              'The “Via Verde Digital” version is available — a virtual transponder in the app without a device (works in Portugal through number plate recognition)'
            ]}
          ]},
          { id: 'g2', title: 'B. Non-resident / tourist (Via Verde Visitors)', content: [
            { kind: 'paragraph', text: 'A special tariff for tourists. You can get it at Lisboa/Porto/Faro airports or CTT terminals. It is linked to a bank card. Payment is based on actual journeys, with no subscription.' }
          ]},
          { id: 'g3', title: 'C. Through partner banks', content: [
            { kind: 'paragraph', text: 'Millennium, Santander, Novo Banco — allow you to order Via Verde directly in the bank app with direct debit.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tariffs',
      title: 'Tariffs and subscriptions',
      content: [
        { kind: 'checklist', items: [
          '💶 identificador activation: ~€5–10 one-off (with deposit refunded on cancellation)',
          '💶 Subscription fee: ~€1.75/month per device',
          '💶 Toll — fixed by section (for example, Lisboa → Porto via the A1 ~€22)',
          '💶 Via Verde Visitors: no subscription fee, only a % surcharge',
          '🏷️ Discounts for electric vehicles on some motorways',
          '🏷️ “Dispositivos múltiplos” — discount when several cars are on one account'
        ]},
        { kind: 'warning', text: 'Tariffs are updated annually on 1 January. The current price list is only on `viaverde.pt`.' }
      ]
    },
    {
      id: 'no-via-verde',
      title: 'If you do not have Via Verde — how to pay',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: 'A. Electronic motorways (former SCUT). From 01.01.2025 tolls have been abolished on several motorways — A22 Algarve, A23, A24, A25, parts of A28, A4, A13', content: [
            { kind: 'paragraph', text: 'There is no toll booth — only gantries with cameras. They read the number plate and issue a bill.' },
            { kind: 'checklist', items: [
              'Payment at CTT / Payshop terminals within 48 hours after passing',
              'Online at `portagens.ctt.pt`',
              'Prepayment at petrol stations — link a card in advance',
              'If payment is not made within the set period (usually 15 working days from the moment the debt appears in the system), the debt moves to administrative collection: a fine for an administrative offence is applied (fixed range under the law), plus % for non-payment'
            ]}
          ]},
          { id: 'n2', title: 'B. Classic motorways (A1, A2, A5 — with toll booths)', content: [
            { kind: 'paragraph', text: 'You can pay in cash or by card at the booth. Drive in the lane marked “Outras Vias”. Do not confuse it with “Via Verde” (green lane) — that is ONLY for vehicles with the device, otherwise there is a fine.' }
          ]},
          { id: 'n3', title: 'C. Rental car', content: [
            { kind: 'paragraph', text: 'All major rental companies (Europcar, Avis, Sixt, Goldcar, Drivalia) offer Via Verde rental. The average price is €3–5/day + the toll amounts. You cannot opt out on former SCUT roads — otherwise the rental company will charge you the fines.' }
          ]}
        ]}
      ]
    },
    {
      id: 'app-features',
      title: 'Via Verde app — what else it can do',
      content: [
        { kind: 'checklist', items: [
          '⛽ Pay for fuel without going to the till (partners Galp, BP, Repsol)',
          '🅿️ Pay for parking (EMEL Lisboa, SABA, Estrela do Norte)',
          '🚇 Pay for public transport in some cities (pilot mode)',
          '📊 Journey history and statements for tax purposes (Anexo H for IRS)',
          '📱 Real-time notifications about fines and charges',
          '🧾 Electronic fatura with NIF — deduction in IRS as an expense in the despesas gerais familiares category'
        ]}
      ]
    },
    {
      id: 'disputes',
      title: 'Disputed charges',
      content: [
        { kind: 'checklist', items: [
          'Incorrect vehicle class → reclamação form on `viaverde.pt` + photo of the vehicle registration certificate',
          'Double charge → usually automatic adjustment within 5 days',
          'Fine despite a functioning identificador → appeal through AT Ascendi / Brisa',
          'Non-working gantry → an emulated photo is taken on the black gantry, dispute via `portagens.ctt.pt`'
        ]},
        { kind: 'warning', text: 'Non-payment and an overdue fine lead to blocking of the DUA (vehicle registration certificate). You will not pass the roadworthiness test (IPO).' }
      ]
    }
  ],
  costs: [
    { label: 'Device activation', amountEURMin: 5, amountEURMax: 10, note: 'often refundable' },
    { label: 'Subscription fee', amountEUR: 1.75, note: '€/month' },
    { label: 'Fine for non-payment of a toll', amountEURMin: 25, amountEURMax: 250, note: 'fixed range for an administrative offence; depends on the toll and circumstances — exact amounts are in the IP/AT notice' },
    { label: 'Lisboa → Porto via A1', amountEUR: 22 }
  ],
  sources: [
    { title: 'Via Verde — operator website', url: 'https://www.viaverde.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portagens CTT — post-payment for electronic motorways', url: 'https://portagens.ctt.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Infraestruturas de Portugal — tolls and concessions', url: 'https://www.infraestruturasdeportugal.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IMT — Regulamento de Portagens', url: 'https://www.imt-ip.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
