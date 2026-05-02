export default {
  editorialVoice: 'hackportugal',
  id: 'private-insurance',
  categoryId: 'healthcare',
  title: 'Private health insurance — how the market works',
  tldr: 'Private insurance in Portugal is a supplement to the SNS, not a replacement. Its main purpose is fast access to specialists in private clinic networks. The market is regulated by the ASF (Autoridade de Supervisão de Seguros). Typical cost for one adult: €25–40/month for a basic plan, €40–80 for a mid-range plan, €80–150 for a full plan. For a family of 4 — from €120/month. The key parameters to compare are the annual limit, co-payments and waiting periods.',
  tags: ['insurance', 'health', 'sns'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'sns-vs-private',
      title: 'How the SNS and private insurance complement each other',
      content: [
        { kind: 'paragraph', text: 'The SNS is funded by taxes and is available to residents with a número de utente. Most primary care appointments are exempt from user charges (taxas moderadoras; reform Decreto-Lei 37/2022), but medicines, specialised tests, private and international costs are paid by the patient. The SNS is strong in emergencies, chronic illnesses and hospitalisations. Its weak point is waiting times for planned appointments with medical specialists: 1–12 months depending on the region and speciality.' },
        { kind: 'paragraph', text: 'Private insurance covers visits to private clinics (the largest networks: Luz Saúde, CUF, Lusíadas, HPA, Trofa Saúde). An appointment with a specialist is usually available within 1–3 days. Many services that the SNS barely covers (full dental care, psychotherapy, ophthalmology) are available through private insurance.' }
      ]
    },
    {
      id: 'market-overview',
      title: 'The insurer market',
      content: [
        { kind: 'paragraph', text: 'As of 2026, around 10 insurers specialising in health are licensed and active. The ASF publishes the list on asf.com.pt. The largest market shares are held by several insurers, partly affiliated with banking groups:' },
        { kind: 'checklist', items: [
          'Health insurers affiliated with banking groups (Médis / Millennium BCP; Multicare / Fidelidade)',
          'Specialist international insurers: Allianz Care, Cigna Global (for expats)',
          'Insurers with a good reputation for families: Tranquilidade Saúde (Generali), Liberty Saúde',
          'Corporate products for employees: Advancecare (through Mercer)'
        ]},
        { kind: 'paragraph', text: 'When searching, use the query “seguro de saúde”. All licensed insurers are listed in the public ASF register.' }
      ]
    },
    {
      id: 'what-to-compare',
      title: 'Key comparison parameters',
      content: [
        { kind: 'checklist', items: [
          'Plafond anual — annual benefit limit (from €10,000 to no limit)',
          'Co-pagamento — the patient’s co-payment for each service (€15–35 per appointment is typical)',
          'Período de carência — waiting period before access to services: usually 30–60 days for outpatient care, 180–365 days for pregnancy, oncology and dentistry',
          'Rede de prestadores — clinic network: the wider, the better',
          'Dentistry — often a separate module with a limit',
          'International cover — usually an option for families who travel',
          'Chronic illnesses — must be declared; they are often excluded from cover',
          'Age-related surcharges — policies become 20–50% more expensive after age 60',
          'Term — usually one year, with automatic renewal'
        ]}
      ]
    },
    {
      id: 'how-to-buy',
      title: 'How to buy',
      content: [
        { kind: 'substeps', items: [
          { id: 'b1', title: '1. Get quotes', content: [
            { kind: 'paragraph', text: 'Through insurers’ websites directly or through aggregator brokers. Under ASF requirements, the insurer or intermediary must provide pre-contractual information (IPID, terms), but quotes from different companies are not standardised — carefully compare cover, exclusions, co-payments and clinic networks. Get at least 3 quotes for comparison.' }
          ]},
          { id: 'b2', title: '2. Complete the medical questionnaire (questionário de saúde)', content: [
            { kind: 'paragraph', text: 'The medical questionnaire is mandatory. Declare all chronic illnesses, operations and medicines you take. Lying is grounds for refusal of payment in an insured event and for cancellation of the policy.' }
          ]},
          { id: 'b3', title: '3. Receive an individual offer', content: [
            { kind: 'paragraph', text: 'Based on the questionnaire, the insurer may: accept on standard terms; accept with a surcharge (agravamento); exclude specific conditions (exclusões); or refuse cover.' }
          ]},
          { id: 'b4', title: '4. Sign the policy', content: [
            { kind: 'paragraph', text: 'Usually online. Payment is by card or direct debit. The policy is active from the following day, but the waiting period (carência) applies.' }
          ]},
          { id: 'b5', title: '5. Receive the insurance card', content: [
            { kind: 'paragraph', text: 'The physical card arrives by post; the digital one is in the insurer’s app. You show it at the clinic together with your Cartão de Cidadão/residence permit.' }
          ]}
        ]}
      ]
    },
    {
      id: 'claims',
      title: 'How payments work',
      content: [
        { kind: 'paragraph', text: 'The “rede convencionada” model is the most convenient: the clinic is in the insurer’s network, you pay only the co-payment and the rest is charged directly.' },
        { kind: 'paragraph', text: 'Outside the network, the model is “reembolso”: you pay in full, then submit receipts and a request to the insurer, and usually receive the reimbursement to your account within 30 days.' },
        { kind: 'warning', text: 'The key point is that the contract is governed by the Lei do Contrato de Seguro (Decreto-Lei 72/2008). The insurer must explain any refusal in writing. Appeals are made through the ASF and the Provedor do Cliente.' }
      ]
    },
    {
      id: 'tips',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          'Do not take out a “one-minute online” policy without reading the general terms and conditions (Condições Gerais) — exclusions are often missed',
          'For families with children, check vaccination and paediatrics cover',
          'If you are planning a pregnancy, you need to take out the policy at least 10 months in advance',
          'For expats who travel, a policy with an international component (Allianz, Cigna) may be better value',
          'If your employer offers corporate insurance, it is usually cheaper than an individual policy and does not require a questionnaire',
          'IRS deduction: insurance premiums are partially deductible (category “despesas de saúde”)',
          'When changing jobs, keep your insurance, as the waiting period (carência) resets if you buy again'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Basic plan for an adult', amountEURMin: 25, amountEURMax: 40, note: '/month' },
    { label: 'Mid-range plan', amountEURMin: 40, amountEURMax: 70, note: '/month' },
    { label: 'Full plan', amountEURMin: 70, amountEURMax: 150, note: '/month' },
    { label: 'Family of 4, mid-range', amountEURMin: 120, amountEURMax: 200, note: '/month' },
    { label: 'Co-payment for a specialist appointment', amountEURMin: 15, amountEURMax: 35 }
  ],
  sources: [
    { title: 'ASF — Autoridade de Supervisão de Seguros', url: 'https://www.asf.com.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 72/2008 — Lei do Contrato de Seguro', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2008-107544019', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SNS — official portal', url: 'https://www.sns.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 365
}
