export default {
  editorialVoice: 'hackportugal',
  id: 'transportes-65-mais-gratis',
  categoryId: 'public_transport',
  title: 'Free public transport for pensioners aged 65+',
  tldr: 'Portugal does not have a single national free travel scheme for everyone aged 65+: the benefit is paid for by the specific Câmara Municipal. In 2026, Lisboa residents aged 65+ can obtain a free passe navegante metropolitano; in Porto, a free Andante for residents aged 65+; in Cascais, free municipal transport for residents from age 60 through Viver Cascais. You need a NIF, an identity document, an address in the municipality and a transport card.',
  tags: ['transport', '65+', 'navegante', 'andante', 'câmara'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-free',
      title: 'What exactly is free in 2026',
      content: [
        { kind: 'paragraph', text: 'Free travel for older people in Portugal is not a nationwide pension benefit and not an automatic residence permit benefit. It is usually a municipal programme: the Câmara Municipal pays for a monthly pass for residents of its concelho.' },
        { kind: 'checklist', items: [
          'Lisboa: for residents of Câmara Municipal de Lisboa aged 65+ — a free passe navegante metropolitano, if the CML programme conditions are met.',
          'Porto: for residents of Município do Porto aged 65+ — a free Andante, arranged through municipal channels / Cartão Porto and the Andante system.',
          'Cascais: the MobiCascais / Viver Cascais programme gives free or discounted access to municipal transport; for older people the threshold is usually 60+, not 65+.',
          'Other municipalities: the rules differ. In Oeiras, Almada, Sintra, Loures, Braga, Coimbra and so on, you need to check your own Câmara Municipal website.',
          'The benefit is almost always linked to place of residence, not citizenship: foreigners with legal residence and an address in the municipality can usually apply.',
          'Free travel usually means a monthly passe loaded onto a card, not a free single journey without a card.'
        ] }
      ]
    },
    {
      id: 'lisboa',
      title: 'Lisboa: free navegante 65+',
      content: [
        { kind: 'paragraph', text: 'In Lisboa, the benefit is handled through Câmara Municipal de Lisboa. For people aged 65+, the key condition is being a Lisboa resident. In 2026, the programme covers the passe navegante metropolitano for 65+, meaning journeys across the Área Metropolitana de Lisboa network under the navegante rules.' },
        { kind: 'checklist', items: [
          'Age: 65 or older.',
          'Address: a Lisboa resident, usually confirmed by a tax address in Finanças or another document accepted by CML.',
          'Document: Cartão de Cidadão, residence permit or passport with proof of legal residence.',
          'NIF is almost always mandatory.',
          'You need a navegante personalizada card with a photograph.',
          'If you do not have a card: first apply for a navegante card at a Carris/Metro/CP/Fertagus/AML point or through the available online channels.',
          'After the benefit is approved, the monthly passe is loaded onto the card via Multibanco, an operator terminal or an app/sales point, if that channel is available.',
          'Check the validity period of the profile: the benefit may require periodic renewal of resident status.'
        ] },
        { kind: 'warning', text: 'Do not confuse Lisboa city with the Área Metropolitana de Lisboa. Living in Amadora, Oeiras, Loures or Almada does not make you a Lisboa resident for the CML programme, even if you travel to Lisboa every day. The application is made to the Câmara of the municipality where your address is located.' }
      ]
    },
    {
      id: 'porto-cascais',
      title: 'Porto and Cascais: similar logic, different cards',
      content: [
        { kind: 'substeps', items: [
          { id: 'porto', title: 'Porto: Andante 65+', content: [
            { kind: 'paragraph', text: 'In Porto, free travel for 65+ is linked to Município do Porto and the Andante system. You usually need to be a Porto resident and have a personalised Andante card or a municipal Cartão Porto, if the programme is processed through it.' },
            { kind: 'checklist', items: [
              'Check the Câmara Municipal do Porto website for the current name of the 65+ programme.',
              'Prepare your NIF, identity document, proof of address in Porto and a photo if a new card is required.',
              'If you already have an Andante personalizado, check whether the benefit can be linked to the existing card.',
              'If your address is in Vila Nova de Gaia, Matosinhos, Maia or Gondomar, that is another município; the Porto benefit may not apply.'
            ] }
          ] },
          { id: 'cascais', title: 'Cascais: Viver Cascais / MobiCascais 60+', content: [
            { kind: 'paragraph', text: 'Cascais is a separate example: benefits for municipal transport there often start at 60+, not 65+. Access is arranged through the Viver Cascais / MobiCascais ecosystem and is linked to residence, work or study in Cascais — the specific category affects the fare.' },
            { kind: 'checklist', items: [
              'Create or update your Viver Cascais profile.',
              'Confirm your address in the concelho de Cascais.',
              'Check whether free travel applies to MobiCascais buses and which routes are included.',
              'If you live in Lisboa but travel to Cascais, the Cascais resident benefit will usually not suit you.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Documents for the application',
      content: [
        { kind: 'paragraph', text: 'The exact list depends on the Câmara Municipal, but foreigners are usually asked for a standard set. It is better to have PDF copies and originals: at municipal balcões it is often easier to show everything at once than to argue about the format.' },
        { kind: 'checklist', items: [
          'Identity document: residence permit, Cartão de Cidadão of an EU citizen, passport + valid residence status.',
          'NIF.',
          'Proof of age: usually visible in the identity document.',
          'Proof of address in the relevant município: certidão de domicílio fiscal from Portal das Finanças, atestado de residência from Junta de Freguesia, contrato de arrendamento or a utility bill — whichever the specific Câmara accepts.',
          'Transport card number: navegante personalizada in Lisboa, Andante in Porto, Viver Cascais/MobiCascais in Cascais.',
          'Photograph, if a new personal card is being issued.',
          'Email and phone number for notifications.',
          'CMD or access to Portal das Finanças is useful if the application is submitted online.'
        ] },
        { kind: 'warning', text: 'An atestado de residência from Junta de Freguesia does not always replace the tax address. Some programmes specifically check the domicílio fiscal in Finanças. If you have moved, update your address in Finanças first, otherwise the Câmara may refuse the application.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply without going round in circles',
      content: [
        { kind: 'checklist', items: [
          '1. Identify your município by your residential address, not by the nearest metro station.',
          '2. Open the Câmara Municipal website and look for the Mobilidade, Transportes, Passe gratuito, 65+ or Apoio à mobilidade section.',
          '3. Check whether you need a transport card first. In Lisboa, without a navegante personalizada there is usually nowhere to load the benefit.',
          '4. Gather the documents and make good-quality PDFs/photos.',
          '5. Apply online if there is a form; otherwise book an appointment or go to a balcão da Câmara / Espaço Cidadão / Loja do Munícipe.',
          '6. Wait for confirmation. Do not buy an expensive monthly passe in advance if the response time is short, but bear in mind that approval is not always immediate.',
          '7. After approval, activate or load the passe onto the card through the operator channel: terminal, ticket office, Multibanco or app, if supported.',
          '8. Every month, check that the free passe has actually been loaded: the validator should accept the card without an error.'
        ] },
        { kind: 'paragraph', text: 'If a Metro/Carris/Andante cashier says “this is not with us”, they may be right: the transport operator services the card, but the right to free travel is confirmed by the Câmara Municipal. In a disputed situation, ask for written guidance on exactly where to arrange the municipal benefit.' }
      ]
    },
    {
      id: 'edge-cases',
      title: 'Common traps for expats',
      content: [
        { kind: 'checklist', items: [
          'You have just moved and have not yet updated your address in Finanças — change your domicílio fiscal first.',
          'You live in a Lisboa suburb but want the CML benefit — you need your own município programme, not Lisboa.',
          'You have a temporary D7/D8/D1 visa but no residence permit — some Câmara accept legal residence and an address, while others require a more stable document; check in advance.',
          'You have an ordinary anonymous card — benefits almost always require a personalised card with a name and photo.',
          'You are an old-age pensioner in another country but you are 64 — in Lisboa/Porto the age threshold is 65+, and foreign pension status does not help by itself.',
          'In Cascais the age logic may be softer — 60+, but only under Cascais rules and for the relevant categories.',
          'The benefit may not cover CP long-distance trains, Alfa Pendular, Intercidades, taxis, Bolt/Uber and tourist routes.',
          'Municipal programmes change budget conditions annually; check the Câmara website before renewal.'
        ] },
        { kind: 'warning', text: 'Do not give your card to another person. Personal navegante/Andante/MobiCascais cards are checked by inspectors; using someone else’s discounted card may lead to a fine and the benefit being blocked.' }
      ]
    }
  ],
  costs: [
    { label: 'Issuing a personal navegante / Lisboa Viva card', amountEURMin: 7, amountEURMax: 12, note: 'Usually paid once for issuing the card; urgent issue costs more. The passe itself for approved Lisboa 65+ users is €0.' },
    { label: 'Personal Andante card', amountEURMin: 6, amountEURMax: 12, note: 'The price depends on the type and urgency of issue; free travel applies to monthly travel after approval by Município do Porto.' },
    { label: 'Municipal 65+ / 60+ benefit', amountEUR: 0, note: 'If the Câmara has approved the application, monthly travel on the included network is paid for by the municipality.' }
  ],
  sources: [
    { title: 'Câmara Municipal de Lisboa — mobility and free passes', url: 'https://www.cm-lisboa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Metropolitano de Lisboa — cards, passes and navegante network', url: 'https://www.metrolisboa.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal do Porto — transport and mobility support', url: 'https://www.cm-porto.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Câmara Municipal de Cascais — MobiCascais and Viver Cascais', url: 'https://www.cascais.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
