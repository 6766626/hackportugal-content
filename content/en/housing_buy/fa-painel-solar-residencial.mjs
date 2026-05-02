export default {
  editorialVoice: 'hackportugal',
  id: 'fa-painel-solar-residencial',
  categoryId: 'housing_buy',
  title: 'Fundo Ambiental: voucher for residential solar panels',
  tldr: 'Fundo Ambiental periodically opens calls to reimburse solar panels for homes: solar fotovoltaico for autoconsumo and solar térmico for hot water. In typical Aviso calls, the per-home limit has reached around €2,500, but this is not a permanent benefit: in April 2026 you need to wait for a new Aviso/PRR round and check the conditions of that specific wave. You need housing in Portugal, NIF, no debts to AT/Segurança Social, an invoice and an installer from the permitted list.',
  tags: ['fundoambiental', 'solar', 'housing', 'upac'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What this voucher is and who needs it',
      content: [
        { kind: 'paragraph', text: 'Fundo Ambiental is a state fund through which Portugal distributes subsidies for residential energy efficiency. For solar systems, this is usually not a “shop discount”, but reimbursement of part of the costs after installation and submission of an application on the Fundo Ambiental portal.' },
        { kind: 'paragraph', text: 'Support may cover solar fotovoltaico — panels for own electricity consumption, and solar térmico — panels for heating water. In previous Edifícios + Sustentáveis rounds, limits for specific typologies reached around €2,500 per dwelling, but the exact percentages, caps and eligible expenses are always set by the specific Aviso.' },
        { kind: 'warning', text: 'As of April 2026, this is not an automatic right for a homeowner. If a new Aviso has not yet opened, payment for an installation “retroactively” cannot be guaranteed. Before signing a contract, check the admissibilidade das despesas date in the current Aviso.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who usually meets the conditions',
      content: [
        { kind: 'checklist', items: [
          'The home is in Portugal: a flat or house used as habitação.',
          'The applicant has NIF and access to Portal do Fundo Ambiental; for expats, NIF + email/password works, and sometimes CMD makes login easier.',
          'The applicant is the owner, co-owner, usufrutuário or another titular, if this is expressly allowed by the Aviso.',
          'There are no debts to Autoridade Tributária and Segurança Social; certidões de não dívida are usually required.',
          'Expenses are supported by fatura and recibo in the applicant’s name with a Portuguese NIF.',
          'The equipment is new, installed in an eligible dwelling and meets the technical requirements of the Aviso.',
          'The installer/company meets the Fundo Ambiental requirements; in some rounds you must choose from a list of aderentes or provide certification.',
          'The IBAN belongs to the applicant; reimbursement arrives by bank transfer after checks.',
          'The application is submitted on time and before the call budget is exhausted.'
        ] },
        { kind: 'warning', text: 'A tenant without the owner’s consent is almost always in a weak position: panels change the technical configuration of the home and require autorização do proprietário/condomínio. For a flat, also check the condomínio rules and roof access.' }
      ]
    },
    {
      id: 'amounts-and-2026-timing',
      title: 'How much they give and when to expect the 2026 wave',
      content: [
        { kind: 'paragraph', text: 'Fundo Ambiental works through an Aviso: the call document sets the budget, dates, reimbursement percentages, limit by type of equipment and list of documents. In 2026, rely not on an installer’s advertising banner, but on the PDF Aviso on fundoambiental.pt.' },
        { kind: 'paragraph', text: 'A practical reference point for a home solar system: reimbursement may be partial — for example, up to 85% of eligible cost in previous energy-efficiency programmes, but with a cap by typology. For solar térmico or PV with storage, the limit could be higher, around €2,500; for simple PV without a battery, the cap could be lower. In a new wave, the figures may differ.' },
        { kind: 'checklist', items: [
          'Check the “Avisos Abertos” section on fundoambiental.pt.',
          'Look at the programme name: Edifícios + Sustentáveis, Vale Eficiência or another PRR/Clima instrument — the conditions differ.',
          'Record the opening date and the admissibilidade das despesas date.',
          'Clarify whether you can apply with a system already installed or only for expenses after publication of the Aviso.',
          'Check whether there is a higher limit for areas outside Lisboa/Porto or for vulnerable households.',
          'Do not count on payment if the Aviso budget has run out: applications are usually reviewed in order of submission and completeness.'
        ] }
      ]
    },
    {
      id: 'before-installation',
      title: 'What to do before installing the panels',
      content: [
        { kind: 'substeps', items: [
          { id: 'check-property', title: '1. Check the property and restrictions', content: [
            { kind: 'checklist', items: [
              'For a house: roof orientation, shade, tile condition, connection capacity.',
              'For a flat: condomínio minutes, right to use the roof, space for the inverter and cable.',
              'For historic areas: Câmara Municipal or DGPC restrictions may prohibit visible panels.',
              'For solar térmico: space for the tank, water routes and load on the roof.',
              'For PV: expected daytime consumption, presence of a heat pump, EV charger or battery.'
            ] }
          ] },
          { id: 'choose-installer', title: '2. Choose an installer without traps', content: [
            { kind: 'checklist', items: [
              'Ask for an orçamento with a breakdown: panels, inverter, structure, cables, protection, installation, IVA.',
              'Check whether the company meets the requirements of the current Aviso and whether it is on the list of permitted fornecedores/instaladores, if a list has been published.',
              'Ask for the equipment datasheet and warranty: panels are usually 12–25 years, the inverter often 5–10 years.',
              'Check whether the price includes UPAC registration with DGEG, if required.',
              'Do not pay 100% before checking the documents for Fundo Ambiental.'
            ] }
          ] },
          { id: 'paper-trail', title: '3. Collect the correct documents straight away', content: [
            { kind: 'checklist', items: [
              'Fatura with your NIF and the property address.',
              'Recibo or comprovativo de pagamento: bank transfer, Multibanco, MB WAY with traceable proof.',
              'Certidão predial or caderneta predial urbana to link the applicant to the property.',
              'Certidões de não dívida AT and Segurança Social.',
              'Before/after photos, if required by the Aviso.',
              'Technical ficha for the equipment and declaração do instalador.',
              'Comprovativo IBAN in the applicant’s name.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'dgeg-and-grid',
      title: 'UPAC registration and grid connection',
      content: [
        { kind: 'paragraph', text: 'PV for own consumption in Portugal is regulated under the UPAC regime. Small systems usually go through simplified registration, but thresholds and obligations depend on installed capacity. The installer should explain whether comunicação prévia, registration with DGEG or certificado de exploração is required.' },
        { kind: 'paragraph', text: 'If the system feeds surplus into the grid, this is not the same as a Fundo Ambiental subsidy. Selling excedentes requires a contract with a comercializador/agregador and may have tax consequences. For a normal household, the key saving is reducing the EDP/Galp/Iberdrola bill and grid consumption during daytime hours.' },
        { kind: 'warning', text: 'Do not install panels “sem legalização”. When selling the house, in an insurance claim or during a condomínio check, the lack of DGEG/instalador documents can become a problem.' }
      ]
    },
    {
      id: 'application',
      title: 'How to apply to Fundo Ambiental',
      content: [
        { kind: 'checklist', items: [
          'Create an account on fundoambiental.pt and choose the relevant Aviso.',
          'Fill in dados do beneficiário: NIF, address, contacts, IBAN.',
          'Enter the property: morada, artigo matricial, type of housing.',
          'Choose the intervention type: solar fotovoltaico, solar térmico, storage, if available.',
          'Upload fatura, recibo, technical documents, AT/SS certidões and proof of ownership.',
          'Check that the amounts excluding/including IVA match the form requirements.',
          'Submit the candidatura and save the comprovativo submission.',
          'Reply quickly to pedidos de esclarecimento: missing the deadline leads to indeferimento.',
          'After aprovação, wait for pagamento; timeframes can range from weeks to many months.'
        ] },
        { kind: 'warning', text: 'If the application is rejected, you can usually submit a reclamação/contestação within the deadline stated in the notification. But the absence of a mandatory document, the wrong fatura date or an installer outside the Aviso conditions often cannot be fixed after the fact.' }
      ]
    }
  ],
  costs: [
    { label: 'Indicative Fundo Ambiental subsidy per dwelling', amountEURMax: 2500, note: 'Not a guaranteed 2026 limit; depends on the specific Aviso and equipment typology.' },
    { label: 'Home PV system without battery, 2–4 kW', amountEURMin: 2500, amountEURMax: 6000, note: 'Market price range with installation; depends heavily on the roof, inverter and brand.' },
    { label: 'PV with battery', amountEURMin: 6000, amountEURMax: 12000, note: 'A battery increases self-consumption, but does not always pay off without an accurate calculation of the consumption profile.' },
    { label: 'Solar térmico for hot water', amountEURMin: 1800, amountEURMax: 4500, note: 'Depends on the tank, number of collectors, roof and hydraulics.' }
  ],
  sources: [
    { title: 'Fundo Ambiental — official portal for programmes and Avisos', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DGEG — Autoconsumo and UPAC', url: 'https://www.dgeg.gov.pt/pt/areas-setoriais/energia/energia-eletrica/producao-de-energia-eletrica/autoconsumo-e-comunidades-de-energia-renovavel/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 15/2022 — organisation and operation of the Sistema Elétrico Nacional', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/15-2022-177634016', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ADENE — Energy certification and efficiency in buildings', url: 'https://www.adene.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
