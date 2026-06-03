export default {
  editorialVoice: 'hackportugal',
  id: 'vinho-caseiro-particular',
  categoryId: 'food_leisure',
  title: 'Your own homemade wine — what is allowed without a licence',
  tldr: 'If you have grapes growing on your plot, you can make wine for your own consumption without any licences.\n\nFor self-consumption you do not need to register with the IVV up to 4,000 l per year; a production declaration is not required up to 1,000 l (10 hl) as long as the wine is not sold.\n\nAbove those volumes, or if you sell, registration and declarations with the IVV (Instituto da Vinha e do Vinho) become mandatory. Selling is a serious regulated business: a quality certificate, IGP/DOC certifications, IVA and registration with the IVV are mandatory. For quintas with vines, it is worth finding out whether the plot is inside a DOC region — this affects the permitted grape varieties and style. Mixing with ordinary wines and selling as DOC without certification = a large fine.',
  tags: ['wine', 'homemade', 'ivdp', 'doc', 'private'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'limits',
      title: 'Limits for personal consumption',
      content: [
        { kind: 'paragraph', text: 'Portugal is one of the world’s largest wine producers (around 10th-11th by volume). The law treats home production relatively leniently, but there are clear rules:' },
        { kind: 'checklist', items: [
          'Up to 1,000 l/year (10 hl) for a household and not sold: no production declaration (DCP) to the IVV is required. Make it and drink it, give it to neighbours',
          'Up to 4,000 l/year for self-consumption: no registration (inscrição) with the IVV (Instituto da Vinha e do Vinho) is required',
          'Above 1,000 l or any selling: registration with the IVV and the mandatory declarations (harvest/production) are required',
          'Commercial production: vineyard registration, certificate, regular samples',
          'Limits are calculated per “household” (agregado familiar), not per adult'
        ] },
        { kind: 'paragraph', text: 'This applies to “vinho de mesa” — ordinary wine. For other products:' },
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
        { kind: 'paragraph', text: 'If your plot is in one of the DOC (Denominação de Origem Controlada) regions, you have a choice: use certification or not. Without certification, your wine is “vinho regional” or “vinho” (general category).' },
        { kind: 'checklist', items: [
          'Douro DOC: classic port and dry wines. Varieties: Touriga Nacional, Touriga Franca, Tinta Roriz, Tinta Barroca',
          'Vinho Verde DOC: young light wines. Varieties: Loureiro, Trajadura, Alvarinho',
          'Alentejo DOC: full-bodied reds. Aragonez, Trincadeira, Castelão',
          'Dão DOC: fine reds and whites. Touriga Nacional, Encruzado, Jaen',
          'Bairrada DOC: classic Baga, Maria Gomes',
          'Madeira DOC: dessert wines. Sercial, Verdelho, Bual, Malvasia',
          'Lisboa: “vinho regional” — between DOC and the general category. A lot of flexibility',
          'Algarve: 4 DOC regions + general region',
          'Açores: volcanic soils, specific varieties (Verdelho, Arinto dos Açores)'
        ] },
        { kind: 'paragraph', text: 'To make DOC wine — certification from the Comissão Vitivinícola Regional (CVR) for the relevant region is required. Minimum: vineyard registo with IVV + wine analyses + committee tasting.' }
      ]
    },
    {
      id: 'making',
      title: 'The process — what you need',
      content: [
        { kind: 'paragraph', text: 'Basic kit for household production up to 100 l:' },
        { kind: 'checklist', items: [
          'Grapes: 100 kg = ~70-75 l of wine',
          'Crusher (esmagador): manual ~€150 or hire from €30/day',
          'Fermentation vessel (cuba de fermentação): plastic tank with lid, 100 l — €50-€100',
          'Sulphite (metabissulfito de potássio): essential, against bacteria. ~€10 per season',
          'Yeast (leveduras enológicas): ~€5/packet for 100 l',
          'Hydrometer (densímetro) + refractometer (refractometro): to measure sugar. ~€30-€50',
          'Dark-glass bottles 0.75 l: €0.50-€1 each',
          'Natural corks (cork oak cork from the Algarve): €0.20-€0.50 each',
          'Capsules and labels: extra, for appearance',
          'Barrel (if you want): oak 25-50 l = €200-€500. For reds with longer ageing'
        ] },
        { kind: 'paragraph', text: 'The process, simplified:' },
        { kind: 'checklist', items: [
          'Harvest: mid-September — late October depending on the region',
          'Crushing + removal of stems (engaço)',
          'Sulphite immediately',
          'Yeast after 24 hours',
          'Fermentation: 7-15 days at ~22-26°C',
          'Transfer to a clean tank (trasfega): separate from sediment (borras)',
          'Top up (right to the edge), tight lid',
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
        { kind: 'paragraph', text: 'Commercial activity is a different league. In addition to the standard business set-up, you need:' },
        { kind: 'checklist', items: [
          'Vineyard registration with IVV (RVCC — Registo Vitivinícola)',
          'Harvest and production declarations every season',
          'Wine analyses: alcoholic strength, sulphites, acidity, microorganisms',
          'IPAC-accredited laboratory: ~€80-€200 for a full analysis',
          'Labels under EU 2019/787: type, region, alcoholic %, volume, NIF, country, allergens (sulphites, eggs)',
          'Lote Code (batch): mandatory',
          'Atividade aberta in Finanças: CIRS code 1102 — produção de vinhos',
          'IVA: reduced 13% for vinho de mesa, 23% for premium',
          'Selling at markets: licence from the Câmara, AT excise duty (alcohol tax) ~€0.10/l',
          'Online sales: ASAE monitors this, mandatory seller registration',
          'Export outside the EU: licence from Direção Geral das Alfândegas (customs)'
        ] }
      ]
    },
    {
      id: 'tips',
      title: 'Tips and festivals',
      content: [
        { kind: 'checklist', items: [
          'If you have 5-10 vines at a holiday home — expect around 50-70 l of wine per season straight away (already a household supply)',
          'The “vinhão” variety (Vinho Verde region) is the most “holiday-home friendly”: easy to make, accessible equipment',
          'Local farmers (vinicultores) often accept olives/grapes from neighbours for a percentage or money',
          'Adega cooperativa — a local winemakers’ cooperative, can accept your grapes and make a collective wine',
          'Regional festas: Festa das Vindimas in Palmela (September), Vinho Verde Festival in the Northwest, Festa do Vinho in Madeira',
          'Courses for enthusiasts: IVDP in Porto, Universidade de Evora, ESAS Castelo Branco',
          'Books: “Manual do Vinho Caseiro” (in Portuguese), many YouTube channels'
        ] }
      ]
    },
    {
      id: 'fines',
      title: 'Fines for breaches',
      content: [
        { kind: 'checklist', items: [
          'Production above the limit without an IVV declaration: €100-€1,000',
          'Selling without registo: €500-€5,000',
          'Using a DOC name without certification: €1,500-€25,000',
          'Forgery of a regional name: criminal offence',
          'Aguardente without a customs licence: €500-€25,000 + confiscation',
          'Not paying alcohol excise duty when selling: €1,000-€50,000'
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
    { label: 'Analysis for commercial activity', amountEURMin: 80, amountEURMax: 200, note: 'Laboratory' },
    { label: 'DOC certification', amountEURMin: 200, amountEURMax: 500, note: 'Through CVR' }
  ],
  sources: [
    { title: 'IVV — Instituto da Vinha e do Vinho', url: 'https://www.ivv.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IVDP — Instituto dos Vinhos do Douro e Porto', url: 'https://www.ivdp.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 219/2008 — legal framework for the wine sector', url: 'https://dre.pt/dre/detalhe/decreto-lei/219-2008-441478', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'IFAP — support for viticulture', url: 'https://www.ifap.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
