export default {
  editorialVoice: 'hackportugal',
  id: 'permanent-residence-eu',
  categoryId: 'residence_permit',
  title: 'Portugal permanent residence (arts. 76, 80) and EU Long-Term Resident (arts. 125+)',
  tldr: 'After 5 years of holding a temporary autorização de residência in Portugal, you can apply for Autorização de Residência Permanente (arts. 76 and 80 Lei 23/2007).\n\nThe autorização itself is INDEFINITE (sem limite de tempo); only the título/card is renewed every 5 years (art. 76 nº 4 Lei 23/2007). Alternative: Estatuto de Residente de Longa Duração UE / EU Long-Term Resident (arts. 125+ Lei 23/2007, transposes Directive 2003/109/EC) — also a 5-year card, makes moving to many EU countries easier (NOT automatic freedom of movement like EU citizens have; Denmark/Ireland do not participate). Requirements: 5 years of TEMPORARY residence, Portuguese A2, no judicial conviction for an offence with pena privativa de liberdade > 1 year, stable resources. Application to AIMA.',
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
              'The autorização itself is indefinite (sem limite de tempo, art. 76 Lei 23/2007). The card (título de residência) is renewed every 5 years (art. 76 nº 4)',
              'The right to work, live and study in Portugal without restrictions',
              'Risk of cancellation if absent for 24 consecutive months OR 30 months in total over 3 years without a justified reason (art. 85 Lei 23/2007)',
              'Lei Orgânica 1/2026 (published 18.05.2026, in force from 19.05.2026): naturalisation now takes 7 years for CPLP/EU and 10 years for others (instead of the previous 5). Permanent residence is NOT required to apply for citizenship, but becomes more valuable as an intermediate stable status during those 7–10 years of waiting',
              'Family members receive a temporary residence permit, then can follow their own path to permanent residence',
              'Does not grant rights in other EU countries'
            ]}
          ]},
          { id: 'n2', title: '🇪🇺 EU Long-Term Resident (EULTR)', content: [
            { kind: 'checklist', items: [
              'The card is valid for 5 years → renewal (long-term resident status is also indefinite; only the card is renewed)',
              'Makes moving to many EU countries easier: after entering the second state, you usually need to apply for a local residence permit and meet its conditions (this is NOT freedom of movement like EU citizens have)',
              'Does NOT apply to Denmark and Ireland (they do not participate in Directive 2003/109/EC)',
              'Requirements: stable and regular means of subsistence, health insurance, basic knowledge of Portuguese',
              'Risk of loss if absent from the EU for 12 consecutive months and in other cases provided for by Lei 23/2007/Directive 2003/109',
              'Useful for those planning mobility within the EU'
            ]}
          ]},
          { id: 'n3', title: '🤔 Recommendation', content: [
            { kind: 'paragraph', text: 'For most residents — national permanent residence: the procedure is simpler, there are fewer documents, and it does not expire. EULTR — if you genuinely plan to move to another EU country within 1-3 years. In theory, you can have national permanent residence and/or EU long-term resident status, but the procedure and endorsement/card depend on AIMA — it is better to clarify the strategy before applying.' }
          ]}
        ]}
      ]
    },
    {
      id: 'conditions',
      title: 'Application conditions (arts. 76, 80)',
      content: [
        { kind: 'checklist', items: [
          '📅 5 years of holding a temporary autorização de residência in Portugal. Do NOT confuse this with citizenship rules: waiting periods for applications may matter for the nationality clock, but usually do NOT replace 5 years of temporary residence permit for permanent residence',
          '🗣️ Portuguese A2 — CIPLE/CAPLE certificate, certificado de curso de português reconhecido, or another document expressly accepted by AIMA under the law/regulations',
          '💰 Stable and regular means of subsistence — usually employment, pension, income; AIMA is guided by Portuguese subsistence thresholds',
          '🏠 Suitable accommodation — rental contract / ownership, floor area according to family size',
          '⚕️ Health insurance or SNS utente — works if you are registered',
          '⚖️ No criminal conviction for an offence which, under Portuguese law, is punishable by imprisonment of more than 1 year (art. 80 Lei 23/2007)',
          '📋 No debts to Finanças and Segurança Social',
          '🛡️ No breaches of immigration law (overstay, illegal work)'
        ]}
      ]
    },
    {
      id: 'counting-5-years',
      title: 'When the 5 years start: important nuances',
      content: [
        { kind: 'paragraph', text: 'Main rule: the 5 years count from the issue date of the FIRST autorização de residência card (título de residência). NOT from visa entry, NOT from MdI submission, NOT from D-visa issuance. But the edge cases matter:' },
        { kind: 'checklist', items: [
          'D-visa before the first card — does NOT count. A visa is permission to enter, not to reside.',
          'Manifestação de Interesse (MdI) — NEVER counted for either national ARP or EULTR. Lei 38/2024 briefly allowed it for nationality, Lei Orgânica 1/2026 reversed it. The MdI regime itself was revoked by Lei 61/2025.',
          'Renewal queue with a timely-filed request — COUNTS as continuous legal residence (art. 78 + DR 84/2007 art. 61). Since October 2025 AIMA has explicitly extended the validity of expired cards.',
          'A gap with no valid título and no pending renewal — resets the clock. AIMA usually forgives short gaps if the prior renewal was filed on time.',
          'SEF→AIMA transition period with expired SEF cards plus a confirmed pending renewal — COUNTS. Evidenced by an AIMA certidão.',
          'Conversions between visa types (D2→D7, D7→D8) — the clock does NOT reset, as long as the autorização de residência was held continuously. Continuity of holding matters, not the type.',
          'Family reunification (reagrupamento): a family member has THEIR OWN start date — their first reagrupamento card, NOT the date of the principal resident.',
          'Children born in Portugal to non-EU residents — art. 122 nº 1 al. a (NOT 81!). Their own first card starts their 5 years.',
          'Students: for national ARP (art. 80), time on an autorização para estudo counts in full. For EULTR (art. 126 nº 3) it counts only 50%; pure students cannot be EULTR beneficiaries at all until they convert the status.'
        ] },
        { kind: 'warning', text: 'If your 5-year history is non-linear (visa changes, gaps, long absences, SEF→AIMA transition) — order a certidão de residência from AIMA before applying. It shows all your periods of legal residence in a single document and removes disputes at the appointment.' }
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
          '💼 Proof of income: IRS Anexo A for 3 years, 12 monthly payslips or Anexo B (for self-employed workers)',
          '🏠 Atestado de residência from Junta + rental contract',
          '💳 Certidões sem dívida: Finanças + Segurança Social (free on e-portals)',
          '⚖️ Registo criminal: Portugal (free on gov.pt) + countries of residence ≥ 1 year in the last 5 years',
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
          { id: 'p1', title: '1. Apply to AIMA', content: [
            { kind: 'paragraph', text: 'Submission depends on the current AIMA channel: online portal, if AIMA has opened the relevant option, or appointment/submission through AIMA. Check the AIMA page for “autorização de residência permanente” / “estatuto de residente de longa duração” before applying.' }
          ]},
          { id: 'p2', title: '2. Pay the fee', content: [
            { kind: 'paragraph', text: 'AIMA — concessão art. 76 = €351.10 (tabela 01.03.2026). Additional reception + analysis ~€133.' }
          ]},
          { id: 'p3', title: '3. Interview at AIMA (if required)', content: [
            { kind: 'paragraph', text: 'Usually not required for national permanent residence, but applicants are sometimes called. For EU Long-Term — an interview is mandatory.' }
          ]},
          { id: 'p4', title: '4. Decision', content: [
            { kind: 'timeline', text: '6-12 months (under Lei 61/2025 — up to 9 lawful months). In practice in 2026 — up to 18 months due to queues.' }
          ]},
          { id: 'p5', title: '5. Receive the card', content: [
            { kind: 'paragraph', text: 'The permanent residence card arrives by post. The card validity period is 5 years (both for national permanent residence under art. 76 nº 4 and for EULTR). The autorização itself is indefinite — only the plastic card is renewed.' }
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: 'After obtaining permanent residence',
      content: [
        { kind: 'checklist', items: [
          '🎂 There is no mandatory “recalculation” of time — renewal of the CARD every 5 years (the autorização itself is indefinite)',
          '🌍 National permanent residence: risk of cancellation if absent for 24 consecutive months OR 30 months in total over 3 years without a justified reason. EULTR: risk of loss if absent from the EU for 12 consecutive months and in other cases',
          '💼 Work without restrictions, without permits',
          '👨‍👩‍👧 Family Reagrupamento — check the current conditions under Lei 23/2007 (after Lei 61/2025)',
          '🎓 Access to state education on general terms',
          '🏛️ Voting in local elections (municipal) — for EU citizens and certain CPLP nationals',
          '🎫 Citizenship: separate procedure through IRN. Permanent residence is NOT required. Lei Orgânica 1/2026 (in force from 19.05.2026): now 7 years for CPLP/EU and 10 years for others (instead of the previous 5)'
        ]},
        { kind: 'warning', text: 'Permanent residence does NOT grant citizenship automatically — you must apply separately through IRN. But it makes the process easier, as all documents are more stable + language has already been confirmed.' }
      ]
    },
    {
      id: 'eu-long-term',
      title: 'EU Long-Term Resident — specifics',
      content: [
        { kind: 'checklist', items: [
          'Application is made to AIMA, selecting “Estatuto de residente de longa duração (UE)”',
          'Stable and regular means of subsistence, sufficient for the applicant and family without recourse to social assistance (exact threshold — check with AIMA)',
          'Integration condition — in Portugal, usually proof of basic knowledge of the Portuguese language in a form accepted by AIMA',
          'To OBTAIN EULTR: the 5-year residence must be continuous — the usual absence limits are no more than 6 consecutive months and no more than 10 months in total over 5 years, unless exceptions apply',
          'Mobility to a second EU state: usually apply for a local residence permit within 3 months after entry and meet that country’s conditions; some countries require preliminary steps / a visa / labour market test',
          'Exceptions and special rules: diplomatic/temporary statuses are excluded; study periods usually do not give entitlement by themselves and may be counted partially; beneficiaries of international protection — there are special rules under Lei 23/2007 / Directive 2011/51/EU',
          'Loss: after obtaining it, separate rules under Lei 23/2007 apply (risk in case of long absence from the EU and in other cases)'
        ]}
      ]
    },
    {
      id: 'common-myths',
      title: 'Myths about ARP and EULTR',
      content: [
        { kind: 'paragraph', text: 'These misconceptions show up frequently in discussions of national ARP vs EULTR. Reality as of May 2026:' },
        { kind: 'checklist', items: [
          '❌ "EULTR = automatic right to live in any EU country like EU citizens do" — No, it is the right to APPLY for residence in another EU country under the national rules of that country. Denmark and Ireland do not participate in Directive 2003/109 at all.',
          '❌ "You must choose between national ARP and EULTR" — You can hold both statuses simultaneously. Lawyers (PaxLegal, Lexidy, Fiolegal) often recommend the national ARP first (simpler, cheaper), then EULTR on top.',
          '❌ "Student years count the same for both" — For national ARP (art. 80), they count in full. For EULTR (art. 126 nº 3), only 50%; pure students are excluded altogether.',
          '❌ "Long absences are equally dangerous" — Different thresholds: national ARP is lost after 24 consecutive months or 30/36 interpolated. EULTR is lost after 12 months outside the EU.',
          '❌ "Resources for EULTR are the same as for ARP" — EULTR requires recursos estáveis e regulares (benchmarked against SMN/pension), plus EXPLICITLY health insurance or SNS. ARP wording is softer — meios de subsistência.',
          '❌ "Manifestação de Interesse counted for one of them" — No, it never counted for either ARP or EULTR.',
          '❌ "The EULTR card moves with you to another EU country" — No. EULTR is a Portuguese status. In another EU country you apply for THEIR residence permit (usually within 3 months of entry), but the Portuguese EULTR strengthens the case.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'AIMA reception + analysis', amountEUR: 133 },
    { label: 'AIMA permanent (art. 76)', amountEUR: 351.10 },
    { label: 'Certidões Finanças / SS', amountEUR: 0 },
    { label: 'Apostilles + translations of criminal record certificates', amountEURMin: 100, amountEURMax: 300 },
    { label: 'CIPLE (if you do not have a certificate)', amountEUR: 85 }
  ],
  timelineDaysMin: 180,
  timelineDaysMax: 540,
  sources: [
    { title: 'Lei 23/2007 — Autorização de Residência Permanente (arts. 76, 80) and Residente de Longa Duração (arts. 125+)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DL 29/2012 — EU Long-Term Resident', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/29-2012-542995', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Directive 2003/109/EC', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32003L0109', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Permanent Authorisation', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  recentlyChangedAt: '2026-05-25',
  changeSummary: 'May 2026 update: (1) Deeper comparison of national ARP (art. 80) and EULTR (art. 125+): students count differently, different absence thresholds, different resource standards. (2) Step "When the 5 years start" with 9 edge cases (D-visa, MdI, renewal queue, gaps, SEF→AIMA, conversions, reagrupamento, children born in PT, students). (3) Common myths about ARP vs EULTR differences. (4) Lei Orgânica 1/2026 (in force from 19.05.2026): citizenship now takes 7/10 years, ARP becomes more important as an intermediate status.',
  verifyIntervalDays: 180
}
