export default {
  editorialVoice: 'hackportugal',
  id: 'citizenship-by-marriage',
  categoryId: 'nationality',
  title: 'Portuguese citizenship by marriage or união de facto',
  tldr: 'Spouses of Portuguese citizens can apply for citizenship after 3 years of marriage. The alternative is união de facto for more than 3 years with a Portuguese citizen, recognised by a court judgment (sentença declarativa): simple registration with the Junta de Freguesia or Conservatória do Registo Civil is NOT enough for citizenship purposes. A CIPLE language certificate is formally NOT required. Up to 6 years of marriage, IRN/Ministério Público may request evidence of “ligação efetiva à comunidade nacional”. Living in Portugal is not mandatory. Under the current Lei 37/81 art. 9(b), the criminal threshold = conviction for an offence with a maximum penalty of ≥ 3 years’ imprisonment.\n\n**On 03.05.2026 President Seguro promulgated Decreto AR 48/XVII** — the law enters into force on the day after publication in Diário da República; **check the current publication status on diariodarepublica.pt**.\n\nAfter entry into force: the marriage period will increase from 3 to 5 years, and a mandatory requirement for genuine cohabitation will be introduced. The text of the law contains a transitional provision — pending cases will be governed by the previous version of Lei 37/81 (3 years).',
  tags: ['citizenship', 'marriage', 'união'],
  estimatedReadMinutes: 6,
  pendingLaw: {
    summary: 'Decreto AR 48/XVII (renumbered from 17/XVII after passing through the TC), reapproved by Parliament on 01.04.2026 (after Marcelo’s veto in December 2025 and the unconstitutionality ruling in TC Acórdão 1133/2025).\n\n**Promulgated by President Seguro on 03.05.2026.** The law enters into force on the day after publication in Diário da República — **published as **Lei Orgânica n.º 1/2026**, DR 18.05.2026, in force from 19.05.2026**.\n\nAfter entry into force: the marriage period will increase from 3 to 5 years, a mandatory requirement for genuine cohabitation and evidence of it will be introduced, and the presumption threshold for “effective links” will rise from 6 to 7–8 years. Under the current Lei 37/81 art. 9(b), the criminal threshold already = 3 years’ imprisonment — the new wording tightens the assessment of “links”, rather than lowering the threshold itself.\n\nIMPORTANT: the text of the law contains a transitional provision — administrative proceedings pending on the date of entry into force are governed by the previous version of Lei 37/81 (the PS proposal for broader transitional guarantees was rejected). In his speech on 03.05.2026, Seguro also publicly requested that already-filed cases be considered under the old rules for the sake of legal certainty.\n\nFor applications filed BEFORE 19.05.2026, the Lei 37/81 rules (3 years) apply to all applicants.',
  },
  steps: [
    {
      id: 'universal',
      title: 'The process is the same for all countries',
      content: [
        { kind: 'paragraph', text: 'Unlike naturalisation (after 5/7/10 years of residence), the marriage or união de facto route does NOT depend on the applicant’s country of origin. CPLP citizens, EU citizens, third-country nationals — the conditions are the same. There are no “fast-track” routes for Brazilians or Italians — everyone needs 3 years of marriage.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements (under the current law)',
      content: [
        { kind: 'checklist', items: [
          '💍 Marriage to a Portuguese citizen for ≥ 3 years at the time of application (Lei 37/81 art. 3 n.1)',
          '🤝 OR união de facto for >3 years with a Portuguese citizen, **recognised by a court judgment** (Lei 37/81 art. 3 n.3) — sentença declarativa from a court; a simple certificate or registration with the Junta de Freguesia is NOT suitable for citizenship',
          '📜 Valid marriage at the time of application (no divorce, no legally recognised separation)',
          '⚖️ No criminal convictions in any country with a penalty of ≥ 3 years’ imprisonment'
        ]},
        { kind: 'paragraph', text: 'Formally, this route does NOT require:' },
        { kind: 'checklist', items: [
          '❌ CIPLE A2 certificate — formally NOT required (language is only for naturalisation after 5+ years of residence). In practice, IRN may assess language ability as indirect evidence of an “effective link” for marriages <6 years',
          '❌ Residence in Portugal — not mandatory; the foreign spouse may live with the Portuguese citizen abroad',
          '❌ “Link to Portugal” as a formal list of requirements — it is not requested at the intake stage. But see below regarding the presumption'
        ]},
        { kind: 'warning', text: 'Important nuance under Lei 37/81 art. 3: for marriages of 3–6 years, it is MANDATORY to prove “ligação efetiva à comunidade nacional” (effective link to the Portuguese community) — Ministério Público requests it in opposition proceedings. With ≥6 years of marriage OR where there are joint Portuguese children, the presumption applies and it is not necessary to prove the link. In other words, “not required” is a simplification for 6+ year cases.' }
      ]
    },
    {
      id: 'uniao',
      title: 'União de Facto — for CITIZENSHIP purposes',
      content: [
        { kind: 'warning', text: 'IMPORTANT: to apply for citizenship through união de facto, Lei 37/81 art. 3 n.3 requires a **court judgment from a Portuguese court** (sentença declarativa), recognising that the applicant has lived in união de facto with a Portuguese citizen for **more than 3 years** on the application date. A simple certificate from the Junta de Freguesia or general registration of união de facto without judicial recognition is NOT accepted for citizenship purposes.' },
        { kind: 'paragraph', text: 'Process for obtaining the court judgment:' },
        { kind: 'checklist', items: [
          '🏛️ File an application with the Tribunal de Família e Menores (or Tribunal Cível) for recognition of união de facto with a Portuguese citizen',
          '📋 Evidence of living together: Atestado de Residência (Junta de Freguesia), joint utility bills/contracts, rental/property agreement in both names, bank statements, photographs, correspondence',
          '👥 Witnesses — friends/relatives',
          '💶 Court costs: ~€100-300 (depends on the value of the claim)',
          '🧑‍⚖️ A lawyer is recommended (for foreigners, almost essential)',
          '⏱️ Timelines: 6-18 months',
          '📜 You receive the certidão da sentença declarativa — this is the document for IRN'
        ]},
        { kind: 'paragraph', text: 'The period of união is counted from the factual start of living together (not from the date of the court judgment). The court determines the start date based on the evidence. If you have lived together for 5 years, the court recognises 5 years.' },
        { kind: 'paragraph', text: 'Additionally: general registration of união de facto with the Junta de Freguesia (under Lei 7/2001) is a simple administrative act, requires 2 years of living together, and is needed for social/tax benefits. This is a SEPARATE procedure from judicial recognition for citizenship.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for submission to IRN',
      content: [
        { kind: 'checklist', items: [
          '📄 Marriage certificate (if the marriage was not concluded in Portugal — apostille + sworn translation into Portuguese). If the marriage was in Portugal — the assento number from the Conservatória do Registo Civil is sufficient',
          '📄 For união — certidão da sentença declarativa from a Portuguese court (NOT just a certificate from the Junta de Freguesia)',
          '📄 Applicant’s birth certificate (apostille + sworn translation; for naturalised citizens of the country of origin — full certificate with parents)',
          '📄 Valid international passport',
          '📄 Título de residência (residence permit) — attached if available, but NOT mandatory. For applications abroad (through a consulate) — not needed',
          '📄 Portuguese certidão do registo criminal — usually requested by IRN/services themselves as part of the procedure; if ordering it yourself via ePortugal, check the current fee (as a rule, it is paid)',
          '📄 Criminal record certificates from the country of birth, country/countries of citizenship, and all countries where the applicant has lived after the age of 16 — with apostille/legalisation and translation, where applicable. Check the validity period of each certificate (usually 3-6 months)',
          '📄 Birth certificate of the Portuguese spouse (assento de nascimento — requested automatically through IRN or attached)',
          '📝 Current IRN impresso for aquisição da nacionalidade por casamento ou união de facto (usually Modelo 3 — download from the IRN/Justiça website). The signature is certified in the prescribed form (presencialmente or por autenticidade)',
          '💶 Proof of fee payment — €250'
        ]},
        { kind: 'warning', text: 'The applicant does NOT have a Cartão de Cidadão (CC) — it is a Portuguese citizen’s document; it is issued only after obtaining citizenship. The documents include a título de residência (if available) or a passport.' }
      ]
    },
    {
      id: 'where',
      title: 'Where and how to apply',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Conservatória dos Registos Centrais (Lisboa) — the main channel',
          '🏛️ Any Conservatória do Registo Civil in your place of residence (Porto, Coimbra, Faro, etc.)',
          '🏢 Espaço Registos in a Loja do Cidadão',
          '🌍 Portuguese consulate abroad — if you live outside Portugal',
          '💻 Online through the IRN portal — only if the relevant application type is available on the portal; in practice, this channel is more often used via an advogado/solicitador with professional authentication, rather than as a universal self-service option for all applicants',
          '🧑‍💼 Through a lawyer by power of attorney — without personal attendance'
        ]}
      ]
    },
    {
      id: 'timeline',
      title: 'Processing times',
      content: [
        { kind: 'timeline', text: 'The official legal deadline is 1 year. In practice in 2025–2026: 8–24 months. It depends on the completeness of the documents and the workload of the Conservatórias. Online applications are processed faster.' },
        { kind: 'paragraph', text: 'After a positive decision, IRN registers you as a citizen in the Assento de Nascimento. Only after this can you request a Cartão de Cidadão at any Loja do Cidadão and obtain a Portuguese passport from IRN.' }
      ]
    },
    {
      id: 'common-issues',
      title: 'Common issues',
      content: [
        { kind: 'checklist', items: [
          '❗ Different transliteration of the name in the passport and marriage certificate — a notarised affidavit confirming identity will be required',
          '❗ A marriage concluded in a third country is not registered with the Conservatória do Registo Civil — first register the marriage in Portugal, then apply for citizenship',
          '❗ The spouse became Portuguese only after the wedding — the law refers to marriage of more than 3 years to a Portuguese citizen at the time of application and to the validity/transcription of the marriage; the exact count “from the date the spouse acquired citizenship” is debatable, check with IRN/a lawyer',
          '❗ Divorce proceedings ongoing — you cannot apply; wait for the decision',
          '❗ The partner has renounced Portuguese citizenship — the right to naturalisation by marriage is lost'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IRN fee', amountEUR: 250 },
    { label: 'Sworn translations + apostilles', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Judicial recognition of união de facto for citizenship', amountEURMin: 100, amountEURMax: 1500, note: 'Court costs + possible advogado; for citizenship, a simple Atestado da Junta (~€10) is NOT sufficient' },
    { label: 'Lawyer (optional)', amountEURMin: 500, amountEURMax: 2000 }
  ],
  timelineDaysMin: 240,
  timelineDaysMax: 720,
  sources: [
    { title: 'IRN — Nationality by marriage or união de facto', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 37/81 (Lei da Nacionalidade), art. 3 — by marriage', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 237-A/2006 — Regulamento da Nacionalidade Portuguesa', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2006-34456975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — união de facto', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/reconhecimento-de-uniao-de-facto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Presidência da República — Promulgation of Decreto AR 48/XVII (Lei da Nacionalidade)', url: 'https://www.presidencia.pt/atualidade/toda-a-atualidade/2026/05/presidente-da-republica-promulga-decreto-da-assembleia-da-republica/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 90
}
