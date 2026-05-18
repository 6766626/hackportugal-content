export default {
  editorialVoice: 'hackportugal',
  id: 'permanent-residence-eu',
  categoryId: 'residence_permit',
  title: 'Portuguese permanent residence (arts. 76, 80) and EU Long-Term Resident (arts. 125+)',
  tldr: 'After 5 years holding a temporary residence permit in Portugal, you can apply for **Autorização de Residência Permanente** (arts. 76 and 80 Lei 23/2007). **The autorização itself is INDEFINITE** (sem limite de tempo); only the **título/card is renewed every 5 years** (art. 76 nº 4 Lei 23/2007). Alternative: **Estatuto de Residente de Longa Duração UE / EU Long-Term Resident** (arts. 125+ Lei 23/2007, transposes Directive 2003/109/EC) — also a 5-year card, makes moving to many EU countries easier (NOT automatic freedom of movement like EU citizens have; Denmark/Ireland do not participate). Requirements: 5 years of TEMPORARY residence, Portuguese A2, no judicial conviction for an offence with pena privativa de liberdade > 1 year, stable resources. Application to AIMA.',
  tags: ['permanent residence', 'permanent', 'residence permit', 'eu-long-term'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'national-vs-eu',
      title: 'Two types of permanent residence — which one to choose',
      content: [
        { kind: 'substeps', items: [
          { id: 'n1', title: '🇵🇹 Autorização de Residência Permanente (national)', content: [
            { kind: 'checklist', items: [
              '**The autorização itself is indefinite** (sem limite de tempo, art. 76 Lei 23/2007). **The card (título de residência) is renewed every 5 years** (art. 76 nº 4)',
              'Right to work, live and study in Portugal without restrictions',
              'Risk of cancellation if absent for 24 consecutive months OR 30 months in total over 3 years without a valid reason (art. 85 Lei 23/2007)',
              'Under current law, naturalisation is after 5 years of legal residence — **on 03.05.2026 President Seguro promulgated Decreto AR 48/XVII**, which after publication in the DRE will increase the period to 7 years for CPLP/EU and 10 years for everyone else. Permanent residence is NOT mandatory for applying for citizenship',
              'Family members receive a temporary residence permit, then can follow their own path to permanent residence',
              'Does not grant rights in other EU countries'
            ]}
          ]},
          { id: 'n2', title: '🇪🇺 EU Long-Term Resident (EULTR)', content: [
            { kind: 'checklist', items: [
              'The card is valid for 5 years → renewal (long-term resident status is also indefinite; only the card is renewed)',
              'Makes moving to many EU countries easier: after entering a second state, you usually need to apply for a local residence permit and meet its conditions (this is NOT freedom of movement like EU citizens have)',
              'Does NOT apply to Denmark and Ireland (they do not participate in Directive 2003/109/EC)',
              'Requirements: stable and regular subsistence resources, health insurance, basic knowledge of Portuguese',
              'Risk of loss if absent from the EU for 12 consecutive months and in other cases provided for by Lei 23/2007/Directive 2003/109',
              'Advantageous for those planning mobility within the EU'
            ]}
          ]},
          { id: 'n3', title: '🤔 Recommendation', content: [
            { kind: 'paragraph', text: 'For most residents — **national permanent residence**: the procedure is simpler, fewer documents are needed, and it does not expire. EULTR — if you are genuinely planning to move to another EU country within 1-3 years. In theory, you can have national permanent residence and/or EU long-term resident status, but the procedure and endorsement/card depend on AIMA — it is better to clarify the strategy before applying.' }
          ]}
        ]}
      ]
    },
    {
      id: 'conditions',
      title: 'Application conditions (arts. 76, 80)',
      content: [
        { kind: 'checklist', items: [
          '📅 **5 years holding a temporary residence permit** in Portugal. Do NOT confuse this with citizenship rules: waiting periods for applications may matter for the nationality clock, but usually do NOT replace 5 years of temporary residence permit for permanent residence',
          '🗣️ **Portuguese A2** — CIPLE/CAPLE certificate, certificado de curso de português reconhecido, or another document expressly accepted by AIMA under law/regulations',
          '💰 **Stable and regular subsistence resources** — usually employment, pension, income; AIMA is guided by Portuguese subsistence thresholds',
          '🏠 **Suitable accommodation** — rental contract / ownership, floor area according to family size',
          '⚕️ **Health insurance or SNS utente** — works if you are registered',
          '⚖️ **No criminal record** for an offence which under Portuguese law is punishable by imprisonment of more than 1 year (art. 80 Lei 23/2007)',
          '📋 **No debts** to Finanças and Segurança Social',
          '🛡️ No breaches of immigration law (overstaying, illegal work)'
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
          '💼 Proof of income: IRS Anexo A for 3 years, 12 monthly payslips or Anexo B (for self-employed persons)',
          '🏠 atestado de residência from Junta + rental contract',
          '💳 Certidões sem dívida: Finanças + Segurança Social (free on e-portals)',
          '⚖️ Registo criminal: Portugal (free on eportugal.gov.pt) + countries of residence for ≥ 1 year in the last 5 years',
          '📸 2 photos 3x4',
          '💶 Fee payment'
        ]}
      ]
    },
    {
      id: 'process',
      title: 'Application process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Apply to AIMA', content: [
            { kind: 'paragraph', text: 'Application depends on the current AIMA channel: online portal, if AIMA has opened the relevant option, or appointment/submission through AIMA. Check the AIMA page for “autorização de residência permanente” / “estatuto de residente de longa duração” before applying.' }
          ]},
          { id: 'p2', title: '2. Pay the fee', content: [
            { kind: 'paragraph', text: 'AIMA — concessão art. 76 = **€351.10** (tabela 01.03.2026). Additionally, reception + analysis ~€133.' }
          ]},
          { id: 'p3', title: '3. Interview at AIMA (if required)', content: [
            { kind: 'paragraph', text: 'Usually not required for national permanent residence, but applicants are sometimes called in. For EU Long-Term — an interview is mandatory.' }
          ]},
          { id: 'p4', title: '4. Decision', content: [
            { kind: 'timeline', text: '6-12 months (under Lei 61/2025 — up to 9 legal months). In reality in 2026 — up to 18 months due to queues.' }
          ]},
          { id: 'p5', title: '5. Receive the card', content: [
            { kind: 'paragraph', text: 'The permanent residence card arrives by post. **The card is valid for 5 years** (both for national permanent residence under art. 76 nº 4 and for EULTR). The autorização itself is indefinite — only the plastic card is renewed.' }
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
          '🌍 National permanent residence: risk of cancellation if absent for 24 consecutive months OR 30 months in total over 3 years without a valid reason. EULTR: risk of loss if absent from the EU for 12 consecutive months and in other cases',
          '💼 Work without restrictions, without permits',
          '👨‍👩‍👧 Family Reagrupamento — check the current conditions under Lei 23/2007 (after Lei 61/2025)',
          '🎓 Access to public education on general terms',
          '🏛️ Voting in local elections (municipal) — for EU citizens and some CPLP citizens',
          '🎫 Citizenship: a separate procedure through IRN. Permanent residence is NOT mandatory. Under current law — 5 years of legal residence; **on 03.05.2026 President Seguro promulgated Decreto AR 48/XVII** — after publication in the DRE it will be 7 years for CPLP/EU and 10 years for everyone else'
        ]},
        { kind: 'warning', text: 'Permanent residence does NOT grant citizenship automatically — you must apply separately through IRN. But it makes the process easier, as all documents are more stable + the language has already been confirmed.' }
      ]
    },
    {
      id: 'eu-long-term',
      title: 'EU Long-Term Resident — specifics',
      content: [
        { kind: 'checklist', items: [
          'Application is submitted to AIMA, selecting “Estatuto de residente de longa duração (UE)”',
          'Stable and regular subsistence resources, sufficient for the applicant and family without recourse to social assistance (exact threshold — check with AIMA)',
          'Integration condition — in Portugal, usually proof of basic knowledge of the Portuguese language in a form accepted by AIMA',
          'To OBTAIN EULTR: the 5-year residence must be continuous — usual absence limits of no more than 6 consecutive months and no more than 10 months in total over 5 years, unless exceptions apply',
          'Mobility to a second EU state: apply for a local residence permit usually within 3 months after entry and meet that country’s conditions; some countries require prior steps / a visa / labour market test',
          'Exceptions and special rules: diplomatic/temporary statuses are excluded; study periods usually do not confer eligibility by themselves and may be counted partially; beneficiaries of international protection — there are special rules under Lei 23/2007 / Directive 2011/51/EU',
          'Loss: after obtaining the status, separate Lei 23/2007 rules apply (risk in case of long absence from the EU and in other cases)'
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
    { title: 'Lei 23/2007 — Autorização de Residência Permanente (arts. 76, 80) and Residente de Longa Duração (arts. 125+)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'DL 29/2012 — EU Long-Term Resident', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/29-2012-542995', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Directive 2003/109/EC', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32003L0109', kind: 'law', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Permanent Authorisation', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
