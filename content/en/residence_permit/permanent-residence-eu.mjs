export default {
  editorialVoice: 'hackportugal',
  id: 'permanent-residence-eu',
  categoryId: 'residence_permit',
  title: 'Portuguese permanent residence (art. 125) and EU Long-Term Resident',
  tldr: 'After 5 years of legal residence, you can apply for **Autorização de Residência Permanente** (art. 125 Lei 23/2007) — it does not expire, with renewal every 10 years. Alternative: **EU Long-Term Resident** (Decreto-Lei 29/2012 transposes Directive 2003/109) — gives the right to live and work freely in any EU country. Both options are available without needing to obtain citizenship. Requirements: stable income ≥ SMN, health insurance, Portuguese A2 (art. 7), no criminal record. Application to AIMA.',
  tags: ['permanent residence', 'permanent', 'residence permit', 'eu-long-term'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'national-vs-eu',
      title: 'Two types of permanent residence — which to choose',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: '🇵🇹 Autorização de Residência Permanente (national)', content: [
            { kind: 'checklist', items: [
              'Valid for 10 years → automatic renewal',
              'Right to work, live and study in Portugal without restrictions',
              'Cannot be lost through long absences (up to 24 consecutive months)',
              'Path to citizenship after 5 years (general case) or 7 under the new 2026 law',
              'Family members receive a temporary residence permit, then can follow their own path to permanent residence',
              'Does not give rights in other EU countries'
            ]}
          ]},
          { id: 'n2', title: '🇪🇺 EU Long-Term Resident (EULTR)', content: [
            { kind: 'checklist', items: [
              'Valid for 5 years → renewal',
              'Right to work in any EU country (with notification to its authorities)',
              'Right to move and more easily obtain a residence permit in another EU country',
              'Requirements are slightly stricter — higher stable income',
              'Absence from the EU ≥ 12 months in a year is not allowed (otherwise the status is lost)',
              '**Advantage** for those planning mobility within the EU (Germany, Netherlands)'
            ]}
          ]},
          { id: 'n3', title: '🤔 Recommendation', content: [
            { kind: 'paragraph', text: 'For most residents — **national permanent residence**: the procedure is simpler, fewer documents, it does not expire. EULTR — if you genuinely plan to move to another EU country within 1-3 years. You can obtain both statuses at the same time (lawyers recommend not overusing this — AIMA may delay).' }
          ]}
        ]}
      ]
    },
    {
      id: 'conditions',
      title: 'Application conditions (art. 125)',
      content: [
        { kind: 'checklist', items: [
          '📅 **5 years of legal residence** in Portugal (as for citizenship — including MdI waiting periods under the old regime and transitional moments)',
          '🗣️ **Portuguese A2** — CIPLE certificate or PLA school/150-hour Certificado. Exemption: CPLP citizens, people with a Portuguese diploma',
          '💰 **Stable income** ≥ SMN (€920 in 2026) during the last 12 months',
          '🏠 **Suitable housing** — tenancy agreement / ownership, floor area according to family size',
          '⚕️ **Health insurance or SNS utente** — works if you are registered',
          '⚖️ **No criminal record** with a sentence ≥ 1 year of imprisonment',
          '📋 **No debts** to Finanças and Segurança Social',
          '🛡️ No breaches of immigration law (overstay, illegal work)'
        ]}
      ]
    },
    {
      id: 'documents',
      title: 'Documents',
      content: [
        { kind: 'checklist', items: [
          '📝 Modelo de requerimento (on the AIMA website)',
          '📄 Passport (original + copies of all completed pages)',
          '📄 Valid residence permit (título de residência)',
          '🎓 A2 certificate (CIPLE / PLA / diploma)',
          '💼 Proof of income: IRS Anexo A for 3 years, 12 monthly payslips or Anexo B (for sole traders)',
          '🏠 Atestado de residência from Junta + tenancy agreement',
          '💳 Certidões sem dívida: Finanças + Segurança Social (free on e-portals)',
          '⚖️ Registo criminal: Portugal (free on eportugal.gov.pt) + countries of residence ≥ 1 year in the last 5 years',
          '📸 2 photos 3x4',
          '💶 Payment of the fee'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Application process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Apply to AIMA online', content: [
            { kind: 'paragraph', text: 'Via portal-renovacoes.aima.gov.pt with CMD / CC. Choose “Autorização de Residência Permanente”. Upload scans of the documents.' }
          ]},
          { id: 'p2', title: '2. Pay the fee', content: [
            { kind: 'paragraph', text: 'AIMA — concessão art. 76 = **€351.10** (table 01.03.2026). Additional reception + analysis ~€133.' }
          ]},
          { id: 'p3', title: '3. AIMA interview (if required)', content: [
            { kind: 'paragraph', text: 'Usually not required for national permanent residence, sometimes they call you in. For EU Long-Term — the interview is mandatory.' }
          ]},
          { id: 'p4', title: '4. Decision', content: [
            { kind: 'timeline', text: '6-12 months (under Lei 61/2025 — up to 9 legal months). In practice in 2026 — up to 18 months due to queues.' }
          ]},
          { id: 'p5', title: '5. Receive the card', content: [
            { kind: 'paragraph', text: 'The permanent residence card arrives by post. Valid for 10 years (national) or 5 years (EULTR).' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'After obtaining permanent residence',
      content: [
        { kind: 'checklist', items: [
          '🎂 There is no mandatory “recalculation” of time — renewal every 10 years, simple',
          '🌍 You can leave for ≤ 24 consecutive months (national) / 12 months (EULTR) without losing the status',
          '💼 Work without restrictions, without permits',
          '👨‍👩‍👧 Family Reagrupamento — simplified',
          '🎓 Access to state education on general terms',
          '🏛️ Voting in local elections (municipal) — for EU citizens and some CPLP citizens',
          '🎫 Citizenship: 5+ years of permanent residence (combined with temporary period = 5-10 years, depends on the 2026 nationality law)'
        ]},
        { kind: 'warning', text: 'Permanent residence does NOT grant citizenship automatically — you must apply separately through IRN. But it simplifies the process, because all documents are more stable + the language has already been confirmed.' }
      ]
    },
    {
      id: 'eu-long-term',
      title: 'EU Long-Term Resident — specifics',
      content: [
        { kind: 'checklist', items: [
          'Submitted through the same application to AIMA, but select "Estatuto de residente de longa duração (UE)"',
          'Requires **stable income ≥ 1.5× SMN** (€1,380/month 2026)',
          'An **integration programme** is needed: A2 + civic integration course (5-10 hours "Cidadão PT")',
          'Permitted absence from the EU: ≤ 12 consecutive months / ≤ 6 years in total',
          'Mobility: after obtaining it — notify the other EU country 30 days in advance, residence there in 1-3 months',
          '**Not** applicable: refugees with Portuguese status, students, diplomats',
          'Loss: ≥ 12 months outside the EU / 6 years outside the specific EU country → converted into a national residence permit of the country where you live'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'AIMA reception + analysis', amountEUR: 133 },
    { label: 'AIMA permanent (art. 76)', amountEUR: 351.10 },
    { label: 'Certidões Finanças / SS', amountEUR: 0 },
    { label: 'Apostilles + translations of criminal record certificates', amountEURMin: 100, amountEURMax: 300 },
    { label: 'CIPLE (if there is no certificate)', amountEUR: 85 }
  ],
  timelineDaysMin: 180,
  timelineDaysMax: 540,
  sources: [
    { title: 'Lei 23/2007 art. 125 — Permanent Authorisation', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DL 29/2012 — EU Long-Term Resident', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/29-2012-542995', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Directive 2003/109/EC', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32003L0109', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Permanent Authorisation', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 180
}
