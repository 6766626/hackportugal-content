export default {
  editorialVoice: 'hackportugal',
  id: 'check-traffic-fines',
  categoryId: 'auto_ownership',
  title: 'How to check car fines and traffic offences in Portugal',
  tldr: 'Portugal does not have one reliable “search by plate” for every fine. Road offences are checked through Balcão do Condutor / Portal das Contraordenações ANSR, but normal access usually requires Chave Móvel Digital or Cartão de Cidadão.\n\nIf you have a residence card but no Cartão de Cidadão, the cabinet may be unavailable or empty even with CMD. Check by debt type instead: ANSR/GNR/PSP for road offence cases, the municipality for light parking offences, and CTT/Via Verde/Ascendi for tolls.',
  tags: ['fines', 'ansr', 'car', 'tolls', 'cmd'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-you-can-check',
      title: 'Separate the fine by type first',
      content: [
        { kind: 'paragraph', text: 'The main trap is that a “car fine” in Portugal can live in different systems. An empty Portal das Contraordenações does not mean there are no parking or electronic toll debts.' },
        { kind: 'checklist', items: [
          'ANSR / police / GNR / PSP: speeding, red light, phone use, alcohol, grave/muito grave offences, driving licence points.',
          'Municipal parking: EMEL, Câmara Municipal, Polícia Municipal or a parking concessionaire. Light parking offences are usually checked with the municipality where they happened.',
          'Tolls: unpaid electronic tolls are checked through CTT, Via Verde, Ascendi, Via Livre/Globalvia or Portal de Pagamento de Portagens.',
          'Rental car: the rental company may charge its own admin fee and separately identify you to the authority that issued the fine.',
          'Private parking or garages: this may be a contractual debt to an operator, not a government coima.'
        ] },
        { kind: 'warning', text: 'Do not search only by matrícula. For ANSR the key link is usually the driver/arguido, NIF, driving licence and process, not just the vehicle plate.' }
      ]
    },
    {
      id: 'online-cabinet',
      title: 'Online: Balcão do Condutor and Portal das Contraordenações',
      content: [
        { kind: 'paragraph', text: 'Balcão do Condutor on gov.pt shows points, offence history, current cases and coimas por pagar. gov.pt says access requires Chave Móvel Digital or Cartão de Cidadão. Portal das Contraordenações ANSR lets you check cases, driver record and submit requests: defence, instalments and process consultation.' },
        { kind: 'checklist', items: [
          'Try Balcão do Condutor through gov.pt if you have CMD or Cartão de Cidadão.',
          'Check Portal das Contraordenações ANSR for cases, record, licence points, requests and case documents.',
          'If you already have an older portal account, NIF/password access may work; for a new private user, assume CMD/Cartão de Cidadão is needed.',
          'If you have a foreign licence or a recently exchanged Portuguese licence, data may not match automatically.',
          'If the cabinet is empty, save the date/screenshot, but do not treat it as proof that all fines are absent.',
          'Check your fiscal address and vehicle document address: official notices often arrive by physical post.'
        ] },
        { kind: 'warning', text: 'CMD alone does not guarantee that everything appears. Many residents without Cartão de Cidadão and without a Portuguese driving licence see an unavailable or empty cabinet, especially for older or mismatched cases.' }
      ]
    },
    {
      id: 'if-no-access',
      title: 'If you have no CMD/CC or the cabinet is empty',
      content: [
        { kind: 'paragraph', text: 'The practical route is to contact the right authority, not one universal website. Bring your NIF, passport/residence card, driving licence, plate number, Documento Único Automóvel or rental/lease contract, and any paper notices.' },
        { kind: 'checklist', items: [
          'For road offence cases, ask the PSP Secção de Contraordenações or GNR Gabinete de Atendimento ao Cidadão for your area.',
          'Use Espaço Cidadão / gov.pt support if the issue is CMD or Balcão do Condutor access itself.',
          'If the vehicle is not yours, ask the owner, leasing company or rental company for copies of notices and proof of who was identified as driver.',
          'If you received an ANSR letter, use the auto/processo number from the letter. It makes the request much stronger.',
          'If you only suspect a fine, give a date range, plate, NIF, driving licence number and address for reply.',
          'If it is a light parking issue, contact the municipality or city operator, not ANSR.'
        ] },
        { kind: 'warning', text: 'Do not wait for online access if you already received registered post. The defence/payment period is usually counted from notification, not from the day you finally manage to log in.' }
      ]
    },
    {
      id: 'ask-ansr',
      title: 'How to ask ANSR about processes',
      content: [
        { kind: 'paragraph', text: 'Official general ANSR contacts are mail@ansr.pt and 21 423 68 00. For a formal pedido de consulta de processo or envio de prova fotográfica, form F304 is commonly used; copies or certificates may require other forms and fees.' },
        { kind: 'checklist', items: [
          'Email subject: Pedido de informação sobre processos de contraordenação rodoviária.',
          'Include: nome completo, NIF, data de nascimento, número de identificação, número da carta de condução, país emissor da carta, matrícula, morada, telefone/email.',
          'If you have an auto/processo number, put it in the first line.',
          'Ask them to check “processos de contraordenação rodoviária pendentes ou notificados associados ao meu NIF, título de condução e matrícula”.',
          'Attach document copies only when needed for identification; redact unrelated data.',
          'For a formal case request, use the portal, registered post or digitally signed email where possible.'
        ] },
        { kind: 'paragraph', text: 'Useful Portuguese phrase: “Venho solicitar informação sobre a eventual existência de processos de contraordenação rodoviária pendentes ou notificados associados ao meu NIF, título de condução e matrícula abaixo indicados. Não consigo consultar a informação no Portal das Contraordenações por não dispor de Cartão de Cidadão / por a autenticação não apresentar processos.”' },
        { kind: 'warning', text: 'A plain email without a digital signature may help as an enquiry, but it does not always replace a legally valid requerimento. If there is a defence deadline or you need a process copy, use the official route shown in the notice.' }
      ]
    },
    {
      id: 'parking-tolls',
      title: 'Parking and tolls are checked separately',
      content: [
        { kind: 'paragraph', text: 'gov.pt notes separately that light parking offences since November 2018 must be checked with the município where they occurred. In Lisbon this is often EMEL/Câmara Municipal de Lisboa, in Porto Câmara Municipal do Porto, and elsewhere the local Câmara or concessionaire.' },
        { kind: 'checklist', items: [
          'Search the municipal website for estacionamento, contraordenações, polícia municipal, avisos or coimas.',
          'If the paper notice has a Multibanco reference or aviso number, use the channel printed on that notice.',
          'For electronic tolls, check CTT “Portagens em dívida” by plate; CTT warns that it only shows debts still payable through CTT.',
          'Check Via Verde “Pagamentos em Falta / consultar por matrícula” if you have no tag or suspect an unpaid passage.',
          'For Ascendi/Via Livre/Globalvia, use Portal de Pagamento de Portagens or the operator website.',
          'Do not check only today: passages can appear with a delay and can leave the payment portal after the deadline.'
        ] },
        { kind: 'warning', text: 'Tolls are not the same as an ANSR fine. First it is a toll plus administrative costs; if it stays unpaid, it can become more expensive and move into collection.' }
      ]
    },
    {
      id: 'scams',
      title: 'Watch for phishing and fake notices',
      content: [
        { kind: 'paragraph', text: 'ANSR regularly warns about fake email/SMS messages with “fines” and payment links. Official ANSR notices are sent by physical post; when in doubt, check through the official website, mail@ansr.pt or the ANSR phone number.' },
        { kind: 'checklist', items: [
          'Do not pay through an email/SMS link unless it matches an official paper notice.',
          'Check entidade, referência, montante and process number.',
          'Do not enter bank data on pages opened from shortened links.',
          'If an email claims to be from ANSR, check the sender domain and contact ANSR using contacts from gov.pt.',
          'Keep payment receipts and authority replies until the process is closed.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Balcão do Condutor / Portal das Contraordenações check', amountEUR: 0, note: 'Access is free; you need CMD/Cartão de Cidadão or an existing portal access.' },
    { label: 'Information request to ANSR', amountEUR: 0, note: 'A normal enquiry is free; copies, certificates or postal delivery may have separate fees.' },
    { label: 'Registered letter to ANSR', amountEURMin: 4, amountEURMax: 8, note: 'Approximate postal cost; depends on the CTT service and attachments.' },
    { label: 'CTT toll administrative costs', amountEURMin: 0.32, amountEURMax: 2.56, note: 'CTT lists this range of administrative costs added to tolls when payment is generated.' }
  ],
  sources: [
    { title: 'gov.pt: Consultar o Portal das Contraordenações', url: 'https://www.gov.pt/servicos/consultar-o-portal-das-contraordenacoes', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'gov.pt: Balcão do Condutor', url: 'https://www2.gov.pt/balcao-do-condutor', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'gov.pt: Consultar o histórico de contraordenações rodoviárias', url: 'https://www.gov.pt/servicos/consultar-o-historico-de-contraordenacoes-rodoviarias', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'gov.pt: Autoridade Nacional de Segurança Rodoviária', url: 'https://www.gov.pt/entidades/autoridade-nacional-de-seguranca-rodoviaria', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'ANSR: formulários de contraordenações', url: 'https://www.ansr.pt/Contraordenacoes/Formularios', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'CTT: consultar portagens em dívida', url: 'https://www.ctt.pt/forms/portagens-em-divida', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' },
    { title: 'Via Verde: pagamentos em falta por matrícula', url: 'https://www.viaverde.pt/particulares/pagamentos-em-falta/consultar-por-matricula', kind: 'official', language: 'pt', lastRetrieved: '2026-06-15' }
  ],
  lastVerified: '2026-06-15',
  verifyIntervalDays: 120
}
