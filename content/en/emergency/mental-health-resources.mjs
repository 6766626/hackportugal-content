export default {
  editorialVoice: 'hackportugal',
  id: 'mental-health-resources',
  categoryId: 'emergency_rights',
  title: 'Mental health — hotlines and support',
  tldr: 'In a crisis: SNS 24 → option 4 (SNS psychological support, 24/7) or SOS Voz Amiga 213 544 545 (suicide prevention, 15:30-00:30).\n\n⚠️ 808 numbers are charged at the subscriber’s tariff (mobile/foreign SIM cards may incur charges). Through SNS — your family doctor will refer you to a psychologist/psychiatrist (free, waiting list 1-3 months). Private psychologist €50-90/session, psychiatrist €80-150. English-speaking specialists — at CUF, Lusíadas, Luz. Online: BetterHelp, ePsicólogos. Linha Vida 1414 — for addictions, has working hours (NOT 24/7).',
  tags: ['psychology', 'psychiatrist', 'crisis', 'mental health'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'crisis',
      title: '🆘 Crisis — where to call now',
      content: [
        { kind: 'checklist', items: [
          '☎️ 112 — emergency service, for suicidal intent / threat to life',
          '☎️ SNS 24: 808 24 24 24 → option 4 — SNS psychological support, 24/7. The service itself is free, but the 808 number is charged at the subscriber’s tariff (mobile/foreign SIM cards may be charged per minute)',
          '☎️ SOS Voz Amiga: 213 544 545 — anonymous suicide prevention line, daily 15:30-00:30',
          '☎️ Telefone Amizade: 222 080 707 — line in Porto, 16:00-23:00',
          '☎️ Linha Vida (ICAD/SICAD): 1414 — for addictions (drugs/alcohol). Has working hours — NOT 24-hour. Free',
          '☎️ APAV (for victims of violence): 116 006 — national support for victims of crime',
          '☎️ Linha SOS Estudante: 239 484 020 — for students in crisis'
        ]}
      ]
    },
    {
      id: 'sns-route',
      title: '🏥 Through SNS — the official route',
      content: [
        { kind: 'paragraph', text: 'Public healthcare in Portugal covers psychological and psychiatric care, but access is slow.' },
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Family doctor', content: [
            { kind: 'checklist', items: [
              'Book through the SNS 24 app or Centro de Saúde',
              'Describe symptoms: anxiety, depression, sleep problems, panic attacks',
              'The family doctor can: prescribe sleeping pills / anti-anxiety medication, refer you to a specialist',
              'Free for a registered SNS patient'
            ]}
          ]},
          { id: 's2', title: '2. Psychologist in SNS', content: [
            { kind: 'checklist', items: [
              'Waiting list: usually 1-3 months, up to 6 months in the capitals',
              '6-12 sessions as standard',
              'Cognitive behavioural therapy is the most common',
              'Free',
              'Often only in Portuguese; English-speaking psychologists in larger cities are rare'
            ]}
          ]},
          { id: 's3', title: '3. Psychiatrist in SNS', content: [
            { kind: 'checklist', items: [
              'For medication treatment (antidepressants, anti-anxiety medication, mood stabilisers)',
              'Waiting list is shorter (1-2 months) than for a psychologist',
              'Only by referral from a family doctor',
              'Hospital de Júlio de Matos (Lisboa), Magalhães Lemos (Porto), CHUC (Coimbra) — the largest psychiatric hospitals'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'private',
      title: '💼 Private support — faster',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Prices 2026', content: [
            { kind: 'checklist', items: [
              'Psychologist: €50-90/session (50-60 min)',
              'Psychiatrist (first appointment): €100-150',
              'Psychiatrist (follow-up appointment): €60-100',
              'Couples therapy: €80-120',
              'Coaching / non-clinical therapy: €60-100',
              'Group therapy: €25-50/session'
            ]}
          ]},
          { id: 'p2', title: 'Networks and clinics', content: [
            { kind: 'checklist', items: [
              'CUF Saúde Mental — all major cities, English available',
              'Lusíadas Saúde Mental — Lisboa, Porto',
              'Hospital da Luz Mental Health — Lisboa',
              'INSPIRA Saúde — independent network, English-speaking',
              'Therapie em Lisboa — convenient for expats',
              'Search: ordemdospsicologos.pt → Encontrar Psicólogo'
            ]}
          ]},
          { id: 'p3', title: 'Insurance', content: [
            { kind: 'checklist', items: [
              'Médis: €10-30 co-payment; usually 8-12 sessions/year',
              'Multicare (Fidelidade): similar',
              'AdvanceCare (Generali): mental health package €200-400/year + co-payment',
              '⚠️ Carência (waiting period after taking out insurance): usually 90 days for mental health',
              '⚠️ Pre-existing conditions (diagnosis BEFORE taking out insurance): often excluded'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'online',
      title: '🌐 Online therapy',
      content: [
        { kind: 'checklist', items: [
          'ePsicólogos (based in Portugal) — €30-50/session online',
          'BetterHelp — more international platform, €60-90/week (subscription)',
          'Talkspace — text + video, €65-120/week',
          'Mindler.pt — Portugal-based teletherapy',
          'Headspace, Calm — meditation apps, not therapy, €6-12/month',
          'Hoory, Wysa — AI chatbot for anxiety / depression — free, does not replace therapy',
          'English-speaking online therapists are easier to find than in-person ones'
        ]}
      ]
    },
    {
      id: 'expat-specific',
      title: '🌍 Specific issues for immigrants',
      content: [
        { kind: 'checklist', items: [
          'Adjustment stress: moving country = top-5 stressful life events. It is normal to feel loneliness and frustration in the first 6-12 months',
          'Language barrier with a doctor: significant for quality mental health support. An English-speaking psychologist is more expensive, but more effective',
          'Russian-speaking psychologists in Portugal: limited list, search in Telegram chats for expat communities',
          'Financial instability (waiting for a visa, spending savings) = serious triggers for anxiety',
          'Isolation: weak social network in the first months. The solution — meet-ups, language exchanges, expat groups',
          'Children’s adaptation: change of school / language → children may regress. Regular check-ups with a paediatrician or school psychologist'
        ]}
      ]
    },
    {
      id: 'community',
      title: '👥 Community and support',
      content: [
        { kind: 'checklist', items: [
          'Russian Mental Health PT Telegram/Facebook — peer support',
          'Internations Lisbon Mental Health — meet-ups, free',
          'Mindful Lisbon — meditation, yoga groups',
          'LGBT+ Centre (Lisbon) — peer support for the LGBTQ+ community',
          'ELCM / Alma Lusitana (for Portuguese speakers) — group therapy',
          'Women\'s Group Lisbon Expat — support specifically for women',
          'Anonymous Alcoholics Portugal — daily meetings, EN/PT/RU',
          'Narcóticos Anónimos — addictions, multilingual'
        ]}
      ]
    },
    {
      id: 'tax-deduction',
      title: '💰 Tax deduction',
      content: [
        { kind: 'checklist', items: [
          'Psychologist/psychiatrist expenses are medical expenses for IRS deduction',
          '15% of expenses up to €1000/family — standard deduction',
          'Get an invoice with NIF — mandatory for the deduction',
          'Medicines from a pharmacy with a prescription also count',
          'Keep receipts for 4 years (audit period)',
          'If you work through recibos verdes (self-employed): therapy expenses for work-related stress may count as a business expense (consult an accountant)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Psychologist in SNS', amountEUR: 0 },
    { label: 'Private psychologist', amountEURMin: 50, amountEURMax: 90, note: '€/session' },
    { label: 'First psychiatrist appointment', amountEURMin: 100, amountEURMax: 150 },
    { label: 'Online therapy (BetterHelp)', amountEURMin: 60, amountEURMax: 90, note: '€/week' },
    { label: 'Mental health insurance package', amountEURMin: 200, amountEURMax: 400, note: '€/year' }
  ],
  sources: [
    { title: 'SNS 24 — Mental Health', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Portuguese Psychologists Association', url: 'https://www.ordemdospsicologos.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SOS Voz Amiga', url: 'https://www.sosvozamiga.org/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'APAV — victim support', url: 'https://apav.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
