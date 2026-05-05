export default {
  editorialVoice: 'hackportugal',
  id: 'cae-choice-self-employed',
  categoryId: 'work_business',
  title: 'CAE: how to choose an activity code for recibos verdes',
  tldr: 'For recibos verdes you do not choose a “job title on a business card”, but a tax activity with Finanças: a CIRS art. 151 code for liberal professions and/or a CAE Rev.4 code for entrepreneurial/business activity. A mistake affects IVA, retenção na fonte, Segurança Social and sometimes IFICI. In 2026 the IVA exemption threshold under art. 53 CIVA is €15,000 annual turnover; the standard Segurança Social rate for a trabalhador independente is 21.4%. You can change a CAE online, but do not play with retroactive changes.',
  tags: ['cae', 'recibos-verdes', 'iva', 'ifici'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'cae-vs-cirs',
      title: '1. Understand the difference: CAE ≠ CIRS',
      content: [
        { kind: 'paragraph', text: 'Under recibos verdes a self-employed person can have two types of codes. CAE — Código de Atividade Económica, the classification of economic activity under CAE Rev.4. CIRS art. 151 — a list of professional codes for IRS: programmers, consultants, designers, doctors, lawyers and other prestação de serviços.' },
        { kind: 'paragraph', text: 'If you sell services as a professional, Finanças often expects a CIRS code. If you run a business activity — e-commerce, manufacturing, equipment rental, an agency, training delivered as a company-like activity — you need a CAE. You can have one main code and additional codes.' },
        { kind: 'checklist', items: [
          'Freelance software development: often CIRS 1332 / 1335 or a close professional code, not only a CAE',
          'IT consulting as a business service: you may need CAE 62020 or another code from section J',
          'Online shop: a trade CAE, not a CIRS “consultant”',
          'Letting accommodation via alojamento local: an accommodation CAE, not CIRS',
          'Design, marketing, copywriting: usually CIRS, but an agency model may require a CAE',
          'Courses and training: depends on the format — one-to-one lessons, a school, an online platform',
          'If in an invoice/recibo you describe a service that is not within the selected atividade, you must add the code before doing regular work'
        ] }
      ]
    },
    {
      id: 'search-classificacao',
      title: '2. Search for the code on Classificação.pt, not on forums',
      content: [
        { kind: 'paragraph', text: 'The official CAE search is on classificacao.pt. In 2026 CAE Rev.4 is used. Search with Portuguese words: “consultoria informática”, “programação”, “comércio eletrónico”, “formação”, “design”, “marketing”, “alojamento”, “tradução”. Read not only the title but also the notas explicativas: what is included and what is excluded.' },
        { kind: 'checklist', items: [
          'Open classificacao.pt/cae and search by a PT term',
          'Check the full 5-digit code, not just the A–U section',
          'Open the notas explicativas: they often contain exclusions',
          'Compare 2–3 neighbouring codes: for example software, consultoria, processamento de dados',
          'Check whether your work falls under CIRS art. 151 instead of a CAE',
          'If the activity is mixed, choose one main one and add secundárias',
          'Save a screenshot/URL of the code: it will help your accountant and in an inspection'
        ] },
        { kind: 'warning', text: 'An English or Russian name has no force. In the declaração de início/alteração de atividade Finanças uses Portuguese codes and descriptions.' }
      ]
    },
    {
      id: 'tax-effects',
      title: '3. Check the tax consequences: IVA, retenção, IRS',
      content: [
        { kind: 'paragraph', text: 'An activity code by itself does not always determine the tax, but it triggers the right questions at Finanças: is the service subject to IVA, is there an exemption, is retenção na fonte required, does the regime simplificado or contabilidade organizada apply.' },
        { kind: 'checklist', items: [
          'IVA art. 53 CIVA: in 2026 an exemption is possible if turnover in the previous year did not exceed €15,000 and the regime’s conditions are met',
          'If the client is outside Portugal, check the regras de localização do IVA and reverse charge — especially B2B in the EU',
          'Some medical, educational and insurance operations may be isentas under other CIVA articles, but this is not an automatic exemption for all teachers/therapists',
          'Retenção na fonte for IRS often depends on the type of service and the client; for many services the rate is 25%, but there are exceptions and a dispensa at low turnover',
          'In the regime simplificado the tax base depends on a coefficient: many services are counted at 75%, sales of goods at 15%, but the details depend on the code and the nature of the income',
          'If turnover grows, check in advance the move to IVA normal and the obligation to file declarações periódicas',
          'For EU operations a declaração recapitulativa and correct VIES registration may be required'
        ] },
        { kind: 'warning', text: 'Do not choose a “convenient” code just for IVA or IRS. If the description on the recibo does not match the atividade, AT has grounds to assess extra tax, a fine and interest.' }
      ]
    },
    {
      id: 'social-security-ifici',
      title: '4. Factor in Segurança Social and IFICI',
      content: [
        { kind: 'paragraph', text: 'For a trabalhador independente the standard Segurança Social contribution rate is 21.4%. The base is not calculated directly from the CAE, but from the rendimento relevante: usually 70% of income from services and 20% from sales of goods/production. But the code helps classify the activity and avoid disputes when you have mixed services and sales.' },
        { kind: 'paragraph', text: 'For IFICI, the tax incentive regime that replaced the old NHR for new residents, a CAE may be critical not as a “magic word” but as evidence that the activity belongs to an eligible economic field or highly qualified function. In 2026 IFICI rules are tied to specific types of activity, the employer/client, qualification and registration within the prescribed time limit.' },
        { kind: 'checklist', items: [
          'The first year of atividade may grant an exemption from Segurança Social for up to 12 months if this is the first registration as a trabalhador independente',
          'After the exemption Segurança Social declarations are usually filed quarterly',
          'If you are simultaneously an employee and on recibos verdes, there may be an exemption from TI contributions if conditions are met',
          'For IFICI check in advance that your CAE/function matches the list of eligible atividades',
          'Do not change a CAE retroactively just for IFICI — this is a risk in an inspection',
          'Keep contracts, invoices, descrição de serviços and diplomas/certificates: a CAE alone is not enough'
        ] }
      ]
    },
    {
      id: 'register-change',
      title: '5. Register or change an atividade with Finanças',
      content: [
        { kind: 'paragraph', text: 'Codes are indicated in the declaração de início de atividade or declaração de alterações on the Portal das Finanças. You need a NIF, access to the Portal das Finanças or CMD, an address, expected turnover, IVA regime, IBAN and the selected CAE/CIRS.' },
        { kind: 'substeps', items: [
          { id: 'start', title: 'Opening an atividade', content: [
            { kind: 'checklist', items: [
              'Portal das Finanças → Cidadãos → Serviços → Atividade → Início de Atividade',
              'Enter the start date: it must match the actual first service/sale',
              'Choose the main atividade and secondary ones if they are already needed',
              'State the previsão de volume de negócios — the IVA regime depends on it',
              'Check the campo de IVA: art. 53, regime normal or a special exemption',
              'Save the comprovativo da declaração'
            ] }
          ] },
          { id: 'change', title: 'Changing a CAE/CIRS', content: [
            { kind: 'paragraph', text: 'If you have started a new line of services, submit a declaração de alterações before issuing regular recibos for the new activity. The change is usually free and done online.' }
          ] }
        ] },
        { kind: 'warning', text: 'If you already have turnover, EU clients, IFICI, hiring of staff or a contentious IVA relief, do not open an atividade “at random”. One hour of a contabilista certificado is usually cheaper than fixing a year of returns.' }
      ]
    }
  ],
  costs: [
    { label: 'Filing an início/alteração de atividade on the Portal das Finanças', amountEUR: 0, note: 'Do it yourself online for free' },
    { label: 'Consultation with a contabilista certificado on CAE/IVA/IFICI', amountEURMin: 50, amountEURMax: 150, note: 'Indicative for a one-off consultation; complex IFICI/IVA cases cost more' }
  ],
  sources: [
    {
      title: 'Official CAE Rev.4 search — Classificação Portuguesa das Atividades Económicas',
      url: 'https://www.classificacao.pt/cae',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Autoridade Tributária — início de atividade and tax obligations',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Inicio_atividade.pdf',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA — art. 53, special exemption regime',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social — Practical Guide for the Trabalhador Independente',
      url: 'https://www.seg-social.pt/trabalhadores-independentes',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
