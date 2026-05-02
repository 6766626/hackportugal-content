export default {
  editorialVoice: 'hackportugal',
  id: 'cartao-estacionamento-pmr',
  categoryId: 'auto_trips',
  title: 'Cartão de Estacionamento PMR — parking for people with disabilities',
  tldr: 'Cartão de Estacionamento PMR is a European parking card for people with disabilities and reduced mobility. In Portugal it is issued by IMT free of charge, usually on the basis of an AMIM with incapacidade permanente ≥60% and a medical indication of reduced mobility. The card is personal and not linked to a car: it applies when the holder is driving themselves or is being transported. It gives the right to use PMR spaces and free parking in municipal spaces; it is recognised in the EU.',
  tags: ['pmr', 'imt', 'parking', 'amim'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What the PMR card gives you',
      content: [
        { kind: 'paragraph', text: 'Cartão de Estacionamento para Pessoas com Deficiência Condicionadas na Mobilidade is the official blue EU-style parking card. In Portugal it is issued by IMT, not by the Câmara Municipal, the police or the SNS.' },
        { kind: 'checklist', items: ['parking in spaces marked with a disabled parking / PMR sign', 'free parking in municipal on-street spaces, including paid Câmara Municipal zones', 'use of the card in other EU countries on the basis of mutual recognition', 'the card applies to the person, not to a specific car', 'it can be used in your own car, a taxi, a hire car or a relative’s car, if the cardholder is travelling in the vehicle', 'the original card must be placed in a visible position behind the windscreen, with the front side facing outwards'] },
        { kind: 'warning', text: 'The card does not give the right to block entrances, pavements, pedestrian crossings, fire access routes, bus stops or places where stopping is prohibited. A fine and towing are possible even with a PMR card.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who is eligible',
      content: [
        { kind: 'paragraph', text: 'The basic condition is a disability confirmed by an Atestado Médico de Incapacidade Multiuso (AMIM) and a genuine mobility limitation. In practice, IMT relies on Decreto-Lei 307/2003 and subsequent amendments: the key case is incapacidade permanente de natureza motora ≥60%.' },
        { kind: 'checklist', items: ['AMIM with a permanent or long-term disability', 'usually ≥60% for motor disability / reduced mobility', 'the AMIM or medical documents must make it clear that mobility is limited', 'residents of Portugal with a NIF can apply through IMT', 'children and adults are eligible for the card if the medical criteria are met', 'the card can be issued to a person who is transported, even if they do not drive themselves', 'institutions transporting people with disabilities may have a separate regime for service vehicles'] },
        { kind: 'warning', text: 'Not every AMIM ≥60% automatically means eligibility for estacionamento PMR. If the disability is not related to mobility, IMT may request clarification or refuse the application. Before applying, check the wording of the AMIM.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for applying to IMT',
      content: [
        { kind: 'paragraph', text: 'The document set is simple, but it is better to prepare scans in advance. If the AMIM was issued in Portugal, this is the strongest document. Foreign certificates usually require recognition or a Portuguese AMIM.' },
        { kind: 'checklist', items: ['AMIM — Atestado Médico de Incapacidade Multiuso', 'identity document: Cartão de Cidadão, residence permit or passport', 'NIF', 'proof of address in Portugal, if IMT requests it', 'contact email and phone number', 'if a representative applies — power of attorney or a document confirming representation', 'for a minor — documents of the parent / legal representative', 'scans in readable PDF/JPG, without cropped pages'] },
        { kind: 'warning', text: 'Do not send the original AMIM by post unless necessary. For an online application, a digital copy is usually enough; keep the original with you in case of inspection.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply through IMT',
      content: [
        { kind: 'substeps', items: [
          { id: 'online', title: '1. Apply online', content: [
            { kind: 'paragraph', text: 'Go to IMT Online / serviços IMT and choose the Cartão de Estacionamento para Pessoas com Deficiência service. Login is usually via Chave Móvel Digital (CMD), Cartão de Cidadão or other available autenticação.gov methods.' },
            { kind: 'checklist', items: ['check your personal details', 'upload the AMIM', 'upload your identity document if the system asks for it', 'enter the delivery address', 'save the application comprovativo'] }
          ]},
          { id: 'desk', title: '2. If online does not work — balcão IMT', content: [
            { kind: 'paragraph', text: 'You can contact an IMT atendimento by appointment. This is useful if you do not have CMD, have a representative, have foreign documents or the system does not accept the AMIM.' }
          ]},
          { id: 'receive', title: '3. Receive the card', content: [
            { kind: 'paragraph', text: 'After approval, IMT issues or sends the card. The timeframe depends on the workload of the office; allow several weeks, especially in Lisbon and Porto.' }
          ]}
        ]},
        { kind: 'warning', text: 'The card-issuing service is free of charge. If an intermediary asks for a large “IMT state fee”, this is not an official fee for Cartão de Estacionamento PMR.' }
      ]
    },
    {
      id: 'use-rules',
      title: 'How to use it without fines',
      content: [
        { kind: 'paragraph', text: 'The card works only when the person to whom it was issued is in the vehicle: as driver or passenger. You cannot leave the card with a relative “just in case”.' },
        { kind: 'checklist', items: ['place the original card behind the windscreen so that the number and expiry date are visible', 'use PMR spaces only for the boarding, alighting or parking of the cardholder', 'parking in municipal on-street spaces is free, but it is still better to check local time/zone rules on the parking meter or the Câmara website', 'in private car parks at shopping centres, airports and concession garages, free parking is not guaranteed', 'in other EU countries, follow local rules: the right is recognised, but time limits and charges may differ', 'if the card is lost or stolen, notify IMT and request a replacement', 'when the expiry date is approaching, apply for renewal in advance, with an up-to-date AMIM'] },
        { kind: 'warning', text: 'Misuse of the card — for example, parking without the holder being present — can lead to a fine, confiscation of the card and problems on renewal.' }
      ]
    },
    {
      id: 'moving-to-portugal',
      title: 'If you have just moved to Portugal',
      content: [
        { kind: 'paragraph', text: 'If you already have an EU disability parking card from another EU country, it is usually recognised in Portugal. Use it under the same rules: the card is visible behind the windscreen, and the cardholder is in the car.' },
        { kind: 'paragraph', text: 'If the card or certificate was issued outside the EU, it is better to obtain a Portuguese AMIM through the saúde system and then apply to IMT. For an AMIM, a junta médica assessment is usually needed; timeframes depend on the region and can be long.' },
        { kind: 'checklist', items: ['obtain a NIF and an address in Portugal', 'register with the SNS and obtain a número de utente if you plan to obtain an AMIM', 'gather translations of medical reports if they are not in Portuguese', 'request an AMIM through the Centro de Saúde / autoridade de saúde', 'after the AMIM, apply for a Cartão de Estacionamento PMR at IMT'] }
      ]
    }
  ],
  costs: [
    { label: 'Issuing of the Cartão de Estacionamento PMR at IMT', amountEUR: 0, note: 'The official service is free of charge; there may only be indirect costs for translations, a power of attorney or travel to IMT.' }
  ],
  sources: [
    { title: 'IMT: Cartão de estacionamento para pessoas com deficiência', url: 'https://www.imt-ip.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'INR: rights and parking for people with disabilities', url: 'https://www.inr.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 307/2003 — Community-model parking card', url: 'https://dre.pt', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
