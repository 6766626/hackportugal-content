export default {
  editorialVoice: 'hackportugal',
  id: 'pet-adoption-shelters',
  categoryId: 'animals',
  title: 'Adopting an animal in Portugal — shelters and the process',
  tldr: 'In Portugal, adoption from a shelter is free or involves a symbolic fee (€10-50) to cover sterilisation and the microchip. Main sources: municipal CRO (Centro de Recolha Oficial), private associations (União Zoófila, ANIMAL, Bianca, CB), Animais de Rua (Lisboa), Casa dos Animais Lisboa. The adopt.cao.pt website is a national database. The law requires a microchip + registration in SIAC + insurance (for dangerous-breed dogs).\n\nSterilisation is usually included.',
  tags: ['adoption', 'shelter', 'dog', 'cat', 'cro', 'animal'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'where-to-adopt',
      title: '🏠 Where to look for an animal',
      content: [
        { kind: 'substeps', items: [
          { id: 'w1', title: 'Municipal shelters (CRO)', content: [
            { kind: 'checklist', items: [
              '🏛️ Every municipality has a CRO (Centro de Recolha Oficial)',
              '📍 Lisboa: Casa dos Animais Lisboa (CAL) — Parque das Conchas',
              '📍 Porto: Centro Municipal de Recolha Animal (cat/dog) — Camarinha',
              '📍 Cascais: Canil Municipal de Cascais',
              '📍 Sintra: municipal shelter in Sintra',
              '🌐 All CRO: cm-cidade.pt → Animais de Companhia',
              '💰 Fees €10-30 (only to cover sterilisation)',
              '⚠️ Often overcrowded — animals wait a long time for adoption'
            ]}
          ]},
          { id: 'w2', title: 'Private associations', content: [
            { kind: 'checklist', items: [
              '🐕 União Zoófila (zoofila.pt) — the largest, Lisboa',
              '🐱 ANIMAL (animal.pt) — national',
              '🦴 Bianca (bianca.pt) — Algarve, specialises in older dogs',
              '🐶 SOS Animal (sosanimal.pt) — rescue',
              '🐈 Gatos de Rua (gatosderua.pt) — sterilisation of urban cats',
              '💰 Fees €30-100 (to cover sterilisation, vaccinations, microchip)',
              '✅ They often carry out an assessment and identify behavioural issues in advance'
            ]}
          ]},
          { id: 'w3', title: 'Search platforms', content: [
            { kind: 'checklist', items: [
              '🌐 adopt.cao.pt — national database (dogs and cats)',
              '🌐 adoptar.pt — private database, many listings',
              '📱 Tirar de Caixa (Lisboa) — Facebook group',
              '📱 Adopta Lisboa — adoption app',
              '📱 Pawsome — low-cost browsing app'
            ]}
          ]},
          { id: 'w4', title: 'Chance finds', content: [
            { kind: 'checklist', items: [
              '🚨 Stray animal on the street — call 112 (if in danger) or the local CRO',
              '⚖️ Found an animal — the law requires you to try to find the owner (photo on social networks, notice)',
              '🔢 Scan the microchip at any veterinary clinic (ID — pet-id.pt)',
              '⏰ If no owner is found within 30 days — you can adopt officially'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'process',
      title: '📋 Adoption process',
      content: [
        { kind: 'substeps', items: [
          { id: 'p1', title: 'Step 1 — Application', content: [
            { kind: 'checklist', items: [
              '🌐 Form on the shelter website or in person',
              '🆔 Cartão de Cidadão / residence permit + proof of address',
              '🏠 Description of housing: flat/house, size, balcony, whether animals are allowed',
              '👨‍👩‍👧 Who lives there (adults/children/other animals)',
              '⏰ How long the animal will be alone',
              '📞 Contact details'
            ]}
          ]},
          { id: 'p2', title: 'Step 2 — Visit and matching', content: [
            { kind: 'checklist', items: [
              '🐾 Come to the shelter and meet the animals',
              '⏰ Test walk for dogs (25-30 min walk, observe temperament)',
              '🐱 Contact test for cats (interaction, reaction to hands)',
              '👨‍⚕️ Conversation with a volunteer about the animal’s behaviour, history and health issues'
            ]}
          ]},
          { id: 'p3', title: 'Step 3 — Home check (for dogs)', content: [
            { kind: 'checklist', items: [
              '🏠 Many shelters carry out a home check — a volunteer comes to visit',
              '✅ Checks: safe balcony/yard, no open windows, space for a bed',
              '⚖️ Potentially dangerous breeds (see below): require a special licence at the Junta, seguro de responsabilidade civil of at least €50,000 and special identification requirements',
              '🚫 If the home check is not passed — they may refuse',
              '⏱️ Decision in 1-3 days'
            ]}
          ]},
          { id: 'p4', title: 'Step 4 — Contract and collection', content: [
            { kind: 'checklist', items: [
              '📜 Sign the “Termo de Adopção” (adoption contract)',
              '💰 Pay the fee (if any)',
              '📋 Receive documents: pet passport, Caderneta Sanitária, microchip card',
              '🪪 The microchip is already registered in SIAC in your name (or transferred to you for re-registration)',
              '🐾 Collect the animal (prepare a carrier, lead)',
              '⚠️ The first weeks are an adaptation period; the animal will be stressed by the move'
            ]}
          ]},
          { id: 'p5', title: 'Step 5 — Registration in SIAC', content: [
            { kind: 'checklist', items: [
              '🌐 SIAC — Sistema de Informação de Animais de Companhia (siac.vet)',
              '📝 Transfer/change of titular in SIAC — within the established deadline (usually 15 days after transfer). Check whether the CRO/associação does this immediately or whether you need to go to a veterinário',
              '🆔 NIF, Cartão de Cidadão, animal information',
              '💰 Free',
              '🚨 No re-registration = fine of up to €500'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'costs',
      title: '💰 Financial commitments',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Initial', content: [
            { kind: 'checklist', items: [
              '💰 Adoption fee €0-100',
              '🧪 Sterilisation (if not done): cat €80-150, dog €150-300',
              '💉 Vaccinations (if not done): €50-100',
              '🦠 Deworming: €10-20',
              '🛏️ Bed, bowls, lead, litter: €50-150',
              '📜 Insurance (for dogs): €30-100/year'
            ]}
          ]},
          { id: 'c2', title: 'Monthly', content: [
            { kind: 'checklist', items: [
              '🍖 Dog food (15 kg): €30-80',
              '🍗 Cat food: €20-50',
              '🩺 Routine vet: €10-30/month on average',
              '🚿 Grooming (long-haired dogs): €30-60 every 6 weeks',
              '💊 Antiparasitics: €10-20',
              '📅 Annual vaccinations: €60-100',
              '⚠️ Emergency vet (oncology, surgery): €500-2,000'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'after',
      title: '🏠 After adoption',
      content: [
        { kind: 'checklist', items: [
          '🎓 First 30 days of adaptation: keep things quiet, do not invite many guests, give time',
          '🩺 First routine check-up with a vet (your own, not the shelter’s) — 2 weeks after adoption',
          '💪 Behavioural specialist (for dogs with trauma): dog trainer using a positive approach',
          '🐾 Walks 2-3 times a day (dogs), play (cats)',
          '📸 Social networks: help the shelter — post photos, recommend it',
          '🎁 Return to the shelter (if it did not work out): there are usually 30 days to return; do not abandon the animal on the street!',
          '⚖️ Lei 92/95: cruelty = up to 2 years in prison + €5,000 fine'
        ]}
      ]
    },
    {
      id: 'opasnye-porody',
      title: '⚠️ Dangerous and potentially dangerous dogs — legal regime',
      content: [
        { kind: 'paragraph', text: 'Decreto-Lei 315/2009, amended by Lei 110/2015; list of raças potencialmente perigosas — Portaria 422/2004. Additional conditions are required for adoption.' },
        { kind: 'checklist', items: [
          '🐕 Potentially dangerous breeds: Cão de Fila Brasileiro, Dogo Argentino, Pit Bull Terrier, Rottweiler, American Staffordshire Terrier, Staffordshire Bull Terrier, Tosa Inu — and their cruzamentos',
          '📋 Licença de detenção at the Junta de Freguesia',
          '💼 Seguro de responsabilidade civil minimum €50,000',
          '🐾 Behaviour course + certificate',
          '🩺 Comprehensive assessment of the owner (medical, psychological)',
          '🚶 When walking: muzzle + short lead ≤1 m + adult ≥ 16 years old',
          '⚠️ Harder to adopt — shelters are strict',
          '📜 Behavioural tests for the dog itself'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Adoption fee', amountEURMin: 0, amountEURMax: 100 },
    { label: 'Cat sterilisation', amountEURMin: 80, amountEURMax: 150 },
    { label: 'Dog sterilisation', amountEURMin: 150, amountEURMax: 300 },
    { label: 'Dog food/month', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Routine vet/month', amountEURMin: 10, amountEURMax: 30 },
    { label: 'Insurance for dangerous breeds/year', amountEURMin: 30, amountEURMax: 100 }
  ],
  sources: [
    { title: 'SIAC — Companion Animal Information System', url: 'https://www.siac.vet/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Lei 92/95 — Animal protection', url: 'https://diariodarepublica.pt/dr/detalhe/lei/92-1995-241458', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 315/2009 + Lei 110/2015 — Dangerous dogs', url: 'https://diariodarepublica.pt/dr/detalhe/lei/110-2015-69859225', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portaria 422/2004 — List of potentially dangerous breeds', url: 'https://diariodarepublica.pt/dr/detalhe/portaria/422-2004', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
