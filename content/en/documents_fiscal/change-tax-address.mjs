export default {
  editorialVoice: 'hackportugal',
  id: 'change-tax-address',
  categoryId: 'documents_fiscal',
  title: 'Changing your tax address (domicílio fiscal) in Finanças',
  tldr: 'The tax address (domicílio fiscal) is a mandatory field in Finanças. Under art. 19.º LGT (Lei Geral Tributária), a new address must be reported within 60 days — otherwise a 75–375 € fine under RGIT, and the change itself may be deemed ineffective for tax purposes.\n\nIf you have a Cartão de Cidadão, the address is changed via gov.pt/Cartão de Cidadão with confirmation using a code from a paper letter (arrives in ~5 business days, you have 90 days to confirm). After confirmation, the address is automatically transmitted to AT.\n\nIf you only have a NIF/residence permit without a Cartão de Cidadão, use Portal das Finanças → “Cidadãos” → “Serviços” → “Dados Cadastrais” → “Morada” → “Entregar Pedido de Alteração”. This process is also two-phase: request + confirmation via the letter code.\n\nThe change is free. IMPORTANT: changing your address in Finanças does NOT automatically update AIMA, SNS, Segurança Social, your bank, or driving licence — notify each body separately. For IMI, what mainly matters is the habitação própria e permanente status; the IMI rate itself depends on the município where the property is located.',
  tags: ['domicílio fiscal', 'address', 'Finanças', 'moving'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'online',
      title: 'Online — the fastest method',
      content: [
        { kind: 'paragraph', text: 'The process is two-phase regardless of route: first the request, then confirmation using a code from a paper letter sent to the new address.' },
        { kind: 'checklist', items: [
          '💳 If you have a Cartão de Cidadão: gov.pt → “Alterar a morada do Cartão de Cidadão”. Authenticate via Chave Móvel Digital + linked phone, OR Cartão de Cidadão + PIN + card reader. After confirmation, the address is automatically transmitted to AT and to some other services via AMA',
          '🧾 If you only have a NIF/residence permit without a Cartão de Cidadão: portaldasfinancas.gov.pt → “Cidadãos” → “Serviços” → “Dados Cadastrais” → “Morada” → “Entregar Pedido de Alteração”. Authenticate via CMD or CC',
          '🔁 Alternative via e-balcão (for specific cases such as resident/non-resident status changes): “Registo Contribuinte” → “Identific” → “Alteração Morada / Singulares”, with the option to upload documents',
          '🏠 Enter the new address (rua, número, código postal, freguesia)',
          '📬 Wait for the letter with the confirmation code — ~5 business days (longer in Madeira/Azores)',
          '✅ Enter the code on the same page. You have up to 90 days from the request to confirm',
          '📄 After confirmation, download the comprovativo/certidão in Portal das Finanças and save the PDF',
          '🆓 Free'
        ]},
        { kind: 'warning', text: 'Without confirming the code, the change is considered ineffective for tax purposes — for AT the address remains the old one. Do not ignore the letter.' },
        { kind: 'warning', text: 'Changing your address in Finanças does NOT automatically update your address with AIMA, SNS, Segurança Social, your bank, or driving licence. Notify each body separately. For CC, the procedure may partially update a number of bodies via AMA, but not AIMA and many services.' }
      ]
    },
    {
      id: 'in-person',
      title: 'In person at Finanças',
      content: [
        { kind: 'checklist', items: [
          'Only needed if the Portal refuses the change (for example, the address is not recognised in CTT) or you do not have CMD/CC reader',
          'Book through the Portal → “Agendamento (appointment booking)” → “Alteração de Morada”',
          'In some offices, atendimento sem marcação may be possible, but you should not rely on it; it is safer to book in advance',
          'Documents: Cartão de Cidadão / residence permit + proof of address (utility bill, rental agreement)',
          'The two-phase process still applies: the in-person visit is only the request, the code still arrives by letter'
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
      title: 'When you must change it + fines',
      content: [
        { kind: 'checklist', items: [
          '🏠 Moving within Portugal (60-day deadline, art. 19.º LGT)',
          '🇵🇹 Moving to Portugal and actually meeting the tax residence criteria (183+ days or housing indicating habitual residence); obtaining a residence permit does not in itself equal tax residence',
          '✈️ When leaving Portugal: update your domicílio fiscal with AT within 60 days and separately check whether you will be tax resident for that year under art. 16.º CIRS',
          '🏝️ Moving to Madeira / Açores — IRS reductions',
          '💼 Company registration — the address may differ from your home address'
        ]},
        { kind: 'warning', text: 'Fine for missing the 60-day deadline: 75–375 € under Regime Geral das Infrações Tributárias (RGIT). On top of the fine, without an up-to-date address AT may send notifications to your old address — and you miss deadlines and lose the chance to appeal.' },
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
    { title: 'Portal das Finanças — Change of Address (FAQ)', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/pages/faqs-00303.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-29' },
    { title: 'Portal das Finanças — Morada (Personal Data)', url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Dados_pessoais_familia/Dados_pessoais/Morada/Paginas/default.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-29' },
    { title: 'gov.pt — Change the address on the Cartão de Cidadão', url: 'https://www.gov.pt/servicos/alterar-a-morada-do-cartao-de-cidadao', kind: 'official', language: 'pt', lastRetrieved: '2026-05-29' },
    { title: 'Lei Geral Tributária (LGT) — article 19.º, domicílio fiscal', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1998-34541975', kind: 'law', language: 'pt', lastRetrieved: '2026-05-29' },
    { title: 'Código do IRS — art. 16.º, 71.º, 72.º (residence, rates)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875', kind: 'law', language: 'pt', lastRetrieved: '2026-05-29' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365,
  recentlyChangedAt: '2026-05-29',
  changeSummary: '🔄 May 2026 sync: (1) eportugal.gov.pt migrated to gov.pt — source URLs updated; (2) Portal das Finanças menu renamed: “Dados Pessoais Relevantes” → “Dados Cadastrais”; (3) added specifics: confirmation letter arrives in ~5 business days, 90 days to confirm; (4) added 75–375 € fine (RGIT) for missing the 60-day deadline; (5) clarified authentication methods (CMD + phone or CC + PIN + card reader); (6) added e-balcão as an alternative for resident/non-resident status changes.'
}
