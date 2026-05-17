export default {
  editorialVoice: 'hackportugal',
  id: 'apoio-domiciliario-sad',
  categoryId: 'healthcare',
  title: 'Serviço de Apoio Domiciliário (SAD): help at home',
  tldr: 'SAD is home-based social support for elderly people, people with disabilities or temporary dependency: meals, hygiene, cleaning, laundry, accompaniment to the doctor, and day-to-day monitoring. It is usually arranged through an IPSS/Misericórdia/município with an acordo de cooperação and payment according to household income: often €100–400/month, sometimes less with low income. This is not an ambulance service and not an ERPI care home: for non-acute cases, SAD is often quicker than the ERPI waiting list.',
  tags: ['sad', 'elderly', 'social support', 'ipss'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-sad-is',
      title: 'What SAD is and who it suits',
      content: [
        { kind: 'paragraph', text: 'Serviço de Apoio Domiciliário is a social service where a person continues to live at home but receives regular help. In Portugal, SAD is usually provided by IPSS, Santa Casa da Misericórdia, parish/municipal bodies or licensed private companies.' },
        { kind: 'paragraph', text: 'It is a good option for an elderly parent, a person after surgery, in cases of disability, early-stage dementia, limited mobility, or when the family needs relief for a few hours a day.' },
        { kind: 'checklist', items: [
          'daily or several-times-a-week delivery of refeições ao domicílio',
          'help with personal hygiene, dressing, getting out of bed',
          'light cleaning of the living area and changing bed linen',
          'laundry and clothing care',
          'buying medicines and basic groceries, if included in the plan',
          'accompaniment to appointments at the Centro de Saúde, hospital or Finanças',
          'medication reminders, but not prescribing treatment',
          'social contact: visits, monitoring condition, alerting the family',
          'sometimes teleassistência or an alarm button, if the provider offers the service'
        ] },
        { kind: 'warning', text: 'SAD does not replace the SNS, a doctor, a nurse or the Serviço de Urgência. Dressings, injections, palliative care and rehabilitation go through the SNS, UCC/ECCI or private healthcare. In case of a fall, chest pain, stroke, acute confusion — 112.' }
      ]
    },
    {
      id: 'where-to-apply',
      title: 'Where to look for a provider',
      content: [
        { kind: 'paragraph', text: 'Start with the area where the person actually lives. SAD is territorial: an IPSS usually serves specific freguesias and will not take an address outside its route.' },
        { kind: 'checklist', items: [
          'Junta de Freguesia: ask for a list of IPSS, centros sociais and Misericórdia that serve your address',
          'Câmara Municipal: Ação Social / Divisão de Intervenção Social department',
          'Centro de Saúde: ask a social worker / assistente social to assess the situation',
          'local Segurança Social: referral and information on respostas sociais',
          'Carta Social: check licensed respostas sociais by concelho and freguesia',
          'Santa Casa da Misericórdia of the local concelho',
          'private empresas de apoio domiciliário, if help is needed quickly or in the evenings/weekends'
        ] },
        { kind: 'paragraph', text: 'With an IPSS that has an acordo de cooperação, the price is usually calculated according to the income of the user/household. With a private company, the price is contractual: quicker start, more flexibility, but more expensive.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for the application',
      content: [
        { kind: 'paragraph', text: 'The set of documents depends on the institution, but identity, address, income and degree of dependency are almost always checked. For foreigners, NIF, address and legal stay are important; a residence permit helps, but the social service may also consider other proof of lawful residence.' },
        { kind: 'checklist', items: [
          'passport or Cartão de Cidadão / residence permit',
          'NIF of the user and, often, NIF of the family representative',
          'Número de utente SNS, if available',
          'NISS, if available; pensioners from another country may be asked for proof of pension',
          'comprovativo de morada: rental contract, utility bill or atestado de residência from the Junta de Freguesia',
          'IRS declaração + nota de liquidação or proof of no IRS in Portugal',
          'statements for pension, salário, pensão de sobrevivência, CSI or other benefits',
          'bank statements/IBAN, if the institution requires a financial assessment',
          'medical certificate on dependency, disability, dementia or limited mobility',
          'list of medicines and family doctor contacts',
          'contacts of the responsible relative/representative and autorização de tratamento de dados'
        ] },
        { kind: 'warning', text: 'Do not sign a contrato de prestação de serviços that does not include the visit schedule, list of services, price, cancellation rules and responsibility for keys/access to the home. Ask for a copy of the regulamento interno.' }
      ]
    },
    {
      id: 'pricing',
      title: 'How much it costs in 2026',
      content: [
        { kind: 'paragraph', text: 'For SAD through an IPSS, the price is called comparticipação familiar. It is calculated by the institution based on income per person, expenses and the internal regulamento. In 2026, a typical range for a basic package is around €100–400/month: for example, meal delivery + morning hygiene + light cleaning several times a week.' },
        { kind: 'paragraph', text: 'If income is very low, the price may be symbolic or below €100/month. If income is high, two daily visits, weekends, a diet, transport and accompaniment are needed — the amount may exceed €400/month, especially with private providers.' },
        { kind: 'checklist', items: [
          'ask whether meals are included in the price or paid separately per refeição',
          'check whether there is a surcharge for weekends and feriados',
          'check the cost of banho assistido separately from cleaning',
          'find out whether fraldas, hygiene products and medicines are included — usually not',
          'check who pays for taxi/transport to appointments',
          'ask for the comparticipação familiar calculation in writing',
          'compare IPSS and private options: sometimes a private provider starts within 48–72 hours, but costs €15–25/hour'
        ] }
      ]
    },
    {
      id: 'waiting-and-priority',
      title: 'Waiting list and priority',
      content: [
        { kind: 'paragraph', text: 'SAD is often faster than ERPI — a lar/residência for elderly people. In popular concelhos, ERPI waiting lists can be months or longer; SAD is easier to scale if the route already passes nearby.' },
        { kind: 'checklist', items: [
          'priority is higher if the person lives alone and there is a risk of falls',
          'after hospitalisation, ask the hospital discharge social worker to contact an IPSS',
          'in cases of dementia, attach a relatório médico: this affects the frequency of visits',
          'if the family needs to travel, arrange temporary reinforcement in advance, not on the last day',
          'if one IPSS has no places, apply to 3–5 organisations serving your address',
          'ask the Câmara Municipal about a programa municipal sénior, teleassistência or apoio alimentar',
          'for medical home care, at the same time ask the family doctor for referenciação para ECCI, if indicated'
        ] },
        { kind: 'warning', text: 'Do not wait for a crisis. When there are already falls, refusal to eat or night wandering, SAD may be insufficient: an assessment by the médico de família, neurologia/psiquiatria, apoio informal estruturado or ERPI is needed.' }
      ]
    },
    {
      id: 'contract-and-control',
      title: 'How to monitor quality',
      content: [
        { kind: 'paragraph', text: 'A proper SAD works according to an individual plano de cuidados: days, times, tasks, meals, risks, family contact. Ask for the plan to be reviewed after 30 days: the real need often only becomes clear after the start.' },
        { kind: 'checklist', items: [
          'leave a list of medicines, allergies, diagnoses and doctor contacts in a visible place',
          'keep a visit log: date, time, who came, what they did',
          'appoint one relative to communicate with the SAD coordinator',
          'do not keep large amounts of cash at home',
          'if you give keys, record this in writing',
          'check food quality and compliance with the diet',
          'report bruises, falls, missed visits or changes in condition immediately',
          'review the package every 3–6 months: more/fewer visits, meals, cleaning, accompaniment'
        ] },
        { kind: 'paragraph', text: 'If the service does not match the contract, first complain to the institution coordinator. If it is a licensed resposta social and the problem is serious, you can contact Segurança Social/ISS and use the Livro de Reclamações.' }
      ]
    }
  ],
  costs: [
    { label: 'SAD through an IPSS, basic package', amountEURMin: 100, amountEURMax: 400, note: 'Indicative mercado social range in 2026; the actual comparticipação familiar depends on income and the regulamento interno.' },
    { label: 'Private home help', amountEURMin: 15, amountEURMax: 25, note: 'Indicative hourly rate in cities; nights, weekends and high-dependency care cost more.' },
    { label: 'Separate delivery of refeições ao domicílio', amountEURMin: 3.5, amountEURMax: 8, note: 'Per meal, if not included in the SAD package; depends on the concelho and provider.' }
  ],
  sources: [
    {
      title: 'Segurança Social: respostas sociais for elderly people',
      url: 'https://www.seg-social.pt/idosos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Carta Social: search for licensed respostas sociais, including apoio domiciliário',
      url: 'https://www.cartasocial.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portaria 38/2013: conditions for organising Serviço de Apoio Domiciliário',
      url: 'https://diariodarepublica.pt/dr/detalhe/portaria/38-2013-258083',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 64/2007: licensing and supervision of social institutions',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/64-2007-519065',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
