export default {
  editorialVoice: 'hackportugal',
  id: 'uniao-de-facto',
  categoryId: 'nationality',
  title: 'União de facto — de facto partnership in Portugal',
  tldr: 'União de facto is a legal status for cohabitation, recognised after 2 years of living together under Lei 7/2001. It gives SOME of the rights of spouses: joint IRS taxation, the right to Reagrupamento Familiar and a number of social benefits.\n\n⚠️ This is NOT a full equivalent of marriage — the surviving partner is not a statutory heir by default (a will/special procedure is needed); access to the SNS usually does NOT arise automatically “through” the partner. For nationality through união, Lei 37/81 art. 3 n.3 requires a court decision (sentença declarativa) confirming >3 years of união with a Portuguese citizen — simple registration at the Junta de Freguesia is NOT enough for nationality purposes. Registration at the Junta de Freguesia (Lei 7/2001) is a simple administrative act for tax/social purposes. It works for different-sex and same-sex couples.',
  tags: ['união', 'cohabitation', 'partnership', 'lei 7/2001'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is',
      title: 'What it is and how it works',
      content: [
        { kind: 'paragraph', text: 'União de facto is the legal recognition of a couple living together.\n\nThe basic regime is Lei 7/2001. Lei 23/2010 in 2010 expanded and clarified the rights of de facto partners (social benefits, certain inheritance protections). Lei 9/2010 is a separate law that introduced same-sex marriage (changes to the Código Civil); it concerns marriage only, not união. Lei 7/2001 already applies to couples regardless of sex. It does not require a ceremony, is not marriage, but gives a number of comparable rights.' },
        { kind: 'checklist', items: [
          '💑 A couple of any sex and nationality (different-sex or same-sex)',
          '📅 At least 2 years of living together',
          '🏠 Shared housing — provable by a rental agreement in both names, utility bills, a shared address in Finanças',
          '👫 Both are legally capable adults',
          '❌ Not being in an existing marriage with another person',
          '❌ Not having impedimentos under art. 2 Lei 7/2001: direct ascendants/descendants, 2nd degree collateral kinship (brothers/sisters), direct affinity (sogra/sogro and similar)'
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
              'Joint IRS filing (tributação conjunta)',
              'Deduction of maintenance payments, medical and education expenses of the partner',
              '⚠️ A partner in união is not an automatic heir — a will/planning is needed. For gratuitous transfers, the surviving partner is usually exempt from the 10% Imposto do Selo (Código do Imposto do Selo art. 6, al. e)',
              'Right to a survivor’s pension (pensão de sobrevivência) on the partner’s death',
              '⚠️ There is no general “spousal maintenance” regime as in divorce. Possible claims after breakup/death are limited and depend on the facts; if there is financial dependency, it is better to obtain legal advice'
            ]}
          ]},
          { id: 'r2', title: '🏥 Healthcare and SNS', content: [
            { kind: 'checklist', items: [
              'Segurança Social: união may be relevant for certain family benefits and survivor benefits, but each person has their own NISS and contribution/benefit status',
              'SNS: the partnership itself does not “attach” someone to the SNS through the partner — one needs one’s own lawful residence and SNS user number; união helps prove a shared address/household',
              'Private insurance — spouse tariff (family plans)',
              'Hospital visits as a close person — usually easier, but for clear powers to make medical decisions, execute a formal advance directive (directiva antecipada de vontade) / procurador de cuidados de saúde (Lei 25/2012)'
            ]}
          ]},
          { id: 'r3', title: '🛂 Immigration', content: [
            { kind: 'checklist', items: [
              'Reagrupamento Familiar through a Portuguese citizen/resident — possible; expect additional evidence of a durable relationship/cohabitation (AIMA may request more documents than for spouses)',
              'Nationality through união after 3 years with a PT citizen under art. 3 Lei 37/81 — prior reconhecimento judicial of união de facto in the civil court is usually required; a Junta certificate is insufficient for nationality',
              'Visa for a partner: if a Portuguese citizen goes to work abroad, the foreign partner may obtain the status of a close family member',
              'For free movement of EU citizens: a cohabiting partner may be considered a durable partner with proper evidence of cohabitation/relationship (Lei 37/2006, Directive 2004/38/EC)'
            ]}
          ]},
          { id: 'r4', title: '🏠 Housing', content: [
            { kind: 'checklist', items: [
              'Rental: partner as co-applicant, right to continue the tenancy on the death of the main tenant',
              'Ownership: joint acquisition without additional taxes',
              'Social housing: the couple is considered an “agregado familiar”',
              '⚠️ The family home has specific protections (especially for rentals and on death/breakup), but união does not give an automatic veto to a non-owner over a sale. If you want protection — set up co-ownership or protect it by contract'
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
              'The fastest and simplest method',
              'At the Junta de Freguesia for the place of residence with: Cartão de Cidadão/residence permit for both, 2 witnesses (neighbours, friends), atestado de residência',
              'Witnesses confirm under oath that you have lived together for ≥ 2 years',
              'They issue a Certificado de União de Facto on the day of the visit (the cost is municipal — check with the Junta)',
              'Sufficient for many everyday/tax purposes, but each body may request additional evidence. For nationality through IRN via união, it is usually NOT ENOUGH (reconhecimento judicial is needed); for AIMA — expect additional evidence of cohabitation'
            ]}
          ]},
          { id: 'p2', title: 'Option B — registration at the Conservatória (optional)', content: [
            { kind: 'checklist', items: [
              'Registo civil da união is an optional act; it mainly records the situation in the PT civil register, where this is legally possible',
              'For foreigners without a Portuguese assento de nascimento, the practical effect depends on their civil registration status',
              'It does not create additional rights and does not replace judicial recognition for nationality',
              'Cost: check with IRN/ePortugal before the visit — there is no fixed symbolic price'
            ]}
          ]},
          { id: 'p3', title: 'Option C — joint IRS declaration', content: [
            { kind: 'paragraph', text: 'IRS joint filing helps prove a shared life for tax purposes, but it does not bind AIMA/IRN/courts. For nationality under art. 3 with a PT citizen — plan for reconhecimento judicial of união de facto, not just a Junta certificate.' }
          ]}
        ]}
      ]
    },
    {
      id: 'end',
      title: 'Breakup / dissolução',
      content: [
        { kind: 'checklist', items: [
          'Dissolução occurs by: death, marriage or the will of one/both partners (Lei 7/2001 art. 8)',
          'If the breakup is being invoked to justify legal effects — a judicial declaration may be required',
          'Notify AT/Segurança Social/AIMA/IRN where relevant',
          'After breakup: maintenance is limited and not as in divorce; division of property follows general law (not matrimonial law)',
          'The cost depends on the body/procedure (not a single “€10”). Check with IRN/ePortugal',
          'If you do not report it — you may remain recorded as união in documents, which can block new relationships'
        ]}
      ]
    },
    {
      id: 'vs-marriage',
      title: 'União de facto vs marriage',
      content: [
        { kind: 'checklist', items: [
          '🔸 União: easier to create/end, no ceremony, no court divorce',
          '🔸 Marriage: a spouse is a legal heir; default property regime = communion of acquired assets (unless another regime is chosen). More protections for the family home and representation',
          '🔸 For nationality: for união with a PT citizen, judicial recognition is usually needed; marriage is procedurally simpler for IRN',
          '🔸 For immigration: marriage gives a stronger status; união requires evidence of a durable relationship',
          '🔸 For the social sphere: pensão de sobrevivência works for both, but the details depend on contributions',
          '🔸 Taxation: both forms allow tributação conjunta'
        ]},
        { kind: 'warning', text: 'For Reagrupamento Familiar — collect strong evidence of cohabitation/relationship and check the current AIMA list. For nationality through união with a PT citizen — plan for reconhecimento judicial; registration at the Conservatória alone is insufficient.\n\n⚠️ Reforma Lei da Nacionalidade: the reform was promulgated by President Seguro on 03.05.2026, published as Lei Orgânica 1/2026 in the DRE on 18.05.2026 and entered into force on 19.05.2026. The basic mechanism for união is unchanged: nationality still requires a judicial reconhecimento da união de facto (>3 years with a PT citizen). The main changes concern residence periods and the rules on oposição; before applying, check the current version of the law.' }
      ]
    }
  ],
  costs: [
    { label: 'Certificado de União de Facto (Junta de Freguesia)', amountEURMin: 0, amountEURMax: 20, note: 'municipal price; check with the specific Junta' },
    { label: 'Registration at the Conservatória do Registo Civil', note: 'according to the IRN emolument table — check on ePortugal before the visit' },
    { label: 'Dissolução', note: 'depends on the procedure (Junta/registo civil/court) — there is no single price' }
  ],
  sources: [
    { title: 'Lei 7/2001 — União de facto (consolidated)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2001-34455975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — União de facto', url: 'https://www.gov.pt/cidadaos/-/informacoes/reconhecimento-de-uniao-de-facto', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Registo de União de Facto', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
