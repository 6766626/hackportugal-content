export default {
  editorialVoice: 'hackportugal',
  id: 'certidao-domicilio-fiscal',
  categoryId: 'documents_fiscal',
  title: 'Certidão de domicílio fiscal — proof of tax address',
  tldr: 'Certidão de domicílio fiscal is an official certificate from the Autoridade Tributária confirming your tax address in Portugal. Needed for: applying for citizenship, opening an account with some banks, registering a car, renewing a residence permit in borderline cases. Do not confuse it: to prove tax residence under double taxation treaties, you need a separate Certidão de Residência Fiscal. Free, downloaded online via Portal das Finanças in 2 minutes.',
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
          'Registering a car with IMT — proof of the owner’s address',
          'Renewing a residence permit in disputed cases — AIMA requests it',
          'Do not confuse it: for foreign tax authorities and applying a DTT, you need a separate Certidão de Residência Fiscal, not a certidão de domicílio fiscal',
          'Filing a complaint with the Provedor de Justiça, a court, Finanças'
        ]}
      ]
    },
    {
      id: 'online',
      title: 'Get it online (the simplest route)',
      content: [
        { kind: 'substeps', items: [
          { id: 'o1', title: '1. Sign in to Portal das Finanças', content: [
            { kind: 'paragraph', text: 'portaldasfinancas.gov.pt → Iniciar sessão → NIF + password, or Chave Móvel Digital, or Cartão de Cidadão.' }
          ]},
          { id: 'o2', title: '2. Find the service', content: [
            { kind: 'paragraph', text: 'In the Portal das Finanças search, enter “certidão domicílio fiscal” or open Todos os Serviços → Certidões → Pedir certidão and choose the required type.' }
          ]},
          { id: 'o3', title: '3. Choose the type and year', content: [
            { kind: 'checklist', items: [
              'Certidão de Domicílio Fiscal — if you need the address registered with AT (bank, AIMA)',
              'Certidão de Residência Fiscal — if you need to confirm Portuguese tax residence for a specific year for a foreign tax authority/DTT',
              'For residência fiscal, an English version is often available; for domicílio fiscal, the Portuguese PDF with a verification code is usually sufficient'
            ]}
          ]},
          { id: 'o4', title: '4. Download the PDF', content: [
            { kind: 'paragraph', text: 'Issued instantly, with a QR code for authenticity checks. A PDF/printout with the verification code is usually accepted, but a bank or AIMA may request a different or more recent proof of address.' }
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
          'They usually issue or help print the certidão on the day; the format and timeframe depend on the serviço de finanças and the type of certificate'
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
          'IRN/AIMA: depends on the procedure; it is safer to submit a certificate no older than 3 months if the specific document list does not state another period',
          'If the address has changed — request a new one; the old one becomes invalid',
          'For certificado de residência fiscal — valid for the specific tax year'
        ]}
      ]
    },
    {
      id: 'issues',
      title: 'Common problems',
      content: [
        { kind: 'warning', text: 'If the address in Finanças is old and you have moved — change it first (see the guide “Changing tax address”). Otherwise, the certificate will confirm the old address.' },
        { kind: 'warning', text: 'For non-residents, the domicílio fiscal in AT is usually the foreign tax residence address, not the Portuguese one; therefore the certidão may not confirm the actual address in Portugal. If you need to prove an address in Portugal (for example, for a bank), you can use an atestado de residência from the Junta de Freguesia — but the Junta issues it only upon confirmation of actual residence; the list of evidence depends on the freguesia, and it is worth asking the bank in advance which proof of address it accepts.' }
      ]
    }
  ],
  costs: [
    { label: 'Certidão de domicílio fiscal (online)', amountEUR: 0 },
    { label: 'Certidão de residência fiscal (for double taxation treaties)', amountEUR: 0 }
  ],
  timelineDaysMin: 0,
  timelineDaysMax: 1,
  sources: [
    { title: 'Portal das Finanças — Certificates', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Certidão de residência fiscal', url: 'https://www.gov.pt/servicos/obter-certidao-de-residencia-fiscal', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
