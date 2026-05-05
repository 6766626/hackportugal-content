export default {
  editorialVoice: 'hackportugal',
  id: 'recibos-verdes-issue',
  categoryId: 'taxes',
  title: 'How to issue a recibo verde (self-employed electronic receipt) — step by step',
  tldr: 'Recibo verde is the electronic receipt for a self-employed person / sole trader. It is issued in Portal das Finanças (tax portal) → «Recibos Verdes Eletrónicos». You will need: activity opened, the client NIF, amount, service description. IVA depends on the regime: standard 23% or exemption if turnover < €15,000/year. Example for a sole trader in the first year: usually without IVA, under the special regime. Issue deadline — by the 5th day of the month following payment.',
  tags: ['recibo verde', 'sole trader', 'self-employed', 'activity'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'prereq',
      title: 'What you need before your first recibo',
      content: [
        { kind: 'checklist', items: [
          '✅ Open activity at Finanças (Início de Atividade)',
          '✅ CAE — your activity code (consulting — 7022, IT — 6201)',
          '✅ NIF and password for Portal das Finanças (or Chave Móvel Digital)',
          '✅ IVA choice: special regime (if first year + turnover < €15,000) or standard 23% regime',
          '✅ Active NISS for Segurança Social (social security)',
          '✅ IBAN to receive payment'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: 'Issuing a recibo — step by step',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Sign in to Portal das Finanças', content: [
            { kind: 'paragraph', text: 'portaldasfinancas.gov.pt → «Os Seus Serviços» → «Emitir Faturas e Recibos Eletrónicos» → «Recibos».' }
          ]},
          { id: 's2', title: '2. Fill in the client details', content: [
            { kind: 'checklist', items: [
              'Client NIF (Portuguese or foreign)',
              'Name / company name',
              'Address (auto-filled if Portuguese NIF)',
              'If the client is outside the EU — «Não sujeito a IVA» is selected automatically'
            ]}
          ]},
          { id: 's3', title: '3. Service description', content: [
            { kind: 'checklist', items: [
              'Date of performance',
              'Description (brief: «Serviços de consultoria», «Desenvolvimento de software»)',
              'Quantity / unit (h — hours, un. — unit)',
              'Unit price',
              'Total amount'
            ]}
          ]},
          { id: 's4', title: '4. IVA', content: [
            { kind: 'checklist', items: [
              'Special regime: 0% IVA, note «IVA — regime de isenção art. 53»',
              'Standard regime: 23% IVA on the amount',
              'Exception: client in another EU country with a VAT number → 0% IVA (reverse charge)',
              'Client outside the EU → 0% IVA'
            ]}
          ]},
          { id: 's5', title: '5. IRS withholding', content: [
            { kind: 'checklist', items: [
              'A corporate client in Portugal withholds 11.5% (artigo 101 CIRS)',
              'An individual client in Portugal — no withholding',
              'Foreign client — no withholding',
              'IFICI status — 11.5% withholding, but refunded in the annual return'
            ]}
          ]},
          { id: 's6', title: '6. Sending', content: [
            { kind: 'paragraph', text: 'The recibo PDF is sent to the client by email automatically and is available in Portal das Finanças. The client confirms receipt of payment in their Portal das Finanças.' }
          ]}
        ]}
      ]
    },
    {
      id: 'timing',
      title: 'When to issue',
      content: [
        { kind: 'checklist', items: [
          '📅 Upon completion of the service OR receipt of payment (whichever comes first)',
          '⏰ By the 5th day of the month following payment',
          '⚠️ Late filing — fine of €150–€3,750 under CIVA',
          '🔄 Advance payment → issue a recibo for the advance, final one when the balance is paid',
          '💳 Card payment → issue the recibo immediately (when the funds reach your bank)',
          '🧾 Electronic and paper format — from 2024+ only electronic for recibos verdes (self-employed electronic receipts)'
        ]}
      ]
    },
    {
      id: 'errors',
      title: 'Fixing mistakes',
      content: [
        { kind: 'checklist', items: [
          '⛔ Recibo ALREADY issued — cannot be edited. Only cancel/void and issue a new one',
          '🔄 Cancellation — in Portal das Finanças within 48 hours',
          '🚨 After 48 hours — issue a nota de crédito (for a negative amount) + a new recibo',
          '📅 In the current quarter — include it in the current IVA return'
        ]}
      ]
    },
    {
      id: 'tax-obligations',
      title: 'Related tax obligations',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'IVA — quarterly (if on the standard regime)', content: [
            { kind: 'checklist', items: [
              'Declaração Periódica (periodic return) by the 20th of the month following the quarter',
              'Payment — by the 25th',
              'Special regime (< €15,000) is exempt'
            ]}
          ]},
          { id: 't2', title: 'Segurança Social — monthly', content: [
            { kind: 'paragraph', text: '21.4% of the base. For first-time registered trabalhador independente — full exemption for the first 12 months (not a “50% discount”). Minimum €20/month after the relief.' }
          ]},
          { id: 't3', title: 'IRS — annually (Anexo B / C)', content: [
            { kind: 'paragraph', text: 'March–June. Simplified regime: 75% of turnover is deemed income (25% — presumed expenses). For IFICI — flat rate 20%.' }
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Recibos Verdes', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.htmlindex.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IVA Code (CIVA)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1984-55502475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRS Code', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1988-34471975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Issue recibos verdes', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
