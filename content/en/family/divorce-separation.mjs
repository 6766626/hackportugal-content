export default {
  editorialVoice: 'hackportugal',
  id: 'divorce-separation',
  categoryId: 'nationality',
  title: 'Divorce in Portugal — procedures and costs',
  tldr: 'Two routes: **Divórcio por mútuo consentimento** (by mutual consent) — at the Conservatória, 1 day, €280, no lawyer if there are no disputes. **Divórcio sem consentimento** (through the court) — 3-12 months, lawyer mandatory, ~€1,500-5,000. The mandatory separation period was abolished in 2008 (Lei 61/2008). For foreigners, the law of the country of marriage matters; a Portuguese court acts under Portuguese rules if both are residents. Maintenance, division of assets and child custody are the main points of disagreement. The online divorce platform has been operating since 2022.',
  tags: ['divorce', 'divórcio', 'separation'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'types',
      title: '⚖️ Two types of divorce',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'Mútuo Consentimento (by mutual consent) — simple', content: [
            { kind: 'checklist', items: [
              '✅ **When**: both spouses agree to divorce',
              '✅ **Agreement**: a joint plan for assets, custody, maintenance and use of the home',
              '🏛️ **Where**: Conservatória do Registo Civil (any) — without court',
              '⏱️ **Duration**: appointment within 1 day + 30-day “cooling-off” period',
              '💰 **Cost**: €280 as standard. If there are minor children, the agreement on parental responsibilities is sent to the Ministério Público (NOT CPCJ); CPCJ is a child protection body and does not approve divorce agreements. Check the processing fee with the Conservatória',
              '👨‍⚖️ **Lawyer not mandatory** — saving €1,000-3,000',
              '🗓️ **Online platform**: divorcio.pt (2022+) for simple cases with form completion'
            ]}
          ]},
          { id: 't2', title: 'Sem Consentimento (through the court)', content: [
            { kind: 'checklist', items: [
              '⚖️ **When**: one spouse does not agree; there are children and disputed custody; there are disputes over assets',
              '🏛️ **Where**: Tribunal da Família e Menores',
              '⏱️ **Duration**: usually 3-12 months, up to 24 months in complex cases',
              '💰 **Cost**: court fees + lawyer (mandatory): €1,500-5,000',
              '👨‍⚖️ **Lawyer mandatory** for both parties',
              '⚖️ **Decision**: judicial determination of all aspects',
              '🆘 **Apoio judiciário** (legal aid), if income < 1.5 IAS'
            ]}
          ]},
          { id: 't3', title: 'Separação de Pessoas (separation)', content: [
            { kind: 'paragraph', text: 'An intermediate route — official separação without full divorce. It preserves inheritance rights and status for immigration purposes. The procedure takes place at the Conservatória. It has been less popular since 2008, when divorce by mutual consent was simplified.' }
          ]}
        ]}
      ]
    },
    {
      id: 'mutual-process',
      title: '📋 Mutual-consent divorce process — step by step',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: '1. Prepare the agreement', content: [
            { kind: 'checklist', items: [
              '**Acordo de partilha** — who gets which assets',
              '**Acordo de Regulação Parental** (if there are children): custody, visits, maintenance, decisions',
              '**Casa de morada de família**: who stays, on what terms and for how long',
              '**Pensão de alimentos for the former spouse** (if they were financially dependent)',
              '**Insurance policies / pensions / joint accounts**: division',
              'You can do it yourselves or with a lawyer (€200-500 for preparation)',
              'The prenuptial agreement (if there was one) determines the property regime — read it!'
            ]}
          ]},
          { id: 'p2', title: '2. Book an appointment at the Conservatória', content: [
            { kind: 'checklist', items: [
              'Any Conservatória do Registo Civil',
              'Documents: Cartão de Cidadão (CC) for both, certidão casamento, children’s CC, agreements',
              '**If there are children** — the agreement on responsabilidades parentais is sent to the Ministério Público for review (not CPCJ; CPCJ is a child protection body for risk situations)',
              'Without children: appointment in 2-4 weeks'
            ]}
          ]},
          { id: 'p3', title: '3. Appointment with the Conservadora', content: [
            { kind: 'checklist', items: [
              'Both must attend in person (or through a notarised power of attorney)',
              'The Conservadora checks the agreement and asks you to confirm consent',
              'If everything is in order — the divorce is registered',
              'A Certidão de Divórcio is issued',
              'Certidão with the new civil status'
            ]}
          ]},
          { id: 'p4', title: '4. After the divorce', content: [
            { kind: 'checklist', items: [
              'Update IRS (separate filing)',
              'Update details with banks, employer and insurers',
              'Notify Finanças about the transfer of property (for exemption from IMT, if applicable between former spouses)',
              'Update Cartão de Cidadão — if you changed surname, you can revert to the previous one',
              'Children: the new shared custody schedule begins',
              'Maintenance: paid from the agreed date via Segurança Social Direta or directly'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'children',
      title: '👶 Custody and maintenance',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Types of custody', content: [
            { kind: 'checklist', items: [
              '**Guarda partilhada** (shared custody) — standard after the 2024 reforms; the child lives alternately in two households (often for 1-2 weeks at a time)',
              '**Guarda exclusiva**: custody with one parent, the other has visiting rights',
              '**Guarda residente**: the child lives only with one parent, the other has visiting rights',
              'Portuguese courts usually consider shared custody the preferable option'
            ]}
          ]},
          { id: 'c2', title: 'Child maintenance', content: [
            { kind: 'checklist', items: [
              '**Pensão de alimentos** — mandatory for the parent who is not the primary carer',
              'Amount: court formula taking into account income and the child’s needs',
              'Usually €100-400/month per child',
              '**Until age 18** as standard; until age 25 if the child is studying',
              '**FGADM (Fundo de Garantia de Alimentos)**: state payment if the parent does not pay — up to 1 IAS/month'
            ]}
          ]},
          { id: 'c3', title: 'Parental decisions', content: [
            { kind: 'checklist', items: [
              'Important decisions (school, religion, serious medical matters): jointly',
              'Everyday decisions (food, sleep routine): made by the custodial parent',
              'Trips abroad: BOTH parents must agree (signed authorisation for travel / passports)',
              'Disagreements over decisions: family court'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'property',
      title: '🏠 Division of assets',
      content: [
        { kind: 'checklist', items: [
          '**The property regime is determined at the time of marriage**:',
          '  - **Comunhão de adquiridos** (default): assets acquired after marriage are split 50/50; pre-marital assets are separate',
          '  - **Comunhão geral**: everything is joint, including pre-marital assets',
          '  - **Separação total**: nothing is joint (if there is a prenuptial agreement)',
          '🏠 **Family home**: the court may award it to one spouse, especially if they are the children’s carer',
          '💰 **Business**: valued, sometimes sold',
          '🚗 **Car, furniture**: the parties agree themselves (if divorce is by mutual consent) or the court divides them',
          '💼 **Pension rights**: divided for the period of the marriage (since 2010)',
          '🌍 **Overseas assets**: declared in the Portuguese court; a jurisdiction issue may arise',
          '📊 **Exemption from IMT**: transfer of property between former spouses — no IMT (Lei 24/2009)'
        ]}
      ]
    },
    {
      id: 'foreigners',
      title: '🌍 Divorce for foreigners',
      content: [
        { kind: 'checklist', items: [
          '**Couples married in Portugal**: Portuguese processing is simpler',
          '**Marriage concluded abroad, both are residents of Portugal**: Portuguese court or Conservatória',
          '**Different nationalities**: the case may be heard in Portugal (if the parties are residents) or in the country where the marriage was concluded',
          'EU Regulation 1259/2010 — choice of applicable law for divorce',
          '**Recognition in other countries**: Portuguese divorce + apostille — recognised worldwide (in Hague Convention countries)',
          '**Divorce of same-sex couples**: the same procedure',
          '**Visa consequences**: if the residence permit depended on the partner — you receive an autonomous residence permit (art. 107)',
          '**Citizens of Brazil**: under CPLP it is often simpler — they can use Embaixada services'
        ]}
      ]
    },
    {
      id: 'common-pitfalls',
      title: '🚩 Common problems',
      content: [
        { kind: 'checklist', items: [
          '⚠️ **Do not sign without a lawyer** if there are significant finances / assets',
          '⚠️ **Offshore accounts / hidden assets**: if there are suspicions, a forensic accountant costs €2,000-5,000; the court may order an audit',
          '⚠️ **International custody (one parent leaves the country)**: under the Hague Convention there may be child abduction proceedings if the child leaves without consent',
          '⚠️ **Concealing income through resignation**: sometimes a parent stops working to avoid maintenance — the court may impute income',
          '⚠️ **Mediation**: before court, mediation is mandatory in some cases (Casa de Mediação) — €100-300, and sometimes saves a lot',
          '⚠️ **Mental health**: 60% of people after divorce experience clinical depression in the first 6 months — seek support in advance'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Divorce by mutual consent at the Conservatória', amountEUR: 280 },
    { label: 'Divorce by mutual consent + children', amountEUR: 480 },
    { label: 'Contested divorce through court', amountEURMin: 1500, amountEURMax: 5000, note: '+ lawyer' },
    { label: 'Lawyer consultation', amountEURMin: 100, amountEURMax: 300, note: '€/hour' },
    { label: 'Casa Mediação', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Child maintenance', amountEURMin: 100, amountEURMax: 400, note: '€/month' }
  ],
  sources: [
    { title: 'Lei 61/2008 — Divorce Reform', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2008-456587', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Código Civil — Marriage and Divorce (book IV)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'IRN — Divorce', url: 'https://irn.justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CPCJ — Comissão de Protecção de Crianças', url: 'https://www.cnpdpcj.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}
