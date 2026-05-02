export default {
  editorialVoice: 'hackportugal',
  id: 'pet-adoption-shelters',
  categoryId: 'animals',
  title: 'Adopting a pet in Portugal — shelters and process',
  tldr: 'In Portugal, adoption from a shelter is free or requires a symbolic fee (€10-50) to cover sterilisation and the microchip. Main sources: municipal CRO (Centro de Recolha Oficial), private associations (União Zoófila, ANIMAL, Bianca, CB), Animais de Rua (Lisboa), Casa dos Animais Lisboa. The website adopt.cao.pt is a national database. The law requires a microchip + registration with SIAC + insurance (for dogs of dangerous breeds). Sterilisation is usually included.',
  tags: ['adoption', 'shelter', 'dog', 'cat', 'cro', 'animal'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'where-to-adopt',
      title: '🏠 Where to look for a pet',
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
              '🐕 **União Zoófila** (zoofila.pt) — the largest, Lisboa',
              '🐱 **ANIMAL** (animal.pt) — national',
              '🦴 **Bianca** (bianca.pt) — Algarve, specialising in older dogs',
              '🐶 **SOS Animal** (sosanimal.pt) — rescue',
              '🐈 **Gatos de Rua** (gatosderua.pt) — sterilisation of urban cats',
              '💰 Fees €30-100 (to cover sterilisation, vaccinations, microchip)',
              '✅ They often carry out an assessment and identify behavioural issues in advance'
            ]}
          ]},
          { id: 'w3', title: 'Search platforms', content: [
            { kind: 'checklist', items: [
              '🌐 **adopt.cao.pt** — national database (dogs and cats)',
              '🌐 **adoptar.pt** — private database, many listings',
              '📱 **Tirar de Caixa** (Lisboa) — Facebook group',
              '📱 **Adopta Lisboa** — adoption app',
              '📱 **Pawsome** — low-cost browsing app'
            ]}
          ]},
          { id: 'w4', title: 'Chance finds', content: [
            { kind: 'checklist', items: [
              '🚨 Stray animal in the street — call 112 (if in danger) or the local CRO',
              '⚖️ Found an animal — the law requires you to try to find the owner (photo on social media, notice)',
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
              '🆔 CC / residence permit + proof of address',
              '🏠 Description of housing: flat/house, size, balcony, whether pets are allowed',
              '👨‍👩‍👧 Who lives there (adults/children/other animals)',
              '⏰ How long the animal will be alone',
              '📞 Contact details'
            ]}
          ]},
          { id: 'p2', title: 'Step 2 — Visit and matching', content: [
            { kind: 'checklist', items: [
              '🐾 Come to the shelter and meet the animals',
              '⏰ Test walk for dogs (walk for 25-30 min, observe temperament)',
              '🐱 Contact test for cats (interaction, reaction to hands)',
              '👨‍⚕️ Discussion with a volunteer about the animal’s behaviour, history and health issues'
            ]}
          ]},
          { id: 'p3', title: 'Step 3 — Home check (for dogs)', content: [
            { kind: 'checklist', items: [
              '🏠 Many shelters carry out a home check — a volunteer visits',
              '✅ Checks: safe balcony/yard, no open windows, space for a bed',
              '⚖️ Dangerous breeds (Bull Terrier, Pit Bull, Rottweiler — list in Lei 110/2015): social skills + €50,000 insurance required',
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
              '⚠️ The first weeks are an adjustment period; the animal will be stressed by the move'
            ]}
          ]},
          { id: 'p5', title: 'Step 5 — Registration in SIAC', content: [
            { kind: 'checklist', items: [
              '🌐 SIAC — Sistema de Informação de Animais de Companhia (siac.dgav.pt)',
              '📝 Re-register the microchip in your name within 30 days',
              '🆔 NIF, CC, animal information',
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
              '💊 Antiparasitic treatments: €10-20',
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
          '🎓 **First 30 days of adjustment**: keep things quiet, do not invite many guests, give them time',
          '🩺 First routine check-up with a vet (your own, not the shelter’s) — 2 weeks after adoption',
          '💪 **Behavioural specialist** (for dogs with trauma): dog trainer with a positive approach',
          '🐾 Walks 2-3 times a day (dogs), play (cats)',
          '📸 Social media: help the shelter — post photos, recommend it',
          '🎁 Return to the shelter (if it is not a good fit): there is usually a 30-day return period; do not abandon the animal on the street!',
          '⚖️ Law Lei 92/95: cruelty = up to 2 years in prison + €5,000 fine'
        ]}
      ]
    },
    {
      id: 'opasnye-porody',
      title: '⚠️ Dangerous breeds (Lei 110/2015)',
      content: [
        { kind: 'paragraph', text: 'Additional requirements apply to adopting certain dog breeds.' },
        { kind: 'checklist', items: [
          '🐕 List: American Staffordshire, Bull Terrier, Pit Bull, Rottweiler, Doberman, Cane Corso, Tosa Inu, Fila Brasileiro, etc.',
          '📋 **Licença de detenção** at the Junta de Freguesia',
          '💼 **Professional insurance** €50,000',
          '🐾 **Behaviour course** (40 h) + certificate',
          '🩺 **Comprehensive assessment** of the owner (medical, psychological)',
          '🚶 **On walks**: muzzle + short lead 1.5 m + adult ≥ 18 years old',
          '⚠️ Harder to adopt — shelters are strict',
          '📜 Behavioural tests for the dog itself (to confirm that it is not aggressive)'
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
    { label: 'Dangerous breed insurance/year', amountEURMin: 30, amountEURMax: 100 }
  ],
  sources: [
    { title: 'DGAV — SIAC (Sistema Animais de Companhia)', url: 'https://siac.vet.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 92/95 — Animal protection', url: 'https://diariodarepublica.pt/dr/detalhe/lei/92-1995-241458', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 110/2015 — Dangerous dogs', url: 'https://diariodarepublica.pt/dr/detalhe/lei/110-2015-69859225', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
