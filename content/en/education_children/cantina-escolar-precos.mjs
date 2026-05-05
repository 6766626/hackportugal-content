export default {
  editorialVoice: 'hackportugal',
  id: 'cantina-escolar-precos',
  categoryId: 'education_children',
  title: 'Cantina escolar: prices and social escalão',
  tldr: 'Cantina escolar is the school canteen in state schools. In the 2025/2026 school year the price depends on the school cycle, município and ASE: in 2.º/3.º ciclo, escalão A is usually free, B is €0.73, without ASE about €1.85; in 1.º ciclo meals are often administered by the Câmara Municipal, and the tariff may range from €1.46 for the social escalão to €4.05 without support. ASE is requested via the Portal das Matrículas or at the school secretaria; the decision is tied to the escalão do abono de família.',
  tags: ['cantina', 'ase', 'school', 'children'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-cantina',
      title: 'What is the Cantina escolar',
      content: [
        { kind: 'paragraph', text: 'Cantina escolar is the school canteen. In state schools lunch usually includes soup, a main dish, bread, fruit or dessert, and water. The menu is published by the school, the agrupamento de escolas or the Câmara Municipal.' },
        { kind: 'paragraph', text: 'In Portugal, meals are not always automatically "included in school". A parent usually has to enrol the child for refeições, top up the school account and mark the meal days in advance in the school/município system or via the aluno card.' },
        { kind: 'warning', text: 'Prices for 1.º ciclo and pré-escolar are often set by the Câmara Municipal, and for 2.º/3.º ciclo and secundário by the agrupamento/school under ASE rules. Therefore two schools in neighbouring concelhos may have different payment interfaces and different ordering deadlines.' }
      ]
    },
    {
      id: 'prices-2026',
      title: 'Prices in 2026: normal, escalão A and B',
      content: [
        { kind: 'paragraph', text: 'The basic logic is: if a family has ASE approved, the child pays less or does not pay. ASE is linked to family income and usually relies on the escalão do abono de família assigned by Segurança Social.' },
        { kind: 'checklist', items: [
          '2.º and 3.º ciclo: escalão A — usually free.',
          '2.º and 3.º ciclo: escalão B — usually €0.73 per lunch.',
          '2.º and 3.º ciclo: without ASE — about €1.85 per lunch at the standard school tariff.',
          'Secundário: the tariff may be higher, especially if the school applies a separate price for ensino secundário or for late booking.',
          '1.º ciclo: meals are often administered by the Câmara Municipal; it is common to see a tariff around €1.46 for the social escalão and around €4.05 without support.',
          'Pré-escolar: the rules are almost always municipal; check the tabela de preços of your Câmara Municipal.',
          'Late booking or buying "on the day" may cost more than a standard booking.',
          'Cancelling lunch after the set deadline usually does not refund money.'
        ] },
        { kind: 'warning', text: 'Do not confuse escalão A/B for ASE with internal municipal escalões de rendimento. In 1.º ciclo some municípios use their own table where the escalão names may differ from the school ASE.' }
      ]
    },
    {
      id: 'how-to-get-ase',
      title: 'How to obtain ASE via the Portal das Matrículas',
      content: [
        { kind: 'paragraph', text: 'ASE — Ação Social Escolar. This is school social support: meals, textbooks, sometimes school supplies and transportes escolares. For a foreign family the mechanism is the same: you need the NIF for the child/parents, access to the Portal das Matrículas and confirmation of the family escalão.' },
        { kind: 'checklist', items: [
          'Log in to the Portal das Matrículas via autenticação.gov.pt, Chave Móvel Digital (CMD) or Cartão de Cidadão.',
          'Choose matrícula or renovação de matrícula for the desired school year.',
          'In the Ação Social Escolar block, tick the request for ASE.',
          'Attach the declaração de escalão do abono de família from Segurança Social Direta if the portal or the school asks for a file.',
          'If the abono de família has not yet been granted, apply for it at Segurança Social as early as possible.',
          'Check your email and messages from the agrupamento: the school may request missing documents.',
          'After the decision, confirm at the secretaria whether the escalão has been activated in the cantina system.',
          'If you moved to another concelho or school, check whether ASE has been transferred automatically — it often needs to be confirmed again.'
        ] },
        { kind: 'paragraph', text: 'Entitlement to ASE is usually confirmed before the start of the school year, but you can apply later if the family has moved, the child is entering a Portuguese school for the first time, or household income has changed.' }
      ]
    },
    {
      id: 'payment-and-booking',
      title: 'Payment and booking of lunches',
      content: [
        { kind: 'paragraph', text: 'Each school has its own system: SIGA, GIAE, Inovar, Unicard, Município online, Multibanco reference, MB WAY or the school aluno card. The details are provided by the school secretaria or the Câmara Municipal.' },
        { kind: 'checklist', items: [
          'Obtain the parent login in the school or município system.',
          'Check that the child is linked to the correct turma and escola.',
          'Top up the balance via Multibanco, MB WAY, transferência or presencialmente, if the school allows it.',
          'Book refeições for the week or month — many schools require this in advance.',
          'Check the deadline: often orders for the next day close the morning or afternoon of the day before.',
          'Cancel lunch in advance if the child is ill or going on a visita de estudo.',
          'Keep payment comprovativos at least until the end of the school year.',
          'If the balance goes negative, access to meal ordering may be temporarily blocked.'
        ] },
        { kind: 'warning', text: 'If a child goes to school from day one without active access to the cantina system, write to the secretaria in advance. In the first weeks of September queues are long, and without a booking the child may not be given lunch.' }
      ]
    },
    {
      id: 'special-diets-and-problems',
      title: 'Allergies, religion, vegetarian menu and disputes',
      content: [
        { kind: 'paragraph', text: 'Schools usually publish the ementa mensal and information on allergens. An alternative menu is possible, but it must be agreed in advance: most often via the secretaria, direção do agrupamento or the Câmara Municipal serviço de refeições.' },
        { kind: 'checklist', items: [
          'For an allergy or a medical diet, bring a declaração médica in Portuguese or English.',
          'For a vegetarian menu, clarify the request process: some municípios require a separate form.',
          'For religious restrictions, submit a written pedido to the direção da escola.',
          'Check whether the special menu applies every day or only with prior booking.',
          'If the child was given the wrong dish, record the date, escola, turma and a photo of the ementa.',
          'First contact the school secretaria or coordenação.',
          'If the problem persists, write to the direção do agrupamento and the Câmara Municipal.',
          'For issues with meal quality you can ask for the livro de reclamações or use the Livro de Reclamações Eletrónico.'
        ] },
        { kind: 'paragraph', text: 'For small children, in the first weeks it is useful to ask the teacher whether the child ate in the cantina. The system may show "lunch charged", but this does not guarantee that the child actually ate.' }
      ]
    }
  ],
  costs: [
    { label: '2.º/3.º ciclo, ASE escalão A', amountEUR: 0, note: 'Usually free with approved Ação Social Escolar.' },
    { label: '2.º/3.º ciclo, ASE escalão B', amountEUR: 0.73, note: 'Usually 50% of the school tariff.' },
    { label: '2.º/3.º ciclo, without ASE', amountEUR: 1.85, note: 'Typical normal tariff; the school may apply a separate price for late booking.' },
    { label: '1.º ciclo, municipal social tariff', amountEUR: 1.46, note: 'Municipal table; depends on the Câmara Municipal and the family status.' },
    { label: '1.º ciclo, without social support', amountEUR: 4.05, note: 'A common municipal normal tariff; check the tabela de preços of your concelho.' }
  ],
  sources: [
    {
      title: 'DGE — Ação Social Escolar and school meals',
      url: 'https://www.dge.mec.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Gov.pt — Applications for enrolment and renewal (pre-school, basic, secondary)',
      url: 'https://www.gov.pt/servicos/fazer-pedidos-de-matricula-e-renovacao-de-matricula-nos-ensinos-pre-escolar-basico-e-secundario',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    },
    {
      title: 'Portal das Matrículas — user portal for parents',
      url: 'https://www.portaldasmatriculas.edu.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
