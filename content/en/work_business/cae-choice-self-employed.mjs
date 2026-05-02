export default {
  editorialVoice: 'hackportugal',
  id: 'cae-choice-self-employed',
  categoryId: 'work_business',
  title: 'CAE: how to choose an activity code for recibos verdes',
  tldr: 'For recibos verdes, you choose not the “profession on your business card”, but a tax activity in Finanças: a CIRS art. 151 code for liberal professions and/or CAE Rev.4 for business activity. An error affects IVA, retenção na fonte, Segurança Social and sometimes IFICI. In 2026, the IVA exemption threshold under art. 53 CIVA is €15,000 turnover per year; the standard Segurança Social rate for a trabalhador independente is 21.4%. CAE can be changed online, but it is better not to play around retroactively.',
  tags: ['cae', 'recibosverdes', 'iva', 'ifici'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'cae-vs-cirs',
      title: '1. Understand the difference: CAE ≠ CIRS',
      content: [
        { kind: 'paragraph', text: 'For recibos verdes, a self-employed person may have two types of codes. CAE is the Código de Atividade Económica, the classification of economic activity under CAE Rev.4. CIRS art. 151 is the list of professional codes for IRS: programmers, consultants, designers, doctors, lawyers and other prestação de serviços.' },
        { kind: 'paragraph', text: 'If you sell services as a professional, Finanças often expects a CIRS code. If you run a business activity — e-commerce, manufacturing, equipment rental, an agency, training as a company-like activity — you need a CAE. You can have a main code and additional codes.' },
        { kind: 'checklist', items: [
          'Freelance software development: often CIRS 1332 / 1335 or a similar professional code, not only CAE',
          'IT consulting as a business service: CAE 62020 or another code from section J may be needed',
          'Online shop: a commerce CAE, not CIRS “consultant”',
          'Rental accommodation through Alojamento Local (AL): a CAE from accommodation, not CIRS',
          'Design, marketing, copywriting: usually CIRS, but an agency model may require CAE',
          'Courses and training: depends on the format — individual lessons, a school, an online platform',
          'If in an invoice/recibo you describe a service that is not covered by the chosen atividade, the code should be added before regular work begins'
        ] }
      ]
    },
    {
      id: 'search-classificacao',
      title: '2. Search for the code on Classificação.pt, not on forums',
      content: [
        { kind: 'paragraph', text: 'The official CAE search is on classificacao.pt. In 2026, CAE Rev.4 is used. Search using Portuguese words: “consultoria informática”, “programação”, “comércio eletrónico”, “formação”, “design”, “marketing”, “alojamento”, “tradução”. Read not only the title, but also the notas explicativas: what is included and what is excluded.' },
        { kind: 'checklist', items: [
          'Open classificacao.pt/cae and search using a PT term',
          'Check the full 5-digit code, not only section A–U',
          'Open the notas explicativas: they often contain exclusions',
          'Compare 2–3 neighbouring codes: for example software, consultoria, processamento de dados',
          'Check whether your work falls under CIRS art. 151 instead of CAE',
          'If the activity is mixed, choose one main activity and add secundárias',
          'Save a screenshot/URL of the code: it will be useful for your accountant and in an inspection'
        ] },
        { kind: 'warning', text: 'A title in English or Russian has no force. In the declaração de início/alteração de atividade, Finanças works with Portuguese codes and descriptions.' }
      ]
    },
    {
      id: 'tax-effects',
      title: '3. Check the tax consequences: IVA, retenção, IRS',
      content: [
        { kind: 'paragraph', text: 'The activity code by itself does not always determine the tax, but it triggers the right questions in Finanças: whether the service is subject to IVA, whether there is an exemption, whether retenção na fonte is required, and whether the regime simplificado or contabilidade organizada is suitable.' },
        { kind: 'checklist', items: [
          'IVA art. 53 CIVA: in 2026 exemption may be possible if turnover in the previous year did not exceed €15,000 and the regime conditions are met',
          'If the client is outside Portugal, check the regras de localização do IVA and reverse charge — especially B2B in the EU',
          'Some medical, educational and insurance transactions may be isentas under other CIVA articles, but this is not an automatic exemption for all teachers/therapists',
          'Retenção na fonte under IRS often depends on the type of service and client; for many services the rate is 25%, but there are exceptions and dispensa for low turnover',
          'Under the regime simplificado, the tax base depends on the coefficient: many services are counted at 75%, sales of goods at 15%, but the details depend on the code and the nature of the income',
          'If turnover is growing, check in advance the move to IVA normal and the obligation to file declarações periódicas',
          'For EU transactions, a declaração recapitulativa and correct VIES registration may be needed'
        ] },
        { kind: 'warning', text: 'Do not choose a “convenient” code solely for IVA or IRS. If the description on the recibo does not match the atividade, AT has grounds to assess additional tax, a fine and interest.' }
      ]
    },
    {
      id: 'social-security-ifici',
      title: '4. Take Segurança Social and IFICI into account',
      content: [
        { kind: 'paragraph', text: 'For a trabalhador independente, the standard Segurança Social contribution rate is 21.4%. The base is not calculated directly from CAE, but from rendimento relevante: usually 70% of income from services and 20% from sales of goods/production. But the code helps classify the activity and avoid disputes when you have mixed services and sales.' },
        { kind: 'paragraph', text: 'For IFICI, the tax incentive regime that replaced the old NHR for new residents, CAE may be critical not as a “magic word”, but as evidence that the activity belongs to an eligible economic sector or highly qualified function. In 2026, IFICI rules are tied to specific types of activity, the employer/client, qualifications and registration within the set deadline.' },
        { kind: 'checklist', items: [
          'The first year of atividade may give an exemption from Segurança Social for up to 12 months, if this is the first registration as a trabalhador independente',
          'After the exemption, Segurança Social returns are usually submitted quarterly',
          'If you are both an employee and have recibos verdes, there may be an exemption from TI contributions if the conditions are met',
          'For IFICI, check in advance that your CAE/function matches the list of eligible atividades',
          'Do not change CAE retroactively solely for IFICI — this is a risk in an inspection',
          'Keep contracts, invoices, descrição de serviços and diplomas/certificates: CAE alone is not enough'
        ] }
      ]
    },
    {
      id: 'register-change',
      title: '5. Register or change the atividade in Finanças',
      content: [
        { kind: 'paragraph', text: 'Codes are indicated in the declaração de início de atividade or declaração de alterações on Portal das Finanças. You need a NIF, access to Portal das Finanças or CMD, an address, expected turnover, IVA regime, IBAN and the selected CAE/CIRS.' },
        { kind: 'substeps', items: [
          { id: 'start', title: 'Opening atividade', content: [
            { kind: 'checklist', items: [
              'Portal das Finanças → Cidadãos → Serviços → Atividade → Início de Atividade',
              'Indicate the start date: it must match the real first service/sale',
              'Choose the main atividade and additional ones if they are already needed',
              'Indicate previsão de volume de negócios — the IVA regime depends on it',
              'Check the campo de IVA: art. 53, regime normal or special exemption',
              'Save the comprovativo da declaração'
            ] }
          ] },
          { id: 'change', title: 'Changing CAE/CIRS', content: [
            { kind: 'paragraph', text: 'If you have started a new line of services, file a declaração de alterações before issuing regular recibos for the new activity. The change is usually free and is done online.' }
          ] }
        ] },
        { kind: 'warning', text: 'If you already have turnover, EU clients, IFICI, employees or a disputed IVA relief, do not open atividade “at random”. One hour with a contabilista certificado is usually cheaper than correcting a year’s returns.' }
      ]
    }
  ],
  costs: [
    { label: 'Filing início/alteração de atividade on Portal das Finanças', amountEUR: 0, note: 'Free if done independently online' },
    { label: 'Consultation with a contabilista certificado on CAE/IVA/IFICI', amountEURMin: 50, amountEURMax: 150, note: 'Indicative cost for a one-off consultation; complex IFICI/IVA cases cost more' }
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
      title: 'Autoridade Tributária — início de atividade and obrigações fiscais',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Inicio_actividade.pdf',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA — art. 53, regime especial de isenção',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social — Guia Prático do Trabalhador Independente',
      url: 'https://www.seg-social.pt/trabalhadores-independentes',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
