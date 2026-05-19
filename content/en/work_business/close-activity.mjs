export default {
  editorialVoice: 'hackportugal',
  id: 'close-activity',
  categoryId: 'work_business',
  title: 'Closing atividade (sole trader) and legal entities in Portugal',
  tldr: 'Closing recibos verdes (cessação de atividade): free via Portal das Finanças.\n\nDeadline — usually 30 days from the date activity ceased; late filing may result in a coima. Required: submit the final IVA return (if you were under the normal regime) + Modelo 3 IRS (if there was turnover during the year) + notify Segurança Social. Closing a Unipessoal / Lda is more complex: dissolução + liquidação through the Conservatória Comercial + final reporting.\n\nProcess 6-12 months. If there are debts — bankruptcy (insolvência) through court.',
  tags: ['cessation', 'sole trader closure', 'liquidation', 'legal entity'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'cessacao-atividade',
      title: '👤 Closing a sole trader activity (recibos verdes)',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Finish active work', content: [
            { kind: 'checklist', items: [
              'Issue the last recibo',
              'Receive payments from clients (ideally 30 days before closure)',
              'Collect all supplier receipts for IVA deduzida',
              'Notify clients that you are ceasing work (email, letter) — this is good practice',
              'Active contracts — terminate or redirect them'
            ]}
          ]},
          { id: 'c2', title: '2. Submit cessação to AT', content: [
            { kind: 'checklist', items: [
              'Portal das Finanças → Serviços → Atividades → Cessação',
              'Enter the date of the last day of activity',
              'Reason: voluntary (most commonly selected), trabalho subordinado (if you moved to salaried employment), mudança de país, aposentação',
              'Submit — the process is instant, the certificate arrives within an hour',
              'You can enter the actual cessation date, including a past date, but if the 30-day deadline has been missed — a coima and a request for evidence from AT are possible'
            ]}
          ]},
          { id: 'c3', title: '3. Final IVA', content: [
            { kind: 'checklist', items: [
              'If you were in the normal IVA regime and submitted periodic IVA declarations — submit the last return for the cessação period. If you were under isenção art. 53 CIVA, periodic IVA is usually not submitted',
              'Period: quarter / month in which the cessação occurred',
              'Deadline: under the usual rules for the IVA period — the return is usually due by the 20th day of the second month after the month/quarter, payment by the 25th (CIVA arts. 27, 41)',
              'If IVA is payable (you owe AT) — pay it',
              'Replace with: “If there is crédito de IVA, you can request a reembolso in the final/periodic declaration subject to the CIVA conditions; the timeframe depends on AT checks and is not guaranteed as 30–60 days.”'
            ]}
          ]},
          { id: 'c4', title: '4. Final IRS', content: [
            { kind: 'checklist', items: [
              'In the IRS return (filed April-June of the following year) — Anexo B must still be completed',
              'Calculate tax on all turnover for the cessação year',
              'Under regime simplificado the basis is calculated using the coefficient in CIRS art. 31: often 75% for professional services, but other coefficients apply to other income',
              'Retenção na fonte (client withholdings) — credited against the tax',
              'If the amount is negative — refund'
            ]}
          ]},
          { id: 'c5', title: '5. Segurança Social', content: [
            { kind: 'checklist', items: [
              'They automatically receive notification from AT within 10 days',
              'BUT: if you had carência (12-month exemption) and were not paying contributions — in the long term it is better to confirm this in Segurança Social Direta',
              'TI contributions are calculated by quarterly declaration: relevant income is usually 70% of services or 20% of sales/production/hotel/restaurant for the previous quarter, TI rate 21.4%. After cessação, check the last quarterly declaration in Segurança Social Direta',
              'The deadline for paying SS contributions is usually from the 10th to the 20th day of the following month',
              'After cessação: contributions are no longer charged; accumulated contribution record remains (for a future pension)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'reopen',
      title: '🔄 Reopen',
      content: [
        { kind: 'checklist', items: [
          'Reabertura atividade — possible at any time via Portal das Finanças',
          'Frequent openings/closures without a real reason may raise questions from AT/SS, so keep evidence of actual activity and the reasons for cessação/reabertura',
          'In practice it is better to leave a noticeable interval between closure and reopening, unless it is a forced measure',
          'Replace with: “On reabertura, Segurança Social rules depend on the previous enquadramento and the break. Do not automatically count on a new 12 months without contributions; check Segurança Social Direta or request confirmation from SS/a contabilista.”'
        ]}
      ]
    },
    {
      id: 'company-closure',
      title: '🏢 Closing a legal entity (Lda, Unipessoal, SA)',
      content: [
        { kind: 'paragraph', text: 'Much more complicated and expensive than a sole trader. The process is dissolução + liquidação.' },
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Stage 1: Dissolução (dissolution)', content: [
            { kind: 'checklist', items: [
              'Sócios (shareholders/partners) adopt a resolution at the Assembleia Geral',
              'Filing with the Conservatória Comercial — registration of dissolução',
              'Replace with: “Publication of the registration act is carried out electronically through the official commercial acts publications portal / IRN after registration at the Conservatória Comercial.”',
              'Cost: €100-200'
            ]}
          ]},
          { id: 'l2', title: 'Stage 2: Liquidação (liquidation)', content: [
            { kind: 'checklist', items: [
              'Appointment of a liquidatário (often — the last administrative manager)',
              'Inventory of assets and liabilities',
              'Sale of assets, payment of debts',
              'Final balance sheet',
              'Distribution among sócios according to their shares',
              'Process: 6-18 months',
              'Cost: depends heavily on complexity. Simple unipessoal — €500-1000. Medium Lda — €1500-5000. SA with assets — €5000-20000+'
            ]}
          ]},
          { id: 'l3', title: 'Stage 3: Registo encerramento', content: [
            { kind: 'checklist', items: [
              'Final registration at the Conservatória Comercial',
              'Add a separate point: “After cessação/encerramento the accountant files the final returns: declaração de cessação, Modelo 22 IRC within the special deadline after cessation, IES/DA within the special deadline, final IVA and retenções na fonte, if applicable.”',
              'Notification to Segurança Social of cessation',
              'Keep accounting documents for 5 years (by law)',
              'Certidão de encerramento — the company is officially closed'
            ]}
          ]},
          { id: 'l4', title: 'Rename the block to: “Dissolução e liquidação imediata / extinção imediata de entidade comercial” and state that the procedure is possible with the unanimous decision of the participants and the absence of assets and liabilities to be liquidated.', content: [
            { kind: 'checklist', items: [
              '“Empresa na Hora” dissolução — in one day at the Conservatória',
              'Only for simple cases: no outstanding debts, liabilities to AT, assets',
              'Replace with: “State fee according to the IRN/RERN table; for immediate dissolução/liquidação people usually estimate around €300, but before filing you need to check the current IRN emolumentos.”',
              'Suitable for ~40% of companies'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'bankruptcy',
      title: '💸 Insolvência — if debts > assets',
      content: [
        { kind: 'checklist', items: [
          'Bankruptcy → through court',
          'Replace with: “PER — a recovery/creditor negotiation procedure for companies in financial difficulty or imminent insolvency; this is not liquidation bankruptcy.”',
          'Remove PEVE from the current list or write: “PEVE was a temporary COVID procedure and in 2026 is not a standard option; for restructuring people usually look at PER/RERE, for liquidation — insolvência.”',
          'Full insolvência with liquidation — 1-3 years, the court appoints an administrador',
          'For sócios: personal liability only if there is subsidiary liability, fraud or personal guarantees',
          'Unipessoal Lda — sócio is protected (limited liability)',
          'ENI (Empresário em Nome Individual, = sole trader in the commercial sense) — full personal liability',
          'Cost: court fees €1000-5000, lawyer €2000-10000'
        ]}
      ]
    },
    {
      id: 'checklist-final',
      title: '✅ Final checklist',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Financial', content: [
            { kind: 'checklist', items: [
              'All clients have paid or receipts have been marked as written off',
              'All suppliers have been paid',
              'Final IVA submitted',
              'Final IRS/IRC submitted',
              'Final IES (for Lda) submitted',
              'Segurança Social contributions paid',
              'Replace with: “After paying debts, taxes and approving the liquidation balance sheet, distribute the remainder among sócios according to liquidation rules and close the company bank account.”',
              'Cancel subscriptions (software, domains, hosting)'
            ]}
          ]},
          { id: 'f2', title: 'Legal', content: [
            { kind: 'checklist', items: [
              'Replace the example with: “real estate/mediação imobiliária — IMPIC; insurance — ASF; turismo/animação turística — Turismo de Portugal, etc.”',
              'Cancel registered trade marks (or transfer them)',
              'Revoke delegated access in Portal das Finanças for the former accountant',
              'Hand over archive documents (keep for 5 years)',
              'Notify Chave Móvel Digital / digital certificates — they can remain active'
            ]}
          ]},
          { id: 'f3', title: 'Administrative', content: [
            { kind: 'checklist', items: [
              'Close accounts with shops / suppliers',
              'Close the company mailbox (Gmail / Outlook)',
              'Remove from Google My Business, social networks',
              'Set up domain / email forwarding',
              'Notify the bank (not for a personal account, but if there was a business one)',
              'Cancel business insurance'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Cessação atividade (sole trader)', amountEUR: 0, note: 'free via Portal das Finanças' },
    { label: 'Final returns (if through an accountant)', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Simplified dissolução (Empresa na Hora)', amountEUR: 360 },
    { label: 'Closing a Unipessoal (with liquidation)', amountEURMin: 500, amountEURMax: 1000 },
    { label: 'Medium Lda (full process)', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'Insolvência (bankruptcy) through court', amountEURMin: 1000, amountEURMax: 5000 }
  ],
  sources: [
    { title: 'Portal das Finanças — Cessação Atividade', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Conservatória Comercial', url: 'https://justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Insolvency Code (CIRE)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2004-34453275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
