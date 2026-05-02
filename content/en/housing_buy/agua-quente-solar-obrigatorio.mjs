export default {
  editorialVoice: 'hackportugal',
  id: 'agua-quente-solar-obrigatorio',
  categoryId: 'housing_buy',
  title: 'Solar thermal: mandatory hot water from the sun in new-build housing',
  tldr: 'In Portugal, solar water heating became mandatory for new housing back under DL 80/2006: the project must include solar térmico for águas quentes sanitárias, usually with calculated coverage of around 70% of annual demand, if the roof/façade is technically suitable. In 2026, DL 80/2006 itself has already been replaced by the SCE regime and DL 101-D/2020, but the principle remains: a new building must pass energy certification and show a contribution from renewables. For existing homes, installation is not mandatory, but incentivos may be available through the Fundo Ambiental under open avisos.',
  tags: ['solar', 'hot-water', 'sce', 'housing'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-mandatory',
      title: 'What exactly is mandatory in a new home',
      content: [
        { kind: 'paragraph', text: 'Solar térmico is not solar panels for electricity, but collectors that heat domestic hot water: shower, kitchen, bathrooms. In Portuguese documents, look for the terms: sistemas solares térmicos, AQS — águas quentes sanitárias, depósito acumulador, apoio elétrico/gás/bomba de calor.' },
        { kind: 'paragraph', text: 'DL 80/2006 introduced the practical obligation to provide solar collectors in new buildings for AQS, where there is suitable solar exposure. The typical benchmark is coverage of at least 70% of annual hot-water demand using solar energy; the remaining peaks are covered by apoio: an electric immersion heater, gas boiler or bomba de calor.' },
        { kind: 'warning', text: 'In 2026, DL 80/2006 is no longer the current baseline energy-efficiency regime: it has been replaced by subsequent SCE rules, and the key act now is Decreto-Lei 101-D/2020. But when buying a new-build, the practical meaning for the buyer is the same: the project must be compatible with the energy certificate and the requirements for renewables/AQS.' }
      ]
    },
    {
      id: 'where-to-check-before-buying',
      title: 'What to check before buying a new-build 🏗️',
      content: [
        { kind: 'checklist', items: [
          'Ask for the Certificado Energético SCE: class, certificate number, date, técnico perito qualificado.',
          'In the technical description of the flat, check for the words solar térmico or sistema solar para AQS.',
          'Confirm the capacity of the depósito acumulador: for T1/T2 often 150–200 l, for T3/T4 — 200–300 l and more.',
          'Check whether the flat has an individual system or a shared condomínio system.',
          'Confirm the type of apoio: electric, gas, bomba de calor; this affects winter bills.',
          'Ask where the collectors are physically located: roof, terrace, technical area; and whether there is access for maintenance.',
          'Ask for the manual de utilização e manutenção and the manufacturer’s warranty.',
          'Check whether the system is included in the escritura/caderneta predial as part of the building or whether it is condomínio equipment.',
          'If the seller says “we have photovoltaic”, clarify separately: photovoltaic produces electricity, but does not automatically replace solar térmico for AQS.',
          'For a building after 2021, ask for confirmation that the project passed SCE under DL 101-D/2020 and the applicable portarias.'
        ] }
      ]
    },
    {
      id: 'existing-homes',
      title: 'If the home is already built: no obligation, but it may make sense',
      content: [
        { kind: 'paragraph', text: 'For existing housing, installing solar térmico is usually not mandatory. Exceptions may arise during major renovation, replacement of AQS systems, or due to project/licenciamento requirements at the Câmara Municipal. For an ordinary flat bought on the resale market, nobody will force you to urgently install a collector.' },
        { kind: 'paragraph', text: 'The economics depend on hot-water consumption. A family of 3–4 people with an electric water heater usually sees the most noticeable effect: in summer, apoio is hardly needed; in winter, the system reduces the load, but does not fully replace the backup.' },
        { kind: 'warning', text: 'In an apartment building, you cannot simply put a collector on the roof without the consent of the condomínio. The roof is usually a common part of the building; you need an acta da assembleia de condóminos, a technical project and sometimes comunicação/licença at the Câmara Municipal.' }
      ]
    },
    {
      id: 'incentives',
      title: 'Incentivos and Fundo Ambiental in 2026',
      content: [
        { kind: 'paragraph', text: 'For existing homes, subsidies are not automatic, but run through specific Fundo Ambiental avisos: for example, building energy-efficiency programmes may include solar térmico bombas de calor, insulation and windows. Conditions change by aviso: support percentage, maximum amount, region, invoice date, mandatory equipment certificates.' },
        { kind: 'checklist', items: [
          'Check only the official Fundo Ambiental website and avisos abertos.',
          'Do not buy equipment “for a subsidy” until you have read the eligible expenditure dates.',
          'Keep the fatura with the homeowner’s NIF.',
          'Pay by bank method so there is a comprovativo de pagamento.',
          'Check that the installer issues a declaração técnica and ficha do equipamento.',
          'For some avisos, a Certificado Energético before/after the works is required.',
          'If the property is rented, obtain the owner’s written consent in advance.',
          'For a condomínio, clarify whether the application is submitted by the owner, administração do condomínio or each condómino separately.'
        ] }
      ]
    },
    {
      id: 'red-flags',
      title: 'Red flags in adverts and contracts',
      content: [
        { kind: 'checklist', items: [
          '“Painéis solares incluídos” without clarification: photovoltaic or solar térmico.',
          'No Certificado Energético SCE before the escritura.',
          'The contrato-promessa does not describe the AQS and apoio systems.',
          'The developer promises class A+ but does not provide the SCE number or pré-certificado.',
          'Collectors are listed, but there is no depósito acumulador or space for it.',
          'The system is shared, but maintenance is not budgeted in the orçamento condomínio.',
          'The seller says solar térmico “is not needed because there is air conditioning”. These are different systems.',
          'No access to the roof/technical area for the annual inspection.',
          'Warranty only on installation, but not on the collectors, pump, controller and tank.'
        ] },
        { kind: 'paragraph', text: 'A normal wording for due diligence: ask the seller for the projeto de especialidades, ficha técnica da habitação, Certificado Energético SCE, manual da instalação solar térmica and warranty documents. If you are buying off-plan, include the AQS specifications in the contrato-promessa.' }
      ]
    }
  ],
  costs: [
    { label: 'Solar térmico for a flat/small house', amountEURMin: 1800, amountEURMax: 3500, note: 'Indicative cost for a kit with a 150–300 l tank and installation; the price depends on the roof, pipes, access and apoio.' },
    { label: 'Annual maintenance', amountEURMin: 80, amountEURMax: 150, note: 'Checking pressure, glycol, pump, controller and leaks; a condomínio may have a shared contract.' },
    { label: 'Certificado Energético SCE for housing', amountEURMin: 150, amountEURMax: 350, note: 'Market benchmark for a flat/house; depends on area and perito qualificado.' }
  ],
  sources: [
    {
      title: 'ADENE — Sistema de Certificação Energética dos Edifícios',
      url: 'https://www.adene.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGEG — Energia solar térmica and energy efficiency',
      url: 'https://www.dgeg.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 80/2006 — Regulation on the Thermal Performance Characteristics of Buildings',
      url: 'https://dre.pt/dre/detalhe/decreto-lei/80-2006-672115',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 101-D/2020 — energy performance of buildings and SCE',
      url: 'https://dre.pt/dre/detalhe/decreto-lei/101-d-2020-150570704',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
