export default {
  editorialVoice: 'hackportugal',
  id: 'a1-outbound-eu',
  categoryId: 'work_business',
  title: 'A1 for workers from Portugal posted to the EU',
  tldr: 'A1 is a certificate confirming that a worker employed in Portugal and temporarily sent by their employer to another EU country continues to pay Segurança Social in Portugal, not in the country of posting. The standard limit is up to 24 months under Reg. 883/2004 art. 12. It is usually requested by the Portuguese employer through Segurança Social Direta before departure. A1 does not replace the posting notification in the host country, employment guarantees or tax checks.',
  tags: ['a1', 'posting', 'segurança-social', 'eu'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-a1-does',
      title: 'What A1 confirms',
      content: [
        { kind: 'paragraph', text: 'A1 is a European document on the applicable social security legislation. In an outbound scenario, it is needed when a worker with a Portuguese employment contract temporarily goes to work in another EU country on assignment from a Portuguese employer.' },
        { kind: 'paragraph', text: 'With A1, Segurança Social contributions continue to be charged in Portugal. The host country should not require local social security contributions for the same period.' },
        { kind: 'checklist', items: [
          'The worker remains employed by the Portuguese company',
          'Salary and contribuições continue to run through Portugal',
          'The posting is temporary, usually up to 24 months',
          'The worker is not sent to replace another posted worker',
          'The employer genuinely carries out substantial activity in Portugal, rather than merely having a “letterbox”',
          'A1 applies only to Segurança Social, not to IRS, IRC, IVA or immigration status'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'When A1 can be obtained for up to 24 months',
      content: [
        { kind: 'paragraph', text: 'The basic rule is Reg. (EC) 883/2004 art. 12: a worker whose employer normally carries out activity in one EU country and sends them to another EU country may remain in the system of the first country if the expected duration of the work does not exceed 24 months.' },
        { kind: 'checklist', items: [
          'The worker is already subject to Portuguese Segurança Social before the posting (under EU guidance, normally for at least one month); hiring someone solely to post them abroad can be challenged',
          'There is an employment contract with a Portuguese employer',
          'The employer retains authority: setting tasks, pay, discipline and leave',
          'The work abroad is limited in advance by duration',
          'The destination is an EU country; in practice, A1 is also used for the EEA/Switzerland under the relevant rules',
          'The host country may have separate requirements: posting declaration, contact person, document retention and local minimum employment conditions',
          'If the period is planned from the outset to exceed 24 months, the standard A1 under art. 12 is not suitable — an exception agreement under art. 16 is needed'
        ] },
        { kind: 'warning', text: 'A1 cannot be used to “reset” local labour rules. Even with Portuguese Segurança Social, the host country may require the local minimum wage, working time rules, health and safety, accommodation, reimbursement of expenses and a prior posting declaration.' }
      ]
    },
    {
      id: 'request-flow',
      title: 'How to request it through Segurança Social Direta',
      content: [
        { kind: 'paragraph', text: 'In an outbound scenario, the application is usually submitted by the Portuguese employer, not the host company. This differs from inbound guides, where the worker arrives in Portugal with an A1 from another country.' },
        { kind: 'substeps', items: [
          { id: 'prepare-data', title: '1. Prepare the data before departure', content: [
            { kind: 'checklist', items: [
              'Worker’s NISS',
              'NIF and identification of the employer in Portugal',
              'Country of posting and address of the actual work',
              'Start date and end date of the posting',
              'Description of duties and project',
              'Details of the host company or client',
              'Confirmation that the worker is not replacing another posted worker',
              'Employer contact for Segurança Social'
            ] }
          ] },
          { id: 'ssd-menu', title: '2. Submit in Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'The employer logs in to Segurança Social Direta with its own access. Menus and names may change, but in practice the path is Emprego > Destacar trabalhador para o estrangeiro > Registar pedido de destacamento. For a period up to 24 months, form RV1018-DGSS is used; for more than 24 months (the exception under art. 16), form RV1020-DGSS.' },
            { kind: 'paragraph', text: 'If the required option is not available in the interface, the practical route is a mensagem/pedido through Segurança Social Direta or contact with the employer’s Centro Distrital da Segurança Social. For large companies, this is often handled by payroll or an HR provider.' }
          ] },
          { id: 'receive-a1', title: '3. Receive the certificado A1', content: [
            { kind: 'paragraph', text: 'After approval, the employer downloads or receives the A1 and gives a copy to the worker. It is best to keep the document on a phone and as a PDF: the labour inspectorate or social security authority in the host country may ask for it on site.' }
          ] }
        ] }
      ]
    },
    {
      id: 'during-posting',
      title: 'What to do during the posting',
      content: [
        { kind: 'paragraph', text: 'A1 is only one part of compliance. The set of obligations will differ for a 2-week trip and an 18-month project, but the basic logic is the same: social security — Portugal; minimum employment standards — the host country.' },
        { kind: 'checklist', items: [
          'Check whether a prior posting declaration is required in the destination country',
          'Keep the A1, employment contract and assignment letter available for inspection',
          'Comply with local rules on minimum pay, working time, leave and health and safety',
          'Check whether address registration or residence formalities are required if the stay is long',
          'Track 183-day and treaty rules for IRS/income tax — A1 does not resolve them',
          'Keep payroll records, timesheets, posting expenses and evidence of entry/exit dates',
          'Inform Segurança Social if the dates, country or working conditions have changed'
        ] },
        { kind: 'warning', text: 'If A1 has not been arranged or the conditions do not in fact match a posting, the host country may require local social contributions and impose fines. Fixing this retrospectively is harder than requesting A1 before work starts.' }
      ]
    },
    {
      id: 'extensions-and-edge-cases',
      title: 'Extension, 24+ months and common mistakes',
      content: [
        { kind: 'paragraph', text: 'A standard posting under A1 is for up to 24 months. If the project is extended, you cannot simply “restart” a new A1 for the same person in the same role as a replacement for themselves.' },
        { kind: 'checklist', items: [
          'If the period remains within 24 months — request an amendment/extension before the current A1 ends',
          'If more than 24 months are needed — the employer may request an exception agreement under Reg. 883/2004 art. 16 between the competent authorities of the countries',
          'If the worker moves to a local contract in the host country — A1 usually ends',
          'If the worker works simultaneously in several EU countries, posting rules may not apply; instead, multi-state work rules under art. 13 may apply',
          'If this is a self-employed pessoa singular, the A1 logic is similar, but the form and evidence differ',
          'If the posting is to the UK, EEA or Switzerland — check separate agreements and the applicability of A1/an equivalent certificate',
          'If the host country requires a local representative, this is not cancelled by the Portuguese A1'
        ] },
        { kind: 'warning', text: 'Do not confuse A1 with a visa, Cartão de Cidadão, residence permit, EHIC, seguro de acidentes de trabalho or a tax residence certificate. These are different documents involving different authorities and deadlines.' }
      ]
    }
  ],
  costs: [
    { label: 'A1 request to Segurança Social', amountEUR: 0, note: 'There is usually no state fee for issuing a certificado A1; costs may arise only for the employer’s payroll/lawyer/provider.' },
    { label: 'Fines for lack of posting compliance', note: 'Amounts depend on the destination country; check the specific figures with the host country’s labour inspectorate before departure.' }
  ],
  sources: [
    {
      title: 'Segurança Social: posting workers abroad / Documento Portátil A1',
      url: 'https://www.seg-social.pt/ptss/pssd/menu/trabalho/entrada-saida-destacamento-trabalhadores/destacamento-trabalhadores',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    },
    {
      title: 'gov.pt: posting workers from Portugal to European Union countries',
      url: 'https://www2.gov.pt/en/cidadaos-europeus-viajar-viver-e-fazer-negocios-em-portugal/trabalhadores-em-portugal/destacamento-de-trabalhadores-para-paises-da-uniao-europeia',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Your Europe: posting staff abroad and A1 certificate',
      url: 'https://europa.eu/youreurope/business/human-resources/posting-workers-abroad/index_en.htm',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regulation (EC) No 883/2004, art. 12 and art. 16 — coordination of social security systems',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02004R0883',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regulation (EC) No 987/2009 — implementing rules for social security coordination',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0987',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
