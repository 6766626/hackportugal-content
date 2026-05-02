export default {
  editorialVoice: 'hackportugal',
  id: 'change-tax-address',
  categoryId: 'documents_fiscal',
  title: 'Changing your tax address (domicílio fiscal) in Finanças',
  tldr: 'The tax address (domicílio fiscal) is a mandatory field in Finanças. Under art. 19 LGT (Lei Geral Tributária), a new address must be reported within 60 days. The change is free and can be done online at portaldasfinancas.gov.pt in 3 minutes. IMPORTANT: changing your address in Finanças does NOT automatically update your address with AIMA, SNS, Segurança Social, IRN/Cartão de Cidadão, your bank, IMT — each authority must be notified separately. Your domicílio fiscal determines: where AT letters are sent, the IMI region and the IRS rate (discounts apply in Madeira/Açores).',
  tags: ['domicílio fiscal', 'address', 'Finanças', 'moving'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'online',
      title: 'Online — the fastest way',
      content: [
        { kind: 'checklist', items: [
          '💻 Log in to portaldasfinancas.gov.pt (password or Chave Móvel Digital)',
          '📂 “Os Seus Serviços” → “Dados Pessoais Relevantes” → “Alterar Morada”',
          '🏠 Enter the new address (rua, número, código postal, freguesia)',
          '✅ Confirm — the change takes effect immediately',
          '📬 Receive PDF confirmation by email — save it',
          '🆓 Free'
        ]},
        { kind: 'warning', text: 'Changing your address in Finanças does NOT automatically update your address with AIMA, SNS, Segurança Social, IRN, your bank or your driving licence. If you have a Cartão de Cidadão — change the Cartão de Cidadão address separately via ePortugal/Loja de Cidadão (this will update a number of authorities via AMA, but not AT). Notify each authority separately.' }
      ]
    },
    {
      id: 'in-person',
      title: 'In person at Finanças',
      content: [
        { kind: 'checklist', items: [
          'Only needed if the Portal refuses the change (for example, the address is not recognised in CTT)',
          'Appointment via Portal → “Agendamento (appointment booking)” → “Alteração de Morada”',
          'Or without an appointment at larger Lisboa/Porto offices',
          'Documents: Cartão de Cidadão / residence permit + proof of address (utility bill, rental contract)'
        ]}
      ]
    },
    {
      id: 'foreign-address',
      title: 'Foreign address (for non-residents)',
      content: [
        { kind: 'paragraph', text: 'If you are NOT resident in Portugal but have a NIF — the address can be foreign. The change is made through the same Portal, but in the “País” field you must select your country.' },
        { kind: 'warning', text: 'Address by itself ≠ tax residence; residence status depends on the factual criteria in the Código do IRS (183+ days or a permanent home). For non-residents, Portugal-source income is taxed at special rates (Código do IRS art. 71-72): employment/self-employment income is usually 25%, dividends/interest are usually 28%, and property follows its own rules. Double taxation treaties may change the rates.' }
      ]
    },
    {
      id: 'when-change',
      title: 'When you must change it',
      content: [
        { kind: 'checklist', items: [
          '🏠 Moving within Portugal (60-day deadline)',
          '🇵🇹 Entering Portugal and obtaining a residence permit (becoming tax resident)',
          '✈️ Leaving Portugal (becoming non-resident — or keeping Portuguese tax residence through 183+ days)',
          '🏝️ Moving to Madeira / Açores — IRS discounts',
          '💼 Registering a company — the address may differ from your home address',
          '👫 Marriage / divorce — update your family status in Finanças'
        ]}
      ]
    },
    {
      id: 'confirmation',
      title: 'Certidão de domicílio fiscal — certificate',
      content: [
        { kind: 'paragraph', text: 'The certificate confirms your current tax address. It is needed for banks, rentals and visa matters.' },
        { kind: 'checklist', items: [
          'Portal das Finanças → “Certidões” → “Certidão de Domicílio Fiscal (tax address certificate)”',
          'Instantly, PDF with QR code',
          'Free',
          'Verification via portaldasfinancas.gov.pt/certidoes'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Change of Address', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei Geral Tributária (LGT) — article 19 (domicílio fiscal)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1998-34541975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRS — articles 71 and 72 (rates for non-residents)', url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/default.aspx', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Change Domicílio Fiscal', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/alterar-o-domicilio-fiscal', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}
