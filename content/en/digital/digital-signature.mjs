export default {
  editorialVoice: 'hackportugal',
  id: 'digital-signature',
  categoryId: 'digital_gov',
  title: 'Qualified electronic signature — Chave Móvel Digital (state electronic signature) and Cartão de Cidadão',
  tldr: 'Portugal has a qualified electronic signature — Assinatura Digital Qualificada (QES): an electronic signature with the same legal force as a handwritten signature. Two official tools: Chave Móvel Digital (mobile signature) and Cartão de Cidadão (Portuguese citizen card) + USB reader/NFC. With QES, you can sign tenancy agreements, notarial documents, and submit documents to AIMA/Finanças/IRN without paper.',
  tags: ['electronic signature', 'signature', 'cmd', 'Cartão de Cidadão'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-framework',
      title: 'Legal framework',
      content: [
        { kind: 'paragraph', text: 'Electronic signatures in the EU are regulated by eIDAS (Regulation (EU) 910/2014). In Portugal, Decreto-Lei (decree-law) 12/2021 adapts eIDAS into national legislation.' },
        { kind: 'checklist', items: [
          'Three signature levels under eIDAS:',
          '  • Simple (SES) — email, SMS code, etc. Basic evidential value',
          '  • Advanced (AES) — cryptographically unique, linked to the signatory',
          '  • Qualified (QES) — AES + QTSP certificate + QSCD device. Legally equivalent to a handwritten signature across the EU',
          '🇵🇹 Portugal provides QES through two official tools: CMD and the digital Cartão de Cidadão'
        ]}
      ]
    },
    {
      id: 'cmd-signature',
      title: 'Signing via Chave Móvel Digital (CMD)',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Activating the signature function', content: [
            { kind: 'paragraph', text: 'If CMD is activated, the signature function is enabled separately. On autenticacao.gov.pt → “Ativar Assinatura Digital” → confirm with PIN and SMS. Free of charge.' }
          ]},
          { id: 'c2', title: '2. Signing a document', content: [
            { kind: 'checklist', items: [
              'Open the document on the Autenticação.gov digital signature portal',
              'Upload the PDF',
              'Enter the CMD PIN',
              'Confirm with an SMS code or push notification via the Autenticação app',
              'Download the signed PDF — with a cryptographic certificate'
            ]}
          ]},
          { id: 'c3', title: '3. Checking the signature', content: [
            { kind: 'paragraph', text: 'Anyone can check the signature at autenticacao.gov.pt/validacao-de-assinaturas — it shows the signatory’s name, the time and the status.' }
          ]}
        ]}
      ]
    },
    {
      id: 'cc-signature',
      title: 'Signing via Cartão de Cidadão',
      content: [
        { kind: 'paragraph', text: 'For Portuguese citizens with Cartão de Cidadão (this option is not available to non-residents — they have a residence permit without a signature chip). A USB reader or a phone with NFC is required.' },
        { kind: 'substeps', items: [
          { id: 'cc1', title: '1. Activating the signature function', content: [
            { kind: 'paragraph', text: 'When Cartão de Cidadão is first issued, the signature function is often disabled. Activation is done at any Espaço Cidadão or online via Autenticação.gov with a USB reader.' }
          ]},
          { id: 'cc2', title: '2. Installing the software', content: [
            { kind: 'paragraph', text: 'Download the “Autenticação.gov” desktop app (macOS/Windows/Linux) — Portugal’s official government software.' }
          ]},
          { id: 'cc3', title: '3. Signing', content: [
            { kind: 'paragraph', text: 'Insert the Cartão de Cidadão into the reader → open the PDF in the Autenticação.gov app → sign → enter the Cartão de Cidadão PIN → done.' }
          ]},
          { id: 'cc4', title: '4. PIN codes', content: [
            { kind: 'checklist', items: [
              'PIN Autenticação (login to government portals) — 4 digits',
              'PIN Assinatura (signature) — 4 digits, separate',
              'PUK (unblocking) — 8 digits, in the Cartão de Cidadão envelope',
              'Forgotten PIN → up to 3 attempts → blocked → unblock on ePortugal.gov.pt with the PUK'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'use-cases',
      title: 'Where it can be used',
      content: [
        { kind: 'checklist', items: [
          '📄 Contrato de arrendamento (residential tenancy agreement) — without attending a notary',
          '💼 Employment contracts',
          '📋 IRS return and other tax returns',
          '🏛️ Requests to AIMA through the online portal',
          '⚖️ Court decisions and procedural documents',
          '🏢 Company transactions (Empresa na Hora)',
          '🏥 Access to SNS 24 medical records',
          '🎓 University applications, diplomas',
          '📜 Power of attorney (procuração) with a digital signature',
          '💰 Banking transactions (some banks accept QES instead of in-person attendance)'
        ]}
      ]
    },
    {
      id: 'cross-border',
      title: 'Cross-border recognition (EU and non-EU)',
      content: [
        { kind: 'paragraph', text: 'Under eIDAS, a signature from one EU country is recognised in all the others. A CMD signature from Portugal has full legal force in Germany, Spain, France, Italy, and others.' },
        { kind: 'paragraph', text: 'Verification: a signed PDF can be validated on any EU portal (the European Commission’s DSS Validator — dss.nowina.lu).' },
        { kind: 'warning', text: 'Outside the EU (Russian Federation, USA, China), recognition depends on local laws and agreements. In the Russian Federation, an eIDAS signature is not recognised automatically — for documents intended for the Russian Federation, a separate Russian qualified electronic signature is required.' }
      ]
    },
    {
      id: 'alternatives',
      title: 'Commercial QTSPs',
      content: [
        { kind: 'paragraph', text: 'In addition to the state CMD and Cartão de Cidadão, commercial qualified trust service providers (QTSPs) operate in Portugal. Most people do not need them — CMD covers 99% of cases.' },
        { kind: 'checklist', items: [
          'DigitalSign (Portugal) — the largest commercial QTSP',
          'Multicert — corporate solutions',
          'Bundesdruckerei / D-Trust (Germany) — usable in Portugal',
          'List of all QTSPs in the EU — EU Trust List (eidas.ec.europa.eu/efda/browse)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Autenticação.gov — electronic identification centre', url: 'https://www.autenticacao.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Regulation (EU) 910/2014 — eIDAS', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32014R0910', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 12/2021 (eIDAS adaptation in Portugal)', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/12-2021', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AMA — Agência para a Modernização Administrativa', url: 'https://www.ama.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
