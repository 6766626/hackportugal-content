export default {
  editorialVoice: 'hackportugal',
  id: 'ifu-reabilitacao-urbana',
  categoryId: 'housing_buy',
  title: 'IFRRU 2030: loan and grant for housing renovation',
  tldr: 'IFRRU 2030 is an IHRU/Portugal 2030 programme for urban rehabilitation: a subsidised bank loan via CGD, Millennium bcp or Santander and, for some projects, non-repayable support from EU funds. You need a property in an eligible area, most often an ARU, a rehabilitation project and a bank creditworthiness check. This is not a quick grant “to renovate the kitchen”: the money is for obras de reabilitação, energy efficiency and building restoration, with Câmara Municipal paperwork and detailed budgets.',
  tags: ['ifrru', 'aru', 'renovation', 'credit'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What IFRRU 2030 is and who it helps',
      content: [
        { kind: 'paragraph', text: 'IFRRU 2030 stands for Instrumento Financeiro para a Reabilitação e Revitalização Urbanas. It is not a standard consumer loan for refurbishments but a public IHRU financial instrument with Portugal 2030/EU money and commercial lending through partner banks.' },
        { kind: 'paragraph', text: 'The goal is the recovery of the urban fabric: residential houses, flats, mixed-use buildings, and sometimes commercial premises, if the project fits the programme rules and the area defined by the municipality.' },
        { kind: 'checklist', items: [
          'Suitable for homeowners, investors, condomínio, companies and public/private building owners',
          'A foreign national can apply if they own the property or have the right to carry out the project; citizenship by itself is not a barrier',
          'The bank will still check NIF, income, debt burden, credit history and collateral',
          'The property usually has to be in an ARU — Área de Reabilitação Urbana — or another programme-eligible area/condition',
          'Finances obras de reabilitação, restoration of the façade, roof, common parts, building services, accessibility and energy efficiency',
          'A non-repayable component is not always available: it depends on the project type, region, the line’s budget and the rules of the specific aviso',
          'Funds are released against evidenced expenses: orçamento, faturas, autos de medição, licenças/comunicações'
        ] },
        { kind: 'warning', text: 'Do not plan IFRRU as “a grant to buy a flat”. The programme finances rehabilitation. Property purchase, furniture, appliances and cosmetic works without a rehabilitation project are usually not the main eligible purpose.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Property check: ARU, building condition, Câmara Municipal',
      content: [
        { kind: 'paragraph', text: 'The first filter is not the bank but the property. You need to understand whether the address falls within an urban rehabilitation area and whether the work is recognised as rehabilitation rather than ordinary repair. To do this, use ARU maps on the Câmara Municipal website or request informação prévia/enquadramento from the municipality.' },
        { kind: 'checklist', items: [
          'Obtain the certidão permanente do registo predial or the caderneta predial urbana to identify the artigo matricial and freguesia precisely',
          'Check the address in the ARU on the Câmara Municipal website; in Lisbon, Porto and other cities ARU are often split by neighbourhoods',
          'Request from the Câmara confirmation that the property is in an ARU or another IFRRU-eligible area',
          'Check whether you need a licença de obras, comunicação prévia or an architectural project',
          'If the building is old or in poor condition, ask about an avaliação do estado de conservação',
          'For a condomínio, obtain in advance the ata da assembleia approving the works and the shares of costs',
          'Immediately check património/classificação restrictions if the property is in the historic centre',
          'Ask the architect to separate IFRRU-eligible works from ineligible expenses: furniture, decor, appliances, pure finishing'
        ] },
        { kind: 'warning', text: 'ARU does not mean automatic approval. The municipality confirms territorial and planning compliance, but the loan is approved by the bank, and eligible expenses are checked under the IFRRU 2030 programme rules.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents before going to the bank',
      content: [
        { kind: 'paragraph', text: 'IFRRU requires more paperwork than a typical crédito habitação. The bank looks simultaneously at the property, the project, the budget and your ability to service the debt. The better the package is prepared, the fewer iterations between the bank, the architect, the Câmara and IHRU.' },
        { kind: 'checklist', items: [
          'Documento de identificação: residence permit, Cartão de Cidadão or passport; for non-residents — passport and tax details',
          'NIF and address at Finanças; if necessary — representante fiscal',
          'Proof of income: IRS declaração, recibos de vencimento, recibos verdes, contrato de trabalho, company accounts or foreign tax returns',
          'Property documents: certidão permanente, caderneta predial, licença de utilização or confirmation of its status',
          'Comprovativo de titularidade or contrato-promessa, if the bank allows an application before completion of the purchase',
          'Architectural/specialty designs, memória descritiva, orçamento broken down by headings',
          'Câmara Municipal documents: localização em ARU, licença/comunicação prévia or exemption from licensing',
          'Energy certificate before the works and a calculation of improvements after the works, if you claim energy efficiency',
          'Contractor budgets with NIF, IVA, timelines, materials and a breakdown of eligible expenses',
          'For a condomínio: ata, regulamento, identificação da administração and mapa de quotas'
        ] },
        { kind: 'warning', text: 'Do not start paying for major works before confirming the rules of the specific line. In many programmes, expenses incurred before submission or before approval may not be counted as eligible, even if the works themselves are correct.' }
      ]
    },
    {
      id: 'banks',
      title: 'Applying through partner banks: CGD, Millennium bcp, Santander',
      content: [
        { kind: 'paragraph', text: 'The application does not go directly “to the EU”, but through banks indicated by IHRU/IFRRU. In practice, the applicant brings the package to Caixa Geral de Depósitos, Millennium bcp or Santander; the bank carries out credit analysis, checks the project and links the operation to IFRRU 2030.' },
        { kind: 'substeps', items: [
          { id: 'simulation', title: '1. Preliminary simulation', content: [
            { kind: 'paragraph', text: 'Ask not for a standard crédito pessoal, but specifically for the IFRRU 2030 / reabilitação urbana product. Clarify term, spread, fees, collateral, drawdown period and own contribution requirements.' }
          ] },
          { id: 'credit-risk', title: '2. Bank credit risk', content: [
            { kind: 'paragraph', text: 'The bank assesses LTV, income, debt service burden, stability of residence permit/income, and the value of the property before and after the works. For an expat without a Portuguese credit history they often request a larger down payment or additional guarantees.' }
          ] },
          { id: 'program-validation', title: '3. IFRRU validation', content: [
            { kind: 'paragraph', text: 'In parallel, compliance with IFRRU 2030 rules is checked: area, building type, eligible expenses, energy efficiency, Câmara documents and the budget.' }
          ] },
          { id: 'contract', title: '4. Signing and drawdowns', content: [
            { kind: 'paragraph', text: 'After approval, the loan agreement is signed. Funds are usually disbursed in tranches as works progress and as expenses are evidenced, not as a single lump sum to a personal account.' }
          ] }
        ] },
        { kind: 'warning', text: 'The subsidised line does not cancel bank fees, insurance, valuation, mortgage or collateral. Compare the full MTIC/TAEG and request a written simulation from 2–3 banks.' }
      ]
    },
    {
      id: 'grant-and-tax',
      title: 'Non-repayable component and tax bonuses',
      content: [
        { kind: 'paragraph', text: 'In IFRRU 2030 there may be a componente não reembolsável — a part of the support that does not need to be repaid. But this is not a universal fixed percentage for everyone. Its presence and size depend on the aviso, the region, the type of beneficiary, energy efficiency and the line’s budget at the time of application.' },
        { kind: 'paragraph', text: 'Separately from IFRRU, municipal and tax incentives for reabilitação urbana can yield savings: reduced IVA on certain works, IMI/IMT or IRS relief if the conditions of the Código do IVA, EBF and Câmara Municipal rules are met. These must be claimed separately; they are not automatically included in the loan.' },
        { kind: 'checklist', items: [
          'Ask the bank in writing whether there is a grant component in your specific operation',
          'Check whether you need to complete the works and provide faturas before the non-repayable part is paid',
          'Keep all faturas with the correct NIF and a clear description of the works',
          'Do not mix personal expenses and project expenses in one orçamento',
          'Check the possibility of IVA reduzido 6% for empreitadas de reabilitação urbana, if the property and works qualify',
          'Check with the Câmara whether there is an IMI exemption/reduction after reabilitação',
          'If you let the dwelling, take IRS/IRC into account and the cap on annual rent indexation: in 2026 a 2.16% coefficient applies',
          'For Alojamento Local, check local restrictions: renovation does not guarantee an AL licence'
        ] },
        { kind: 'warning', text: 'Do not build into your financial model “the subsidy will definitely cover X%”. Until written approval, treat the project as a loan with your own liquidity buffer for overruns, Câmara delays and IVA.' }
      ]
    },
    {
      id: 'execution',
      title: 'How not to lose financing during the works',
      content: [
        { kind: 'paragraph', text: 'After approval, the main risk is to deviate from the project or lose supporting documents. IFRRU finances specific works, so changes to the budget, contractor or technical solution must be agreed before payment.' },
        { kind: 'checklist', items: [
          'Sign a written contrato de empreitada with a schedule, price, IVA and responsibility for licences',
          'Ensure the contractor has an atividade aberta and issues a fatura-recibo/fatura with your NIF',
          'Photograph the condition before, during and after the works',
          'Keep autos de medição, comprovativos de pagamento and bank transfer proofs',
          'Do not pay large amounts in cash: the bank may not recognise the expense',
          'Agree orçamento changes with the bank before carrying out the works',
          'After completion, obtain the certificado energético pós-obra, if it was part of the application',
          'Obtain the licença/autorização de utilização or an update, if required',
          'Check the final closure of the operation and the terms of the grace period/start of repayment'
        ] },
        { kind: 'warning', text: 'If the property is sold or the use changes before the programme conditions are met, the bank or the managing authority may demand early repayment or the return of support. Read the cláusulas de manutenção do investimento.' }
      ]
    }
  ],
  costs: [
    { label: 'Câmara Municipal certificate/confirmation on ARU or property condition', amountEURMin: 0, amountEURMax: 100, note: 'Depends on the município and type of request; many ARU maps are available online for free.' },
    { label: 'Energy certificate for a flat/house', amountEURMin: 150, amountEURMax: 350, note: 'Benchmark for typical housing; the price depends on area, region and técnico.' },
    { label: 'Property valuation by the bank', amountEURMin: 200, amountEURMax: 400, note: 'Often charged by the bank during credit analysis; the exact amount is in the bank preçário.' },
    { label: 'Architectural project and especialidades', amountEURMin: 1500, amountEURMax: 8000, note: 'Varies greatly with the scale of works, licensing and building condition.' },
    { label: 'Bank fees for dossier/contrato', amountEURMin: 250, amountEURMax: 1000, note: 'Check FINE/TAEG/MTIC; a subsidised line does not mean zero bank costs.' }
  ],
  sources: [
    {
      title: 'Official IFRRU 2030 website — conditions, partner banks and applications',
      url: 'https://www.ifrru.ihru.gov.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal da Habitação / IHRU — IFRRU 2030 support programme',
      url: 'https://www.portaldahabitacao.pt/o-que-e-ifrru',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portugal 2030 — EU funds framework for financial instruments',
      url: 'https://portugal2030.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
