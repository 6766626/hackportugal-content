export default {
  editorialVoice: 'hackportugal',
  id: 'mudanca-morada-todos-servicos',
  categoryId: 'documents_fiscal',
  title: 'Changing address in Portugal: batch update across all services',
  tldr: 'After moving within Portugal, you need to update your address not only in Finanças. In 2026, the main online route is gov.pt / ePortugal “Mudança de Morada”: it changes your morada fiscal and forwards the address to some public bodies, but it works fully mainly for Cartão de Cidadão + CMD. Residence permit holders need to update Finanças separately and notify AIMA within 60 days. Do not forget Segurança Social, SNS, banks, utilities, IMT for vehicles, insurance and deliveries.',
  tags: ['address', 'finanças', 'aima', 'morada'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'mapa',
      title: 'Map: where the address changes automatically, and where it is manual',
      content: [
        { kind: 'paragraph', text: 'In Portugal there is no single “magic” address change for all private and public services. gov.pt / ePortugal “Mudar de Morada” is a good starting point, but its coverage depends on your document and digital identification.' },
        { kind: 'checklist', items: [
          'Finanças / Autoridade Tributária: morada fiscal — critical for IRS, IMI, fines, letters and notifications',
          'AIMA: for residence permit holders, notification of an address change is mandatory within 60 days',
          'Segurança Social: address for letters, benefits, contributions and NISS',
          'SNS / Centro de Saúde: the address affects assignment to a Centro de Saúde and family doctor',
          'Junta de Freguesia: new atestado de residência, if needed for school, bank, AIMA, SNS or exchanging driving documents',
          'Banks and brokers: Millennium, Caixa, ActivoBank, Santander, Revolut, Wise, Interactive Brokers and others — the KYC address is not always pulled from Finanças',
          'Utilities and telecoms: EDP, Galp, MEO, NOS, Vodafone, Águas, condomínio',
          'IMT and vehicles: address in driver/owner documents, especially if you have a car, IUC, insurance, Via Verde',
          'Insurance companies: car, home, health, responsabilidade civil',
          'Online shops and loyalty: Worten, Continente, Pingo Doce, Amazon, CTT, courier profiles'
        ] }
      ]
    },
    {
      id: 'govpt',
      title: '1. Try the batch update via gov.pt / ePortugal',
      content: [
        { kind: 'paragraph', text: 'The official service is called “Mudar de Morada” / “Change the address”. It is on ePortugal and gov.pt. For citizens with Cartão de Cidadão, the address is changed online via Chave Móvel Digital (CMD) or a card reader + Cartão de Cidadão PIN.' },
        { kind: 'checklist', items: [
          'Go to ePortugal: “Mudar de Morada” service',
          'Log in via CMD or Cartão de Cidadão',
          'Enter the new address: rua, número, andar, código postal, localidade',
          'Select the entidades to which the address should be reported, if the service offers a list',
          'Confirm the request',
          'Wait for the letter with the confirmation code at the new address, if the procedure requires a code',
          'Complete the confirmation online within the deadline stated in the letter',
          'Save the comprovativo / comprovativo de alteração de morada as a PDF'
        ] },
        { kind: 'warning', text: 'For many expats with a título de residência rather than Cartão de Cidadão, the ePortugal batch service may be unavailable or may not cover all authorities. In that case, do a “manual batch”: Finanças online, AIMA separately, then Segurança Social, SNS, banks and suppliers.' }
      ]
    },
    {
      id: 'financas',
      title: '2. Update your morada fiscal in Finanças',
      content: [
        { kind: 'paragraph', text: 'Morada fiscal is the main legal address for tax purposes. IRS, IMI, IUC, Autoridade Tributária notifications, fines and response deadlines are tied to it. If AT letters go to the old address, this usually does not cancel the consequences.' },
        { kind: 'substeps', items: [
          {
            id: 'financas-online',
            title: 'Via Portal das Finanças',
            content: [
              { kind: 'checklist', items: [
                'Go to Portal das Finanças',
                'Log in with NIF + senha or via CMD',
                'Find “Alterar Morada” / “Dados Cadastrais”',
                'Enter the new address in full CTT format',
                'Check the código postal: 0000-000 + localidade',
                'Confirm the change',
                'Download the comprovativo de morada fiscal'
              ] }
            ]
          },
          {
            id: 'financas-eportugal',
            title: 'Via ePortugal',
            content: [
              { kind: 'paragraph', text: 'If gov.pt “Mudar de Morada” is available to you, the change may be forwarded to Autoridade Tributária automatically. After completing it, still go to Portal das Finanças and check that your morada fiscal has actually changed.' }
            ]
          }
        ] },
        { kind: 'warning', text: 'If you have left Portugal or are changing your tax residence, this is not just an “address change”. You may need to appoint a representante fiscal and analyse your IRS-resident status. Do not change the address country in Finanças blindly.' }
      ]
    },
    {
      id: 'aima',
      title: '3. AIMA: residence permit holders — mandatory within 60 days',
      content: [
        { kind: 'paragraph', text: 'If you have an autorização de residência / residence permit, you need to notify AIMA of the address change within 60 days. This is a separate obligation for foreigners under Lei 23/2007. Changing the address in Finanças alone does not guarantee that AIMA has received and recorded the new address.' },
        { kind: 'checklist', items: [
          'Prepare a scan of the residence permit on both sides',
          'Passport',
          'NIF',
          'New comprovativo de morada: rental contract, utility bill, declaração do senhorio or atestado de residência',
          'Comprovativo de morada fiscal from Finanças, if available',
          'Notify AIMA through an available official channel: portal / contact form / atendimento, if an appointment is required',
          'Keep proof of submission: PDF, email, número de processo, screenshot',
          'If AIMA asks for an in-person visit — take the original documents'
        ] },
        { kind: 'warning', text: 'Do not wait for your residence permit renewal to report the address. With AIMA letters, convocatórias and decisions, an old address can create real problems: a missed deadline, lack of notification, an extra appointment or a renewal delay.' }
      ]
    },
    {
      id: 'public-services',
      title: '4. Other public services: Segurança Social, SNS, Junta, IMT',
      content: [
        { kind: 'paragraph', text: 'After Finanças and AIMA, go through the public services. It takes 1–2 hours, but saves weeks of correspondence if later you need a benefit, doctor, school, vehicle matter or address confirmation.' },
        { kind: 'checklist', items: [
          'Segurança Social Direta: update the morada in your profile, especially if you have a contrato de trabalho, recibos verdes, benefits or children',
          'SNS / Centro de Saúde: report the new address; when moving to another area, the Centro de Saúde may change',
          'Junta de Freguesia: request a new atestado de residência if you need an official address for a bank, school, SNS, AIMA or driving procedures',
          'Câmara Municipal: check local services — estacionamento residente, EMEL, dísticos, school transport, municipal benefits',
          'IMT: if you have a carta de condução portuguesa, a car, owner registration or need transport-related notifications',
          'Autoridade Tributária for vehicles: check IUC and the notification address in Finanças',
          'Via Verde / Brisa / parking services: update the billing and vehicle address',
          'School, university, Creche, ATL: the address affects the area, quotas and communication'
        ] },
        { kind: 'warning', text: 'Atestado de residência from Junta de Freguesia is not an automatic address change in Finanças or AIMA. It is only confirmation of actual residence at the address, which is often used as evidence.' }
      ]
    },
    {
      id: 'private-services',
      title: '5. Private services: banks, utilities, delivery',
      content: [
        { kind: 'paragraph', text: 'Private companies almost never receive your new address from gov.pt automatically. It is especially important to update the address where there is KYC, bills, cards, fines, SIM card delivery, insurance documents and returns.' },
        { kind: 'checklist', items: [
          'Banks: Millennium, Caixa Geral de Depósitos, ActivoBank, Novo Banco, Santander, BPI — upload a comprovativo de morada',
          'Fintech: Revolut, Wise, N26, brokers — check residential address and tax residence',
          'Electricity and gas: EDP, Galp, Iberdrola, Endesa — the contract address and correspondence address may be different',
          'Water: Águas do município / SMAS — close the old contract or change the titularidade',
          'Internet and mobile: MEO, NOS, Vodafone, NOWO',
          'Insurance: auto, casa, saúde; for vehicles, the address may affect risk and price',
          'Employer or accountant: address in payroll, IRS, recibos verdes and invoices',
          'CTT: if necessary, arrange reexpedição de correspondência from the old address to the new one',
          'Online shops: Worten, Continente, Pingo Doce, Amazon, IKEA, DHL/DPD/CTT Expresso couriers',
          'Assinaturas: ginásio, escolas, clubes, médicos privados, vet, subscriptions'
        ] },
        { kind: 'warning', text: 'Before leaving the old property, photograph the water, electricity and gas meters, close or transfer contratos and keep the leitura final. Otherwise, you may pay for the next occupant’s consumption.' }
      ]
    }
  ],
  costs: [
    { label: 'Address change via ePortugal / gov.pt', amountEUR: 0, note: 'Usually free; you need CMD or Cartão de Cidadão/card reader if the procedure is available' },
    { label: 'Comprovativo de morada fiscal in Finanças', amountEUR: 0, note: 'Downloaded online free of charge' },
    { label: 'Atestado de residência in Junta de Freguesia', amountEURMin: 0, amountEURMax: 15, note: 'The fee depends on the Junta; in some freguesias it is free, often €5-€15' },
    { label: 'Reexpedição de correspondência CTT', amountEURMin: 20, amountEURMax: 80, note: 'Depends on the duration, destination and type of service; check the current CTT tariff' }
  ],
  sources: [
    {
      title: 'ePortugal: address change / Mudar de Morada',
      url: 'https://www.gov.pt/servicos/alterar-a-morada-em-varias-entidades-publicas-e-privadas',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt: Portuguese public services portal',
      url: 'https://www.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 23/2007: legal regime for the entry, stay and departure of foreigners, obligation to report an address',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34554775',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: changing tax address',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Dados_pessoais_familia/Dados_pessoais/Morada/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
