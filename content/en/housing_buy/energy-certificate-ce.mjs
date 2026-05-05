export default {
  editorialVoice: 'hackportugal',
  id: 'energy-certificate-ce',
  categoryId: 'housing_buy',
  title: 'Certificado Energético: energy certificate for housing',
  tldr: 'Certificado Energético is mandatory when selling and for long-term rentals in Portugal: the A+–F class must be shown already in the listing, and a valid certificate is handed over at the contrato de arrendamento or the escritura. For housing, validity is usually 10 years. The document is issued only by a perito qualificado via the SCE/ADENE system. In 2026 you pay the market fee of the expert plus the ADENE fee: €28–€65 + IVA for flats/houses by typology.',
  tags: ['energy', 'adene', 'renting', 'buying'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What a Certificado Energético is',
      content: [
        { kind: 'paragraph', text: 'The Certificado Energético, or CE, is an official SCE document that shows a property’s energy performance: from A+ to F. It is registered by ADENE and issued by an independent perito qualificado.' },
        { kind: 'paragraph', text: 'The certificate includes not only the class letter but also technical data: walls, windows, roof, heating, cooling, hot water, ventilation, solar panels, and recommendations for improvements. For a buyer this helps estimate future electricity/gas bills and the scope of renovation.' },
        { kind: 'checklist', items: ['Scale: A+, A, B, B-, C, D, E, F', 'For housing the usual validity is 10 years', 'You can verify the certificate number in the SCE/ADENE system', 'The document is required before publishing a sale or rental listing', 'The energy class must be shown in the advert', 'The certificate does not replace the licença de utilização, caderneta predial or certidão permanente', 'The CE is tied to the property, not to the owner'] }
      ]
    },
    {
      id: 'when-required',
      title: 'When it is mandatory',
      content: [
        { kind: 'paragraph', text: 'For a typical expat scenario the rule is simple: if you are selling a home or letting it on a long-term basis, a Certificado Energético is required. It is commonly requested by the estate agency, notary, advogado, mortgage bank, and the tenant before signing the contract.' },
        { kind: 'checklist', items: ['Sale of a flat or house — mandatory before the escritura', 'Long-term rental — mandatory before the assinatura do contrato', 'Listing on Idealista, Imovirtual, the agency’s website or shop window — the energy class must be shown', 'Newly built property — a certificate is needed on completion and for sale', 'Major renovation — a new CE may be required after the works', 'Buyers should ask for the PDF certificate before the CPCV, not just the class letter', 'Tenants should keep a copy together with the contrato de arrendamento'] },
        { kind: 'warning', text: 'The absence of a Certificado Energético for sale/rental can lead to fines. In practice, a range up to €3,740 for individuals and up to €44,890 for companies is often cited, but the specific sanction depends on the infringement and supervisory procedure.' }
      ]
    },
    {
      id: 'how-to-get',
      title: 'How an owner can obtain a CE',
      content: [
        { kind: 'substeps', items: [
          { id: 'find-expert', title: '1. Find a perito qualificado', content: [
            { kind: 'paragraph', text: 'Only an accredited perito qualificado can issue the certificate. Search via the SCE/ADENE registry or through referrals from an agency, advogado, or condomínio. Check that the expert is actually registered, not just someone who “does certificates”.' }
          ] },
          { id: 'prepare-documents', title: '2. Prepare the documents', content: [
            { kind: 'checklist', items: ['Caderneta predial urbana from Finanças', 'Certidão permanente do registo predial or access code', 'Planta / project drawings, if available', 'Ficha técnica da habitação, if the property is new or relatively new', 'Data about renovations: windows, insulation, HVAC, heat pump, solar panels', 'Fraction number, floor, area, address', 'Contact for access to the flat/house'] }
          ] },
          { id: 'site-visit', title: '3. Site visit', content: [
            { kind: 'paragraph', text: 'The perito must inspect the dwelling: measure areas, check windows, walls, and the hot water, heating and cooling equipment. A “certificate without a visit” is a red flag: in a dispute or audit such a document can cause problems.' }
          ] },
          { id: 'receive-pdf', title: '4. Receive the PDF and SCE number', content: [
            { kind: 'paragraph', text: 'After calculation, the expert registers the certificate with ADENE/SCE. You receive a PDF with the number, energy class, validity period, and recommendations. Before paying the final invoice, check the address, typology, area, and owner details.' }
          ] }
        ] }
      ]
    },
    {
      id: 'costs-and-timing',
      title: 'Costs and timelines',
      content: [
        { kind: 'paragraph', text: 'The price has two parts: a fixed ADENE registration fee (taxa de registo) and a free-market fee for the perito. For housing in 2026 the ADENE fee depends on typology: T0/T1 — €28, T2/T3 — €40.50, T4/T5 — €55, T6+ — €65. Typically 23% IVA is added on top, and the expert’s fee is market-based.' },
        { kind: 'checklist', items: ['Flat T0–T1: often €90–€180 total on the market', 'Flat T2–T3: often €120–€230', 'Large flat T4+ or a house: often €180–€350+', 'Expedited issuance may cost more', 'If plans and documents are missing, the expert may charge extra for measuring', 'Typical timeframe: 2–7 working days after the visit and receipt of documents', 'In Lisbon, Porto and the Algarve prices are usually higher'] },
        { kind: 'warning', text: 'Do not choose solely on the lowest price. Errors in area, equipment or class can affect sale negotiations, the mortgage, buyer trust, and subsequent claims.' }
      ]
    },
    {
      id: 'buyer-tenant-check',
      title: 'What buyers or tenants should check',
      content: [
        { kind: 'paragraph', text: 'Even if you are not the owner, the CE still matters: it shows the risk of a cold flat, mould, high bills, and costly renovation. In Portugal there are many properties with class C–F, especially older stock without insulation.' },
        { kind: 'checklist', items: ['Ask for the full PDF, not just a screenshot of the first page', 'Check the validity: for housing it is usually 10 years, but an old renovation may make the data outdated', 'Compare the area in the CE with the caderneta predial and the listing', 'Review the recommendations: windows, insulation, bomba de calor, painéis solares', 'If class E/F, budget for heating, a dehumidifier and possible works', 'For purchases, before the CPCV agree who pays for a new CE if the current one has expired', 'For rentals, check that the class is stated in the contract or the certificate is attached'] },
        { kind: 'warning', text: 'A high A/A+ class does not guarantee the absence of construction defects. The CE does not check legal regularity, illegal extensions, damp in walls, or the quality of the condomínio.' }
      ]
    }
  ],
  costs: [
    { label: 'ADENE fee for T0/T1 housing', amountEUR: 28, note: 'Fixed registration fee; typically plus 23% IVA and the perito qualificado’s fee.' },
    { label: 'ADENE fee for T2/T3 housing', amountEUR: 40.5, note: 'Fixed registration fee; typically plus 23% IVA and the perito qualificado’s fee.' },
    { label: 'ADENE fee for T4/T5 housing', amountEUR: 55, note: 'Fixed registration fee; typically plus 23% IVA and the perito qualificado’s fee.' },
    { label: 'ADENE fee for T6+ housing', amountEUR: 65, note: 'Fixed registration fee; typically plus 23% IVA and the perito qualificado’s fee.' },
    { label: 'Market price for a CE for a flat', amountEURMin: 90, amountEURMax: 230, note: 'Market reference; depends on city, typology, urgency and documentation.' },
    { label: 'Market price for a CE for a house', amountEURMin: 180, amountEURMax: 350, note: 'Larger houses, absence of plans, and complex systems can cost more.' }
  ],
  sources: [
    { title: 'ADENE: Energy Certification', url: 'https://www.adene.pt/edificios/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SCE: energy certification portal for buildings', url: 'https://www.sce.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decree-Law 101-D/2020: Energy Certification System for Buildings', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/101-d-2020-150570704', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal: Energy certificate for buildings', url: 'https://eportugal.gov.pt/servicos/pedir-o-certificado-energetico-de-edificios', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
