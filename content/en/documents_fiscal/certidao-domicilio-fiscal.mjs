export default {
  editorialVoice: 'hackportugal',
  id: 'certidao-domicilio-fiscal',
  categoryId: 'documents_fiscal',
  title: 'Certidão de domicílio fiscal — confirmation of tax address',
  tldr: 'Certidão de domicílio fiscal is an official certificate from Autoridade Tributária confirming your tax address in Portugal. Needed for: applying for citizenship, opening an account with some banks, registering a car, renewing a residence permit in borderline cases, confirming residence for the application of double taxation agreements. Free, downloaded online via Portal das Finanças in 2 minutes.',
  tags: ['certidão', 'address', 'finanças'],
  estimatedReadMinutes: 3,
  steps: [
    {
      id: 'what-for',
      title: 'What it is needed for',
      content: [
        { kind: 'checklist', items: [
          'Applying for Portuguese citizenship — IRN sometimes requests it',
          'Opening a bank account if there is no other proof of address',
          'Registering a car with IMT — confirmation of the owner’s address',
          'Renewing a residence permit in disputed cases — AIMA requests it',
          'Certificado de residência fiscal for foreign tax authorities — confirms that you are a tax resident of Portugal, for the application of double taxation agreements',
          'Submitting a complaint to Provedor de Justiça, a court, Finanças'
        ]}
      ]
    },
    {
      id: 'online',
      title: 'Get it online (the easiest route)',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Log in to Portal das Finanças', content: [
            { kind: 'paragraph', text: 'portaldasfinancas.gov.pt → Iniciar sessão → NIF + password, or Chave Móvel Digital, or Cartão de Cidadão.' }
          ]},
          { id: 'o2', title: '2. Menu "Cidadãos" → "Certidões"', content: [
            { kind: 'paragraph', text: 'Left-hand menu → "Serviços" → "Certidões" → "Certidão de Residência Fiscal" or "Certidão de Domicílio Fiscal" (depends on your status — resident or non-resident).' }
          ]},
          { id: 'o3', title: '3. Choose the type and year', content: [
            { kind: 'checklist', items: [
              'Domicílio Fiscal — a simple certificate of your current address (for banks, AIMA)',
              'Residência Fiscal — a certificate of tax residence for a specific year (for double taxation)',
              'Choose the language — Portuguese by default, with an English version available for international use'
            ]}
          ]},
          { id: 'o4', title: '4. Download the PDF', content: [
            { kind: 'paragraph', text: 'Issued instantly, with a QR code for authenticity checks. Banks and AIMA accept the electronic version printed on a printer.' }
          ]}
        ]}
      ]
    },
    {
      id: 'offline',
      title: 'Get it in person at Finanças (if you do not have online access)',
      content: [
        { kind: 'checklist', items: [
          'Book an in-person appointment via Portal das Finanças',
          'Documents: NIF + Cartão de Cidadão/residence permit + passport',
          'Ask the staff member for a "certidão de domicílio fiscal"',
          'They issue a printed version with a stamp — issued on the day of the appointment'
        ]}
      ]
    },
    {
      id: 'validity',
      title: 'Validity period',
      content: [
        { kind: 'checklist', items: [
          'There is no official validity period — the certificate reflects the address at the time of issue',
          'Banks often require a certificate "no older than 3 months"',
          'IRN / AIMA — accept it up to 6 months old',
          'If your address has changed — request a new one; the old one becomes invalid',
          'For certificado de residência fiscal — valid for the specific tax year'
        ]}
      ]
    },
    {
      id: 'issues',
      title: 'Common issues',
      content: [
        { kind: 'warning', text: 'If the address in Finanças is old and you have moved — change it first (see the guide “Changing your tax address”). Otherwise, the certificate will confirm the old address.' },
        { kind: 'warning', text: 'For non-residents (those who are not tax residents of Portugal), Portal das Finanças shows only the address in the country of origin. If you need to confirm an address in Portugal for non-bureaucratic purposes (bank) — use an Atestado de Residência from Junta de Freguesia instead of a tax certificate.' }
      ]
    }
  ],
  costs: [
    { label: 'Certidão de domicílio fiscal (online)', amountEUR: 0 },
    { label: 'Certidão de residência fiscal (for double taxation agreements)', amountEUR: 0 }
  ],
  timelineDaysMin: 0,
  timelineDaysMax: 1,
  sources: [
    { title: 'Portal das Finanças — Certidões', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Certidão de residência fiscal', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/obter-certidao-de-residencia-fiscal', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
