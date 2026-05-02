export default {
  editorialVoice: 'hackportugal',
  id: 'citizenship-by-marriage',
  categoryId: 'nationality',
  title: 'Portuguese citizenship by marriage or união de facto',
  tldr: 'Spouses of Portuguese citizens may apply for citizenship after 3 years of marriage. The alternative is união de facto for more than 3 years with a Portuguese citizen, recognised by a court judgment (sentença declarativa): simple registration at the Junta de Freguesia or Conservatória do Registo Civil is NOT sufficient for citizenship purposes. A CIPLE language certificate is formally NOT required. Up to 6 years of marriage, IRN/Ministério Público may request evidence of a “ligação efetiva à comunidade nacional”. Residence in Portugal is not mandatory. A new law (approved by parliament on 01.04.2026, NOT promulgated as of 28.04.2026) will increase the period to 5 years and strengthen the requirement for genuine cohabitation.',
  tags: ['citizenship', 'marriage', 'união'],
  estimatedReadMinutes: 6,
  pendingLaw: {
    summary: 'Decreto AR 17/XVII, re-approved by Parliament on 01.04.2026 (after the veto in December 2025 and unconstitutionality under TC Acórdão 1133/2025). It would increase the marriage period from 3 to 5 years, require genuine cohabitation and evidence of it, and raise the threshold for the presumption of “effective ties” from 6 to 7–8 years. As of 28.04.2026, the law has NOT been promulgated by the President — the rules of Lei 37/81 (3 years) remain in force.',
  },
  steps: [
    {
      id: 'universal',
      title: 'The process is the same for all countries',
      content: [
        { kind: 'paragraph', text: 'Unlike naturalisation (after 5/7/10 years of residence), the process through marriage or união de facto does NOT depend on the applicant’s country of origin. CPLP citizens, EU citizens, third-country nationals — the conditions are the same. There are no “fast-track” routes for Brazilians or Italians — everyone needs 3 years of marriage.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements (under the current law)',
      content: [
        { kind: 'checklist', items: [
          '💍 Marriage to a Portuguese citizen for ≥ 3 years at the time of application (Lei 37/81 art. 3 n.1)',
          '🤝 OR união de facto for >3 years with a Portuguese citizen, **recognised by a court judgment** (Lei 37/81 art. 3 n.3) — sentença declarativa from a court; a simple certificate or registration at the Junta de Freguesia is NOT acceptable for citizenship',
          '📜 Valid marriage at the time of application (no divorce, no legally recognised separation)',
          '⚖️ No criminal convictions in any country carrying a sentence of ≥ 3 years’ imprisonment'
        ]},
        { kind: 'paragraph', text: 'Formally, the following are NOT required for this route:' },
        { kind: 'checklist', items: [
          '❌ CIPLE A2 certificate — formally NOT required (language is only for naturalisation after 5+ years of residence). In practice, IRN may assess language ability as an indirect sign of an “effective tie” in marriages of <6 years',
          '❌ Residence in Portuguese territory — not mandatory; the foreign spouse may live abroad with the Portuguese citizen',
          '❌ “Connection to Portugal” as a formal checklist of requirements — it is not requested at the submission stage. But see below about the presumption'
        ]},
        { kind: 'warning', text: 'Important nuance under Lei 37/81 art. 3: for marriages of 3–6 years, it is MANDATORY to prove “ligação efetiva à comunidade nacional” (effective ties to the Portuguese community) — this is requested by the Ministério Público in the event of opposition. With ≥6 years of marriage OR joint Portuguese children, the presumption applies and there is no need to prove the tie. In other words, “not required” is a simplification for 6+ year cases.' }
      ]
    },
    {
      id: 'uniao',
      title: 'União de Facto — for CITIZENSHIP purposes',
      content: [
        { kind: 'warning', text: 'IMPORTANT: to apply for citizenship through união de facto, Lei 37/81 art. 3 n.3 requires a **court judgment from a Portuguese court** (sentença declarativa) recognising that the applicant has been living in união de facto with a Portuguese citizen for **more than 3 years** on the application date. A simple certificate from the Junta de Freguesia or general registration of união de facto without judicial recognition is NOT accepted for citizenship purposes.' },
        { kind: 'paragraph', text: 'Process for obtaining the court judgment:' },
        { kind: 'checklist', items: [
          '🏛️ File an application with the Tribunal de Família e Menores (or Tribunal Cível) for recognition of união de facto with a Portuguese citizen',
          '📋 Evidence of cohabitation: Atestado de Residência (Junta de Freguesia), joint utility bills/contracts, rental agreement/property title in both names, bank statements, photographs, correspondence',
          '👥 Witnesses — friends/relatives',
          '💶 Court costs: ~€100-300 (depends on the claim value)',
          '🧑‍⚖️ A lawyer is recommended (almost essential for foreigners)',
          '⏱️ Timescales: 6-18 months',
          '📜 You receive the certidão da sentença declarativa — this is the document for IRN'
        ]},
        { kind: 'paragraph', text: 'The duration of the união is counted from the actual start of cohabitation (not from the date of the court judgment). The court establishes the start date based on the evidence. If you have lived together for 5 years — the court recognises 5 years.' },
        { kind: 'paragraph', text: 'Additionally: general registration of união de facto at the Junta de Freguesia (under Lei 7/2001) is a simple administrative act, requires 2 years of cohabitation and is needed for social/tax benefits. This is a SEPARATE procedure from judicial recognition for citizenship.' }
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
          '📄 Valid foreign passport',
          '📄 Título de residência (residence permit) — attached if you have one, but NOT mandatory. For submission abroad (through a consulate) — not needed',
          '📄 Criminal record certificate from Portugal (certidão do registo criminal) — free on eportugal.gov.pt',
          '📄 Criminal record certificates from the country of birth, country/countries of citizenship and all countries where the applicant has lived after the age of 16 — with apostille and sworn translation, where applicable. Check the validity period of each certificate (usually 3-6 months)',
          '📄 Portuguese spouse’s birth certificate (assento de nascimento — requested automatically through IRN or attached)',
          '📝 Completed form (modelo 1-B) — download from irn.pt, signed by the applicant',
          '💶 Proof of fee payment — €250'
        ]},
        { kind: 'warning', text: 'The applicant does NOT have a Cartão de Cidadão (CC) — this is a Portuguese citizen’s document; it is issued only after citizenship is obtained. The documents include a título de residência (if any) or passport.' }
      ]
    },
    {
      id: 'where',
      title: 'Where and how to apply',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Conservatória dos Registos Centrais (Lisboa) — the main channel',
          '🏛️ Any Conservatória do Registo Civil in your area of residence (Porto, Coimbra, Faro, etc.)',
          '🏢 Espaço Registos in a Loja do Cidadão',
          '🌍 Portuguese consulate abroad — if you live outside Portugal',
          '💻 Online via the IRN portal (since 2025, operating in test mode for CPLP citizens and some marriage cases)',
          '🧑‍💼 Through a lawyer by power of attorney — without personal attendance'
        ]}
      ]
    },
    {
      id: 'timeline',
      title: 'Processing times',
      content: [
        { kind: 'timeline', text: 'The official legal deadline is 1 year. In practice in 2025–2026: 8–24 months. It depends on the completeness of the documents and the workload of the Conservatórias. Online applications are processed faster.' },
        { kind: 'paragraph', text: 'After a positive decision, IRN registers you as a citizen in the Assento de Nascimento. Only after this can you request a Cartão de Cidadão at any Loja do Cidadão and obtain a Portuguese passport at IRN.' }
      ]
    },
    {
      id: 'common-issues',
      title: 'Common issues',
      content: [
        { kind: 'checklist', items: [
          '❗ Different transliteration of the name in the passport and marriage certificate — a notarised affidavit confirming identity will be required',
          '❗ Marriage concluded in a third country is not registered at the Conservatória do Registo Civil — first register the marriage in Portugal, then apply for citizenship',
          '❗ The Portuguese spouse obtained citizenship recently (naturalisation) — the “3 years of marriage” period is counted from the date the spouse acquired citizenship, not from the wedding date',
          '❗ Divorce in progress — you cannot apply; wait for the decision',
          '❗ The partner has renounced Portuguese citizenship — the right to naturalisation through marriage is lost'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'IRN fee', amountEUR: 250 },
    { label: 'Sworn translations + apostilles', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Registration of união de facto (if needed)', amountEUR: 10 },
    { label: 'Lawyer (optional)', amountEURMin: 500, amountEURMax: 2000 }
  ],
  timelineDaysMin: 240,
  timelineDaysMax: 720,
  sources: [
    { title: 'IRN — Nationality by marriage or união de facto', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 37/81 (Lei da Nacionalidade), art. 3 — by marriage', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 237-A/2006 — Regulamento da Nacionalidade Portuguesa', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2006-34456975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — união de facto', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/reconhecimento-de-uniao-de-facto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
