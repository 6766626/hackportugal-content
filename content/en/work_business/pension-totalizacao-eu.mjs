export default {
  editorialVoice: 'hackportugal',
  id: 'pension-totalizacao-eu',
  categoryId: 'work_business',
  title: 'Totalisation of EU/EEA/Swiss pension periods: Reg. 883/2004',
  tldr: 'Reg. 883/2004 allows insurance periods from Portugal, other EU countries, the EEA and Switzerland to be added together in order to meet the minimum contribution record for a pension.\n\nIn Portugal, the ordinary pensão de velhice requires 15 calendar years with contributions; the pension age in 2026 is 66 years and 9 months. The application is submitted in the country of residence: in Portugal, through Segurança Social/Centro Nacional de Pensões. The money is not “transferred”: each country pays its own pro-rata share.',
  tags: ['pension', 'segurança social', '883/2004', 'cnp'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-totalizacao-means',
      title: 'What exactly is added together under Reg. 883/2004',
      content: [
        { kind: 'paragraph', text: 'Totalisation is not a transfer of pension money to Portugal. It is the legal aggregation of insurance, employment or equivalent periods from EU/EEA/Swiss countries in order to check entitlement to a pension in each country.' },
        { kind: 'paragraph', text: 'For Portugal, the key rule is: for the ordinary pensão de velhice, you usually need at least 15 calendar years with registered contributions; a calendar year is counted if it has at least 120 days of remunerations registadas. If you have only 6 years in Portugal but 10 years in Germany or France, Segurança Social must take the foreign periods into account for access to entitlement.' },
        { kind: 'checklist', items: [
          'Coverage: EU-27, Iceland, Liechtenstein, Norway and Switzerland',
          'Legal basis: Regulamento (CE) 883/2004 and Regulamento (CE) 987/2009',
          'Periods of insurance, employment, self-employment and some equivalent periods are added together',
          'Each country applies its own rules on age, minimum contribution record and calculation',
          'Each country pays only its own part of the pension',
          'The pension is exportable: it can be received into an account in another EU/EEA/Swiss country',
          'Periods from the United Kingdom after Brexit follow separate rules, not the standard EU/EEA/CH scheme',
          'Periods from Brazil, Ukraine, the USA and other third countries count only under bilateral agreements, if such agreements exist'
        ] }
      ]
    },
    {
      id: 'how-calculation-works',
      title: 'How the calculation works: national pension vs pro-rata',
      content: [
        { kind: 'paragraph', text: 'If you have paid contributions in several countries, each pension institution makes two calculations, where applicable: a standalone national calculation and a totalisation calculation. The more favourable result is then paid under the rules of Reg. 883/2004.' },
        { kind: 'substeps', items: [
          { id: 'national-benefit', title: '1. Standalone pension', content: [
            { kind: 'paragraph', text: 'The country checks whether you are entitled to a pension based only on its domestic periods.\n\nFor example, if you already have 15 years in Portugal, Segurança Social can award a pensão de velhice based on the Portuguese contribution record without needing to “top up” with Germany, Spain or the Netherlands.' }
          ] },
          { id: 'theoretical-amount', title: '2. Theoretical pension', content: [
            { kind: 'paragraph', text: 'The country then calculates what pension you would have received if all EU/EEA/CH periods had been accumulated in that country. This is not the amount to be paid, but the basis for the pro-rata calculation.' }
          ] },
          { id: 'pro-rata-amount', title: '3. Pro-rata share', content: [
            { kind: 'paragraph', text: 'From the theoretical amount, the country pays a share in proportion to its periods. As an example: 8 years in Portugal + 12 years in France = 20 years in total. Portugal takes its theoretical amount and pays 8/20, while France takes its own amount and pays 12/20.' }
          ] }
        ] },
        { kind: 'warning', text: 'Do not expect one “European pension” from a single authority. You usually receive several decisions and several payments: separately from Portugal Segurança Social, and separately from the DRV/INPS/CNAV/Social Security of another state.' }
      ]
    },
    {
      id: 'where-to-apply-in-portugal',
      title: 'Where to apply if you live in Portugal',
      content: [
        { kind: 'paragraph', text: 'If you are resident in Portugal when you retire, the application is submitted to Segurança Social. The central body for Portuguese pensions is the Centro Nacional de Pensões (CNP). It contacts foreign institutions through the European EESSI data exchange and requests confirmation of periods.' },
        { kind: 'checklist', items: [
          'Apply for a pensão de velhice through Segurança Social Direta, if the system allows it for your case',
          'Or book/attend a balcão da Segurança Social if there are foreign periods and the online form does not accept the data',
          'Declare all EU/EEA/CH countries where you worked or paid contributions',
          'Provide foreign social security numbers: Sozialversicherungsnummer, numéro de sécurité sociale, codice fiscale/INPS, ZUS number, etc.',
          'Attach work documents: contracts, payslips, P60/Certificazioni, certificados de empresa, pension fund statements',
          'Provide your IBAN, marital status, tax residence and address',
          'It is advisable to apply 3–6 months before the date on which you want your pension to start',
          'If you have never worked in Portugal but live here, Segurança Social must forward the application to the country of last employment'
        ] },
        { kind: 'warning', text: 'Do not submit separate pension applications to all countries in parallel unless necessary: this often creates duplicates. The standard Reg. 883/2004 route is an application in the country of residence, which coordinates the exchange with the other countries.' }
      ]
    },
    {
      id: 'documents-and-proof',
      title: 'Documents: what to prepare in advance',
      content: [
        { kind: 'paragraph', text: 'The main cause of delays is not Portugal itself, but incomplete data on foreign periods. The CNP must request confirmations from each country, and the foreign institution searches for you using its own identifiers and dates.' },
        { kind: 'checklist', items: [
          'Passport or Cartão de Cidadão/residence permit',
          'NISS in Portugal',
          'NIF and current address in Portugal',
          'IBAN; for a foreign account — BIC/SWIFT',
          'List of countries, cities and employers by year',
          'Foreign social security numbers and tax numbers',
          'Start and end dates of work in each country',
          'Proof of self-employment: registrations, tax returns, invoices, confirmations of contributions',
          'Documents on military service, maternity/parental leave, unemployment, illness, if they may have counted in another country',
          'Marriage/divorce certificate, if the country takes marital status or survivor rights into account',
          'Translations of documents, if Segurança Social or a foreign authority requests them'
        ] },
        { kind: 'paragraph', text: 'In the EU, exchanges usually take place through structured electronic documents, historically known as E-forms, for example E205 for insurance history. The exchange now takes place through EESSI, but the old designations still appear in letters and consultations.' }
      ]
    },
    {
      id: 'timing-and-age',
      title: 'Age, timeframes and delays in 2026',
      content: [
        { kind: 'paragraph', text: 'In Portugal, the normal pension age in 2026 is 66 years and 9 months. This is the age for the ordinary pensão de velhice without special schemes. Early retirement, long career, disability, public service, dangerous occupations and private pension schemes are calculated separately.' },
        { kind: 'checklist', items: [
          'Minimum Portuguese contribution record for the ordinary pension: 15 calendar years with contributions',
          'One Portuguese calendar year is usually counted with at least 120 days of registered earnings',
          'Foreign periods help open entitlement, but do not increase the Portuguese share beyond the pro-rata amount',
          'If the contribution record in a particular country is less than 1 year, that country may not pay a separate pension; the period is usually taken into account by other countries',
          'The real processing time with foreign periods is often 6–12 months, sometimes longer',
          'Back payments may be made from the date of entitlement/application, but it is better not to delay',
          'Each country may have its own pension age: one part of the pension may start earlier and another later'
        ] },
        { kind: 'warning', text: 'If you have reached the Portuguese age of 66 years and 9 months, this does not mean automatic entitlement to the German, French or Swiss part on the same day. Each country applies its own retirement age and its own conditions.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common expat mistakes',
      content: [
        { kind: 'checklist', items: [
          'Thinking that the 15 years must be specifically in Portugal: EU/EEA/CH periods can be totalised for entitlement',
          'Thinking that foreign contributions are transferred to Segurança Social: they remain in the country where they were paid',
          'Not declaring short periods of work: even 3–6 months can be important for pro-rata or entitlement in another country',
          'Confusing tax residence and social insurance: IRS/NIF do not prove pension contributions',
          'Waiting for an automatic pension award: you almost always need to submit the application yourself',
          'Closing old banking and postal channels before receiving decisions: foreign authorities may send letters to an old address',
          'Ignoring requests from a foreign institution: failure to reply can stop the whole chain',
          'Treating private pension funds and state social security as one system: occupational/private pensions often require a separate application'
        ] },
        { kind: 'paragraph', text: 'Practical hack: before applying, request an insurance history statement in each country.\n\nIn Portugal, this is the carreira contributiva in Segurança Social Direta. In Germany — Versicherungsverlauf, in France — relevé de carrière, in Italy — estratto conto contributivo INPS. It is better to correct errors before the pension application, not during the international exchange.' }
      ]
    }
  ],
  costs: [
    { label: 'Application for the state pensão de velhice with Segurança Social', amountEUR: 0, note: 'Public service; costs may arise only for translations, certifications and sending documents' },
    { label: 'Standard document translation', amountEURMin: 20, amountEURMax: 60, note: 'Market price per page in Portugal; not always required' },
    { label: 'Legal/pension consultation', amountEURMin: 80, amountEURMax: 250, note: 'Per hour; useful for disputed periods, early retirement or several countries' }
  ],
  sources: [
    {
      title: 'European Commission: coordination of pensions and old-age benefits in the EU',
      url: 'https://ec.europa.eu/social/BlobServlet?docId=13770&langId=en',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'EUR-Lex: Regulamento (CE) n.º 883/2004 on the coordination of social security systems',
      url: 'https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32004R0883',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Segurança Social: pensão de velhice and Centro Nacional de Pensões',
      url: 'https://www.seg-social.pt/pensao-de-velhice',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Max Planck Institute: Portugal — General Social Security Scheme',
      url: 'https://www.mpisoc.mpg.de/en/social-law/research/research-projects/pension-maps/project-website/portugal/general-social-security-scheme/',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 90
}
