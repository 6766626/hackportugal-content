export default {
  editorialVoice: 'hackportugal',
  id: 'citizenship-by-marriage',
  categoryId: 'nationality',
  title: 'Portuguese citizenship by marriage or união de facto',
  tldr: 'Spouses of Portuguese citizens may apply for citizenship after 3 years of marriage. Alternative — união de facto of more than 3 years with a Portuguese citizen, recognised by a court judgment (sentença declarativa): simple registration at the Junta de Freguesia or the Conservatória do Registo Civil is NOT sufficient for nationality purposes. A CIPLE language certificate is formally NOT required. Up to 6 years of marriage, IRN/Ministério Público may request evidence of “ligação efetiva à comunidade nacional”. Living in Portugal is not mandatory. A new law (approved by Parliament on 01.04.2026, NOT promulgated as of 03.05.2026) will increase the period to 5 years and strengthen the requirement of real cohabitation.',
  tags: ['citizenship', 'marriage', 'união'],
  estimatedReadMinutes: 6,
  pendingLaw: {
    summary: 'Decreto AR 17/XVII, re-approved by Parliament on 01.04.2026 (after the veto in December 2025 and the unconstitutionality in TC Acórdão 1133/2025). It will increase the required marriage duration from 3 to 5 years, mandate actual cohabitation and proof of it, and raise the presumption threshold of “effective links” from 6 to 7–8 years. As of 03.05.2026 the law has NOT been promulgated by the President — the rules of Lei 37/81 (3 years) apply.',
  },
  steps: [
    {
      id: 'universal',
      title: 'The process is the same for all countries',
      content: [
        { kind: 'paragraph', text: 'Unlike naturalisation (after 5/7/10 years of residence), by marriage or união de facto the process does NOT depend on the applicant’s country of origin. Citizens of the CPLP, the EU, and third countries — the conditions are the same. There are no “fast-track” routes for Brazilians or Italians — 3 years of marriage are required for everyone.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements (under current law)',
      content: [
        { kind: 'checklist', items: [
          '💍 Marriage to a Portuguese citizen ≥ 3 years at the time of filing (Lei 37/81 art. 3 n.1)',
          '🤝 OR união de facto >3 years with a Portuguese citizen, **recognised by a court judgment** (Lei 37/81 art. 3 n.3) — sentença declarativa from a court; a simple certificate or registration in the Junta de Freguesia is NOT sufficient for nationality purposes',
          '📜 A valid marriage at the time of filing (no divorce, no legal separation)',
          '⚖️ No convictions in any country carrying a sentence of ≥ 3 years’ imprisonment'
        ]},
        { kind: 'paragraph', text: 'Formally NOT required on this route:' },
        { kind: 'checklist', items: [
          '❌ CIPLE A2 certificate — formally NOT required (language is only for naturalisation after 5+ years of residence). In practice, IRN may assess language ability as an indirect indicator of an “effective link” for marriages under 6 years',
          '❌ Residence in Portugal — not mandatory; the foreign spouse may live with the Portuguese citizen abroad',
          '❌ A “connection with Portugal” as a formal checklist — not requested at the intake stage. But see below regarding the presumption'
        ]},
        { kind: 'warning', text: 'An important nuance under Lei 37/81 art. 3: for 3–6 years of marriage it is MANDATORY to prove “ligação efetiva à comunidade nacional” (an effective link to the national community) — this is requested by the Ministério Público when opposing. From ≥6 years of marriage OR with joint Portuguese children, the presumption applies and there is no need to prove the link. So “not required” is a simplification for 6+ years.' }
      ]
    },
    {
      id: 'uniao',
      title: 'União de Facto — for NATIONALITY purposes',
      content: [
        { kind: 'warning', text: 'IMPORTANT: to apply for nationality via união de facto, Lei 37/81 art. 3 n.3 requires a **Portuguese court judgment** (sentença declarativa) recognising that the applicant has been living in união de facto with a Portuguese citizen for **more than 3 years** on the filing date. A simple certificate from the Junta de Freguesia or mere administrative registration of união de facto without judicial recognition is NOT accepted for nationality purposes.' },
        { kind: 'paragraph', text: 'Process to obtain the court judgment:' },
        { kind: 'checklist', items: [
          '🏛️ File an application at the Tribunal de Família e Menores (or Tribunal Cível) for recognition of união de facto with a Portuguese citizen',
          '📋 Evidence of cohabitation: Atestado de Residência (Junta de Freguesia), joint utility bills/contracts, tenancy/ownership contract in both names, bank statements, photographs, correspondence',
          '👥 Witnesses — friends/relatives',
          '💶 Court costs: approx. €100–€300 (depends on the value of the claim)',
          '🧑‍⚖️ A lawyer is recommended (for foreigners almost essential)',
          '⏱️ Timeframe: 6–18 months',
          '📜 Obtain the certidão da sentença declarativa — this is the document for IRN'
        ]},
        { kind: 'paragraph', text: 'The length of the união is counted from the actual start of cohabitation (not from the date of the court judgment). The court determines the start date based on the evidence. If you have lived together for 5 years — the court recognises 5 years.' },
        { kind: 'paragraph', text: 'Additionally: the general registration of união de facto at the Junta de Freguesia (under Lei 7/2001) is a simple administrative act, requires 2 years of cohabitation and is used for social/tax benefits. This is a SEPARATE procedure from judicial recognition for nationality.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents to submit to IRN',
      content: [
        { kind: 'checklist', items: [
          '📄 Marriage certificate (if the marriage was concluded outside Portugal — apostille + sworn translation into Portuguese). If the marriage is in Portugal — the assento number from the Conservatória do Registo Civil is sufficient',
          '📄 For união — certidão da sentença declarativa from a Portuguese court (NOT just a certificate from the Junta de Freguesia)',
          '📄 Applicant’s birth certificate (apostille + sworn translation; for naturalised citizens of the country of origin — full certificate with parents)',
          '📄 Valid foreign passport',
          '📄 Título de residência (residence permit) — attach if available, but NOT mandatory. For submissions abroad (via a consulate) — not needed',
          '📄 Criminal record from Portugal (certidão do registo criminal) — free at eportugal.gov.pt',
          '📄 Criminal record certificates from the country of birth, the country/countries of nationality, and all countries where the applicant has lived after age 16 — with apostille and sworn translation, where applicable. Check the validity of each certificate (usually 3–6 months)',
          '📄 Portuguese spouse’s birth certificate (assento de nascimento — requested automatically by IRN or attached)',
          '📝 Completed form (modelo 1-B) — download from irn.pt, signed by the applicant',
          '💶 Proof of fee payment — €250'
        ]},
        { kind: 'warning', text: 'The applicant does NOT have a Cartão de Cidadão (CC) — this is a Portuguese citizen’s document; it is issued only after citizenship is granted. Attach the título de residência (if any) or a passport.' }
      ]
    },
    {
      id: 'where',
      title: 'Where and how to apply',
      content: [
        { kind: 'checklist', items: [
          '🏛️ Conservatória dos Registos Centrais (Lisbon) — the main channel',
          '🏛️ Any Conservatória do Registo Civil by place of residence (Porto, Coimbra, Faro, etc.)',
          '🏢 Espaço Registos in a Loja do Cidadão',
          '🌍 A Portuguese consulate abroad — if you live outside Portugal',
          '💻 Online via the IRN portal (since 2025 operating in pilot mode for CPLP citizens and some marriage cases)',
          '🧑‍💼 Through a lawyer by power of attorney — no in-person attendance'
        ]}
      ]
    },
    {
      id: 'timeline',
      title: 'Processing times',
      content: [
        { kind: 'timeline', text: 'The statutory time limit is 1 year. In practice in 2025–2026: 8–24 months. It depends on the completeness of the documents and the workload of the Conservatórias. Online applications are processed faster.' },
        { kind: 'paragraph', text: 'After a positive decision, IRN registers you as a citizen in the Assento de Nascimento. Only after this can you request a Cartão de Cidadão at any Loja do Cidadão and obtain a Portuguese passport at IRN.' }
      ]
    },
    {
      id: 'common-issues',
      title: 'Common pitfalls',
      content: [
        { kind: 'checklist', items: [
          '❗ Different transliteration of the name in the passport and the marriage certificate — a notarial affidavit confirming identity will be required',
          '❗ A marriage concluded in a third country is not registered in the Conservatória do Registo Civil — first register the marriage in Portugal, then apply for nationality',
          '❗ The Portuguese spouse acquired citizenship recently (naturalisation) — the “3 years of marriage” is counted from the date the spouse acquired citizenship, not from the wedding date',
          '❗ Divorce in progress — you cannot apply; wait for the decision',
          '❗ The partner renounced Portuguese citizenship — the right to naturalisation by marriage is lost'
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
    { title: 'Lei 37/81 (Lei da Nacionalidade), art. 3 — marriage', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34445075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 237-A/2006 — Regulation of Portuguese Nationality', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2006-34456975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — união de facto', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/reconhecimento-de-uniao-de-facto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 90
}
