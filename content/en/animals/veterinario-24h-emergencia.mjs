export default {
  editorialVoice: 'hackportugal',
  id: 'veterinario-24h-emergencia',
  categoryId: 'animals',
  title: '24-hour veterinary clinics in Lisbon and Porto',
  tldr: 'In Portugal, emergency veterinary care is called urgência veterinária.\n\nIn Lisbon, people most often use Hospital Veterinário do Restelo, Hospital Veterinário São Bento and VetGarcia; in Porto — Centro Hospitalar Veterinário Porto. Typical urgência fee in 2026: €50-120 just for admission/examination, with higher prices at night and on public holidays. Tests, X-rays, ultrasound, hospitalisation and surgery are paid separately. Call before you go: 24h operation and on-duty specialists change.',
  tags: ['vet', 'urgência', 'lisbon', 'porto'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-emergency',
      title: 'When to go to urgência immediately',
      content: [
        { kind: 'paragraph', text: 'Emergency veterinary care in Portugal works like triagem: first they assess the threat to life, then they calculate diagnostics and treatment. If the animal is stable, you may be asked to wait even at night.' },
        { kind: 'checklist', items: [
          'Difficulty breathing, blue/grey tongue, choking',
          'Seizures, loss of consciousness, severe weakness, paralysis',
          'Bleeding, injury after a fall/road accident, open wound',
          'Suspected poisoning: medicines, chocolate, rat poison, plants, chemicals',
          'Vomiting or diarrhoea with blood, repeated vomiting, signs of dehydration',
          'Bloated abdomen in a dog, restlessness, attempts to vomit without result',
          'A cat cannot urinate or repeatedly goes to the litter tray without urine',
          'Birth complications, weak newborns, severe pain',
          'Fever, heatstroke, prolonged trembling after heat',
          'Swallowed toy, bone, thread, fishing hook'
        ] },
        { kind: 'warning', text: 'Do not give human painkillers without a prescription. Paracetamol is dangerous for cats, and ibuprofen and many NSAIDs can cause severe poisoning in dogs and cats.' }
      ]
    },
    {
      id: 'where-lisbon',
      title: 'Lisbon: where to call 24/7',
      content: [
        { kind: 'paragraph', text: 'There are several large hospitais veterinários with urgência in Lisbon and the surrounding metropolitan area. Save the phone numbers in advance: at night Google Maps sometimes shows “open”, but the on-duty team may be limited.' },
        { kind: 'checklist', items: [
          'Hospital Veterinário do Restelo — a large hospital in the Restelo/Belém area, often used for complex diagnostics, hospitalisation and surgery',
          'Hospital Veterinário São Bento — central Lisbon, convenient for Santos, Rato, Estrela, Príncipe Real',
          'VetGarcia — a common point for urgência in Lisbon; before setting off, check by phone that a vet is available and what the night-appointment conditions are',
          'If you live in Cascais, Oeiras, Almada or Loures, check the nearest hospital veterinário 24h: at night the journey through Lisbon may take longer than going to a local hospital',
          'If poisoning is suspected, immediately say on the phone exactly what the pet ate, the approximate quantity and the animal’s weight',
          'If a specialist is needed — neurology, ophthalmology, orthopaedics, cardiology — check whether they are on-call today specifically'
        ] },
        { kind: 'paragraph', text: 'Phrase for the call: “Boa noite, tenho uma emergência com o meu cão/gato. Estão abertos 24 horas? Posso ir agora? Qual é o valor da consulta de urgência?”' }
      ]
    },
    {
      id: 'where-porto',
      title: 'Porto: the main reference point',
      content: [
        { kind: 'paragraph', text: 'In Porto, the best-known emergency point is Centro Hospitalar Veterinário Porto. This is a large hospital with urgência, diagnostics, hospitalisation and several specialties.' },
        { kind: 'checklist', items: [
          'Call before you set off and describe the symptoms: triagem by phone helps assess urgency',
          'Confirm the address of the Porto unit specifically if you are searching on maps: the group may have different unidades',
          'Ask the price of the “consulta de urgência” and the surcharge for nocturno/fim de semana/feriado',
          'If the animal is aggressive because of pain, warn them in advance: they may prepare a muzzle, carrier or separate entrance',
          'If you are in Gaia, Matosinhos, Maia or Gondomar, compare the travel time to CHV and to the nearest urgência veterinária'
        ] },
        { kind: 'warning', text: 'In Porto and Lisbon, traffic and parking can be critical. For a serious condition, it is better to call Bolt/Uber with a carrier or go by car with someone who can hold the animal safely.' }
      ]
    },
    {
      id: 'costs-and-payment',
      title: 'How much urgência costs in 2026',
      content: [
        { kind: 'paragraph', text: 'The emergency appointment fee is only for admission and the initial examination. Everything done afterwards is charged separately: injections, tests, imaging, ultrasound, oxygen, hospitalisation, surgery, medicines to take home.' },
        { kind: 'checklist', items: [
          'Standard consulta de urgência: approximately €50-120',
          'Night, Sunday and feriado are usually more expensive than daytime appointments',
          'Basic blood tests often add €40-120',
          'X-rays are usually charged as a set of images; guide price €50-150',
          'Ultrasound, CT, endoscopy, surgery and hospitalisation can quickly raise the bill to hundreds or thousands of euros',
          'Before a procedure, ask for an orçamento — a written or verbal estimate',
          'Payment is usually by card, Multibanco or cash; MB WAY depends on the clinic',
          'Pet insurance rarely pays directly: more often you pay the clinic and submit a claim to the insurer'
        ] },
        { kind: 'warning', text: 'If your budget is limited, say so directly: “Tenho um orçamento limitado. Pode indicar as opções essenciais primeiro?” Vets can usually divide the plan into urgent, advisable and home monitoring.' }
      ]
    },
    {
      id: 'what-to-bring',
      title: 'What to bring with you',
      content: [
        { kind: 'paragraph', text: 'The more information you bring, the faster the triagem and the lower the risk of repeat tests. In Portugal, pets must be identified by microchip and registered in SIAC; rabies vaccination is also important for dogs.' },
        { kind: 'checklist', items: [
          'Boletim sanitário or EU Pet Passport with vaccinations',
          'Microchip / SIAC number, if available',
          'List of medicines, doses and time of the last dose',
          'Photo or packaging of the substance the pet may have eaten',
          'Video of the seizure, lameness, cough or strange behaviour',
          'Previous tests, discharge notes, ultrasound/X-ray results',
          'Carrier for a cat or small dog; lead and muzzle for a dog',
          'Pad, towel, bag for a vomit/faeces sample, if it is safe',
          'Owner’s NIF if a recibo/fatura is needed for insurance or expense records'
        ] },
        { kind: 'paragraph', text: 'If the animal was imported recently, report the country of origin and date of entry. For vets, parasite risks, vaccination, flight stress and possible diseases that are rare in Portugal are important.' }
      ]
    },
    {
      id: 'aftercare',
      title: 'After the appointment: documents and follow-up',
      content: [
        { kind: 'paragraph', text: 'After urgência, ask for a relatório clínico. It is needed by your usual vet, insurance and if you visit another hospital again.' },
        { kind: 'checklist', items: [
          'Obtain the diagnosis or preliminary assessment in Portuguese',
          'Ask for test results in PDF or by email',
          'Clarify the medication schedule: dose, frequency, how many days, with or without food',
          'Write down the red flags: which symptoms mean you should return immediately',
          'Ask whether a check-up is needed in 24-72 hours',
          'Keep the fatura-recibo and orçamento for the insurer',
          'If the pet is kept in hospital, confirm the daily cost, call rules and update times'
        ] },
        { kind: 'warning', text: 'If the condition worsens after discharge, do not wait until morning. Call the hospital that treated you and give the ficha/processo number, if one was provided.' }
      ]
    }
  ],
  costs: [
    { label: 'Consulta de urgência', amountEURMin: 50, amountEURMax: 120, note: 'Typical range for an emergency examination in 2026; night, Sunday and public holidays may be more expensive' },
    { label: 'Basic blood tests', amountEURMin: 40, amountEURMax: 120, note: 'Guide price; depends on the panel and laboratory urgency' },
    { label: 'X-ray/diagnostics', amountEURMin: 50, amountEURMax: 150, note: 'For a set of images or basic imaging diagnostics; complex investigations are more expensive' },
    { label: 'Hospitalisation/surgery', amountEURMin: 150, amountEURMax: 2000, note: 'Depends heavily on the diagnosis, oxygen, surgery, anaesthesia and length of hospitalisation' }
  ],
  sources: [
    { title: 'Ordem dos Médicos Veterinários — professional regulation of vets', url: 'https://www.omv.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGAV — companion animals, identification, health rules', url: 'https://www.dgav.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Hospital Veterinário do Restelo — urgência and hospital services', url: 'https://www.hospitalveterinariodorestelo.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Centro Hospitalar Veterinário — Porto', url: 'https://www.chv.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
