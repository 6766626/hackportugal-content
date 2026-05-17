export default {
  editorialVoice: 'hackportugal',
  id: 'audiologia-aparelhos-auditivos',
  categoryId: 'healthcare',
  title: 'Audiology and hearing aids: Widex, Oticon, Acustimedi',
  tldr: 'In Portugal, a hearing aid is usually bought after a consulta de ORL and audiometria. The private route is fast: the test is often free, a Widex/Oticon/Phonak/Signia device costs roughly €1,500–€3,500 per ear, and fitting is included. Through the SNS the route is slower: médico de família → ORL → relatório/prescrição → pedido de produto de apoio; if comparticipação is approved, the final co-payment often falls to €500–€1,500, but it depends on the budget, clinic and model.',
  tags: ['audiology', 'sns', 'hearing', 'widex', 'oticon'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-to-check',
      title: 'When to go to audiologia, and when to go to ORL',
      content: [
        { kind: 'paragraph', text: 'If you have started hearing speech less well, turn up the TV volume, ask people to repeat phrases, or hear ringing in your ears, start with a hearing check. In Portugal this is called audiometria tonal/vocal, sometimes with impedanciometria added.' },
        { kind: 'paragraph', text: 'An important nuance: a hearing-aid seller can do a test and recommend a device, but the medical diagnosis is made by an ORL doctor — otorrinolaringologista. For the SNS, comparticipação and serious symptoms, you specifically need ORL.' },
        { kind: 'checklist', items: [
          'Go to ORL urgently if hearing loss appeared suddenly over hours/days',
          'Pain, discharge from the ear, fever — first go to a médico de família/ORL, not a hearing-aid shop',
          'One-sided hearing loss or loud noise in one ear requires medical diagnosis',
          'Dizziness, balance problems, neurological symptoms — do not delay',
          'If the hearing loss is age-related and gradual, you can also book a free test in a private network in parallel',
          'For children, the route is only through a paediatrician/ORL; do not buy a device without a medical report'
        ] },
        { kind: 'warning', text: 'Sudden sensorineural hearing loss is a medical urgency. The earlier the treatment, the higher the chance of recovery. Do not wait for a “free test next week”.' }
      ]
    },
    {
      id: 'sns-route',
      title: 'The route through the SNS and comparticipação',
      content: [
        { kind: 'paragraph', text: 'Through the SNS you are not simply buying a device more cheaply: you need to go through the medical chain and obtain a document confirming the need for a produto de apoio. In practice this takes longer, but it can reduce your personal co-payment from the private €1,500–€3,500 per ear to around €500–€1,500, or even less, if the subsidy is approved and budget is available.' },
        { kind: 'substeps', items: [
          { id: 'gp', title: '1. Médico de família or consulta aberta', content: [
            { kind: 'paragraph', text: 'Book an appointment at the Centro de Saúde. You need a número de utente. The doctor will issue a referral to ORL if there are grounds for it.' }
          ] },
          { id: 'orl', title: '2. Consulta de ORL', content: [
            { kind: 'paragraph', text: 'ORL examines the ear and rules out wax plugs, otitis, perforation, tumour-related and neurological causes. After that, they prescribe audiometria and other tests.' }
          ] },
          { id: 'tests', title: '3. Audiometria and relatório', content: [
            { kind: 'paragraph', text: 'The result must show the type and degree of hearing loss. For a support application, you usually need a relatório médico/prescrição stating the need for a hearing aid.' }
          ] },
          { id: 'support', title: '4. Pedido de produto de apoio', content: [
            { kind: 'paragraph', text: 'Hearing aids fall under the produtos de apoio system. Applications may go through entidades prescritoras/financiadoras, including the SNS and Segurança Social, depending on the situation. In practice, ask ORL and the hospital administrative service which exact route applies in your ACES/ULS.' }
          ] }
        ] },
        { kind: 'checklist', items: [
          'Número de utente SNS',
          'NIF',
          'Document: residence permit, Cartão de Cidadão, passport with visa or another document proving legal stay',
          'Referral from médico de família or ORL appointment',
          'Relatório médico from ORL',
          'Audiometria tonal and vocal; sometimes impedanciometria',
          'Orçamento/quote from the hearing-aid supplier',
          'IBAN and contact details, if reimbursement is required',
          'Proof of income may be needed for social routes'
        ] },
        { kind: 'warning', text: 'Comparticipação does not mean an automatic discount at the till. Often, you need a prior application, orçamento and to wait for a decision. Do not buy a €3,000 device assuming the SNS will “definitely reimburse it later” while you do not yet have written confirmation of the route and conditions.' }
      ]
    },
    {
      id: 'private-route',
      title: 'Private networks: Acustimedi, Acoustimedi and others',
      content: [
        { kind: 'paragraph', text: 'The private route is convenient if you need to understand quickly whether a device is needed and test models. In Portugal there are audiologia networks and practices: Acustimedi, Minisom, GAES/Amplifon, MultiOpticas Audiologia, as well as local audiologistas. The name Acoustimedi appears in searches and on some individual pages, but before visiting check the legal name, address and reviews: the most recognisable brand is Acustimedi.' },
        { kind: 'paragraph', text: 'A free test in a shop is not a substitute for ORL, but it is a good start. Normal practice: test, trial period, fitting, check-up after 2–4 weeks, then regular readjustment.' },
        { kind: 'checklist', items: [
          'Ask for a printed audiograma, not just a verbal “you need a device”',
          'Ask whether 2–5 years of warranty and free ajustes are included',
          'Clarify the trial-period length: often 15–30 days, but conditions vary',
          'Check that the orçamento states the price for one ear or for a pair',
          'Compare at least 2 networks: the difference for the same model can be hundreds of euros',
          'Ask about a rechargeable battery: convenient, but replacing the battery later costs money',
          'Clarify compatibility with iPhone/Android and the manufacturer’s app',
          'Do not buy sound amplifiers from marketplaces instead of a medical aparelho auditivo',
          'If they offer “today only -50%”, take the orçamento and leave to compare'
        ] }
      ]
    },
    {
      id: 'brands',
      title: 'Widex, Oticon: what to actually choose',
      content: [
        { kind: 'paragraph', text: 'Widex and Oticon are reputable premium brands available in Portugal through partner practices. Both have modern RIC/BTE models, rechargeable versions, Bluetooth, apps and noise reduction. The difference is usually not in the logo, but in how well the audiologista fits the device to your audiometria and real-life situations: work, the street, restaurants, Portuguese speech.' },
        { kind: 'checklist', items: [
          'RIC/RITE — a small casing behind the ear, the most common option for age-related hearing loss',
          'BTE — more powerful and robust, often suitable for more severe hearing loss',
          'ITE/ITC — in-ear models are less visible, but are not suitable for everyone in terms of anatomy and power',
          'Rechargeable — convenient for older people who find it difficult to change batteries',
          'Bluetooth — useful for calls, but check your exact phone model',
          'Tinnitus programme — may help with ringing in the ears, but does not treat the cause',
          'Noise reduction and directional microphones are important for restaurants and offices',
          'Moisture protection does not mean you can swim or shower while wearing the device'
        ] },
        { kind: 'paragraph', text: 'For comparison, ask not for “the best device” but for 2–3 orçamento: basic, mid-range and premium. For many people, the mid-range class gives almost all the practical benefit if the fitting is done well.' }
      ]
    },
    {
      id: 'money',
      title: 'How much it costs in 2026 and where to save',
      content: [
        { kind: 'paragraph', text: 'The market is opaque: the same model may be sold with different service packages. In 2026, a realistic private range is €1,500–€3,500 per ear, with premium pairs reaching €5,000–€7,000. After SNS/social comparticipação, the personal co-payment often ends up around €500–€1,500, but this is not a guaranteed tariff.' },
        { kind: 'checklist', items: [
          'Compare the price for a pair and for one ear separately',
          'Clarify whether ear moulds, charger, filters, batteries and cleaning are included',
          'Ask for a written orçamento with the model, technology level and warranty period',
          'Check whether you can pay in instalments without juros',
          'Ask about campanha for pensioners, veterans, company employees and seguradoras',
          'If you have ADSE, Médis, Multicare or another insurance policy, check the limit for próteses auditivas',
          'For IRS, keep the fatura com NIF: medical expenses may be counted in deduções à coleta under the general rules',
          'Do not take out credit on the spot until you have compared the SNS option and obtained a second opinion'
        ] },
        { kind: 'warning', text: 'The most expensive mistake is buying one device when the hearing loss is bilateral. The brain adapts poorly, sound localisation is worse, and speech in noise remains a problem. The decision “one ear or two” should be explained by ORL/audiologista based on the audiograma.' }
      ]
    },
    {
      id: 'aftercare',
      title: 'After purchase: fitting matters more than the box',
      content: [
        { kind: 'paragraph', text: 'The first weeks are almost always unfamiliar: you hear the fridge, footsteps, dishes, wind. This does not mean the device is bad. Ajustes are needed — usually the first check-up after 2–4 weeks, then another 1–2 fitting sessions.' },
        { kind: 'checklist', items: [
          'Wear the device daily, otherwise the brain will not adapt',
          'Write down situations where it is poor: restaurant, car, Zoom, street',
          'Bring these notes to the ajuste, rather than simply saying “I hear badly”',
          'Clean filters and moulds according to the instructions',
          'Do not dry the device with a hairdryer; use a dry box or capsule if recommended',
          'Remove it before showering, swimming pool, sauna and hair dyeing',
          'Do repeat audiometria once a year or earlier if hearing worsens',
          'If pain, rubbing, whistling or inflammation appears — go for readjustment/examination'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Private audiometria without a promotion', amountEURMin: 30, amountEURMax: 80, note: 'In many networks, the test is done free of charge when choosing a device; in an ORL clinic it may be paid.' },
    { label: 'Consulta ORL in a private clinic', amountEURMin: 70, amountEURMax: 130, note: 'Depends on the city, doctor and insurance; through the SNS it is paid according to SNS rules and is usually cheaper, but the wait is longer.' },
    { label: 'Mid-range/premium-level hearing aid', amountEURMin: 1500, amountEURMax: 3500, note: 'Indicative price for one ear in a private sale with fittings; a pair is usually €3,000–€7,000.' },
    { label: 'Co-payment after comparticipação', amountEURMin: 500, amountEURMax: 1500, note: 'Typical practical range when support is approved, but the amount is not guaranteed and depends on budget, model and application route.' },
    { label: 'Batteries/consumables per year', amountEURMin: 30, amountEURMax: 120, note: 'Lower for rechargeable, but paid battery replacement may be needed later.' }
  ],
  sources: [
    { title: 'SNS 24 — access to cuidados de saúde and referrals through the SNS', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGS — hearing-health information and public clinical guidance', url: 'https://www.dgs.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Instituto Nacional para a Reabilitação — produtos de apoio / SAPA', url: 'https://www.inr.pt/produtos-de-apoio', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Acustimedi — private audiologia and hearing-aid network', url: 'https://www.acustimedi.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
