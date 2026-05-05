export default {
  editorialVoice: 'hackportugal',
  id: 'certidao-domicilio-fiscal',
  categoryId: 'documents_fiscal',
  title: 'Certidão de domicílio fiscal — confirmation of your tax address',
  tldr: 'Certidão de domicílio fiscal is an official certificate from the Autoridade Tributária confirming your tax address in Portugal. Needed for: applying for citizenship, opening an account with some banks, vehicle registration, extending a residence permit in borderline cases, confirming tax residency to apply double taxation agreements. Free, downloadable online via the Portal das Finanças in 2 minutes.',
  tags: ['certificate', 'address', 'finanças'],
  estimatedReadMinutes: 3,
  steps: [
    {
      id: 'what-for',
      title: 'What it is used for',
      content: [
        { kind: 'checklist', items: [
          'Applying for Portuguese citizenship — IRN sometimes requests it',
          'Opening a bank account if you do not have other proof of address',
          'Vehicle registration at IMT — proof of the owner’s address',
          'Extending a residence permit in borderline cases — AIMA may request it',
          'Certificado de residência fiscal for foreign tax authorities — confirms that you are a Portuguese tax resident, for applying double taxation agreements',
          'Filing a complaint with the Provedor de Justiça, court, or Finanças'
        ]}
      ]
    },
    {
      id: 'online',
      title: 'Get it online (the simplest route)',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Sign in to the Portal das Finanças', content: [
            { kind: 'paragraph', text: 'portaldasfinancas.gov.pt → Iniciar sessão → NIF + password, or Chave Móvel Digital, or Cartão de Cidadão.' }
          ]},
          { id: 'o2', title: '2. "Cidadãos" → "Certidões" menu', content: [
            { kind: 'paragraph', text: 'Left menu → "Serviços" → "Certidões" → "Certidão de Residência Fiscal" or "Certidão de Domicílio Fiscal" (depends on your status — resident or non-resident).' }
          ]},
          { id: 'o3', title: '3. Choose type and year', content: [
            { kind: 'checklist', items: [
              'Domicílio Fiscal — a simple statement of your current address (for banks, AIMA)',
              'Residência Fiscal — a statement of tax residency for a specific year (for double taxation)',
              'Select language — Portuguese by default; an English version exists for international use'
            ]}
          ]},
          { id: 'o4', title: '4. Download the PDF', content: [
            { kind: 'paragraph', text: 'Issued instantly, with a QR code for authenticity verification. Banks and AIMA accept the electronic version printed out at home.' }
          ]}
        ]}
      ]
    },
    {
      id: 'offline',
      title: 'Get it in person at Finanças (if you do not have online access)',
      content: [
        { kind: 'checklist', items: [
          'Book an in-person appointment via the Portal das Finanças',
          'Documents: NIF + Cartão de Cidadão/residence permit + passport',
          'Ask the staff member for a "certidão de domicílio fiscal"',
          'They issue a printed version with a stamp — same-day issuance'
        ]}
      ]
    },
    {
      id: 'validity',
      title: 'Validity',
      content: [
        { kind: 'checklist', items: [
          'There is no official validity period — the certificate reflects the address at the time of issue',
          'Banks often require a certificate "not older than 3 months"',
          'IRN / AIMA — accept up to 6 months',
          'If the address has changed — request a new one; the old one becomes invalid',
          'For certificado de residência fiscal — valid for the specific tax year'
        ]}
      ]
    },
    {
      id: 'issues',
      title: 'Common issues',
      content: [
        { kind: 'warning', text: 'If the address in Finanças is outdated and you have moved — update it first (see the guide "Changing your tax address"). Otherwise the certificate will confirm the old address.' },
        { kind: 'warning', text: 'For non-residents (not tax residents of Portugal) the Portal das Finanças shows only the address in the country of origin. If you need to confirm an address in Portugal for non-bureaucratic purposes (a bank) — instead of the tax certificate use an Atestado de Residência from the Junta de Freguesia.' }
      ]
    }
  ],
  costs: [
    { label: 'Tax domicile certificate (online)', amountEUR: 0 },
    { label: 'Tax residence certificate (for double taxation agreements)', amountEUR: 0 }
  ],
  timelineDaysMin: 0,
  timelineDaysMax: 1,
  sources: [
    { title: 'Portal das Finanças — Certificates', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Tax residence certificate', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/obter-certidao-de-residencia-fiscal', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}
