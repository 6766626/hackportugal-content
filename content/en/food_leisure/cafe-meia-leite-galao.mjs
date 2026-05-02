export default {
  editorialVoice: 'hackportugal',
  id: 'cafe-meia-leite-galao',
  categoryId: 'food_leisure',
  title: 'Coffee culture: meia de leite, galão, bica, garoto, abatanado',
  tldr: 'In Portugal, coffee is ordered briefly and precisely: bica is espresso, garoto is espresso with a drop of milk, meia de leite is a cup that is “half coffee / half milk”, galão is a tall glass with plenty of milk, abatanado is the local version of an Americano, descafeinado is decaffeinated. In a normal café in 2026, expect €0.80–1.50 for basic options; in tourist areas, pastelaria with a view and specialty coffee shops it will be more expensive.',
  tags: ['café', 'coffee', 'bica', 'galão'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'basic-map',
      title: 'A drinks map without panic',
      content: [
        { kind: 'paragraph', text: 'A Portuguese café is not only a place, but also the espresso itself. If you simply say “um café”, you will almost always be brought a small espresso. In Lisbon it is often called bica, while in Porto and the north it is more often cimbalino.' },
        { kind: 'checklist', items: [
          'Bica / café — a small espresso, usually 25–35 ml.',
          'Café cheio — an espresso poured a little fuller than usual.',
          'Café curto / italiana — a shorter, stronger espresso.',
          'Garoto — an espresso with a small amount of milk or milk foam.',
          'Meia de leite — a cup of roughly half coffee, half hot milk.',
          'Galão — a tall glass: lots of milk, a little coffee; milder than meia de leite.',
          'Abatanado — a large black coffee, close to an Americano, but the taste depends on the machine and the café.',
          'Descafeinado — decaffeinated coffee; you can order it as a bica, meia de leite or galão.'
        ] }
      ]
    },
    {
      id: 'how-to-order',
      title: 'How to order in Portuguese ☕',
      content: [
        { kind: 'paragraph', text: 'The formula is simple: “Queria…” or “Um/uma…, por favor”. In an everyday café, this sounds more natural than long phrases in English. Payment is often after the drink at the counter; in places with table service, pay the waiter.' },
        { kind: 'checklist', items: [
          '“Uma bica, por favor.” — one espresso.',
          '“Um café cheio, se faz favor.” — an espresso poured a little fuller.',
          '“Um garoto, por favor.” — an espresso with a drop of milk.',
          '“Uma meia de leite.” — coffee with milk in a cup.',
          '“Um galão.” — a tall glass of milky coffee.',
          '“Um abatanado.” — a large black coffee.',
          '“Descafeinado, por favor.” — decaffeinated.',
          '“Com leite frio?” — if you want cold milk separately or instead of hot milk, specify “com leite frio”.'
        ] },
        { kind: 'warning', text: 'Latte, flat white and cappuccino are not available everywhere. In a normal pastelaria, it is safer to ask for meia de leite or galão. Cappuccino in tourist areas can mean anything: from coffee with foam to a drink with cinnamon and whipped cream.' }
      ]
    },
    {
      id: 'milk-difference',
      title: 'Meia de leite vs galão vs garoto',
      content: [
        { kind: 'paragraph', text: 'The main beginner’s mistake is to think meia de leite and galão are the same thing. Both have milk, but the size, vessel and balance are different.' },
        { kind: 'substeps', items: [
          { id: 'meia-de-leite', title: 'Meia de leite', content: [
            { kind: 'paragraph', text: 'Served in a cup. This is usually the more “coffee-forward” option: roughly half coffee and half hot milk. Good for breakfast with torrada, croissant or pastel de nata.' }
          ] },
          { id: 'galao', title: 'Galão', content: [
            { kind: 'paragraph', text: 'Served in a tall glass. There is noticeably more milk, and the coffee is milder. If you are used to lattes, start with galão.' }
          ] },
          { id: 'garoto', title: 'Garoto', content: [
            { kind: 'paragraph', text: 'This is not children’s coffee, despite the name. In practice, it is a small espresso softened with a drop of milk. Useful if bica feels too sharp and meia de leite is too large.' }
          ] }
        ] }
      ]
    },
    {
      id: 'prices-and-places',
      title: 'Prices in 2026 and where to drink',
      content: [
        { kind: 'paragraph', text: 'In an ordinary bairro café or pastelaria, basic coffee remains cheap by European standards. The range depends on the city, neighbourhood, whether you sit at a table and how touristy the place is.' },
        { kind: 'checklist', items: [
          'Bica / café at the counter: often around €0.80–1.10.',
          'Bica at a table or in central Lisbon/Porto: roughly €1.00–1.50.',
          'Garoto: usually close to the price of a bica or a little more expensive.',
          'Meia de leite: often €1.10–1.50 in a normal pastelaria.',
          'Galão: often €1.20–1.70, especially if served at a table.',
          'Abatanado: usually €1.00–1.60.',
          'Specialty coffee: espresso, filter or flat white can cost €2.00–4.50 and above.',
          'Pastel de nata + bica as a quick snack: expect €2.00–3.50 outside tourist traps.'
        ] },
        { kind: 'warning', text: 'The counter price and the table price may differ. A menu with prices must be available, but in small cafés you may sometimes need to ask for it: “Tem a lista de preços, por favor?”' }
      ]
    },
    {
      id: 'local-etiquette',
      title: 'Etiquette: counter, water, tips',
      content: [
        { kind: 'paragraph', text: 'Coffee in Portugal is a quick social ritual. Many people drink a bica in 2 minutes at the counter, without opening a laptop. Working for a long time on a computer is normal in specialty coffee shops, but not always appropriate in a small pastelaria during breakfast or lunch hours.' },
        { kind: 'checklist', items: [
          'If you want it quick and cheaper, drink at the balcão, meaning the counter.',
          'If you sit at a table, wait for the waiter or check at the counter what is customary in that café.',
          'Water with an espresso is not always given automatically; ask for “um copo de água”.',
          'Sugar is often placed in a sachet on the saucer; you do not need to say anything special if you do not want sugar.',
          'Plant-based milk is not available everywhere; ask “tem bebida vegetal?”.',
          'Tips for coffee are not mandatory; you can leave €0.10–0.50 in coins for pleasant service.',
          'MB WAY and cards are common, but small cafés may prefer cash for amounts under €5.',
          'If you order “para levar”, check first: not every old café operates as a takeaway.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Bica / café in a normal café', amountEURMin: 0.8, amountEURMax: 1.5, note: '2026 guide price; cheaper at the counter, more expensive in tourist areas.' },
    { label: 'Meia de leite', amountEURMin: 1.1, amountEURMax: 1.5, note: 'Typical price in a pastelaria outside premium and specialty places.' },
    { label: 'Galão', amountEURMin: 1.2, amountEURMax: 1.7, note: 'Tall glass, more milk; the price depends on seating and area.' },
    { label: 'Specialty coffee', amountEURMin: 2, amountEURMax: 4.5, note: 'Flat white, filter, single origin and similar options in modern coffee shops.' }
  ],
  sources: [
    { title: 'Visit Portugal — food and drink in Portugal', url: 'https://www.visitportugal.com', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'A Brasileira — historic Lisbon café and bica', url: 'https://www.abrasileira.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Delta Cafés — Portuguese coffee culture', url: 'https://www.deltacafes.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
