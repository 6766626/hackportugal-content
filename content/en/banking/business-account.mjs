export default {
  editorialVoice: 'hackportugal',
  id: 'business-account',
  categoryId: 'banking',
  title: 'Open a business account — for sole traders and companies',
  tldr: 'A business account is mandatory for Recibo Verde (sole trader) from turnover of €25,000/year and always for Lda (limited company). Millennium BCP, Santander Totta, Caixa Geral and BPI support sole traders. For Lda — the same + ActivoBank Empresas (online). You need: NIF + Início de Atividade or Lda registration + share capital (capital social). Cost: €5–15/month for maintenance + transfer fees. Important: do not confuse a sole trader account (a personal account may be used) with the mandatory corporate account for an Lda.',
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
              '🟢 Up to €25,000/year turnover: a personal account is sufficient, but separating business transactions is recommended for accounting',
              '🟡 From €25,000/year: the tax authority (AT) recommends a separate account',
              '🔴 From €200,000/year or for regulated professions (lawyer, doctor, notary): mandatory',
              '⚠️ A sole trader account may be an ordinary personal account in your name. Separate accounting is not required unless AT requests it'
            ]}
          ]},
          { id: 'lda', title: 'Sociedade por Quotas / Lda (limited company)', content: [
            { kind: 'checklist', items: [
              '✅ A corporate account is always mandatory — a separate account in the company’s name',
              '💰 Minimum share capital (capital social): €1 (but banks often require ≥ €1,000 to open one)',
              '🆔 Share capital (capital social) is blocked in the account until commercial registration',
              '📋 Without a business account, an Lda cannot be registered at the Conservatória do Registo Comercial',
              '⚠️ You cannot mix it with personal money — this is considered a withdrawal of funds (levantamento de fundos) and is subject to IRS'
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
              '🏛️ **Millennium BCP** — the most popular for business, with a manager for sole traders',
              '🏛️ **Santander Empresas** — good for import/export (international transfers)',
              '🏛️ **Caixa Geral de Depósitos** (CGD) — state-owned bank, slower but more reliable',
              '🏛️ **BPI Empresas** — a competitive option for medium-sized Lda',
              '💰 Maintenance: €5–15/month; packages with transfers — €10–25/month',
              '⏱️ Opening: 1–2 weeks, in-person visit required'
            ]}
          ]},
          { id: 'b2', title: 'Online banks', content: [
            { kind: 'checklist', items: [
              '💻 **ActivoBank Empresas** — Millennium subsidiary bank, focused on online service',
              '💻 **Caixadirecta Empresas** (CGD) — online channel of the state-owned bank',
              '🌐 **Wise Business** — for international payments, but without a Portuguese IBAN; not suitable for Lda',
              '🌐 **Revolut Business** — works partially, Lithuanian IBAN; there may be issues with transfers within Portugal',
              '⚠️ For an Lda you need a Portuguese IBAN — some fintech services are not suitable'
            ]}
          ]},
          { id: 'b3', title: 'Specialised banks', content: [
            { kind: 'checklist', items: [
              '🏗️ **Banco BIC** — for the construction sector',
              '🌾 **Crédito Agrícola** — for farming / agriculture',
              '🛒 **Banco BAI** — Portuguese-Angolan bank, for trade with PALOP countries',
              '🇪🇺 **EuroBic / Bankinter** — premium tariffs for wealthy clients'
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
              '🛡️ NISS (optional, but recommended)',
              '📄 Início de Atividade (AT form — confirmation of activity)',
              '🏠 Proof of address (Comprovativo de morada): utility bill from the last 3 months',
              '💰 Initial deposit: €0–50 (in some banks)'
            ]}
          ]},
          { id: 'd2', title: 'For Lda (limited company)', content: [
            { kind: 'checklist', items: [
              '📄 **Pacto Social** — Lda articles of association',
              '📜 **Certidão Permanente** — registration extract (available online on portalcidadao.pt for €25)',
              '🆔 Cartão de Cidadão + NIF of founders and managers',
              '🔢 Company NIF',
              '💰 Share capital (capital social) to be blocked in the account',
              '📃 **Beneficial Owners (RCBE)** — mandatory declaration of beneficial owners',
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
              '🏛️ **Step 1**: Register the Lda through “Empresa na Hora” (60 minutes, €360) or Conservatória (5–10 days, €220)',
              '🆔 **Step 2**: Obtain the company NIF automatically after registration',
              '📃 **Step 3**: RCBE declaration (online at IRN, 5 days)',
              '🏦 **Step 4**: Book the bank appointment — 1–2 hour meeting',
              '💰 **Step 5**: Block the share capital (capital social)',
              '📩 **Step 6**: Register with AT (company Início de Atividade)',
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
          '💱 **Currency conversion**: 1–3% spread (up to 5% in traditional banks!)',
          '🏧 **ATM withdrawal**: free at your own bank, €0.50–2 at others',
          '📱 **MB WAY**: free for business',
          '📊 **Obtaining Certidão Permanente**: the bank may charge €25–50/year',
          '⚠️ Compare a corporate account with a personal account for a sole trader — for a small sole trader, a personal account is cheaper'
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
          '🔄 You can change banks at any time, but international clients lose the reputation they have built up',
          '🌍 For businesses with foreign clients: Wise Business (additional currencies) + local Portuguese account for Lda',
          '⚖️ For regulated professions (lawyer, doctor, engineer): ask about special tariffs',
          '📊 Accounting is mandatory for Lda and for Recibo Verde >25k — budget €80–200/month',
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
    { label: 'Conservatória: Lda registration (standard route)', amountEUR: 220 },
    { label: 'Lda accounting/month', amountEURMin: 80, amountEURMax: 250 }
  ],
  sources: [
    { title: 'Banco de Portugal — Payment accounts', url: 'https://www.bportugal.pt/page/contas-de-pagamentos', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Empresa na Hora', url: 'https://justica.gov.pt/Servicos/Empresas/Empresa-na-Hora', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Autoridade Tributária — Início de Atividade', url: 'https://www.portaldasfinancas.gov.pt/at/html/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
