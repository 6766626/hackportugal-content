export default {
  editorialVoice: 'hackportugal',
  id: 'cheque-dentista-pnpso',
  categoryId: 'healthcare',
  title: 'Cheque-Dentista — the PNPSO state dental voucher',
  tldr: 'Cheque-Dentista is an SNS voucher under the PNPSO programme for an appointment with a participating dentist. In 2026, the value of a standard voucher is €45. Not everyone is eligible: children and teenagers by age group/school or referral from a médico de família, pregnant women monitored by the SNS, older people with Complemento Solidário para Idosos, and people with VIH/SIDA. The voucher is issued by the SNS and can only be used with a dentista aderente from the PNPSO list, usually within the validity period stated on the voucher itself.',
  tags: ['sns', 'dentist', 'pnpso', 'voucher'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Cheque-Dentista is',
      content: [
        { kind: 'paragraph', text: 'Cheque-Dentista is not a discount coupon or private insurance. It is a state voucher from the Programa Nacional de Promoção de Saúde Oral (PNPSO), through which the SNS pays for basic dental treatment with private dentists who are part of the programme.' },
        { kind: 'paragraph', text: 'In 2026, a standard cheque-dentista has a value of €45. The patient does not receive the money directly: the dentist provides the treatment, registers the used voucher in the PNPSO system and receives payment from the state.' },
        { kind: 'checklist', items: [
          'The voucher is valid only with dentistas aderentes — dentists on the official PNPSO list.',
          'It usually covers consultation, diagnosis, prevention, fillings, tooth extractions and other basic procedures according to PNPSO clinical rules.',
          'Aesthetic procedures are not covered: whitening, veneers, cosmetic orthodontics.',
          'If treatment is more expensive or is not included in PNPSO, the dentist must explain in advance what is paid separately.',
          'The voucher has a number, issue date and validity period — check the validade before booking.',
          'Having a NIF, número de utente and SNS registration makes obtaining and using the voucher much easier.'
        ] }
      ]
    },
    {
      id: 'who-can-get',
      title: 'Who is entitled to the voucher in 2026',
      content: [
        { kind: 'paragraph', text: 'PNPSO is a targeted programme. Simply living in Portugal or holding a residence permit does not automatically give you the right to Cheque-Dentista. You must belong to one of the SNS groups.' },
        { kind: 'checklist', items: [
          'Children and teenagers: vouchers are issued according to PNPSO age groups, often through school, a médico de família or an hygienist oral. The key school ages are 7, 10 and 13; further vouchers may be possible if the programme conditions are met.',
          'Younger children: in certain clinical situations, a referral can be issued by a médico de família at the Centro de Saúde.',
          'Pregnant women: grávidas acompanhadas no SNS can receive up to 3 cheques-dentista during pregnancy.',
          'Older people: beneficiários do Complemento Solidário para Idosos (CSI) can receive cheques-dentista under PNPSO rules.',
          'People with VIH/SIDA: vouchers are issued through the SNS via a specific PNPSO pathway.',
          'PNPSO also includes a pathway for early detection of oral cancer, but this is a separate route and not the usual “free dental voucher”.'
        ] },
        { kind: 'warning', text: 'Expats often miss this benefit because of private clinics: if a child studies in Portugal, pregnancy is monitored in the SNS, or an older relative has CSI, ask specifically about “cheque-dentista PNPSO” at the Centro de Saúde or school.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'How to get Cheque-Dentista',
      content: [
        { kind: 'substeps', items: [
          { id: 'children', title: 'For a child or teenager', content: [
            { kind: 'paragraph', text: 'Ask at the school, with the médico de família or at the Centro de Saúde whether the child is included in the current PNPSO age group. In state schools, the process often goes through school health services; for children outside the school route, it goes through the family doctor.' },
            { kind: 'checklist', items: [
              'The child’s número de utente.',
              'Documento de identificação: Cartão de Cidadão, residence permit or passport.',
              'NIF, if already available.',
              'School details and school year, if the voucher is being issued through the school route.',
              'Contact details of the parent or legal representative.'
            ] }
          ] },
          { id: 'pregnancy', title: 'For a pregnant woman', content: [
            { kind: 'paragraph', text: 'Contact the médico de família, enfermeira de saúde materna or the Centro de Saúde where the pregnancy is being monitored. Ask for emissão de cheque-dentista para grávida. Usually, up to 3 vouchers are available during pregnancy.' }
          ] },
          { id: 'elderly-csi', title: 'For an older person with CSI', content: [
            { kind: 'paragraph', text: 'The person must be receiving Complemento Solidário para Idosos. At the Centro de Saúde, they check eligibility for the benefit and issue a cheque-dentista under PNPSO.' }
          ] },
          { id: 'hiv', title: 'For people with VIH/SIDA', content: [
            { kind: 'paragraph', text: 'The pathway usually goes through the SNS doctor who monitors the patient. There is no need to discuss the diagnosis with a private clinic before the voucher is issued: first obtain the referral/voucher from the SNS.' }
          ] }
        ] }
      ]
    },
    {
      id: 'use-it',
      title: 'How to use the voucher at the dentist',
      content: [
        { kind: 'paragraph', text: 'After the cheque-dentista is issued, choose a dentist from the official PNPSO list. Not every private clinic accepts state vouchers, even if it works with Médis, Multicare or other insurance.' },
        { kind: 'checklist', items: [
          'Open the list of profissionais aderentes on the Saúde Oral / PNPSO portal.',
          'Call the clinic and say directly: “Tenho um cheque-dentista do PNPSO”.',
          'Check whether the doctor accepts your specific voucher category: criança, grávida, idoso CSI, VIH/SIDA.',
          'Take an identity document, número de utente and the cheque-dentista itself to the appointment: either the paper voucher or the electronic number.',
          'Before the procedure, ask what is fully covered by the cheque-dentista and what will be paid.',
          'Do not sign consent for paid services if you have not understood the price.',
          'After the appointment, check whether a further cheque-dentista is needed and who activates it — the dentist or the Centro de Saúde.'
        ] },
        { kind: 'warning', text: 'If the validity period has expired, the dentist will not be able to redeem the voucher. Do not delay booking: in Lisbon, Porto and the suburbs, dentistas aderentes may have waiting lists.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Common problems for foreigners',
      content: [
        { kind: 'checklist', items: [
          'No número de utente: first register with the SNS through the Centro de Saúde for your address.',
          'The child is in a private or international school: ask at the Centro de Saúde whether there is a PNPSO pathway outside school-based issuing.',
          'Pregnancy is monitored only in a private clinic: for cheque-dentista, SNS monitoring or pregnancy registration in the SNS is usually needed.',
          'An older relative has a low income but has not applied for CSI: without Complemento Solidário para Idosos, entitlement to the “idoso” cheque-dentista may not appear.',
          'The clinic asks for an extra payment: this is possible only for services outside PNPSO coverage; ask for an orçamento before treatment.',
          'No dentist found nearby: widen the search by concelho and neighbouring freguesias on the PNPSO portal.',
          'Language: when booking, use the simple phrase “Quero marcar consulta com cheque-dentista PNPSO”.'
        ] },
        { kind: 'paragraph', text: 'If the Centro de Saúde says that “you are not entitled”, ask them to clarify the reason by PNPSO category: idade da criança, grávida, CSI or VIH/SIDA. Sometimes the issue is not eligibility, but that the utente, pregnancy, school or CSI data has not yet been pulled into the system.' }
      ]
    }
  ],
  costs: [
    { label: 'Value of a standard Cheque-Dentista', amountEUR: 45, note: 'Paid by the SNS directly to the PNPSO participating dentist; the patient does not receive the money.' },
    { label: 'Patient co-payment', amountEURMin: 0, amountEURMax: 0, note: 'For procedures covered by PNPSO, there should be no co-payment. Services outside coverage are paid only after the price has been agreed.' },
    { label: 'Private consultation without a voucher', amountEURMin: 40, amountEURMax: 90, note: 'Market estimate; in large cities and with specialists it may be more expensive.' }
  ],
  sources: [
    {
      title: 'SNS 24: Cheques-Dentista',
      url: 'https://www.sns24.gov.pt/servico/cheques-dentista/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Programa Nacional de Promoção de Saúde Oral — PNPSO',
      url: 'https://www.saudeoral.min-saude.pt/pnpso/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'SNS 24: Registration and access to the Serviço Nacional de Saúde',
      url: 'https://www.sns24.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
