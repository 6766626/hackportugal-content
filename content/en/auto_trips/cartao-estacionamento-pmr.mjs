export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-estacionamento-pmr',
  categoryId: 'auto_trips',
  title: 'Cartão de Estacionamento PMR — parking for disabled people',
  tldr: 'Cartão de Estacionamento PMR is a European parking card for disabled people and people with reduced mobility.\n\nIn Portugal it is issued free of charge by IMT, usually on the basis of an AMIM with incapacidade permanente ≥60% and a medical indication of reduced mobility. The card is personal and is not tied to a car: it is valid when the holder drives the vehicle themselves or is being transported. It gives the right to use PMR spaces and free parking in municipal spaces; it is recognised in the EU.',
  tags: ['pmr', 'imt', 'parking', 'amim'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What the PMR card gives you',
      content: [
        { kind: 'paragraph', text: 'Cartão de Estacionamento para Pessoas com Deficiência Condicionadas na Mobilidade is the official blue EU-style parking card. In Portugal it is issued by IMT, not by the Câmara Municipal, the police or the SNS.' },
        { kind: 'checklist', items: ['parking in spaces marked with a disabled parking / PMR sign', 'free parking in municipal on-street spaces, including paid Câmara Municipal zones', 'use of the card in other EU countries under the principle of mutual recognition', 'the card applies to the person, not to a specific car', 'it can be used in your own car, a taxi, a rental car or a relative’s car, provided the cardholder is travelling in the vehicle', 'the original card must be placed in a visible position behind the windscreen, front side facing outwards'] },
        { kind: 'warning', text: 'The card does not give the right to block entrances, pavements, pedestrian crossings, fire access routes, bus stops or no-stopping areas. A fine and towing are possible even if you have a PMR card.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who is eligible',
      content: [
        { kind: 'paragraph', text: 'The basic requirement is a disability confirmed by an Atestado Médico de Incapacidade Multiuso (AMIM) and a real limitation of mobility. In practice, IMT is guided by Decreto-Lei 307/2003 and subsequent amendments: the key case is incapacidade permanente de natureza motora ≥60%.' },
        { kind: 'checklist', items: ['AMIM with a permanent or long-term disability', 'usually ≥60% for motor disability / reduced mobility', 'the AMIM or medical documents must make it clear that mobility is limited', 'Portugal residents with a NIF can apply through IMT', 'children and adults are entitled to a card if the medical criteria are met', 'the card can be issued to a person who is transported, even if they do not drive themselves', 'institutions transporting disabled people may have a separate regime for service vehicles'] },
        { kind: 'warning', text: 'Not every AMIM ≥60% automatically means entitlement to estacionamento PMR. If the disability is not related to mobility, IMT may ask for clarification or refuse the application. Check the wording of the AMIM before applying.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for applying to IMT',
      content: [
        { kind: 'paragraph', text: 'The document set is simple, but it is better to prepare scans in advance. If the AMIM was issued in Portugal, it is the strongest document. Foreign certificates usually require recognition or a Portuguese AMIM.' },
        { kind: 'checklist', items: ['AMIM — Atestado Médico de Incapacidade Multiuso', 'identity document: Cartão de Cidadão, residence permit or passport', 'NIF', 'proof of address in Portugal, if IMT requests it', 'contact email and phone number', 'if a representative applies — power of attorney or a document proving representation', 'for a minor — documents of the parent / legal representative', 'scans in readable PDF/JPG format, with no cropped pages'] },
        { kind: 'warning', text: 'Do not send the original AMIM by post unless necessary. For an online application, a digital copy is usually enough; keep the original with you in case of an inspection.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply through IMT',
      content: [
        { kind: 'substeps', items: [
          { id: 'online', title: '1. Apply online', content: [
            { kind: 'paragraph', text: 'Go to IMT Online / serviços IMT and choose the service Cartão de Estacionamento para Pessoas com Deficiência. Login is usually done using Chave Móvel Digital (CMD), Cartão de Cidadão or other available autenticação.gov methods.' },
            { kind: 'checklist', items: ['check your personal details', 'upload the AMIM', 'upload your identity document if the system asks for it', 'enter the delivery address', 'save the application comprovativo'] }
          ]},
          { id: 'desk', title: '2. If online does not work — balcão IMT', content: [
            { kind: 'paragraph', text: 'You can go to an IMT atendimento by appointment. This is useful if you do not have CMD, have a representative, have foreign documents, or the system does not accept the AMIM.' }
          ]},
          { id: 'receive', title: '3. Receive the card', content: [
            { kind: 'paragraph', text: 'After approval, IMT issues or sends the card. The timeframe depends on the workload of the office; allow several weeks, especially in Lisbon and Porto.' }
          ]}
        ]},
        { kind: 'warning', text: 'The card issuance service is free. If an intermediary asks for a large “IMT state fee”, this is not an official fee for the Cartão de Estacionamento PMR.' }
      ]
    },
    {
      id: 'use-rules',
      title: 'How to use it without fines',
      content: [
        { kind: 'paragraph', text: 'The card works only when the person to whom it was issued is in the vehicle: as the driver or as a passenger. You cannot leave the card with a relative “just in case”.' },
        { kind: 'checklist', items: ['place the original card behind the windscreen so that the number and expiry date are visible', 'use PMR spaces only for the boarding, alighting or parking of the cardholder', 'parking is free in municipal on-street spaces, but it is still better to check local time/zone rules on the parking meter or the Câmara website', 'free parking is not guaranteed in private car parks at shopping centres, airports and concession-operated garages', 'in other EU countries, follow local rules: the right is recognised, but time limits and charges may differ', 'if the card is lost or stolen, notify IMT and request a replacement', 'apply for renewal in advance before the expiry date, with an up-to-date AMIM'] },
        { kind: 'warning', text: 'Misuse of the card — for example, parking without the cardholder being present — can lead to a fine, confiscation of the card and problems with renewal.' }
      ]
    },
    {
      id: 'moving-to-portugal',
      title: 'If you have just moved to Portugal',
      content: [
        { kind: 'paragraph', text: 'If you already have an EU disability parking card from another EU country, it is usually recognised in Portugal. Use it under the same rules: the card must be visible behind the windscreen, and the cardholder must be in the car.' },
        { kind: 'paragraph', text: 'If the card or certificate was issued outside the EU, it is better to obtain a Portuguese AMIM through the saúde system and then apply to IMT. For an AMIM, an assessment by a junta médica is usually required; timeframes depend on the region and can be long.' },
        { kind: 'checklist', items: ['obtain a NIF and an address in Portugal', 'register with the SNS and obtain a número de utente if you plan to apply for an AMIM', 'collect translations of medical reports if they are not in Portuguese', 'request an AMIM through the Centro de Saúde / autoridade de saúde', 'after obtaining the AMIM, apply for the Cartão de Estacionamento PMR at IMT'] }
      ]
    }
  ],
  costs: [
    { label: 'Issuance of the Cartão de Estacionamento PMR at IMT', amountEUR: 0, note: 'The official service is free; there may only be indirect costs for translations, a power of attorney or travel to IMT.' }
  ],
  sources: [
    { title: 'IMT: Parking card for disabled people', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'INR: rights and parking for disabled people', url: 'https://www.inr.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 307/2003 — Community-model parking card', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/307-2003-617116', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
