export default {
  editorialVoice: 'hackportugal',
  id: 'vinho-caseiro-particular',
  categoryId: 'food_leisure',
  title: 'Your own homemade wine — what is allowed without a licence',
  tldr: 'If you have grapes growing on your plot, you can make wine for your own consumption without any licences. The limit is 100 l per year per family without a declaration (IVDP law). Above 100 l — a declaration to the IVV (Instituto da Vinha e do Vinho) is mandatory, even without selling. Selling is a seriously regulated business: a quality certificate, IGP/DOC certification, IVA, registo with the IVV are mandatory. For quintas with vines, it is worth checking whether the plot is in a DOC region — this affects the permitted grape varieties and style. Mixing with ordinary wines and selling as DOC without certification = a large fine.',
  tags: ['wine', 'homemade', 'ivdp', 'doc', 'home-made'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'limits',
      title: 'Limits for personal consumption',
      content: [
        { kind: 'paragraph', text: 'Portugal is the fifth-largest wine-producing country in the world. The law treats home production relatively leniently, but there are clear rules:' },
        { kind: 'checklist', items: [
          'Up to 100 l/year for a family: NO declarations. Make it and drink it, give it to neighbours',
          '100-1000 l/year: a declaration to the IVV (Instituto da Vinha e do Vinho) is mandatory, even without selling. The declaration is free, but mandatory',
          '1000+ l/year: this is already commercial production. Vineyard registration, atestado, regular samples',
          'Limits are calculated per "family" (agregado familiar), not per adult'
        ] },
        { kind: 'paragraph', text: 'This applies to "vinho de mesa" — ordinary wine. For other products:' },
        { kind: 'checklist', items: [
          'Aguardente (brandy, grape spirit): requires licenciamento alfandegário (customs licence), even for a small volume',
          'Vinagre (vinegar): for personal use — not regulated',
          'Licor (liqueur) — without sugar/spirit additives: up to 30 l/year without a declaration'
        ] }
      ]
    },
    {
      id: 'doc-regions',
      title: 'DOC regions and grapes on your plot',
      content: [
        { kind: 'paragraph', text: 'If your plot is in one of the DOC (Denominação de Origem Controlada) regions, you have a choice: use certification or not. Without certification, your wine is "vinho regional" or "vinho" (general category).' },
        { kind: 'checklist', items: [
          'Douro DOC: classic port and dry wines. Varieties: Touriga Nacional, Touriga Franca, Tinta Roriz, Tinta Barroca',
          'Vinho Verde DOC: young, light wines. Varieties: Loureiro, Trajadura, Alvarinho',
          'Alentejo DOC: heavy reds. Aragonez, Trincadeira, Castelão',
          'Dão DOC: refined reds and whites. Touriga Nacional, Encruzado, Jaen',
          'Bairrada DOC: classic Baga, Maria Gomes',
          'Madeira DOC: dessert wines. Sercial, Verdelho, Bual, Malvasia',
          'Lisboa: "vinho regional" — between DOC and the general category. A lot of flexibility',
          'Algarve: 4 DOC regions + a general region',
          'Açores: volcanic soils, specific varieties (Verdelho, Arinto dos Açores)'
        ] },
        { kind: 'paragraph', text: 'To make DOC wine, you need certification from the Comissão Vitivinícola Regional (CVR) of the relevant region. Minimum: registo of the vineyard with the IVV + wine analyses + tasting by the committee.' }
      ]
    },
    {
      id: 'making',
      title: 'The process — what you need',
      content: [
        { kind: 'paragraph', text: 'Basic kit for family production up to 100 l:' },
        { kind: 'checklist', items: [
          'Grapes: 100 kg = ~70-75 l of wine',
          'Crusher (esmagador): manual ~€150 or rental from €30/day',
          'Fermenter (cuba de fermentação): 100 l plastic tank with lid — €50-100',
          'Sulphite (metabissulfito de potássio): mandatory, against bacteria. ~€10 per season',
          'Yeast (leveduras enológicas): ~€5/packet for 100 l',
          'Hydrometer (densímetro) + refractometer (refractometro): to measure sugar. ~€30-50',
          'Dark glass bottles 0.75 l: €0.50-1 each',
          'Natural corks (cork oak from Algarve): €0.20-0.50 each',
          'Capsules and labels: extra, for looks',
          'Barrel (if you want): 25-50 l oak = €200-500. For reds with longer ageing'
        ] },
        { kind: 'paragraph', text: 'The process, simplified:' },
        { kind: 'checklist', items: [
          'Harvest: mid-September to late October, depending on the region',
          'Crushing + destemming (engaço)',
          'Sulphite immediately',
          'Yeast after 24 hours',
          'Fermentation: 7-15 days at ~22-26°C',
          'Transfer to a clean tank (trasfega): separate from the sediment (borras)',
          'Top up (right to the brim), tight lid',
          'Ageing: 3-12 months depending on style',
          'Bottling',
          'Bottle maturation: 6-12 months minimum for reds'
        ] }
      ]
    },
    {
      id: 'selling',
      title: 'If you want to sell — serious requirements',
      content: [
        { kind: 'paragraph', text: 'Commerce is a different league. In addition to the standard business set-up, you need:' },
        { kind: 'checklist', items: [
          'Vineyard registration with the IVV (RVCC — Registo Vitivinícola)',
          'Harvest and production declarations every season',
          'Wine analyses: alcoholic strength, sulphites, acidity, microorganisms',
          'IPAC-accredited laboratory: ~€80-200 for a full analysis',
          'Labels under EU 2019/787: type, region, alcoholic %, volume, NIF, country, allergens (sulphites, eggs)',
          'Lote Code (batch): mandatory',
          'Atividade aberta in Finanças: CIRS code 1102 — produção de vinhos',
          'IVA: 13% reduced for vinho de mesa, 23% for premium',
          'Selling at markets: licence from the Câmara, AT excise duty (alcohol tax) ~€0.10/l',
          'Online sales: ASAE supervises, seller registration is mandatory',
          'Export outside the EU: licence from Direção Geral das Alfândegas (customs)'
        ] }
      ]
    },
    {
      id: 'tips',
      title: 'Tips and festivals',
      content: [
        { kind: 'checklist', items: [
          'If you have 5-10 vines at your holiday home — expect roughly 50-70 l of wine per season straight away (that is already a family stock)',
          'The "vinhão" variety (Vinho Verde region) is the most "country-house friendly": easy to make, accessible equipment',
          'Local farmers (vinicultores) often accept olives/grapes from neighbours for a percentage or for money',
          'Adega cooperativa — a local winemakers’ cooperative, can accept your grapes and make communal wine',
          'Regional festas: Festa das Vindimas in Palmela (September), Vinho Verde Festival in the Northwest, Festa do Vinho in Madeira',
          'Courses for enthusiasts: IVDP in Porto, Universidade de Evora, ESAS Castelo Branco',
          'Books: "Manual do Vinho Caseiro" (in Portuguese), lots of YouTube channels'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Fines for violations',
      content: [
        { kind: 'checklist', items: [
          'Production above 100 l without an IVV declaration: €100-1000',
          'Selling without registo: €500-5000',
          'Use of a DOC name without certification: €1500-25000',
          'Falsifying a regional name: criminal offence',
          'Aguardente without a customs licence: €500-25000 + confiscation',
          'Failure to pay alcohol excise duty when selling: €1000-50000'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Grapes (if you buy them)', amountEURMin: 0.50, amountEURMax: 2, note: 'Per kg; for 100 l — 100-150 kg' },
    { label: 'Starter kit (tank, yeast, sulphite)', amountEURMin: 100, amountEURMax: 250 },
    { label: 'Manual crusher', amountEURMin: 100, amountEURMax: 250 },
    { label: '0.75 l bottles for 100 l of wine', amountEURMin: 70, amountEURMax: 130, note: '~130 bottles' },
    { label: 'Oak barrel 25-50 l', amountEURMin: 200, amountEURMax: 500, note: 'Optional for red wine' },
    { label: 'Analysis for commercial sale', amountEURMin: 80, amountEURMax: 200, note: 'Laboratory' },
    { label: 'DOC certification', amountEURMin: 200, amountEURMax: 500, note: 'Through CVR' }
  ],
  sources: [
    { title: 'IVV — Instituto da Vinha e do Vinho', url: 'https://www.ivv.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IVDP — Instituto dos Vinhos do Douro e Porto', url: 'https://www.ivdp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 219/2008 — legal regime for the wine sector', url: 'https://dre.pt/dre/detalhe/decreto-lei/219-2008-441478', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IFAP — support for viticulture', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
