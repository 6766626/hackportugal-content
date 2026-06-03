export default {
  editorialVoice: 'hackportugal',
  id: 'tarifa-bihoraria-trihoraria',
  categoryId: 'daily_life',
  title: 'Bi-horária and Tri-horária tariffs: saving on electricity in peak/off-peak periods',
  tldr: 'In Portugal, for doméstico BTN, Simples, Bi-horária and Tri-horária are usually available. Bi-horária gives cheaper vazio hours at night and during part of the weekend; Tri-horária divides the day into vazio/cheias/ponta and is only worthwhile if you genuinely shift consumption. Switching is done with the comercializador and is usually free. In 2026, check the calculation in Simulador ERSE: it most often starts to make sense from consumption of 2,500 kWh/year and ≥30–40% of consumption in vazio.',
  tags: ['electricity', 'erse', 'tariffs', 'vazio'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what',
      title: 'What Simples, Bi-horária and Tri-horária mean',
      content: [
        { kind: 'paragraph', text: 'In the household BTN segment — baixa tensão normal, usually up to 41.4 kVA — the electricity price consists of potência contratada, kWh energy, network tariffs, IVA and small charges. Time-of-use changes the kWh price by hour.' },
        { kind: 'checklist', items: [
          'Simples — one kWh price all day. The safest option if you do not manage your consumption.',
          'Bi-horária — two zones: vazio is cheaper, fora de vazio is more expensive. Suitable for a boiler, washing machine, dishwasher, EV, heat pump at night.',
          'Tri-horária — three zones: vazio is cheaper, cheias is medium, ponta is the most expensive. Worthwhile for disciplined households and those who avoid ponta.',
          'Ciclo diário — the same hour logic every day, easier for newcomers.',
          'Ciclo semanal — more vazio hours at weekends; often better for families that wash/cook/charge a car at weekends.',
          'The commercial price depends on your comercializador: EDP Comercial, Galp, Goldenergy, Iberdrola, Endesa, Repsol and others.',
          'ERSE does not sell electricity, but regulates the market and provides the official Simulador ERSE for comparison.'
        ] }
      ]
    },
    {
      id: 'hours',
      title: 'Vazio / cheias / ponta hours in 2026',
      content: [
        { kind: 'paragraph', text: 'Exact timetables depend on the selected ciclo and mainland Portugal / regions. In the bill, look for “opção horária” and “ciclo”. Below is a typical grid for Portugal Continental used by suppliers; before signing, check the ficha contratual PDF.' },
        { kind: 'substeps', items: [
          { id: 'bi-diario', title: 'Bi-horária, ciclo diário', content: [
            { kind: 'checklist', items: [
              'Vazio: approximately 22:00–08:00 every day.',
              'Fora de vazio: approximately 08:00–22:00 every day.',
              'Plus: easy to remember.',
              'Minus: Sunday does not become entirely cheap.'
            ] }
          ] },
          { id: 'bi-semanal', title: 'Bi-horária, ciclo semanal', content: [
            { kind: 'checklist', items: [
              'Weekdays: vazio approximately 00:00–07:00.',
              'Saturday: vazio at night, part of the day and late evening; the middle of the day is divided into zones.',
              'Sunday: usually vazio all day.',
              'Plus: good if the main laundry, boiler, oven and EV charging fall at weekends.',
              'Minus: on weekday evenings after work, the price is already fora de vazio.'
            ] }
          ] },
          { id: 'tri', title: 'Tri-horária', content: [
            { kind: 'checklist', items: [
              'Vazio — the cheapest hours, usually night-time and a significant part of Sunday in ciclo semanal.',
              'Cheias — medium-price hours.',
              'Ponta — the most expensive hours in the morning and evening on weekdays; intervals differ in winter and summer.',
              'Tri-horária makes sense if you almost never run major loads in ponta.',
              'If the home has electric heating in the evening, Tri-horária often worsens the bill.'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'Do not rely only on the phrase “bi-horária is cheaper”. Only vazio is cheaper. If your main consumption is 18:00–23:00 on weekdays, the bill may increase.' }
      ]
    },
    {
      id: 'when-worth',
      title: 'When it is genuinely worthwhile',
      content: [
        { kind: 'paragraph', text: 'A rough rule for 2026: Bi-horária more often starts to pay off at annual consumption from 2,500 kWh and if at least 30–40% of kWh can be shifted to vazio. For flats with 1–2 people, a gas hob and consumption of 1,200–1,800 kWh/year, the difference is often tiny.' },
        { kind: 'checklist', items: [
          'Worthwhile: electric boiler with a timer at night.',
          'Worthwhile: charging an electric car at home after 00:00.',
          'Worthwhile: washing machine/tumble dryer/dishwasher with delayed start.',
          'Worthwhile: heat pump, if you can heat water/the home at night without losing comfort.',
          'Worthwhile: the family actively uses Sunday for energy-intensive tasks with ciclo semanal.',
          'Questionable: you cook with electricity every evening at 19:00–21:00.',
          'Questionable: air conditioning/heating runs in the evening on weekdays.',
          'Questionable: you rent accommodation short term and do not control the appliances.'
        ] },
        { kind: 'paragraph', text: 'The most practical test: take the last 12 bills, find consumo kWh/ano and compare in Simulador ERSE. If you already have a smart meter, in the E-REDES área de cliente or with the supplier you can view the profile by 15/30/60-minute intervals and understand how much actually falls into vazio.' }
      ]
    },
    {
      id: 'switch',
      title: 'How to switch with the comercializador',
      content: [
        { kind: 'paragraph', text: 'Switching tariff is a change to the contract with the supplier, not a trip to Câmara Municipal. Usually, the customer account, phone or a form on the comercializador website is enough. Changing supplier or tariff option on the free market for doméstico is usually free if you do not have a separate fidelização period for a services package.' },
        { kind: 'checklist', items: [
          'Find the CPE — Código de Ponto de Entrega — on an old bill.',
          'Check potência contratada: 3.45 / 4.6 / 5.75 / 6.9 kVA etc.; do not change it “just in case”, as this is a separate fixed cost.',
          'Choose Simples, Bi-horária or Tri-horária.',
          'Choose ciclo diário or ciclo semanal if the supplier offers a choice.',
          'Ask for the ficha contratual and preço kWh for each zone: vazio, fora de vazio or cheias/ponta.',
          'Clarify whether there is fidelização, a package with gas/insurance/assistência and a penalty for early exit.',
          'Check that the contador supports multi-horário; modern smart meters usually do.',
          'After the first bill, check: opção horária, ciclo, kWh by zone and the start date of the new tariff.'
        ] },
        { kind: 'warning', text: 'If the supplier promises the “cheapest tariff” but does not show the kWh price by zone and potência contratada with IVA, the comparison is meaningless. Ask for the values in €/kWh and €/dia.' }
      ]
    },
    {
      id: 'mistakes',
      title: 'Typical expat mistakes',
      content: [
        { kind: 'checklist', items: [
          'They compare only the vazio kWh price and ignore expensive ponta/fora de vazio.',
          'They take Tri-horária while working from home and cooking actively in the evening.',
          'They do not check ciclo semanal: on weekdays the cheap window may be only in the middle of the night.',
          'They set potência contratada higher than needed: the fixed part increases every day, even if kWh is low.',
          'They do not use a boiler timer: it heats water during expensive hours and eats up the savings.',
          'They do not look at the ERSE simulator and believe the advertised “desconto 20%”, which may apply to a limited part of the price.',
          'They forget that IVA on electricity depends on bill components and consumption limits; the final price is not equal to the bare €/kWh from the advert.',
          'When renting, they do not agree the change of titular do contrato with the landlord and continue paying under the old expensive contract.'
        ] },
        { kind: 'paragraph', text: 'Minimum setup for savings: turn on delayed start on the washing machine and dishwasher, put a timer/smart plug on the boiler, shift EV charging to night, and in Tri-horária avoid the oven, tumble dryer and heaters in ponta.' }
      ]
    },
    {
      id: 'erse-check',
      title: 'How to calculate via Simulador ERSE',
      content: [
        { kind: 'paragraph', text: 'The official Simulador ERSE is the best way not to guess. It compares free and regulated market offers based on your profile, power and annual consumption.' },
        { kind: 'checklist', items: [
          'Open simuladorprecos.erse.pt.',
          'Select eletricidade or eletricidade + gás if you have a bundle.',
          'Enter potência contratada from the bill.',
          'Enter annual kWh consumption; if you have zone data, enter it separately.',
          'Compare Simples and Bi-horária with the same potência.',
          'Check Tri-horária separately if you have an EV, boiler or heat pump with a schedule.',
          'Look at the total annual cost, not only “desconto”.',
          'Save the result as a PDF/screenshot before calling the supplier.'
        ] },
        { kind: 'warning', text: 'Prices on the free market change. Recheck the tariff at least once every 6 months or after an “alteração de preços” letter from the comercializador.' }
      ]
    }
  ],
  costs: [
    { label: 'Changing the tariff option with the comercializador', amountEUR: 0, note: 'Usually free for doméstico; fidelização conditions may apply in packages with additional services.' },
    { label: 'Smart plug / timer for the boiler', amountEURMin: 10, amountEURMax: 35, note: 'Not mandatory, but often delivers more savings than the tariff change itself without discipline.' },
    { label: 'Consumption at which Bi-horária more often makes sense', amountEUR: 0, note: 'Guideline not in euros: from 2,500 kWh/year and ≥30–40% of consumption in vazio; check in Simulador ERSE.' }
  ],
  sources: [
    { title: 'ERSE — information for electricity consumers and tariff options', url: 'https://www.erse.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Simulador ERSE — official eletricidade/gás tariff simulator', url: 'https://simuladorprecos.erse.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'E-REDES — ciclos horários and meters for baixa tensão', url: 'https://www.e-redes.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
