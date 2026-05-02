export default {
  editorialVoice: 'hackportugal',
  id: 'accounting-contadores',
  categoryId: 'work_business',
  title: 'How to find an accountant (contabilista) in Portugal',
  tldr: 'For recibos verdes with turnover >€15,000/year (IVA payers) and all legal entities, a certified accountant (TOC / OCC) is legally required. Cost: €50-150/month for sole traders, €200-600/month for a small legal entity. Where to search: OCC.pt (directory), LinkedIn, Russian- and English-speaking specialists in expat Facebook groups. What they should do: IRS, IVA, Segurança Social, SAF-T, annual returns, contact with AT. It is recommended to switch if there have been > 3 delays or there is a lack of transparency.',
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
              '< €15,000 turnover/year — **not mandatory**, you can do it yourself via Portal das Finanças (IRS simplificado)',
              '> €15,000 turnover — IVA is mandatory → **an accountant is legally required**',
              '> €200,000 turnover — contabilidade organizada → accountant always required',
              'With the IFICI regime, people often hire one even with low turnover for complex returns'
            ]}
          ]},
          { id: 'w2', title: 'Legal entities', content: [
            { kind: 'checklist', items: [
              '**All** Lda, SA, Unipessoal — **always** required to have a TOC (Técnico Oficial de Contas) or OCC member',
              'Important: IES (Informação Empresarial Simplificada) — filed annually',
              'SAF-T (Standard Audit File for Tax) — monthly to AT',
              'Annual audit — for companies with > €500k turnover / > 25 employees'
            ]}
          ]},
          { id: 'w3', title: 'When you do not need one', content: [
            { kind: 'checklist', items: [
              'Employee under an employment contract — the employer pays taxes for you',
              'Property as an individual (rent < €7,000/year) — Anexo F in IRS',
              'Freelancer < €15k — simplified regime via Portal on your own',
              'Investment income with no active business activity — Anexo G, E in IRS'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'where-find',
      title: '🔍 Where to search',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'Official directory (OCC)', content: [
            { kind: 'checklist', items: [
              '**Ordem dos Contabilistas Certificados** — occ.pt',
              '“Encontrar Contabilista” section — search by city and specialisation',
              'Check the registration of everyone you speak to — **do not work with unregistered people**',
              'Nuance: the government requires TOCs to report all clients — if an accountant is not registered, they are breaking the law, and their signatures will not work'
            ]}
          ]},
          { id: 'f2', title: 'Expat communities', content: [
            { kind: 'checklist', items: [
              '**Facebook groups**: "Portugal Americans", "Expats in Lisbon", "Russian speakers in Portugal" — ask for recommendations',
              '**Telegram**: @portugalpages — directory; @lisbon_chat — accountants are discussed periodically',
              '**LinkedIn**: search "TOC English-speaking Portugal" — there is a subcategory for specialists working with expats',
              '**Reddit**: r/Portugal, r/portugalexpats — the recommendations thread is updated regularly',
              '**Coworking spaces**: often have partner accountants with a discount for members (Avila Spaces, Cowork Central)'
            ]}
          ]},
          { id: 'f3', title: 'Specialist firms', content: [
            { kind: 'checklist', items: [
              '**For IFICI / NHR**: large firms know the details — PwC, KPMG, Deloitte (expensive: €1,500-5,000/year)',
              '**With a digital approach**: JustAccounts, Cegoc, Gurunima — online accounting with English support, €50-150/month',
              '**International brands**: Berkshire Accounting, PortugalClue, NHRPortugal',
              '**Local**: every city has them — ask in your residential complex'
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
          '🎯 **Simple recibos verdes (< €15k turnover)**: not mandatory, but for help with IRS — €100-200 one-off',
          '🎯 **Recibos verdes with IVA (€15-75k)**: €50-100/month, includes monthly IVA + IRS at year-end',
          '🎯 **Recibos verdes high turnover (€75k+)**: €100-200/month + SAF-T',
          '🏢 **Unipessoal Lda (small legal entity)**: €150-300/month',
          '🏢 **SA / large Lda**: €300-800/month + auditor',
          '➕ **Separately**: annual IES report — €100-300; consultations €50-100/hour',
          '🌐 **English surcharge**: +30-50% on local prices',
          '💳 **Payment**: usually monthly direct debit or bank transfer, some quarterly'
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
              '**IVA returns** (quarterly / monthly) — by the 20th of the following month',
              '**Segurança Social** reports — if you have employees',
              '**Retenção na fonte** — withholdings from sole-trader contractors and suppliers',
              '**SAF-T** — for large turnovers'
            ]}
          ]},
          { id: 'c2', title: 'Annually', content: [
            { kind: 'checklist', items: [
              '**IRS** (individuals / sole traders) — filing April-June',
              '**Modelo 22** (IRC for companies) — filing by 31 May',
              '**IES** (information return) — by 15 July',
              '**Dividend / profit distribution declaration**',
              '**Active status** (atividades) — update if CAE / address has changed'
            ]}
          ]},
          { id: 'c3', title: 'On request', content: [
            { kind: 'checklist', items: [
              'Registration of a new atividade with AT',
              'Closure of atividade (cessação)',
              'Submitting applications to AT (dispensas, reclamações)',
              'Replying to AT notificações (audits, requests)',
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
          '✅ **Registration with OCC** — mandatory. The accountant must be a member of Ordem',
          '✅ **Written contract** — scope of work, deadlines and cost are described',
          '✅ **Monthly reports** — good accountants send a summary every month',
          '✅ **Access to Portal AT** — via your CMD / CC, not via their account',
          '✅ **English** or Russian — if you do not speak Portuguese, look for a bilingual specialist',
          '❌ **“We will optimise it, you will not regret it”** without details — a red flag, potentially an illegal scheme',
          '❌ **No OCC registration** or cancelled registration — they cannot sign, your returns will be rejected',
          '❌ **Does not reply for weeks** — switch',
          '❌ **Asks for a copy of your CMD PIN** — no, never. You always confirm yourself',
          '❌ **“I will not inform AT about your status”** — you are responsible to AT, the accountant is a helper, but the responsibility is yours'
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
          '3. Request **document handover** — all your returns, AT correspondence and contracts for 4+ years',
          '4. The new accountant registers as your TOC on Portal AT (through you with CMD)',
          '5. Change Portal access — remove the old accountant',
          '6. Check the new accountant’s first month of work — to ensure a clean transition',
          '⚠️ Switching mid-year is possible, but more complicated (the new accountant must take on your historical reporting)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Accountant for a sole trader without IVA', amountEURMin: 0, amountEURMax: 200, note: '€/year' },
    { label: 'Accountant for a sole trader with IVA', amountEURMin: 50, amountEURMax: 150, note: '€/month' },
    { label: 'Unipessoal Lda (small legal entity)', amountEURMin: 150, amountEURMax: 300, note: '€/month' },
    { label: 'English/Russian surcharge', amountEUR: 0, note: '+30-50%' },
    { label: 'Annual IES report (separate)', amountEURMin: 100, amountEURMax: 300 }
  ],
  sources: [
    { title: 'Ordem dos Contabilistas Certificados (OCC)', url: 'https://www.occ.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portal das Finanças — filing obligations', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
