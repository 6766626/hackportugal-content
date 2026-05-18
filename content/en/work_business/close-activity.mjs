export default {
  editorialVoice: 'hackportugal',
  id: 'close-activity',
  categoryId: 'work_business',
  title: 'Closing atividade (self-employment) and a legal entity in Portugal',
  tldr: 'Closing recibos verdes (cessação de atividade): free via Portal das Finanças.\n\nDeadline — usually 30 days from the date activity ceased; late submission may lead to a coima. You need to: submit the final IVA return (if you were under the normal regime) + Modelo 3 IRS (if there was turnover during the year) + notify Segurança Social. Closing a Unipessoal / Lda is more complicated: dissolução + liquidação through the Conservatória Comercial + final reporting.\n\nThe process takes 6-12 months. If there are debts — insolvency (insolvência) through the court.',
  tags: ['cessation', 'closing self-employment', 'liquidation', 'legal entity'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'cessacao-atividade',
      title: '👤 Closing self-employment (recibos verdes)',
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
              'Specify the date of the last day of activity',
              'Reason: voluntary (most often selected), trabalho subordinado (if you moved to salaried employment), mudança de país, aposentação',
              'Submit — the process is instant, and the certificate arrives within an hour',
              'You can specify the actual cessation date, including a past date, but if the 30-day deadline has been missed — a coima and a request for evidence from AT are possible'
            ]}
          ]},
          { id: 'c3', title: '3. Final IVA', content: [
            { kind: 'checklist', items: [
              'If you were under the normal IVA regime and submitted periodic IVA declarations — submit the last return for the cessação period. If you were under isenção art. 53 CIVA, periodic IVA is usually not submitted',
              'Period: the quarter / month in which the cessação took place',
              'Deadline: under the usual IVA period rules — the return is usually due by the 20th day of the second month after the month/quarter, payment by the 25th (CIVA arts. 27, 41)',
              'If IVA is payable (you owe AT) — pay it',
              'If there is a credit (AT owes you) — receive the refund within 30-60 days'
            ]}
          ]},
          { id: 'c4', title: '4. Final IRS', content: [
            { kind: 'checklist', items: [
              'In the IRS return (submitted April-June of the following year) — Anexo B must still be completed',
              'Calculate tax on all turnover for the year of cessação',
              'Under regime simplificado, the taxable base is calculated using the CIRS art. 31 coefficient: often 75% for professional services, but other income has different coefficients',
              'Retenção na fonte (client withholdings) — credited against the tax',
              'If the amount is negative — refund'
            ]}
          ]},
          { id: 'c5', title: '5. Segurança Social', content: [
            { kind: 'checklist', items: [
              'They automatically receive notification from AT within 10 days',
              'BUT: if you had carência (12-month exemption) and did not pay contributions — in the long term it is better to confirm in Segurança Social Direta',
              'TI contributions are calculated via the quarterly declaration: relevant income is usually 70% of services or 20% of sales/production/hotel/restaurant income for the previous quarter, TI rate 21.4%. After cessação, check the last quarterly declaration in Segurança Social Direta',
              'The deadline for paying SS contributions is usually from the 10th to the 20th day of the following month',
              '**After cessação**: contributions are no longer charged; accumulated contribution record remains (for a future pension)'
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
          'Frequent openings/closures without a real reason may raise questions with AT/SS, so keep evidence of actual activity and the reasons for cessação/reabertura',
          'In practice, it is better to keep a noticeable interval between closure and reopening, unless it is a forced measure',
          'A new opening — like a completely new registration: again 12 months of carência exemption from Segurança Social (if you did not work through recibos verdes in the previous 3 years)'
        ]}
      ]
    },
    {
      id: 'company-closure',
      title: '🏢 Closing a legal entity (Lda, Unipessoal, SA)',
      content: [
        { kind: 'paragraph', text: 'Much more complicated and expensive than self-employment. The process is dissolução + liquidação.' },
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Stage 1: Dissolução (dissolution)', content: [
            { kind: 'checklist', items: [
              'Sócios (founders/shareholders) make a decision at the Assembleia Geral',
              'Submission to the Conservatória Comercial — registration of dissolução',
              'Publication in the Boletim Oficial',
              'Cost: €100-200'
            ]}
          ]},
          { id: 'l2', title: 'Stage 2: Liquidação (liquidation)', content: [
            { kind: 'checklist', items: [
              'Appointment of a liquidatário (often — the last managing director/administrator)',
              'Inventory of assets and liabilities',
              'Sale of assets, payment of debts',
              'Final balance sheet',
              'Distribution among sócios according to shares',
              'Process: 6-18 months',
              'Cost: depends heavily on complexity. Simple unipessoal — €500-1,000. Medium Lda — €1,500-5,000. SA with assets — €5,000-20,000+'
            ]}
          ]},
          { id: 'l3', title: 'Stage 3: Registo encerramento', content: [
            { kind: 'checklist', items: [
              'Final registration at the Conservatória Comercial',
              'Submission of final reporting in IES (Informação Empresarial Simplificada)',
              'Notification to Segurança Social of cessation',
              'Keep accounting documents for 5 years (by law)',
              'Certidão de encerramento — the company is officially closed'
            ]}
          ]},
          { id: 'l4', title: 'Simplified dissolução (if there are no assets / debts)', content: [
            { kind: 'checklist', items: [
              '“Empresa na Hora” dissolução — in one day at the Conservatória',
              'Only for simple cases: no outstanding debts, no debts to AT, no assets',
              'Cost: ~€360',
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
          'Bankruptcy → through the court',
          'Accelerated procedure through PER (Processo Especial de Revitalização), if there is still a chance of survival',
          'PEVE (Processo Especial de Viabilização) — for microbusinesses',
          'Full insolvência with liquidation — 1-3 years, the court appoints an administrador',
          'For sócios: personal liability only if there is subsidiary liability, fraud or personal guarantees',
          'Unipessoal Lda — the sócio is protected (limited liability)',
          'ENI (Empresário em Nome Individual, = self-employment in the commercial sense) — full personal liability',
          'Cost: court fees €1,000-5,000, lawyer €2,000-10,000'
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
              'All clients have paid or receipts are marked as written off',
              'All suppliers have been paid',
              'Final IVA submitted',
              'Final IRS/IRC submitted',
              'Final IES (for Lda) submitted',
              'Segurança Social contributions paid',
              'Close the company bank account (or transfer to a personal one)',
              'Cancel subscriptions (software, domains, hosting)'
            ]}
          ]},
          { id: 'f2', title: 'Legal', content: [
            { kind: 'checklist', items: [
              'Notify the regulator if the activity was regulated (for example, real estate — APEMIP; insurance — ASF)',
              'Cancel registered trademarks (or transfer them)',
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
    { label: 'Cessação atividade (self-employment)', amountEUR: 0, note: 'free via Portal das Finanças' },
    { label: 'Final declarations (if through an accountant)', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Simplified dissolução (Empresa na Hora)', amountEUR: 360 },
    { label: 'Closing a Unipessoal (with liquidation)', amountEURMin: 500, amountEURMax: 1000 },
    { label: 'Medium Lda (full process)', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'Insolvência (bankruptcy) through the court', amountEURMin: 1000, amountEURMax: 5000 }
  ],
  sources: [
    { title: 'Portal das Finanças — Cessação Atividade', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Conservatória Comercial', url: 'https://justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Insolvency Code (CIRE)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2004-34453275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 365
}
