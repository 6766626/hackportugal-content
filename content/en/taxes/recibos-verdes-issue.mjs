export default {
  editorialVoice: 'hackportugal',
  id: 'recibos-verdes-issue',
  categoryId: 'taxes',
  title: 'How to issue a recibo verde (self-employed electronic receipt) — step by step',
  tldr: 'A recibo verde is an electronic receipt for self-employed workers / sole traders. It is issued in Portal das Finanças → “Recibos Verdes Eletrónicos”. You need: an open activity, the client’s NIF, the amount, and a description of the service. IVA depends on the regime: regime normal (often 23% on the mainland; rates depend on the service and region) or regime de isenção art. 53 CIVA for turnover up to €15,000/year if the conditions are met. Deadline — by the 5th working day after the exigibilidade moment (completion of the service, issuing the invoice, or receiving an advance).',
  tags: ['recibo verde', 'sole trader', 'self-employed', 'activity'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'prereq',
      title: 'What you need before your first recibo',
      content: [
        { kind: 'checklist', items: [
          '✅ Open activity in Finanças (Início de Atividade)',
          '✅ Activity code: CAE and/or CIRS code under art. 151 (5-digit CAE: for example 70220 — management consultancy, 62010 — computer programming)',
          '✅ NIF and password for Portal das Finanças (or Chave Móvel Digital)',
          '✅ IVA decision: regime de isenção art. 53 CIVA (expected/previous annual turnover ≤ €15,000 + other conditions) or regime normal (rate depends on the service and region; often 23% on the mainland)',
          '✅ NISS is needed for Segurança Social; for emissão recibo, abertura de atividade, NIF and access to Portal das Finanças are enough',
          '✅ IBAN to receive payment'
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
              'Address — sometimes auto-filled from a PT NIF, but it must be checked',
              'For foreign clients, IVA depends on B2B/B2C, the country and the type of service — you need to check the regras de localização art. 6 CIVA'
            ]}
          ]},
          { id: 's3', title: '3. Service description', content: [
            { kind: 'checklist', items: [
              'Date of performance',
              'Description (briefly: “Serviços de consultoria”, “Desenvolvimento de software”)',
              'Quantity / unit (h — hours, un. — unit)',
              'Unit price',
              'Total amount'
            ]}
          ]},
          { id: 's4', title: '4. IVA', content: [
            { kind: 'checklist', items: [
              'Regime de isenção art. 53 CIVA: IVA is not charged; state the reason — "IVA - regime de isenção [artigo 53.º do CIVA]". This is an exemption, not a 0% rate',
              'Regime normal de IVA: apply the appropriate rate — often 23% on the mainland for ordinary services; the rate depends on the service and region (Madeira/Açores — different)',
              'B2B client in another EU country with a valid VAT/VIES: IVA is usually not charged in Portugal, and reverse charge / autoliquidação is indicated; check VIES and a possible declaração recapitulativa',
              'Client outside the EU: for B2B, the place of taxation is often outside Portugal and PT IVA is not charged; for B2C and special services — separate rules apply (not "0%")'
            ]}
          ]},
          { id: 's5', title: '5. IRS withholding', content: [
            { kind: 'checklist', items: [
              'Client in Portugal — company/entidade com contabilidade organizada: retenção depends on the type of activity — often **25%** for professions in tabela art. 151 CIRS; **11.5%** only for some other Cat. B income',
              'Private individual client in Portugal — usually no withholding',
              'Foreign client — no Portuguese withholding',
              'If turnover is below the limit and the conditions are met, dispensa de retenção under art. 101-B CIRS may apply',
              'IFICI: eligible income is taxed at 20% in the annual return, but retenção does not automatically become 11.5% — the rate/code follows CIRS and AT instructions'
            ]}
          ]},
          { id: 's6', title: '6. Sending', content: [
            { kind: 'paragraph', text: 'After emissão, the document is available in Portal das Finanças; it can be downloaded as a PDF and sent to the client. Separate confirmation of payment by the client in the Portal is not required as a mandatory step.' }
          ]}
        ]}
      ]
    },
    {
      id: 'timing',
      title: 'When to issue it',
      content: [
        { kind: 'checklist', items: [
          '📅 Usually after the service has been performed or when an advance is received; for continuous services — special exigibilidade rules apply',
          '⏰ As a general rule — by the 5th working day after the exigibilidade moment (art. 36 CIVA)',
          '⚠️ Breaches of faturação rules may result in fines under RGIT; the amount depends on the situation and status',
          '🔄 Advance payment → recibo for the advance, final one — when the balance is paid',
          '💳 Card payment → recibo immediately (when the money reaches the bank)',
          '🧾 Recibos verdes are usually issued electronically through Portal das Finanças / AT-authorised systems; paper versions are allowed only in limited cases'
        ]}
      ]
    },
    {
      id: 'errors',
      title: 'Correcting errors',
      content: [
        { kind: 'checklist', items: [
          '⛔ Recibo ALREADY issued — it cannot be changed. You can only cancel it or issue a corrective document',
          '🔄 Anulação/correção is done in Portal das Finanças, but admissibility and consequences depend on the type of document and declarations already filed',
          '🚨 If a simple anulação is not possible or the document has entered declarations: nota de crédito, a new document, declaração substitutiva or IVA/IRS adjustment — depending on the case',
          '📅 In the current quarter, the adjustment is usually reflected in the current IVA return'
        ]}
      ]
    },
    {
      id: 'tax-obligations',
      title: 'Related tax obligations',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'IVA — mensal ou trimestral, if under regime normal', content: [
            { kind: 'checklist', items: [
              'Trimestral: declaração periódica usually by the 20th day of the second month after the quarter; payment — by the 25th of the same month',
              'Mensal: by the 20th day of the second month after the reporting month',
              'Regime de isenção art. 53 CIVA (≤ €15,000/year and other conditions): no cobrança IVA and no declaração periódica de IVA'
            ]}
          ]},
          { id: 't2', title: 'Segurança Social — quarterly declaration', content: [
            { kind: 'paragraph', text: 'Trabalhadores independentes usually pay 21.4% sobre o rendimento relevante: usually 70% of income from services or 20% from sales/production/hotelaria/restauração. The calculation is based on the quarterly declaração with a possible ±25% adjustment. At the first início de atividade, there is usually an isenção inicial of 12 months; afterwards — a minimum of €20 in certain cases. Monthly base ceiling — 12×IAS = €6,445.56 (IAS 2026 = €537.13).' }
          ]},
          { id: 't3', title: 'IRS — once a year (Anexo B / C)', content: [
            { kind: 'paragraph', text: 'Modelo 3 is usually filed from 1 April to 30 June. In regime simplificado, the coefficient depends on the type of income: for many professional services — 0.75; for others — 0.35, 0.15, etc.; part of the expenses may require proof. IFICI gives a 20% rate only for eligible income when the conditions are met.' }
          ]}
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Portal das Finanças — Invoices and Recibos Verdes', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IVA Code (DRE)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34470075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRS Code (DRE)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1988-34544875', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — Trabalhadores Independentes', url: 'https://www.seg-social.pt/trabalhadores-independentes', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
