export default {
  editorialVoice: 'hackportugal',
  id: 'tarifa-bihoraria-trihoraria',
  categoryId: 'daily_life',
  title: 'Bi-horária and Tri-horária tariffs: saving on electricity in peak/off-peak periods',
  tldr: 'In Portugal, for doméstico BTN, Simples, Bi-horária and Tri-horária are usually available. Bi-horária gives cheaper vazio hours at night and during part of the weekend; Tri-horária splits the day into vazio/cheias/ponta and is only worthwhile if you genuinely shift consumption. Switching is done through the comercializador and is usually free. In 2026, check the calculation in Simulador ERSE: it most often starts to make sense from around 2,500 kWh/year and with ≥30–40% of consumption in vazio.',
  tags: ['electricity', 'erse', 'tariffs', 'vazio'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what',
      title: 'What Simples, Bi-horária and Tri-horária mean',
      content: [
        { kind: 'paragraph', text: 'In the household BTN segment — baixa tensão normal, usually up to 20.7 kVA — the electricity price consists of potência contratada, kWh energy, network tariffs, IVA and small charges. Time-of-use specifically changes the kWh price by hour.' },
        { kind: 'checklist', items: [
          'Simples — one kWh price all day. The safest option if you do not manage your consumption.',
          'Bi-horária — two periods: vazio is cheaper, fora de vazio is more expensive. Suitable for a water heater, washing machine, dishwasher, EV, heat pump at night.',
          'Tri-horária — three periods: vazio is cheaper, cheias is medium, ponta is the most expensive. Worthwhile for disciplined households and those who avoid ponta.',
          'Ciclo diário — the same hour logic every day, easier for newcomers.',
          'Ciclo semanal — more vazio hours at weekends; often better for families who do laundry/cook/charge a car at weekends.',
          'The commercial price depends on your comercializador: EDP Comercial, Galp, Goldenergy, Iberdrola, Endesa, Repsol and others.',
          'ERSE does not sell electricity, but it regulates the market and provides the official Simulador ERSE for comparison.'
        ] }
      ]
    },
    {
      id: 'hours',
      title: 'Vazio / cheias / ponta hours in 2026',
      content: [
        { kind: 'paragraph', text: 'The exact schedules depend on the chosen ciclo and on mainland Portugal / regions. In the bill, look for “opção horária” and “ciclo”. Below is a typical grid for Portugal Continental used by suppliers; before signing, check the PDF ficha contratual.' },
        { kind: 'substeps', items: [
          { id: 'bi-diario', title: 'Bi-horária, ciclo diário', content: [
            { kind: 'checklist', items: [
              'Vazio: roughly 22:00–08:00 every day.',
              'Fora de vazio: roughly 08:00–22:00 every day.',
              'Advantage: easy to remember.',
              'Disadvantage: Sunday does not become entirely cheap.'
            ] }
          ] },
          { id: 'bi-semanal', title: 'Bi-horária, ciclo semanal', content: [
            { kind: 'checklist', items: [
              'Weekdays: vazio roughly 00:00–07:00.',
              'Saturday: vazio at night, part of the day and late evening; the middle of the day is split into periods.',
              'Sunday: usually vazio all day.',
              'Advantage: good if the main laundry, water heater, oven and EV charging are at the weekend.',
              'Disadvantage: on weekday evenings after work, the price is already fora de vazio.'
            ] }
          ] },
          { id: 'tri', title: 'Tri-horária', content: [
            { kind: 'checklist', items: [
              'Vazio — the cheapest hours, usually at night and a significant part of Sunday in ciclo semanal.',
              'Cheias — medium-price hours.',
              'Ponta — the most expensive hours in the morning and evening on weekdays; intervals differ in winter and summer.',
              'Tri-horária makes sense if you almost never run large loads in ponta.',
              'If you have electric heating at home in the evening, Tri-horária often makes the bill worse.'
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
        { kind: 'paragraph', text: 'A rough rule for 2026: Bi-horária more often starts to pay off at annual consumption from 2,500 kWh and if at least 30–40% of kWh can be shifted into vazio. For flats with 1–2 people, a gas hob and consumption of 1,200–1,800 kWh/year, the difference is often tiny.' },
        { kind: 'checklist', items: [
          'Worthwhile: an electric water heater with a timer at night.',
          'Worthwhile: charging an electric car at home after 00:00.',
          'Worthwhile: washing machine/tumble dryer/dishwasher with delayed start.',
          'Worthwhile: heat pump, if it is possible to heat water/the home at night without losing comfort.',
          'Worthwhile: the family actively uses Sunday for energy-intensive tasks with ciclo semanal.',
          'Questionable: you cook with electricity every evening at 19:00–21:00.',
          'Questionable: air conditioning/heating runs on weekday evenings.',
          'Questionable: you rent accommodation short term and do not control the appliances.'
        ] },
        { kind: 'paragraph', text: 'The most practical test: take the last 12 bills, find consumo kWh/ano and compare in Simulador ERSE. If you already have a smart meter, in the E-REDES área de cliente or with the supplier you can view the profile in 15/30/60-minute intervals and understand how much genuinely falls into vazio.' }
      ]
    },
    {
      id: 'switch',
      title: 'How to switch with the comercializador',
      content: [
        { kind: 'paragraph', text: 'Changing tariff is a change to the contract with the supplier, not a visit to Câmara Municipal. Usually the customer area, phone or a form on the comercializador website is enough. Changing supplier or tariff option on the liberalised market for doméstico is usually free, if you do not have a separate fidelização period for a service package.' },
        { kind: 'checklist', items: [
          'Find the CPE — Código de Ponto de Entrega — on an old bill.',
          'Check potência contratada: 3.45 / 4.6 / 5.75 / 6.9 kVA and so on; do not change it “just in case”, this is a separate fixed cost.',
          'Choose Simples, Bi-horária or Tri-horária.',
          'Choose ciclo diário or ciclo semanal, if the supplier offers a choice.',
          'Ask for the ficha contratual and preço kWh for each period: vazio, fora de vazio or cheias/ponta.',
          'Clarify whether there is fidelização, a package with gas/insurance/assistência and a penalty for early exit.',
          'Check that the contador supports multi-horário; modern smart meters usually do.',
          'After the first bill, check: opção horária, ciclo, kWh by period and the start date of the new tariff.'
        ] },
        { kind: 'warning', text: 'If a supplier promises “the cheapest tariff” but does not show the kWh price by period and potência contratada with IVA, the comparison is meaningless. Ask for values in €/kWh and €/dia.' }
      ]
    },
    {
      id: 'mistakes',
      title: 'Common expat mistakes',
      content: [
        { kind: 'checklist', items: [
          'Comparing only the vazio kWh price and ignoring expensive ponta/fora de vazio.',
          'Choosing Tri-horária while working from home and using the kitchen heavily in the evening.',
          'Not checking ciclo semanal: on weekdays, the cheap window may only be in the middle of the night.',
          'Setting potência contratada higher than needed: the fixed part increases every day, even if kWh use is low.',
          'Not using a water heater timer: it heats water during expensive hours and eats up the saving.',
          'Not looking at ERSE simulator and believing an advertised “desconto 20%”, which may apply to a limited part of the price.',
          'Forgetting that IVA on electricity depends on bill components and consumption limits; the final price is not equal to the bare €/kWh from advertising.',
          'When renting, not agreeing the change of titular do contrato with the landlord and continuing to pay under the old expensive contract.'
        ] },
        { kind: 'paragraph', text: 'Minimum setup for saving: enable delayed start on the washing machine and dishwasher, put a timer/smart plug on the water heater, move EV charging to the night, and in Tri-horária avoid the oven, tumble dryer and heaters during ponta.' }
      ]
    },
    {
      id: 'erse-check',
      title: 'How to calculate through Simulador ERSE',
      content: [
        { kind: 'paragraph', text: 'The official Simulador ERSE is the best way not to guess. It compares offers from the liberalised and regulated markets according to your profile, power and annual consumption.' },
        { kind: 'checklist', items: [
          'Open simulador.erse.pt.',
          'Choose eletricidade or eletricidade + gás, if you have a bundle.',
          'Enter potência contratada from the bill.',
          'Enter annual kWh consumption; if you have data by period, enter it separately.',
          'Compare Simples and Bi-horária with the same potência.',
          'Check Tri-horária separately if you have an EV, water heater or heat pump with a schedule.',
          'Look at the final annual cost, not just “desconto”.',
          'Save the result as a PDF/screenshot before calling the supplier.'
        ] },
        { kind: 'warning', text: 'Prices on the liberalised market change. Recheck the tariff at least once every 6 months or after an “alteração de preços” letter from the comercializador.' }
      ]
    }
  ],
  costs: [
    { label: 'Changing tariff option with the comercializador', amountEUR: 0, note: 'Usually free for doméstico; fidelização conditions may apply in packages with additional services.' },
    { label: 'Smart plug / timer for the water heater', amountEURMin: 10, amountEURMax: 35, note: 'Not mandatory, but often produces more savings than changing tariff itself without discipline.' },
    { label: 'Consumption level at which Bi-horária more often makes sense', amountEUR: 0, note: 'A guide, not in euros: from 2,500 kWh/year and ≥30–40% of consumption in vazio; check in Simulador ERSE.' }
  ],
  sources: [
    { title: 'ERSE — information for electricity consumers and tariff options', url: 'https://www.erse.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Simulador ERSE — official eletricidade/gás tariff simulator', url: 'https://www.simulador.erse.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'E-REDES — ciclos horários and meters for baixa tensão', url: 'https://www.e-redes.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
