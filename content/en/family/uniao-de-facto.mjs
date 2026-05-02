export default {
  editorialVoice: 'hackportugal',
  id: 'uniao-de-facto',
  categoryId: 'nationality',
  title: 'União de facto — civil partnership in Portugal',
  tldr: 'União de facto is a legal status for cohabitation, recognised after **2 years of living together** under Lei 7/2001. It gives SOME of the rights of spouses: joint IRS taxation, the right to Reagrupamento Familiar and a number of social benefits. ⚠️ It is NOT a full equivalent of marriage — the surviving partner **is not a statutory heir** by default (a will/special procedure is needed); access to SNS usually does NOT arise automatically "through" the partner. For **nationality through união**, Lei 37/81 art. 3 n.3 requires a **court judgment** (sentença declarativa) confirming >3 years of união with a Portuguese citizen — simple registration at the Junta de Freguesia is NOT sufficient for nationality purposes. Registration at the Junta de Freguesia (Lei 7/2001) is a simple administrative act for tax/social purposes. It works for opposite-sex and same-sex couples.',
  tags: ['união', 'cohabitation', 'partnership', 'lei 7/2001'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is',
      title: 'What it is and how it works',
      content: [
        { kind: 'paragraph', text: 'União de facto is the legal recognition of a couple living together. It is regulated by Lei 7/2001 (with amendments 23/2010 for same-sex couples). It does not require a ceremony, is not marriage, but gives comparable rights.' },
        { kind: 'checklist', items: [
          '💑 A couple of any sex and nationality (opposite-sex or same-sex)',
          '📅 At least 2 years of living together',
          '🏠 Shared housing — provable by a rental contract in both names, utility bills, a shared address in Finanças',
          '👫 Both are legally capable adults',
          '❌ Not being in an existing marriage with another person',
          '❌ Not being relatives (direct ancestors, siblings, nephews/nieces)'
        ]}
      ]
    },
    {
      id: 'rights',
      title: 'What rights it gives',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '💰 Taxes and finances', content: [
            { kind: 'checklist', items: [
              'Joint IRS filing (option: "englobamento")',
              'Deduction of the partner’s maintenance payments, medical and education expenses',
              'Inheritance — without inheritance tax (exemption from 10% Imposto do Selo for união)',
              'Right to a survivor’s pension (pensão de sobrevivência) on the partner’s death',
              'Right to maintenance after separation (if the partner was financially dependent)'
            ]}
          ]},
          { id: 'r2', title: '🏥 Healthcare and SNS', content: [
            { kind: 'checklist', items: [
              'Beneficiário da Segurança Social status through the partner (if they have a NISS)',
              'SNS beneficiary status — access to healthcare through a resident partner',
              'Private insurance — spouse rate (family plans)',
              'Hospital visits — as for spouses',
              'Decisions in emergencies (medical representation)'
            ]}
          ]},
          { id: 'r3', title: '🛂 Immigration', content: [
            { kind: 'checklist', items: [
              '**Reagrupamento Familiar** through a Portuguese citizen/resident — works as it does for spouses',
              '**Nationality through união** after 3 years (analogous to the marriage route, under the same art. 3 Lei 37/81)',
              '**Partner visa**: if a Portuguese citizen goes to work abroad, the foreign partner receives immigration status as a spouse',
              'For an EU citizen: an unregistered partner (simply living together) has limited rights; a registered one has full rights'
            ]}
          ]},
          { id: 'r4', title: '🏠 Housing', content: [
            { kind: 'checklist', items: [
              'Rental: partner as co-applicant, right to continue the lease on the death of the main tenant',
              'Property: joint purchase without additional taxes',
              'Social housing: the couple is considered an "agregado familiar"',
              'Right to prevent the sale of the shared home without consent'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'how-prove',
      title: 'How to prove / formalise it',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Option A — certificate from the Junta de Freguesia', content: [
            { kind: 'checklist', items: [
              'The quickest and simplest method',
              'At the Junta de Freguesia for your place of residence with: Cartão de Cidadão/residence permit for both, 2 witnesses (neighbours, friends), atestado de residência',
              'Witnesses confirm under oath that you have lived together for ≥ 2 years',
              'They issue the **Certificado de União de Facto** on the day of the visit, around €10-15',
              'Valid for all state purposes: Finanças, SNS, AIMA, IRN'
            ]}
          ]},
          { id: 'p2', title: 'Option B — registration at the Conservatória', content: [
            { kind: 'checklist', items: [
              'For full formalisation, entered in the birth record (Assento de Nascimento) of both partners',
              'Note: it does not give additional rights beyond the certificate — it is simply a more official record',
              'At the Conservatória do Registo Civil with Cartão de Cidadão + atestado de residência + Junta de Freguesia certificate',
              'Cost around €10, on the day of the visit'
            ]}
          ]},
          { id: 'p3', title: 'Option C — joint IRS declaration', content: [
            { kind: 'paragraph', text: 'If both declared themselves as "união de facto" in IRS for 2 consecutive years — AT automatically recognises the união. For most purposes (Reagrupamento Familiar, nationality) this is NOT SUFFICIENT — a Junta de Freguesia certificate is still required.' }
          ]}
        ]}
      ]
    },
    {
      id: 'end',
      title: 'Separation / dissolução',
      content: [
        { kind: 'checklist', items: [
          'Does not require court proceedings (unlike divorce)',
          'It simply ends in fact — moving out, a new partner, mutual decision',
          'Certificate of dissolução — apply at the Junta de Freguesia / Conservatória, €10',
          'After separation: maintenance (if one was dependent on the other), division of assets under general law (not as in marriage)',
          'Important: for taxes / pension — inform Finanças / Segurança Social',
          'It does not automatically end if you do not report it — you may remain recorded as união in documents, and this blocks new relationships'
        ]}
      ]
    },
    {
      id: 'vs-marriage',
      title: 'União de facto vs marriage',
      content: [
        { kind: 'checklist', items: [
          '🔸 **União**: easier to create/end, no ceremony, no court divorce',
          '🔸 **Marriage**: more rights — automatic joint property regime (meação), full inheritance without tax, representation rights in healthcare',
          '🔸 **For nationality**: both routes require at least 3 years; marriage is more predictable for IRN',
          '🔸 **For immigration**: marriage gives a slightly stronger status at the border; união sometimes requires additional evidence',
          '🔸 **For social matters**: practically the same — pensão de sobrevivência, Segurança Social benefits work',
          '🔸 **Taxation**: both forms allow joint IRS filing'
        ]},
        { kind: 'warning', text: 'If you plan to apply for nationality/Reagrupamento Familiar — a registered união at the Conservatória is preferable (not only the Junta de Freguesia certificate), to avoid questions from AIMA/IRN.' }
      ]
    }
  ],
  costs: [
    { label: 'Certificado de União de Facto (Junta de Freguesia)', amountEURMin: 10, amountEURMax: 15 },
    { label: 'Registration at the Conservatória', amountEUR: 10 },
    { label: 'Dissolução', amountEUR: 10 }
  ],
  sources: [
    { title: 'Lei 7/2001 — União de facto (consolidated)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2001-34455975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — União de facto', url: 'https://eportugal.gov.pt/cidadaos/-/informacoes/reconhecimento-de-uniao-de-facto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Registo de União de Facto', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}
