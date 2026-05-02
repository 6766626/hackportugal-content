export default {
  editorialVoice: 'hackportugal',
  id: 'energy-certificate-ce',
  categoryId: 'housing_buy',
  title: 'Certificado Energético: energy certificate for housing',
  tldr: 'Certificado Energético is mandatory when selling and long-term renting housing in Portugal: the A+–F class must already be stated in the advert, and a valid certificate is handed over with the contrato de arrendamento or escritura. For housing, the validity period is usually 10 years. The document is issued only by a perito qualificado through the SCE/ADENE system. In 2026, you pay the expert’s market fee plus the ADENE fee: €28–€65 + IVA for flats/houses by typology.',
  tags: ['energy', 'adene', 'renting', 'buying'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What a Certificado Energético is',
      content: [
        { kind: 'paragraph', text: 'Certificado Energético, or CE, is an official document from the SCE system that shows a property’s energy efficiency: from A+ to F. It is registered by ADENE and issued by an independent perito qualificado.' },
        { kind: 'paragraph', text: 'The certificate contains not only the class letter, but also technical data: walls, windows, roof, heating, cooling, hot water, ventilation, solar panels and recommendations for improvements. For a buyer, it is a way to understand future electricity/gas bills and the scale of renovation works.' },
        { kind: 'checklist', items: ['Scale: A+, A, B, B-, C, D, E, F', 'For housing, the usual validity period is 10 years', 'The certificate number can be checked in the SCE/ADENE system', 'The document is needed before publishing a sale or rental advert', 'The energy class must be stated in advertising', 'The certificate does not replace the licença de utilização, caderneta predial or certidão permanente', 'The CE is linked to the property, not to the owner'] }
      ]
    },
    {
      id: 'when-required',
      title: 'When it is mandatory',
      content: [
        { kind: 'paragraph', text: 'For a typical expat scenario, the rule is simple: if you are selling housing or renting it out long term, a Certificado Energético is needed. It is usually requested by the estate agency, notary, advogado, bank for a mortgage and the tenant before signing the contract.' },
        { kind: 'checklist', items: ['Sale of a flat or house — mandatory before the escritura', 'Long-term rental — mandatory before the assinatura do contrato', 'Advert on Idealista, Imovirtual, an agency website or in a shop window — the energy class must be stated', 'New-build property — the certificate is needed for commissioning and sale', 'Substantial renovation — a new CE may be required after the works', 'The buyer should request the certificate PDF before the CPCV, not just the class letter', 'The tenant should keep a copy together with the contrato de arrendamento'] },
        { kind: 'warning', text: 'The absence of a Certificado Energético when selling/renting can lead to fines. In practice, people often quote a range of up to €3,740 for individuals and up to €44,890 for companies, but the specific penalty depends on the breach and the supervision procedure.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'How an owner gets a CE',
      content: [
        { kind: 'substeps', items: [
          { id: 'find-expert', title: '1. Find a perito qualificado', content: [
            { kind: 'paragraph', text: 'The certificate can only be issued by an accredited perito qualificado. Search via the SCE/ADENE register or through recommendations from an agency, advogado, condomínio. Check that the expert is actually registered, and not just someone who “does certificates”.' }
          ] },
          { id: 'prepare-documents', title: '2. Prepare the documents', content: [
            { kind: 'checklist', items: ['Caderneta predial urbana from Finanças', 'Certidão permanente do registo predial or código de acesso', 'Planta / project, if available', 'Ficha técnica da habitação, if the property is new or relatively new', 'Details of renovations: windows, insulation, HVAC, heat pump, solar panels', 'Fraction number, floor, area, address', 'Contact for access to the flat/house'] }
          ] },
          { id: 'site-visit', title: '3. Property inspection', content: [
            { kind: 'paragraph', text: 'The perito must inspect the housing: measure areas, check windows, walls, hot-water equipment, heating and cooling. A “certificate without a visit” is a red flag: in a dispute or inspection, such a document can create problems.' }
          ] },
          { id: 'receive-pdf', title: '4. Receive the PDF and SCE number', content: [
            { kind: 'paragraph', text: 'After the calculation, the expert registers the certificate with ADENE/SCE. You receive a PDF with the number, energy class, validity period and recommendations. Before paying the final invoice, check the address, typology, area and owner details.' }
          ] }
        ] }
      ]
    },
    {
      id: 'costs-and-timing',
      title: 'How much it costs and how long it takes',
      content: [
        { kind: 'paragraph', text: 'The price consists of two parts: a fixed taxa de registo ADENE and the perito’s unregulated fee. For housing in 2026, the ADENE fee depends on typology: T0/T1 — €28, T2/T3 — €40.50, T4/T5 — €55, T6+ — €65. IVA at 23% is usually added on top, and the expert’s fee is determined by the market.' },
        { kind: 'checklist', items: ['T0–T1 flat: often €90–€180 total on the market', 'T2–T3 flat: often €120–€230', 'Large T4+ flat or house: often €180–€350+', 'Urgent issuance may cost more', 'If there are no plans or documents, the expert may charge more for measurements', 'Usual timeframe: 2–7 working days after the visit and receipt of documents', 'In Lisbon, Porto and the Algarve, prices are usually higher'] },
        { kind: 'warning', text: 'Do not choose based only on the lowest price. An error in the area, equipment or class can affect sale negotiations, the mortgage, buyer confidence and later claims.' }
      ]
    },
    {
      id: 'buyer-tenant-check',
      title: 'What a buyer or tenant should check',
      content: [
        { kind: 'paragraph', text: 'Even if you are not the owner, the CE is still important: it indicates the risk of a cold flat, mould, high bills and expensive renovation works. In Portugal, many properties have class C–F, especially older housing stock without insulation.' },
        { kind: 'checklist', items: ['Ask for the full PDF, not a screenshot of the first page', 'Check the validity period: for housing it is usually 10 years, but old renovation works may have made the data outdated', 'Compare the area in the CE with the caderneta predial and the advert', 'Look at the recommendations: windows, insulation, bomba de calor, painéis solares', 'If the class is E/F, budget for heating, a dehumidifier and possible renovation works', 'For a purchase before the CPCV, ask who pays for a new CE if the current one has expired', 'For a rental, check that the class is stated in the contract or that the certificate is attached'] },
        { kind: 'warning', text: 'A high A/A+ class does not guarantee the absence of construction defects. The CE does not check the property’s legal status, illegal extensions, damp in the walls or the quality of the condomínio.' }
      ]
    }
  ],
  costs: [
    { label: 'ADENE fee for T0/T1 housing', amountEUR: 28, note: 'Fixed registration fee; usually plus IVA at 23% and the perito’s fee.' },
    { label: 'ADENE fee for T2/T3 housing', amountEUR: 40.5, note: 'Fixed registration fee; usually plus IVA at 23% and the perito’s fee.' },
    { label: 'ADENE fee for T4/T5 housing', amountEUR: 55, note: 'Fixed registration fee; usually plus IVA at 23% and the perito’s fee.' },
    { label: 'ADENE fee for T6+ housing', amountEUR: 65, note: 'Fixed registration fee; usually plus IVA at 23% and the perito’s fee.' },
    { label: 'Market cost of a CE for a flat', amountEURMin: 90, amountEURMax: 230, note: 'Market guide; depends on the city, typology, urgency and documents.' },
    { label: 'Market cost of a CE for a house', amountEURMin: 180, amountEURMax: 350, note: 'Large houses, missing plans and complex systems can cost more.' }
  ],
  sources: [
    { title: 'ADENE: Energy Certification', url: 'https://www.adene.pt/certificacao-energetica/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SCE: building energy certification portal', url: 'https://www.sce.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 101-D/2020: Sistema de Certificação Energética dos Edifícios', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/101-d-2020-150570704', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal: Building energy certificate', url: 'https://eportugal.gov.pt/servicos/pedir-o-certificado-energetico-de-edificios', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
