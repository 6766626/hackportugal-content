export default {
  editorialVoice: 'hackportugal',
  id: 'seguranca-social-direta',
  categoryId: 'documents_fiscal',
  title: 'Segurança Social Direta: all SSD online services',
  tldr: 'Segurança Social Direta is the Segurança Social personal account: NISS, contributions, recibos verdes, sickness/unemployment/parental benefits, empregado doméstico registration, pension and family benefit simulators. Login is via NISS + password or Chave Móvel Digital (CMD). In 2026, a NISS request for a foreign citizen is submitted online free of charge; key rates: employee 11%, employer usually 23.75%, independent worker 21.4%, IAS €537.13. SSD is needed by almost everyone who works, pays contributions or is waiting for benefits.',
  tags: ['ssd', 'niss', 'segurança-social', 'cmd'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Segurança Social Direta is',
      content: [
        { kind: 'paragraph', text: 'Segurança Social Direta, or SSD, is the official online account of Segurança Social. It is not the tax authority Finanças and not AIMA: social contributions, contribution history, benefits, pensions and employee/self-employed statuses are managed here.' },
        { kind: 'paragraph', text: 'SSD is not only for people who already work. Through the portal you can request a NISS, check whether your employer is paying contributions, submit benefit applications, see debts, download declarations and manage family details.' },
        { kind: 'checklist', items: [
          'Request a NISS for a foreign citizen',
          'Check carreira contributiva — months and amounts of contributions',
          'See remunerações declaradas by the employer',
          'Apply for or track subsídio de doença, desemprego, parentalidade',
          'Submit the quarterly declaration for recibos verdes',
          'View pagamentos e recebimentos — charges, payments, debts',
          'Obtain declarações for a bank, rental, benefits or immigration procedures',
          'Register trabalhador de serviço doméstico as an employer',
          'Use simulador de pensões and other simulators'
        ] }
      ]
    },
    {
      id: 'access',
      title: 'How to log in: CMD or SSD password 🔐',
      content: [
        { kind: 'paragraph', text: 'Access to SSD is possible in two main ways: through Chave Móvel Digital (CMD) or through NISS + palavra-chave Segurança Social. For an expat, it is more practical to have both options: CMD is often faster, while the SSD password helps if CMD is not activated or your phone number has changed.' },
        { kind: 'substeps', items: [
          { id: 'cmd', title: 'Login through Chave Móvel Digital', content: [
            { kind: 'paragraph', text: 'CMD is the state digital identification system. It can be used on gov.pt, ePortugal, Finanças, Segurança Social Direta and other portals. Login usually requires a phone number, PIN CMD and a one-time code.' },
            { kind: 'checklist', items: [
              'Activate CMD in advance: online with Cartão de Cidadão or in person at Espaço Cidadão / IRN / other service points',
              'Check that an up-to-date Portuguese or foreign phone number is linked to CMD',
              'Keep your PIN CMD separately from your SIM card',
              'If you change phone number, update CMD before losing access to the old number'
            ] }
          ] },
          { id: 'password', title: 'Login with NISS + password', content: [
            { kind: 'paragraph', text: 'If you already have a NISS, you can request an access password on the Segurança Social Direta page. In some cases the password is sent to the address registered with Segurança Social; therefore the address must be up to date.' },
            { kind: 'checklist', items: [
              'You need a NISS — Número de Identificação da Segurança Social',
              'You need an up-to-date address, phone number and email in the Segurança Social system',
              'After the first login, check and update contactos',
              'Do not use your SSD password in Finanças, banks or private services',
              'If the password does not arrive, contact support via e-Clic, Linha Segurança Social or presencial atendimento'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Do not share access with an accountant, employer or landlord. SSD shows your contributions, benefits, family data and possible debts. For an accountant, it is safer to use separate authorisations or limited document sharing.' }
      ]
    },
    {
      id: 'niss-online',
      title: 'Online NISS request for a foreign citizen',
      content: [
        { kind: 'paragraph', text: 'NISS is the social identification number. It is needed for an employment contract, recibos verdes, contributions, benefits and some administrative procedures. In 2026, foreign citizens can submit a NISS request online through the formulário Pedido de NISS — Cidadão Estrangeiro on the Segurança Social website.' },
        { kind: 'checklist', items: [
          'Passport, EU Cartão de Cidadão or another identification document',
          'NIF, if you already have one',
          'Residence permit, visa or another document proving legal stay, if applicable',
          'Contact email and phone number',
          'Address in Portugal or correspondence address',
          'Document proving employment/self-employed activity, if available: contrato de trabalho, declaração da entidade empregadora, início de atividade',
          'For a representative — power of attorney and the representative’s documents'
        ] },
        { kind: 'paragraph', text: 'Submitting the request is free of charge. After the NISS is assigned, you will be able to request an SSD password and check whether your record has appeared in the system. If the employer needs the NISS, do not wait “until the company does everything”: check the assignment yourself.' },
        { kind: 'warning', text: 'A NISS by itself does not grant a residence permit, does not replace the NIF and does not prove tax residence. It is a Segurança Social number, not an immigration status.' }
      ]
    },
    {
      id: 'contributions',
      title: 'Contributions, contribution history and recibos verdes',
      content: [
        { kind: 'paragraph', text: 'One of the main SSD sections is consulta da carreira contributiva. Here you can see for which months and on what amounts contributions were declared. This is critical for benefits and your future pension: Segurança Social calculates entitlements not by the employment contract on paper, but by registered remunerações and contributions.' },
        { kind: 'checklist', items: [
          'An employee under contrato de trabalho usually pays 11% from salary',
          'The employer usually pays 23.75% on top of salary',
          'An independent worker on recibos verdes under the standard regime pays 21.4%',
          'Declaração trimestral for recibos verdes is submitted in January, April, July and October',
          'In SSD you can see contribuições a pagar and Multibanco references',
          'You can check dívida à Segurança Social and request payment plans, if available',
          'You can download declarações de situação contributiva',
          'Check contribution history for benefits and pensions by month, not only by annual total'
        ] },
        { kind: 'warning', text: 'If the employer withholds 11% from salary, but there are no remunerações in SSD, this is a red flag. Ask for payslips recibo de vencimento and clarify with the employer in writing; if necessary, contact ACT and Segurança Social.' }
      ]
    },
    {
      id: 'benefits-and-services',
      title: 'Benefits, pensions and serviço doméstico',
      content: [
        { kind: 'paragraph', text: 'SSD is the main channel for applications and tracking payments. Not all benefits are “requested from scratch” manually: for example, sick leave often starts with a Certificado de Incapacidade Temporária, which the SNS doctor sends electronically, and in SSD you check the status, amounts and any missing data.' },
        { kind: 'checklist', items: [
          'Subsídio de doença — sick pay, if there is the required prazo de garantia and an electronic CIT',
          'Subsídio de desemprego — unemployment benefit after registration with IEFP and if the contribution history requirements are met',
          'Subsídio parental — payments on the birth of a child and licença parental',
          'Abono de família — family benefit, depends on household income and escalão',
          'Prestações por deficiência ou dependência — separate payments under confirmed conditions',
          'Simulador de pensões — indicative calculation of a future pension based on carreira contributiva data',
          'Registo de trabalhador de serviço doméstico — registration of a domestic worker by the employer',
          'Pedidos e mensagens — tracking applications, notifications and Segurança Social requests'
        ] },
        { kind: 'paragraph', text: 'For serviço doméstico, SSD allows the employer to register the relationship, declare remunerações and pay contributions. This is important for nannies, cleaners, carers and families who hire someone directly rather than through an agency.' },
        { kind: 'warning', text: 'Benefits have deadlines and conditions. For desemprego, registration with IEFP and contribution history are important; for parentalidade — submission deadlines and correct indication of licença; for doença — the electronic CIT and employer details. Do not postpone checking SSD until the moment when the money should already have arrived.' }
      ]
    },
    {
      id: 'practical-routine',
      title: 'A practical routine for an expat',
      content: [
        { kind: 'paragraph', text: 'After receiving the NISS and logging into SSD for the first time, set up the account as a working tool. It takes less than an hour, but saves weeks of correspondence if the employer makes a mistake, a benefit gets stuck or Segurança Social sends a notification.' },
        { kind: 'checklist', items: [
          'Check nome, date of birth, NIF, address, email and phone number',
          'Activate notificações digitais if you understand the consequences and regularly check the portal',
          'Once a month, check remunerações declaradas by the employer',
          'Once a quarter, check recibos verdes and declaração trimestral if you are self-employed',
          'Download comprovativos and declarações as PDF immediately after submitting applications',
          'Save Multibanco references and comprovativos de pagamento',
          'Before changing jobs, check that the old employer closed the vínculo correctly',
          'Before applying for a benefit, check the IBAN and household in the system',
          'Do not ignore mensagens da Segurança Social — some deadlines are counted from the notification date'
        ] },
        { kind: 'warning', text: 'SSD, Finanças and AIMA do not synchronise everything instantly. A change of address, family status, IBAN or activity status may require separate updates in several systems.' }
      ]
    }
  ],
  costs: [
    { label: 'NISS request for a foreign citizen', amountEUR: 0, note: 'Submission through the official Segurança Social online form is free of charge' },
    { label: 'Access to Segurança Social Direta', amountEUR: 0, note: 'Login via CMD or NISS + password has no state fee' },
    { label: 'Chave Móvel Digital', amountEUR: 0, note: 'CMD activation as a state service is free of charge; only normal operator communication/SMS costs may apply' }
  ],
  sources: [
    { title: 'Segurança Social Direta — official portal', url: 'https://www.seg-social.pt/seguranca-social-direta', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Pedido de NISS — Cidadão Estrangeiro', url: 'https://www.seg-social.pt/pedido-de-formulario-niss-cidadao-estrangeiro', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt — Request the Número de Identificação da Segurança Social', url: 'https://www.gov.pt/servicos/pedir-o-numero-de-identificacao-da-seguranca-social-niss', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt — Request Chave Móvel Digital', url: 'https://www.gov.pt/servicos/pedir-a-chave-movel-digital', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
