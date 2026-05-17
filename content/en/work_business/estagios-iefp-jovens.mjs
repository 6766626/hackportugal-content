export default {
  editorialVoice: 'hackportugal',
  id: 'estagios-iefp-jovens',
  categoryId: 'work_business',
  title: 'Estágios IEFP: internships for young people through the job centre',
  tldr: 'Estágios IEFP are paid internships through the Centro de Emprego/IEFP for entering the Portuguese labour market. In 2026, the typical duration under programmes for young people is up to 12 months; the candidate is usually 18–29, while 30+ are accepted only in special groups, for example RSI recipients. The employer pays the money, and IEFP reimburses part of the costs. A common reference point in vacancies is around €870/month gross: the actual bolsa depends on the IAS €537.13, qualification level and programme.',
  tags: ['iefp', 'internship', 'work', 'jovens'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What an Estágio IEFP is and who pays',
      content: [
        { kind: 'paragraph', text: 'An Estágio IEFP is not a standard employment contract, but a professional internship programme approved by IEFP. The intern works at a company under an internship plan and receives a bolsa de estágio, subsídio de alimentação and workplace accident insurance. The employer transfers the money monthly; IEFP then reimburses the employer for part of the costs under the rules of the specific measure.' },
        { kind: 'paragraph', text: 'For an expat, the main advantage is legal first experience in Portugal, a line on the CV and a chance to obtain a contrato de trabalho after the internship. The main disadvantage is that the internship is temporary, usually up to 12 months, and does not guarantee hiring.' },
        { kind: 'warning', text: 'Do not confuse this: IEFP does not directly “pay you extra on top”. If a vacancy says €870/month, this is usually the gross bolsa paid by the company; IEFP compensation goes to the employer.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Who can take part in 2026',
      content: [
        { kind: 'paragraph', text: 'The basic target group for IEFP youth internships is people aged 18–29 registered with the Centro de Emprego as desempregado or à procura do 1.º emprego. For 30+, eligibility depends on the specific measure and status: for example, recipients of Rendimento Social de Inserção (RSI), long-term unemployed people or other vulnerable groups may qualify under separate schemes, including Inserção+.' },
        { kind: 'checklist', items: [
          'Age is usually 18–29 for youth Estágios Profissionais / Estágios INICIAR',
          'For 30+ — check eligibility under the specific candidatura: RSI, unemployment, disability, long-term unemployment',
          'Registration with IEFP as candidato a emprego is required',
          'Legal stay and the right to work in Portugal are required: residence permit, visa with the right to work or another accepted status',
          'A NIF is required; NISS will almost always be needed for payments and Segurança Social',
          'A Portuguese address is required: rental contract, atestado de residência or another proof of address',
          'You cannot do an IEFP internship with an employer where you are already effectively working under a standard contrato de trabalho',
          'The employer must be approved by IEFP and submit a candidatura under an open programme'
        ] },
        { kind: 'warning', text: 'If you entered as a tourist or have a visa without the right to work, an IEFP internship does not fix your immigration status. First check the right to work and extend your stay through AIMA.' }
      ]
    },
    {
      id: 'money',
      title: 'How much is paid: why “€870” is not universal',
      content: [
        { kind: 'paragraph', text: 'In 2026, the base IAS index is €537.13. Many IEFP bolsa amounts are calculated as a multiple of the IAS and depend on the qualification level under the Quadro Nacional de Qualificações. This means the amount in an advert may differ: around €859–870/month gross for one category, higher for licenciatura/mestrado and lower for some entry levels.' },
        { kind: 'checklist', items: [
          'Bolsa de estágio is the gross amount before tax and Segurança Social',
          'Subsídio de alimentação is usually paid separately for working days',
          'Seguro de acidentes de trabalho must be provided by the employer',
          'IEFP reimburses the employer for part of the bolsa, food allowance and insurance under the programme rules',
          'The intern usually makes descontos para Segurança Social; check the recibo de vencimento',
          'IRS may be withheld if income and personal circumstances fall under retenção na fonte',
          'The internship is not the same as the SMN: the 2026 minimum wage is €920, but the IEFP bolsa is calculated under its own rules',
          'If a company promises “net €870”, ask for a written gross/net calculation before signing'
        ] },
        { kind: 'warning', text: 'Do not agree to a “formally estágio, informally full-time without payments” arrangement. Complaints are submitted to IEFP and ACT, but it is better not to start with a grey arrangement.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply through the Centro de Emprego',
      content: [
        { kind: 'substeps', items: [
          { id: 'register', title: '1. Register with IEFP', content: [
            { kind: 'paragraph', text: 'Online via iefponline.iefp.pt or in person at the Centro de Emprego for your address. In practice, an in-person visit is useful if you have foreign documents, a recent residence permit or no Chave Móvel Digital.' },
            { kind: 'checklist', items: [
              'Passport or cartão de residência',
              'NIF',
              'NISS, if you already have one',
              'Proof of address',
              'CV in Portuguese or English',
              'Diplomas, certificates, histórico escolar',
              'Diploma recognition documents, if the profession is regulated',
              'IBAN of a Portuguese or SEPA account'
            ] }
          ] },
          { id: 'profile', title: '2. Update your perfil profissional', content: [
            { kind: 'paragraph', text: 'In your IEFP account, enter your education, languages, experience, desired funções and concelhos where you are willing to work. The more accurate the profile, the more relevant the encaminhamentos from the técnico do IEFP.' }
          ] },
          { id: 'search', title: '3. Look for vacancies marked Estágio IEFP', content: [
            { kind: 'paragraph', text: 'Check IEFP Online, LinkedIn, Net-Empregos and company websites. In your application, state immediately that you are registered with IEFP and fit the Estágio IEFP; this matters to the employer because without your registration the candidatura will not go through.' }
          ] },
          { id: 'employer-submits', title: '4. The employer submits the candidatura', content: [
            { kind: 'paragraph', text: 'The company submits the final application to IEFP: internship plan, tutor, duração, bolsa, workplace. IEFP checks the eligibility of the employer and candidate. Starting the internship before formal approval is risky: the costs may not be recognised.' }
          ] }
        ] }
      ]
    },
    {
      id: 'program-types',
      title: 'Which programmes are commonly seen',
      content: [
        { kind: 'paragraph', text: 'The names of IEFP measures change by year and avisos de abertura. In April 2026, rely not on an old name from a blog, but on the active IEFP page and the aviso for the specific candidatura.' },
        { kind: 'checklist', items: [
          'Estágios Profissionais / youth internships — the typical route for 18–29 after studies or for first experience',
          'Estágios INICIAR — a format for starting a professional career; conditions depend on the open IEFP aviso',
          'Estágios IPN or internships through incubators/partners — often arranged through a company/organisation, but funding rules still need to be checked with IEFP',
          'Inserção+ — integration measures for people in vulnerable situations; for 30+, having a status such as RSI or long-term unemployment is important',
          'Internships for pessoas com deficiência e incapacidade — separate rules and increased employer support',
          'After the estágio, the employer may receive an incentive for contratação sem termo or contrato a termo, if the relevant apoio is open'
        ] },
        { kind: 'warning', text: 'If a recruiter says “this is IEFP, but you do not need to register”, ask for the measure number and aviso. For a genuine IEFP internship, candidate registration and IEFP approval are key elements.' }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Practical expat tips: how to improve your chances',
      content: [
        { kind: 'checklist', items: [
          'Create a CV in a European but short format: 1–2 pages, without a long biography',
          'Add your Portuguese level: A2/B1 often matters more than perfect English',
          'Get a NISS in advance if you are already entitled to one: companies dislike onboarding delays',
          'Ask the IEFP técnico which measure you fall under: 18–29, RSI, long-term unemployed, primeiro emprego',
          'At the interview, clarify the gross bolsa, alimentação, horário, tutor and likelihood of hiring after the estágio',
          'Do not hide your immigration status: the employer needs to understand whether the internship can be arranged legally',
          'If your diploma is foreign, prepare a translation or recognition through DGES, if the profession requires it',
          'Keep all e-mails, plano de estágio and recibos de vencimento'
        ] },
        { kind: 'paragraph', text: 'A good strategy: first register with IEFP, then write directly to companies with the phrase “estou inscrito no IEFP e elegível para estágio profissional”. For small businesses, this removes part of the bureaucratic fear.' }
      ]
    }
  ],
  costs: [
    { label: 'Candidate registration with IEFP', amountEUR: 0, note: 'Free online or at the Centro de Emprego' },
    { label: 'Reference bolsa around 1.6 IAS', amountEUR: 859.41, note: 'IAS 2026 = €537.13; the actual amount depends on the programme and qualification' },
    { label: 'Common reference point in adverts', amountEUR: 870, note: 'Gross per month; not a guaranteed IEFP amount for all candidates' }
  ],
  sources: [
    { title: 'IEFP — estágio measures and employment apoios', url: 'https://www.iefp.pt/estagios', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IEFP Online — registration, job offers and candidaturas', url: 'https://iefponline.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt — registration with the Centro de Emprego', url: 'https://www.gov.pt/pt/servicos/inscrever-se-no-centro-de-emprego', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'gov.pt — IEFP and public employment policies', url: 'https://www.gov.pt/pt/entidades/instituto-do-emprego-e-formacao-profissional', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
