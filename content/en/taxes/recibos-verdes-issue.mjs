export default {
  editorialVoice: 'hackportugal',
  id: 'recibos-verdes-issue',
  categoryId: 'taxes',
  title: 'How to issue a recibo verde (electronic self-employed receipt) — step by step',
  tldr: 'Recibo verde is an electronic receipt for self-employed people / sole traders. It is issued in Portal das Finanças (tax portal) → “Recibos Verdes Eletrónicos”. You need: an open activity, the client’s NIF, the amount, and a description of the service. IVA depends on the regime: standard 23% or exemption for turnover < €15,000/year. Example for a sole trader in the first year: usually no IVA, under the special regime. Issue deadline — by the 5th day of the month following payment.',
  tags: ['recibo verde', 'sole trader', 'self-employed', 'activity'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'prereq',
      title: 'What you need before your first recibo',
      content: [
        { kind: 'checklist', items: [
          '✅ Open activity in Finanças (Início de Atividade)',
          '✅ CAE — your activity code (consulting — 7022, IT — 6201)',
          '✅ NIF and password for Portal das Finanças (or Chave Móvel Digital)',
          '✅ IVA decision: special regime (if first year + turnover < €15,000) or standard 23% regime',
          '✅ Active NISS for Segurança Social (social security)',
          '✅ IBAN for receiving payment'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: 'Issuing a recibo — step by step',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Log in to Portal das Finanças', content: [
            { kind: 'paragraph', text: 'portaldasfinancas.gov.pt → “Os Seus Serviços” → “Emitir Faturas e Recibos Eletrónicos” → “Recibos”.' }
          ]},
          { id: 's2', title: '2. Fill in the client details', content: [
            { kind: 'checklist', items: [
              'Client’s NIF (Portuguese or foreign)',
              'Name / company name',
              'Address (automatic if it is a Portuguese NIF)',
              'If the client is outside the EU — “Não sujeito a IVA” is selected automatically'
            ]}
          ]},
          { id: 's3', title: '3. Service description', content: [
            { kind: 'checklist', items: [
              'Date of performance',
              'Description (brief: “Serviços de consultoria”, “Desenvolvimento de software”)',
              'Quantity / unit (h — hours, un. — unit)',
              'Unit price',
              'Total amount'
            ]}
          ]},
          { id: 's4', title: '4. IVA', content: [
            { kind: 'checklist', items: [
              'Special regime: 0% IVA, wording “IVA — regime de isenção art. 53”',
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
              'IFICI status — 11.5% withholding, but refunded through the annual tax return'
            ]}
          ]},
          { id: 's6', title: '6. Sending', content: [
            { kind: 'paragraph', text: 'The PDF recibo is automatically sent to the client by email and is available in Portal das Finanças. The client confirms receipt of payment in their own Portal das Finanças.' }
          ]}
        ]}
      ]
    },
    {
      id: 'timing',
      title: 'When to issue it',
      content: [
        { kind: 'checklist', items: [
          '📅 On completion of the service OR receipt of payment (whichever comes first)',
          '⏰ By the 5th day of the month following payment',
          '⚠️ Late issue — fine of €150–€3,750 under CIVA',
          '🔄 Advance payment → recibo for the advance, final one when the balance is paid',
          '💳 Card payment → recibo immediately (when the money reaches the bank)',
          '🧾 Electronic and paper format — from 2024+ only electronic for recibos verdes (electronic self-employed receipts)'
        ]}
      ]
    },
    {
      id: 'errors',
      title: 'Correcting mistakes',
      content: [
        { kind: 'checklist', items: [
          '⛔ Recibo ALREADY issued — cannot be changed. It can only be cancelled and a new one issued',
          '🔄 Cancellation — in Portal das Finanças within 48 hours',
          '🚨 After 48 hours — nota de crédito (for a negative amount) + new recibo',
          '📅 In the current quarter — included in the current IVA return'
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
              'Declaração Periódica (periodic return) by the 20th day of the month following the quarter',
              'Payment — by the 25th',
              'Special regime (< €15,000) is exempt'
            ]}
          ]},
          { id: 't2', title: 'Segurança Social — every month', content: [
            { kind: 'paragraph', text: '21.4% of the base. First year — 50% reduction + 12-month grace period. Minimum €20/month.' }
          ]},
          { id: 't3', title: 'IRS — once a year (Anexo B / C)', content: [
            { kind: 'paragraph', text: 'March–June. Simplified regime: 75% of turnover is treated as income (25% — presumed expenses). For IFICI — fixed rate of 20%.' }
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Recibos Verdes', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do IVA (CIVA)', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1984-55502475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do IRS', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1988-34471975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Issue recibos verdes', url: 'https://eportugal.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
