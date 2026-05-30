export default {
  editorialVoice: 'hackportugal',
  id: 'mudar-comercializador-luz-gas',
  categoryId: 'daily_life',
  title: 'Changing electricity and gas supplier: free and without disconnection',
  tldr: 'In Portugal, changing comercializador de eletricidade/gás is free: the new supplier starts the process itself, and the old contract is closed without a technician visit and without cutting off electricity/gas. Compare tariffs on the official simuladorprecos.erse.pt using CPE/CUI, consumo anual and potência contratada. Main players: EDP, Galp, Endesa, Iberdrola, Goldenergy, Coopérnico, Plenitude. For distance contracts, there is a 14-day cancellation right.',
  tags: ['electricity', 'gas', 'erse', 'bills'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-changes',
      title: 'What actually changes',
      content: [
        { kind: 'paragraph', text: 'In Portugal, the network and the supplier are different things. The cables, meter and emergency service remain with the network operator, while you only change the comercializador: the company that issues the bill and sells the tariff.' },
        { kind: 'paragraph', text: 'That is why changing supplier usually does not require a technician visit, meter replacement or disconnection. The new supplier makes an administrative request, and the old supplier is notified automatically.' },
        { kind: 'checklist', items: [
          'Electricity: you need the CPE — the supply point code, shown on the bill',
          'Gas: you need the CUI — the gas supply point code, shown on the bill',
          'NIF of the contract holder',
          'Supply address',
          'IBAN, if you want débito direto',
          'Última leitura / current meter readings — useful, but not always mandatory',
          'Understanding your tariff: simples, bi-horário or tri-horário',
          'Understanding potência contratada: for example 3.45 kVA, 4.6 kVA, 6.9 kVA'
        ] }
      ]
    },
    {
      id: 'compare',
      title: 'Compare tariffs on Simulador ERSE',
      content: [
        { kind: 'paragraph', text: 'The official comparison tool is simuladorprecos.erse.pt. It is not an advertising aggregator: it is run by ERSE, the energy regulator. Enter the details from your latest bill to get a calculation based not on an “average”, but on your own consumption profile.' },
        { kind: 'checklist', items: [
          'Open simuladorprecos.erse.pt',
          'Choose eletricidade, gás natural or dual',
          'Enter distrito/concelho and customer type: doméstico',
          'Enter consumo anual in kWh — take it from the annual total on the bill',
          'For electricity, enter potência contratada',
          'Enter the tariff option: simples / bi-horário / tri-horário',
          'Check whether discounts for débito direto and fatura eletrónica are included',
          'Look at the price with IVA and network tariffs, not just the “% discount”',
          'Compare termination conditions and the fixed-price period'
        ] },
        { kind: 'warning', text: 'A 20–30% discount in advertising is often applied only to the componente energia, not to the whole bill. The final saving may be much smaller, because the bill includes network tariffs, taxes and fixed components.' }
      ]
    },
    {
      id: 'choose-supplier',
      title: 'Choose a supplier and check the small print',
      content: [
        { kind: 'paragraph', text: 'Major suppliers in the market include: EDP Comercial, Galp, Endesa, Iberdrola, Goldenergy, Coopérnico, Plenitude. All offer online sign-up, but conditions differ: fixed/indexed price, direct debit discount, electronic bill, additional services and a fidelização period.' },
        { kind: 'checklist', items: [
          'kWh price: separately for vazio/fora de vazio, if bi-horário',
          'Preço potência: daily price for power, €/day',
          'Gas price: termo fixo and preço kWh',
          'Whether there is fidelização and a penalty for leaving early',
          'Whether you need to buy a serviço adicional: assistência casa, seguro, manutenção',
          'Whether the discount remains without débito direto',
          'How often the price changes: fixed, mensal, indexada OMIE/MIBGAS',
          'Whether there is an app and English support if your Portuguese is weak',
          'Whether you can submit meter readings online'
        ] },
        { kind: 'warning', text: 'Do not sign a contract if the “cheap tariff” is tied to a paid assistência or seguro service that eats up the saving. Ask for the ficha contratual / condições particulares as a PDF before confirming.' }
      ]
    },
    {
      id: 'contract-process',
      title: 'How the switch happens',
      content: [
        { kind: 'paragraph', text: 'You submit the application to the new supplier. It requests the switch through the market system. You usually do not need to call the old supplier separately, except in cases of debt, active fidelização, or if you want to close additional services.' },
        { kind: 'checklist', items: [
          'Give the new supplier your NIF, CPE/CUI, address and IBAN',
          'Enter the contract holder’s name exactly as in the old contract',
          'Confirm the contract by SMS code, electronic signature or recorded call',
          'Save the contract PDF and ficha contratual',
          'Submit meter readings on or around the switching day',
          'Check the final bill from the old supplier: acerto final',
          'Make sure the first bill from the new supplier starts on the correct date'
        ] },
        { kind: 'paragraph', text: 'The switch itself is free. There should be no electricity or gas disconnection: the physical supply continues through the same network.' }
      ]
    },
    {
      id: 'cancel-14-days',
      title: '14-day cancellation right',
      content: [
        { kind: 'paragraph', text: 'If the contract is concluded online, by telephone or away from the supplier’s office, the consumer usually has 14 days for livre resolução — cancellation without giving a reason. This right follows from the rules on distance contracts and contracts concluded away from business premises.' },
        { kind: 'checklist', items: [
          'Send the cancellation in writing: email, customer form or carta registada',
          'State your NIF, CPE/CUI, contract number and conclusion date',
          'Ask for written confirmation of cancellation',
          'If supply has already started at your request, you may be charged for the energy actually consumed',
          'Keep screenshots, emails and comprovativo de envio',
          'If the refusal is ignored — complain in the Livro de Reclamações eletrónico and to ERSE'
        ] },
        { kind: 'warning', text: 'The 14 days are counted from the conclusion of the contract, not from the first bill. If you are unsure about the conditions, cancel immediately; do not wait until the end of the month.' }
      ]
    },
    {
      id: 'common-problems',
      title: 'Common problems for expats',
      content: [
        { kind: 'checklist', items: [
          'Tenancy agreement in one person’s name, but the bill in another’s: the new supplier may request autorização or a change of titular',
          'Low potência contratada in an old house: kettle + oven + air conditioning trips the quadro',
          'Bi-horário is worthwhile only if most consumption is at night/at weekends',
          'An indexed tariff may be cheaper, but riskier when wholesale prices jump',
          'If there is a debt to the old supplier, the switch may go through, but the debt does not disappear',
          'Gas and electricity “dual” is not always cheaper than the two best separate tariffs',
          'When moving home, this is not a “supplier switch” but a new contract or a change of titular at the address'
        ] },
        { kind: 'paragraph', text: 'If you have just moved in, first find the CPE/CUI. They may be on the landlord’s old bill, in the connection contract, or you can request them from the network operator using the address and meter details.' }
      ]
    }
  ],
  costs: [
    { label: 'Changing electricity/gas supplier', amountEUR: 0, note: 'Administrative change of comercializador is free and does not require disconnection.' },
    { label: 'Terminating the old contract', amountEUR: 0, note: 'Usually free, if there is no fidelização or separate paid service.' },
    { label: 'Consumption up to the switching date', amountEURMin: 0, amountEURMax: 0, note: 'Paid according to the actual bill from the old supplier; this is not a switching fee.' }
  ],
  sources: [
    {
      title: 'ERSE — consumer information on electricity and natural gas',
      url: 'https://www.erse.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERSE energy price simulator',
      url: 'https://simuladorprecos.erse.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 24/2014 — distance contracts and contracts concluded away from business premises',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2014-73252374',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
