export default {
  editorialVoice: 'hackportugal',
  id: 'naturalization-2026',
  categoryId: 'nationality',
  title: 'Naturalisation — Portuguese citizenship under the new law Lei Orgânica 1/2026',
  tldr: '🆕 Lei Orgânica n.º 1/2026 was published in the DR on 18/05/2026, in force from 19/05/2026. The basic route under the new law:\n\n📅 Residence period: 7 years for CPLP and EU/EEA/Swiss citizens; 10 years for third countries. ONLY time from the date of issue of the first título de residência counts — waiting time for the first residence permit NO longer counts.\n\n🗣️ Portuguese A2 knowledge (CIPLE or equivalent certificate). For CPLP — not required.\n\n📝 Mandatory test on knowledge of Portuguese culture, citizens’ rights and duties, and the political system.\n\n⚖️ Naturalisation is barred by a final conviction to effective imprisonment of more than 3 years for serious crimes (terrorism, violent and especially violent crime, highly organised crime, crimes against state security, aiding illegal immigration). The previous threshold was more than 5 years.\n\n🏠 Real physical presence — simply holding a residence permit is not enough.\n\n🚫 The Sephardic route has been completely abolished.\n\n⚖️ Transitional provision (for those who applied BEFORE 19/05/2026): the previous Lei 37/81 applies — 5 years’ residence for all nationalities, no mandatory cultural test, criminal conviction threshold of 5 years. IRN confirmed on 07–08/05/2026: the key cut-off is the submission date on the Portal da Nacionalidade online platform; everything submitted before 19/05/2026 is assessed under the old rules.\n\n🔴 Related Decreto 49/XVII (loss of citizenship as a criminal penalty): on 08/05/2026 the TC UNANIMOUSLY found it unconstitutional; on 12/05/2026 President Seguro returned it to Parliament. PSD will not reconfirm it; overcoming the TC requires 2/3 of votes — unlikely.',
  tags: ['citizenship', 'naturalisation', 'cplp'],
  estimatedReadMinutes: 10,
  recentlyChangedAt: '2026-05-19',
  changeSummary: '🆕 Lei Orgânica n.º 1/2026 was published on 18/05/2026 in the DR, in force from 19/05/2026. New naturalisation periods: 7 years for CPLP+EU, 10 years for third countries (from the date of issue of the first residence permit — waiting time NO longer counts). A mandatory cultural test has been added, the criminal conviction threshold has been reduced from 5 to 3 years, the Sephardic route has been abolished, and for children born in PT the parents must have 5 years of residence permit. Transitional provision: all applications submitted on Portal da Nacionalidade BEFORE 19/05/2026 are assessed under the previous Lei 37/81 (5 years). 🔴 Related Decreto 49/XVII (loss of citizenship as a criminal penalty) — the TC UNANIMOUSLY found it unconstitutional on 08/05/2026; President Seguro returned it to Parliament on 12/05/2026.',
  variants: [
    {
      id: 'cplp',
      audience: { citizenships: ['cplp'] },
      tldr: 'CPLP citizens under the new Lei Orgânica 1/2026 (from 19/05/2026): 7 years of legal residence + cultural test. A2 language — automatic (Portuguese as native/official language). Applied BEFORE 19/05/2026 — 5 years under the previous Lei 37/81.',
      timelineDaysMin: 180,
      timelineDaysMax: 540
    },
    {
      id: 'eu-eea',
      audience: { citizenships: ['euEeaSwiss'] },
      tldr: 'EU/EEA/Swiss citizens under the new Lei Orgânica 1/2026 (from 19/05/2026): 7 years (aligned with CPLP) + CIPLE A2 + cultural test. Dual citizenship is allowed. Applied BEFORE 19/05/2026 — 5 years under the previous Lei 37/81.'
    },
    {
      id: 'third-country',
      audience: { citizenships: ['thirdCountry'] },
      tldr: 'Third-country citizens under the new Lei Orgânica 1/2026 (from 19/05/2026): 10 years of legal residence + CIPLE A2 + cultural test. Most countries allow dual citizenship — check the law of your own country. Applied BEFORE 19/05/2026 — 5 years under the previous Lei 37/81.'
    }
  ],
  steps: [
    {
      id: 'new-law',
      title: 'Main conditions under Lei Orgânica 1/2026 (from 19/05/2026)',
      content: [
        { kind: 'paragraph', text: 'The new version of Lei 37/81, approved by Lei Orgânica n.º 1/2026 (published in the DR on 18/05/2026, in force from 19/05/2026), applies to all applications submitted on 19/05/2026 and later. Basic requirements:' },
        { kind: 'checklist', items: [
          '📅 Legal residence in Portugal: 7 years for CPLP and EU/EEA/Swiss citizens; 10 years for third-country citizens. ONLY time from the date of issue of the first título de residência counts (manifestação de interesse and waiting time for the first residence permit are NO longer counted)',
          '🗣️ Portuguese A2 knowledge: CIPLE/DEPLE/school certificate ≥ 150 hours with A2 level/Portuguese university diploma/completion of the 6th year of school in Portugal. Not required for CPLP citizens',
          '📝 Mandatory test on knowledge of Portuguese culture, citizens’ rights and duties, and the state’s political system (new requirement)',
          '🏠 Real physical presence — simply holding a residence permit is not enough; AIMA/IRN check actual residence',
          '⚖️ No final conviction to effective imprisonment of more than 3 years for serious crimes (terrorism, violent and especially violent crime, highly organised crime, crimes against state security, aiding illegal immigration) — as punishable under Portuguese law. Threshold tightened: previously more than 5 years',
          '🛡️ Does not pose a threat to national security'
        ]},
        { kind: 'paragraph', text: 'What has been abolished in the new version:' },
        { kind: 'checklist', items: [
          '🚫 The Sephardic route has been completely abolished (Lei 43/2013 + DL 30-A/2015 and LO 1/2024 — no longer apply to new applications)',
          '🚫 Waiting time for the first residence permit NO longer counts towards the naturalisation period',
          '⚠️ For children born in Portugal: to apply for the child’s citizenship on this basis, the parents must now have ≥ 5 years of valid residence permit'
        ]},
        { kind: 'paragraph', text: 'What has NOT changed:' },
        { kind: 'checklist', items: [
          '✅ Dual citizenship is allowed — renunciation of previous citizenship is NOT required',
          '✅ Submission via Portal da Nacionalidade (online) or through Conservatória/IRN'
        ]}
      ]
    },
    {
      id: 'old-law-transition',
      title: '⚖️ Transitional regime: for applications submitted BEFORE 19/05/2026',
      content: [
        { kind: 'paragraph', text: 'If your application was submitted on Portal da Nacionalidade or by another method to IRN BEFORE 19/05/2026, the previous version of Lei 37/81 applies to it (regardless of when IRN physically reviews the case). This is confirmed by the text of Lei Orgânica 1/2026 itself (transitional provision) + IRN’s public clarification of 07–08/05/2026.' },
        { kind: 'paragraph', text: 'Previous version of Lei 37/81 — key differences from the new one:' },
        { kind: 'checklist', items: [
          '📅 5 years of legal residence for ALL nationalities (CPLP, EU, third countries)',
          '🗣️ Portuguese A2 knowledge — same requirement (for non-CPLP)',
          '❌ NO cultural test',
          '⚖️ Criminal conviction threshold — more than 5 years’ imprisonment (not more than 3 years)',
          '✅ “Connection to Portugal” is NOT a formal requirement in art. 6. It may only be requested where there are obvious signs of fictitious stay. 5 years of legal residence permit is considered sufficient',
          '⏱️ Waiting time for the first residence permit (including MdI, if submitted before 03/06/2024 and a comprovativo was obtained) could be counted — the position is disputed and depends on the Conservatória/case law',
          '⚠️ The Sephardic route operated under the post-LO 1/2024 regime (residence 3+ years + committee) — but only for applications submitted before 19/05/2026'
        ]},
        { kind: 'warning', text: 'The key cut-off is the submission date on Portal da Nacionalidade, not the date of physical registration by IRN. If you managed to click “Submeter” on the online platform before 23:59 on 18/05/2026, your case follows the previous rules.' }
      ]
    },
    {
      id: 'counting-years',
      title: 'How to count the period (under the new Lei Orgânica 1/2026)',
      content: [
        { kind: 'paragraph', text: 'Under the new version (for applications from 19/05/2026 and later), the period is counted strictly from the date of issue of the first título de residência. This is a tightening: waiting time for the first residence permit and Manifestação de Interesse no longer count.' },
        { kind: 'checklist', items: [
          '✅ Starting point — the ISSUE date of the first título de residência',
          '🚫 Time from submitting the residence permit application until its issue — does NOT count',
          '🚫 Manifestação de Interesse — does NOT count (regime finally closed by Lei 61/2025)',
          '✅ Short trips abroad (holidays, business trips) do not interrupt the period',
          '⚠️ A long absence > 6 consecutive months or > 8 months in total over 2 years may interrupt the period',
          '⚠️ If the residence permit has expired and is not renewed on time — there is a break in legality'
        ]},
        { kind: 'paragraph', text: 'For an exact count, order from AIMA the certificate Certidão de residência legal — it confirms the dates of all residence permits and periods. Ordered online at portal.aima.gov.pt (~€15).' },
        { kind: 'warning', text: 'If you submitted your application BEFORE 19/05/2026 — the previous Lei 37/81 applies (5 years, waiting time may count under IRN’s 2024 position). See the “Transitional regime” section above.' }
      ]
    },
    {
      id: 'language',
      title: 'Portuguese knowledge — how to prove it',
      audience: { citizenships: ['euEeaSwiss', 'thirdCountry'] },
      content: [
        { kind: 'paragraph', text: 'Any of these documents is sufficient:' },
        { kind: 'checklist', items: [
          '📜 CIPLE certificate (A2 level) from CAPLE — €85 (2026), monthly sessions',
          '📜 DEPLE (B1), DIPLE (B2), DAPLE (C1), DUPLE (C2) certificate — from CAPLE, any level above A2',
          '📜 Certificate of successful completion of a Português Língua de Acolhimento (PLA) course or another Portuguese as a foreign language course at no lower than A2 level, issued by an eligible educational institution — “150 hours” alone without a confirmed A2 level is not enough',
          '🎓 Diploma/certificate of qualification from a Portuguese educational institution, if accepted as proof of Portuguese knowledge under the Regulamento da Nacionalidade (for English-language programmes, check with IRN in advance)',
          '🏫 Certificado of completion of the 6th year of Portuguese school or above',
          '🇵🇹 For CPLP citizens (Brazil, Angola, Cape Verde, Mozambique, Sao Tome, East Timor, Guinea-Bissau, Equatorial Guinea) — a certificate is NOT needed: Portuguese is considered native/official'
        ]},
        { kind: 'paragraph', text: 'More on preparation, free courses and the exam — in the separate “CIPLE A2” guide.' }
      ]
    },
    {
      id: 'documents',
      title: 'Document set for application',
      content: [
        { kind: 'checklist', items: [
          '📝 Application — formulário modelo 1-A (for naturalisation) — download from irn.pt, complete by hand or online',
          '📄 Valid international passport — copy of all completed pages',
          '📄 Título de residência (residence permit) — valid. At this stage you do NOT YET have a Cartão de Cidadão — it is issued only after citizenship approval',
          '📄 Birth certificate — apostille + sworn translation into Portuguese (full, with parents’ names)',
          '📄 Criminal record certificate in Portugal (certidão do registo criminal): IRN often requests it internally as part of the procedure; if ordering it yourself on ePortugal, check the current fee (usually paid)',
          '📄 Criminal record certificate from the country of citizenship + each country of residence ≥ 1 year over the last 5 years — with apostille and sworn translation',
          '📜 Portuguese knowledge certificate (for non-CPLP)',
          '💶 Fee €250 — paid at IRN (Multibanco reference issued on submission)'
        ]},
        { kind: 'paragraph', text: 'What it is advisable to attach, but is officially NOT mandatory:' },
        { kind: 'checklist', items: [
          '📜 Certidão de residência legal from AIMA — confirms the exact dates of residence permits and waiting periods. Helps IRN check the 5 years faster; without it, IRN requests the data from AIMA itself (adds 1–3 months to the timeline)',
          '📋 Proof of “connection to Portugal”: IRS tax returns, employment contracts, marriage/children’s birth certificates, Atestado de Residência. This is NOT a mandatory legal requirement; but attaching it speeds up review and reduces the risk of additional requests'
        ]},
        { kind: 'warning', text: 'Foreign documents — with apostille (or consular legalisation if the country is not in the Hague Convention).\n\nTranslation into Portuguese must be duly certified by an acceptable method: by a notary in Portugal, a consulate, an advogado/solicitador, or another method accepted by IRN.\n\nPortugal does not have a universal state system of “sworn translators” in the form found in some EU countries.' }
      ]
    },
    {
      id: 'where',
      title: 'Where to apply',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Conservatória dos Registos Centrais (Lisbon) — main channel',
          '🏛️ Any Conservatória do Registo Civil in your place of residence',
          '🏢 Espaço Registos in Loja do Cidadão (by appointment)',
          '🌍 Through a Portuguese consulate (if you live abroad, for example on the basis of 5 years’ residence in the past)',
          '💻 Online via Portal da Nacionalidade (irn.justica.gov.pt) — only for available application types and subject to the portal’s technical conditions. In practice, the online channel is more often used through an advogado/solicitador with professional authentication, rather than as a universal self-service option for all applicants',
          '🧑‍💼 Through an advogado by power of attorney — submission without personal attendance'
        ]}
      ]
    },
    {
      id: 'timeline',
      title: 'Timelines',
      content: [
        { kind: 'timeline', text: 'Official timeline — 1 year from the date of submission. Actual timeline in 2026 — 24–48 months (36 months on average). IRN queue >200,000 applications. Online submissions are processed faster.' },
        { kind: 'paragraph', text: 'After approval, the acquisition of citizenship is registered in the registo civil (assento de nacionalidade).\n\nYou become a Portuguese citizen from the date of the relevant assento — publication of the decision in Diário da República by itself is not the moment of acquisition. After registration, you can request a Cartão de Cidadão at any Loja do Cidadão (photo + biometrics, fee depends on age and validity period; urgent options are more expensive — check the current tabela de emolumentos IRN), order a Passaporte Eletrónico Português (normal in Portugal — around €65; express — €85; urgente/airport — more expensive; fees abroad differ), register newborn children as Portuguese citizens.' }
      ]
    }
  ],
  costs: [
    { label: 'IRN fee', amountEUR: 250 },
    { label: 'CIPLE (for non-CPLP)', amountEUR: 85, note: '2026' },
    { label: 'Sworn translations + apostilles', amountEURMin: 100, amountEURMax: 400 },
    { label: 'Certidão de residência legal AIMA (optional)', amountEUR: 15 },
    { label: 'Cartão de Cidadão after obtaining citizenship', amountEURMin: 10, amountEURMax: 53, note: 'fee depends on age and validity period; urgent options are more expensive — check the tabela de emolumentos IRN' },
    { label: 'Passaporte Eletrónico Português (normal in Portugal)', amountEUR: 65, note: 'express — €85; urgente/airport — more expensive; fees abroad differ' }
  ],
  timelineDaysMin: 365,
  timelineDaysMax: 720,
  sources: [
    { title: 'IRN — Submit a nationality application', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei Orgânica n.º 1/2026 (DR 18/05/2026, in force from 19/05/2026) — new version of Lei da Nacionalidade', url: 'https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2026-1123539996', kind: 'law', language: 'pt', lastRetrieved: '2026-05-18' },
    { title: 'Lei 37/81 — Lei da Nacionalidade (previous version, for applications before 19/05/2026)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 237-A/2006 — Regulamento da Nacionalidade Portuguesa', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2006-34456975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — Certidão de residência legal', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Presidency of the Republic — Promulgation of Decreto AR 48/XVII (Lei da Nacionalidade)', url: 'https://www.presidencia.pt/atualidade/toda-a-atualidade/2026/05/presidente-da-republica-promulga-decreto-da-assembleia-da-republica/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Observador — Seguro vetoes accessory penalty of loss of nationality on grounds of unconstitutionality (12/05/2026)', url: 'https://observador.pt/2026/05/12/seguro-veta-por-inconstitucionalidade-pena-acessoria-de-perda-da-nacionalidade/', kind: 'news', language: 'pt', lastRetrieved: '2026-05-13' },
    { title: 'PUBLICO — Seguro returns to Parliament law on the accessory penalty of loss of nationality (12/05/2026)', url: 'https://www.publico.pt/2026/05/12/politica/noticia/seguro-devolve-parlamento-lei-cria-pena-acessoria-perda-nacionalidade-2174367', kind: 'news', language: 'pt', lastRetrieved: '2026-05-13' },
    { title: 'RTP — Seguro vetoes accessory penalty of loss of nationality on grounds of unconstitutionality', url: 'https://www.rtp.pt/noticias/politica/seguro-veta-por-inconstitucionalidade-pena-acessoria-de-perda-da-nacionalidade_n1740733', kind: 'news', language: 'pt', lastRetrieved: '2026-05-13' },
    { title: 'PUBLICO — IRN: nationality applications count from the submission date. Pending cases are not affected (08/05/2026)', url: 'https://www.publico.pt/2026/05/08/sociedade/noticia/irn-pedidos-nacionalidade-contam-desde-data-submissao-pendentes-nao-sao-afectados-nova-lei-2174038', kind: 'news', language: 'pt', lastRetrieved: '2026-05-15' },
    { title: 'PUBLICO — Nationality applications made before the change in the law will follow the old rules (13/05/2026)', url: 'https://www.publico.pt/2026/05/13/publico-brasil/noticia/pedidos-nacionalidade-mudanca-lei-seguirao-regras-antigas-2174590', kind: 'news', language: 'pt', lastRetrieved: '2026-05-15' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 60
}
