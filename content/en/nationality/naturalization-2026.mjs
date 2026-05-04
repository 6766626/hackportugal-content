export default {
  editorialVoice: 'hackportugal',
  id: 'naturalization-2026',
  categoryId: 'nationality',
  title: 'Naturalisation — obtaining Portuguese citizenship (2026)',
  tldr: 'Standard route: 5 years of lawful residence + Portuguese A2 + no criminal convictions. “Connection to Portugal” is officially NOT a mandatory requirement (the law does not cite it); IRN may assess it in borderline cases, but the mere fact of 5 years of lawful residence is already considered sufficient. Important: at the time of application you do not yet have a Cartão de Cidadão — it is issued only after citizenship is granted. You attach the título de residência. **03.05.2026 President Seguro promulgated Decreto AR 48/XVII** — a reform of the Lei da Nacionalidade. After publication in the DRE (expected in the coming days) and entry into force: naturalisation period 7 years for CPLP+EU / 10 years for others, the waiting time for the first residence permit will NO LONGER count, a compulsory cultural test, the conviction threshold lowered from 5 to 3 years of imprisonment. Seguro publicly asked that cases already submitted be assessed under the old rules for legal certainty. The accompanying Decreto 49/XVII (loss of citizenship as a punishment) has NOT yet been promulgated.',
  tags: ['citizenship', 'naturalisation', 'cplp'],
  estimatedReadMinutes: 10,
  pendingLaw: {
    summary: 'Decreto AR 48/XVII (after passing through the TC renamed from 17/XVII) — reform of the Lei da Nacionalidade. **Promulgated by President Seguro on 03.05.2026.** Parliament approved on 01.04.2026 (152 votes PSD/Chega/IL/CDS “for”, 64 “against”) after Marcelo’s veto and the unconstitutionality found in Acórdão 1133/2025. The law will enter into force on the day after publication in the Diário da República (expected in the coming days after 03.05.2026). After entry into force: naturalisation period 7 years for CPLP+EU, 10 years for others; the waiting time for the first residence permit will NO LONGER count; a compulsory cultural test; the conviction threshold lowered from 5 to 3 years of imprisonment; for children born in Portugal the parents will need 5 years of valid residence permits to apply for the child’s citizenship; the Sephardic route is completely revoked. In his 03.05 speech, Seguro publicly asked that already-filed cases not be affected (“processes in progress should be assessed under the old rules for legal certainty and trust in the State”). The parallel Decreto AR 49/XVII (amendment to the Criminal Code — loss of citizenship as an additional punishment where ≥5 years for serious crimes) — as of 04.05.2026 NOT promulgated, Seguro is still considering it; 50 PS (Partido Socialista) deputies had previously referred it to the TC for preventive review.',
  },
  recentlyChangedAt: '2026-05-03',
  changeSummary: '03.05.2026 President Seguro promulgated Decreto AR 48/XVII (reform of the Lei da Nacionalidade). Parliament approved on 01.04.2026 (152 votes). The law will enter into force on the day after publication in the DRE. The President asked for the old rules to be applied to cases already submitted. The accompanying Decreto 49/XVII (loss of citizenship as punishment) has NOT yet been promulgated.',
  variants: [
    {
      id: 'cplp',
      audience: { citizenships: ['cplp'] },
      tldr: 'For CPLP citizens: under the current law — 5 years, under the 2026 new law — 7 years. Language A2 is automatically recognised (Portuguese is native/official in the country of origin, CIPLE not needed).',
      timelineDaysMin: 180,
      timelineDaysMax: 540
    },
    {
      id: 'eu-eea',
      audience: { citizenships: ['euEeaSwiss'] },
      tldr: 'For EU/EEA/Swiss citizens: 5 years under the current law, under the 2026 new law — 7 years (EU equated to CPLP). Language A2 — CIPLE or an equivalent certificate is required. Dual citizenship is allowed.'
    },
    {
      id: 'third-country',
      audience: { citizenships: ['thirdCountry'] },
      tldr: 'For third-country citizens: 5 years under the current law, 10 years under the 2026 new law. Language A2 (CIPLE or a school certificate from 150 hours). Most countries permit dual citizenship — check your country’s law.'
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
          '🗣️ Knowledge of Portuguese A2 — proven by a certificate (CIPLE, DEPLE, a school diploma ≥ 150 hours, a diploma from a Portuguese university, completion of the 6th grade of a school in Portugal). Not required for CPLP citizens.',
          '⚖️ No convictions with a sentence ≥ 3 years of imprisonment — in any country of residence',
          '🛡️ Does not pose a threat to national security (in practice applied rarely)'
        ]},
        { kind: 'paragraph', text: 'What is NOT in the law (contrary to common belief):' },
        { kind: 'checklist', items: [
          '❌ “Connection to Portugal” is NOT a formal requirement in art. 6. It can be requested only where there are obvious signs of sham residence. 5 years of lawful residence with a residence permit is considered sufficient evidence',
          '❌ No cultural/historical test required (until the 2026 new law is promulgated)',
          '❌ No requirement to renounce previous citizenship — Portugal allows dual citizenship'
        ]}
      ]
    },
    {
      id: 'counting-years',
      title: 'How to count 5 years — the key issue',
      content: [
        { kind: 'paragraph', text: 'Under the current wording of Lei 37/81 + Decreto-Lei 237-A/2006, the basic count is from the date of the first issue of a residence permit (título de residência). However, after the 2024 changes, for nationality purposes the time from when the first temporary residence permit was REQUESTED is also counted, if the permit was subsequently issued.' },
        { kind: 'checklist', items: [
          '✅ From the DATE OF ISSUE of the first título de residência — baseline starting point',
          '✅ The time from the DATE OF REQUEST of the first residence permit (if later issued) — also counts, per the 2024 changes',
          '⚠️ Manifestação de Interesse: the regime was revoked by Decreto-Lei 37-A/2024 and Lei 61/2025 (in force on 23.10.2025). For those who managed to submit an MdI before 03.06.2024 and received a comprovativo — there is a view that the waiting period counts; the exact scope is disputed and depends on the Conservatória handling it / case law',
          '✅ Short trips (holidays, business trips) do not interrupt the period',
          '⚠️ A long absence > 6 months in a row or > 8 months in total over 2 years may break the period — depends on the type of residence permit',
          '⚠️ If the residence permit is expired and not renewed on time — a break in legality arises'
        ]},
        { kind: 'paragraph', text: 'To count precisely it is useful (but NOT mandatory) to obtain from AIMA a “Certidão de residência legal” — it confirms the dates of all residence permits and waiting periods. Ordered online at portal.aima.gov.pt.' },
        { kind: 'warning', text: 'The law has changed several times (amendments 2018, 2020, 2024). If your 5 years straddle different versions — consult an immigration lawyer. Especially for MdI cases (abolished in 2024–2025).' }
      ]
    },
    {
      id: 'pending-law',
      title: 'New law (Decreto AR 48/XVII) — promulgated on 03.05.2026',
      content: [
        { kind: 'paragraph', text: 'Brief chronology: 28.10.2025 — Parliament approved the first version (Decreto AR 17/XVII). 15.12.2025 — Acórdão 1133/2025 found 4 rules unconstitutional. 19.12.2025 — President Marcelo vetoed and returned it to Parliament. January 2026 — presidential election, won by António José Seguro (from PS). Inauguration 09.03.2026. 01.04.2026 — Parliament approved the revised text (152 votes PSD+Chega+IL+CDS “for”, 64 PS+Livre+PCP+BE+PAN “against”). After passing through the TC the text received a new number — Decreto AR 48/XVII. 13.04.2026 — sent to Belém. 17.04.2026 — 50 PS deputies referred the related Decreto AR 49/XVII (amendment to the Criminal Code — loss of citizenship as punishment) to the Constitutional Court for preventive review. **03.05.2026 — President Seguro promulgated Decreto AR 48/XVII (Lei da Nacionalidade)**. The law will enter into force on the day after publication in the Diário da República. The accompanying Decreto 49/XVII (Criminal Code) as at 04.05.2026 is NOT yet promulgated.' },
        { kind: 'paragraph', text: 'Changes compared with the old regime (will take effect after publication in the DRE):' },
        { kind: 'checklist', items: [
          '📅 CPLP: 5 → 7 years',
          '📅 EU/EEA/Switzerland: 5 → 7 years (aligned with CPLP)',
          '📅 Third countries: 5 → 10 years',
          '⏱️ The waiting time for a Manifestação de Interesse / the first residence permit will NO LONGER count — the qualifying period will be counted only from the DATE OF ISSUE of the first título de residência',
          '📝 Compulsory test on knowledge of Portuguese culture, citizens’ rights and duties, and the state’s political system',
          '🏠 Strengthened requirements for real presence — it is not enough just to hold a residence permit, you must physically live in Portugal',
          '⚖️ Criminal record threshold tightened: from 5 to 3 years of imprisonment (even a lighter conviction now blocks naturalisation)',
          '👶 Children born in Portugal: for applying for the child’s citizenship on this ground the parents must have ≥5 years of valid residence permits (it used to be easier)',
          '🚫 Abolition of the expedited Sephardic route (Lei 43/2013 + DL 30-A/2015) — completely removed',
          '🔴 Loss of citizenship as an additional punishment where convicted to ≥5 years for serious crimes — this is a separate Decreto AR 49/XVII (Criminal Code), as at 04.05.2026 NOT promulgated',
          '⚡ Applications submitted BEFORE the new law enters into force — President Seguro in his 03.05.2026 speech publicly asked for them to be assessed under the old rules (“should not be effectively affected for legal certainty and trust in the State”). The final transitional regime — in the law’s text upon publication in the DRE'
        ]},
        { kind: 'warning', text: 'Recommendation: if your 5 years under the old law have already been reached or are about to be — apply IMMEDIATELY, before Decreto 48/XVII is published in the DRE. Filing anchors your case in the old legislative regime (especially in light of the President’s request to IRN). After publication the new rules will apply to all new applications.' }
      ]
    },
    {
      id: 'language',
      title: 'Portuguese knowledge — how to prove it',
      audience: { citizenships: ['euEeaSwiss', 'thirdCountry'] },
      content: [
        { kind: 'paragraph', text: 'Any of the following documents is sufficient:' },
        { kind: 'checklist', items: [
          '📜 CIPLE certificate (level A2) from CAPLE — €85 (2026), monthly sessions',
          '📜 DEPLE (B1), DIPLE (B2), DAPLE (C1), DUPLE (C2) certificates — from CAPLE, any above A2',
          '📜 School certificate ≥ 150 hours under the PLA programme (free state courses — see below)',
          '🎓 Diploma from a Portuguese university (any specialism)',
          '🏫 Certificate of completion of the 6th grade of a Portuguese school or higher',
          '🇵🇹 For CPLP citizens (Brazil, Angola, Cabo Verde, Mozambique, São Tomé, Timor-Leste, Guinea-Bissau, Equatorial Guinea) — a certificate is NOT needed: Portuguese is considered native/official'
        ]},
        { kind: 'paragraph', text: 'More on preparation, free courses and the exam — in the separate “CIPLE A2” guide.' }
      ]
    },
    {
      id: 'documents',
      title: 'Document pack for submission',
      content: [
        { kind: 'checklist', items: [
          '📝 Application — formulário modelo 1-A (for naturalisation) — download at irn.pt, fill in by hand or online',
          '📄 Valid foreign passport — copy of all completed pages',
          '📄 Título de residência (residence permit) — valid. At this stage you do NOT YET have a Cartão de Cidadão — it is issued only after citizenship is approved',
          '📄 Birth certificate — apostille + sworn translation into Portuguese (full, with parents’ names)',
          '📄 Criminal record certificate for Portugal (certidão do registo criminal) — free on eportugal.gov.pt',
          '📄 Criminal record certificate of the country of citizenship + of each country of residence ≥ 1 year in the last 5 years — with apostille and sworn translation',
          '📜 Portuguese knowledge certificate (for non-CPLP)',
          '💶 Fee €250 — paid at IRN (a Multibanco reference is issued upon filing)'
        ]},
        { kind: 'paragraph', text: 'What is advisable to attach, but officially NOT mandatory:' },
        { kind: 'checklist', items: [
          '📜 Certidão de residência legal from AIMA — confirms the exact dates of residence permits and waiting periods. Helps IRN verify the 5 years faster; without it IRN requests the data from AIMA itself (add 1–3 months to the timeframe)',
          '📋 Proof of “connection to Portugal”: IRS tax returns, employment contracts, marriage/birth certificates of children, Atestado de Residência. This is NOT a legal requirement; but attaching it speeds up assessment and reduces the risk of additional requests'
        ]},
        { kind: 'warning', text: 'All foreign documents must bear an apostille (or legalisation by the consulate) + a sworn translation into Portuguese (tradutor-intérprete ajuramentado). List of sworn translators: on the Ministério dos Negócios Estrangeiros website.' }
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
          '🌍 Through a Portuguese consulate (if you live abroad, for example on the basis of 5 years of past residence)',
          '💻 Online via the Portal da Nacionalidade (irn.justica.gov.pt) — since 2025 for some cases',
          '🧑‍💼 Through an advogado by power of attorney — submission without personal presence'
        ]}
      ]
    },
    {
      id: 'timeline',
      title: 'Processing times',
      content: [
        { kind: 'timeline', text: 'Official timeframe — 1 year from the date of submission. Actual timeframe in 2026 — 24–48 months (on average 36 months). Queue at IRN >200,000 applications. Online submissions are processed faster.' },
        { kind: 'paragraph', text: 'After approval IRN publishes the decision in the Diário da República. Only from the date of publication are you a citizen of Portugal. After this: request a Cartão de Cidadão in any Loja do Cidadão (portrait + biometrics, €18 standard issue / €33 urgente / €53 muito urgente — IRN 2026 tariffs), order a Portuguese passport at IRN (€85), register newborn children as citizens of Portugal.' }
      ]
    }
  ],
  costs: [
    { label: 'IRN fee', amountEUR: 250 },
    { label: 'CIPLE (for non-CPLP)', amountEUR: 85, note: '2026' },
    { label: 'Sworn translations + apostilles', amountEURMin: 100, amountEURMax: 400 },
    { label: 'AIMA Certidão de residência legal (optional)', amountEUR: 15 },
    { label: 'Cartão de Cidadão after citizenship is granted', amountEUR: 18, note: 'standard; €33 urgente / €53 muito urgente' },
    { label: 'First passport', amountEUR: 85 }
  ],
  timelineDaysMin: 365,
  timelineDaysMax: 720,
  sources: [
    { title: 'IRN — Submit nationality application', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 37/81 — Lei da Nacionalidade (art. 6)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 237-A/2006 — Regulamento da Nacionalidade Portuguesa', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2006-34456975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Certidão de residência legal', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Presidency of the Republic — Promulgation of Decreto AR 48/XVII (Lei da Nacionalidade)', url: 'https://www.presidencia.pt/atualidade/toda-a-atualidade/2026/05/presidente-da-republica-promulga-decreto-da-assembleia-da-republica/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-04',
  verifyIntervalDays: 60
}
