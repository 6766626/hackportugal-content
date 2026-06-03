export default {
  editorialVoice: 'hackportugal',
  id: 'business-account',
  categoryId: 'banking',
  title: 'Open a business account — for sole traders and companies',
  tldr: 'For Recibo Verde under the regime simplificado, a separate business account is usually not mandatory, but it is strongly recommended. A separate account is mandatory for IRS with contabilidade organizada (usually with turnover > €200,000/year or by choice) and for companies (Lda, SA)\.\n\nMillennium BCP, Santander Totta, Caixa Geral, BPI support sole traders. For Lda — the same + ActivoBank Empresas (online).\n\nCost: €5–15/month for maintenance + transfer fees.',
  tags: ['bank', 'business', 'sole trader', 'lda', 'recibos verdes', 'empresa'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: '⚖️ When a business account is mandatory',
      content: [
        { kind: 'substeps', items: [
          { id: 'ind', title: 'Sole trader (Recibo Verde)', content: [
            { kind: 'checklist', items: [
              '🟢 Under the regime simplificado, a separate account is not legally mandatory; it is recommended to separate personal and professional transactions for proof of expenses and cash-flow control',
              '🟡 At any turnover level, an accountant will advise a separate account for convenience, but the legal obligation arises with contabilidade organizada',
              '🔴 If the sole trader moves to contabilidade organizada (usually when exceeding €200,000/year under CIRS art. 28 or by voluntary choice) — an account used for business activity transactions is needed. Some professions may have additional rules (for example, a client account for lawyers)',
              '⚠️ A sole trader account may be a normal personal account opened in your name'
            ]}
          ]},
          { id: 'lda', title: 'Sociedade por Quotas / Lda (limited company)', content: [
            { kind: 'checklist', items: [
              '✅ A corporate account is needed after company registration — a separate account in the name of the Lda',
              '💰 The minimum quota is €1 per member; in a sociedade unipessoal por quotas, capital social may be €1. Banks may prefer higher capital/an initial deposit, but this is the bank’s commercial/KYC policy, not the law',
              '🆔 Capital social is stated at registration; payment can usually be deferred within the deadlines set by law/the articles of association — prior blocking of capital before registo comercial is not required',
              '📋 For registering an Lda, a bank account is usually not needed in advance — Empresa na Hora/IRN allows you to register a company without an account; the account is opened after obtaining the NIPC/certidão permanente',
              '⚠️ Do not mix company money and personal funds. Any transfers between an Lda and sócios/gerentes must have a legal basis — salary, dividends, suprimentos/loan, reimbursement — and taxation depends on how the transaction is classified'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'choose-bank',
      title: '🏦 Choosing a bank',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: 'Traditional banks', content: [
            { kind: 'checklist', items: [
              '🏛️ Millennium BCP — the most popular for business, with a manager available for sole traders',
              '🏛️ Santander Empresas — good for import/export (international transfers)',
              '🏛️ Caixa Geral de Depósitos (CGD) — state-owned bank, slower but more reliable',
              '🏛️ BPI Empresas — a competitive option for medium-sized Lda',
              '💰 Maintenance: €5–15/month; packages with transfers — €10–25/month',
              '⏱️ Opening: 1–2 weeks, an in-person visit is required'
            ]}
          ]},
          { id: 'b2', title: 'Online banks', content: [
            { kind: 'checklist', items: [
              '💻 ActivoBank Empresas — a Millennium subsidiary, focused on online service',
              '💻 Caixadirecta Empresas (CGD) — the online channel of the state-owned bank',
              '🌐 Wise Business — useful as an additional account for international payments. For day-to-day Lda operations, it is often more practical to have a PT IBAN at a Portuguese bank; formally, refusing to accept an EU SEPA IBAN solely because of the IBAN country may be IBAN discrimination, but integrations with AT/SS/fornecedores can create friction',
              '🌐 Revolut Business — may issue an LT or PT IBAN depending on migration; for local operations a PT account is more convenient',
              '⚠️ The law does not require an Lda to have specifically a PT IBAN; a PT IBAN is practically more convenient for AT, SS, salaries and counterparties'
            ]}
          ]},
          { id: 'b3', title: 'Specialist banks', content: [
            { kind: 'checklist', items: [
              '🏗️ Banco BIC — for the construction sector',
              '🌾 Crédito Agrícola — for farming / agriculture',
              '🛒 Banco BAI — a Portuguese-Angolan bank, for trade with PALOP countries',
              '🇪🇺 EuroBic / Bankinter — premium tariffs for affluent clients'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'documents',
      title: '📋 Documents for opening',
      content: [
        { kind: 'substeps', items: [
          { id: 'd1', title: 'For sole traders', content: [
            { kind: 'checklist', items: [
              '🪪 Cartão de Cidadão / residence permit (original)',
              '🔢 NIF',
              '🛡️ NISS (optional, but desirable)',
              '📄 Início de Atividade (AT form — confirmation of activity)',
              '🏠 Proof of address (Comprovativo de morada): utility bill from the last 3 months',
              '💰 Initial deposit: €0–50 (in some banks)'
            ]}
          ]},
          { id: 'd2', title: 'For Lda (limited company)', content: [
            { kind: 'checklist', items: [
              '📄 Pacto Social — Lda articles of association',
              '📜 Certidão Permanente — registration extract (available online at empresaonline.justica.gov.pt for €25 for one year)',
              '🆔 Cartão de Cidadão + NIF of founders and managers',
              '🔢 Company NIF',
              '💰 Share capital (capital social) to be blocked in the account',
              '📃 Beneficial Owners (RCBE) — mandatory declaration of beneficial owners',
              '🏢 Proof of registered office (Comprovativo de sede): office/virtual office address',
              '⚠️ For foreign founders — apostilled documents from the country'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'process',
      title: '⏱️ Opening process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'For sole traders — simple', content: [
            { kind: 'checklist', items: [
              '📅 Book an appointment at the bank (online or by phone)',
              '🏛️ Attend with documents — 30–45 minute meeting',
              '✍️ Sign the contract',
              '💳 Receive a debit card (delivery by post in 7–10 days)',
              '🔐 Activate online banking',
              '⏱️ Full process: 1–2 weeks'
            ]}
          ]},
          { id: 'p2', title: 'For Lda — longer', content: [
            { kind: 'checklist', items: [
              '🏛️ Step 1: Register the Lda via “Empresa na Hora” (60 minutes, usually ~€360) or Conservatória (fees according to the tabela emolumentar IRN)',
              '🆔 Step 2: Obtain the company NIPC automatically after registration + certidão permanente',
              '📃 Step 3: Submit the RCBE declaration online to IRN — usually within 30 days after registration',
              '📩 Step 4: Submit the declaração de início de atividade to AT',
              '🏦 Step 5: Open the company account at the bank (1–2 hour meeting)',
              '💰 Step 6: Pay in the capital social/initial deposit according to the articles of association and payment deadlines',
              '✅ Step 7: Activate online banking',
              '⏱️ Full process: 2–4 weeks'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'fees',
      title: '💰 Fees and maintenance',
      content: [
        { kind: 'checklist', items: [
          '💳 Monthly maintenance: €5–25 (higher for packages with a manager)',
          '🔁 SEPA transfer within the EU: €0.50–2 (Wise is cheaper)',
          '🌐 International transfer: €25–50 + 0.5–1% exchange-rate spread',
          '💱 Currency conversion: 1–3% spread (up to 5% at traditional banks!)',
          '🏧 ATM withdrawal: free at your own bank, €0.50–2 at others',
          '📱 MB WAY: free for businesses',
          '📊 Obtaining Certidão Permanente: the bank may charge €25–50/year',
          '⚠️ Compare a corporate account and a personal account for sole traders — for a small sole trader, a personal account is cheaper'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '🤝 Go to the meeting with an accountant — they will help choose the right package',
          '💰 Negotiate fees — especially for businesses > €50,000/year',
          '📋 Ask for tariffs in writing before signing',
          '🔄 You can change banks at any time, but international clients lose the track record they have built up',
          '🌍 For businesses with foreign clients: Wise Business (additional currencies) + a local Portuguese account for the Lda',
          '⚖️ For regulated professions (lawyer, doctor, engineer): ask about special tariffs',
          '📊 Contabilidade organizada is mandatory for Lda. For recibos verdes — usually only when exceeding €200,000/year or by voluntary choice; before that, regime simplificado applies, although an accountant’s help is often useful (€80–200/month)',
          '🛡️ AT may ask for a bank statement at any time — keep business transactions separate'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Opening a sole trader account', amountEUR: 0 },
    { label: 'Opening an Lda corporate account', amountEURMin: 0, amountEURMax: 50 },
    { label: 'Monthly maintenance', amountEURMin: 5, amountEURMax: 25 },
    { label: 'Empresa na Hora (Lda registration)', amountEUR: 360 },
    { label: 'Conservatória: Lda registration (traditional route)', amountEUR: 220 },
    { label: 'Lda accounting/month', amountEURMin: 80, amountEURMax: 250 }
  ],
  sources: [
    { title: 'Banco de Portugal — Payment account', url: 'https://www.bportugal.pt/page/contas-de-pagamentos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Empresa na Hora', url: 'https://justica.gov.pt/Servicos/Empresas/Empresa-na-Hora', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autoridade Tributária — Início de Atividade', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
