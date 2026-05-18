export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-de-cidadao',
  categoryId: 'documents_fiscal',
  title: 'Cartão de Cidadão — Portuguese citizen identity card (for foreigners — Título de Residência)',
  tldr: 'Cartão de Cidadão (CC) is the national identity card for Portuguese citizens; it is accepted as a travel document in the EU/EEA/Switzerland and in a number of countries. It links civil, tax (NIF), social security (NISS) and SNS (utente) identifiers, if they have been assigned. Foreign residents usually receive a Título de Residência (residence permit card) — this confirms the right of residence, but is not a full equivalent of the CC: no voting rights, no CC eID/digital signature. Replacement/renewal is done at IRN or Loja de Cidadão.',
  tags: ['cc', 'documents', 'cartão de cidadão'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'for-whom',
      title: 'Who gets a CC',
      content: [
        { kind: 'checklist', items: [
          'Portuguese citizens (mandatory from the 20th day after birth registration)',
          'Newborn PT citizens: the CC can be requested immediately via the Nascer Cidadão service when registering the birth',
          'Foreign residents usually do not receive a CC — their main document is the Título de Residência (right of residence), which is not a full equivalent of the CC',
          'Separate exceptions: citizens of Brazil with equal rights status (Estatuto de Igualdade) may obtain a CC'
        ]},
        { kind: 'warning', text: 'If you have naturalised → after registration with the Registo Civil, you can request a CC. The process is described below.' }
      ]
    },
    {
      id: 'functions',
      title: 'CC functions',
      content: [
        { kind: 'checklist', items: [
          'Identity document for a PT citizen; accepted as a travel document for trips within the EU/EEA/Switzerland and a number of countries. Outside these regimes — a passport is required',
          'Contains/links the NIF (tax number), if assigned',
          'Contains/links the NISS (social security number), if assigned',
          'Contains/links the Número de Utente (SNS patient number), if assigned',
          'Biometric: photo; fingerprints — from the legally established age (from age 12 under Regulamento UE 2019/1157)',
          'Chip for digital signature (requires a USB reader or phone with NFC) when certificates are active',
          'PIN for activation',
          'Voting in elections (for Portuguese citizens)',
          'Identification in co-operatives, libraries, schools'
        ]}
      ]
    },
    {
      id: 'first-time',
      title: 'First application',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'For newborns', content: [
            { kind: 'paragraph', text: 'The CC can be requested separately when registering the birth, often immediately via Nascer Cidadão / Conservatória. For a PT citizen, the document is mandatory from the 20th day after birth registration. The validity of a CC up to age 25 is 5 years.' }
          ]},
          { id: 'f2', title: 'For naturalised citizens', content: [
            { kind: 'paragraph', text: 'After completing the citizenship process and registration with the Registo Civil, the first CC can be requested at IRN/Loja de Cidadão/consulate. Production time depends on the order type: normal, urgente, extremamente urgente — and the collection location.' }
          ]}
        ]}
      ]
    },
    {
      id: 'renew',
      title: 'Renewal / replacement',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: 'When to renew', content: [
            { kind: 'paragraph', text: 'Validity: 5 years for citizens under 25; 10 years for citizens aged 25 and over. 6 months before expiry — book a renewal appointment.' }
          ]},
          { id: 'r2', title: 'How', content: [
            { kind: 'paragraph', text: 'Book via ePortugal/IRN, choose an available balcão IRN/Loja de Cidadão/Espaço Cidadão (if the specific service is available there). For a standard renewal, you usually need the current CC and PIN letter; proof of address is needed if you change address or if the authority requests it.\n\nProduction time depends on the order type (normal/urgente/extremamente urgente) and the place of issue.' }
          ]},
          { id: 'r3', title: 'Loss / theft', content: [
            { kind: 'paragraph', text: 'Urgently cancel (cancelar) the CC and digital certificates via ePortugal/Autenticação.gov or Linha Cartão de Cidadão. In case of theft — file a report with the police (PSP/GNR).\n\nThen request a new CC at IRN/Loja de Cidadão/consulate under the applicable tariff (normal/urgente/extremamente urgente).\n\nA police report is not mandatory for simple loss, but is important in case of theft.' }
          ]}
        ]}
      ]
    },
    {
      id: 'digital',
      title: 'The digital side of the CC',
      content: [
        { kind: 'paragraph', text: 'The CC can be used for autenticação.gov and to log in to many public services when certificates are active and you have the PIN, a reader or a compatible phone with NFC. For some services, alternatives may be available/required (CMD, own login).' },
        { kind: 'paragraph', text: 'Foreigners usually use Chave Móvel Digital (CMD): activation requires a NIF and a valid document/resident card; the available activation methods depend on the situation. CMD covers most e-government logins, but is not a physical identity document.' }
      ]
    }
  ],
  costs: [
    { label: 'Citizens under 25 (normal, in Portugal)', amountEUR: 15 },
    { label: 'Citizens aged 25 and over (normal, in Portugal)', amountEUR: 18, note: 'IRN 2026' },
    { label: 'Urgente (from 3 working days, in Portugal)', amountEUR: 33 },
    { label: 'Extremamente urgente (depends on the place and time of submission)', amountEUR: 53 },
    { label: 'Online discount for online renewal', amountEUR: 0, note: 'usually −10%' },
    { label: 'Replacement after loss/theft', amountEUR: 0, note: 'tariff = new normal/urgente request according to age, not a fixed flat fee' }
  ],
  sources: [
    { title: 'ePortugal — Cartão de Cidadão (request/renew/cancel)', url: 'https://eportugal.gov.pt/servicos/pedir-o-cartao-de-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRN — Cartão de Cidadão (service)', url: 'https://irn.justica.gov.pt/Servicos/Cartao-de-Cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Autenticação.gov — Cartão de Cidadão', url: 'https://www.autenticacao.gov.pt/o-cartao-de-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Regulation (EU) 2019/1157 — eID biometrics', url: 'https://eur-lex.europa.eu/eli/reg/2019/1157/oj', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
