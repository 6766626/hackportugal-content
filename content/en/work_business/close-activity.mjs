export default {
  editorialVoice: 'hackportugal',
  id: 'close-activity',
  categoryId: 'work_business',
  title: 'Closing atividade (self-employment) and a legal entity in Portugal',
  tldr: 'Closing recibos verdes (cessação de atividade): art. 33 CIVA — via Portal das Finanças free of charge within 15 days after the last issued receipt. Required: submit the final IVA return + Modelo 3 IRS (if there was turnover during the year) + notify Segurança Social. Closing a Unipessoal / Lda is more complex: dissolução + liquidação via Conservatória Comercial (€200-400) + final reporting. The process takes 6-12 months. If there are debts — bankruptcy (insolvência) through the court.',
  tags: ['cessação', 'closing self-employment', 'liquidation', 'legal entity'],
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
              'Receive payments from clients (ideally 30 days before closing)',
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
              'Submit — the process is instant, the certificate arrives within an hour',
              'Allows you to close the activity on any day, including retroactively (but with justification)'
            ]}
          ]},
          { id: 'c3', title: '3. Final IVA', content: [
            { kind: 'checklist', items: [
              'If you were an IVA payer (>15k turnover) — submit the final IVA return',
              'Period: the quarter / month in which the cessação took place',
              'Deadline: by the 20th day of the following month',
              'If IVA is payable (you owe AT) — pay it',
              'If there is a credit (AT owes you) — receive a refund within 30-60 days'
            ]}
          ]},
          { id: 'c4', title: '4. Final IRS', content: [
            { kind: 'checklist', items: [
              'In the IRS return (submitted April-June of the following year) — still complete Anexo B',
              'Calculate tax on all turnover for the year of cessação',
              'If CTC / simplified category — 75% as the tax base',
              'Retenção na fonte (client withholdings) — offset against the tax',
              'If the amount is negative — refund'
            ]}
          ]},
          { id: 'c5', title: '5. Segurança Social', content: [
            { kind: 'checklist', items: [
              'They automatically receive notification from AT within 10 days',
              'BUT: if you had carência (12 months exemption) and did not pay contributions — in the long term it is better to confirm in Segurança Social Direta',
              'Final contribution for the month of cessação: 21.4% of 70% of that month’s turnover',
              'Deadline: the 20th day of the following month',
              '**After cessação**: contributions are no longer charged; accrued contribution record remains (for future pension)'
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
          'But: if you opened and closed the activity in less than 12 months — AT may flag it as suspicious (an attempt to avoid taxes)',
          'It is recommended to keep ≥ 12 months between closing and reopening',
          'A new opening is treated like a completely new registration: another 12 months of carência exemption from Segurança Social (if you have not worked under recibos verdes in the previous 3 years)'
        ]}
      ]
    },
    {
      id: 'company-closure',
      title: '🏢 Closing a legal entity (Lda, Unipessoal, SA)',
      content: [
        { kind: 'paragraph', text: 'Much more complex and expensive than self-employment. The process is dissolução + liquidação.' },
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Stage 1: Dissolução (dissolution)', content: [
            { kind: 'checklist', items: [
              'Sócios (founders/shareholders) approve the decision at the Assembleia Geral',
              'Submission to Conservatória Comercial — registration of dissolução',
              'Publication in Boletim Oficial',
              'Cost: €100-200'
            ]}
          ]},
          { id: 'l2', title: 'Stage 2: Liquidação (liquidation)', content: [
            { kind: 'checklist', items: [
              'Appointment of a liquidatário (often — the last managing administrator)',
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
              'Final registration at Conservatória Comercial',
              'Submission of final reporting in IES (Informação Empresarial Simplificada)',
              'Notification to Segurança Social about cessation',
              'Keep accounting documents for 5 years (by law)',
              'Certidão de encerramento — the company is officially closed'
            ]}
          ]},
          { id: 'l4', title: 'Simplified dissolução (if there are no assets / debts)', content: [
            { kind: 'checklist', items: [
              '“Empresa na Hora” dissolução — in one day at Conservatória',
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
          'Accelerated procedure via PER (Processo Especial de Revitalização), if there are still chances of survival',
          'PEVE (Processo Especial de Viabilização) — for microbusinesses',
          'Full insolvência with liquidation — 1-3 years, the court appoints an administrador',
          'For sócios: personal liability only if there is subsidiary liability, fraud or personal guarantees',
          'Unipessoal Lda — the sócio is protected (limited liability)',
          'ENI (Empresário em Nome Individual, = self-employment in the commercial sense) — full personal liability',
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
              'Close the company bank account (or transfer to personal)',
              'Cancel subscriptions (software, domains, hosting)'
            ]}
          ]},
          { id: 'f2', title: 'Legal', content: [
            { kind: 'checklist', items: [
              'Notify the regulator if the activity was regulated (for example, property — APEMIP; insurance — ASF)',
              'Cancel registered trade marks (or transfer them)',
              'Revoke delegated access in Portal das Finanças for the former accountant',
              'Transfer archive documents (keep for 5 years)',
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
    { label: 'Cessação atividade (self-employment)', amountEUR: 0, note: 'free of charge via Portal das Finanças' },
    { label: 'Final returns (if through an accountant)', amountEURMin: 100, amountEURMax: 300 },
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
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
