export default {
  editorialVoice: 'hackportugal',
  id: 'lar-residencias-idosos',
  categoryId: 'healthcare',
  title: 'Lar de Idosos / ERPI — care homes in Portugal',
  tldr: 'ERPI is the official name for care homes in Portugal: Estruturas Residenciais para Pessoas Idosas.\n\nIn 2026, places are split between social places via Segurança Social/IPSS and fully private places. A social place usually costs around €600-1,500/month and depends on family income; IPSS without full subsidy costs €800-2,500/month; private ERPI cost €1,500-4,500/month. Waiting lists are long: 12-36 months in Lisbon, Porto and coastal areas. Check the licence through Carta Social.',
  tags: ['erpi', 'elderly', 'health', 'social support'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-erpi',
      title: 'What ERPI is and how it differs from a carer',
      content: [
        { kind: 'paragraph', text: 'Lar de Idosos in everyday speech almost always means ERPI — Estrutura Residencial para Pessoas Idosas. This is a residential facility with accommodation, meals, care, basic medical support and social activities for older people who cannot live safely alone or need constant help.' },
        { kind: 'paragraph', text: 'ERPI is not a hospital and not a unidade de cuidados continuados. If someone needs rehabilitation after a stroke, palliative care or round-the-clock medical supervision, referral through SNS/RNCCI is checked first. ERPI is suitable for long-term day-to-day care: meals, hygiene, medication, supervision and help with mobility.' },
        { kind: 'checklist', items: [
          'ERPI / Lar de Idosos — permanent residence for an older person',
          'Centro de Dia — day centre without overnight stays',
          'Serviço de Apoio Domiciliário — home support: food, hygiene, cleaning, medication',
          'Private Residência Sénior — commercial care home, often more expensive but faster',
          'IPSS — non-profit organisation with agreements with Segurança Social',
          'Santa Casa da Misericórdia — common operator of social ERPI in municipalities',
          'RNCCI — network of continuing care after illness; this is not an ordinary care home'
        ] }
      ]
    },
    {
      id: 'types-and-prices',
      title: 'Types of places and real prices in 2026',
      content: [
        { kind: 'paragraph', text: 'The price depends not only on the quality of the facility, but also on the type of place. The most important distinction is: a place with a Segurança Social agreement, a place in an IPSS without full subsidy, and a fully private place.' },
        { kind: 'checklist', items: [
          'Social place through Segurança Social/IPSS: around €600-1,500/month; the amount is calculated based on the income of the older person and the family',
          'IPSS with partial payment or without an available subsidised place: around €800-2,500/month',
          'Private ERPI / residência sénior: around €1,500-4,500/month',
          'Lisbon, Cascais, Oeiras, Porto and the Algarve are usually more expensive than inland areas',
          'A room for 2-3 people is cheaper than a single room',
          'A bedridden patient, dementia, night supervision, oxygen, special diets and incontinence pads can increase the bill',
          'An initial deposit or caução in private homes is often equal to 1 month of fees',
          'Medication, incontinence pads, transport, physiotherapy, hairdressing, dentistry and private consultations may be charged separately'
        ] },
        { kind: 'warning', text: 'Do not rely only on the advertised price “from €1,200”. Ask for the minuta do contrato and the list of extras before signing. In an ERPI, €1,400/month can easily become €1,700-1,900/month because of medication, incontinence pads, laundry or transport.' }
      ]
    },
    {
      id: 'how-to-find-place',
      title: 'How to look for a place: Carta Social, Segurança Social, municipality',
      content: [
        { kind: 'paragraph', text: 'Start with Carta Social — this is Portugal’s official directory of social facilities. There you can search for ERPI by distrito, concelho and freguesia, see the type of resposta social, capacity and contacts. Then call facilities directly and, in parallel, contact Segurança Social in the area of residence.' },
        { kind: 'substeps', items: [
          {
            id: 'search-carta-social',
            title: '1. Check facilities in Carta Social',
            content: [
              { kind: 'checklist', items: [
                'Open cartasocial.pt',
                'Select resposta social: Estrutura Residencial para Pessoas Idosas',
                'Filter by concelho where the family can realistically visit the older person',
                'Save 10-20 contacts: there is a waiting list almost everywhere',
                'Check whether the entidade proprietária is listed: IPSS, Misericórdia, private company',
                'Call rather than wait for an email response: ERPI often have weak administrative communication'
              ] }
            ]
          },
          {
            id: 'contact-social-security',
            title: '2. Book an appointment with Segurança Social',
            content: [
              { kind: 'paragraph', text: 'For a social place, the avaliação socioeconómica is important: income, health condition, degree of dependency, presence of family, housing and urgency. Booking is done through Segurança Social Direta, Linha Segurança Social or atendimento presencial.' }
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
        { kind: 'paragraph', text: 'Admission to an ERPI is almost always means-tested: the facility looks at the older person’s income and assets, family support, medical needs and social risk. For foreigners, legal residence, NIF, SNS/utente and clear income documents are important.' },
        { kind: 'checklist', items: [
          'Passport, residence permit or Cartão de Cidadão / residence card',
          'NIF',
          'Número de utente SNS',
          'NISS, if available',
          'Pension document: Segurança Social, Caixa Geral de Aposentações or foreign pension',
          'IRS declaration / nota de liquidação or proof of no IRS in Portugal',
          'Bank statements, if the facility asks to assess income',
          'Relatório médico from the family doctor or specialist',
          'List of medication and diagnoses',
          'Contact of the responsible relative or representante legal',
          'Document on incapacidade or grau de dependência, if available',
          'Procuração or court guardianship if the older person cannot sign the contract'
        ] },
        { kind: 'warning', text: 'If the older person has dementia and no longer understands the consequences of the contract, a normal signature may not be enough. A power of attorney arranged in advance, or legal representation through the court, is needed. Do not leave this until a crisis point.' }
      ]
    },
    {
      id: 'waiting-lists-and-urgent-cases',
      title: 'Waiting lists: why 12-36 months and what to do urgently',
      content: [
        { kind: 'paragraph', text: 'In 2026, demand for ERPI is higher than supply. In big cities and on the coast, the typical waiting time for a social place is 12-36 months. It can be faster in inland areas, but this makes family visits and quality control more difficult.' },
        { kind: 'checklist', items: [
          'Join several waiting lists at the same time: IPSS, Misericórdia, private ERPI',
          'Do not wait for the “perfect” place near home — check neighbouring concelhos',
          'Ask the assistente social to prepare a relatório social if the situation is urgent',
          'If there is a risk of falls, violence, homelessness or inability to provide care, inform Segurança Social and SNS',
          'Consider Serviço de Apoio Domiciliário + Centro de Dia temporarily',
          'For recovery after hospitalisation, ask the doctor about RNCCI, not ERPI',
          'For a private place, negotiate extras and caução, but not basic safety',
          'Visit the facility in person without warning at different times, if possible'
        ] },
        { kind: 'warning', text: '“There is a place tomorrow, pay the deposit by MB WAY” is a red flag. Check the legal entity, licence, address, contrato de prestação de serviços and whether the facility is listed in Carta Social. Do not transfer caução to an individual without a contract and recibo.' }
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
          'Clarify the staff ratio during the day and at night',
          'Ask who manages medication and how errors are recorded',
          'Check whether there is an enfermeiro, médico assistente, fisioterapia, plano individual de cuidados',
          'Look at the smell, cleanliness, condition of bathrooms, call buttons and food',
          'Clarify the rules for visits, video calls and going out for walks',
          'Ask for the menu semanal and list of included services',
          'Check whether the contract can be terminated and with how many days’ notice',
          'Clarify what happens in the event of hospitalisation: whether the place is kept and whether the full month is charged',
          'Ask for all extras in a written annex to the contract'
        ] },
        { kind: 'paragraph', text: 'For expats, an important practical issue is language. In private homes in Lisbon, Cascais, Porto and the Algarve, staff with English are more common; Russian is rare. If the older person does not speak Portuguese, prepare in advance a card with diagnoses, medication, allergies and basic phrases.' }
      ]
    }
  ],
  costs: [
    { label: 'Social place through Segurança Social / IPSS', amountEURMin: 600, amountEURMax: 1500, note: 'Monthly guide; the actual comparticipação depends on the income of the older person and the family.' },
    { label: 'IPSS without full subsidy', amountEURMin: 800, amountEURMax: 2500, note: 'Monthly guide; the price depends on the region, room and level of dependency.' },
    { label: 'Private ERPI / residência sénior', amountEURMin: 1500, amountEURMax: 4500, note: 'Monthly guide; premium facilities in Cascais, Lisboa, Porto and the Algarve may be higher.' },
    { label: 'Caução / deposit in a private ERPI', amountEURMin: 1500, amountEURMax: 4500, note: 'Often equal to 1 month of fees; return conditions must be in the contract.' }
  ],
  sources: [
    { title: 'Segurança Social — social responses for older people', url: 'https://www.seg-social.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Carta Social — official search for ERPI and other social responses', url: 'https://www.cartasocial.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal — social support for older people', url: 'https://www.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
