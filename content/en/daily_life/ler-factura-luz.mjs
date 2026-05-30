export default {
  editorialVoice: 'hackportugal',
  id: 'ler-factura-luz',
  categoryId: 'daily_life',
  title: 'How to read an electricity bill: consumo, taxas and calculation',
  tldr: 'An EDP, Galp, Iberdrola or Endesa bill consists of 3 main parts: potência contratada in kVA — the fixed charge for capacity, consumo in kWh — actual or estimated energy, and taxes/taxas. In 2026, in mainland Portugal, the bill usually includes contribuição audiovisual RTP €2.85 + IVA 6%, taxa DGEG around €0.07/month + IVA 23%, IEC €0.001/kWh and IVA 6%/13%/23% according to the rules. The main thing is to check whether it says leitura real or estimativa: if the bill is estimated, submit readings to E-REDES or to the supplier.',
  tags: ['electricity', 'edp', 'bill', 'iva', 'kwh'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'structure',
      title: '1. Find the 5 key blocks in the factura da luz',
      content: [
        { kind: 'paragraph', text: 'Different suppliers have different designs, but the logic is the same: the supplier sells energy, the network operator calculates network access and readings, and the state adds taxes and charges. The bill may be called factura, fatura or nota de débito.' },
        { kind: 'checklist', items: [
          'Dados do contrato — name, address, NIF, CPE and supplier',
          'CPE — identifier of the consumption point, needed when changing supplier',
          'Potência contratada — capacity in kVA: 3.45 / 4.6 / 5.75 / 6.9 kVA and above',
          'Ciclo horário — simples, bi-horário or tri-horário',
          'Consumo — number of kWh for the period',
          'Leitura real or estimativa — actual or estimated reading',
          'Tarifas de acesso às redes — network tariffs, sometimes built into the kWh price',
          'Taxas e impostos — IVA, contribuição audiovisual, DGEG, IEC',
          'Total a pagar and data limite de pagamento — amount and payment deadline'
        ] },
        { kind: 'warning', text: 'Do not compare only the “total a pagar” between months. Winter, air conditioning, a water heater, estimated readings and a change in potência contratada can cause a jump without any tariff change.' }
      ]
    },
    {
      id: 'potencia',
      title: '2. Potência contratada: what you pay for every day',
      content: [
        { kind: 'paragraph', text: 'Potência contratada is the maximum capacity that can be used at the same time. It is shown in kVA and charged as the fixed part: €/day or €/month. Even if you have been away and consumed 0 kWh, this part remains.' },
        { kind: 'paragraph', text: 'Typical household levels: 3.45 kVA — a small flat without simultaneous load; 4.6 kVA — a common minimum for a flat with a water heater/oven; 5.75 or 6.9 kVA — if there is an electric hob, water heater, heaters, air conditioners or a family.' },
        { kind: 'checklist', items: [
          'If switching on the kettle + oven + water heater trips the quadro elétrico/ICP — the potência may be low',
          'If nothing ever trips, but the flat has 6.9 kVA in a small apartment — you may be overpaying for the fixed part',
          'Reducing potência saves money every day, but does not reduce the kWh price',
          'Increasing potência raises the fixed part of the bill',
          'Changing potência is usually done through the supplier, without visiting an office',
          'For homes with a wallbox, heat pump or fully electric heating, 6.9 kVA may be too little'
        ] },
        { kind: 'paragraph', text: 'IVA on the fixed part depends on capacity and region. For mainland Portugal in 2026, the general guide is this: for baixa tensão normal, reduced/intermediate rates apply to the portion of potência up to the established limits, and the higher portion is taxed at 23%.\n\nIn practice, look at the IVA line on the bill: the supplier must break down the base tributável by the 6%, 13% and 23% rates.' }
      ]
    },
    {
      id: 'consumo',
      title: '3. Consumo kWh: actual consumption and tariff periods',
      content: [
        { kind: 'paragraph', text: 'Consumo is the difference between the previous and current meter reading. The unit is kWh. The formula is simple: kWh × preço kWh. If you have bi-horário or tri-horário, the calculation is made separately by time periods.' },
        { kind: 'checklist', items: [
          'Simples — one kWh price all day',
          'Bi-horário — vazio is usually cheaper, fora de vazio more expensive',
          'Tri-horário — vazio, cheias and ponta',
          'Vazio is worthwhile if the washing machine, water heater, dishwasher or car charging really runs at night/at weekends',
          'If you consume almost everything in the evening in ponta/fora de vazio, bi-horário may be more expensive than simples',
          'The kWh price may include energy + tarifas de acesso às redes or be shown as separate lines',
          'In the liberalised market, the price depends on the contract, not only on ERSE'
        ] },
        { kind: 'paragraph', text: 'IVA on consumo in mainland Portugal: since 1 January 2025, under Lei n.º 38/2024, for capacity up to 6.9 kVA the first 200 kWh over 30 days are taxed at 6%; for large families (5+ members), the limit is 300 kWh over 30 days after status confirmation; consumption above the limit is taxed at 23%. If the billing period is not 30 days, the limit is recalculated proportionally.' },
        { kind: 'warning', text: 'If the bill period is 60 days, the limit for reduced IVA on consumo is not “200 kWh”, but roughly 400 kWh. That is why the IVA lines may look unexpected: some kWh at 6%, the remainder at 23%.' }
      ]
    },
    {
      id: 'taxas',
      title: '4. Taxas and impostos: why more lines are added to the energy',
      content: [
        { kind: 'paragraph', text: 'A factura da luz contains payments that are not your electricity price. They are mandatory and appear with all suppliers, although the line names may differ slightly.' },
        { kind: 'checklist', items: [
          'Contribuição audiovisual / CAV / RTP — €2.85 per month + IVA 6%, total around €3.02',
          'For a beneficiário da tarifa social de eletricidade, CAV is usually reduced to €1.00 + IVA 6%',
          'With very low annual consumption up to 400 kWh, CAV may not be charged',
          'Taxa de Exploração DGEG — around €0.07 per month + IVA 23%',
          'IEC / Imposto Especial de Consumo de Eletricidade — €0.001/kWh + IVA 23%',
          'IVA — applied not to one total amount, but to different bases: 6%, 13% and 23%',
          'Juros, penalizações or custos de cobrança appear only in cases of late payment/special operations'
        ] },
        { kind: 'paragraph', text: 'Quick check example: if CAV in a normal flat is around €3.02 for a month, that is normal. If the bill is for 2 months, the line will be around €6.04. DGEG for a month is approximately €0.09 including IVA, so it is not the reason for a large bill.' },
        { kind: 'warning', text: 'In Madeira and the Açores, IVA rates are lower regional rates, so the IVA amounts differ from mainland Portugal. The method for reading the bill is the same, but the percentages in the tax lines will be different.' }
      ]
    },
    {
      id: 'leituras',
      title: '5. Leitura real vs estimativa: where mistakes happen most often',
      content: [
        { kind: 'paragraph', text: 'The most important line is the type of reading. Leitura real means the bill is based on an actual meter reading: remotely, from E-REDES or submitted by you. Estimativa means calculation by forecast. After an estimativa, the next bill may rise sharply or become lower because of an acerto.' },
        { kind: 'checklist', items: [
          'Find the “Leituras” or “Detalhe de consumo” block on the bill',
          'Check the date of the previous and current leitura',
          'Look for the words real, comunicada pelo cliente, estimada or acerto',
          'Compare the current leitura with the meter at home',
          'If the meter is smart, telecontagem may still not work continuously',
          'Submit readings during the janela de comunicação shown on the bill',
          'You can submit a leitura through the supplier’s website/app, E-REDES, phone or sometimes Multibanco',
          'Save a screenshot/confirmation of the reading submission',
          'If an excessive acerto arrives, request the detalhe de leituras and make a reclamação to the supplier'
        ] },
        { kind: 'paragraph', text: 'Formula for a manual check: current leitura − previous leitura = kWh. Then multiply kWh by the price of your tariff. For bi-horário, check vazio and fora de vazio separately: the meter usually has several registers.' },
        { kind: 'warning', text: 'Do not ignore estimativa for several months in a row. If the supplier underestimated the forecast, an acerto for the accumulated difference will then arrive; if it overestimated, the money will come back as a credit, but the cash flow is still unpleasant.' }
      ]
    },
    {
      id: 'check',
      title: '6. A 10-minute mini-audit of the bill',
      content: [
        { kind: 'paragraph', text: 'Go through the bill line by line once and save the normal values for your flat. After that, any strange month will be visible immediately.' },
        { kind: 'checklist', items: [
          'Check that the NIF, address and CPE are correct',
          'Compare potência contratada with real life: is it too high',
          'Calculate kWh/day: total kWh ÷ number of days in the period',
          'Compare kWh/day with last month and with the same season',
          'Make sure the leitura is not estimativa without reason',
          'Check whether the ciclo horário or preço kWh has changed',
          'See whether there are serviços adicionais: assistência técnica, seguros, manutenção',
          'Check CAV, DGEG and IEC: they should be small and predictable',
          'If the bill has increased, look first at consumo/acerto, then preço kWh, then potência',
          'For a dispute, first make a reclamação to the supplier, then use Livro de Reclamações or ERSE/CNIACC'
        ] },
        { kind: 'paragraph', text: 'Practical rule of thumb: a large jump is usually caused not by DGEG or CAV, but by heating/a water heater, air conditioning, estimated readings, an acerto after several months of estimativa or the end of a promotional tariff.' }
      ]
    }
  ],
  costs: [
    { label: 'Contribuição audiovisual RTP / CAV', amountEUR: 2.85, note: 'Per month excluding IVA; with IVA 6% — around €3.02 in mainland Portugal' },
    { label: 'CAV for tarifa social', amountEUR: 1.00, note: 'Per month excluding IVA; with IVA 6% — around €1.06' },
    { label: 'Taxa de Exploração DGEG', amountEUR: 0.07, note: 'Around €0.07 per month excluding IVA; with IVA 23% — around €0.09' },
    { label: 'IEC / Imposto Especial de Consumo de Eletricidade', amountEUR: 0.001, note: 'Per 1 kWh excluding IVA; applied to consumption' },
    { label: 'Submitting a leitura reading', amountEUR: 0, note: 'Usually free through E-REDES or the supplier' }
  ],
  sources: [
    { title: 'ERSE: information for electricity consumers and bill breakdown', url: 'https://www.erse.pt/consumidores-de-energia/eletricidade/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSE: electricity tariffs, prices and IVA', url: 'https://www.erse.pt/atividade/regulacao/tarifas-e-precos-eletricidade/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DECO Proteste: how to read an electricity bill', url: 'https://www.deco.proteste.pt/casa-energia/eletricidade-gas', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'E-REDES: submitting meter readings', url: 'https://www.e-redes.pt/pt-pt/como-ler-o-contador', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ERSExplica: application of IVA on the electricity bill (200/300 kWh, Lei n.º 38/2024)', url: 'https://www.erse.pt/media/tcsfm4n2/ersexplica_iva-fatura_2025.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
