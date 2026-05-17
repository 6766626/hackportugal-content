export default {
  editorialVoice: 'hackportugal',
  id: 'private-insurance',
  categoryId: 'healthcare',
  title: 'Private health insurance — how the market works',
  tldr: 'Private insurance in Portugal is a supplement to the SNS, not a replacement. Its main purpose is fast access to specialists in private clinic networks. The market is regulated by ASF (Autoridade de Supervisão de Seguros). Typical cost for one adult: €25–40/month for a basic plan, €40–80 for a mid-range plan, €80–150 for a comprehensive plan. For a family of 4 — from €120/month. Prices depend heavily on age, deductible, network and dental/maternity modules. The key parameters to compare are the annual limit, co-payments (co-pagamento) and waiting periods (carência).',
  tags: ['insurance', 'health', 'sns'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'sns-vs-private',
      title: 'How the SNS and private insurance complement each other',
      content: [
        { kind: 'paragraph', text: 'The SNS is funded by taxes and is available to residents with a número de utente. Most primary care consultations are exempt from user charges (taxas moderadoras; reform under Decreto-Lei 37/2022), but medicines, specialist tests, private and international expenses are paid by the patient. The SNS is strong in emergencies, chronic diseases and hospitalisations. Its weak point is waiting times for scheduled appointments with narrow specialists: 1–12 months depending on region and specialty.' },
        { kind: 'paragraph', text: 'Private insurance covers visits to private clinics (the largest networks: Luz Saúde, CUF, Lusíadas, HPA, Trofa Saúde). A specialist appointment is usually possible within 1–3 days. The SNS covers ophthalmology and mental health, but access can be slow; dentistry in the SNS is limited. In private policies these areas are often available faster, but dentistry usually comes as a separate module/discount network and with limits.' }
      ]
    },
    {
      id: 'market-overview',
      title: 'The insurer market',
      content: [
        { kind: 'paragraph', text: 'Check the specific company in the public ASF register (asf.com.pt): the insurer must be authorised for ramo Doença / health insurance, or have the right to operate in Portugal through a branch, or under the regime de livre prestação de serviços. Do not rely on the number of players in the market — many brands are not separate insurers, but distribution channels. Check the legal insurer in the apólice.' },
        { kind: 'checklist', items: [
          'Large mass-market brands: **Médis** (Ocidental–Ageas Portugal), **Multicare** (Fidelidade), **Allianz**, **Generali Tranquilidade**, **Ageas**, **Zurich**, **Mapfre** and others.',
          'Compare international expat policies (**Allianz Care**, **Cigna Global** and others) separately: check who the legal insurer is, the applicable law, whether direct billing exists in Portugal, coverage of pre-existing conditions and suitability for IRS/visa purposes. This is not always the same as a local seguro de saúde regulated by ASF',
          'Corporate schemes may involve an insurer, a broker/consultant and a network manager/claims administrator. For example, **AdvanceCare** often acts as a network/administrator, while **Mercer** acts as a broker/benefits consultant; check the legal insurer in the apólice'
        ]},
        { kind: 'paragraph', text: 'When searching, use the term “**seguro de saúde**” and distinguish it from “**plano de saúde**” or “**cartão de saúde**”: the latter are often discount plans, not insurance. All licensed insurers are in the public ASF register.' }
      ]
    },
    {
      id: 'what-to-compare',
      title: 'Key comparison parameters',
      content: [
        { kind: 'checklist', items: [
          'Plafond anual — annual claims limit (from €10,000 to no limit)',
          'Co-pagamento — patient co-payment for each service (€15–35 per appointment is typical)',
          'Período de carência — waiting period before access to services: usually 30–60 days for outpatient care, 180–365 days for pregnancy, oncology, dentistry',
          'Rede de prestadores — clinic network: the wider, the better',
          'Dentistry — often a separate module with a limit',
          'International cover — usually an option for travelling families',
          'Chronic diseases — must be declared; often excluded from cover',
          'Age loadings — the policy is 20–50% more expensive after age 60',
          'Term — usually one year, automatic renewal'
        ]}
      ]
    },
    {
      id: 'how-to-buy',
      title: 'How to buy',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. Get quotes', content: [
            { kind: 'paragraph', text: 'Through insurers’ websites directly or via aggregator brokers. Under ASF requirements, the insurer or intermediary must provide pre-contractual information (IPID, terms), but quotes from different companies are not standardised — compare cover, exclusions, co-payments and clinic networks carefully. Get at least 3 quotes for comparison.' }
          ]},
          { id: 'b2', title: '2. Complete a medical questionnaire (questionário de saúde)', content: [
            { kind: 'paragraph', text: 'For individual full policies, a questionário de saúde is usually required; in group corporate schemes or basic/dental products, the questionnaire may be simplified or absent. Declare all chronic diseases, operations and medicines taken. Lying is grounds for refusal of a claim in an insured event and cancellation of the policy.' }
          ]},
          { id: 'b3', title: '3. Receive an individual offer', content: [
            { kind: 'paragraph', text: 'Based on the questionnaire, the insurer may: accept on standard terms; accept with a loading (agravamento); exclude specific conditions (exclusões); refuse.' }
          ]},
          { id: 'b4', title: '4. Sign the policy', content: [
            { kind: 'paragraph', text: 'Usually online. Payment by card or direct debit. The policy takes effect from the date stated in the condições particulares, usually after the insurer accepts the risk and the first premium is paid; carência still applies.' }
          ]},
          { id: 'b5', title: '5. Receive the insurance card', content: [
            { kind: 'paragraph', text: 'The physical card arrives by post, the digital one is in the insurer’s app. You show it at the clinic together with your Cartão de Cidadão/residence permit.' }
          ]}
        ]}
      ]
    },
    {
      id: 'claims',
      title: 'How claims work',
      content: [
        { kind: 'paragraph', text: 'The “rede convencionada” model is the most convenient: the clinic is in the insurer’s network, you pay only the co-payment and the rest is charged directly.' },
        { kind: 'paragraph', text: 'Outside the network — the “reembolso” model: you pay in full, then submit receipts and a request to the insurer, and usually receive reimbursement to your account within 30 days.' },
        { kind: 'warning', text: 'The key point is that the contract is governed by the Lei do Contrato de Seguro (Decreto-Lei 72/2008). The insurer must explain any refusal in writing. Appeals are through ASF and Provedor do Cliente.' }
      ]
    },
    {
      id: 'tips',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          'Do not take out a “one-minute online” policy without reading the general conditions (Condições Gerais) — exclusions are often missed',
          'For families with children, check vaccination and paediatrics cover',
          'If you are planning pregnancy — the policy must be taken out at least 10 months beforehand (maternity carência is often 365 days)',
          'For expats who travel, a policy with an international component (Allianz, Cigna) may be better value. Note: international policies may not have a direct billing network in Portugal and often work through reimbursement',
          'Corporate insurance is often cheaper and may have simplified underwriting rules, but check dependents, upgrades, pre-existing conditions, carências and what happens on dismissal — whether there is a right to move to an individual policy without new waiting periods',
          'For tax residents of Portugal, health insurance premiums may be counted in IRS as despesas de saúde if correctly classified in e-Fatura; the deduction is usually 15% of health expenses within the applicable household cap (Código do IRS art. 78.º-C). Check e-Fatura and recibos',
          'Before leaving a job, ask HR/the insurer about continuation or conversion to individual policy. When buying a new policy, waiting periods usually start again unless the new insurer has confirmed in writing that it credited the previous insurance',
          'Complaints: first the insurer’s Provedor do Cliente, Livro de Reclamações, then ASF; for clinical quality of service, ERS may be relevant rather than ASF'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Basic plan for an adult', amountEURMin: 25, amountEURMax: 40, note: '/month; price depends heavily on age, deductible, network and dental/maternity modules' },
    { label: 'Mid-range plan', amountEURMin: 40, amountEURMax: 80, note: '/month' },
    { label: 'Comprehensive plan', amountEURMin: 80, amountEURMax: 150, note: '/month' },
    { label: 'Family of 4, basic/mid-range package', amountEURMin: 120, amountEURMax: 200, note: '/month from; full packages with hospitalisation, dental/maternity and broad networks can be noticeably more expensive' },
    { label: 'Co-payment for a specialist appointment', amountEURMin: 15, amountEURMax: 35 }
  ],
  sources: [
    { title: 'ASF — Autoridade de Supervisão de Seguros', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei 72/2008 — Regime Jurídico do Contrato de Seguro', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2008-107544019', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Código do IRS art. 78.º-C — health expenses', url: 'https://info.portaldasfinancas.gov.pt/', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ERS — Entidade Reguladora da Saúde', url: 'https://www.ers.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS — official portal', url: 'https://www.sns.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
