export default {
  editorialVoice: 'hackportugal',
  id: 'naturalization-2026',
  categoryId: 'nationality',
  title: 'Naturalisation — obtaining Portuguese citizenship (2026)',
  tldr: 'Standard route: 5 years of lawful residence + Portuguese A2 + no criminal record. “Connection to Portugal” is officially NOT a mandatory requirement (the law does not name it); the IRN may assess it in borderline cases, but 5 years of lawful residence on its own is already deemed sufficient. Important: at the time of filing you do not yet have a Cartão de Cidadão — it is only issued after citizenship is granted. Attach your título de residência. The new law (Decreto AR 17/XVII, re-approved by Parliament on 01.04.2026 after President Marcelo’s December veto and the unconstitutionality in Acórdão 1133/2025) will increase the period to 7 years (CPLP+EU) / 10 years (others) and will add a cultural test. As of 03.05.2026 it awaits President Seguro’s signature — the old rules apply.',
  tags: ['citizenship', 'naturalisation', 'cplp'],
  estimatedReadMinutes: 10,
  pendingLaw: {
    summary: 'Decreto AR 17/XVII — nationality reform, re-approved by Parliament on 01.04.2026 (152 votes PSD/Chega/IL/CDS “for”, 64 “against”) after President Marcelo’s veto (December 2025) and the partial unconstitutionality in Acórdão 1133/2025. Awaiting promulgation by President António José Seguro (elected January 2026, inaugurated 09.03.2026). As of 03.05.2026 the law has NOT been promulgated, the old rules apply. If signed — the naturalisation period will increase: 7 years for CPLP+EU, 10 years for others. Specific transitional provisions depend on the final text promulgated; until publication in the DRE it is impossible to state with certainty the entry-into-force date and exact conditions. In parallel, 50 MPs from the PS (Partido Socialista) on 17.04.2026 sent the related Decreto AR 18/XVII (“loss of nationality as an additional punishment”, Penal Code change) to the Constitutional Court for preventive review.',
  },
  recentlyChangedAt: '2026-04-01',
  changeSummary: 'Parliament re-approved the law on 01.04.2026 (152 votes) after Marcelo’s December veto and the Constitutional Court’s decision. As of 03.05.2026 the law has NOT been promulgated by President Seguro. 50 MPs from the PS (Partido Socialista) sent the related Decreto 18/XVII (loss of nationality as a punishment) to the Constitutional Court. Both scenarios below.',
  variants: [
    {
      id: 'cplp',
      audience: { citizenships: ['cplp'] },
      tldr: 'For CPLP citizens: under the current law — 5 years; under the 2026 new law — 7 years. A2 language is recognised automatically (Portuguese is native/official in the country of origin, no CIPLE needed).',
      timelineDaysMin: 180,
      timelineDaysMax: 540
    },
    {
      id: 'eu-eea',
      audience: { citizenships: ['euEeaSwiss'] },
      tldr: 'For EU/EEA/Swiss citizens: 5 years under the current law; under the 2026 new law — 7 years (EU equated to CPLP). A2 language — CIPLE or an equivalent certificate required. Dual nationality is allowed.'
    },
    {
      id: 'third-country',
      audience: { citizenships: ['thirdCountry'] },
      tldr: 'For third-country nationals: 5 years under the current law; 10 years under the 2026 new law. A2 language (CIPLE or a school certificate from 150 hours). Most countries allow dual nationality — check your country’s law.'
    }
  ],
  steps: [
    {
      id: 'conditions',
      title: 'Conditions under the current law',
      content: [
        { kind: 'paragraph', text: 'Under art. 6 of Lei 37/81 (Lei da Nacionalidade) and Decreto-Lei 237-A/2006, the requirements are:' },
        { kind: 'checklist', items: [
          '📅 Lawful residence in Portugal ≥ 5 years (continuous or with breaks)',
          '🗣️ Knowledge of Portuguese at A2 — proven by a certificate (CIPLE, DEPLE, a school certificate ≥ 150 hours, a Portuguese university diploma, completion of the 6th grade in a Portuguese school). Not required for CPLP citizens.',
          '⚖️ No convictions carrying a sentence of ≥ 3 years’ imprisonment — in any country of residence',
          '🛡️ Not a threat to national security (rarely applied in practice)'
        ]},
        { kind: 'paragraph', text: 'What is NOT in the law (contrary to popular belief):' },
        { kind: 'checklist', items: [
          '❌ “Connection to Portugal” is NOT a formal requirement in art. 6. It may be requested only where there are clear signs of sham residence. 5 years of lawful residence are deemed sufficient evidence',
          '❌ No cultural/historical test required (until the 2026 new law is promulgated)',
          '❌ No renunciation of previous nationality required — Portugal allows dual nationality'
        ]}
      ]
    },
    {
      id: 'counting-years',
      title: 'How to count 5 years — the key point',
      content: [
        { kind: 'paragraph', text: 'Under the current wording of Lei 37/81 + Decreto-Lei 237-A/2006, the basic starting point is the date of first issuance of the residence permit (título de residência). However, after the 2024 amendments, for nationality purposes the time from when the temporary residence permit was **requested** is also counted, if the permit was subsequently issued.' },
        { kind: 'checklist', items: [
          '✅ From the DATE OF ISSUE of the first título de residência — the basic starting point',
          '✅ The time from the DATE OF REQUEST of the first residence permit (if later issued) — also counts, under the 2024 changes',
          '⚠️ Manifestação de Interesse: the regime was abolished by Decreto-Lei 37-A/2024 and Lei 61/2025 (in force 23.10.2025). For those who managed to file an MdI by 03.06.2024 and received a comprovativo — there is a view that the waiting period counts; the exact extent is disputed and depends on the receiving Conservatória/case law',
          '✅ Short trips (holidays, business travel) do not break the period',
          '⚠️ A long absence > 6 months in a row or > 8 months in total over 2 years may interrupt the clock — depends on the type of residence permit',
          '⚠️ If the residence permit is overdue and not renewed on time — a break in lawfulness arises'
        ]},
        { kind: 'paragraph', text: 'For an exact calculation, it is useful (but NOT mandatory) to obtain from AIMA a “Certidão de residência legal” — it confirms the dates of all residence permits and waiting periods. Ordered online at portal.aima.gov.pt.' },
        { kind: 'warning', text: 'The law has changed several times (amendments 2018, 2020, 2024). If your 5 years straddle different versions — be sure to consult an immigration lawyer. Especially for MdI cases (abolished in 2024–2025).' }
      ]
    },
    {
      id: 'pending-law',
      title: 'If President Seguro signs the new law (status as of 03.05.2026)',
      content: [
        { kind: 'paragraph', text: 'Brief timeline: 28.10.2025 — Parliament approved Decreto AR 17/XVII. 15.12.2025 — Acórdão 1133/2025 found 4 provisions unconstitutional. 19.12.2025 — President Marcelo vetoed and returned it to Parliament. January 2026 — presidential election, António José Seguro (PS) won. Inauguration 09.03.2026. 01.04.2026 — Parliament re-approved the law (152 votes PSD+Chega+IL+CDS “for”, 64 PS+Livre+PCP+BE+PAN “against”). 17.04.2026 — 50 MPs from the PS sent the related Decreto AR 18/XVII (“loss of nationality as punishment”, amendment to the Penal Code) to the Constitutional Court for preventive review. The main Decreto AR 17/XVII (the Lei da Nacionalidade itself) as of 03.05.2026 has NOT yet been promulgated by President Seguro.' },
        { kind: 'paragraph', text: 'Changes compared to the current regime:' },
        { kind: 'checklist', items: [
          '📅 CPLP: 5 → 7 years',
          '📅 EU/EEA/Switzerland: 5 → 7 years (aligned with CPLP)',
          '📅 Third countries: 5 → 10 years',
          '⏱️ Waiting time for Manifestação de Interesse / the first residence permit no longer counts — seniority runs only from the DATE OF ISSUE of the first título de residência',
          '📝 Mandatory cultural integration test (history, Constitution, society)',
          '🏠 Stricter requirements for actual presence — merely holding a residence permit is not enough, you must physically live in Portugal',
          '🚫 Abolition of the expedited Sephardic route (Lei 43/2013 + DL 30-A/2015)',
          '🔴 New ground for “loss” of nationality upon conviction to ≥5 years for particularly serious crimes (separate accompanying decree in the Constitutional Court for preventive review since 17.04.2026)',
          '⚡ Applications filed BEFORE promulgation remain under the old rules'
        ]},
        { kind: 'warning', text: 'Recommendation: if your 5 years are already accrued — apply immediately, without delay. Filing locks your case into the current legislative regime.' }
      ]
    },
    {
      id: 'language',
      title: 'Portuguese language — how to prove it',
      audience: { citizenships: ['euEeaSwiss', 'thirdCountry'] },
      content: [
        { kind: 'paragraph', text: 'Any of the following documents is sufficient:' },
        { kind: 'checklist', items: [
          '📜 CIPLE certificate (level A2) from CAPLE — €85 (2026), monthly sessions',
          '📜 DEPLE (B1), DIPLE (B2), DAPLE (C1), DUPLE (C2) certificates — from CAPLE, any above A2',
          '📜 School certificate ≥ 150 hours under the PLA programme (free state courses — see below)',
          '🎓 Diploma from a Portuguese university (any field)',
          '🏫 Certificate of completion of the 6th grade in a Portuguese school or higher',
          '🇵🇹 For CPLP citizens (Brazil, Angola, Cabo Verde, Mozambique, São Tomé, Timor-Leste, Guinea-Bissau, Equatorial Guinea) — no certificate required: Portuguese is regarded as a native/official language'
        ]},
        { kind: 'paragraph', text: 'For preparation, free courses and the exam — see the separate “CIPLE A2” guide.' }
      ]
    },
    {
      id: 'documents',
      title: 'Document bundle for submission',
      content: [
        { kind: 'checklist', items: [
          '📝 Application — formulário modelo 1-A (for naturalisation) — download on irn.pt, fill in by hand or online',
          '📄 Valid foreign passport — copy of all completed pages',
          '📄 Título de residência (residence permit) — valid. At this stage you do NOT YET have a Cartão de Cidadão — it is issued only after citizenship is granted',
          '📄 Birth certificate — apostille + sworn translation into Portuguese (full, showing parents’ names)',
          '📄 Criminal record certificate for Portugal (certidão do registo criminal) — free on eportugal.gov.pt',
          '📄 Criminal record certificate from your country of citizenship + each country of residence for ≥ 1 year in the last 5 years — with apostille and sworn translation',
          '📜 Proof of Portuguese language (for non-CPLP)',
          '💶 Fee €250 — paid to IRN (a Multibanco reference is issued upon submission)'
        ]},
        { kind: 'paragraph', text: 'What is recommended to include but is NOT officially mandatory:' },
        { kind: 'checklist', items: [
          '📜 Certidão de residência legal from AIMA — confirms the exact dates of residence permits and waiting periods. Helps the IRN verify the 5 years faster; without it IRN requests data from AIMA itself (adds 1–3 months to the timeline)',
          '📋 Evidence of “connection to Portugal”: IRS tax returns, employment contracts, marriage/children certificates, Atestado de Residência. This is NOT a legal requirement; but attaching it speeds up processing and reduces the risk of additional requests'
        ]},
        { kind: 'warning', text: 'All foreign documents must bear an apostille (or consular legalisation) + a sworn translation into Portuguese (tradutor-intérprete ajuramentado). List of sworn translators: on the website of the Ministério dos Negócios Estrangeiros.' }
      ]
    },
    {
      id: 'where',
      title: 'Where to apply',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Conservatória dos Registos Centrais (Lisboa) — main channel',
          '🏛️ Any Conservatória do Registo Civil at your place of residence',
          '🏢 Espaço Registos in a Loja do Cidadão (by appointment)',
          '🌍 Through a Portuguese consulate (if you live abroad, for example on the basis of 5 years of residency in the past)',
          '💻 Online via the Portal da Nacionalidade (irn.justica.gov.pt) — since 2025 for some cases',
          '🧑‍💼 Through an advogado under a power of attorney — submission without personal presence'
        ]}
      ]
    },
    {
      id: 'timeline',
      title: 'Timelines',
      content: [
        { kind: 'timeline', text: 'Official timeframe — 1 year from the date of filing. Actual timeframe in 2026 — 24–48 months (on average 36 months). IRN backlog >200,000 applications. Online filings are processed faster.' },
        { kind: 'paragraph', text: 'After approval the IRN publishes the decision in the Diário da República. Only from the date of publication are you a citizen of Portugal. After that: request a Cartão de Cidadão at any Loja do Cidadão (photo + biometrics, €18 standard / €33 urgente / €53 muito urgente — IRN 2026 fees), apply for a Portuguese passport with the IRN (€85), register newborn children as citizens of Portugal.' }
      ]
    }
  ],
  costs: [
    { label: 'IRN fee', amountEUR: 250 },
    { label: 'CIPLE (for non-CPLP)', amountEUR: 85, note: '2026' },
    { label: 'Sworn translations + apostilles', amountEURMin: 100, amountEURMax: 400 },
    { label: 'Certidão de residência legal AIMA (optional)', amountEUR: 15 },
    { label: 'Cartão de Cidadão after citizenship is granted', amountEUR: 18, note: 'standard; €33 urgente / €53 muito urgente' },
    { label: 'First passport', amountEUR: 85 }
  ],
  timelineDaysMin: 365,
  timelineDaysMax: 720,
  sources: [
    { title: 'IRN — Submit a nationality application', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 37/81 — Lei da Nacionalidade (art. 6)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 237-A/2006 — Regulamento da Nacionalidade Portuguesa', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2006-34456975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Certidão de residência legal', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 60
}
