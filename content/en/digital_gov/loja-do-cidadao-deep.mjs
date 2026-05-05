export default {
  editorialVoice: 'hackportugal',
  id: 'loja-do-cidadao-deep',
  categoryId: 'digital_gov',
  title: 'Loja do Cidadão in-depth: which services are available where',
  tldr: 'Loja do Cidadão is not a “one-stop shop for everything”, but a network of large centres where, under one roof, balcões of different authorities operate: Finanças, IRN, Segurança Social, IMT, ACT, CTT, EDP, sometimes AIMA. Espaço Cidadão is a lighter version in a Junta de Freguesia, Câmara Municipal or CTT: it helps with ePortugal digital services, CMD, certificates and applications, but does not replace the specialist authority. In 2026 almost everything depends on the specific location and booking via ePortugal/SIGA.',
  tags: ['loja do cidadão', 'eportugal', 'documents', 'services'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-loja',
      title: 'What is Loja do Cidadão',
      content: [
        { kind: 'paragraph', text: 'Loja do Cidadão is a physical centre for public services and utility/public operators. The idea is simple: instead of travelling to Finanças, IRN, Segurança Social, IMT, ACT, CTT or EDP you go to a single building where each authority has its own balcão, queue and set of services.' },
        { kind: 'paragraph', text: 'A key nuance: a Loja do Cidadão is not a single body. A Finanças staff member will not process an IRN service, and a CTT balcão will not resolve an AIMA matter. Check not only the Loja’s address, but also whether the specific authority is present inside it.' },
        { kind: 'checklist', items: [
          'Suitable if you need to close several everyday tasks in one visit: NIF/Finanças, CTT, utility contracts, certificates',
          'Often more convenient than a regular authority office: long opening hours, electronic queue, several balcões nearby',
          'Does not guarantee the presence of AIMA, IRN or IMT at every location',
          'Many services are by prior marcação only',
          'For some services you can take a ticket on site, but the ticket quota runs out in the morning',
          'Authority services are charged at their usual rates; entry and tickets are free'
        ] }
      ]
    },
    {
      id: 'loja-vs-espaco',
      title: 'Loja do Cidadão vs Espaço Cidadão',
      content: [
        { kind: 'paragraph', text: 'Espaço Cidadão is a small help point for public digital services. It is usually located in a Junta de Freguesia, Câmara Municipal, library, CTT or another local office. It is not a full Loja do Cidadão.' },
        { kind: 'checklist', items: [
          'Loja do Cidadão: several authorities are physically housed in one building',
          'Espaço Cidadão: a staff member helps you submit an online request or obtain a service via ePortugal',
          'A Loja is useful for complex matters: IRN, IMT, Segurança Social, Finanças, ACT, utility operators',
          'An Espaço is useful for simple digital actions: certificates, confirmations, CMD, help with portals',
          'An Espaço Cidadão usually does not have a specialist inspector from Finanças, IRN, IMT or AIMA',
          'In small freguesias an Espaço Cidadão may be the only in-person help point',
          'If you need a legally significant registration, biometrics, a residence permit, a driving licence or a civil status record — check in advance whether that exact point does it'
        ] },
        { kind: 'warning', text: 'Do not plan AIMA, cartão de residência, driving licence exchange, registo civil or a complex IRS at an Espaço Cidadão without checking. In most cases an Espaço will only direct you to an online service or a specialist balcão.' }
      ]
    },
    {
      id: 'services-map',
      title: 'Which services to look for where',
      content: [
        { kind: 'paragraph', text: 'The composition of a Loja do Cidadão differs by city. In Lisbon, Porto, Braga, Coimbra, Aveiro, Faro and other major centres the choice is wider; in smaller towns some authorities are absent or operate on limited schedules.' },
        { kind: 'substeps', items: [
          { id: 'financas', title: 'Finanças / Autoridade Tributária', content: [
            { kind: 'checklist', items: [
              'NIF and tax address matters, if the service is available in this Loja',
              'Help with Portal das Finanças and password',
              'IMI, IUC, IVA, IRS — guidance and basic operations',
              'Pagamento voluntário and clarification of tax notices',
              'For complex IRS, residency status or IFICI it is better to book at a specific Serviço de Finanças'
            ] }
          ] },
          { id: 'irn', title: 'IRN / Conservatória', content: [
            { kind: 'checklist', items: [
              'Cartão de Cidadão for Portuguese citizens',
              'Registo civil: births, marriages, deaths — if there is an IRN balcão',
              'Certificates and certidões',
              'Some services for nationality and registration of records',
              'Not all Conservatória services are available in every Loja; for nationality a dedicated balcão or Conservatória is often required'
            ] }
          ] },
          { id: 'imt-act-social', title: 'IMT, ACT, Segurança Social', content: [
            { kind: 'checklist', items: [
              'IMT: driving licences, replacement/exchange, transport matters — only at locations with an IMT balcão',
              'ACT: labour complaints, informação laboral, working conditions',
              'Segurança Social: NISS, contribuições, prestações, Segurança Social Direta',
              'For NISS, foreigners often find it faster to use Segurança Social Direta or book at a specialist office',
              'If the case relates to an employer, bring your contrato de trabalho, payslips (recibos de vencimento) and correspondence'
            ] }
          ] },
          { id: 'utilities', title: 'CTT, EDP and other operators', content: [
            { kind: 'checklist', items: [
              'CTT: post, notifications, some payments and public services',
              'EDP/energy: contracts, change of titular, billing questions — if the operator is present',
              'Águas/municipal services may be present in municipal Lojas, but not everywhere',
              'For utility contracts bring your NIF, tenancy agreement or escritura, meter readings and IBAN',
              'Commercial operators inside a Loja operate under their own rules and tariffs'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'aima-reality',
      title: 'AIMA in a Loja do Cidadão: caution',
      content: [
        { kind: 'paragraph', text: 'After SEF was replaced by AIMA in October 2023, migration services are split between AIMA, IRN and digital channels. In 2026 the presence of an AIMA balcão in a Loja do Cidadão does not mean you can walk in without an appointment and arrange any residence permit.' },
        { kind: 'checklist', items: [
          'Check on the AIMA website whether there is atendimento presencial at the Loja you need',
          'For residence permits you almost always need prior booking or an AIMA invitation',
          'Not all AIMA balcões accept initial applications, renewals, biometrics and card replacements',
          'For art. 75 and other procedures there are separate AIMA fees; from 01.03.2026, for example, the admission fee is €133, and autorização de residência art. 75 — €307.20',
          'Bring your passport, D1-D8 visa or other status, NIF, NISS if available, comprovativo de morada, contrato de trabalho/recibos verdes/income, insurance/SNS, photos only if specified',
          'If an appointment is issued for a specific posto AIMA, you cannot unilaterally swap it for the nearest Loja'
        ] },
        { kind: 'warning', text: 'Do not buy “AIMA slots” from intermediaries. Official booking is free; only the procedure fees are paid. If you are asked for an MB WAY transfer for a booking, this is almost always a fraud risk.' }
      ]
    },
    {
      id: 'how-to-plan-visit',
      title: 'How to plan a visit without losing a day',
      content: [
        { kind: 'paragraph', text: 'The right sequence: first find the service, then the location, then the attendance type. A common expat mistake is to go to the nearest Loja do Cidadão without checking whether the required balcão is there and whether it accepts without booking.' },
        { kind: 'checklist', items: [
          'Open ePortugal or the atendimento nas Lojas de Cidadão page',
          'Search not only by city, but for the specific service: NIF, carta de condução, certidão, Segurança Social, AIMA',
          'Check the horário: the Loja’s hours and the hours of the specific balcão may differ',
          'Check the format: senha on site, marcação online, atendimento telefónico or digital-only service',
          'If booking via SIGA/ePortugal is available, take it — this reduces the risk of refusal',
          'Arrive 15–20 minutes before your appointment; for talão sem marcação — early in the morning',
          'Bring originals and copies: passport/residence permit, NIF, comprovativo de morada, contract, IBAN, case documents',
          'Keep a Portuguese phone number and email handy: notifications and códigos often arrive by SMS/email',
          'After the appointment ask for a comprovativo or número do processo'
        ] }
      ]
    },
    {
      id: 'when-not-to-use',
      title: 'When it is better not to go to a Loja',
      content: [
        { kind: 'paragraph', text: 'A Loja do Cidadão saves time on standard operations, but is not always the best route. For complex cases a specialist office, an online portal or a lawyer/contabilista can be faster and safer.' },
        { kind: 'checklist', items: [
          'Complex tax residency, IFICI, retroactive IRS — better a Serviço de Finanças or a contabilista',
          'Citizenship, disputed documents, name change, transcrição de casamento — better a Conservatória/IRN with the required competence',
          'Court, tenancy and labour disputes — a Loja does not replace a lawyer, a Julgado de Paz or ACT',
          'AIMA with expired status, a refusal or a non-standard procedure — check the official channel and prepare a dossier',
          'If the service is already fully available online via Portal das Finanças, Segurança Social Direta, IMT Online or ePortugal, a visit may be unnecessary',
          'If you need an urgent document, call/check the schedule: the balcão inside a Loja may be closed for renovation, a strike or a local restriction'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Entry, electronic ticket or booking at a Loja do Cidadão', amountEUR: 0, note: 'Free; only the specific authorities’ services are charged.' },
    { label: 'Assistance at an Espaço Cidadão', amountEUR: 0, note: 'Usually free, but certificates, certidões and copies may have a separate fee.' },
    { label: 'AIMA migration fees', amountEURMin: 133, amountEURMax: 307.2, note: 'Examples after 01.03.2026: admission fee €133, autorização de residência art. 75 — €307.20; the exact amount depends on the procedure.' }
  ],
  sources: [
    {
      title: 'Official gov.pt page on atendimento nas Lojas de Cidadão',
      url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nas-lojas-de-cidadao',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal: search for in-person atendimento de serviços públicos locations',
      url: 'https://eportugal.gov.pt/locais-de-atendimento-de-servicos-publicos',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Official gov.pt page on atendimento nos Espaços Cidadão',
      url: 'https://www2.gov.pt/acesso-aos-servicos-publicos-em-portugal/atendimento-nos-espacos-cidadao',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'AIMA: Lojas and in-person atendimento',
      url: 'https://aima.gov.pt/pt/lojas-aima',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-04'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
