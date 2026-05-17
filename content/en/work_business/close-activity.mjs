export default {
  editorialVoice: 'hackportugal',
  id: 'close-activity',
  categoryId: 'work_business',
  title: 'Closing atividade (sole trader) and legal entities in Portugal',
  tldr: 'Closing recibos verdes (cessação de atividade): via Portal das Finanças free of charge. Deadline — usually 30 days from the date activity ceased; late submission may lead to a coima. You need to: submit the final IVA return (if you were under the normal regime) + Modelo 3 IRS (if there was turnover during the year) + notify Segurança Social. Closing a Unipessoal / Lda is more complex: dissolução + liquidação via Conservatória Comercial + final reporting. Process: 6-12 months. If there are debts — bankruptcy (insolvência) through court.',
  tags: ['cessation', 'sole trader closure', 'liquidation', 'company'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'cessacao-atividade',
      title: '👤 Closing a sole trader activity (recibos verdes)',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: '1. Finish active work', content: [
            { kind: 'checklist', items: [
              'Issue the final recibo',
              'Receive payments from clients (ideally 30 days before closure)',
              'Collect all supplier receipts for IVA deduzida',
              'Notify clients that you are ceasing work (email, letter) — this is good practice',
              'Active contracts — terminate or redirect them'
            ]}
          ]},
          { id: 'c2', title: '2. Submit cessação to AT', content: [
            { kind: 'checklist', items: [
              'Portal das Finanças → Serviços → Atividades → Cessação',
              'State the date of the last day of activity',
              'Reason: voluntary (most often selected), trabalho subordinado (if you moved into salaried employment), mudança de país, aposentação',
              'Submit — the process is immediate, and the certificate arrives within an hour',
              'You can state the actual cessation date, including a past date, but if the 30-day deadline has been missed — a coima and a request for evidence from AT are possible'
            ]}
          ]},
          { id: 'c3', title: '3. Final IVA', content: [
            { kind: 'checklist', items: [
              'If you were in the normal IVA regime and submitted periodic IVA declarations — submit the final return for the cessação period. If you were under isenção art. 53 CIVA, periodic IVA is usually not submitted',
              'Period: the quarter / month in which the cessação occurred',
              'Deadline: according to the usual IVA period rules — the return is usually due by the 20th day of the second month after the month/quarter, payment by the 25th (CIVA arts. 27, 41)',
              'If IVA is payable (you owe AT) — pay it',
              'If there is a credit (AT owes you) — receive a refund within 30-60 days'
            ]}
          ]},
          { id: 'c4', title: '4. Final IRS', content: [
            { kind: 'checklist', items: [
              'In the IRS return (submitted April-June of the following year) — Anexo B still needs to be completed',
              'Calculate tax on all turnover for the cessação year',
              'Under regime simplificado, the tax base is calculated using the coefficient in CIRS art. 31: often 75% for professional services, but other income has different coefficients',
              'Retenção na fonte (withholdings by clients) — credited against the tax',
              'If the amount is negative — refund'
            ]}
          ]},
          { id: 'c5', title: '5. Segurança Social', content: [
            { kind: 'checklist', items: [
              'They automatically receive notification from AT within 10 days',
              'BUT: if you had carência (12 months exemption) and did not pay contributions — in the long term it is better to confirm in Segurança Social Direta',
              'TI contributions are calculated via the quarterly declaration: relevant income is usually 70% of services or 20% of sales/production/hotel/restaurant income for the previous quarter, TI rate 21.4%. After cessação, check the final quarterly declaration in Segurança Social Direta',
              'The deadline for paying SS contributions is usually from the 10th to the 20th day of the following month',
              '**After cessação**: contributions are no longer charged; accrued contribution record remains (for a future pension)'
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
          'In practice, it is better to keep a noticeable interval between closure and reopening, unless it is a forced measure',
          'New opening — like a completely new registration: again 12 months carência exemption from Segurança Social (if you have not worked under recibos verdes in the previous 3 years)'
        ]}
      ]
    },
    {
      id: 'company-closure',
      title: '🏢 Closing a legal entity (Lda, Unipessoal, SA)',
      content: [
        { kind: 'paragraph', text: 'Much more complex and expensive than a sole trader activity. The process is dissolução + liquidação.' },
        { kind: 'substeps', items: [
          { id: 'l1', title: 'Stage 1: Dissolução (dissolution)', content: [
            { kind: 'checklist', items: [
              'Sócios (founders/shareholders) make a decision at the Assembleia Geral',
              'Submission to Conservatória Comercial — registration of dissolução',
              'Publication in Boletim Oficial',
              'Cost: €100-200'
            ]}
          ]},
          { id: 'l2', title: 'Stage 2: Liquidação (liquidation)', content: [
            { kind: 'checklist', items: [
              'Appointment of a liquidatário (often — the last managing director)',
              'Inventory of assets and liabilities',
              'Sale of assets, payment of debts',
              'Final balance sheet',
              'Distribution among sócios according to their shares',
              'Process: 6-18 months',
              'Cost: depends heavily on complexity. Simple unipessoal — €500-1,000. Medium Lda — €1,500-5,000. SA with assets — €5,000-20,000+'
            ]}
          ]},
          { id: 'l3', title: 'Stage 3: Registo encerramento', content: [
            { kind: 'checklist', items: [
              'Final registration at Conservatória Comercial',
              'Submission of final reporting in IES (Informação Empresarial Simplificada)',
              'Notification to Segurança Social of cessation',
              'Keep accounting documents for 5 years (by law)',
              'Certidão de encerramento — the company is officially closed'
            ]}
          ]},
          { id: 'l4', title: 'Simplified dissolução (if there are no assets / debts)', content: [
            { kind: 'checklist', items: [
              '“Empresa na Hora” dissolução — in one day at the Conservatória',
              'Only for simple cases: no outstanding debts, debts to AT, or assets',
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
          'Bankruptcy → through court',
          'Fast-track procedure via PER (Processo Especial de Revitalização), if there is still a chance of survival',
          'PEVE (Processo Especial de Viabilização) — for micro-businesses',
          'Full insolvência with liquidation — 1-3 years, the court appoints an administrador',
          'For sócios: personal liability only if there is subsidiary liability, fraud or personal guarantees',
          'Unipessoal Lda — the sócio is protected (limited liability)',
          'ENI (Empresário em Nome Individual, = sole trader in the commercial sense) — full personal liability',
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
              'Cancel registered trade marks (or transfer them)',
              'Revoke delegated access in Portal das Finanças for the former accountant',
              'Transfer archive documents (keep for 5 years)',
              'Notify Chave Móvel Digital / digital certificates — they can be left active'
            ]}
          ]},
          { id: 'f3', title: 'Administrative', content: [
            { kind: 'checklist', items: [
              'Close accounts with shops / suppliers',
              'Close the company mailbox (Gmail / Outlook)',
              'Remove from Google My Business, social networks',
              'Set up domain / email forwarding',
              'Notify the bank (not for a personal account, but if there was a business account)',
              'Cancel business insurance'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Cessação atividade (sole trader)', amountEUR: 0, note: 'free of charge via Portal das Finanças' },
    { label: 'Final returns (if through an accountant)', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Simplified dissolução (Empresa na Hora)', amountEUR: 360 },
    { label: 'Closing a Unipessoal (with liquidação)', amountEURMin: 500, amountEURMax: 1000 },
    { label: 'Medium Lda (full process)', amountEURMin: 1500, amountEURMax: 5000 },
    { label: 'Insolvência (bankruptcy) through court', amountEURMin: 1000, amountEURMax: 5000 }
  ],
  sources: [
    { title: 'Portal das Finanças — Cessação Atividade', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Conservatória Comercial', url: 'https://justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Insolvency Code (CIRE)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2004-34453275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
