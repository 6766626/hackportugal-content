export default {
  editorialVoice: 'hackportugal',
  id: 'change-tax-address',
  categoryId: 'documents_fiscal',
  title: 'Changing your tax address (domicílio fiscal) in Finanças',
  tldr: 'The tax address (domicílio fiscal) is a mandatory field in Finanças. Under art. 19.º LGT (Lei Geral Tributária), a new address must be reported within 60 days. The change is free. If you have a Cartão de Cidadão, the address is changed via the CC/ePortugal procedure with confirmation using a code from a letter; if you only have a NIF, use Portal das Finanças → Alterar Domicílio Fiscal.\n\nIMPORTANT: changing your address in Finanças does NOT automatically update AIMA, SNS, Segurança Social, your bank, or driving licence — notify each body separately. For IMI, what mainly matters is the habitação própria e permanente status; the IMI rate itself depends on the município where the property is located.',
  tags: ['domicílio fiscal', 'address', 'Finanças', 'moving'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'online',
      title: 'Online — the fastest method',
      content: [
        { kind: 'checklist', items: [
          '💻 If you have a Cartão de Cidadão: change your morada via ePortugal/Cartão de Cidadão; confirmation is by a code from a letter sent by post. After confirmation, the address is transmitted to AT',
          '💻 If you only have a NIF/residence permit without a Cartão de Cidadão: portaldasfinancas.gov.pt → “Os Seus Serviços” → “Dados Pessoais Relevantes” → “Alterar Domicílio Fiscal”',
          '🏠 Enter the new address (rua, número, código postal, freguesia)',
          '✅ For AT-only changes, it is usually applied immediately or after validation; for CC — after confirmation using the code from the letter',
          '📬 Download the comprovativo/certidão in Portal das Finanças and save the PDF',
          '🆓 Free'
        ]},
        { kind: 'warning', text: 'Changing your address in Finanças does NOT automatically update your address with AIMA, SNS, Segurança Social, your bank, or driving licence. Notify each body separately. For CC, the procedure may partially update a number of bodies via AMA, but not AIMA and many services.' }
      ]
    },
    {
      id: 'in-person',
      title: 'In person at Finanças',
      content: [
        { kind: 'checklist', items: [
          'Only needed if the Portal refuses the change (for example, the address is not recognised in CTT)',
          'Book through the Portal → “Agendamento (appointment booking)” → “Alteração de Morada”',
          'In some offices, atendimento sem marcação may be possible, but you should not rely on it; it is safer to book in advance',
          'Documents: Cartão de Cidadão / residence permit + proof of address (utility bill, rental agreement)'
        ]}
      ]
    },
    {
      id: 'foreign-address',
      title: 'Foreign address (for non-residents)',
      content: [
        { kind: 'paragraph', text: 'If you are NOT resident in Portugal but have a NIF, the address may be foreign. The change is made through the same Portal, but in the “País” field you must select your country.' },
        { kind: 'warning', text: 'A foreign domicílio fiscal usually means registration with AT as a non-resident, but tax residence is determined under the rules of art. 16.º CIRS (183+ days or housing indicating habitual residence). For non-residents, Portuguese-source income is taxed at special rates: employment/self-employment income is often 25% (art. 72), dividends/interest are usually subject to 28% withholding, blacklist jurisdictions — 35%; real estate follows its own rules. Double taxation treaties may change the rates.' },
        { kind: 'warning', text: 'If your tax address is outside the EU/EEA, check whether you are required to appoint a representante fiscal. In some cases this requirement is removed by subscribing to electronic notifications, but for IVA/professional activity a representative may remain mandatory.' }
      ]
    },
    {
      id: 'when-change',
      title: 'When you must change it',
      content: [
        { kind: 'checklist', items: [
          '🏠 Moving within Portugal (60-day deadline, art. 19.º LGT)',
          '🇵🇹 Moving to Portugal and actually meeting the tax residence criteria (183+ days or housing indicating habitual residence); obtaining a residence permit does not in itself equal tax residence',
          '✈️ When leaving Portugal: update your domicílio fiscal with AT within 60 days and separately check whether you will be tax resident for that year under art. 16.º CIRS',
          '🏝️ Moving to Madeira / Açores — IRS reductions',
          '💼 Company registration — the address may differ from your home address'
        ]},
        { kind: 'paragraph', text: 'Marriage/divorce is not a change of domicílio fiscal, but you should check dados pessoais/agregado familiar for IRS.' }
      ]
    },
    {
      id: 'confirmation',
      title: 'Certidão de domicílio fiscal — certificate',
      content: [
        { kind: 'paragraph', text: 'The certificate confirms your current tax address. A bank, landlord, accountant, or public body may require it; requirements depend on the specific procedure.' },
        { kind: 'checklist', items: [
          'Portal das Finanças → “Certidões” → “Certidão de Domicílio Fiscal”',
          'Instant, PDF with QR code',
          'Free',
          'Authenticity check — via Portal das Finanças → Validar certidão/documento, using the code or QR code on the PDF'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Change of Address', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei Geral Tributária (LGT) — article 19.º, domicílio fiscal', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1998-34541975', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código do IRS — art. 16.º, 71.º, 72.º (residence, rates)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal — Change the address on the Cartão de Cidadão', url: 'https://eportugal.gov.pt/servicos/alterar-a-morada-do-cartao-de-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
