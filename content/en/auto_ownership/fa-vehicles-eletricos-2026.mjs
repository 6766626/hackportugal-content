export default {
  editorialVoice: 'hackportugal',
  id: 'fa-vehicles-eletricos-2026',
  categoryId: 'auto_ownership',
  title: 'Fundo Ambiental: subsidy for an electric car in 2026',
  tldr: 'Fundo Ambiental annually issues vouchers for electric mobility: in the last full cycle Avisos 2025 the budget was €13.5 million, for individuals — €4,000 for a new 100% electric M1 passenger car up to €38,500 with IVA and with scrappage of an old car; PHEVs were not eligible. As of 03/05/2026 the separate Aviso 2026 must still be checked on fundoambiental.pt: rules, limits and dates only apply after the new Aviso is published.',
  tags: ['fundoambiental', 'electric-car', 'subsidy', 'auto'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What this subsidy is',
      content: [
        { kind: 'paragraph', text: 'Fundo Ambiental is a government fund that annually opens the programme "Incentivo pela Introdução no Consumo de Veículos de Emissões Nulas". This is not a dealer discount, but a reimbursement after purchase: you buy the vehicle, submit an online application, wait for validation and receive a transfer to your IBAN.' },
        { kind: 'paragraph', text: 'Important: the rules change every year. As of 03/05/2026 you must check the new Aviso 2026 on the Fundo Ambiental website. The last fully published reference is the Mobilidade Elétrica 2025 Avisos: overall budget €13.5 million, category caps, and a "while funds last" principle.' },
        { kind: 'warning', text: 'Do not sign a compra e venda solely “for the subsidy”. The right to payment derives not from the dealer’s advertising but from the specific Aviso. If the 2026 Aviso changes the price cap, scrappage requirement or list of categories, the new rules apply.' }
      ]
    },
    {
      id: 'eligible-vehicles',
      title: 'What is usually eligible: BEVs, vans, bicycles',
      content: [
        { kind: 'paragraph', text: 'In 2025 the programme focused on veículos de emissões nulas — vehicles with zero emissions at the point of use. For passenger cars this meant a 100% electric car, not a plug-in hybrid.' },
        { kind: 'checklist', items: [
          'Passenger 100% electric M1 for an individual: 2025 reference — €4,000.',
          'Maximum car price under Aviso 2025: €38,500 with IVA and all mandatory charges on the invoice.',
          'PHEV / híbrido plug-in: in the 2025 Avisos they were not considered "emissões nulas" for this support.',
          'New light commercial 100% electric N1: 2025 reference — €6,000.',
          'Cargo bike / bicicleta de carga: 2025 reference — 50% of cost up to €1,500.',
          'Electric bicycle: 2025 reference — 50% of cost up to €500.',
          'Conventional bicycle: 2025 reference — 50% of cost up to €150.',
          'Electric motorcycle / moped: 2025 reference — 50% of cost up to €500.',
          'Charging in a condomínio: in 2025 there was a separate category for condomínios, usually not equal to the subsidy for a personal wallbox in a detached house.'
        ] },
        { kind: 'warning', text: 'Purchasing a used car, an imported car with first registration outside the Aviso’s rules, renting/leasing without transfer of ownership, and cars above the cap often do not qualify. Check the wording “aquisição” and “primeira matrícula” in the current Aviso.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Who can apply in Portugal',
      content: [
        { kind: 'paragraph', text: 'For an expat, the key point is not nationality but residency and tax compliance. In Fundo Ambiental’s typical model, an individual must be resident in Portugal, have a NIF, access to the Fundo Ambiental portal, and an IBAN to which the fund will transfer the money.' },
        { kind: 'checklist', items: [
          'NIF and access to autenticação.gov.pt / Chave Móvel Digital or another supported authentication.',
          'Portuguese address and resident status: an autorização de residência, EU registration certificate or other lawful status by itself does not replace the conditions of the specific Aviso, but is required for normal tax identification.',
          'No debts with the Autoridade Tributária: usually a declaração de não dívida or consent for a check is required.',
          'No debts with Segurança Social: even if you are not working, the portal may ask for confirmation.',
          'IBAN in the applicant’s name; a PT IBAN is preferable, although a SEPA IBAN should be accepted in principle, in practice a PT IBAN reduces friction.',
          'The invoice (fatura) and receipt (recibo) must be in the same applicant’s name as on the application.',
          'Usually one incentive per category/applicant within the year, but check the exact limit in the 2026 Aviso.',
          'For passenger BEVs under the 2025 model, scrappage of an old ICE car was required; the new Aviso may keep or change this condition.'
        ] },
        { kind: 'warning', text: 'If you are only just moving and are not yet a resident of Portugal, do not rely on Fundo Ambiental as a guaranteed discount. First check the eligibility in the Aviso: “pessoas singulares residentes em território nacional” and the documents the fund accepts as proof.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents before applying',
      content: [
        { kind: 'paragraph', text: 'The application is submitted online, but refusals most often happen due to small details: the wrong owner in the Documento Único Automóvel, a price above the cap, no scrappage certificate, or the invoice made out to a spouse.' },
        { kind: 'checklist', items: [
          'Fatura and recibo / comprovativo de pagamento in the applicant’s name.',
          'Documento Único Automóvel or the registration certificate (certificado de matrícula) of the new car.',
          'Proof of first registration in Portugal and a matrícula date within the period allowed by the Aviso.',
          'Comprovativo de IBAN in the applicant’s name.',
          'Declaração de situação regularizada in Finanças or authorisation for a check.',
          'Declaração de situação regularizada in Segurança Social or authorisation for a check.',
          'For the category with scrappage: certificado de destruição from an authorised end-of-life vehicle treatment centre (centro autorizado de tratamento de veículos em fim de vida).',
          'Proof that the old car belonged to the applicant for the period required by the Aviso, if such a condition exists.',
          'Vehicle technical specifications: marca, modelo, versão, VIN/quadro, potência, battery type — on the invoice or an attachment.',
          'For cargo bike/e-bike: an invoice clearly stating the model and category compliance, not just “bicicleta”.'
        ] },
        { kind: 'warning', text: 'The €38,500 in Aviso 2025 was considered with IVA. Dealer “campaigns” sometimes show a price excluding mandatory costs, ISV/IUC/delivery/documentation. For the fund, the amount on the fatura is what matters.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'How to apply on fundoambiental.pt',
      content: [
        { kind: 'substeps', items: [
          { id: 'open-aviso', title: '1. Find the current Aviso', content: [
            { kind: 'paragraph', text: 'Go to fundoambiental.pt → Avisos → Mobilidade Elétrica. Open the actual Aviso 2026 when it is published, not last year’s PDF. Download the Regulamento/Aviso and the FAQ list.' }
          ] },
          { id: 'register', title: '2. Authenticate and create a candidatura', content: [
            { kind: 'paragraph', text: 'Use your NIF and digital authentication. In the form choose the category: passenger BEV, N1, cargo bike, e-bike, motorcycle or condomínio charging — the category names must match the Aviso.' }
          ] },
          { id: 'upload', title: '3. Upload the documents', content: [
            { kind: 'paragraph', text: 'It is best to name files clearly: fatura.pdf, recibo.pdf, dua.pdf, iban.pdf, certidao-at.pdf, certidao-ss.pdf, certificado-destruicao.pdf. Check that the NIF, name and VIN match across all documents.' }
          ] },
          { id: 'submit', title: '4. Submit and monitor the status', content: [
            { kind: 'paragraph', text: 'After submissão the application receives a number. Queue order usually depends on correct submission and available budget; an incomplete file may go back for correction and lose momentum.' }
          ] },
          { id: 'payment', title: '5. Receive the payment', content: [
            { kind: 'paragraph', text: 'After validação, Fundo Ambiental transfers the amount to your IBAN. The payment timeframe is not guaranteed: in previous cycles the wait could take weeks or months due to document checks and budget limits.' }
          ] }
        ] }
      ]
    },
    {
      id: 'strategy-2026',
      title: 'Practical strategy for 2026',
      content: [
        { kind: 'paragraph', text: 'If you are buying an electric car in spring 2026, act like an accountant: check the Aviso first, then choose the model and organise the paperwork. The dealer can help, but responsibility for the application remains with you.' },
        { kind: 'checklist', items: [
          'Before ordering, check whether Aviso 2026 has been published and whether the prazo de candidaturas is open.',
          'Choose a car with headroom below the cap: for example, not €38,490 if the dealer may add despesas administrativas.',
          'Ask the dealer in advance whether the fatura will have the full price, VIN and delivery date.',
          'If scrappage is required, do not hand in the old car as a trade-in without a certificado de destruição from an authorised centre.',
          'Do not register the car to a spouse/company if you will apply as an individual.',
          'Check for no debts in Finanças and Segurança Social before applying, not after a refusal.',
          'Save PDFs of all documents and a screenshot of the submissão.',
          'Do not treat the subsidy as a mandatory upfront contribution: the fund pays post factum and only after verification.'
        ] },
        { kind: 'warning', text: 'Fundo Ambiental is a competitive budget, not a social right. Even if you formally qualify, the fund may close intake after funds are exhausted. In 2026 take final amounts, quotas and dates only from the published Aviso 2026.' }
      ]
    }
  ],
  costs: [
    { label: 'Passenger 100% electric M1 for an individual', amountEUR: 4000, note: '2025 Avisos reference; car price up to €38,500 with IVA; in 2026 confirm in the new Aviso.' },
    { label: 'Light commercial 100% electric N1', amountEUR: 6000, note: '2025 Avisos reference; conditions depend on the applicant’s category and the Aviso.' },
    { label: 'Cargo bike / bicicleta de carga', amountEURMax: 1500, note: '2025 Avisos reference: up to 50% of cost, but not above the cap.' },
    { label: 'Electric bicycle', amountEURMax: 500, note: '2025 Avisos reference: up to 50% of cost.' },
    { label: 'Conventional bicycle', amountEURMax: 150, note: '2025 Avisos reference: up to 50% of cost.' },
    { label: 'Electric motorcycle or moped', amountEURMax: 500, note: '2025 Avisos reference: up to 50% of cost.' }
  ],
  sources: [
    { title: 'Fundo Ambiental — official portal', url: 'https://www.fundoambiental.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Fundo Ambiental — Aviso 06/2025: Zero-Emission Vehicles (Mobilidade Verde Passageiros)', url: 'https://www.fundoambiental.pt/avisos-anteriores/apoios-20242/mitigacao-as-alteracoes-climaticas/incentivo-pela-aquisicao-de-veiculos-de-emissoes-nulas-ano-20252026-mobilidade-verde--passageiros.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-05' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
