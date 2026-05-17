export default {
  editorialVoice: 'hackportugal',
  id: 'fa-vehicles-eletricos-2026',
  categoryId: 'auto_ownership',
  title: 'Fundo Ambiental: electric car subsidy in 2026',
  tldr: 'Fundo Ambiental issues vouchers for mobilidade elétrica every year: in the last full cycle, Avisos 2025, the budget was €13.5 million; for individuals, €4,000 for a new 100% electric M1 passenger car up to €38,500 including IVA and with an old car handed in for scrapping; PHEVs did not qualify. As of 03/05/2026, a separate Aviso 2026 still needs to be checked on fundoambiental.pt: rules, limits and dates apply only after the new Aviso is published.',
  tags: ['fundoambiental', 'electriccar', 'subsidy', 'car'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What this subsidy is',
      content: [
        { kind: 'paragraph', text: 'Fundo Ambiental is a state fund that opens the Incentivo pela Introdução no Consumo de Veículos de Emissões Nulas programme each year. It is not a dealer discount, but compensation after purchase: you buy the vehicle, submit an application online, wait for validation and receive a transfer to your IBAN.' },
        { kind: 'paragraph', text: 'Important: the rules change every year. As of 03/05/2026, you must check the new Aviso 2026 specifically on the Fundo Ambiental website. The last full published reference point is Avisos Mobilidade Elétrica 2025: a total budget of €13.5 million, category limits and the “while budget remains” principle.' },
        { kind: 'warning', text: 'Do not sign a compra e venda solely “for the subsidy”. The right to payment does not arise from dealer advertising, but from the specific Aviso. If the 2026 Aviso changes the price limit, scrapping requirement or list of categories, the new rules apply.' }
      ]
    },
    {
      id: 'eligible-vehicles',
      title: 'What usually qualifies: BEVs, vans, bicycles',
      content: [
        { kind: 'paragraph', text: 'In 2025, the programme was aimed at veículos de emissões nulas — vehicles with zero emissions at the point of use. For passenger cars, this meant a 100% electric car, not a plug-in hybrid.' },
        { kind: 'checklist', items: [
          '100% electric M1 passenger car for an individual: 2025 reference point — €4,000.',
          'Maximum passenger car price under Aviso 2025: €38,500 including IVA and all mandatory costs on the invoice.',
          'PHEV / plug-in hybrid: in Avisos 2025 they were not considered “emissões nulas” for this support.',
          'New 100% electric N1 light goods vehicle: 2025 reference point — €6,000.',
          'Cargo bike / bicicleta de carga: 2025 reference point — 50% of the cost up to €1,500.',
          'Electric bicycle: 2025 reference point — 50% of the cost up to €500.',
          'Standard bicycle: 2025 reference point — 50% of the cost up to €150.',
          'Electric motorcycle / moped: 2025 reference point — 50% of the cost up to €500.',
          'Charging in a condomínio: in 2025 there was a separate category for condomínios, usually not the same as a subsidy for a personal wallbox in a private house.'
        ] },
        { kind: 'warning', text: 'The purchase of a used car, an imported car with first registration outside the Aviso rules, renting/leasing without transfer of ownership, and cars above the limit often do not qualify. Check the wording “aquisição” and “primeira matrícula” in the current Aviso.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Who can apply in Portugal',
      content: [
        { kind: 'paragraph', text: 'For an expat, the key question is not citizenship, but residence and tax compliance. In the typical Fundo Ambiental model, an individual must be resident in Portugal, have a NIF, access to the Portal do Fundo Ambiental and an IBAN to which the fund will transfer the money.' },
        { kind: 'checklist', items: [
          'NIF and access to autenticação.gov.pt / Chave Móvel Digital or another supported authentication method.',
          'Portuguese address and resident status: a residence permit, EU registration certificate or other lawful status does not by itself replace the conditions of the specific Aviso, but is needed for normal tax identification.',
          'No debts to the Autoridade Tributária: a declaração de não dívida or consent for verification is usually required.',
          'No debts to Segurança Social: even if you do not work, the portal may request confirmation.',
          'IBAN in the applicant’s name; a PT IBAN is better, although a SEPA IBAN should formally be accepted, in practice a PT IBAN reduces friction.',
          'The invoice and recibo must be in the name of the same applicant who submits the application.',
          'Usually one incentive per category/applicant within the year, but check the exact limit in Aviso 2026.',
          'For a passenger BEV under the 2025 model, scrapping an old internal-combustion car was required; the new Aviso may keep or change this condition.'
        ] },
        { kind: 'warning', text: 'If you are only just moving and are not yet resident in Portugal, do not treat Fundo Ambiental as a guaranteed discount. First check eligibility in the Aviso: “pessoas singulares residentes em território nacional” and the documents the fund accepts as proof.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents before applying',
      content: [
        { kind: 'paragraph', text: 'The application is submitted online, but refusals most often arise from small details: the wrong owner in the Documento Único Automóvel, a price above the limit, no scrapping certificate, or an invoice issued to a spouse.' },
        { kind: 'checklist', items: [
          'Fatura and recibo / comprovativo de pagamento in the applicant’s name.',
          'Documento Único Automóvel or certificado de matrícula for the new car.',
          'Proof of first registration in Portugal and the matrícula date within the period allowed by the Aviso.',
          'Comprovativo de IBAN in the applicant’s name.',
          'Declaração de situação regularizada from Finanças or autorização para consulta.',
          'Declaração de situação regularizada from Segurança Social or autorização para consulta.',
          'For a category with scrapping: certificado de destruição from a centro autorizado de tratamento de veículos em fim de vida.',
          'Proof that the old vehicle belonged to the applicant for the period required by the Aviso, if such a condition exists.',
          'Vehicle technical specifications: brand, model, version, VIN/frame, power, battery type — on the invoice or in an attachment.',
          'For a cargo bike/e-bike: an invoice clearly stating the model and category compliance, not simply “bicicleta”.'
        ] },
        { kind: 'warning', text: 'The €38,500 price in Aviso 2025 was calculated including IVA. Dealer “campaigns” sometimes show a price excluding mandatory expenses, ISV/IUC/delivery/documentation. For the fund, the amount on the fatura matters.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply on fundoambiental.pt',
      content: [
        { kind: 'substeps', items: [
          { id: 'open-aviso', title: '1. Find the current Aviso', content: [
            { kind: 'paragraph', text: 'Go to fundoambiental.pt → Avisos → Mobilidade Elétrica. Open the Aviso 2026 specifically, once it is published, not last year’s PDF. Download the Regulamento/Aviso and the FAQ list.' }
          ] },
          { id: 'register', title: '2. Log in and create a candidatura', content: [
            { kind: 'paragraph', text: 'Use your NIF and digital authentication. In the form, choose the category: passenger BEV, N1, cargo bike, e-bike, motorcycle or condomínio charging — the category names must match the Aviso.' }
          ] },
          { id: 'upload', title: '3. Upload the documents', content: [
            { kind: 'paragraph', text: 'It is best to name files clearly: fatura.pdf, recibo.pdf, dua.pdf, iban.pdf, certidao-at.pdf, certidao-ss.pdf, certificado-destruicao.pdf. Check that the NIF, name and VIN match across all documents.' }
          ] },
          { id: 'submit', title: '4. Submit and monitor the status', content: [
            { kind: 'paragraph', text: 'After submissão, the application receives a number. Priority usually depends on correct submission and available budget; an incomplete file may be sent back for correction and lose momentum.' }
          ] },
          { id: 'payment', title: '5. Receive the payment', content: [
            { kind: 'paragraph', text: 'After validação, Fundo Ambiental transfers the amount to the IBAN. The payment timeframe is not guaranteed: in past cycles, the wait could take weeks or months because of document checks and the budget limit.' }
          ] }
        ] }
      ]
    },
    {
      id: 'strategy-2026',
      title: 'Practical strategy for 2026',
      content: [
        { kind: 'paragraph', text: 'If you are buying an electric car in spring 2026, act like an accountant: first check the Aviso, then choose the model and prepare the documents. The dealer can help, but responsibility for the application remains with you.' },
        { kind: 'checklist', items: [
          'Before ordering, check whether Aviso 2026 has been published and whether the prazo de candidaturas is open.',
          'Choose a car with a margin below the limit: for example, not €38,490 if the dealer may add despesas administrativas.',
          'Ask the dealer in advance whether the fatura will include the full price, VIN and delivery date.',
          'If scrapping is required, do not hand in the old car as a “trade-in” without a certificado de destruição from an authorised centre.',
          'Do not register the car to a spouse/company if you will be applying as an individual.',
          'Check that you have no debts in Finanças and Segurança Social before applying, not after a refusal.',
          'Save PDFs of all documents and a screenshot of the submissão.',
          'Do not treat the subsidy as a mandatory down payment: the fund pays after the fact and only after checks.'
        ] },
        { kind: 'warning', text: 'Fundo Ambiental is a competitive budget, not a social right. Even if you formally comply, the fund may close applications once funds are exhausted. In 2026, take final amounts, quotas and dates only from the published Aviso 2026.' }
      ]
    }
  ],
  costs: [
    { label: '100% electric M1 passenger car for an individual', amountEUR: 4000, note: 'Avisos 2025 reference point; car price up to €38,500 including IVA; confirm under the new Aviso in 2026.' },
    { label: '100% electric N1 light goods vehicle', amountEUR: 6000, note: 'Avisos 2025 reference point; conditions depend on the applicant category and the Aviso.' },
    { label: 'Cargo bike / bicicleta de carga', amountEURMax: 1500, note: 'Avisos 2025 reference point: up to 50% of the cost, but not above the limit.' },
    { label: 'Electric bicycle', amountEURMax: 500, note: 'Avisos 2025 reference point: up to 50% of the cost.' },
    { label: 'Standard bicycle', amountEURMax: 150, note: 'Avisos 2025 reference point: up to 50% of the cost.' },
    { label: 'Electric motorcycle or moped', amountEURMax: 500, note: 'Avisos 2025 reference point: up to 50% of the cost.' }
  ],
  sources: [
    { title: 'Fundo Ambiental — official portal', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Fundo Ambiental — Aviso 06/2025: Veículos de Emissões Nulas (Mobilidade Verde Passageiros)', url: 'https://www.fundoambiental.pt/avisos-anteriores/apoios-20242/mitigacao-as-alteracoes-climaticas/incentivo-pela-aquisicao-de-veiculos-de-emissoes-nulas-ano-20252026-mobilidade-verde--passageiros.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 90
}
