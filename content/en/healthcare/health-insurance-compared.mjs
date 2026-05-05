export default {
  editorialVoice: 'hackportugal',
  id: 'health-insurance-compared',
  categoryId: 'healthcare',
  title: 'Private health insurance in Portugal — Médis, Multicare, CUF, etc.',
  tldr: 'SNS (state system) is free for residents, but specialist waits are 2–8 weeks. Private insurance speeds things up — same-day consultations, MRI within a week. Top providers: Médis (Ageas), Multicare (Fidelidade), AdvanceCare, Generali Tranquilidade. Prices 2026: €30–€80/month basic plan, €100–€250/month comprehensive. For immigration procedures (D7, D8), insurance is often mandatory.',
  tags: ['insurance', 'health', 'médis', 'multicare', 'private healthcare'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why',
      title: 'Why get private insurance if SNS exists',
      content: [
        { kind: 'checklist', items: [
          '⏰ SNS is free, but the wait for a specialist is 2–8 weeks',
          '🏥 Private — a consultation the same day or the next day',
          '💊 In SNS, co-payments (taxas moderadoras) were ABOLISHED as of 1 June 2022 (Decreto-Lei 37/2022) for core services. They remain only for urgência hospitalar without a referral from SNS 24/INEM/médico de família — €14–€18',
          '🧪 Tests/MRI via SNS — 1–3 months; with insurance — 1–2 weeks',
          '💰 IRS deduction: 15% on medical expenses up to €1,000 per family',
          '🌍 For D7 / D8 visas — insurance is almost a mandatory requirement',
          '👨‍⚕️ Choice of doctor — with insurance, always; via SNS, only from the list'
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
              'Popular with foreigners — an app in English',
              'Network of ~300 direct billing agreements with clinics',
              'No upfront payment at partner clinics',
              'Packages: Basic, Complete, Health Total',
              'From €35/month for a healthy adult',
              'High annual coverage limit (up to €500,000)'
            ]}
          ]},
          { id: 'p2', title: 'Multicare (Fidelidade)', content: [
            { kind: 'checklist', items: [
              'Largest, with state shareholding',
              'Network includes Hospital da Luz + CUF + Lusíadas',
              'The widest medical provider network',
              'Packages: Proteção, Vida, Vida+',
              'From €40/month',
              'Excellent dentistry included in the package'
            ]}
          ]},
          { id: 'p3', title: 'AdvanceCare', content: [
            { kind: 'paragraph', text: 'Healthcare network/administrator (not an insurer in the narrow sense); often features in Generali Tranquilidade policies and corporate bundles. Good pricing on corporate plans, includes international clinics. From €30/month.' }
          ]},
          { id: 'p4', title: 'Generali Tranquilidade', content: [
            { kind: 'paragraph', text: 'Since 2024, Tranquilidade belongs to the Generali group (NOT Allianz) and operates under the Generali Tranquilidade brand; in 2024 Liberty Seguros Portugal was integrated into it. Premium plans, international cover, more expensive, but strong support for foreigners. From €50/month.' }
          ]},
          { id: 'p5', title: 'ADSE (for civil servants)', content: [
            { kind: 'paragraph', text: 'A mutual insurance scheme for public sector workers. Only for them and their families.' }
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
            { kind: 'paragraph', text: 'The largest network in Lisbon and Porto. Hospital da Luz is the flagship. They accept all insurances.' }
          ]},
          { id: 'c2', title: 'CUF', content: [
            { kind: 'paragraph', text: '50+ facilities across Portugal. Strong surgery and maternity. Robust app with a medical card.' }
          ]},
          { id: 'c3', title: 'Lusíadas', content: [
            { kind: 'paragraph', text: 'Portuguese arm of American HCA. Clinics in Lisbon, Porto, Algarve.' }
          ]},
          { id: 'c4', title: 'HPA Saúde (Algarve)', content: [
            { kind: 'paragraph', text: 'Dominant in the south. Strong cardiology and orthopaedics.' }
          ]}
        ]}
      ]
    },
    {
      id: 'what-covered',
      title: 'What is usually covered',
      content: [
        { kind: 'checklist', items: [
          '✅ Outpatient consultations (doctors of all specialities)',
          '✅ Diagnostics (tests, MRI, CT, ultrasound)',
          '✅ Hospitalisation (private hospitals)',
          '✅ Surgeries (elective and emergency)',
          '✅ Maternity (after a 10-month waiting period)',
          '⚠️ Dentistry — often separate',
          '⚠️ Ophthalmology — often separate',
          '❌ Chronic conditions with a pre-existing diagnosis — often not covered for the first 6–12 months',
          '❌ Cosmetic procedures — never',
          '⚠️ High-tech treatments (transplantation, some cancer treatments) — limited'
        ]}
      ]
    },
    {
      id: 'how-to-choose',
      title: 'How to choose a plan',
      content: [
        { kind: 'checklist', items: [
          '🏥 Check the network — which nearby hospitals/doctors',
          '💊 Inpatient cover — at least 30 days per year',
          '💰 Annual sum insured (maximum payout) — > €250,000',
          '🤰 Planning maternity — requires a 10–12 month waiting period',
          '🧒 Children on a family bundle — often cheaper than separate',
          '🇵🇹 International cover — for travellers',
          '📅 Compare within 30 days (right to withdraw)',
          '✍️ Health declaration (Declaração de saúde) — complete truthfully, otherwise a claim may be refused'
        ]}
      ]
    },
    {
      id: 'for-visa',
      title: 'Insurance for D7 / D8 visa',
      content: [
        { kind: 'paragraph', text: 'Consulates require travel health insurance from the moment the visa is issued and for the first year in Portugal.' },
        { kind: 'checklist', items: [
          '💶 Minimum cover: €30,000',
          '🌍 Must cover the entire Schengen Area',
          '📅 Term: at least 12 months or until the first renewal',
          '✈️ Repatriation — mandatory in the policy',
          '💊 Emergency medicine — mandatory',
          '🏥 Travel to Portugal and buy a local one — possible. The consulate often accepts a commitment to purchase insurance upon arrival'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Basic plan (healthy 30–40 years)', amountEURMin: 30, amountEURMax: 55, note: '€/month' },
    { label: 'Mid-tier (hospitalisation + specialists)', amountEURMin: 60, amountEURMax: 120, note: '€/month' },
    { label: 'Premium (everything + dentistry + international cover)', amountEURMin: 150, amountEURMax: 300, note: '€/month' },
    { label: 'Visa insurance (1 year)', amountEURMin: 250, amountEURMax: 600 },
    { label: 'Private consultation without insurance', amountEURMin: 50, amountEURMax: 150 }
  ],
  sources: [
    { title: 'ASF — Insurance Supervision Authority', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Ministry of Health — SNS', url: 'https://www.sns.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ERS — Health Regulatory Authority', url: 'https://www.ers.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Consulate — visa requirements (health insurance)', url: 'https://vistos.mne.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
