export default {
  editorialVoice: 'hackportugal',
  id: 'accounting-contadores',
  categoryId: 'work_business',
  title: 'How to find an accountant (contabilista) in Portugal',
  tldr: 'For legal entities (Lda, SA) and for sole traders/freelancers on contabilidade organizada, a Contabilista Certificado (OCC member) is mandatory. For recibos verdes under the regime simplificado, an accountant is not mandatory even if you have become subject to IVA, but is often useful.\n\nCost: €50-150/month for a sole trader, €200-600/month for a small legal entity. Where to look: OCC.pt (directory), LinkedIn, Russian- and English-speaking specialists in expat groups.',
  tags: ['contabilista', 'accountant', 'toc', 'sole trader'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-need',
      title: '❓ When an accountant is mandatory',
      content: [
        { kind: 'substeps', items: [
          { id: 'w1', title: 'Recibos verdes (sole trader)', content: [
            { kind: 'checklist', items: [
              '< €15,000 turnover/year — an accountant is not mandatory; you can do it yourself via Portal das Finanças (IRS simplificado)',
              '> €15,000 turnover — you usually lose the isenção de IVA (CIVA art. 53) and must submit IVA; an accountant is not mandatory if you remain in the regime simplificado, but can be useful',
              'Contabilidade organizada is mandatory when leaving the regime simplificado (usually after exceeding €200,000 in two consecutive tax periods under CIRS art. 28) or by voluntary choice — in that case you need a Contabilista Certificado',
              'With the IFICI regime — people often hire one even with low turnover for complex returns'
            ]}
          ]},
          { id: 'w2', title: 'Legal entities', content: [
            { kind: 'checklist', items: [
              'All Lda, Unipessoal Lda and SA generally must have a Contabilista Certificado, a member of the OCC. “TOC” is the old colloquial name',
              'Important: IES (Informação Empresarial Simplificada) — filed annually',
              'Comunicação de faturas to AT — usually monthly, by the set deadline, via e-fatura/SAF-T or certified invoicing software',
              'An auditor/ROC is usually not needed for a small Lda. For an Lda without a conselho fiscal, the obligation arises when exceeding 2 of 3 thresholds: total do balanço €1.5 million, vendas líquidas €3 million, average number of employees 50. For SA and regulated sectors the rules are stricter'
            ]}
          ]},
          { id: 'w3', title: 'When one is not needed', content: [
            { kind: 'checklist', items: [
              'Employee under an employment contract — the employer pays taxes for you',
              'Ordinary long-term rental as an individual — Anexo F in IRS; a contabilista certificado is usually not mandatory regardless of the amount. For Alojamento Local (AL) or a rental business, Category B/IVA may apply',
              'Freelancer < €15k — simplified regime via Portal on your own',
              'Investment income without active activity — Anexo G, E in IRS'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'where-find',
      title: '🔍 Where to look',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Official directory (OCC)', content: [
            { kind: 'checklist', items: [
              'Ordem dos Contabilistas Certificados — occ.pt',
              '“Encontrar Contabilista” section — search by city, specialisation',
              'Check the registration of everyone you speak to — do not work with unregistered people',
              'Nuance: the government requires TOCs to report all their clients — if an accountant is not registered, they are breaking the law and their signatures do not work'
            ]}
          ]},
          { id: 'f2', title: 'Expat communities', content: [
            { kind: 'checklist', items: [
              'Facebook groups: "Portugal Americans", "Expats in Lisbon", "Russian speakers in Portugal" — ask for recommendations',
              'Telegram: @portugalpages — directory; @lisbon_chat — accountants are discussed from time to time',
              'LinkedIn: search "TOC English-speaking Portugal" — there is a subcategory for specialists working with expats',
              'Reddit: r/Portugal, r/portugalexpats — the recommendations thread is updated regularly',
              'Coworking spaces: often have partner accountants with discounts for members (Avila Spaces, Cowork Central)'
            ]}
          ]},
          { id: 'f3', title: 'Specialist firms', content: [
            { kind: 'checklist', items: [
              'For IFICI / NHR: large firms know the nuances — PwC, KPMG, Deloitte (expensive: €1,500-5,000/year)',
              'With a digital approach: JustAccounts, Cegoc, Gurunima — online accounting with support in English, €50-150/month',
              'International brands: Berkshire Accounting, PortugalClue, NHRPortugal',
              'Local firms: every city has them — ask in your residential complex'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'prices',
      title: '💰 How much it costs',
      content: [
        { kind: 'checklist', items: [
          '🎯 Simple recibos verdes (< €15k turnover): not mandatory, but for help with IRS — €100-200 one-off',
          '🎯 Recibos verdes with IVA (€15-75k): €50-150/month or quarterly; in the regime simplificado IVA returns are usually quarterly (monthly — for turnover above the CIVA threshold of €650,000)',
          '🎯 Recibos verdes high turnover (€75k+): €100-200/month + SAF-T',
          '🏢 Unipessoal Lda (small legal entity): €150-300/month',
          '🏢 SA / large Lda: €300-800/month + auditor',
          '➕ Separately: annual IES report — €100-300; consultations €50-100/hour',
          '🌐 English surcharge: +30-50% on local prices',
          '💳 Payment: usually monthly direct debit or bank transfer, some quarterly'
        ]}
      ]
    },
    {
      id: 'checklist',
      title: '✅ Checklist: what they should do',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Monthly / periodically', content: [
            { kind: 'checklist', items: [
              'IVA returns (quarter / month) — usually by the 20th day of the second month after the period, payment by the 25th (CIVA art. 41)',
              'Segurança Social reports — if you have employees',
              'Retenção na fonte — withholdings from sole-trader contractors, suppliers',
              'SAF-T — for high turnover'
            ]}
          ]},
          { id: 'c2', title: 'Annually', content: [
            { kind: 'checklist', items: [
              'IRS (individuals / sole traders) — filing April-June',
              'Modelo 22 (IRC for companies) — filing by 31 May',
              'IES (information return) — by 15 July',
              'Dividend / profit distribution declaration',
              'Active status (atividades) — update if CAE / address has changed'
            ]}
          ]},
          { id: 'c3', title: 'On request', content: [
            { kind: 'checklist', items: [
              'Registration of a new atividade with AT',
              'Closure of atividade (cessação)',
              'Filing applications with AT (dispensas, reclamações)',
              'Responding to notificações AT (audits, requests)',
              'Help with an IFICI or NHR application',
              'Advice on tax optimisation'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'red-flags',
      title: '🚩 What to watch out for',
      content: [
        { kind: 'checklist', items: [
          '✅ Registration with OCC — mandatory. The accountant must be a member of the Ordem',
          '✅ Written contract — scope of work, deadlines and cost are described',
          '✅ Monthly reports — good accountants send a summary every month',
          '✅ Access to Portal AT — through your CMD / CC, not through their account',
          '✅ English or Russian — if you do not speak Portuguese, look for a bilingual specialist',
          '❌ “We will optimise it, you will not regret it” without details — red flag, potential illegal scheme',
          '❌ No OCC registration or cancelled registration — they cannot sign, your returns will be rejected',
          '❌ Does not reply for weeks — change accountant',
          '❌ Demands a copy of your CMD PIN — no, never. You always confirm yourself',
          '❌ “I will not tell AT about your status” — you are responsible to AT; the accountant is a helper, but the responsibility is yours'
        ]}
      ]
    },
    {
      id: 'change',
      title: '🔄 How to change accountant',
      content: [
        { kind: 'checklist', items: [
          '1. Find a new one — through recommendations or the OCC directory',
          '2. Notify the old one in writing that you are ending the services (usually email is enough)',
          '3. Request document handover — all your returns, contracts with AT for 4+ years',
          '4. The new accountant registers as your TOC on Portal AT (through you with CMD)',
          '5. Change access in Portal — remove the old accountant',
          '6. Check the new accountant’s first month of work — to ensure a clean transition',
          '⚠️ Changing mid-year is possible, but more difficult (the new accountant must accept your historical reporting)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Accountant for sole trader without IVA', amountEURMin: 0, amountEURMax: 200, note: '€/year' },
    { label: 'Accountant for sole trader with IVA', amountEURMin: 50, amountEURMax: 150, note: '€/month' },
    { label: 'Unipessoal Lda (small legal entity)', amountEURMin: 150, amountEURMax: 300, note: '€/month' },
    { label: 'English/Russian surcharge', amountEUR: 0, note: '+30-50%' },
    { label: 'Annual IES report (separately)', amountEURMin: 100, amountEURMax: 300 }
  ],
  sources: [
    { title: 'Ordem dos Contabilistas Certificados (OCC)', url: 'https://www.occ.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças — declarative obligations', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
