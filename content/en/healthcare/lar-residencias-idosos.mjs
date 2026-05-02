export default {
  editorialVoice: 'hackportugal',
  id: 'lar-residencias-idosos',
  categoryId: 'healthcare',
  title: 'Lar de Idosos / ERPI — nursing homes in Portugal',
  tldr: 'ERPI is the official name for nursing homes in Portugal: Estruturas Residenciais para Pessoas Idosas. In 2026, places are divided into social places via Segurança Social/IPSS and fully private places. A social place usually costs around €600–€1,500/month and depends on family income; IPSS without full subsidisation is €800–€2,500/month; private ERPI are €1,500–€4,500/month. Waiting lists are long: 12–36 months in Lisbon, Porto and coastal areas. Check the licence via Carta Social.',
  tags: ['erpi', 'older people', 'health', 'social assistance'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-erpi',
      title: 'What an ERPI is and how it differs from a “carer”',
      content: [
        { kind: 'paragraph', text: 'In everyday speech, Lar de Idosos almost always means ERPI — Estrutura Residencial para Pessoas Idosas. This is a residential institution with accommodation, meals, care, basic medical support and social activities for older people who cannot live safely alone or need constant help.' },
        { kind: 'paragraph', text: 'An ERPI is not a hospital and not a unidade de cuidados continuados. If someone needs rehabilitation after a stroke, palliative care or 24-hour medical supervision, first check referral through the SNS/RNCCI. An ERPI is suitable for long-term daily care: meals, hygiene, medication, supervision and help with mobility.' },
        { kind: 'checklist', items: [
          'ERPI / Lar de Idosos — permanent residence for an older person',
          'Centro de Dia — day centre without overnight stay',
          'Serviço de Apoio Domiciliário — home support: food, hygiene, cleaning, medication',
          'Private residência sénior — commercial nursing home, often more expensive but faster',
          'IPSS — non-profit organisation with agreements with Segurança Social',
          'Santa Casa da Misericórdia — common operator of social ERPI in municipalities',
          'RNCCI — long-term care network after illness; this is not a standard nursing home'
        ] }
      ]
    },
    {
      id: 'types-and-prices',
      title: 'Types of places and real prices in 2026',
      content: [
        { kind: 'paragraph', text: 'The price depends not only on the quality of the institution, but also on the type of place. The most important distinction is: a place with a Segurança Social agreement, a place in an IPSS without full subsidisation, and a fully private place.' },
        { kind: 'checklist', items: [
          'Social place via Segurança Social/IPSS: around €600–€1,500/month; the amount is calculated based on the income of the older person and the family',
          'IPSS with partial payment or without an available subsidised place: around €800–€2,500/month',
          'Private ERPI / residência sénior: around €1,500–€4,500/month',
          'Lisbon, Cascais, Oeiras, Porto and the Algarve are usually more expensive than inland areas',
          'A room for 2–3 people is cheaper than a single room',
          'A bedridden patient, dementia, night supervision, oxygen, special diets and incontinence pads can increase the bill',
          'An entry deposit or caução in private homes is often equal to 1 month’s fee',
          'Medication, incontinence pads, transport, physiotherapy, hairdresser, dentistry and private consultations may be charged separately'
        ] },
        { kind: 'warning', text: 'Do not rely only on the advertised price “desde €1,200”. Ask for the minuta do contrato and the list of extras before signing. In an ERPI, €1,400/month can easily become €1,700–€1,900/month because of medication, incontinence pads, laundry or transport.' }
      ]
    },
    {
      id: 'how-to-find-place',
      title: 'How to look for a place: Carta Social, Segurança Social, municipality',
      content: [
        { kind: 'paragraph', text: 'Start with Carta Social — this is the official directory of social institutions in Portugal. There you can search for ERPI by distrito, concelho and freguesia, see the resposta social type, capacity and contacts. Then call the institutions directly and, in parallel, contact Segurança Social in the place of residence.' },
        { kind: 'substeps', items: [
          {
            id: 'search-carta-social',
            title: '1. Check institutions in Carta Social',
            content: [
              { kind: 'checklist', items: [
                'Open cartasocial.pt',
                'Choose resposta social: Estrutura Residencial para Pessoas Idosas',
                'Filter by concelho where the family can realistically visit the older person',
                'Save 10–20 contacts: there is a waiting list almost everywhere',
                'Check whether the entidade proprietária is listed: IPSS, Misericórdia, private company',
                'Call rather than waiting for an email reply: ERPI often have weak administrative communication'
              ] }
            ]
          },
          {
            id: 'contact-social-security',
            title: '2. Book an appointment with Segurança Social',
            content: [
              { kind: 'paragraph', text: 'For a social place, the avaliação socioeconómica is important: income, health condition, degree of dependency, presence of family, housing and urgency. Booking is done via Segurança Social Direta, Linha Segurança Social or atendimento presencial.' }
            ]
          },
          {
            id: 'ask-local-network',
            title: '3. Involve the Centro de Saúde and Junta de Freguesia',
            content: [
              { kind: 'paragraph', text: 'The family doctor, assistente social at the Centro de Saúde, Junta de Freguesia and Câmara Municipal often know local IPSS, Santa Casa da Misericórdia and waiting lists better than central websites.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'documents-and-admission',
      title: 'Documents and admission criteria',
      content: [
        { kind: 'paragraph', text: 'Admission to an ERPI is almost always means-tested: the institution looks at the older person’s income and assets, family support, medical needs and social risk. For foreigners, legal residence, NIF, SNS/utente and clear income documents are important.' },
        { kind: 'checklist', items: [
          'Passport, residence permit or Cartão de Cidadão / residence card',
          'NIF',
          'Número de utente SNS',
          'NISS, if available',
          'Pension document: Segurança Social, Caixa Geral de Aposentações or foreign pension',
          'IRS declaration / nota de liquidação or proof of no IRS in Portugal',
          'Bank statements, if the institution asks to assess income',
          'Relatório médico from a family doctor or specialist',
          'List of medication and diagnoses',
          'Contact details of the responsible relative or representante legal',
          'Document on incapacidade or grau de dependência, if available',
          'Procuração or court guardianship, if the older person cannot sign the contract'
        ] },
        { kind: 'warning', text: 'If the older person has dementia and no longer understands the consequences of the contract, an ordinary signature may not be enough. A power of attorney arranged in advance, or legal representation through the court, is needed. Do not postpone this until a crisis point.' }
      ]
    },
    {
      id: 'waiting-lists-and-urgent-cases',
      title: 'Waiting lists: why 12–36 months and what to do urgently',
      content: [
        { kind: 'paragraph', text: 'In 2026, demand for ERPI is higher than supply. In large cities and on the coast, a typical waiting list for a social place is 12–36 months. It can be faster in inland areas, but this makes family visits and quality control more difficult.' },
        { kind: 'checklist', items: [
          'Join several waiting lists at the same time: IPSS, Misericórdia, private ERPI',
          'Do not wait for the “perfect” place near home — check neighbouring concelhos',
          'Ask the assistente social to prepare a relatório social if the situation is urgent',
          'If there is a risk of falls, violence, homelessness or inability to provide care, inform Segurança Social and SNS',
          'Consider Serviço de Apoio Domiciliário + Centro de Dia temporarily',
          'For recovery after hospitalisation, ask the doctor about RNCCI, not ERPI',
          'For a private place, negotiate extras and caução, but not basic safety',
          'Visit the institution in person without notice at different times, if possible'
        ] },
        { kind: 'warning', text: '“There is a place tomorrow, pay the deposit by MB WAY” — this is a red flag. Check the legal entity, licence, address, contrato de prestação de serviços and whether the institution is listed in Carta Social. Do not transfer a caução to an individual without a contract and recibo.' }
      ]
    },
    {
      id: 'quality-check',
      title: 'How to check quality and the contract before moving in',
      content: [
        { kind: 'paragraph', text: 'Price does not guarantee quality. The licence, staff, transparent contract, family access, care plan and response to falls, infections, dementia and medication are more important.' },
        { kind: 'checklist', items: [
          'Check the ERPI in Carta Social and that the address matches the contract',
          'Ask for the licença de funcionamento or registration number',
          'Clarify the staff ratio by day and by night',
          'Ask who manages medication and how errors are recorded',
          'Check for the presence of an enfermeiro, médico assistente, fisioterapia, plano individual de cuidados',
          'Look at the smell, cleanliness, condition of bathrooms, call buttons and food',
          'Clarify the rules for visits, video calls and going out for walks',
          'Ask for the menu semanal and the list of included services',
          'Check whether the contract can be terminated and how many days’ notice is required',
          'Clarify what happens during hospitalisation: whether the place is kept and whether the full month is charged',
          'Ask for all extras in a written annex to the contract'
        ] },
        { kind: 'paragraph', text: 'For expats, an important practical issue is language. In private homes in Lisbon, Cascais, Porto and the Algarve, staff who speak English are more common; Russian is rare. If the older person does not speak Portuguese, prepare a card in advance with diagnoses, medication, allergies and basic phrases.' }
      ]
    }
  ],
  costs: [
    { label: 'Social place via Segurança Social / IPSS', amountEURMin: 600, amountEURMax: 1500, note: 'Monthly guideline; the actual comparticipação depends on the income of the older person and the family.' },
    { label: 'IPSS without full subsidisation', amountEURMin: 800, amountEURMax: 2500, note: 'Monthly guideline; the price depends on the region, room and level of dependency.' },
    { label: 'Private ERPI / residência sénior', amountEURMin: 1500, amountEURMax: 4500, note: 'Monthly guideline; premium facilities in Cascais, Lisboa, Porto and the Algarve may be higher.' },
    { label: 'Caução / deposit in a private ERPI', amountEURMin: 1500, amountEURMax: 4500, note: 'Often equal to 1 month’s fee; refund conditions must be in the contract.' }
  ],
  sources: [
    { title: 'Segurança Social — social responses for older people', url: 'https://www.seg-social.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Carta Social — official search for ERPI and other social responses', url: 'https://www.cartasocial.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — social support for older people', url: 'https://eportugal.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
