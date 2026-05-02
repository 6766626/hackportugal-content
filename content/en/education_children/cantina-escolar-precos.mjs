export default {
  editorialVoice: 'hackportugal',
  id: 'cantina-escolar-precos',
  categoryId: 'education_children',
  title: 'School meals in the Cantina: prices and social escalão',
  tldr: 'Cantina escolar is the school canteen in state schools. In the 2025/2026 school year, the price depends on the school cycle, município and ASE: in 2.º/3.º ciclo, usually escalão A is free, B is €0.73, without ASE it is around €1.85; in 1.º ciclo, meals are often managed by the Câmara Municipal, and the tariff may range from €1.46 for a social escalão to €4.05 without support. ASE is requested through Portal das Matrículas or at the school secretaria; the decision is linked to the escalão do abono de família.',
  tags: ['canteen', 'ase', 'school', 'children'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-cantina',
      title: 'What Cantina escolar is',
      content: [
        { kind: 'paragraph', text: 'Cantina escolar is the school canteen. In state schools, lunch usually includes soup, a main course, bread, fruit or dessert, and water. The menu is published by the school, agrupamento de escolas or Câmara Municipal.' },
        { kind: 'paragraph', text: 'In Portugal, meals are not always automatically “included in school”. A parent usually needs to register the child for refeições, top up the school account and mark meal days in advance in the school or município system, or via the cartão aluno.' },
        { kind: 'warning', text: 'Prices for 1.º ciclo and pré-escolar are often set by the Câmara Municipal, while for 2.º/3.º ciclo and secundário they are set by the agrupamento/school under ASE rules. Therefore two schools in neighbouring concelhos may have different payment interfaces and different order deadlines.' }
      ]
    },
    {
      id: 'prices-2026',
      title: 'Prices in 2026: normal, escalão A and B',
      content: [
        { kind: 'paragraph', text: 'The basic logic is this: if the family has approved ASE, the child pays less or does not pay. ASE is linked to household income and is usually based on the escalão do abono de família assigned by Segurança Social.' },
        { kind: 'checklist', items: [
          '2.º and 3.º ciclo: escalão A — usually free.',
          '2.º and 3.º ciclo: escalão B — usually €0.73 per lunch.',
          '2.º and 3.º ciclo: without ASE — around €1.85 per lunch at the standard school tariff.',
          'Secundário: the tariff may be higher, especially if the school applies a separate price for ensino secundário or late ordering.',
          '1.º ciclo: meals are more often managed by the Câmara Municipal; a tariff of around €1.46 for a social escalão and around €4.05 without support is seen.',
          'Pré-escolar: the rules are almost always municipal; check the tabela de preços da Câmara Municipal.',
          'Late ordering or buying “on the day” may cost more than a normal booking.',
          'Cancelling lunch after the set deadline usually does not result in a refund.'
        ] },
        { kind: 'warning', text: 'Do not confuse escalão A/B for ASE with internal municipal escalões de rendimento. In 1.º ciclo, some municípios use their own table, where escalão names may differ from school ASE.' }
      ]
    },
    {
      id: 'how-to-get-ase',
      title: 'How to get ASE through Portal das Matrículas',
      content: [
        { kind: 'paragraph', text: 'ASE means Ação Social Escolar. It is school social support: meals, textbooks, sometimes school supplies and transportes escolares. For a foreign family, the mechanism is the same: you need the child’s/parents’ NIF, access to Portal das Matrículas and confirmation of the family escalão.' },
        { kind: 'checklist', items: [
          'Go to Portal das Matrículas via autenticação.gov.pt, Chave Móvel Digital (CMD) or Cartão de Cidadão.',
          'Choose matrícula or renovação de matrícula for the relevant school year.',
          'In the Ação Social Escolar section, tick the request for ASE.',
          'Attach the declaração de escalão do abono de família from Segurança Social Direta if the portal or school asks for a file.',
          'If abono de família has not yet been assigned, apply for it with Segurança Social as early as possible.',
          'Check e-mail and messages from the agrupamento: the school may request missing documents.',
          'After the decision, confirm with the secretaria whether the escalão has been activated in the cantina system.',
          'If you have moved to another concelho or school, check whether ASE was transferred automatically — confirmation is often needed again.'
        ] },
        { kind: 'paragraph', text: 'Entitlement to ASE is usually confirmed before the start of the school year, but you can apply later if the family has moved, the child is entering a Portuguese school for the first time or income has changed.' }
      ]
    },
    {
      id: 'payment-and-booking',
      title: 'Paying for and booking lunches',
      content: [
        { kind: 'paragraph', text: 'Each school has its own system: SIGA, GIAE, Inovar, Unicard, Município online, Multibanco reference, MB WAY or a school cartão aluno. The details are provided by the school secretaria or Câmara Municipal.' },
        { kind: 'checklist', items: [
          'Get the parent login for the school or município system.',
          'Check that the child is linked to the correct turma and escola.',
          'Top up the balance via Multibanco, MB WAY, bank transfer or in person, if the school allows it.',
          'Book refeições for the week or month — many schools require this to be done in advance.',
          'Check the deadline: orders for the following day often close the previous morning or afternoon.',
          'Cancel lunch in advance if the child is ill or going on a visita de estudo.',
          'Keep payment comprovativos at least until the end of the school year.',
          'If the balance goes negative, access to ordering meals may be temporarily blocked.'
        ] },
        { kind: 'warning', text: 'If the child is going to school from the first day without active access to the cantina system, write to the secretaria in advance. In the first weeks of September, queues are long, and without a booking the child may not be given lunch.' }
      ]
    },
    {
      id: 'special-diets-and-problems',
      title: 'Allergies, religion, vegetarian menu and disputes',
      content: [
        { kind: 'paragraph', text: 'Schools usually publish the ementa mensal and information about allergens. An alternative menu may be possible, but it must be agreed in advance: most often through the secretaria, direção do agrupamento or serviço de refeições da Câmara Municipal.' },
        { kind: 'checklist', items: [
          'For an allergy or medical diet, bring a declaração médica in Portuguese or English.',
          'For a vegetarian menu, check the request form: some municípios require a separate formulário.',
          'For religious restrictions, write a written pedido à direção da escola.',
          'Check whether the special menu is available every day or only with advance ordering.',
          'If the child is given the wrong dish, record the date, escola, turma and a photo of the ementa.',
          'First contact the secretaria or coordenação da escola.',
          'If the problem repeats, write to the direção do agrupamento and Câmara Municipal.',
          'For questions about food quality, you can ask for the livro de reclamações or use Livro de Reclamações Eletrónico.'
        ] },
        { kind: 'paragraph', text: 'For small children, it is useful in the first weeks to ask the teacher whether the child ate in the cantina. The system may show “lunch deducted”, but this does not guarantee that the child actually ate.' }
      ]
    }
  ],
  costs: [
    { label: '2.º/3.º ciclo, ASE escalão A', amountEUR: 0, note: 'Usually free with approved Ação Social Escolar.' },
    { label: '2.º/3.º ciclo, ASE escalão B', amountEUR: 0.73, note: 'Usually 50% of the subsidised school tariff.' },
    { label: '2.º/3.º ciclo, without ASE', amountEUR: 1.85, note: 'Typical normal tariff; the school may apply a separate price for late ordering.' },
    { label: '1.º ciclo, social município tariff', amountEUR: 1.46, note: 'Municipal table; depends on the Câmara Municipal and the family’s status.' },
    { label: '1.º ciclo, without social support', amountEUR: 4.05, note: 'A municipal normal tariff that is seen; check the tabela de preços for your concelho.' }
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
      title: 'Gov.pt — Portal das Matrículas',
      url: 'https://www.gov.pt/pt/servicos/fazer-a-matricula-ou-renovacao-de-matricula-escolar',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Gov.pt — Ação Social Escolar',
      url: 'https://www.gov.pt/pt/servicos/pedir-apoios-de-acao-social-escolar',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
