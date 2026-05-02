export default {
  editorialVoice: 'hackportugal',
  id: 'internships-traineeships',
  categoryId: 'work_business',
  title: 'Internships (Estágios) — programmes and pay',
  tldr: 'Estágios (internships) are a common starting point for a career in Portugal. Types: **Estágios profissionais** (state-backed, IEFP, ~€750/month for 9 months) for unemployed people / graduates; **Estágios curriculares** (university partner, no mandatory pay); **Estágios de inserção** (for long-term unemployed people, up to 2 years, 80% IAS); **private internships** from companies, €600-1,500/month. After an internship — 70% receive a full-time job offer. Foreign nationals need a valid D visa / EU passport / TPD.',
  tags: ['estágio', 'internship', 'iefp', 'graduates'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: '📋 Types of internships',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Estágios Profissionais (IEFP) — the most popular', content: [
            { kind: 'checklist', items: [
              '**State programme** through IEFP',
              'Purpose: first job for graduates / reskilling',
              '**Duration**: normally 9 months',
              '**Payment**: 80-100% IAS = ~€430-540/month (2026)',
              '+ meal allowance ~€6/working day',
              '+ transport allowance',
              '+ accident insurance',
              'Application: iefp.pt → Estágios → register + company matching',
              'Competition: ~30,000 places per year, filled within months'
            ]}
          ]},
          { id: 't2', title: 'Estágios Inserção / Empregabilidade Plus', content: [
            { kind: 'checklist', items: [
              'For long-term unemployed people (>12 months)',
              'Duration: up to 2 years',
              'Payment similarly 80% IAS',
              '+ the company is subsidised by the state (it pays part of the cost)',
              'Often lead to full-time positions'
            ]}
          ]},
          { id: 't3', title: 'Erasmus+ / EURES', content: [
            { kind: 'checklist', items: [
              '**Erasmus+ Trainees**: for students / recent EU graduates',
              '~3-6 months in a Portuguese company',
              'Erasmus payment depends on the country, with an EU top-up + grant from the home university',
              '€600-1,100/month total grant amount',
              '**EURES** — EU portal with vacancies, including internships'
            ]}
          ]},
          { id: 't4', title: 'Private internships', content: [
            { kind: 'checklist', items: [
              'Technology companies (SAP, Siemens, Critical Software, Outsystems, Farfetch): €800-1,500/month',
              'Banks/consulting (PwC, Deloitte, KPMG, BCP, Santander): €700-1,200',
              'Start-ups (Lisbon scene): €500-1,000',
              'Marketing / design: €600-900',
              '**Voluntary / unpaid**: legally permissible only for academic internships (university partner) or a very short period',
              'Apply: linkedin.com/jobs with the "internship" filter, jobs.eu, glassdoor'
            ]}
          ]},
          { id: 't5', title: 'Academic internships', content: [
            { kind: 'checklist', items: [
              'Part of the study programme',
              'Usually 3-6 months',
              'No mandatory pay (although many companies pay €300-700)',
              'Coordinated through the partner university',
              'Intermediary: your university careers office'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'apply-iefp',
      title: '🎯 How to apply for an IEFP estágio',
      content: [
        { kind: 'substeps', items: [
          { id: 'a1', title: '1. Registration at the employment centre', content: [
            { kind: 'checklist', items: [
              'Any employment centre for your place of residence',
              'Documents: CC/residence permit, NIF, NISS, diploma, CV',
              'You complete a form about your qualifications, experience, and desired areas',
              'You receive a "Cartão de Inscrição" — jobseeker status',
              'Access to the iefp.pt portal'
            ]}
          ]},
          { id: 'a2', title: '2. Search for suitable estágio positions', content: [
            { kind: 'checklist', items: [
              '**Net-Empregos / iefp.pt** shows open estágio positions',
              'Companies must register in advance as host organisations',
              'Apply through the portal or directly to the company',
              'An interview is usually held; an IEFP specialist may join'
            ]}
          ]},
          { id: 'a3', title: '3. IEFP approval', content: [
            { kind: 'checklist', items: [
              'The company + intern + IEFP sign a tripartite agreement',
              'Training plan: what you will learn',
              'A company mentor (orientador) is appointed',
              'The start date is fixed'
            ]}
          ]},
          { id: 'a4', title: '4. During the estágio', content: [
            { kind: 'checklist', items: [
              '40 hours per week (or agreed part-time work)',
              'Payment is transferred monthly directly to your IBAN',
              'Periodic assessments by an IEFP specialist',
              'Interim + final reports (mentor)',
              'Early termination is possible by the company (with justification) or by you (without penalty)'
            ]}
          ]},
          { id: 'a5', title: '5. Afterwards', content: [
            { kind: 'checklist', items: [
              'IEFP completion certificate',
              '~70% of interns receive a job offer',
              'If there is no offer — you return to job hunting (the right to subsídio de desemprego does not arise after an estágio, but other benefits may be available)',
              'An IEFP estágio counts as work experience for visa / immigration purposes'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'foreigners',
      title: '🛂 Internships for foreign nationals',
      content: [
        { kind: 'substeps', items: [
          { id: 'f1', title: 'EU citizens', content: [
            { kind: 'checklist', items: [
              'Full equality of rights with Portuguese residents',
              'CRUE registration: ≥ 90 days of residence',
              'Apply for an IEFP estágio on the same basis as Portuguese citizens',
              'Erasmus+ — the main route for students'
            ]}
          ]},
          { id: 'f2', title: 'Non-EU (students / workers with a D visa)', content: [
            { kind: 'checklist', items: [
              '**D4 Student**: you may work up to 20 hours per week — an internship is included',
              '**Procuro Trabalho** (D-visa): an estágio may count as "trabalhar"',
              '**D3 Highly Qualified**: usually for full-time work; for an internship, a separate sub-status is needed',
              '**Estágios IEFP** require a residence permit / EU passport — a tourist visa is not suitable',
              'TPD (Ukraine): full work rights, including estágio'
            ]}
          ]},
          { id: 'f3', title: 'CPLP', content: [
            { kind: 'paragraph', text: 'Brazilians under CPLP mobility have full work rights, including estágio. They often apply to IEFP on equal terms with Portuguese citizens.' }
          ]}
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Tips',
      content: [
        { kind: 'checklist', items: [
          '🎯 **Apply early**: IEFP opens intakes every 2-3 months, and places fill quickly',
          '📝 **CV in Portuguese**: maximum 2 pages, a photo is usually expected, references are welcome',
          '🗣️ **Language**: Portuguese for most roles; technology / consulting / start-ups are often English-friendly',
          '🌐 **Technology / start-up scene in Lisbon**: easier for foreign nationals, larger English-speaking community',
          '💰 **Tax implications**: IEFP payments are subject to IRS (10-20% is typical, depending on the level)',
          '🎓 **In addition to an estágio**: get a Cartão Jovem (€8/year) — discounts on transport and museums',
          '🏆 **Outsystems / Critical**: top companies for technology internships, with possible transition to full-time work + support with a work permit',
          '📅 **Seasonality**: IT internships — main intakes in September / February; finance — June-July; state programmes — quarterly'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IEFP estágio payment (80% IAS)', amountEUR: 430, note: '€/month 2026' },
    { label: 'Private technology internship', amountEURMin: 800, amountEURMax: 1500, note: '€/month' },
    { label: 'Erasmus+ grant for an intern', amountEURMin: 600, amountEURMax: 1100, note: '€/month' },
    { label: 'Academic internship', amountEURMin: 0, amountEURMax: 700, note: '€/month' }
  ],
  sources: [
    { title: 'IEFP — Estágios Profissionais', url: 'https://www.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Erasmus+ Portugal', url: 'https://erasmusmais.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'EURES Portugal', url: 'https://eures.europa.eu/', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
