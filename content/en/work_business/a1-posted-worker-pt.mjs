export default {
  editorialVoice: 'hackportugal',
  id: 'a1-posted-worker-pt',
  categoryId: 'work_business',
  title: 'A1 certificate: posting an employee from Portugal to the EU',
  tldr: 'The A1 Portable Document is needed if an employee with a Portuguese contrato de trabalho temporarily goes to work in another EU/EEA country or Switzerland but must remain in Portugal’s Segurança Social system. The usual maximum is 24 months under Reg. 883/2004 art. 12, with no replacement of another posted worker. The employer submits the request through Segurança Social Direta before departure; contributions continue to be paid in Portugal, and the host country should not require local social security contributions.',
  tags: ['a1', 'posting', 'segurança-social', 'work'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-a1-does',
      title: 'What A1 does and when it is needed',
      content: [
        { kind: 'paragraph', text: 'The A1 Portable Document confirms that Portuguese social security continues to apply to the employee during the period of temporary work abroad. It is not a work visa and not a work permit; it is a certificate on the applicable Segurança Social legislation.' },
        { kind: 'paragraph', text: 'Typical case: you live and work in Portugal under an employment contract, and your employer sends you to a project, installation, audit, consultancy work, a conference with work tasks, or temporary work in another EU or EEA country, or Switzerland.' },
        { kind: 'checklist', items: [
          'The employee remains on the Portuguese employer’s payroll',
          'The contrato de trabalho with the Portuguese company is not terminated',
          'Segurança Social contributions continue to be paid in Portugal',
          'The host country should not charge its own social security contributions for the same period',
          'A1 may be requested by a labour inspectorate, client, the host company’s payroll team, or the project organiser',
          'The document is needed even for short business trips if work is performed during the trip',
          'A1 is not needed for ordinary tourism'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Conditions for posting under art. 12',
      content: [
        { kind: 'paragraph', text: 'Basic rule of Reg. (EC) 883/2004 art. 12: a person employed in one EU country and sent by their employer to work temporarily in another country may remain in the system of the first country if the expected duration of the work abroad does not exceed 24 months and they are not sent to replace another posted worker.' },
        { kind: 'checklist', items: [
          'The employer normally carries out substantial activity in Portugal and is not a “letterbox” company',
          'A direct employment relationship between the employee and the Portuguese employer is maintained',
          'The employee is already subject to Portuguese Segurança Social before the posting',
          'The posting is temporary: the application states specific start and end dates',
          'The maximum standard period is up to 24 months',
          'A1 cannot be used to successively replace one posted worker with another in the same position',
          'The destination country is the EU, Iceland, Liechtenstein, Norway, or Switzerland',
          'A different regime applies to regular work in several countries: multi-state worker, not ordinary destacamento'
        ] },
        { kind: 'warning', text: 'If the host country effectively becomes the normal place of work, or if the period is known in advance to be more than 24 months, the standard A1 for destacamento may not be suitable. A separate assessment of the applicable legislation is needed and, sometimes, an exceptional agreement under Reg. 883/2004 art. 16.' },
        { kind: 'warning', text: 'Important for third-country nationals (not EU/EEA/Switzerland citizens). For EU citizens the rule covers the EU, Iceland, Liechtenstein, Norway, and Switzerland. For a third-country national legally resident in Portugal, A1 is usually possible for a posting to another EU state under Reg. (EU) 1231/2010, but this extension does not apply to Denmark and does not cover Iceland, Liechtenstein, Norway, or Switzerland. For those destinations, check in advance how the rules apply with Segurança Social and the destination country.' }
      ]
    },
    {
      id: 'request-online',
      title: 'How to request it through Segurança Social Direta',
      content: [
        { kind: 'paragraph', text: 'For an employee, the request is usually submitted by the employer in Segurança Social Direta. It is useful for the employee to check in advance that they have a NISS and that the employer is correctly submitting remunerações and contributions.' },
        { kind: 'substeps', items: [
          { id: 'prepare-data', title: '1. Prepare the data', content: [
            { kind: 'checklist', items: [
              'Employee’s NISS',
              'Employee’s full name and date of birth',
              'Employer’s NIF and company details',
              'Destination country or countries',
              'Address of the workplace abroad, if known',
              'Start date and end date of the posting',
              'Description of the work to be performed',
              'Details of the host company or client, if any',
              'Confirmation that the employee is not replacing another posted worker',
              'Contact details of the employer’s responsible person'
            ] }
          ] },
          { id: 'submit-ssd', title: '2. Submit the Pedido de destacamento', content: [
            { kind: 'paragraph', text: 'The employer logs in to Segurança Social Direta and chooses the service related to destacamento de trabalhadores / pedido de A1. It is better to submit the application before the trip starts: A1 is often needed already when entering a site or before the client grants access to work.' }
          ] },
          { id: 'download-a1', title: '3. Download it and give it to the employee', content: [
            { kind: 'paragraph', text: 'After approval, A1 is available digitally. The employee should keep the PDF on their phone and a printed copy: in some countries, inspectors on construction sites, at factories, and at events still ask for a paper copy.' }
          ] }
        ] }
      ]
    },
    {
      id: 'during-posting',
      title: 'What to do during the posting',
      content: [
        { kind: 'paragraph', text: 'A1 only deals with the social security issue. It does not override the host country’s rules on minimum pay, working time, health and safety, registration of posted workers, and tax risks.' },
        { kind: 'checklist', items: [
          'Keep A1 with you throughout the entire period of work abroad',
          'Check whether the employer needs to file a posted worker notification in the destination country',
          'Keep travel orders, tickets, the client contract, and timesheets',
          'Make sure the dates of actual work do not fall outside the A1 dates',
          'If the dates, country, or facts of the posting change, the employer must request an amendment or a new A1 in advance. If the total period of the same destacamento exceeds 24 months, standard art. 12 no longer fits: a request for an exceptional agreement under art. 16 is usually needed, and approval is not guaranteed',
          'Salary continues to be declared to Segurança Social in Portugal',
          'IRS and tax residence are assessed separately from A1',
          'It is better to cover medical care during the trip with EHIC/CESD and work insurance, because A1 is not health insurance'
        ] },
        { kind: 'warning', text: 'A1 does not prove the right to work for third-country nationals in another EU country. If you are not an EU citizen, a Portuguese residence permit does not always give the right to perform work in Germany, France, the Netherlands, and so on. Check the immigration rules of the destination country before travelling.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common mistakes and consequences',
      content: [
        { kind: 'checklist', items: [
          'Leaving without A1 and trying to obtain it “retroactively” — sometimes possible, but the risk of fines and denial of site access is higher',
          'Confusing A1 with cartão europeu de seguro de doença: these are different documents',
          'Assuming that a short 2–3 day trip does not require A1: many clients still require it for any work activity',
          'Issuing A1 for 24 months “just in case” when the project lasts 2 weeks: the dates must be realistic',
          'Failing to update A1 when the country, dates, or employer changes',
          'Using standard destacamento for a person who regularly works from two countries every week',
          'Forgetting local posted worker registration: in many countries this is a separate portal and separate fines',
          'Ignoring the 183-day tax rules and permanent establishment: A1 does not protect against tax consequences'
        ] },
        { kind: 'paragraph', text: 'If there is no A1 or it does not match the facts, the host country may require registration in its own social security system and charge local contributions. For the employer, this is usually more expensive than arranging the correct A1 on time.' }
      ]
    }
  ],
  costs: [
    { label: 'A1 request in Segurança Social Direta', amountEUR: 0, note: 'No state fee is charged for a standard pedido de destacamento.' },
    { label: 'Fines for absence of local posted worker registration', amountEURMin: 0, amountEURMax: 10000, note: 'These depend on the destination country, the number of workers, and the nature of the breach; this is not a Portuguese fee, but a risk in the host country. The 10,000 EUR figure is only a typical guide for a single missing notification: in some countries fines are calculated per worker and the total can substantially exceed this amount. Check the posted workers portal of the destination country.' }
  ],
  sources: [
    {
      title: 'gov.pt: Posting of workers to European Union countries',
      url: 'https://www2.gov.pt/en/cidadaos-europeus-viajar-viver-e-fazer-negocios-em-portugal/trabalhadores-em-portugal/destacamento-de-trabalhadores-para-paises-da-uniao-europeia',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social: posting of workers — information and forms',
      url: 'https://www.seg-social.pt/destacamento-de-trabalhadores',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'EUR-Lex: Regulation (EC) No 883/2004, art. 12 on posted workers',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32004R0883',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'EUR-Lex: Regulation (EU) No 1231/2010 — extension to third-country nationals',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32010R1231',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-05-31'
    },
    {
      title: 'Your Europe: Form A1 — certificate of social security coverage',
      url: 'https://europa.eu/youreurope/citizens/work/social-security-forms/contact_points_pd_a1.pdf',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
