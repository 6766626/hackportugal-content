export default {
  editorialVoice: 'hackportugal',
  id: 'ler-factura-luz',
  categoryId: 'daily_life',
  title: 'How to read an electricity bill: consumo, taxas and calculation',
  tldr: 'An EDP, Galp, Iberdrola or Endesa bill consists of 3 main parts: potência contratada in kVA — a fixed charge for power capacity, consumo in kWh — actual or estimated energy, and taxes/taxas. In 2026 in mainland Portugal, the bill usually includes contribuição audiovisual RTP €2.85 + IVA 6%, taxa DGEG around €0.07/month + IVA 23%, IEC €0.001/kWh and IVA 6%/13%/23% according to the rules. The key point is to check whether it says leitura real or estimativa: if the bill is estimated, submit your readings to E-REDES or to the supplier.',
  tags: ['electricity', 'edp', 'bill', 'iva', 'kwh'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'structure',
      title: '1. Find the 5 key sections in the factura da luz',
      content: [
        { kind: 'paragraph', text: 'Different suppliers use different designs, but the logic is the same: the supplier sells energy, the network operator calculates network access and readings, and the state adds taxes and charges. The bill may be called factura, fatura or nota de débito.' },
        { kind: 'checklist', items: [
          'Dados do contrato — name, address, NIF, CPE and supplier',
          'CPE — identifier of the consumption point, needed when changing supplier',
          'Potência contratada — power capacity in kVA: 3.45 / 4.6 / 5.75 / 6.9 kVA and above',
          'Ciclo horário — simples, bi-horário or tri-horário',
          'Consumo — number of kWh for the period',
          'Leitura real or estimativa — real or estimated reading',
          'Tarifas de acesso às redes — network tariffs, sometimes built into the kWh price',
          'Taxas e impostos — IVA, contribuição audiovisual, DGEG, IEC',
          'Total a pagar and data limite de pagamento — amount and payment deadline'
        ] },
        { kind: 'warning', text: 'Do not compare only “total a pagar” between months. Winter, air conditioning, a water heater, estimated readings and a change in potência contratada can cause a jump without any change in tariff.' }
      ]
    },
    {
      id: 'potencia',
      title: '2. Potência contratada: what you pay for every day',
      content: [
        { kind: 'paragraph', text: 'Potência contratada is the maximum power capacity that can be used at the same time. It is shown in kVA and charged as the fixed part: €/dia or €/mês. Even if you have gone away and used 0 kWh, this part remains.' },
        { kind: 'paragraph', text: 'Typical household levels: 3.45 kVA — small flat without simultaneous load; 4.6 kVA — a common minimum for a flat with a water heater/oven; 5.75 or 6.9 kVA — if there is an electric hob, water heater, heaters, air conditioners or a family.' },
        { kind: 'checklist', items: [
          'If switching on the kettle + oven + water heater trips the quadro elétrico/ICP — the potência may be low',
          'If nothing ever trips, but you have 6.9 kVA in a small flat — you may be overpaying for the fixed part',
          'Reducing potência saves money every day, but does not reduce the kWh price',
          'Increasing potência increases the fixed part of the bill',
          'Changing potência is usually done through the supplier, without visiting an office',
          'For homes with a wallbox, heat pump or fully electric heating, 6.9 kVA may be too little'
        ] },
        { kind: 'paragraph', text: 'IVA on the fixed part depends on the power capacity and region. For mainland Portugal in 2026, the general guide is this: for baixa tensão normal, reduced/intermediate rates apply to the portion of potência up to the established limits, while the higher portion is taxed at 23%. In practice, look at the IVA line in the bill: the supplier must split the base tributável by the 6%, 13% and 23% rates.' }
      ]
    },
    {
      id: 'consumo',
      title: '3. Consumo kWh: real consumption and tariff periods',
      content: [
        { kind: 'paragraph', text: 'Consumo is the difference between the previous and current meter reading. The unit is kWh. The formula is simple: kWh × preço kWh. If you have bi-horário or tri-horário, the calculation is made separately by time period.' },
        { kind: 'checklist', items: [
          'Simples — one price per kWh all day',
          'Bi-horário — usually vazio is cheaper, fora de vazio is more expensive',
          'Tri-horário — vazio, cheias and ponta',
          'Vazio pays off if the washing machine, water heater, dishwasher or car charging really operates at night/at weekends',
          'If you consume almost everything in the evening during ponta/fora de vazio, bi-horário may be more expensive than simples',
          'The kWh price may include energy + tarifas de acesso às redes or be shown as separate lines',
          'On the liberalised market, the price depends on the contract, not only on ERSE'
        ] },
        { kind: 'paragraph', text: 'IVA on consumo in mainland Portugal: for power capacity up to 6.9 kVA, the first 100 kWh over 30 days is taxed at 6%; for large families, the limit may be 150 kWh over 30 days after status confirmation; consumption above the limit is taxed at 23%. If the billing period is not 30 days, the limit is recalculated proportionally.' },
        { kind: 'warning', text: 'If the bill covers a 60-day period, the limit for reduced IVA on consumo is not “100 kWh”, but about 200 kWh. That is why the IVA lines may look unexpected: part of the kWh at 6%, the remainder at 23%.' }
      ]
    },
    {
      id: 'taxas',
      title: '4. Taxas and impostos: why extra lines are added to energy',
      content: [
        { kind: 'paragraph', text: 'A factura da luz includes charges that are not your electricity price. They are mandatory and appear with all suppliers, although line names may differ slightly.' },
        { kind: 'checklist', items: [
          'Contribuição audiovisual / CAV / RTP — €2.85 per month + IVA 6%, total around €3.02',
          'For a beneficiário da tarifa social de eletricidade, CAV is usually reduced to €1.00 + IVA 6%',
          'With very low annual consumption up to 400 kWh, CAV may not be charged',
          'Taxa de Exploração DGEG — around €0.07 per month + IVA 23%',
          'IEC / Imposto Especial de Consumo de Eletricidade — €0.001/kWh + IVA 23%',
          'IVA — applied not to one overall amount, but to different bases: 6%, 13% and 23%',
          'Juros, penalizações or custos de cobrança appear only for late payments/special operations'
        ] },
        { kind: 'paragraph', text: 'A quick check example: if CAV in an ordinary flat is around €3.02 for a month — this is normal. If the bill is for 2 months, the line will be around €6.04. DGEG for a month is about €0.09 with IVA, so it is not the reason for a large bill.' },
        { kind: 'warning', text: 'In Madeira and the Açores, IVA rates are lower regional rates, so IVA amounts differ from mainland Portugal. The way to read the bill is the same, but the percentages in the tax lines will be different.' }
      ]
    },
    {
      id: 'leituras',
      title: '5. Leitura real vs estimativa: where the error most often is',
      content: [
        { kind: 'paragraph', text: 'The most important line is the type of reading. Leitura real means the bill is based on a real meter reading: remotely, from E-REDES, or submitted by you. Estimativa means a forecast-based calculation. After an estimativa, the next bill may rise sharply or become lower because of an acerto.' },
        { kind: 'checklist', items: [
          'Find the “Leituras” or “Detalhe de consumo” section in the bill',
          'Check the date of the previous and current leitura',
          'Look for the words real, comunicada pelo cliente, estimada or acerto',
          'Compare the current leitura with the meter at home',
          'If the meter is smart, telecontagem may still not work continuously',
          'Submit readings during the janela de comunicação shown on the bill',
          'You can submit a leitura through the supplier’s website/app, E-REDES, by phone or sometimes via Multibanco',
          'Save a screenshot/confirmation of the reading submission',
          'If an inflated acerto arrives, request detalhe de leituras and submit a reclamação to the supplier'
        ] },
        { kind: 'paragraph', text: 'Formula for a manual check: current leitura − previous leitura = kWh. Then kWh are multiplied by your tariff price. For bi-horário, check vazio and fora de vazio separately: the meter usually has several registers.' },
        { kind: 'warning', text: 'Do not ignore estimativa for several months in a row. If the supplier underestimated usage, an acerto will then arrive for the accumulated difference; if it overestimated, the money will be returned as a credit, but the cash flow is still unpleasant.' }
      ]
    },
    {
      id: 'check',
      title: '6. A 10-minute mini-audit of the bill',
      content: [
        { kind: 'paragraph', text: 'Go through the bill line by line once and save the normal values for your flat. After that, any strange month will be immediately visible.' },
        { kind: 'checklist', items: [
          'Check that the NIF, address and CPE are correct',
          'Compare potência contratada with real life: is it too high',
          'Calculate kWh/day: total kWh ÷ number of days in the period',
          'Compare kWh/day with last month and a similar season',
          'Make sure the leitura is not estimativa without a reason',
          'Check whether the ciclo horário or preço kWh has changed',
          'See whether there are serviços adicionais: assistência técnica, seguros, manutenção',
          'Check CAV, DGEG and IEC: they should be small and predictable',
          'If the bill has increased, look first at consumo/acerto, then preço kWh, then potência',
          'For a dispute, first submit a reclamação to the supplier, then use Livro de Reclamações or ERSE/CNIACC'
        ] },
        { kind: 'paragraph', text: 'Practical guide: a big jump is usually caused not by DGEG or CAV, but by heating/a water heater, air conditioning, estimated readings, an acerto after several months of estimativa or the end of a promotional tariff.' }
      ]
    }
  ],
  costs: [
    { label: 'Contribuição audiovisual RTP / CAV', amountEUR: 2.85, note: 'Per month excluding IVA; with IVA 6% — around €3.02 in mainland Portugal' },
    { label: 'CAV for tarifa social', amountEUR: 1.00, note: 'Per month excluding IVA; with IVA 6% — around €1.06' },
    { label: 'Taxa de Exploração DGEG', amountEUR: 0.07, note: 'Around €0.07 per month excluding IVA; with IVA 23% — around €0.09' },
    { label: 'IEC / Imposto Especial de Consumo de Eletricidade', amountEUR: 0.001, note: 'Per 1 kWh excluding IVA; applied to consumption' },
    { label: 'Submitting leitura readings', amountEUR: 0, note: 'Usually free via E-REDES or the supplier' }
  ],
  sources: [
    { title: 'ERSE: information for electricity consumers and bill breakdown', url: 'https://www.erse.pt/consumidores-de-energia/eletricidade/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE: electricity tariffs, prices and IVA', url: 'https://www.erse.pt/atividade/regulacao/tarifas-e-precos-eletricidade/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DECO Proteste: how to read an electricity bill', url: 'https://www.deco.proteste.pt/casa-energia/eletricidade-gas', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'E-REDES: submitting meter readings', url: 'https://www.e-redes.pt/pt-pt/como-ler-o-contador', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
