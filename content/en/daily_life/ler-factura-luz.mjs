export default {
  editorialVoice: 'hackportugal',
  id: 'ler-factura-luz',
  categoryId: 'daily_life',
  title: 'How to read your electricity bill: consumption, charges and calculation',
  tldr: 'An EDP, Galp, Iberdrola or Endesa bill has 3 main parts: potência contratada in kVA — a fixed capacity charge, consumo in kWh — actual or estimated energy, and taxes/taxas. In 2026 in mainland Portugal, bills usually include contribuição audiovisual RTP €2.85 + IVA 6%, taxa DGEG about €0.07/month + IVA 23%, IEC €0.001/kWh and IVA 6%/13%/23% as per the rules. The key is to check whether it says leitura real or estimativa: if the bill is estimated, submit your meter reading to E-REDES or your supplier.',
  tags: ['electricity', 'edp', 'bill', 'iva', 'kwh'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'structure',
      title: '1. Find the 5 key blocks on your factura da luz',
      content: [
        { kind: 'paragraph', text: 'Different suppliers have different layouts, but the logic is the same: the supplier sells energy, the network operator charges for network access and meter readings, and the state adds taxes and fees. The bill may be called factura, fatura or nota de débito.' },
        { kind: 'checklist', items: [
          'Dados do contrato — name, address, NIF, CPE and supplier',
          'CPE — the identifier of your supply point, needed when changing supplier',
          'Potência contratada — capacity in kVA: 3.45 / 4.6 / 5.75 / 6.9 kVA and above',
          'Ciclo horário — simples, bi-horário or tri-horário',
          'Consumo — number of kWh for the period',
          'Leitura real or estimativa — actual or estimated reading',
          'Tarifas de acesso às redes — network tariffs, sometimes embedded in the kWh price',
          'Taxas e impostos — IVA, contribuição audiovisual, DGEG, IEC',
          'Total a pagar and data limite de pagamento — amount due and payment deadline'
        ] },
        { kind: 'warning', text: 'Do not compare only “total a pagar” between months. Winter, air conditioning, a water heater, estimated readings and a change in potência contratada can cause a jump without any tariff change.' }
      ]
    },
    {
      id: 'potencia',
      title: '2. Potência contratada: what you pay for every day',
      content: [
        { kind: 'paragraph', text: 'Potência contratada is the maximum power you can use simultaneously. It is given in kVA and charged as a fixed component: €/day or €/month. Even if you are away and consume 0 kWh, this part remains.' },
        { kind: 'paragraph', text: 'Typical household levels: 3.45 kVA — a small flat without simultaneous load; 4.6 kVA — a common minimum for a flat with a water heater/oven; 5.75 or 6.9 kVA — if you have an electric hob, water heater, heaters, air conditioners or a family.' },
        { kind: 'checklist', items: [
          'If switching on a kettle + oven + water heater trips the quadro elétrico/ICP — the potência may be too low',
          'If nothing ever trips but you have 6.9 kVA in a small flat — you may be overpaying the fixed part',
          'Lowering potência saves you money every day, but does not reduce the kWh price',
          'Raising potência increases the fixed part of the bill',
          'Changing potência is usually done via your supplier, without an office visit',
          'For homes with a wallbox, heat pump or fully electric heating 6.9 kVA may be insufficient'
        ] },
        { kind: 'paragraph', text: 'IVA on the fixed part depends on the capacity and the region. For mainland Portugal in 2026, as a rule of thumb: under baixa tensão normal the reduced/intermediate rates apply to the portion of potência up to the set limits, and the higher portion is taxed at 23%. In practice, check the IVA line on your bill: the supplier must split the base tributável across the 6%, 13% and 23% rates.' }
      ]
    },
    {
      id: 'consumo',
      title: '3. Consumo kWh: actual consumption and time-of-use bands',
      content: [
        { kind: 'paragraph', text: 'Consumo is the difference between the previous and current meter readings. The unit is kWh. The formula is simple: kWh × price per kWh. If you have bi-horário or tri-horário, it is calculated separately for each time band.' },
        { kind: 'checklist', items: [
          'Simples — one price per kWh all day',
          'Bi-horário — usually vazio is cheaper, fora de vazio is more expensive',
          'Tri-horário — vazio, cheias and ponta',
          'Vazio is worthwhile if the washing machine, water heater, dishwasher or car charging actually run at night/at weekends',
          'If you consume almost everything in the evening during ponta/fora de vazio, bi-horário can be more expensive than simples',
          'The kWh price may include energy + tarifas de acesso às redes or be shown as separate lines',
          'In the liberalised market, the price depends on your contract, not only on ERSE'
        ] },
        { kind: 'paragraph', text: 'IVA on consumo in mainland Portugal: for potência up to 6.9 kVA the first 100 kWh per 30 days are taxed at 6%; for large families the limit may be 150 kWh per 30 days after status confirmation; consumption above the limit is taxed at 23%. If the billing period is not 30 days, the limit is prorated.' },
        { kind: 'warning', text: 'If your bill covers 60 days, the reduced-IVA limit for consumo is not “100 kWh”, but roughly 200 kWh. Therefore the IVA lines may look unexpected: part of the kWh at 6%, the rest at 23%.' }
      ]
    },
    {
      id: 'taxas',
      title: '4. Taxas and impostos: why extra lines are added on top of energy',
      content: [
        { kind: 'paragraph', text: 'A factura da luz includes charges that are not your energy price. They are mandatory and appear with all suppliers, although the line names may differ slightly.' },
        { kind: 'checklist', items: [
          'Contribuição audiovisual / CAV / RTP — €2.85 per month + IVA 6%, totalling about €3.02',
          'For a beneficiário da tarifa social de eletricidade CAV is usually reduced to €1.00 + IVA 6%',
          'With very low annual consumption up to 400 kWh CAV may not be charged',
          'Taxa de Exploração DGEG — about €0.07 per month + IVA 23%',
          'IEC / Imposto Especial de Consumo de Eletricidade — €0.001/kWh + IVA 23%',
          'IVA — applied not to one overall sum but to different bases: 6%, 13% and 23%',
          'Juros, penalizações or custos de cobrança appear only for late payments/special operations'
        ] },
        { kind: 'paragraph', text: 'A quick sense-check: if CAV in an ordinary flat is about €3.02 per month — that is normal. If the bill covers 2 months, the line will be about €6.04. DGEG per month is roughly €0.09 with IVA, so it is not the reason for a big bill.' },
        { kind: 'warning', text: 'On Madeira and in the Açores the IVA rates are regionally lower, so IVA amounts differ from mainland Portugal. The rule for reading the bill is the same, but the percentages in the tax lines will be different.' }
      ]
    },
    {
      id: 'leituras',
      title: '5. Leitura real vs estimativa: where errors most often happen',
      content: [
        { kind: 'paragraph', text: 'The most important line is the reading type. Leitura real means the bill is based on an actual meter reading: remotely, from E-REDES or submitted by you. Estimativa means a forecast-based calculation. After an estimativa the next bill may rise sharply or fall due to an acerto.' },
        { kind: 'checklist', items: [
          'Find the “Leituras” or “Detalhe de consumo” block on the bill',
          'Check the date of the previous and current leitura',
          'Look for the words real, comunicada pelo cliente, estimada or acerto',
          'Compare the current leitura with the meter at home',
          'If the meter is smart, telecontagem may still not work continuously',
          'Submit readings within the janela de comunicação stated on the bill',
          'You can submit a leitura via your supplier’s site/app, E-REDES, by phone or sometimes Multibanco',
          'Save a screenshot/confirmation of the reading submission',
          'If an inflated acerto arrives, request the detalhe de leituras and file a reclamação with the supplier'
        ] },
        { kind: 'paragraph', text: 'Formula for a manual check: current leitura − previous leitura = kWh. Then multiply kWh by your tariff’s price. For bi-horário, check vazio and fora de vazio separately: the meter usually has multiple registers.' },
        { kind: 'warning', text: 'Do not ignore estimativa for several months in a row. If the supplier underestimated, an acerto will arrive for the accumulated difference; if it overestimated — the money will be credited back, but the cash flow is still unpleasant.' }
      ]
    },
    {
      id: 'check',
      title: '6. A 10-minute mini-audit of your bill',
      content: [
        { kind: 'paragraph', text: 'Break down a bill line by line once and save the normal values for your flat. After that any odd month will stand out immediately.' },
        { kind: 'checklist', items: [
          'Make sure NIF, address and CPE are correct',
          'Compare potência contratada with real life: is it too high?',
          'Calculate kWh/day: total kWh ÷ number of days in the period',
          'Compare kWh/day with the previous month and the same season',
          'Ensure the leitura is not estimativa without a reason',
          'Check whether the ciclo horário or price per kWh has changed',
          'See whether there are any serviços adicionais: assistência técnica, seguros, manutenção',
          'Check CAV, DGEG and IEC: they should be small and predictable',
          'If the bill increased, first look at consumo/acerto, then the kWh price, then potência',
          'For a dispute first file a reclamação with the supplier, then use the Livro de Reclamações or ERSE/CNIACC'
        ] },
        { kind: 'paragraph', text: 'A practical rule of thumb: big spikes are usually not caused by DGEG or CAV, but by heating/water heater, air conditioning, estimated readings, an acerto after several months of estimativa, or the end of a promo tariff.' }
      ]
    }
  ],
  costs: [
    { label: 'Contribuição audiovisual RTP / CAV', amountEUR: 2.85, note: 'Per month excluding IVA; with IVA at 6% — about €3.02 in mainland Portugal' },
    { label: 'CAV for tarifa social', amountEUR: 1.00, note: 'Per month excluding IVA; with IVA at 6% — about €1.06' },
    { label: 'Taxa de Exploração DGEG', amountEUR: 0.07, note: 'About €0.07 per month excluding IVA; with IVA at 23% — about €0.09' },
    { label: 'IEC / Imposto Especial de Consumo de Eletricidade', amountEUR: 0.001, note: 'Per 1 kWh excluding IVA; applied to consumption' },
    { label: 'Submitting meter readings (leitura)', amountEUR: 0, note: 'Via E-REDES or your supplier it is usually free' }
  ],
  sources: [
    { title: 'ERSE: information for electricity consumers and bill breakdown', url: 'https://www.erse.pt/consumidores-de-energia/eletricidade/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE: tariffs, prices and IVA on electricity', url: 'https://www.erse.pt/atividade/regulacao/tarifas-e-precos-eletricidade/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DECO Proteste: how to read an electricity bill', url: 'https://www.deco.proteste.pt/casa-energia/eletricidade-gas', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'E-REDES: submitting meter readings', url: 'https://www.e-redes.pt/pt-pt/como-ler-o-contador', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
