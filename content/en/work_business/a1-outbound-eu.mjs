export default {
  editorialVoice: 'hackportugal',
  id: 'a1-outbound-eu',
  categoryId: 'work_business',
  title: 'A1 for workers from Portugal posted to the EU',
  tldr: 'A1 is a certificate confirming that a worker employed in Portugal and temporarily sent by the employer to another EU country continues to pay Segurança Social in Portugal, not in the posting country. The standard limit is up to 24 months under Reg. 883/2004 art. 12. It is usually requested by the Portuguese employer via Segurança Social Direta before departure. A1 does not replace the posting notification in the host country, employment guarantees, or tax checks.',
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
          'Salary and contribuições continue to be processed through Portugal',
          'The posting is temporary, usually up to 24 months',
          'The worker is not sent to replace another posted worker',
          'The employer genuinely carries out substantial activity in Portugal, and does not merely have a “letterbox”',
          'A1 applies only to Segurança Social, not to IRS, IRC, IVA, or immigration status'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'When you can obtain A1 for up to 24 months',
      content: [
        { kind: 'paragraph', text: 'The basic rule is Reg. (EC) 883/2004 art. 12: a worker whose employer normally carries out activity in one EU country and sends them to another EU country may remain in the system of the first country if the expected duration of the work does not exceed 24 months.' },
        { kind: 'checklist', items: [
          'The worker has an active link to Segurança Social in Portugal before the posting',
          'There is an employment contract with a Portuguese employer',
          'The employer retains authority: defining tasks, pay, discipline, and leave',
          'The work abroad is limited in time in advance',
          'The destination is an EU country; in practice, A1 is also used for the EEA/Switzerland under the relevant rules',
          'The host country may have separate requirements: posting declaration, contact person, document retention, local minimum employment conditions',
          'If the period is planned from the outset to exceed 24 months, the standard A1 under art. 12 is not suitable — an exception agreement under art. 16 is needed'
        ] },
        { kind: 'warning', text: 'A1 cannot be used as a “reset” of local employment rules. Even with Portuguese Segurança Social, the host country may require local minimum pay, working time, health and safety, accommodation, reimbursement of expenses, and a prior posting declaration.' }
      ]
    },
    {
      id: 'request-flow',
      title: 'How to request it via Segurança Social Direta',
      content: [
        { kind: 'paragraph', text: 'In an outbound scenario, the application is usually submitted by the Portuguese employer, not the host company. This differs from inbound guides, where the worker comes to Portugal with A1 from another country.' },
        { kind: 'substeps', items: [
          { id: 'prepare-data', title: '1. Prepare the data before departure', content: [
            { kind: 'checklist', items: [
              'The worker’s NISS',
              'NIF and identification of the employer in Portugal',
              'Posting country and address of the actual workplace',
              'Posting start date and end date',
              'Description of duties and project',
              'Details of the host company or client',
              'Confirmation that the worker is not replacing another posted worker',
              'Employer contact for Segurança Social'
            ] }
          ] },
          { id: 'ssd-menu', title: '2. Submit in Segurança Social Direta', content: [
            { kind: 'paragraph', text: 'The employer logs in to Segurança Social Direta with its own access. Menus and names may change, but the relevant service relates to pedidos de destacamento / trabalhadores destacados para o estrangeiro / certificado A1.' },
            { kind: 'paragraph', text: 'If the required option is not available in the interface, the practical route is a mensagem/pedido through Segurança Social Direta or contacting the employer’s Centro Distrital da Segurança Social. For larger companies, this is often handled by payroll or an HR provider.' }
          ] },
          { id: 'receive-a1', title: '3. Receive the certificado A1', content: [
            { kind: 'paragraph', text: 'After approval, the employer downloads or receives the A1 and gives a copy to the worker. It is best to keep the document on a phone and as a PDF: labour inspection or social security in the host country may request it on site.' }
          ] }
        ] }
      ]
    },
    {
      id: 'during-posting',
      title: 'What to do during the posting',
      content: [
        { kind: 'paragraph', text: 'A1 is only one part of compliance. The set of obligations will differ for a 2-week trip and an 18-month project, but the basic logic is the same: social security — Portugal; employment minimums — the host country.' },
        { kind: 'checklist', items: [
          'Check whether a prior posting declaration is required in the destination country',
          'Keep A1, the employment contract, and the assignment letter available for inspection',
          'Comply with local rules on minimum pay, working time, leave, and health and safety',
          'Check whether address registration or residence formalities are required if the stay is long',
          'Monitor the 183-day and treaty rules for IRS/income tax — A1 does not resolve them',
          'Keep payroll records, timesheets, posting expenses, and evidence of entry/exit dates',
          'Notify Segurança Social if the dates, country, or working conditions change'
        ] },
        { kind: 'warning', text: 'If A1 has not been arranged or the actual conditions do not match a posting, the host country may require local social contributions and impose fines. Fixing this retroactively is harder than requesting A1 before the work starts.' }
      ]
    },
    {
      id: 'extensions-and-edge-cases',
      title: 'Extensions, 24+ months, and common mistakes',
      content: [
        { kind: 'paragraph', text: 'A standard posting under A1 lasts up to 24 months. If the project is extended, you cannot simply “restart” a new A1 for the same person in the same role as a replacement for themselves.' },
        { kind: 'checklist', items: [
          'If the period remains within 24 months — request an amendment/extension before the current A1 expires',
          'If more than 24 months are needed — the employer may request an exception agreement under Reg. 883/2004 art. 16 between the competent authorities of the countries',
          'If the worker moves to a local contract in the host country — A1 usually ends',
          'If the worker works simultaneously in several EU countries, the multi-state work rules under art. 13 may apply instead of posting',
          'If this is a self-employed pessoa singular, the A1 logic is similar, but the form and evidence differ',
          'If the posting is to the UK, EEA, or Switzerland — check the separate agreements and the applicability of A1/an equivalent certificate',
          'If the host country requires a local representative, this is not cancelled by the Portuguese A1'
        ] },
        { kind: 'warning', text: 'Do not confuse A1 with a visa, Cartão de Cidadão, residence permit, EHIC, seguro de acidentes de trabalho, or a tax residence certificate. These are different documents, issued by different authorities and with different time limits.' }
      ]
    }
  ],
  costs: [
    { label: 'A1 request to Segurança Social', amountEUR: 0, note: 'There is usually no state fee for issuing a certificado A1; costs may only relate to the employer’s payroll/lawyer/provider.' },
    { label: 'Fines for lack of posting compliance', amountEURMin: 0, amountEURMax: 0, note: 'They depend on the destination country; check the rules of the specific labour inspectorate before departure.' }
  ],
  sources: [
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
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02004R0883-20140101',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Regulation (EC) No 987/2009 — implementing rules for social security coordination',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02009R0987-20180101',
      kind: 'law',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
