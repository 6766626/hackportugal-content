export default {
  editorialVoice: 'hackportugal',
  id: 'vinho-caseiro-particular',
  categoryId: 'food_leisure',
  title: 'Your own homemade wine — what is permitted without a licence',
  tldr: 'If you have grapes growing on your plot, you can make wine for your own consumption without any licences. Limit — 100 L per year per household without a declaration (IVDP law). Above 100 L — a mandatory declaration to IVV (Instituto da Vinha e do Vinho), even with no sales. Selling is a seriously regulated business: compulsory quality certificate, IGP/DOC certification, IVA, registration with IVV. For quintas with vines, check whether your plot is in a DOC region — it affects permitted varieties and style. Blending with table wines and selling as DOC without certification = a big fine.',
  tags: ['wine', 'wine', 'ivdp', 'doc', 'homemade'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'limits',
      title: 'Limits for personal consumption',
      content: [
        { kind: 'paragraph', text: 'Portugal is the fifth-largest wine producer in the world. The law is relatively lenient towards home production, but there are clear rules:' },
        { kind: 'checklist', items: [
          'Up to 100 L/year per household: NO declarations. Make it and drink it, gift to neighbours',
          '100–1,000 L/year: declaration to IVV (Instituto da Vinha e do Vinho) is mandatory, even with no sales. The declaration is free but compulsory',
          '1,000+ L/year: deemed commercial production. Vineyard registration, atestado, regular tests',
          'Limits are calculated per “household” (agregado familiar), not per adult'
        ] },
        { kind: 'paragraph', text: 'This concerns “vinho de mesa” — ordinary table wine. For other products:' },
        { kind: 'checklist', items: [
          'Aguardente (brandy, grape spirit): requires licenciamento alfandegário (customs licence), even for small volumes',
          'Vinagre (vinegar): for personal use — not regulated',
          'Licor (liqueur) — without added sugar/spirit: up to 30 L/year without declaration'
        ] }
      ]
    },
    {
      id: 'doc-regions',
      title: 'DOC regions and vines on your plot',
      content: [
        { kind: 'paragraph', text: 'If your plot is in one of the DOC (Denominação de Origem Controlada) regions, you can choose to use certification or not. Without certification your wine is “vinho regional” or “vinho” (general category).' },
        { kind: 'checklist', items: [
          'Douro DOC: classic Port and dry wines. Varieties: Touriga Nacional, Touriga Franca, Tinta Roriz, Tinta Barroca',
          'Vinho Verde DOC: young light wines. Varieties: Loureiro, Trajadura, Alvarinho',
          'Alentejo DOC: full-bodied reds. Aragonez, Trincadeira, Castelão',
          'Dão DOC: delicate reds and whites. Touriga Nacional, Encruzado, Jaen',
          'Bairrada DOC: classic Baga, Maria Gomes',
          'Madeira DOC: dessert wines. Sercial, Verdelho, Bual, Malvasia',
          'Lisboa: “vinho regional” — between DOC and generic. Greater flexibility',
          'Algarve: 4 DOC regions + a general regional category',
          'Açores: volcanic soils, specific varieties (Verdelho, Arinto dos Açores)'
        ] },
        { kind: 'paragraph', text: 'To produce a DOC wine you need certification from the Comissão Vitivinícola Regional (CVR) of the respective region. At minimum: registo of the vineyard with IVV + wine analyses + panel tasting.' }
      ]
    },
    {
      id: 'making',
      title: 'Process — what you need',
      content: [
        { kind: 'paragraph', text: 'Basic kit for household production up to 100 L:' },
        { kind: 'checklist', items: [
          'Grapes: 100 kg = ~70–75 L of wine',
          'Crusher (esmagador): manual ~€150 or hire from €30/day',
          'Fermenter (cuba de fermentação): 100 L lidded plastic vessel — €50–€100',
          'Sulphite (metabissulfito de potássio): essential, anti-bacterial. ~€10 per season',
          'Yeast (leveduras enológicas): ~€5/pack for 100 L',
          'Hydrometer (densímetro) + refractometer: to measure sugar. ~€30–€50',
          'Dark glass 0.75 L bottles: €0.50–€1 each',
          'Natural corks (cork from Algarve): €0.20–€0.50 each',
          'Capsules and labels: optional for presentation',
          'Barrel (if you want): 25–50 L oak = €200–€500. For reds, longer ageing'
        ] },
        { kind: 'paragraph', text: 'Process, simplified:' },
        { kind: 'checklist', items: [
          'Harvest: mid-September to late October depending on region',
          'Crushing + destemming (engaço)',
          'Sulphite immediately',
          'Add yeast after 24 hours',
          'Fermentation: 7–15 days at ~22–26°C',
          'Racking to a clean vessel (trasfega): separate from the lees (borras)',
          'Top up (right to the brim), tight lid',
          'Ageing: 3–12 months depending on style',
          'Bottling',
          'Bottle maturation: at least 6–12 months for reds'
        ] }
      ]
    },
    {
      id: 'selling',
      title: 'If you want to sell — stringent requirements',
      content: [
        { kind: 'paragraph', text: 'Commerce is a different league. In addition to the standard business setup you will need:' },
        { kind: 'checklist', items: [
          'Vineyard registration with IVV (RVCC — Registo Vitivinícola)',
          'Harvest and production declarations each season',
          'Wine analyses: alcoholic strength, sulphites, acidity, microorganisms',
          'IPAC-accredited laboratory: ~€80–€200 for a full analysis',
          'Labels per EU 2019/787: type, region, alcoholic %, volume, NIF, country, allergens (sulphites, eggs)',
          'Lote code (batch): mandatory',
          'Atividade aberta at Finanças: CIRS code 1102 — produção de vinhos',
          'IVA: 13% reduced for vinho de mesa, 23% for premium',
          'Selling at markets: licence from Câmara, AT excise (alcohol tax) ~€0.10/L',
          'Online sales: overseen by ASAE, mandatory seller registration',
          'Export outside the EU: licence from Direção Geral das Alfândegas (customs)'
        ] }
      ]
    },
    {
      id: 'tips',
      title: 'Tips and festivals',
      content: [
        { kind: 'checklist', items: [
          'If you have 5–10 grapevines at your country house — you will immediately get 50–70 L of oil per season (this is already a household stock)',
          'The “vinhão” variety (Vinho Verde region) — the most “garden-plot friendly”: easy to make, accessible equipment',
          'Local farmers (vinicultores) often take olives/grapes from neighbours for a percentage or cash',
          'Adega cooperativa — the local winegrowers’ cooperative, can take your grapes and make a collective wine',
          'Regional festas: Festa das Vindimas in Palmela (September), Vinho Verde Festival in the Northwest, Festa do Vinho in Madeira',
          'Courses for enthusiasts: IVDP in Porto, Universidade de Évora, ESAS Castelo Branco',
          'Books: “Manual do Vinho Caseiro” (in Portuguese), many YouTube channels'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Fines for infringements',
      content: [
        { kind: 'checklist', items: [
          'Producing over 100 L without an IVV declaration: €100–€1,000',
          'Selling without registo: €500–€5,000',
          'Using a DOC name without certification: €1,500–€25,000',
          'Counterfeiting a regional name: criminal offence',
          'Aguardente without a customs licence: €500–€25,000 + confiscation',
          'Failure to pay alcohol excise on sale: €1,000–€50,000'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Grapes (if buying)', amountEURMin: 0.50, amountEURMax: 2, note: 'Per kg; for 100 L — 100–150 kg' },
    { label: 'Starter kit (vessel, yeast, sulphite)', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Manual crusher', amountEURMin: 100, amountEURMax: 250 },
    { label: '0.75 L bottles for 100 L of wine', amountEURMin: 70, amountEURMax: 130, note: '~130 bottles' },
    { label: '25–50 L oak barrel', amountEURMin: 200, amountEURMax: 500, note: 'Optional for red' },
    { label: 'Analysis for commerce', amountEURMin: 80, amountEURMax: 200, note: 'Laboratory' },
    { label: 'DOC certification', amountEURMin: 200, amountEURMax: 500, note: 'Via CVR' }
  ],
  sources: [
    { title: 'IVV — Institute of Vine and Wine', url: 'https://www.ivv.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IVDP — Institute of the Wines of Douro and Porto', url: 'https://www.ivdp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 219/2008 — legal regime of the wine sector', url: 'https://dre.pt/dre/detalhe/decreto-lei/219-2008-441478', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IFAP — support for viticulture', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
