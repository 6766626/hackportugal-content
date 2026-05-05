export default {
  editorialVoice: 'hackportugal',
  id: 'mudanca-morada-todos-servicos',
  categoryId: 'documents_fiscal',
  title: 'Change of address in Portugal: batch update across all services',
  tldr: 'After moving in Portugal you need to update your address not only with Finanças. In 2026 the main online route is gov.pt / ePortugal “Mudança de Morada”: it changes your morada fiscal and forwards the address to some public bodies, but it fully works mainly for Cartão de Cidadão + CMD. Residence permit holders must update Finanças separately and notify AIMA within 60 days. Do not forget Segurança Social, SNS, banks, utilities, IMT for vehicles, insurance and deliveries.',
  tags: ['morada', 'finanças', 'aima', 'address'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'mapa',
      title: 'Map: where the address changes automatically and where manually',
      content: [
        { kind: 'paragraph', text: 'In Portugal there is no single “magic” change of address for all private and public services. gov.pt / ePortugal “Mudar de Morada” is a good start, but its coverage depends on your document and digital identification.' },
        { kind: 'checklist', items: [
          'Finanças / Autoridade Tributária: morada fiscal — critical for IRS, IMI, fines, letters and notifications',
          'AIMA: for residence permit holders, notifying the change of address is mandatory within 60 days',
          'Segurança Social: address for post, benefits, contributions and NISS',
          'SNS / Centro de Saúde: the address affects your registration with a Centro de Saúde and family doctor',
          'Junta de Freguesia: new atestado de residência, if needed for school, bank, AIMA, SNS or driving licence procedures',
          'Banks and brokers: Millennium, Caixa, ActivoBank, Santander, Revolut, Wise, Interactive Brokers, etc. — the KYC address is not always pulled from Finanças',
          'Utilities and telecoms: EDP, Galp, MEO, NOS, Vodafone, Águas, condomínio',
          'IMT and vehicles: address in driver/owner documents, especially if you have a car, IUC, insurance, Via Verde',
          'Insurance: motor, home, health, civil liability',
          'Online shops and loyalty: Worten, Continente, Pingo Doce, Amazon, CTT, courier profiles'
        ] }
      ]
    },
    {
      id: 'govpt',
      title: '1. Try a batch via gov.pt / ePortugal',
      content: [
        { kind: 'paragraph', text: 'The official service is called “Mudar de Morada” / “Change the address”. It is available on ePortugal and gov.pt. For citizens with a Cartão de Cidadão the address is changed online via Chave Móvel Digital (CMD) or a card reader + the Cartão de Cidadão PIN.' },
        { kind: 'checklist', items: [
          'Go to ePortugal: the “Mudar de Morada” service',
          'Sign in via CMD or Cartão de Cidadão',
          'Enter the new address: rua, número, andar, código postal, localidade',
          'Select the entities to notify, if the service offers a list',
          'Confirm the request',
          'Wait for a letter with a confirmation code to the new address, if the procedure requires a code',
          'Complete the online confirmation within the deadline stated in the letter',
          'Save the comprovativo / comprovativo de alteração de morada as a PDF'
        ] },
        { kind: 'warning', text: 'For many expats with a título de residência rather than a Cartão de Cidadão, the ePortugal batch service may be unavailable or may not cover all authorities. In that case do a “manual batch”: Finanças online, AIMA separately, then Segurança Social, SNS, banks and providers.' }
      ]
    },
    {
      id: 'financas',
      title: '2. Update your morada fiscal with Finanças',
      content: [
        { kind: 'paragraph', text: 'Morada fiscal is the main legal address for taxes. IRS, IMI, IUC, Autoridade Tributária notifications, fines and response deadlines hinge on it. If AT letters go to your old address, that usually does not cancel the consequences.' },
        { kind: 'substeps', items: [
          {
            id: 'financas-online',
            title: 'Via Portal das Finanças',
            content: [
              { kind: 'checklist', items: [
                'Go to the Portal das Finanças',
                'Sign in with NIF + password or via CMD',
                'Find “Alterar Morada” / “Dados Cadastrais”',
                'Enter the new address fully in the CTT format',
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
              { kind: 'paragraph', text: 'If gov.pt “Mudar de Morada” is available to you, the change may be passed to Autoridade Tributária automatically. After completion still log in to the Portal das Finanças and check that your morada fiscal has indeed changed.' }
            ]
          }
        ] },
        { kind: 'warning', text: 'If you have left Portugal or are changing your tax residency, this is not just a “change of address”. You may need to appoint a representante fiscal and review your IRS residency status. Do not change the country in your Finanças address blindly.' }
      ]
    },
    {
      id: 'aima',
      title: '3. AIMA: residence permit holders — mandatory within 60 days',
      content: [
        { kind: 'paragraph', text: 'If you have an autorização de residência / residence permit, you must notify AIMA of the change of address within 60 days. This is a separate obligation of a foreign national under Lei 23/2007. Updating the address in Finanças by itself does not guarantee that AIMA has received and recorded the new address.' },
        { kind: 'checklist', items: [
          'Prepare a scan of your residence permit on both sides',
          'Passport',
          'NIF',
          'New comprovativo de morada: tenancy agreement, utility bill, declaração do senhorio or atestado de residência',
          'Comprovativo de morada fiscal from Finanças, if available',
          'Notify AIMA through the available official channel: portal / contact form / atendimento, if an appointment is required',
          'Keep proof of submission: PDF, email, número de processo, screenshot',
          'If AIMA requests an in-person visit, take the original documents'
        ] },
        { kind: 'warning', text: 'Do not wait for renewal of your residence permit to report the address. For letters, convocatórias and AIMA decisions, an old address can create real problems: a missed deadline, lack of notification, an unnecessary record or a delayed renewal.' }
      ]
    },
    {
      id: 'public-services',
      title: '4. Other public services: Segurança Social, SNS, Junta, IMT',
      content: [
        { kind: 'paragraph', text: 'After Finanças and AIMA, go through the public services. This takes 1–2 hours but saves weeks of back-and-forth if you later need a benefit, a doctor, a school, a vehicle or proof of address.' },
        { kind: 'checklist', items: [
          'Segurança Social Direta: update the morada in your profile, especially if you have a contrato de trabalho, recibos verdes, benefits or children',
          'SNS / Centro de Saúde: report the new address; if moving to another area your Centro de Saúde may change',
          'Junta de Freguesia: request a new atestado de residência if you need an official address for a bank, school, SNS, AIMA or driving licence procedures',
          'Câmara Municipal: check local services — estacionamento residente, EMEL, dísticos, school transport, municipal benefits',
          'IMT: if you have a Portuguese carta de condução, a vehicle, owner registration or need transport notifications',
          'Autoridade Tributária for vehicles: verify IUC and the notifications address in Finanças',
          'Via Verde / Brisa / parking services: update the account and vehicle address',
          'School, university, creche, ATL: the address affects catchment area, quotas and communications'
        ] },
        { kind: 'warning', text: 'An atestado de residência from the Junta de Freguesia is not an automatic change of address in Finanças or AIMA. It is only confirmation of factual residence at the address, which is often used as evidence.' }
      ]
    },
    {
      id: 'private-services',
      title: '5. Private services: banks, utilities, delivery',
      content: [
        { kind: 'paragraph', text: 'Private companies almost never receive your new address from gov.pt automatically. It is especially important to update the address where there is KYC, bills, cards, fines, SIM card deliveries, insurance documents and refunds.' },
        { kind: 'checklist', items: [
          'Banks: Millennium, Caixa Geral de Depósitos, ActivoBank, Novo Banco, Santander, BPI — upload a comprovativo de morada',
          'Fintech: Revolut, Wise, N26, brokers — check the residential address and tax residence',
          'Electricity and gas: EDP, Galp, Iberdrola, Endesa — the contract address and correspondence address may differ',
          'Water: Águas do município / SMAS — close the old contract or change the titularidade',
          'Internet and mobile: MEO, NOS, Vodafone, NOWO',
          'Insurance: auto, casa, saúde; for motor insurance the address can affect risk and price',
          'Employer or accountant: address in payroll, IRS, recibos verdes and invoices',
          'CTT: if necessary, set up a reexpedição de correspondência from the old address to the new one',
          'Online shops: Worten, Continente, Pingo Doce, Amazon, IKEA, couriers DHL/DPD/CTT Expresso',
          'Subscriptions: gyms, schools, clubs, private doctors, vets, subscriptions'
        ] },
        { kind: 'warning', text: 'Before leaving your old accommodation, photograph the water, electricity and gas meters, close or transfer the contracts and save the final reading. Otherwise you may end up paying for the next tenant’s consumption.' }
      ]
    }
  ],
  costs: [
    { label: 'Change of address via ePortugal / gov.pt', amountEUR: 0, note: 'Usually free; requires CMD or Cartão de Cidadão/card reader, if the procedure is available' },
    { label: 'Comprovativo de morada fiscal in Finanças', amountEUR: 0, note: 'Downloaded online free of charge' },
    { label: 'Atestado de residência at the Junta de Freguesia', amountEURMin: 0, amountEURMax: 15, note: 'Fee depends on the Junta; free in some freguesias, often €5–€15' },
    { label: 'CTT reexpedição de correspondência', amountEURMin: 20, amountEURMax: 80, note: 'Depends on duration, destination and service type; check the current CTT tariff' }
  ],
  sources: [
    {
      title: 'ePortugal: change of address / Mudar de Morada',
      url: 'https://www.gov.pt/servicos/alterar-a-morada-em-varias-entidades-publicas-e-privadas',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'gov.pt: Portugal’s public services portal',
      url: 'https://www.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Lei 23/2007: legal regime for the entry, stay and exit of foreign nationals, obligation to report address',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34554775',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: change of tax address',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Dados_pessoais_familia/Dados_pessoais/Morada/Paginas/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
