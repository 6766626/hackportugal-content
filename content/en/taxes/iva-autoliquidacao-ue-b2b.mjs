export default {
  editorialVoice: 'hackportugal',
  id: 'iva-autoliquidacao-ue-b2b',
  categoryId: 'taxes',
  title: 'Reverse charge / autoliquidação IVA: invoicing B2B clients in the EU',
  tldr: 'If you are in Portugal and invoice an EU company with a valid VAT ID in VIES, Portuguese IVA is usually not charged: the place of taxation shifts to the client, and the invoice states “IVA - autoliquidação”. Before sending the invoice, check the VAT ID in VIES and keep the evidence. EU B2B transactions are included in the Declaração Recapitulativa, usually by the 20th day after the period. For B2C, reverse charge almost never works: PT IVA or OSS is often needed.',
  tags: ['iva', 'vies', 'b2b', 'recapitulative'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-applies',
      title: 'When autoliquidação works for EU B2B',
      content: [
        { kind: 'paragraph', text: 'Autoliquidação / reverse charge means: you do not add Portuguese IVA to the invoice, and the client accounts for VAT in their own country. For a typical freelancer in Portugal, this applies to B2B services supplied to a client in another EU country, if the client is a taxable person and has provided a valid VAT ID.' },
        { kind: 'checklist', items: [
          'You are registered in Portugal as a sujeito passivo de IVA: a company, empresário em nome individual or recibos verdes.',
          'The client is in another EU country, not in Portugal.',
          'The client is a business, not a private individual.',
          'The client has a valid VAT ID that can be checked through VIES.',
          'The service falls under the general B2B rule: the place of taxation is the client’s country under CIVA art. 6.º, n.º 6, al. a).',
          'You do not charge 23%, 13% or 6% Portuguese IVA on the invoice.',
          'The invoice states the reason: “IVA - autoliquidação”.',
          'The transaction is reported in the Declaração Recapitulativa and in the periodic IVA return, if you are required to file IVA.'
        ] },
        { kind: 'warning', text: 'If the client is in Portugal, this is not an intra-EU B2B service: Portuguese IVA is usually charged, except for specific exemptions. If the client is in the USA/UK/Switzerland, this is not VIES and not an EU Declaração Recapitulativa; the place-of-supply rules must still be checked separately.' }
      ]
    },
    {
      id: 'vies-check',
      title: 'Checking the client in VIES before invoicing',
      content: [
        { kind: 'paragraph', text: 'VIES is the European Commission’s official service for checking the VAT ID of EU companies. For reverse charge, this is key evidence that the client is genuinely B2B. Check the VAT ID before every first invoice and then regularly, especially if the cooperation lasts for months.' },
        { kind: 'checklist', items: [
          'Open VIES: ec.europa.eu/taxation_customs/vies/.',
          'Select the client’s country and enter the VAT ID without spaces or extra characters.',
          'If VIES returns valid — save a PDF/screenshot with the date and time.',
          'Check the company name and address against the contract, PO, email domain and invoicing details.',
          'If VIES shows invalid — do not apply autoliquidação until the client corrects the VAT ID.',
          'If VIES is temporarily unavailable — check again later and keep evidence of the attempt.',
          'For Spanish clients, check the NIF-IVA specifically, not just the tax number; some companies have a number, but intra-EU VAT is not activated.',
          'Keep VIES evidence together with the invoice for at least the tax limitation period.'
        ] },
        { kind: 'warning', text: 'A “valid” result in VIES does not automatically make a private individual a business client. But the absence of a valid VAT ID almost always breaks EU B2B reverse charge: Finanças may demand Portuguese IVA, juros compensatórios and a fine.' }
      ]
    },
    {
      id: 'invoice-text',
      title: 'How to issue the invoice: exact wording',
      content: [
        { kind: 'paragraph', text: 'On a Portuguese invoice / recibo verde, the service amount is shown without IVA. In the field for the reason for not charging IVA, choose “IVA - autoliquidação”. It is useful to add the legal basis in the invoice text as well: “Reverse charge — serviço localizado no Estado-Membro do adquirente, nos termos do art. 6.º, n.º 6, al. a) do CIVA”.' },
        { kind: 'checklist', items: [
          'Seller details: your name/company, NIF, address in Portugal.',
          'Client details: legal name, address, VAT ID with country code, for example DE123456789.',
          'Service description: specific, not vague “consulting” where you can write “software development”, “design”, “marketing services”.',
          'Date of service or period: for example “services provided in March 2026”.',
          'Tax base: amount without IVA.',
          'IVA rate: do not enter 23%; in Portal das Finanças choose the reason “IVA - autoliquidação”.',
          'Mandatory note: “IVA - autoliquidação”.',
          'Recommended additional note: “Reverse charge / VAT due by the customer”.',
          'Currency: you can invoice in €, and if in another currency, keep the exchange rate used for accounting.',
          'Keep the contract, correspondence, VIES check and proof of payment.'
        ] },
        { kind: 'warning', text: 'Do not use “Isento art. 53.º” as a substitute for reverse charge. Art. 53.º CIVA is the small IVA exemption regime in Portugal, while “IVA - autoliquidação” is a different mechanism. If you are under art. 53.º, check with a contabilista whether you need to change regime before starting intra-EU B2B transactions.' }
      ]
    },
    {
      id: 'recapitulativa',
      title: 'Declaração Recapitulativa: what to file with Finanças',
      content: [
        { kind: 'paragraph', text: 'Intra-EU B2B services with reverse charge are usually included in the Declaração Recapitulativa. This is a separate return in Portal das Finanças, where the VAT ID and transaction amount are listed for each client. It does not replace the ordinary periodic IVA return.' },
        { kind: 'checklist', items: [
          'Check that you have an activity code open in Finanças and the correct IVA regime.',
          'Go to Portal das Finanças → IVA → Declaração Recapitulativa.',
          'Enter the period to which the services relate.',
          'For each EU B2B client, enter the country, VAT ID and taxable amount.',
          'The amounts must match the invoices issued and the IVA return.',
          'The usual deadline is by the 20th day of the month after the relevant period; if the deadline falls on a weekend/public holiday, use the nearest working day as a guide, but do not leave it late.',
          'Even if the IVA payable is €0, the recapitulativa obligation may still remain.',
          'Keep the comprovativo de entrega after submission.',
          'If you make a mistake in the VAT ID or amount — submit a substituição/correction as soon as possible.'
        ] },
        { kind: 'warning', text: 'Fines for missed tax returns in Portugal are often more expensive than the accounting itself. If you invoice the EU regularly, set up a calendar: invoice date, VIES proof, Declaração Recapitulativa, periodic IVA return, IRS/IRC.' }
      ]
    },
    {
      id: 'b2c-and-edge-cases',
      title: 'B2B ≠ B2C: where reverse charge will not save you',
      content: [
        { kind: 'paragraph', text: 'The main freelancer mistake is applying “IVA - autoliquidação” to any client from the EU. For private individuals in the EU, this is almost always wrong. B2C services are taxed under different rules: sometimes Portuguese IVA, sometimes the consumer’s country IVA through OSS, and sometimes special rules for real estate, events, training or electronic services.' },
        { kind: 'checklist', items: [
          'B2B EU client with a valid VAT ID: usually reverse charge and Declaração Recapitulativa.',
          'B2C EU private person: reverse charge does not apply.',
          'B2C digital services, SaaS, downloadable products, online content: the place of taxation is often the client’s country; OSS may be needed.',
          'B2C ordinary consulting/design/marketing: the rule depends on the nature of the service; do not copy the B2B scheme.',
          'Services connected with real estate: often taxed where the property is located.',
          'Training, events, admission to events: special rules may apply based on the place of actual performance or access.',
          'Client without a valid VAT ID, but says “we are a company”: ask them to activate intra-EU VAT and wait for VIES valid.',
          'A marketplace/platform may be a deemed supplier or an agent — check the contract and VAT treatment.',
          'If you issued an invoice with Portuguese IVA by mistake, the correction is made through a nota de crédito and a new invoice, not through an email exchange.'
        ] },
        { kind: 'warning', text: 'OSS and reverse charge are different regimes. OSS is needed for some B2C sales/services in the EU to declare clients’ country IVA through a single window. For B2B reverse charge with a VAT ID, OSS is usually not used.' }
      ]
    },
    {
      id: 'practical-controls',
      title: 'Mini-checklist before sending the invoice',
      content: [
        { kind: 'paragraph', text: 'Before sending an invoice to a client in the EU, run through a short control check. It takes 3 minutes and saves hours of explanations with your accountant and Finanças.' },
        { kind: 'checklist', items: [
          'Client country is in the EU, but not Portugal.',
          'The client is a company/professional, not a consumer.',
          'VAT ID valid in VIES on the invoice date.',
          'The name and address on the invoice match VIES or the client’s corporate details.',
          'There is no Portuguese IVA on the invoice.',
          'The reason “IVA - autoliquidação” is selected.',
          'The description includes a clear service and period.',
          'The invoice will be included in the Declaração Recapitulativa.',
          'The amount will go into the periodic IVA return in the correct fields.',
          'VIES proof, invoice PDF and contract are saved in one folder.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Checking a VAT ID in VIES', amountEUR: 0, note: 'The European Commission’s official service is free.' },
    { label: 'Filing the Declaração Recapitulativa', amountEUR: 0, note: 'Free in Portal das Finanças; an accountant may charge a separate fee.' },
    { label: 'Accountant for recibos verdes/IVA', amountEURMin: 40, amountEURMax: 120, note: 'Typical monthly range for a freelancer; depends on the number of invoices, IVA, OSS and IRS.' }
  ],
  sources: [
    {
      title: 'Portal das Finanças: IVA information and services',
      url: 'https://info.portaldasfinancas.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'VIES: checking a VAT ID in the EU',
      url: 'https://ec.europa.eu/taxation_customs/vies/',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Código do IVA on Diário da República',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1984-34500675',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças: Declaração Recapitulativa IVA',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/default.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
