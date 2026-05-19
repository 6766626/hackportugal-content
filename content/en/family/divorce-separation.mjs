export default {
  editorialVoice: 'hackportugal',
  id: 'divorce-separation',
  categoryId: 'nationality',
  title: 'Divorce in Portugal — procedures and cost',
  tldr: 'Two routes: Divórcio por mútuo consentimento (by mutual consent) — at the Conservatória, usually quick (without children it may be possible in one session; with children — after the Ministério Público opinion, which often adds weeks), basic fee ~€280, no lawyer required if there are no disputes. Divórcio sem consentimento (through court) — 3-12 months, lawyer mandatory, ~€1,500-€5,000. The mandatory separation period was abolished in 2008 (Lei 61/2008). International couples must separately check jurisdiction and applicable law: Rome III (Reg. 1259/2010) applies to applicable law and Brussels II ter (Reg. 2019/1111) to jurisdiction/recognition in the EU. Maintenance, property division and custody are the main points of disagreement.',
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
              '✅ When: both spouses agree to divorce',
              '✅ Agreement: a joint plan for property, custody, maintenance and use of the home',
              '🏛️ Where: Conservatória do Registo Civil (any one) — without court',
              '⏱️ Duration: after the full file is submitted, the Conservatória schedules a conferência; if everything is accepted, the divorce is registered. With children, you must wait for the Ministério Público opinion (there is NO general “30-day cooling-off” period in PT for divorce by mutual consent)',
              '💰 Cost: ~€280 basic IRN fee. If there are minor children, the agreement on responsabilidades parentais is sent to the Ministério Público (NOT CPCJ); CPCJ is a child protection body and does not approve divorce agreements. Additional costs — lawyer, property division, registrations, translations',
              '👨‍⚖️ A lawyer is not mandatory — saving €1,000-€3,000',
              '🗓️ Online submission is possible through official justica.gov.pt / Civil Online services, where applicable. Avoid confusing these with private sites such as divorcio.pt'
            ]}
          ]},
          { id: 't2', title: 'Sem Consentimento (through court)', content: [
            { kind: 'checklist', items: [
              '⚖️ When: one spouse does not agree; there are children and disputed custody; there are property disputes',
              '🏛️ Where: Tribunal da Família e Menores',
              '⏱️ Duration: usually 3-12 months, up to 24 months in complex cases',
              '💰 Cost: court fees + lawyer (mandatory): €1,500-€5,000',
              '👨‍⚖️ A lawyer is mandatory for both parties',
              '⚖️ Decision: a court determination of all aspects',
              '🆘 Apoio judiciário (legal aid): means-tested through Segurança Social, taking account of household income/assets/expenses under a formula (not a simple gross-income threshold; IAS 2026 = €537.13). Apply through Segurança Social'
            ]}
          ]},
          { id: 't3', title: 'Separação de Pessoas (separation)', content: [
            { kind: 'paragraph', text: 'An intermediate route — official separação de pessoas e bens without dissolving the marriage. It changes the spouses’ rights/obligations and property relations, but does not automatically “preserve” inheritance rights or immigration status — check the consequences with a lawyer/AIMA before relying on this form. Procedure at the Conservatória/court. Less popular since 2008, when mútuo consentimento was simplified.' }
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
              'Acordo de partilha — who gets which property',
              'Acordo de Regulação Parental (if there are children): custody, visits, maintenance, decisions',
              'Casa de morada de família: who stays, on what terms and for how long',
              'Pensão de alimentos for the former spouse (if they were financially dependent)',
              'Insurance policies / pensions / joint accounts: separation',
              'You can do it yourselves or with a lawyer (€200-€500 for preparation)',
              'The prenuptial agreement (if there was one) determines the property regime — read it!'
            ]}
          ]},
          { id: 'p2', title: '2. Appointment at the Conservatória', content: [
            { kind: 'checklist', items: [
              'Any Conservatória do Registo Civil',
              'Documents: Cartão de Cidadão (CC) for both, certidão casamento, children’s CC, agreements',
              'If there are children — the agreement on responsabilidades parentais is sent to the Ministério Público for review (not CPCJ; CPCJ is the child protection body in risk situations)',
              'Without children: appointment in 2-4 weeks'
            ]}
          ]},
          { id: 'p3', title: '3. Meeting with the Conservadora', content: [
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
              'Update details with banks, your employer and insurers',
              'Notify Finanças of the transfer of property (for IMT exemption, if applicable between former spouses)',
              'Update Cartão de Cidadão — if you changed surname, you can return to the previous one',
              'Children: the new shared-custody schedule starts to apply',
              'Maintenance: pay by a traceable method, preferably bank transfer with a clear payment reference. Segurança Social Direta is not the standard channel for ordinary private maintenance payments'
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
              'By default, there is usually joint exercise of responsabilidades parentais for important matters (Código Civil art. 1906)',
              'Residência alternada (the child alternates residence between two households) is possible if it serves the child’s best interests — but it is not an automatic default',
              'Residência com um dos progenitores: the child lives with one parent, while the other has convívios/visits',
              'Lei 65/2020 strengthened joint exercise of parental responsibilities for important matters'
            ]}
          ]},
          { id: 'c2', title: 'Child maintenance', content: [
            { kind: 'checklist', items: [
              'Pensão de alimentos is determined by the child’s needs and each parent’s means; even with residência alternada, a compensatory payment may be possible where income/expenses are unequal',
              'There is no single statutory formula — the court/agreement takes account of income, the child’s needs, housing/school/health costs and the residence arrangement',
              'Typical ranges €100-€400/month per child — vary widely',
              'Until age 18 usually; extension is possible during education/non-independence (Código Civil art. 1880)',
              'FGADM (Fundo de Garantia de Alimentos): state payment if the parent does not pay'
            ]}
          ]},
          { id: 'c3', title: 'Parental decisions', content: [
            { kind: 'checklist', items: [
              'Important decisions (school, religion, serious medical matters): jointly',
              'Day-to-day decisions (food, sleep routine): made by the custodial parent',
              'Child’s trips abroad: check the specific passport rules, travel authorisation for minors and court-approved parental agreement. If the child travels without one parent, written permission may be required depending on the custody/residence setup',
              'Disagreements over decisions: family court'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'property',
      title: '🏠 Property division',
      content: [
        { kind: 'checklist', items: [
          'The property regime is determined at the time of the wedding:',
          '  - Comunhão de adquiridos (default): property acquired after the wedding is divided 50/50; pre-marital property remains separate',
          '  - Comunhão geral: everything is joint, including pre-marital property',
          '  - Separação total: nothing is joint (if there is a prenuptial agreement)',
          '🏠 Family home: the court may award it to one spouse, especially if they are the children’s carer',
          '💰 Business: valued, sometimes sold',
          '🚗 Cars, furniture: the parties agree themselves (if it is a mutual-consent divorce) or the court allocates them',
          '💼 Pensions: state pension rights are usually NOT divided 50/50; private pension products may form part of the property depending on the regime and product terms',
          '🌍 Foreign assets: declared in the Portuguese court; a jurisdiction issue may arise',
          '📊 IMT exemption: transfer of property between former spouses — no IMT (Lei 24/2009)'
        ]}
      ]
    },
    {
      id: 'foreigners',
      title: '🌍 Divorce for foreigners',
      content: [
        { kind: 'checklist', items: [
          'Couples married in Portugal: Portuguese processing is simpler',
          'Marriage took place abroad, both are residents of Portugal: Portuguese court or Conservatória',
          'Different nationalities: the case may be heard in Portugal (if the parties are residents) or in the country where the marriage took place',
          'Reg. 1259/2010 / Rome III governs applicable law for divorce in participating EU countries. Jurisdiction and EU recognition — Reg. 2019/1111 (Brussels II ter). Non-EU recognition depends on the law of the specific country',
          'Apostille certifies the authenticity of the Portuguese divorce certificate for Hague Convention countries, but does not guarantee automatic recognition of the divorce. Check the recognition/registration procedure in the country where you will use it',
          'Divorce of same-sex couples: the same procedure',
          'Residence permit through reunificação familiar: urgently check the right to an autonomous autorização de residência under art. 107 Lei 23/2007 — it depends on conditions (duration, circumstances); special rules apply for domestic violence/death/custody. Do NOT assume automatic conversion',
          'Citizens of Brazil: you may need to transcribe/register the Portuguese divorce in Brazil through the consulate/cartório. CPLP immigration status does not simplify the Portuguese divorce itself'
        ]}
      ]
    },
    {
      id: 'common-pitfalls',
      title: '🚩 Common problems',
      content: [
        { kind: 'checklist', items: [
          '⚠️ Do not sign without a lawyer if there are significant finances / property',
          '⚠️ Offshore accounts / hidden assets: if there are suspicions, a forensic accountant costs €2,000-€5,000; the court may order an audit',
          '⚠️ International custody (one parent leaves the country): under the Hague Convention there may be child-abduction proceedings if the child is taken without consent',
          '⚠️ Concealing income through resignation: sometimes a parent stops working to avoid maintenance — the court may impute income',
          '⚠️ Mediation (Sistema de Mediação Familiar / DGPJ): may be useful and may be recommended/referred, but it is not a universally mandatory precondition for divorce. Check the fee against the current DGPJ table',
          '⚠️ Mental health: 60% of people after divorce experience clinical depression in the first 6 months — seek support in advance'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Mutual-consent divorce at the Conservatória — basic IRN fee', amountEUR: 280, note: 'with children — additional costs for the MP opinion and/or a lawyer; property division/registrations/translations are paid separately' },
    { label: 'Contested divorce through court', amountEURMin: 1500, amountEURMax: 5000, note: '+ lawyer' },
    { label: 'Lawyer consultation', amountEURMin: 100, amountEURMax: 300, note: '€/hour' },
    { label: 'Child maintenance', amountEURMin: 100, amountEURMax: 400, note: '€/month (wide ranges; depends on the case)' }
  ],
  sources: [
    { title: 'Lei 61/2008 — Divorce Reform', url: 'https://diariodarepublica.pt/dr/detalhe/lei/61-2008-456587', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código Civil — Marriage and Divorce (book IV)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRN / justica.gov.pt — Divorce and separação de pessoas e bens by mutual consent', url: 'https://justica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Reg. (EU) 1259/2010 — Rome III (applicable law for divorce)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32010R1259', kind: 'law', language: 'en', lastRetrieved: '2026-05-17' },
    { title: 'Reg. (EU) 2019/1111 — Brussels II ter (jurisdiction/recognition)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019R1111', kind: 'law', language: 'en', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
