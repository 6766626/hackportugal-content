export default {
  editorialVoice: 'hackportugal',
  id: 'health-insurance-compared',
  categoryId: 'healthcare',
  title: 'Private health insurance in Portugal — Médis, Multicare, CUF and others',
  tldr: 'SNS (the public system) is free for residents, but waiting times for specialists are 2–8 weeks. Private insurance speeds things up — consultations on the day you request them, MRI within a week. Top providers: Médis, Multicare (Fidelidade), AdvanceCare, Tranquilidade. 2026 prices: €30–80/month for a basic plan, €100–250/month for a full plan. For immigration procedures (D7, D8), insurance is often mandatory.',
  tags: ['insurance', 'health', 'médis', 'multicare', 'private healthcare'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why',
      title: 'Why private insurance if you have SNS',
      content: [
        { kind: 'checklist', items: [
          '⏰ SNS is free, but the waiting time for a specialist is 2–8 weeks',
          '🏥 Private — consultation on the same or next day',
          '💊 In SNS, co-payments (taxas moderadoras) were ABOLISHED from September 2022 (Lei 22/2022) for core services. They remain only for emergency department visits without a referral — ~€15–20',
          '🧪 Tests / MRI via SNS — 1–3 months; via insurance — 1–2 weeks',
          '💰 IRS deduction: 15% on medical expenses up to €1,000/family',
          '🌍 For D7 / D8 visas — insurance is almost mandatory',
          '👨‍⚕️ Choice of doctor — always with insurance, with SNS only from a list'
        ]}
      ]
    },
    {
      id: 'providers',
      title: 'Main insurers',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Médis (Ageas)', content: [
            { kind: 'checklist', items: [
              'Popular with foreigners — app in English',
              'Network of ~300 direct agreements with clinics',
              'No advance payment in partner clinics',
              'Packages: Basic, Complete, Health Total',
              'From €35/month for a healthy adult',
              'High annual expense limit (up to €500,000)'
            ]}
          ]},
          { id: 'p2', title: 'Multicare (Fidelidade)', content: [
            { kind: 'checklist', items: [
              'The largest, with state capital',
              'Hospital da Luz + CUF + Lusíadas network',
              'The broadest network of medical providers',
              'Packages: Proteção, Vida, Vida+',
              'From €40/month',
              'Excellent dentistry included in the package'
            ]}
          ]},
          { id: 'p3', title: 'AdvanceCare (Generali)', content: [
            { kind: 'paragraph', text: 'Good prices for corporate plans. The network is smaller, but there are international clinics. From €30/month.' }
          ]},
          { id: 'p4', title: 'Tranquilidade / Allianz', content: [
            { kind: 'paragraph', text: 'Premium plans. International cover. More expensive, but strong support for foreigners. From €50/month.' }
          ]},
          { id: 'p5', title: 'ADSE (for civil servants)', content: [
            { kind: 'paragraph', text: 'Co-operative insurance for public-sector workers. Only for them and their families.' }
          ]}
        ]}
      ]
    },
    {
      id: 'clinics',
      title: 'Private clinic networks',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Luz Saúde', content: [
            { kind: 'paragraph', text: 'The largest network in Lisbon and Porto. Hospital da Luz is the flagship. They accept all insurance.' }
          ]},
          { id: 'c2', title: 'CUF', content: [
            { kind: 'paragraph', text: '50+ facilities across Portugal. Good surgery and maternity care. Strong app with medical record.' }
          ]},
          { id: 'c3', title: 'Lusíadas', content: [
            { kind: 'paragraph', text: 'Portuguese division of the American HCA. Clinics in Lisbon, Porto, Algarve.' }
          ]},
          { id: 'c4', title: 'HPA Saúde (Algarve)', content: [
            { kind: 'paragraph', text: 'Dominates in the south. Strong cardiology and orthopaedics.' }
          ]}
        ]}
      ]
    },
    {
      id: 'what-covered',
      title: 'What is usually covered',
      content: [
        { kind: 'checklist', items: [
          '✅ Outpatient consultations (doctors of all specialties)',
          '✅ Examinations (tests, MRI, CT, ultrasound)',
          '✅ Hospitalisation (private hospitals)',
          '✅ Operations (planned and emergency)',
          '✅ Maternity (after a 10-month waiting period)',
          '⚠️ Dentistry — often separate',
          '⚠️ Ophthalmology — often separate',
          '❌ Chronic illnesses with a pre-existing diagnosis — often not covered for the first 6–12 months',
          '❌ Cosmetic procedures — never',
          '⚠️ High-tech treatment (transplants, some types of cancer treatment) — limited'
        ]}
      ]
    },
    {
      id: 'how-to-choose',
      title: 'How to choose a plan',
      content: [
        { kind: 'checklist', items: [
          '🏥 Check the network — which nearby hospitals / doctors',
          '💊 Hospitalisation cover — at least 30 days per year',
          '💰 Annual insured amount (maximum payout) — > €250,000',
          '🤰 Planning maternity — requires a 10–12 month waiting period',
          '🧒 Children in the package — often cheaper than a separate policy',
          '🇵🇹 International cover — for travellers',
          '📅 Compare within 30 days (right to cancel)',
          '✍️ Medical declaration (Declaração de saúde) — fill it in honestly, otherwise a payout may be refused'
        ]}
      ]
    },
    {
      id: 'for-visa',
      title: 'Insurance for a D7 / D8 visa',
      content: [
        { kind: 'paragraph', text: 'Consulates require travel health insurance from the moment the visa is issued and for the first year in Portugal.' },
        { kind: 'checklist', items: [
          '💶 Minimum cover: €30,000',
          '🌍 Must cover the ENTIRE Schengen Area',
          '📅 Term: at least 12 months or until the first renewal',
          '✈️ Repatriation — mandatory in the policy',
          '💊 Emergency medicine — mandatory',
          '🏥 Travelling to Portugal and buying local insurance — possible. The consulate often accepts an undertaking to buy insurance on arrival'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Basic plan (healthy 30–40-year-old)', amountEURMin: 30, amountEURMax: 55, note: '€/month' },
    { label: 'Mid-range (hospitalisation + specialists)', amountEURMin: 60, amountEURMax: 120, note: '€/month' },
    { label: 'Premium (everything + dentistry + international cover)', amountEURMin: 150, amountEURMax: 300, note: '€/month' },
    { label: 'Insurance for visa (1 year)', amountEURMin: 250, amountEURMax: 600 },
    { label: 'Private consultation without insurance', amountEURMin: 50, amountEURMax: 150 }
  ],
  sources: [
    { title: 'ASF — Insurance and Pension Funds Supervisory Authority', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Ministry of Health — SNS', url: 'https://www.sns.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ERS — Health Regulatory Authority', url: 'https://www.ers.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Consulate — visa requirements (health insurance)', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
