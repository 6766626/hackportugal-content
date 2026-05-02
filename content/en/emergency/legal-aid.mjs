export default {
  editorialVoice: 'hackportugal',
  id: 'legal-aid',
  categoryId: 'emergency_rights',
  title: 'Legal aid in Portugal — how to find it and where it is free',
  tldr: 'In Portugal, access to legal assistance is a constitutional right. Free legal aid (Apoio Judiciário) for people on low incomes is arranged through Segurança Social. Paid lawyers range from €60/hour to €500+/hour at top firms. Ordem dos Advogados is the register of all licensed lawyers. For simple questions, there are free consultations at the Junta de Freguesia and university clinics.',
  tags: ['lawyer', 'solicitor', 'legal aid'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: 'Types of legal professionals in Portugal',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Lawyer (Advogado)', content: [
            { kind: 'paragraph', text: 'A fully qualified legal professional licensed by the Ordem dos Advogados. Can represent clients in any court. Mandatory 5-year degree + 18 months of traineeship + exam.' }
          ]},
          { id: 't2', title: 'Solicitador', content: [
            { kind: 'paragraph', text: 'A legal professional with a more limited practice: cannot represent clients in the higher courts. Good for property, inheritance, registration. Usually cheaper. Licence — Ordem dos Solicitadores (OSAE).' }
          ]},
          { id: 't3', title: 'Legal adviser / consultant', content: [
            { kind: 'paragraph', text: 'Cannot represent clients in court. Provides advice. Specialist legal advisers (immigration, tax) often work in this role for foreigners.' }
          ]}
        ]}
      ]
    },
    {
      id: 'free-aid',
      title: 'Free legal aid (Apoio Judiciário)',
      content: [
        { kind: 'paragraph', text: 'Under Lei 34/2004. People with income below the threshold are eligible. It applies in civil, administrative and criminal cases.' },
        { kind: 'substeps', items: [
          { id: 'a1', title: 'Who is eligible', content: [
            { kind: 'checklist', items: [
              'Residents of Portugal (regardless of citizenship, if they have legal status)',
              'Household income below 3/4 IAS (~€382/month per household member — full exemption)',
              'From 3/4 to 1.5× IAS — partial payment',
              'Legal entities — in specific cases',
              'For refugees and vulnerable groups — automatically'
            ]}
          ]},
          { id: 'a2', title: 'What it covers', content: [
            { kind: 'checklist', items: [
              'Court fees (full or partial)',
              'Lawyer (appointed from a list)',
              'Solicitador (for certain actions)',
              'Expert reports (where justified)',
              'Does NOT cover: notarial services (except special cases)'
            ]}
          ]},
          { id: 'a3', title: 'How to apply', content: [
            { kind: 'checklist', items: [
              'Application to Segurança Social (online via SSD or in person)',
              'Documents: proof of income, atestado de residência, description of the case',
              'Review period — 30 days',
              'After approval — an appointed lawyer',
              'You can challenge a refusal in court'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'low-cost-options',
      title: 'Free / low-cost consultations',
      content: [
        { kind: 'checklist', items: [
          '⚖️ Gabinete de Apoio ao Cidadão — at the Junta de Freguesia; free lawyer consultation 1–2 days per month',
          '🏛️ Espaço Justiça — state network; free initial consultations',
          '🎓 Faculdades de Direito — clinics at law faculties in Lisbon, Porto, Coimbra. Free of charge, students work under the supervision of professors',
          '📞 DECO Proteste — consumer rights protection; legal helpline (213 710 000) for members. Subscription ~€12/month',
          '👷 Trade unions (sindicatos) — free legal assistance for members on employment matters',
          '🏛️ Provedor de Justiça (ombudsman) — free complaints against public authorities',
          '💻 ePortugal — information resources on standard procedures',
          '🇺🇦 For Ukrainians: Assembleia da República — free assistance for refugees through the Red Cross'
        ]}
      ]
    },
    {
      id: 'paid-lawyers',
      title: 'Paid lawyers — how to choose',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Where to look', content: [
            { kind: 'checklist', items: [
              'Portal da Ordem dos Advogados (oa.pt) — official register, filter by city and specialism',
              'Portal OSAE (osae.pt) — solicitadores',
              'Recommendations from people you know — the most reliable',
              'Bilingual lawyers: filter by Lisboa + foreign languages',
              'For immigration — experience working with AIMA is critical'
            ]}
          ]},
          { id: 'p2', title: 'Prices', content: [
            { kind: 'checklist', items: [
              '💶 First consultation: €50–150 (30–60 minutes)',
              '💶 Retainer for a small business: €200–500/month',
              '💶 Immigration support (D7/D8): €800–2500',
              '💶 Golden Visa: €3,000–10,000',
              '💶 Naturalisation: €600–1500',
              '💶 Divorce by mutual consent: €500–1200',
              '💶 Property purchase: 0.5–1% of the price',
              '💶 Court proceedings: depends on complexity, often a fixed part + % of the award'
            ]}
          ]},
          { id: 'p3', title: 'First meeting', content: [
            { kind: 'checklist', items: [
              '📋 Bring ALL documents relating to the case',
              '💰 Ask about the full budget — not just the first consultation',
              '⏰ Find out the approximate timeframe',
              '✍️ A long-term support agreement (contrato de avença) is mandatory for long-term support',
              '📃 Invoice: IVA 23%',
              '🗣️ Which languages they work in (PT/EN/ES/FR/sometimes RU)'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'types-of-cases',
      title: 'When you need a lawyer',
      content: [
        { kind: 'checklist', items: [
          '🏛️ AIMA refusal of a residence permit / permanent residence permit — a lawyer with immigration practice is essential',
          '🏛️ Citizenship refusal — appeal through IRN',
          '🏠 Dispute with a landlord / eviction — lawyer urgently (court deadlines are short)',
          '💼 Dismissal / employment dispute — ACT + lawyer',
          '🚗 Road accident with injured parties — insurance lawyer',
          '💰 Sanctions issues (Russian Federation/Brazil citizens) — specialist sanctions compliance lawyer',
          '⚖️ Divorce, division of assets',
          '🧒 Child maintenance, custody',
          '💼 Business contracts (incorporation documents, M&A)',
          '🏠 Property purchase — legal due diligence',
          '🧑‍⚕️ Medical negligence — specialist lawyers',
          '💀 Inheritance — a solicitador is usually sufficient'
        ]}
      ]
    },
    {
      id: 'rights-in-court',
      title: 'Your rights when dealing with a lawyer',
      content: [
        { kind: 'checklist', items: [
          '⚖️ A lawyer is bound by professional secrecy (sigilo profissional) — absolutely',
          '📃 Right to a written agreement (contrato de avença)',
          '💰 Right to a cost estimate (orçamento)',
          '🔄 Right to change lawyer at any time',
          '📋 Right to receive copies of all case documents',
          '🚫 Complaint against a lawyer — Ordem dos Advogados (Conselho de Deontologia)',
          '🏛️ Compensation in the event of professional negligence — through liability insurance (all lawyers are required to have it)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'Ordem dos Advogados (OA) — register of lawyers', url: 'https://portal.oa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'OSAE — Ordem dos Solicitadores e dos Agentes de Execução', url: 'https://www.osae.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 34/2004 — Access to law and the courts', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2004-34510275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Segurança Social — Apoio Judiciário', url: 'https://www.seg-social.pt/apoio-judiciario', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Provedor de Justiça — ombudsman of Portugal', url: 'https://www.provedor-jus.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
