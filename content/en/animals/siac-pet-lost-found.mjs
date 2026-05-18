export default {
  editorialVoice: 'hackportugal',
  id: 'siac-pet-lost-found',
  categoryId: 'animals',
  title: 'SIAC.pt: lost or found pet in Portugal',
  tldr: 'SIAC is Portugal’s microchip database for dogs, cats and ferrets. If your pet is lost, report it on SIAC.pt using the microchip number and immediately check that the owner’s phone, email and address are up to date. If you have found an animal, do not register it as yours: take it to a vet, Câmara Municipal, GNR/PSP or municipal kennel to scan the chip. Foreign chips can be searched via Europetnet. The SIAC report itself is free; a vet may charge for an appointment.',
  tags: ['siac', 'pet', 'microchip', 'animals'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-siac-does',
      title: 'What SIAC is and why the microchip is what matters',
      content: [
        { kind: 'paragraph', text: 'SIAC is the Sistema de Informação de Animais de Companhia, Portugal’s national companion animal identification database. For dogs, cats and ferrets, microchip identification and SIAC registration are the standard legal basis under Decreto-Lei 82/2019.' },
        { kind: 'paragraph', text: 'The microchip itself does not contain GPS. It stores a number. A vet, municipal kennel, police or authorised service scans the number and looks up the owner in SIAC. This means the chance of getting the animal back depends not only on the chip, but also on whether the owner’s phone, email and address are up to date.' },
        { kind: 'checklist', items: ['Check that you have the número de identificação eletrónica — the 15-digit microchip number.', 'Keep the DIAC — Documento de Identificação do Animal de Companhia, which is issued after registration.', 'After moving to Portugal, do not rely only on a foreign database: ask a vet to check the SIAC registration.', 'After changing phone number, email, address or owner, update the details through a vet or another entidade registadora.', 'If the animal is lost, the report on SIAC.pt is submitted using the microchip number.', 'If the animal is found, the microchip is scanned first, then the owner is contacted.'] }
      ]
    },
    {
      id: 'lost-animal',
      title: 'If your pet is lost 🐕',
      content: [
        { kind: 'paragraph', text: 'Do not wait 24 hours. In Portugal, found animals are often taken to a vet, a municipal kennel or reported to the Câmara Municipal. The sooner the “desaparecido” status appears in SIAC, the faster scanning the chip can lead back to you.' },
        { kind: 'substeps', items: [
          { id: 'prepare-data', title: '1. Gather the details', content: [
            { kind: 'checklist', items: ['Microchip number from the DIAC, the animal’s passport or the veterinary clinic.', 'Animal’s name, species and breed, colour, sex, age.', 'Date and approximate time of disappearance.', 'Exact location: street, freguesia, concelho, landmarks.', 'Your phone number with WhatsApp/calls and email.', 'Photo of the animal, preferably recent and full-length.', 'Distinctive features: collar, scar, medication, fear of people, aggression, diet.'] }
          ]},
          { id: 'submit-siac', title: '2. Submit a report on SIAC', content: [
            { kind: 'paragraph', text: 'Open SIAC.pt → “Anunciar Animal Desaparecido”. Fill in the form with the microchip number, contacts and place of disappearance. If the owner details in the database do not match the current details, call your vet at the same time and ask them to update the contacts in SIAC.' }
          ]},
          { id: 'call-local-network', title: '3. Notify local services', content: [
            { kind: 'checklist', items: ['The vet where the animal is registered.', 'Municipal dog/cat shelter or Centro de Recolha Oficial de Animais for your concelho.', 'Câmara Municipal — animal protection or environment department.', 'Junta de Freguesia for the area where the animal went missing.', 'GNR or PSP if the animal may be on the road or theft is suspected.', 'Neighbouring vet clinics: ask them to scan the chip and check it against SIAC.', 'Local Facebook/WhatsApp groups for the area, but without publishing the full microchip number.'] }
          ]}
        ]},
        { kind: 'warning', text: 'Do not publish the full microchip number, a copy of the DIAC or your documents in public groups. For a public post, a photo, area, name, phone number and distinctive features are enough. The full number is needed by SIAC, the vet and official services.' }
      ]
    },
    {
      id: 'found-animal',
      title: 'If you have found an animal 🐈',
      content: [
        { kind: 'paragraph', text: 'Your task is to keep the animal safe and check the microchip as quickly as possible. Do not register the found pet as yours, do not transport it far without necessity and do not hand it over to third parties without checking the owner.' },
        { kind: 'checklist', items: ['If the animal is injured, take it to the nearest vet or call 112 if there is a danger to people/the road.', 'If the animal is calm, take a photo and note the exact location and time it was found.', 'Ask any vet to scan the microchip. Many clinics help with this free of charge, but an appointment may be paid.', 'If there is no clinic nearby, contact the municipal kennel, Câmara Municipal, GNR or PSP.', 'If the microchip is found in SIAC, contact with the owner is usually made by the vet or authorised service through the database.', 'If the chip is foreign, check it through Europetnet or ask a vet to do this.', 'If there is no chip, submit an “Animal Encontrado” report on SIAC.pt and notify the Câmara Municipal.'] },
        { kind: 'paragraph', text: 'SIAC.pt has a separate “Anunciar Animal Encontrado” form. It is useful when you have found an animal and want to leave a trace in the national system: the animal’s details, place found, finder’s contacts and, if known, the microchip number are entered.' },
        { kind: 'warning', text: 'You cannot simply keep a found dog or cat for yourself.\n\nIn Portugal, the owner is determined through SIAC/DIAC, and a change of owner must be processed through the system. Taking the animal without authorisation can create legal problems, especially if the owner has already reported it missing.' }
      ]
    },
    {
      id: 'europetnet-foreign-chip',
      title: 'Foreign chip and Europetnet',
      content: [
        { kind: 'paragraph', text: 'Europetnet connects many European microchip databases. If the animal came from another country or a found chip is not located in SIAC, the number can be checked through Europetnet: the system shows which database the chip is registered in and where to contact next.' },
        { kind: 'checklist', items: ['Enter the 15-digit microchip without spaces.', 'If the system shows a foreign database, contact that database or ask a vet to help.', 'If the animal is yours and you have moved to Portugal, register/link the details in SIAC through a vet.', 'Check that SIAC lists a Portuguese phone number or email where you can actually be reached.', 'If the animal has an EU pet passport, compare the microchip number in the passport, SIAC and Europetnet.', 'When travelling, keep a tag with your phone number on the collar, because a microchip requires a scanner.'] },
        { kind: 'warning', text: 'Europetnet does not replace SIAC. For life in Portugal, a pet found by a local service must be identifiable through a working Portuguese contact for the owner. A foreign number without an up-to-date phone number often delays return by days.' }
      ]
    },
    {
      id: 'update-owner-data',
      title: 'How to update owner details in SIAC',
      content: [
        { kind: 'paragraph', text: 'The most common reason why a chip “does not work” is an old phone number, the previous owner’s email or an address in another country. After moving, changing number, divorce, transfer of the animal or the owner’s death, update SIAC before anything happens.' },
        { kind: 'checklist', items: ['Book an appointment with a vet and ask them to check the SIAC record.', 'Take your passport/residence permit or Cartão de Cidadão, NIF if you have one, DIAC and EU pet passport.', 'Check the owner’s name, address, phone number and email.', 'If the animal has passed to you from another owner, complete an alteração de titularidade, not just an informal handover.', 'After the change, ask for an updated DIAC or confirmation.', 'Save the microchip number on your phone, in the cloud and with a second family member.', 'If the details in SIAC are wrong, do not delay: an animal going missing is the worst moment for bureaucracy.'] },
        { kind: 'paragraph', text: 'Under Decreto-Lei 82/2019, the owner must report substantial changes, including disappearance, death, change of owner and changes to details. In practice, the easiest way to do this is through a vet, because they have access to SIAC and a scanner to confirm the microchip.' }
      ]
    }
  ],
  costs: [
    { label: '“Animal desaparecido/encontrado” report on SIAC.pt', amountEUR: 0, note: 'Submission through the public SIAC forms is free.' },
    { label: 'Microchip scan', amountEURMin: 0, amountEURMax: 20, note: 'Often free at a vet, municipal kennel or services; a private clinic may process it as a consultation.' },
    { label: 'Microchip + initial SIAC registration', amountEURMin: 15, amountEURMax: 35, note: 'The market price at a vet depends on the clinic and includes the identification/registration act.' },
    { label: 'Updating owner details', amountEURMin: 0, amountEURMax: 15, note: 'Depends on the vet; some do it together with a normal consultation.' }
  ],
  sources: [
    { title: 'SIAC: report a missing animal', url: 'https://www.siac.pt/pt/anunciar-animal-desaparecido', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SIAC: report a found animal', url: 'https://www.siac.pt/pt/anunciar-animal-encontrado', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 82/2019: companion animal identification and SIAC', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/82-2019-122728684', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Europetnet: microchip search in European databases', url: 'https://www.europetnet.com/', kind: 'company', language: 'en', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
