export default {
  editorialVoice: 'hackportugal',
  id: 'job-search-portugal',
  categoryId: 'work_business',
  title: 'Job search in Portugal — websites and strategy',
  tldr: 'Four channels: general (LinkedIn, Net-Empregos, Jobs.at), IT (Landing.jobs, ITJobs.pt, Get on Board, RemoteOK; Stack Overflow Jobs closed in 2022), executive roles (Michael Page, Hays), remote work for Portuguese companies from abroad. Minimum wage 2026 — €920/month gross. Average IT salary for a mid-level specialist — €2,500–€4,000 gross; senior — €4,500–€7,500. For foreigners, knowledge of Portuguese/English is necessary; English only — in IT and start-ups.',
  tags: ['work', 'vacancies', 'linkedin', 'it', 'hiring'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'general',
      title: 'General job portals',
      content: [
        { kind: 'substeps', items: [
          { id: 'g1', title: 'LinkedIn', content: [
            { kind: 'checklist', items: [
              'Dominates in IT, marketing, sales, senior management',
              'Best for expats — most recruiters speak English',
              'Alerts by keywords and geography',
              'LinkedIn Premium (€30/month) speeds up applications'
            ]}
          ]},
          { id: 'g2', title: 'Net-Empregos (net-empregos.com)', content: [
            { kind: 'paragraph', text: 'The largest Portuguese portal. Vacancies at all levels and across all sectors. Many vacancies are in Portuguese — for low-skilled positions, Portuguese is often mandatory.' }
          ]},
          { id: 'g3', title: 'Indeed.pt', content: [
            { kind: 'paragraph', text: 'Aggregator. Duplicates LinkedIn + Net-Empregos + direct vacancies. Convenient filter for “English-speaking vacancies”.' }
          ]},
          { id: 'g4', title: 'Jobs.at (PT)', content: [
            { kind: 'paragraph', text: 'German platform, popular with DACH companies in Portugal. Many vacancies in English, good conditions.' }
          ]},
          { id: 'g5', title: 'IEFP — Instituto do Emprego', content: [
            { kind: 'paragraph', text: 'State portal. Registration is mandatory for unemployed people receiving benefits. Low-skilled vacancies + some subsidies.' }
          ]}
        ]}
      ]
    },
    {
      id: 'it',
      title: 'Specialist IT portals',
      content: [
        { kind: 'substeps', items: [
          { id: 'i1', title: 'Landing.jobs', content: [
            { kind: 'checklist', items: [
              'Portugal’s largest IT platform',
              'Filters for remote, hybrid and office-based work',
              'Transparent salaries',
              'Many start-ups and growing companies',
              'Help with moving (visas, relocation)'
            ]}
          ]},
          { id: 'i2', title: 'ITJobs.pt', content: [
            { kind: 'paragraph', text: 'Local Portuguese IT portal. More corporate and large companies (banks, telecoms). Portuguese is often required.' }
          ]},
          { id: 'i3', title: 'Stack Overflow Jobs / RemoteOK', content: [
            { kind: 'paragraph', text: 'International remote vacancies. Portuguese companies are present and pay according to European standards. Often entirely in English.' }
          ]},
          { id: 'i4', title: 'Wellfound (AngelList)', content: [
            { kind: 'paragraph', text: 'Start-up community. Strong presence in Lisbon. Options and salary are transparent.' }
          ]}
        ]}
      ]
    },
    {
      id: 'executive',
      title: 'Executive roles / hidden market',
      content: [
        { kind: 'checklist', items: [
          'Michael Page — recruitment for executive positions, €60K+',
          'Hays — mid-level and senior positions',
          'Adecco / Randstad — temporary and permanent positions',
          'SpencerStuart, Korn Ferry — senior management',
          'Networking at meetups (Lisbon Entrepreneurs, Porto Tech Hub) — roles are often found before publication'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Hiring process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. CV to the Portuguese standard', content: [
            { kind: 'checklist', items: [
              '1–2 pages maximum',
              'Photo — often expected (less than before)',
              'Europass for Portuguese corporations',
              'Direct LinkedIn style for start-ups and remote work',
              'Dates DD/MM/YYYY (not in the American format)'
            ]}
          ]},
          { id: 'p2', title: '2. Interview stages', content: [
            { kind: 'checklist', items: [
              'Initial HR screening (20 min, Portuguese/English)',
              'Technical interview (for IT)',
              'Interview with the manager',
              'Case study / test task',
              'Final interview with a senior executive or owner',
              'Written offer — must be checked'
            ]}
          ]},
          { id: 'p3', title: '3. Salary negotiation', content: [
            { kind: 'paragraph', text: 'In Portugal, salaries are negotiable. The phrase “Qual é a vossa banda salarial?” (what is your range) is standard. Do not give the first number; if they insist — state your expected gross amount, usually with room for negotiation.' }
          ]},
          { id: 'p4', title: '4. Employment contract', content: [
            { kind: 'checklist', items: [
              'Type: sem termo (permanent), a termo (fixed-term 6 months–2 years), sem vínculo (freelance via recibos verdes)',
              'Probation period (período experimental): 90 days / 180 for seniors',
              'Minimum wage 2026: €920/month gross',
              '14th salary + holiday allowance = under Portuguese law',
              'Private health insurance — often a bonus'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'foreign',
      title: 'For foreigners — specifics',
      content: [
        { kind: 'checklist', items: [
          '🔑 Language knowledge: English is enough for IT/start-ups. Portuguese is mandatory for the corporate sector/sales',
          '🌍 Remote work — company from another EU country: hiring in Portugal through an EOR (Deel, Remote, Oyster)',
          '🎓 Recognition of diplomas: for regulated professions (doctor, architect, engineer) — through DGES + Ordens',
          '🔒 D3 visa (highly qualified professional) — job offer mandatory',
          '🌴 IFICI tax regime — 20% IRS on qualifying IT/engineering roles',
          '📋 Non-EU citizens: a D1/D3 visa is processed at the consulate/VFS on the basis of an employment contract (or preliminary job offer) and the activity requirements. There is no separate “Contrato de Trabalho com Visto” from AIMA; AIMA issues the residence permit only after entry',
          '💼 Company websites with an explicit focus on expats: Unbabel, Mollie, Farfetch, Outsystems, Revolut PT'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Minimum wage in Portugal 2026', amountEUR: 920, note: 'gross/month' },
    { label: 'Average salary nationwide', amountEUR: 1700, note: 'gross/month' },
    { label: 'Mid-level IT developer', amountEURMin: 2500, amountEURMax: 4000, note: 'gross/month' },
    { label: 'Senior IT + lead', amountEURMin: 4500, amountEURMax: 7500, note: 'gross/month' }
  ],
  sources: [
    { title: 'IEFP — Instituto do Emprego e Formação Profissional', url: 'https://www.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'INE — salary statistics', url: 'https://www.ine.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ACT — Autoridade para as Condições do Trabalho', url: 'https://www.act.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código do Trabalho (labour code)', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
