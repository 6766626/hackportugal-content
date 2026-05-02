export default {
  editorialVoice: 'hackportugal',
  id: 'seguro-multirisco-habitacao',
  categoryId: 'housing_rent',
  title: 'Seguro Multirriscos Habitação — home insurance',
  tldr: 'Seguro Multirriscos Habitação is home insurance in Portugal. For the owner of a flat in a condomínio, at least fire insurance is mandatory under Código Civil art. 1429; with a mortgage, the bank almost always requires multirriscos covering the building for the reconstruction value. For a tenant, a policy is not mandatory, but it is useful for belongings, leaks and responsabilidade civil. Typical price in 2026: €100–300/year for a flat, more expensive with a high insured sum and extended cover.',
  tags: ['insurance', 'housing', 'rent', 'mortgage'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-covers',
      title: 'What multirriscos covers 🏠',
      content: [
        { kind: 'paragraph', text: 'Seguro Multirriscos Habitação is not one standard product, but a package of cover. The basic risk is incêndio, raio e explosão. The rest is added depending on the policy: danos por água, roubo, fenómenos sísmicos, responsabilidade civil, recheio, assistência ao lar.' },
        { kind: 'checklist', items: [
          'Incêndio, raio e explosão — fire, lightning, explosion; key cover for owners.',
          'Danos por água — leaks from pipes, boiler, washing machine; important in older buildings in Lisbon/Porto.',
          'Inundações/tempestades — rain, flooding, strong wind; check the conditions and exclusions separately.',
          'Roubo/furto — theft of property; usually requires signs of forced entry and involvement of PSP/GNR.',
          'Responsabilidade civil familiar or proprietário/inquilino — damage to neighbours, for example if your pipe floods the flat below.',
          'Recheio — furniture, appliances, clothing, personal belongings; insured separately from walls and structures.',
          'Assistência ao lar — call-out for a plumber, electrician, locksmith; limits are often low.',
          'Fenómenos sísmicos — earthquake; in Portugal it is often sold as additional cover, especially relevant for Lisboa/Algarve/Açores.'
        ] },
        { kind: 'warning', text: 'The name “multirriscos” does not guarantee that theft, earthquake or a tenant’s belongings are covered. Check the condições particulares: riscos cobertos, exclusões, franquia, capital seguro and limites por sinistro.' }
      ]
    },
    {
      id: 'mandatory-or-not',
      title: 'Is it mandatory',
      content: [
        { kind: 'paragraph', text: 'For a tenant in Portugal, seguro multirriscos is usually not mandatory by law. But the tenancy agreement may require a responsabilidade civil policy or seguro de recheio; this is a contractual condition, not a universal rule.' },
        { kind: 'paragraph', text: 'For the owner of a flat under propriedade horizontal, the law requires fire insurance for each fração autónoma and the common parts. In practice, this is covered either by the owner’s individual policy or by the collective condomínio policy. Responsibility for having cover lies with the owners.' },
        { kind: 'paragraph', text: 'With a mortgage, the bank requires home insurance as a condition of the loan. Usually, multirriscos is needed with building cover at least for the valor de reconstrução, not the market price of the flat. The bank may offer its own policy, but you have the right to compare the market and take out insurance with another insurer if it meets the loan requirements.' },
        { kind: 'checklist', items: [
          'Tenant with no requirement in the contrato de arrendamento — the policy is voluntary.',
          'Recheio and responsabilidade civil are useful for a tenant, because the owner’s insurance does not cover your belongings.',
          'Owner of a flat in a condomínio — at least incêndio is mandatory.',
          'Owner of a moradia without a condomínio — the law may not require multirriscos, but the bank will require it with a mortgage.',
          'Mortgage — the bank monitors the existence of the policy and may be the beneficiário/credor hipotecário.',
          'The condomínio may have a shared policy, but it does not always cover recheio and individual improvements to the flat.'
        ] }
      ]
    },
    {
      id: 'how-much',
      title: 'How much it costs in 2026',
      content: [
        { kind: 'paragraph', text: 'The usual range for a flat is around €100–300/year. A small flat with basic risks may cost closer to €100–150/year; a policy with recheio, assistência, responsabilidade civil and fenómenos sísmicos often comes to €200–400/year or more.' },
        { kind: 'paragraph', text: 'The price depends not on the purchase price of the flat, but on the insured sum and the risks. For the building, insurers use valor de reconstrução: how much it costs to rebuild an equivalent area, excluding the value of the land and location premium.' },
        { kind: 'checklist', items: [
          'Capital seguro para edifício — insured sum for walls, floors/ceilings, roof, built-in systems.',
          'Capital seguro para recheio — separate sum for furniture, appliances, clothing, jewellery.',
          'Franquia — your share in a loss; for example €0, €50, €100 or a percentage of the damage.',
          'Location — Lisboa, Algarve, areas at risk of flooding/earthquakes may be more expensive.',
          'Age and condition of the building — old pipes, wooden floors, lack of manutenção increase the risk.',
          'Fenómenos sísmicos cover usually increases the premium noticeably.',
          'A bank package may give a discount on the spread, but the policy itself is often more expensive than the market.'
        ] },
        { kind: 'warning', text: 'Do not understate the capital seguro to save €20–40 a year. If the capital is insufficient, the insurer may apply the regra proporcional: paying only part of the loss.' }
      ]
    },
    {
      id: 'how-to-buy',
      title: 'How to take it out without overpaying unnecessarily',
      content: [
        { kind: 'substeps', items: [
          { id: 'collect-data', title: '1. Collect the property details', content: [
            { kind: 'checklist', items: [
              'Address and código postal.',
              'Type of housing: apartamento, moradia, fração em propriedade horizontal.',
              'Year of construction or approximate age of the building.',
              'Area: área bruta privativa and, if applicable, garagem/arrecadação.',
              'Floor, whether there is a lift, security, alarm.',
              'Whether there is a mortgage and the bank’s requirements for capital seguro.',
              'Whether you want to insure recheio and for what amount.'
            ] }
          ] },
          { id: 'compare-quotes', title: '2. Compare 3–5 offers', content: [
            { kind: 'paragraph', text: 'Request simulations from Fidelidade, Tranquilidade, Allianz, Liberty/Liberty Seguros or through a mediador de seguros broker. Compare not only the premium, but also franquias, exclusions and limits.' },
            { kind: 'checklist', items: [
              'Ask for the condições particulares and condições gerais before paying.',
              'Check whether danos por água is included without overly narrow exclusions.',
              'Check the responsabilidade civil limit towards neighbours.',
              'For a tenant, make sure recheio is actually included.',
              'For a mortgage, check whether the bank accepts a policy from an external insurer.',
              'Compare annual payment and mensalidade: paying monthly may be more expensive.'
            ] }
          ] },
          { id: 'sign-and-pay', title: '3. Sign and pay', content: [
            { kind: 'paragraph', text: 'Usually you need a NIF, address, identity document, IBAN or card, and flat details. The policy is activated after emissão da apólice and payment of the prémio. Keep the apólice, recibo and assistência contacts.' }
          ] }
        ] }
      ]
    },
    {
      id: 'claim',
      title: 'What to do in case of a leak, fire or theft',
      content: [
        { kind: 'paragraph', text: 'Notification deadlines are stated in the policy; safe practice is to inform the insurer immediately, within 24–48 hours, and not to throw away damaged items before the perito has inspected them.' },
        { kind: 'checklist', items: [
          'First stop the damage: turn off the water, switch off the electricity, call emergência in case of fire.',
          'Take photos and videos before cleaning: source, damage, wide shots, details.',
          'Inform the condomínio or senhorio if common parts or neighbouring flats are affected.',
          'Call the assistência da seguradora and get a sinistro number.',
          'In case of theft, file a queixa with PSP/GNR and keep the document.',
          'Collect repair invoices, appliance purchase receipts, photos of serial numbers, old recibos.',
          'Do not admit fault in writing to neighbours without agreeing it with the insurer.',
          'Check whether the franquia has been deducted and whether the capital seguro has been applied correctly.'
        ] },
        { kind: 'warning', text: 'Typical conflict: the owner’s insurance covers the walls, but not the tenant’s belongings; the condomínio insurance covers common parts, but not your kitchen renovation; danos por água may not cover a gradual leak due to falta de manutenção.' }
      ]
    }
  ],
  costs: [
    { label: 'Basic multirriscos for a flat', amountEURMin: 100, amountEURMax: 200, note: 'Annual guide: incêndio, danos por água, responsabilidade civil with limitations.' },
    { label: 'Extended policy with recheio and assistência', amountEURMin: 200, amountEURMax: 400, note: 'Annual guide; depends on capital seguro, franquia and earthquake cover.' },
    { label: 'Tenant policy for belongings and civil liability', amountEURMin: 60, amountEURMax: 180, note: 'Usually cheaper because it does not insure the building structure.' }
  ],
  sources: [
    { title: 'ASF — consumer information on insurance', url: 'https://www.asf.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — crédito à habitação and related insurance', url: 'https://clientebancario.bportugal.pt/pt-pt/credito-habitacao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código Civil — art. 1429, seguro obrigatório contra incêndio in propriedade horizontal', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 72/2008 — regime jurídico do contrato de seguro', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/72-2008-249969', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
