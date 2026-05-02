export default {
  editorialVoice: 'hackportugal',
  id: 'charity-donations-tax',
  categoryId: 'daily_life',
  title: 'Charity — where to help and tax deductions',
  tldr: 'IRS “consignação” is a way to direct **0.5% of your IRS tax** to one of around 5,000 registered charities (at no cost to you, just a tick box in the tax return). In addition: 25% of all donations to IPSS (Instituições Particulares de Solidariedade Social) are deductible from IRS. Top charities: Cáritas, Cruz Vermelha, Médicos do Mundo, Banco Alimentar, ACAPO (support for people with disabilities), AMI (humanitarian aid). The Banco Alimentar campaign runs twice a year and mobilises hundreds of thousands of volunteers.',
  tags: ['charity', 'donations', 'consignação', 'irs'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'consignacao',
      title: '✅ Consignação 0.5% IRS — at no cost',
      content: [
        { kind: 'paragraph', text: 'Every resident of Portugal can direct **0.5% of their final IRS tax** to one registered charity. This is at NO additional cost to you — the state simply redirects part of your tax.' },
        { kind: 'checklist', items: [
          '📅 **When**: when filing IRS (April-June)',
          '✅ In the IRS form — “consignação de quota da liquidação do imposto”',
          '🏢 Choose one organisation (by NIF) from the official AT list',
          'List: portaldasfinancas.gov.pt → IRS → Consignação',
          '💰 Specifically: 0.5% of your final tax. For €30,000/year — this is about €50-150',
          '🔁 You can change your choice every year',
          '🇵🇹 Also: you can additionally direct 1% of **IVA** to charities (since 2018) — a double opportunity'
        ]}
      ]
    },
    {
      id: 'tax-deductions',
      title: '💰 Direct donations — 25% deduction',
      content: [
        { kind: 'paragraph', text: 'Direct cash donations to IPSS (registered charities) give you a personal IRS deduction.' },
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Conditions', content: [
            { kind: 'checklist', items: [
              '✅ The recipient is a registered **IPSS** or **utilidade pública**',
              '✅ **Cashless transfer** (not cash): bank transfer / MB WAY / the charity’s payment portal',
              '✅ Obtain an **invoice/receipt with NIF** from the charity',
              '✅ Check the amount and NIF in e-Fatura',
              '⚠️ **Limit**: up to 15% of the tax payable (most families do not reach the limit)',
              '✅ **Deduction**: 25% of the donation × 1.30 (adjustment coefficient for IPSS)'
            ]}
          ]},
          { id: 'd2', title: 'Examples', content: [
            { kind: 'checklist', items: [
              'Donation of €200 → tax credit about €65 (200 × 1.3 × 25%)',
              'Donation of €1,000 → tax credit about €325',
              'Donation of €5,000 → tax credit about €1,625 (the limit may cap it if your IRS is lower)',
              'In practice: the cost of your donation = about 67% of the nominal amount thanks to the tax credit'
            ]}
          ]},
          { id: 'd3', title: 'Companies (for businesses)', content: [
            { kind: 'checklist', items: [
              'Donations to IPSS: 130-150% deductible as an expense (Código do IRC art. 62)',
              'Limit: 0.6% of turnover',
              'Educational / cultural purposes: special coefficients',
              'Cycling / sports clubs: 130%'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'top-charities',
      title: '🏆 Best organisations for donations / volunteering',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Banco Alimentar — food aid', content: [
            { kind: 'checklist', items: [
              'Banco Alimentar Contra a Fome — the largest food redistribution network',
              'Network of 21 regional banks',
              '**2 campaigns a year**: end of May + end of November — collection of tinned food in supermarkets',
              'Volunteering: 4-8 hours, attracting about 70,000 volunteers per campaign',
              'Donations / time → 11 million meals a year',
              'Banco Alimentar Lisboa, Porto and others have postal addresses + IBANs for transfers'
            ]}
          ]},
          { id: 'c2', title: 'Cáritas Portuguesa', content: [
            { kind: 'checklist', items: [
              'Catholic charity, but beneficiaries are not only religious',
              'Crisis support, food banks, help with social housing',
              'caritas.pt → Donate Online'
            ]}
          ]},
          { id: 'c3', title: 'Cruz Vermelha (Portuguese Red Cross)', content: [
            { kind: 'checklist', items: [
              'Emergency response, blood donation drives, social support',
              'cruzvermelha.pt → Donate',
              'Volunteer programmes in 200+ delegações',
              'IBAN for direct donations'
            ]}
          ]},
          { id: 'c4', title: 'Médicos do Mundo / SOS Crianças', content: [
            { kind: 'paragraph', text: 'Medical assistance in developing countries + child protection. medicosdomundo.pt; soscriancas.pt' }
          ]},
          { id: 'c5', title: 'Animal protection', content: [
            { kind: 'checklist', items: [
              '**Lisbon**: Bianca\'s Garden (cats), União Zoófila',
              '**Porto**: Casa dos Animais',
              '**SPA — Sociedade Protetora dos Animais** — shelter and medical care for abandoned animals',
              '**SOS Animal — national organisation**'
            ]}
          ]},
          { id: 'c6', title: 'Tech for good / education', content: [
            { kind: 'checklist', items: [
              '**Junior Achievement Portugal**: education, entrepreneurship for young people',
              '**Programadores do Futuro**: digital skills for people in vulnerable situations',
              '**Code Club Portugal**: free programming for children',
              '**Aprender é Fixe**: tutoring for children at risk'
            ]}
          ]},
          { id: 'c7', title: 'Nature / environment', content: [
            { kind: 'checklist', items: [
              '**Quercus**: environmental NGO, advocacy + forest restoration',
              '**LPN — Liga para a Protecção da Natureza**: Portugal’s oldest environmental NGO',
              '**SPEA — Sociedade Portuguesa para Estudo das Aves**: bird conservation',
              '**Geota**: environmental research'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'volunteer',
      title: '🤝 Time as a donation — volunteer programmes',
      content: [
        { kind: 'checklist', items: [
          '🎯 **EVS (European Voluntary Service)**: 6-12 months in Portugal, accommodation + food + pocket money',
          '🎯 **Banco Alimentar campaigns**: twice a year, 4-8 hours, very easy to get started',
          '🎯 **CPCJ (child protection)**: ongoing volunteering to care for children',
          '🎯 **Refugee support** (CPR, JRS): Ukrainian and other refugees, language assistance, integration support',
          '🎯 **Hospital volunteers** (Cruz Vermelha): in hospitals — accompaniment / activities for older people',
          '🎯 **AMI** (Assistência Médica Internacional): internships in Portugal or deployment abroad for medical missions',
          '🎯 **Habitat for Humanity**: construction / renovation of social housing',
          '🎯 **Support for older people**: isolated older people, weekly visits',
          '🎯 **TimeSwap (banco do tempo)** — exchange of skills and time, in municipalities'
        ]}
      ]
    },
    {
      id: 'beware',
      title: '⚠️ Be careful',
      content: [
        { kind: 'checklist', items: [
          '🚫 **Street collections**: fake charities outside shops / on the streets. Check IPSS status',
          '🚫 **Fraudulent emails**: phishing using “Médicos do Mundo Lisbon” — check the domain',
          '🚫 **Cold calls**: legitimate charities rarely call first',
          '✅ **Direct transfer to a known IBAN**: safer than via third-party platforms',
          '✅ **Tax receipt**: request one with NIF after the donation for the deduction',
          '✅ **IPSS status check**: the organisation must be in the register on segsocial.pt'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IRS consignação 0.5%', amountEUR: 0, note: 'at no cost to you' },
    { label: 'IRS deduction for donations', amountEUR: 0, note: '25% × 1.3 of the donation' },
    { label: 'IRS deduction limit', amountEUR: 0, note: '15% of the tax payable' }
  ],
  sources: [
    { title: 'AT — IRS consignação', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Banco Alimentar Contra a Fome', url: 'https://www.bancoalimentar.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — IPSS register', url: 'https://www.seg-social.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Cáritas Portuguesa', url: 'https://www.caritas.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
