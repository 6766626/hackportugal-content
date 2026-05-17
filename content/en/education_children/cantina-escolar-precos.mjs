export default {
  editorialVoice: 'hackportugal',
  id: 'cantina-escolar-precos',
  categoryId: 'education_children',
  title: 'School meals at the Cantina: prices and social escalão',
  tldr: 'Cantina escolar is the school canteen in state schools. In the 2025/2026 school year, the price depends on the school cycle, município and ASE: in 2.º/3.º ciclo, usually escalão A is free, B is €0.73, without ASE around €1.85; in 1.º ciclo, meals are often administered by the Câmara Municipal, and the tariff can be from €1.46 for a social escalão to €4.05 without support. ASE is requested via Portal das Matrículas or at the school secretaria; the decision is linked to the escalão do abono de família.',
  tags: ['canteen', 'ase', 'school', 'children'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-cantina',
      title: 'What Cantina escolar is',
      content: [
        { kind: 'paragraph', text: 'Cantina escolar is the school canteen. In state schools, lunch usually includes soup, a main course, bread, fruit or dessert and water. The menu is published by the school, agrupamento de escolas or Câmara Municipal.' },
        { kind: 'paragraph', text: 'In Portugal, meals are not always automatically “included in school”. A parent usually has to register the child for refeições, top up the school account and mark meal days in advance in the school or município system, or through the aluno card.' },
        { kind: 'warning', text: 'Prices for 1.º ciclo and pré-escolar are often set by the Câmara Municipal, while for 2.º/3.º ciclo and secundário they are set by the agrupamento/school under ASE rules. Therefore, two schools in neighbouring concelhos may have different payment interfaces and different order deadlines.' }
      ]
    },
    {
      id: 'prices-2026',
      title: 'Prices in 2026: normal, escalão A and B',
      content: [
        { kind: 'paragraph', text: 'The basic logic is this: if the family has approved ASE, the child pays less or does not pay. ASE is linked to family income and usually relies on the escalão do abono de família assigned by Segurança Social.' },
        { kind: 'checklist', items: [
          '2.º and 3.º ciclo: escalão A — usually free.',
          '2.º and 3.º ciclo: escalão B — usually €0.73 per lunch.',
          '2.º and 3.º ciclo: without ASE — around €1.85 per lunch under the standard school tariff.',
          'Secundário: the tariff may be higher, especially if the school applies a separate price for ensino secundário or late ordering.',
          '1.º ciclo: meals are more often administered by the Câmara Municipal; tariffs of around €1.46 for a social escalão and around €4.05 without support are seen.',
          'Pré-escolar: the rules are almost always municipal; check the tabela de preços da Câmara Municipal.',
          'Late ordering or buying “on the day” may cost more than a standard booking.',
          'Cancelling lunch after the set deadline usually does not refund the money.'
        ] },
        { kind: 'warning', text: 'Do not confuse escalão A/B for ASE with internal municipal escalões de rendimento. In 1.º ciclo, some municípios use their own table, where escalão names may differ from school ASE.' }
      ]
    },
    {
      id: 'how-to-get-ase',
      title: 'How to get ASE through Portal das Matrículas',
      content: [
        { kind: 'paragraph', text: 'ASE means Ação Social Escolar. This is school social support: meals, textbooks, sometimes school supplies and transportes escolares. For a foreign family, the mechanism is the same: the child’s/parents’ NIF, access to Portal das Matrículas and confirmation of the family escalão are needed.' },
        { kind: 'checklist', items: [
          'Log in to Portal das Matrículas via autenticação.gov.pt, Chave Móvel Digital (CMD) or Cartão de Cidadão.',
          'Select matrícula or renovação de matrícula for the relevant school year.',
          'In the Ação Social Escolar section, tick the request for ASE.',
          'Attach the declaração de escalão do abono de família from Segurança Social Direta if the portal or school asks for a file.',
          'If abono de família has not yet been assigned, apply for it with Segurança Social as early as possible.',
          'Check e-mail and messages from the agrupamento: the school may request missing documents.',
          'After the decision, confirm with the secretaria whether the escalão has been activated in the cantina system.',
          'If you have moved to another concelho or school, check whether ASE has transferred automatically — confirmation is often needed again.'
        ] },
        { kind: 'paragraph', text: 'Usually, entitlement to ASE is confirmed before the start of the school year, but it is possible to apply later if the family has moved, the child is entering a Portuguese school for the first time or income has changed.' }
      ]
    },
    {
      id: 'payment-and-booking',
      title: 'Payment and booking lunches',
      content: [
        { kind: 'paragraph', text: 'Each school has its own system: SIGA, GIAE, Inovar, Unicard, Município online, Multibanco reference, MB WAY or a school aluno card. The details are provided by the school secretaria or Câmara Municipal.' },
        { kind: 'checklist', items: [
          'Get the parent login for the school or município system.',
          'Check that the child is linked to the correct turma and escola.',
          'Top up the balance via Multibanco, MB WAY, bank transfer or in person, if the school allows it.',
          'Book refeições for the week or month — many schools require this to be done in advance.',
          'Check the deadline: orders for the next day often close the previous morning or afternoon.',
          'Cancel lunch in advance if the child is ill or is going on a visita de estudo.',
          'Keep payment comprovativos at least until the end of the school year.',
          'If the balance goes negative, access to meal ordering may be temporarily blocked.'
        ] },
        { kind: 'warning', text: 'If the child is starting school from day one without active access to the cantina system, write to the secretaria in advance. In the first weeks of September queues are long, and without a booking the child may not be given lunch.' }
      ]
    },
    {
      id: 'special-diets-and-problems',
      title: 'Allergies, religion, vegetarian menu and disputes',
      content: [
        { kind: 'paragraph', text: 'Schools usually publish an ementa mensal and information about allergens. An alternative menu is possible, but it must be arranged in advance: most often through the secretaria, direção do agrupamento or serviço de refeições da Câmara Municipal.' },
        { kind: 'checklist', items: [
          'For an allergy or medical diet, bring a declaração médica in Portuguese or English.',
          'For a vegetarian menu, check the request form: some municípios require a separate formulário.',
          'For religious restrictions, write a written pedido à direção da escola.',
          'Check whether the special menu is available every day or only with advance ordering.',
          'If the child was given the wrong dish, record the date, escola, turma and a photo of the ementa.',
          'First contact the secretaria or coordenação da escola.',
          'If the problem repeats, write to the direção do agrupamento and Câmara Municipal.',
          'For questions about meal quality, you can ask for the livro de reclamações or use the Livro de Reclamações Eletrónico.'
        ] },
        { kind: 'paragraph', text: 'For younger children, in the first weeks it is useful to ask the teacher whether the child ate in the cantina. The system may show that “lunch was charged”, but that does not guarantee that the child actually ate.' }
      ]
    }
  ],
  costs: [
    { label: '2.º/3.º ciclo, ASE escalão A', amountEUR: 0, note: 'Usually free with approved Ação Social Escolar.' },
    { label: '2.º/3.º ciclo, ASE escalão B', amountEUR: 0.73, note: 'Usually 50% of the subsidised school tariff.' },
    { label: '2.º/3.º ciclo, without ASE', amountEUR: 1.85, note: 'Typical normal tariff; the school may apply a separate price for late ordering.' },
    { label: '1.º ciclo, social município tariff', amountEUR: 1.46, note: 'Municipal table; depends on the Câmara Municipal and family status.' },
    { label: '1.º ciclo, without social support', amountEUR: 4.05, note: 'A municipal normal tariff that is encountered; check the tabela de preços for your concelho.' }
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
      title: 'Gov.pt — Pedidos de matrícula e renovação (pré-escolar, básico, secundário)',
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
