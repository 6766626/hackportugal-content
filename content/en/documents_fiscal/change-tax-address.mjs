export default {
  editorialVoice: 'hackportugal',
  id: 'change-tax-address',
  categoryId: 'documents_fiscal',
  title: 'Changing your tax address (domicílio fiscal) in Finanças',
  tldr: 'The tax address (domicílio fiscal) is a mandatory field in Finanças. Under art. 19 LGT (Lei Geral Tributária) you must report your new address within 60 days. The change is free and can be done online at portaldasfinancas.gov.pt in 3 minutes. IMPORTANT: changing the address in Finanças does NOT automatically update the address with AIMA, SNS, Segurança Social, IRN/Cartão de Cidadão, your bank, or IMT — each authority must be notified separately. Your domicílio fiscal determines: where AT letters are sent, the IMI region and your IRS rate (discounts apply in Madeira/Açores).',
  tags: ['domicílio fiscal', 'address', 'finanças', 'relocation'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'online',
      title: 'Online — the fastest method',
      content: [
        { kind: 'checklist', items: [
          '💻 Log in at portaldasfinancas.gov.pt (password or Chave Móvel Digital)',
          '📂 «Os Seus Serviços» → «Dados Pessoais Relevantes» → «Alterar Morada»',
          '🏠 Enter the new address (rua, número, código postal, freguesia)',
          '✅ Confirm — the change takes effect immediately',
          '📬 Receive a PDF confirmation by email — save it',
          '🆓 Free'
        ]},
        { kind: 'warning', text: 'Changing your address in Finanças does NOT automatically update the address with AIMA, SNS, Segurança Social, IRN, your bank or on your driving licence. If you have a Cartão de Cidadão, update the Cartão de Cidadão address separately via ePortugal/Loja de Cidadão (this will update a number of bodies via AMA, but not AT). Notify each authority separately.' }
      ]
    },
    {
      id: 'in-person',
      title: 'In person at Finanças',
      content: [
        { kind: 'checklist', items: [
          'Only needed if the Portal rejects it (for example, the address is not recognised by CTT)',
          'Book via the Portal → «Agendamento (appointment booking)» → «Alteração de Morada»',
          'Or walk-in at major Lisboa/Porto branches',
          'Documents: Cartão de Cidadão / residence permit + proof of address (utility bill, tenancy agreement)'
        ]}
      ]
    },
    {
      id: 'foreign-address',
      title: 'Foreign address (non-residents)',
      content: [
        { kind: 'paragraph', text: 'If you are NOT a Portuguese resident but have a NIF, your address can be foreign. Change it via the same Portal, but select your country in the «País» field.' },
        { kind: 'warning', text: 'An address by itself ≠ tax residence; residence status depends on the factual criteria in the Código do IRS (183+ days or permanent home). For non-residents, income from Portuguese sources is taxed at special rates (Código do IRS arts. 71-72): employment/self-employment usually 25%, dividends/interest usually 28%, real estate — under its own rules. Double tax treaties may change the rates.' }
      ]
    },
    {
      id: 'when-change',
      title: 'When you must update it',
      content: [
        { kind: 'checklist', items: [
          '🏠 Moving within Portugal (60-day deadline)',
          '🇵🇹 Entering Portugal and obtaining a residence permit (becoming a tax resident)',
          '✈️ Leaving Portugal (become a non-resident — or keep Portuguese tax residence via 183+ days)',
          '🏝️ Moving to Madeira/Açores — IRS discounts apply',
          '💼 Registering a company — the address may differ from your home address',
          '👫 Marriage/divorce — update marital status in Finanças'
        ]}
      ]
    },
    {
      id: 'confirmation',
      title: 'Certidão de domicílio fiscal — certificate',
      content: [
        { kind: 'paragraph', text: 'The certificate confirms your current tax address. Needed for banks, rentals, visa matters.' },
        { kind: 'checklist', items: [
          'Portal das Finanças → «Certidões» → «Certidão de Domicílio Fiscal (tax address certificate)»',
          'Instant, PDF with QR code',
          'Free',
          'Verification via portaldasfinancas.gov.pt/certidoes'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Change of Address', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei Geral Tributária (LGT) — article 19 (domicílio fiscal)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1998-34541975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do IRS — articles 71 and 72 (rates for non-residents)', url: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/default.aspx', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — Change tax address', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/alterar-o-domicilio-fiscal', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 365
}
