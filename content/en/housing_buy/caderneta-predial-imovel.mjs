export default {
  editorialVoice: 'hackportugal',
  id: 'caderneta-predial-imovel',
  categoryId: 'housing_buy',
  title: 'Caderneta Predial — the property record from Finanças',
  tldr: 'Caderneta Predial is a free tax extract for a property in Portal das Finanças. It shows the artigo matricial, the owner for IMI purposes, address, areas, urbano/rústico type, VPT and data for calculating IMI. It is needed when buying, selling, taking a mortgage, disputing with a landlord/neighbour, checking area and tax. Online, it can be downloaded in 2–5 minutes with the owner’s NIF; it is not a substitute for the certidão permanente do registo predial from the Conservatória.',
  tags: ['finanças', 'property', 'imi', 'purchase'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What the Caderneta Predial is',
      content: [
        { kind: 'paragraph', text: 'The Caderneta Predial, or caderneta predial urbana/rústica, is the property’s tax card in the Autoridade Tributária e Aduaneira via Portal das Finanças. It is the matriz predial record: how Finanças sees the property for IMI, VPT assessment and tax notices.' },
        { kind: 'checklist', items: [
          'artigo matricial — the property’s main tax identifier',
          'distrito, concelho, freguesia and morada',
          'property type: urbano, rústico or misto',
          'fração autónoma, if it is a flat in a condomínio',
          'titular or titulares — owner/co-owners in the tax database',
          'área total, área de implantação, área bruta privativa, área bruta dependente',
          'afetação: habitação, comércio, serviços, estacionamento and so on',
          'VPT — Valor Patrimonial Tributário, the tax value',
          'year of inscrição na matriz and avaliação data',
          'VPT calculation elements: localização, qualidade/conforto, vetustez'
        ] },
        { kind: 'warning', text: 'The Caderneta Predial does not prove ownership in the same way as the registo predial. For a transaction, mortgage and checks for charges, you need the certidão permanente do registo predial from the Conservatória/IRN. If the data from Finanças and the Conservatória differ, this is a red flag for a lawyer.' }
      ]
    },
    {
      id: 'why-needed',
      title: 'Why buyers, owners and tenants need it',
      content: [
        { kind: 'paragraph', text: 'For the owner, the Caderneta Predial is the basic IMI document. For the buyer, it is a quick way to understand exactly what is being sold: flat, garage, storage room, plot, separate fração or part of a prédio. For a tenant, the document is useful if you need to check the address, owner, designated use of the premises or a disputed area.' },
        { kind: 'checklist', items: [
          'property purchase: check the artigo matricial against the contrato-promessa and escritura',
          'sale: the notary, bank and agent will request an up-to-date caderneta',
          'mortgage: the bank uses the property data and VPT in the due diligence package',
          'IMI: understand which VPT the tax is calculated from',
          'area dispute: compare the área bruta privativa with the actual square metres',
          'condomínio: check the fração and the designated use of parking/storage',
          'rental: make sure the property is registered as habitação, not comércio/serviços',
          'inheritance or divorce: identify the property’s tax identifier',
          'alterations: see whether the data has been updated after obras/licença',
          'checking rural land: understand whether it is rústico or urbano and which artigo is stated'
        ] },
        { kind: 'paragraph', text: 'In 2026, IMI on urban properties is usually calculated as VPT × Câmara Municipal rate: 0.3–0.45% for prédios urbanos. For prédios rústicos, the basic CIMI rate is 0.8%. Therefore, an old or inflated VPT directly affects the annual tax.' }
      ]
    },
    {
      id: 'how-to-download',
      title: 'How to download it free of charge in Portal das Finanças 💻',
      content: [
        { kind: 'paragraph', text: 'The property owner or their representative with access to the NIF can download it. You need to log in to Portal das Finanças: NIF + password, Chave Móvel Digital (CMD) or Cartão de Cidadão with a reader/app.' },
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
        { kind: 'paragraph', text: 'The online extract via Portal das Finanças is free of charge. If you do not have access to the NIF of a deceased relative, former spouse or seller, ask the owner to download the PDF or arrange the request through a notary/advogado/solicitador as part of the transaction.' }
      ]
    },
    {
      id: 'how-to-read',
      title: 'How to read the key fields without a lawyer',
      content: [
        { kind: 'substeps', items: [
          { id: 'artigo', title: 'Artigo matricial', content: [
            { kind: 'paragraph', text: 'This is the property’s tax number within the freguesia. In documents, it usually appears as prédio urbano/rústico, artigo X, fração Y. In a transaction, the artigo must match in the Caderneta Predial, certidão permanente, licença de utilização and contract.' }
          ] },
          { id: 'classification', title: 'Urbano, rústico or misto', content: [
            { kind: 'paragraph', text: 'Urbano means urban property: flat, house, garage, shop. Rústico means rural land. Misto means a property with both urban and rural parts. For buying land this is critical: the possibility of construction does not follow from the caderneta alone; it must be checked at the Câmara Municipal through the PDM, licença and certidão.' }
          ] },
          { id: 'areas', title: 'Areas', content: [
            { kind: 'paragraph', text: 'Área bruta privativa is the main private area of the flat/house. Área bruta dependente means dependent areas: garage, storage room, attic, technical areas. Advertised “100 m²” on Idealista may not match the tax area.' }
          ] },
          { id: 'vpt', title: 'VPT', content: [
            { kind: 'paragraph', text: 'Valor Patrimonial Tributário is not the market price, but the tax value. A flat may sell for €450,000 and have a VPT of €180,000. IMI is calculated on the VPT, not on the purchase price.' }
          ] }
        ] }
      ]
    },
    {
      id: 'red-flags',
      title: 'Red flags before a purchase or dispute',
      content: [
        { kind: 'warning', text: 'Do not sign a CPCV or transfer the sinal based only on the Caderneta Predial. It does not show a mortgage, penhora, usufruto, servidões and some legal restrictions. For this, you need the certidão permanente do registo predial and a lawyer’s check.' },
        { kind: 'checklist', items: [
          'the Caderneta shows one titular, but another person is selling',
          'the address looks similar, but the artigo or fração does not match the certidão permanente',
          'the flat is sold with a garage, but the garage is not stated as a fração/parte comum/área dependente',
          'the property is advertised as a T2, but the afetação or áreas look like escritório/serviços',
          'after an extension, enclosing a balcony or turning an attic into a room, the data has not been updated',
          'land is being sold “for construction”, but the caderneta is only rústica',
          'the VPT is very old, and the seller promises “low IMI forever”',
          'there is a discrepancy between the morada fiscal and the actual address',
          'in a prédio misto it is unclear which part is urbano and which is rústico',
          'the seller refuses to provide a fresh PDF from Portal das Finanças'
        ] },
        { kind: 'paragraph', text: 'If you are already the owner and see an error in the area, designated use or titular, correction usually goes through Finanças with Modelo 1 do IMI, Câmara Municipal documents, escritura and/or registo predial. Correction may change the VPT and future IMI — sometimes down, sometimes up.' }
      ]
    },
    {
      id: 'vpt-imi-update',
      title: 'VPT, IMI and when to request a reassessment',
      content: [
        { kind: 'paragraph', text: 'VPT affects IMI, IMT in some transactions and tax calculations. The owner can request atualização/reavaliação through Modelo 1 do IMI, but usually not more often than once every 3 years. This is not an automatic discount: if the coefficients have changed against you, the VPT may increase.' },
        { kind: 'checklist', items: [
          'check the avaliação year in the caderneta',
          'compare the VPT with the current tax logic and your Câmara Municipal’s IMI rate',
          'if the property is old, the vetustez coefficient sometimes reduces the VPT',
          'if the area has become more expensive under the zonamento, reassessment may increase the VPT',
          'before Modelo 1 do IMI, ask a contabilista/solicitador for a calculation',
          'after obras, licença de utilização or a change in area, updating may be mandatory',
          'IMI rates by município are published annually; in 2026, the benchmark for urbanos is 0.3–0.45%'
        ] },
        { kind: 'paragraph', text: 'A simple calculation: if the VPT is €200,000 and the IMI rate in the município is 0.35%, the annual IMI will be about €700. If after reassessment the VPT becomes €170,000, IMI at the same rate will be about €595.' }
      ]
    }
  ],
  costs: [
    { label: 'Downloading the Caderneta Predial in Portal das Finanças', amountEUR: 0, note: 'Free of charge for the owner/representative with access to the NIF.' },
    { label: 'IMI benchmark for prédio urbano', amountEURMin: 0, amountEURMax: 0, note: 'Not a fixed amount: usually VPT × 0.3–0.45% per year, with the rate depending on the Câmara Municipal.' },
    { label: 'IMI benchmark for prédio rústico', amountEURMin: 0, amountEURMax: 0, note: 'Not a fixed amount: under CIMI, the basic rate is 0.8% of VPT.' }
  ],
  sources: [
    { title: 'Portal das Finanças — taxpayer support and património predial services', url: 'https://info.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portal das Finanças — access to Autoridade Tributária online services', url: 'https://www.portaldasfinancas.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Código do Imposto Municipal sobre Imóveis (CIMI) — IMI rates and VPT rules', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2003-34577875', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
