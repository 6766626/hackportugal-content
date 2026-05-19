export default {
  editorialVoice: 'hackportugal',
  id: 'rent-a-car',
  categoryId: 'auto_trips',
  title: 'Car hire in Portugal — advice for residents and tourists',
  tldr: 'Car hire in Portugal ranges from €20/day for a budget small car to €150+/day for premium. International firms such as Hertz / Europcar / Avis are more expensive than local companies, but more reliable.\n\nBudget options: Sixt, Goldcar, Centauro — cheap, but with many hidden fees. Requirements: driver age ≥ 21, licence held for ≥ 1 year, credit card (debit cards are not accepted everywhere)\.\n\nFull insurance (CDW + TP + zero excess) ~€15-25/day — essential if you do not have a premium credit card with insurance. Deposit €800-2500. Via Verde is usually included, toll roads — selectively.',
  tags: ['hire', 'car', 'vehicle', 'sixt', 'europcar'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'companies',
      title: '🚗 Companies — comparison',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Premium international companies', content: [
            { kind: 'checklist', items: [
              'Hertz, Europcar, Avis, Enterprise, Sixt — large, with 24/7 support, transparent',
              'Prices: €40-150/day',
              'Full insurance is often included in the package',
              'New cars (<1 year), good maintenance',
              'Branches at airports, in cities, at railway stations',
              'Include Via Verde in some packages'
            ]}
          ]},
          { id: 'c2', title: 'Budget companies', content: [
            { kind: 'checklist', items: [
              'Goldcar, Centauro, OK Mobility, Firefly — cheaper (€20-50/day)',
              '⚠️ Hidden fees: additional cleaning, “dirty fuel policy” (penalty if you did not top up), hidden exclusions from insurance',
              'Queues at the airport can be 30-60 min',
              'Cars are often older (>3 years), sometimes with scratches',
              'TravelTrolls / Reclaim often write about them — read reviews'
            ]}
          ]},
          { id: 'c3', title: 'Peer-to-peer and niche options', content: [
            { kind: 'checklist', items: [
              'Drivy / Getaround — P2P hire from private individuals, €20-60/day',
              'Miles — car sharing with per-minute billing in Lisbon / Porto (for short trips)',
              'Muving — mopeds / scooters in the centre',
              'TURO — does not operate in Portugal (only for EU residents in some countries)'
            ]}
          ]},
          { id: 'c4', title: 'Comparison aggregators', content: [
            { kind: 'checklist', items: [
              'Kayak, Rentalcars, Skyscanner, Discover Cars',
              '⚠️ The price on an aggregator is not the final price. Insurance, deposit, and fuel policy may differ',
              'Rentalcars.com has its own insurance — often cheaper than the hire company’s insurance',
              'Book 2-4 weeks in advance to get the best price',
              'At the last minute, especially in season (July-August, Easter), prices can be ×2'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'requirements',
      title: '📋 Requirements',
      content: [
        { kind: 'checklist', items: [
          '🆔 Licence: valid in the EU (any EU licence) or international driving permit + national licence for non-EU citizens',
          '👥 Age: usually ≥ 21, 25+ for premium class / people <25 pay a “young driver fee” of €5-15/day',
          '📅 Licence held: ≥ 1 year (2 years for premium class)',
          '💳 Credit card: required, not debit (some budget companies accept debit + deposit ×2)',
          '🧾 Deposit: €800-2500 is blocked on the credit card',
          '🏠 Address: some require confirmation (for non-EU citizens, a passport is often enough)',
          '📄 Documents: licence + passport + credit card + booking voucher'
        ]}
      ]
    },
    {
      id: 'insurance',
      title: '🛡️ Insurance — the key point',
      content: [
        { kind: 'paragraph', text: 'Basic insurance is always included, but it has a high excess (up to €1500). Additional insurance reduces or removes the excess.' },
        { kind: 'substeps', items: [
          { id: 'i1', title: 'Types', content: [
            { kind: 'checklist', items: [
              'CDW (Collision Damage Waiver): covers damage to the car in an accident where you are at fault, but with an excess',
              'TP (Theft Protection): theft cover',
              'SCDW / Zero Excess (Super CDW): reduces the excess to 0 — often +€10-15/day',
              'TP Extra: theft with no excess',
              'Third Party Liability (RC): usually included, legally required',
              'Glass & Tyres (seguro janelas e pneus): often separate, €2-5/day',
              'Personal Accident Insurance: additional accident insurance; if you do not have your own — worth considering'
            ]}
          ]},
          { id: 'i2', title: 'Alternative: bank card insurance', content: [
            { kind: 'checklist', items: [
              'American Express Gold/Platinum: includes CDW free of charge',
              'Revolut Premium / Metal: hire car insurance included',
              'Some Visa Infinite / Mastercard World Elite: similar conditions',
              'Pay for the car hire with this card → insurance is activated',
              'BUT: some hire companies refuse and still sell their own insurance — check in advance'
            ]}
          ]},
          { id: 'i3', title: 'Third-party insurance', content: [
            { kind: 'checklist', items: [
              'Rentalcars.com Protect — €8-15/day, often cheaper than the hire company’s insurance',
              'Insurance4CarHire, iCarhireinsurance — annual subscription €40-80, covers all hires during the year',
              'Important: in an accident you pay the rental excess, then receive reimbursement from the insurer'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'pickup',
      title: '🚘 On collection — essential steps',
      content: [
        { kind: 'checklist', items: [
          '🚗 Inspect the car before signing the contract — walk around it, take photos of scratches/stains on your phone',
          '📸 Video the interior — upholstery, dashboard, buttons',
          '⛽ Fuel: full level / as stated in the contract; if “full-to-full” — return it with the same level',
          '🔑 Documents: registration documents, insurance, roadworthiness inspection (IPO) — in the glove compartment',
          '💡 Ask: whether the air conditioning, brake lights, Bluetooth, GPS work',
          '📋 Sign the contract ONLY after checking — everything photographed must be recorded',
          '💳 Deposit: card block — show it before signing',
          '🛣️ Via Verde — find out whether it is included. If not — choose alternative roads or pay yourself after the trip'
        ]}
      ]
    },
    {
      id: 'return',
      title: '↩️ On return',
      content: [
        { kind: 'checklist', items: [
          '⛽ Refuel to the same level (full-to-full policy — cheaper than their refuelling price)',
          '🧹 Clean inside — remove rubbish; if dirty — cleaning fee €30-100',
          '🚗 Wash the outside — usually not required, but if very dirty — a fee',
          '📸 Photograph again when returning — protection against unexpected scratch claims',
          '📝 Get a signed return report — confirmation of no damage',
          '⏰ On time — late return = payment for a day + penalty',
          '📅 Grace period: usually 30 min',
          '💳 Deposit release: 1-14 days to the card'
        ]}
      ]
    },
    {
      id: 'tips',
      title: '💡 Practical tips',
      content: [
        { kind: 'checklist', items: [
          '🎫 Book in advance: 2-6 weeks ahead — -30-40% compared with the walk-up price',
          '📍 Algarve vs Lisboa: Faro airport is often cheaper, with more local choice',
          '📅 Collection Monday-Thursday — cheaper than weekends',
          '⏰ Morning slot — shorter queue',
          '🏝️ Islands (Madeira, Azores) — always book in advance, fleets are limited',
          '🌍 Cross-border travel (to Spain, France) — check, not all companies allow it. Surcharge €20-50',
          '🪄 Upgrade at the desk — often a “free” upgrade = an attempt to sell insurance; do not agree immediately',
          '🎒 Child seat: €5-10/day (better to bring your own)',
          '📡 GPS: not needed (Google Maps + phone), €5-10/day overpayment',
          '🏎️ Age of the car — the older the car, the higher the chance of technical problems. Europcar / Hertz usually < 1 year'
        ]}
      ]
    },
    {
      id: 'fines',
      title: '⚠️ Fines',
      content: [
        { kind: 'checklist', items: [
          '📸 Speeding / running a red light fines are recorded against the vehicle number plate — the hire company receives the notice',
          'They invoice you: fine + administrative fee €30-80',
          'Non-payment of Via Verde = fine ×25 the cost → the hire company forwards it to you with a fee',
          'Payment: within 30 days; ignoring it — blocking of future hires + debt recovery',
          'Appeals only through the hire company (they pass them to the authorities)'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Budget economy car', amountEURMin: 20, amountEURMax: 50, note: '€/day' },
    { label: 'Mid-range premium class', amountEURMin: 40, amountEURMax: 100, note: '€/day' },
    { label: 'Luxury/SUV', amountEURMin: 80, amountEURMax: 200, note: '€/day' },
    { label: 'Zero-excess insurance surcharge', amountEURMin: 10, amountEURMax: 25, note: '€/day' },
    { label: 'Young driver fee', amountEURMin: 5, amountEURMax: 15, note: '€/day' },
    { label: 'Child seat', amountEURMin: 5, amountEURMax: 10, note: '€/day' },
    { label: 'Top-up to full tank (if forgotten)', amountEURMin: 30, amountEURMax: 60, note: 'penalty' }
  ],
  sources: [
    { title: 'Rentalcars.com — aggregator', url: 'https://www.rentalcars.com/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Discover Cars — aggregator', url: 'https://www.discovercars.com/', kind: 'company', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'DECO PROteste — hire company ratings', url: 'https://www.deco.proteste.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
