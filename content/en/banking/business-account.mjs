export default {
  editorialVoice: 'hackportugal',
  id: 'business-account',
  categoryId: 'banking',
  title: 'Open a business account — for sole traders and companies',
  tldr: 'For Recibo Verde under regime simplificado, a separate business account is usually not mandatory, but it is highly recommended. A separate account is mandatory for IRS with contabilidade organizada (usually with turnover > €200,000/year or by choice) and for companies (Lda, SA)\.\n\nBanks Millennium BCP, Santander Totta, Caixa Geral, BPI support sole traders. For Lda — the same + ActivoBank Empresas (online).\n\nCost: €5–15/month for maintenance + transfer fees.',
  tags: ['bank', 'business', 'sole trader', 'lda', 'recibos verdes', 'company'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: '⚖️ When a business account is mandatory',
      content: [
        { kind: 'substeps', items: [
          { id: 'ind', title: 'Sole trader (Recibo Verde)', content: [
            { kind: 'checklist', items: [
              '🟢 Under regime simplificado, a separate account is not legally mandatory; it is recommended to separate personal and professional transactions for proof of expenses and cash-flow control',
              '🟡 At any turnover, an accountant will advise a separate account for convenience, but the legal obligation arises with contabilidade organizada',
              '🔴 If a sole trader moves to contabilidade organizada (usually when exceeding €200,000/year under CIRS art. 28 or by voluntary choice) — an account used for business activity transactions is needed. Some professions may have additional rules (for example, a client account for lawyers)',
              '⚠️ A sole trader account may be an ordinary personal account opened in your name'
            ]}
          ]},
          { id: 'lda', title: 'Sociedade por Quotas / Lda (limited liability company)', content: [
            { kind: 'checklist', items: [
              '✅ A corporate account is needed after company registration — a separate account in the name of the Lda',
              '💰 The minimum quota is €1 per shareholder; a sociedade unipessoal por quotas can have capital social of €1. Banks may prefer higher capital/a first deposit, but this is the bank’s commercial/KYC policy, not the law',
              '🆔 Capital social is stated at registration; payment can usually be deferred within the deadlines provided by law/articles of association — prior blocking of capital before registo comercial is not required',
              '📋 For registering an Lda, a bank account is usually not needed in advance — Empresa na Hora/IRN allows a company to be registered without an account; the account is opened after obtaining the NIPC/certidão permanente',
              '⚠️ Do not mix company money and personal funds. Any transfers between the Lda and sócios/gerentes must have a legal basis — salary, dividends, suprimentos/loan, reimbursement — and taxation depends on how the transaction is classified'
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
              '🏛️ **Millennium BCP** — the most popular for business, has a manager for sole traders',
              '🏛️ **Santander Empresas** — good for import/export (international transfers)',
              '🏛️ **Caixa Geral de Depósitos** (CGD) — state bank, slower but more reliable',
              '🏛️ **BPI Empresas** — a competitive option for medium-sized Lda',
              '💰 Maintenance: €5–15/month; packages with transfers — €10–25/month',
              '⏱️ Opening: 1–2 weeks, an in-person visit is required'
            ]}
          ]},
          { id: 'b2', title: 'Online banks', content: [
            { kind: 'checklist', items: [
              '💻 **ActivoBank Empresas** — a Millennium subsidiary, focused on online servicing',
              '💻 **Caixadirecta Empresas** (CGD) — the online channel of the state bank',
              '🌐 **Wise Business** — useful as an additional account for international payments. For day-to-day Lda operations, it is often more practical to have a PT IBAN at a Portuguese bank; formally, refusing to accept an EU SEPA IBAN only because of the IBAN country may be IBAN discrimination, but integrations with AT/SS/fornecedores can create friction',
              '🌐 **Revolut Business** — may issue an LT or PT IBAN depending on migration; for local operations a PT account is more convenient',
              '⚠️ The law does not require an Lda to have a specifically PT IBAN; a PT IBAN is practically more convenient for AT, SS, salaries and counterparties'
            ]}
          ]},
          { id: 'b3', title: 'Specialist banks', content: [
            { kind: 'checklist', items: [
              '🏗️ **Banco BIC** — for the construction sector',
              '🌾 **Crédito Agrícola** — for farming / agriculture',
              '🛒 **Banco BAI** — Portuguese-Angolan bank, for trade with PALOP countries',
              '🇪🇺 **EuroBic / Bankinter** — premium tariffs for affluent clients'
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
              '💰 First deposit: €0–50 (in some banks)'
            ]}
          ]},
          { id: 'd2', title: 'For Lda (limited liability company)', content: [
            { kind: 'checklist', items: [
              '📄 **Pacto Social** — the Lda articles of association',
              '📜 **Certidão Permanente** — registration extract (available online at portalcidadao.pt for €25)',
              '🆔 Cartão de Cidadão + NIF of founders and managers',
              '🔢 Company NIF',
              '💰 Share capital (capital social) to be blocked in the account',
              '📃 **Beneficial Owners (RCBE)** — mandatory declaration of beneficial owners',
              '🏢 Proof of registered office address (Comprovativo de sede): office/virtual office address',
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
              '🏛️ **Step 1**: Register the Lda through “Empresa na Hora” (60 minutes, usually ~€360) or Conservatória (fees according to tabela emolumentar IRN)',
              '🆔 **Step 2**: Obtain the company NIPC automatically after registration + certidão permanente',
              '📃 **Step 3**: Submit the RCBE declaration online at IRN — usually within 30 days after registration',
              '📩 **Step 4**: Submit the declaração de início de atividade to AT',
              '🏦 **Step 5**: Open the company bank account (1–2 hour meeting)',
              '💰 **Step 6**: Pay in the capital social/first deposit according to the articles of association and payment deadlines',
              '✅ **Step 7**: Activate online banking',
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
          '💳 **Monthly maintenance**: €5–25 (higher for packages with a manager)',
          '🔁 **SEPA transfer within the EU**: €0.50–2 (Wise is cheaper)',
          '🌐 **International transfer**: €25–50 + 0.5–1% exchange-rate spread',
          '💱 **Currency conversion**: 1–3% spread (up to 5% at traditional banks!)',
          '🏧 **ATM withdrawal**: free at your own bank, €0.50–2 at others',
          '📱 **MB WAY**: free for businesses',
          '📊 **Obtaining Certidão Permanente**: the bank may charge €25–50/year',
          '⚠️ Compare a corporate account and a personal account for a sole trader — for a small sole trader, a personal account is cheaper'
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
          '🔄 You can change banks at any time, but international clients lose their established reputation',
          '🌍 For businesses with foreign clients: Wise Business (additional currencies) + a local Portuguese account for the Lda',
          '⚖️ For regulated professions (lawyer, doctor, engineer): ask about special tariffs',
          '📊 Contabilidade organizada is mandatory for Lda. For recibos verdes — usually only when exceeding €200,000/year or by voluntary choice; before that, regime simplificado, although help from an accountant is often useful (€80–200/month)',
          '🛡️ AT may request a bank statement at any time — keep business transactions separate'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Opening a sole trader account', amountEUR: 0 },
    { label: 'Opening an Lda corporate account', amountEURMin: 0, amountEURMax: 50 },
    { label: 'Monthly maintenance', amountEURMin: 5, amountEURMax: 25 },
    { label: 'Empresa na Hora (Lda registration)', amountEUR: 360 },
    { label: 'Conservatória: Lda registration (classic route)', amountEUR: 220 },
    { label: 'Lda accounting/month', amountEURMin: 80, amountEURMax: 250 }
  ],
  sources: [
    { title: 'Banco de Portugal — Payment account', url: 'https://www.bportugal.pt/page/contas-de-pagamentos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Empresa na Hora', url: 'https://justica.gov.pt/Servicos/Empresas/Empresa-na-Hora', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autoridade Tributária — Início de Atividade', url: 'https://www.portaldasfinancas.gov.pt/at/html/index.htmlindex.html', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
