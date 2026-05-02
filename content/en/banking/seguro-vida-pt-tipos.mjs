export default {
  editorialVoice: 'hackportugal',
  id: 'seguro-vida-pt-tipos',
  categoryId: 'banking',
  title: 'Life insurance in Portugal: types and bank requirements',
  tldr: 'Seguro de vida in Portugal is most often needed for a mortgage: the law does not explicitly make it mandatory, but banks almost always require a policy covering death and disability, usually for the loan amount. You can take insurance from the bank — CGD, Millennium and others often give a spread discount — or from an external insurer such as Fidelidade, Generali, Zurich. Typical range in 2026: €15–100/month, highly dependent on age, health, capital and IAD/ITP cover.',
  tags: ['insurance', 'mortgage', 'bank', 'life'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What seguro de vida is',
      content: [
        { kind: 'paragraph', text: 'Seguro de vida is a contract under which the insurer pays the capital seguro to the named beneficiary in the event of the insured person’s death or when an additional risk occurs: disability, serious illness, temporary incapacity for work. In the mortgage context, the bank is usually the beneficiary or recipient of the amount up to the outstanding debt.' },
        { kind: 'paragraph', text: 'In Portugal, life insurance is not universally mandatory for all residents. It becomes a practical necessity for crédito habitação: the bank does not want to risk the loan not being repaid if the borrower dies or becomes unable to work.' },
        { kind: 'checklist', items: [
          'Main risk: morte — death of the insured person',
          'Common additional cover: IAD — Invalidez Absoluta e Definitiva',
          'Broader cover: ITP — Invalidez Total e Permanente',
          'Capital seguro — the amount the insurer will pay',
          'Beneficiário — the recipient of the payout; for a mortgage, often the bank',
          'Tomador do seguro — the person who takes out and pays for the contract',
          'Pessoa segura — the person whose life is insured',
          'Prémio — monthly, quarterly or annual payment'
        ] }
      ]
    },
    {
      id: 'types',
      title: 'Main types: term life, whole life, mortgage policy',
      content: [
        { kind: 'substeps', items: [
          { id: 'term-life', title: 'Term life / temporário', content: [
            { kind: 'paragraph', text: 'The most common format. The policy runs for a limited period: for example, 10, 20, 30 years or until the end of the mortgage. If the insured event does not occur, there are no payouts. This is the cheapest option for protecting a family or bank.' }
          ] },
          { id: 'mortgage-life', title: 'Seguro de vida crédito habitação', content: [
            { kind: 'paragraph', text: 'The mortgage version of term life. The capital seguro can be constante — a fixed amount throughout the term, or decrescente — decreasing together with the outstanding loan balance. Decrescente is usually cheaper because the insurer’s insured risk falls.' }
          ] },
          { id: 'whole-life', title: 'Whole life / vida inteira', content: [
            { kind: 'paragraph', text: 'Whole-life cover is less common and costs more. It can be used for inheritance planning or family protection, but for a standard mortgage banks more often accept a temporary policy for the loan term.' }
          ] },
          { id: 'mixed-savings', title: 'Mixed and savings products', content: [
            { kind: 'paragraph', text: 'Some ramo vida products combine insurance and investment/savings. They are not the same as a simple seguro de vida for a mortgage: fees, risk, liquidity and tax treatment must be checked separately in the informação pré-contratual.' }
          ] }
        ] }
      ]
    },
    {
      id: 'bank-requirements',
      title: 'What banks require for a mortgage 🏦',
      content: [
        { kind: 'paragraph', text: 'CGD, Millennium bcp, Santander, Novo Banco, BPI and other banks usually require the lives of all main borrowers to be insured. Formally, the client can choose an external insurance company, but the bank may give a spread discount if you take a package from a partner insurer.' },
        { kind: 'checklist', items: [
          'Capital seguro is usually equal to the loan amount or current outstanding debt',
          'Policy term — at least until the end of the loan',
          'Death cover is almost always mandatory',
          'IAD is often the minimum accepted disability cover',
          'ITP is more expensive, but protects the borrower better: the payout trigger is less strict than IAD',
          'The bank asks to be named as beneficiary/credor hipotecário up to the outstanding debt',
          'With two borrowers, cover can be 50/50, 100/100 or proportional to income',
          'For non-residents and new expats, they may ask for a medical questionnaire, tests or relatório médico',
          'If you refuse the bank’s policy, the bank may recalculate the spread and remove the bonificação',
          'Before signing, ask for the loan FINE and a simulação with and without the bank’s policy'
        ] },
        { kind: 'warning', text: 'The bank must not hide the cost of insurance inside the loan. Compare MTIC, TAN, TAEG and the seguro de vida price separately. A cheap spread can be eaten up by expensive bank insurance.' }
      ]
    },
    {
      id: 'costs',
      title: 'How much it costs in 2026',
      content: [
        { kind: 'paragraph', text: 'For a healthy person aged 25–40, basic seguro de vida for a mortgage often starts at about €15–30/month. After age 45–50, the price rises quickly. For a couple, a large loan, ITP cover and capital seguro of €250,000–400,000, the monthly payment may be €50–100 or more.' },
        { kind: 'checklist', items: [
          'Age: the main factor; each year may increase the prémio',
          'Loan amount / capital seguro: €100,000 and €400,000 give different prices',
          'Term: 30–40 years is more expensive than a short term',
          'IAD is cheaper, ITP is more expensive but more useful',
          'Smoking almost always increases the cost',
          'BMI, diabetes, cancer and cardiovascular disease affect acceptance and exclusions',
          'Occupation and dangerous sports can lead to agravamento',
          'Capital decrescente is usually cheaper than constante',
          'Annual payment is sometimes cheaper than monthly payment',
          'A bank package is not always cheaper than external Fidelidade, Generali, Zurich, Allianz or Ageas'
        ] },
        { kind: 'paragraph', text: 'Practical approach: request at least 3 simulações — from the bank, from an independent mediador de seguros and directly from a large insurer. Compare not only the price, but also definição de invalidez, exclusions, carências, atualização do prémio and the possibility of terminating the contract early.' }
      ]
    },
    {
      id: 'tax-beneficiaries',
      title: 'Beneficiary and taxes: IRS and Imposto do Selo',
      content: [
        { kind: 'paragraph', text: 'It is important to name the beneficiary in the policy. For a mortgage, the bank receives the amount needed to repay the debt; the remainder, if provided for in the contract, may go to the family or other named beneficiary. If no beneficiary is named, the payout may follow the rules of the contract and inheritance law, which delays the process.' },
        { kind: 'paragraph', text: 'Under a standard risk seguro de vida, a death payout is usually not treated as salary or self-employment income for IRS. Imposto do Selo in Portugal applies to inheritances and gratuitous transfers at a rate of 10%, but spouses, união de facto in recognised cases, children, grandchildren, parents and grandparents are exempt from this 10% rate for inheritance/gifts.' },
        { kind: 'warning', text: 'The tax treatment depends on the product. Pure risk life, savings ramo vida, unit-linked products and policy surrender during life are taxed differently. If the amount is significant or the beneficiary is not a close relative, check the contrato, the insurer’s declaração fiscal and the contabilista’s position before payout.' },
        { kind: 'checklist', items: [
          'Name the beneficiary clearly: name, NIF, date of birth, relationship',
          'For a mortgage, check who receives any balance above the debt',
          'After the birth of a child, divorce or marriage, update the beneficiary',
          'Keep the apólice, condições particulares and recibos de prémio',
          'Tell the insurer about changes of address, NIF and bank account',
          'Do not hide illnesses in the questionnaire: this creates a risk of payout refusal',
          'For an international family, check that there is no conflict with another country’s taxes'
        ] }
      ]
    },
    {
      id: 'how-to-buy',
      title: 'How to arrange it without overpaying',
      content: [
        { kind: 'checklist', items: [
          'Define the purpose: mortgage, family protection, business partner, inheritance planning',
          'Choose the capital seguro: outstanding loan balance, 3–5 years of family expenses or another amount',
          'Choose the cover: morte + IAD or morte + ITP',
          'Ask the bank for written conditions: which covers and beneficiary are mandatory',
          'Collect offers from the bank and external insurers/mediadores',
          'Compare exclusions: suicide period, pre-existing conditions, risky sports, war, alcohol/drugs',
          'Check whether the prémio increases annually with age or is fixed',
          'Clarify whether you can replace the policy after the loan is issued without a penalty',
          'Sign only after receiving condições gerais and condições particulares',
          'Set up direct debit and make sure the policy does not lapse because of non-payment'
        ] },
        { kind: 'warning', text: 'If you change insurer after receiving the mortgage, first obtain the bank’s written consent for the new policy. Otherwise, you may breach the crédito habitação conditions and lose the spread discount.' }
      ]
    }
  ],
  costs: [
    { label: 'Basic term life for a young borrower', amountEURMin: 15, amountEURMax: 30, note: 'Monthly benchmark with a low capital seguro and no complex medical history' },
    { label: 'Mortgage seguro de vida with IAD/ITP', amountEURMin: 30, amountEURMax: 100, note: 'Typical monthly range; age 45+, smoking and a high loan can push the price above €100' },
    { label: 'Medical examinations for underwriting', amountEURMin: 0, amountEURMax: 150, note: 'Sometimes paid by the insurer, sometimes by the client; depends on the amount and age' }
  ],
  sources: [
    { title: 'ASF — Autoridade de Supervisão de Seguros e Fundos de Pensões: life insurance and client rights', url: 'https://www.asf.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Fidelidade — Seguro Vida and Seguro Vida Crédito Habitação', url: 'https://www.fidelidade.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Banco de Portugal — crédito habitação, FINE, TAEG and linked products', url: 'https://www.bportugal.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regime Jurídico do Contrato de Seguro — Decreto-Lei 72/2008', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2008-34561275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
