export default {
  editorialVoice: 'hackportugal',
  id: 'caderneta-predial-imovel',
  categoryId: 'housing_buy',
  title: 'Caderneta Predial — the property passport from Finanças',
  tldr: 'Caderneta Predial is a free tax extract for a property in Portal das Finanças. It shows the artigo matricial, the owner for IMI purposes, address, areas, urbano/rústico type, VPT and data for calculating IMI. It is needed when buying, selling, taking a mortgage, dealing with a dispute with a landlord/neighbour, checking area and tax. It can be downloaded online in 2–5 minutes using the owner’s NIF; it is not a replacement for the certidão permanente do registo predial from the Conservatória.',
  tags: ['finanças', 'property', 'imi', 'purchase'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What Caderneta Predial is',
      content: [
        { kind: 'paragraph', text: 'Caderneta Predial, or caderneta predial urbana/rústica, is the tax record for a property at the Autoridade Tributária e Aduaneira via Portal das Finanças. It is the matriz predial record: how Finanças sees the property for IMI, VPT valuation and tax notices.' },
        { kind: 'checklist', items: [
          'artigo matricial — the main tax identifier of the property',
          'distrito, concelho, freguesia and morada',
          'property type: urbano, rústico or misto',
          'fração autónoma, if it is a flat in a condomínio',
          'titular or titulares — owner/co-owners in the tax database',
          'área total, área de implantação, área bruta privativa, área bruta dependente',
          'afetação: habitação, comércio, serviços, estacionamento and so on',
          'VPT — Valor Patrimonial Tributário, the taxable value',
          'year of inscrição na matriz and avaliação data',
          'VPT calculation elements: localização, qualidade/conforto, vetustez'
        ] },
        { kind: 'warning', text: 'Caderneta Predial does not prove ownership in the same way as the registo predial. For a transaction, mortgage and checking charges, you need the certidão permanente do registo predial from the Conservatória/IRN. If the Finanças and Conservatória data differ, it is a red flag for a lawyer.' }
      ]
    },
    {
      id: 'why-needed',
      title: 'Why a buyer, owner and tenant need it',
      content: [
        { kind: 'paragraph', text: 'For the owner, Caderneta Predial is the basic IMI document. For the buyer, it is a quick way to understand exactly what is being sold: flat, garage, storage room, plot, separate fração or part of a prédio. For the tenant, the document is useful if it is necessary to check the address, owner, permitted use of the premises or disputed area.' },
        { kind: 'checklist', items: [
          'property purchase: match the artigo matricial against the contrato-promessa and escritura',
          'sale: the notary, bank and agent will request an up-to-date caderneta',
          'mortgage: the bank uses the property data and VPT in the due diligence pack',
          'IMI: understand which VPT the tax is calculated from',
          'area dispute: compare the área bruta privativa and the actual square metres',
          'condomínio: check the fração and the allocation of parking/storage',
          'rental: make sure the property is registered as habitação, not comércio/serviços',
          'inheritance or divorce: identify the property’s tax identifier',
          'alterations: see whether the data has been updated after obras/licença',
          'rural land check: understand whether it is rústico or urbano and which artigo is listed'
        ] },
        { kind: 'paragraph', text: 'In 2026, IMI on urban properties is usually calculated as VPT × Câmara Municipal rate: 0.3–0.45% for prédios urbanos. For prédios rústicos, the base CIMI rate is 0.8%. Therefore, an old or inflated VPT directly affects the annual tax.' }
      ]
    },
    {
      id: 'how-to-download',
      title: 'How to download it for free in Portal das Finanças 💻',
      content: [
        { kind: 'paragraph', text: 'The property owner or their representative with access to the NIF can download it. You need to log in to Portal das Finanças: NIF + password, Chave Móvel Digital (CMD) or Cartão de Cidadão with reader/app.' },
        { kind: 'checklist', items: [
          'Open portaldasfinancas.gov.pt',
          'Log in via Iniciar Sessão',
          'In the portal search, enter “património predial” or “caderneta predial”',
          'Open the Consultar Património Predial / Prédios section',
          'Select the relevant prédio or fração in the list of properties',
          'Click obter comprovativo / caderneta predial',
          'Download the PDF and save it with the date in the file name',
          'Check that the morada, artigo, fração and titular match in the PDF',
          'For a transaction, send only a fresh version downloaded before signing the CPCV/escritura'
        ] },
        { kind: 'paragraph', text: 'The online extract through Portal das Finanças is free. If you do not have access to the NIF of a deceased relative, former spouse or seller, ask the owner to download the PDF or submit a request through a notary/advogado/solicitador as part of the transaction.' }
      ]
    },
    {
      id: 'how-to-read',
      title: 'How to read the key fields without a lawyer',
      content: [
        { kind: 'substeps', items: [
          { id: 'artigo', title: 'Artigo matricial', content: [
            { kind: 'paragraph', text: 'This is the property’s tax number within the freguesia. In documents it usually appears as prédio urbano/rústico, artigo X, fração Y. In a transaction, the artigo must match in the Caderneta Predial, certidão permanente, licença de utilização and contract.' }
          ] },
          { id: 'classification', title: 'Urbano, rústico or misto', content: [
            { kind: 'paragraph', text: 'Urbano is urban property: flat, house, garage, shop. Rústico is a rural plot. Misto is a property with both urban and rural parts. For buying land, this is critical: building potential does not follow from the caderneta alone; it must be checked at the Câmara Municipal through the PDM, licença and certidão.' }
          ] },
          { id: 'areas', title: 'Areas', content: [
            { kind: 'paragraph', text: 'Área bruta privativa is the main private area of the flat/house. Área bruta dependente means dependent spaces: garage, storage room, attic, technical areas. Advertised “100 m²” on Idealista may not match the tax area.' }
          ] },
          { id: 'vpt', title: 'VPT', content: [
            { kind: 'paragraph', text: 'Valor Patrimonial Tributário is not the market price, but the taxable value. A flat may sell for €450,000 and have a VPT of €180,000. IMI is calculated on the VPT, not on the purchase price.' }
          ] }
        ] }
      ]
    },
    {
      id: 'red-flags',
      title: 'Red flags before a purchase or dispute',
      content: [
        { kind: 'warning', text: 'Do not sign a CPCV or transfer the sinal based only on the Caderneta Predial. It does not show a mortgage, penhora, usufruto, servidões and some legal restrictions. For this, you need the certidão permanente do registo predial and a lawyer’s review.' },
        { kind: 'checklist', items: [
          'the Caderneta lists one titular, but another person is selling',
          'the address is similar, but the artigo or fração does not match the certidão permanente',
          'the flat is being sold with a garage, but the garage is not listed as a fração/parte comum/área dependente',
          'the property is advertised as a T2, but the afetação or áreas look like escritório/serviços',
          'after an extension, enclosed balcony or conversion of the attic into a room, the data has not been updated',
          'land is being sold “for construction”, but the caderneta is only rústica',
          'the VPT is very old, and the seller promises “low IMI forever”',
          'there is a discrepancy between the morada fiscal and the actual address',
          'in a prédio misto it is unclear which part is urbano and which is rústico',
          'the seller refuses to provide a fresh PDF from Portal das Finanças'
        ] },
        { kind: 'paragraph', text: 'If you are already the owner and see an error in the area, permitted use or titular, the correction usually goes through Finanças with Modelo 1 do IMI, Câmara Municipal documents, escritura and/or registo predial. The correction may change the VPT and future IMI — sometimes down, sometimes up.' }
      ]
    },
    {
      id: 'vpt-imi-update',
      title: 'VPT, IMI and when to request a reassessment',
      content: [
        { kind: 'paragraph', text: 'VPT affects IMI, IMT in some transactions and tax calculations. The owner can request an atualização/reavaliação through Modelo 1 do IMI, but usually no more than once every 3 years. This is not an automatic discount: if the coefficients have changed against you, the VPT may increase.' },
        { kind: 'checklist', items: [
          'check the avaliação year in the caderneta',
          'compare the VPT with the current tax logic and the IMI rate of your Câmara Municipal',
          'if the property is old, the vetustez coefficient sometimes lowers the VPT',
          'if the area has increased in value under the zonamento, reassessment may increase the VPT',
          'before Modelo 1 do IMI, ask a contabilista/solicitador for a calculation',
          'after obras, licença de utilização or a change in area, updating may be mandatory',
          'IMI rates by município are published annually; in 2026, the reference range for urbanos is 0.3–0.45%'
        ] },
        { kind: 'paragraph', text: 'Simple calculation: if the VPT is €200,000 and the IMI rate in the município is 0.35%, the annual IMI will be about €700. If after reassessment the VPT becomes €170,000, IMI at the same rate will be about €595.' }
      ]
    }
  ],
  costs: [
    { label: 'Downloading Caderneta Predial in Portal das Finanças', amountEUR: 0, note: 'Free for the owner/representative with access to the NIF.' },
    { label: 'IMI guideline for prédio urbano', amountEURMin: 0, amountEURMax: 0, note: 'Not a fixed amount: usually VPT × 0.3–0.45% per year, with the rate depending on the Câmara Municipal.' },
    { label: 'IMI guideline for prédio rústico', amountEURMin: 0, amountEURMax: 0, note: 'Not a fixed amount: under CIMI, the base rate is 0.8% of VPT.' }
  ],
  sources: [
    { title: 'Portal das Finanças — taxpayer support and património predial services', url: 'https://info.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — access to the Autoridade Tributária online services', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Imposto Municipal sobre Imóveis (CIMI) — IMI rates and VPT rules', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2003-34577875', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
