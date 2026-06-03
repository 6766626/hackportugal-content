export default {
  editorialVoice: 'hackportugal',
  id: 'seguro-saude-medis-multicare',
  categoryId: 'healthcare',
  title: 'Health insurance in Portugal: Médis vs Multicare vs AdvanceCare',
  tldr: 'In 2026, private health insurance in Portugal usually costs €30–60/month for ages 25–35, €60–100/month after 45 and €100–150+/month after 60, if hospitalisation and outpatient limits are included. Médis is Ageas’s premium network with strong service; Multicare from Fidelidade is the largest mass-market player; AdvanceCare is a network/administrator, often through Generali Tranquilidade and corporate plans. Do not look at the brand, but at the plafond, copagamentos, exclusions and período de carência.',
  tags: ['insurance', 'health', 'médis', 'multicare', 'advancecare'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'market-map',
      title: 'Who is who in the market',
      content: [
        { kind: 'paragraph', text: 'In Portugal, private health insurance does not replace the SNS, but complements it: you can see a specialist more quickly, do exams, and access private hospitals such as CUF, Lusíadas, Luz Saúde, Trofa Saúde and local clínicas convencionadas.' },
        { kind: 'checklist', items: [
          'Médis is the health insurance brand of the Ageas Portugal group. It is usually seen as a more premium product: a good app, strong network, convenient telemedicine and support.',
          'Multicare is the health insurance of the Fidelidade group. One of the largest players: many corporate contracts, a broad network, and often good coverage nationwide.',
          'AdvanceCare is not always an “insurance company” in the narrow sense, but a network and administrator of medical services. It is often found in Generali Tranquilidade policies and corporate packages.',
          'All three work on a rede convencionada model: you go to an in-network doctor and pay a copagamento instead of the full price.',
          'If the doctor is outside the network, you need a reembolso model: you pay 100%, send the factura-recibo and wait for a partial refund.',
          'For an expat, the main criterion is not the logo, but whether the clinics you need are near home and the limits for hospitalisation, childbirth, dentistry, psychiatry and exames.'
        ] },
        { kind: 'warning', text: 'Do not buy a policy based only on price. The cheapest plan often covers only consultas and discounts, but does not provide proper hospitalização. For a visa, mortgage or family, such a plan may be useless.' }
      ]
    },
    {
      id: 'prices-2026',
      title: 'How much it costs in 2026 💶',
      content: [
        { kind: 'paragraph', text: 'The exact price depends on idade, morada, histórico clínico, franquia, copagamentos and the chosen coberturas. Insurers often calculate prices individually, especially after age 55–60.' },
        { kind: 'checklist', items: [
          'Ages 25–35: approximately €30–60/month for a decent individual plan with consultations, exames and basic hospitalização.',
          'Ages 35–45: approximately €45–80/month if there is hospitalização from €25,000–50,000 per year.',
          'Ages 45–60: approximately €60–100/month; exclusions and the health questionnaire become more important.',
          'Ages 60+: often €100–150+/month, and some plans are closed to new members after a certain age.',
          'Family of 2 adults + child: often €100–220/month depending on the level of cover.',
          'Dental usually comes as a separate module or as a discount network, not as full insurance.',
          'Maternidade/parto almost always requires a waiting period and a separate plafond.',
          'A corporate plan through an employer is almost always better value than an individual one: lower price, and sometimes a lighter questionnaire médico.'
        ] },
        { kind: 'paragraph', text: 'If the budget is limited, it is better to take a plan with hospitalização and moderate copagamentos than a “showcase” plan with a nice app but no serious limits for surgery.' }
      ]
    },
    {
      id: 'compare-brands',
      title: 'Comparison of Médis, Multicare and AdvanceCare',
      content: [
        { kind: 'substeps', items: [
          { id: 'medis', title: 'Médis: when it is suitable', content: [
            { kind: 'checklist', items: [
              'Suitable if the app, support, telemedicine and a premium UX matter.',
              'A good choice for Lisbon, Porto, Cascais, Oeiras, Braga, Coimbra, the Algarve, where there are many private clinics.',
              'Often convenient for an expat family: pediatria, online consultations, exames in large networks.',
              'Check the hospitalização limit: cheap options may be too narrow.',
              'Look at the copagamento for consulta de especialidade: typically €15–30, but it depends on the plan.'
            ] }
          ] },
          { id: 'multicare', title: 'Multicare: when it is suitable', content: [
            { kind: 'checklist', items: [
              'Suitable if you need the most mainstream and familiar network from Fidelidade.',
              'Often found with employers and in banking/partner products.',
              'A good option if you do not live only in Lisbon/Porto: nationwide coverage is usually strong.',
              'Convenient for family packages and corporate upgrades.',
              'Check reembolso: in basic plans it may be weak or absent.'
            ] }
          ] },
          { id: 'advancecare', title: 'AdvanceCare / Generali: when it is suitable', content: [
            { kind: 'checklist', items: [
              'Suitable if the policy gives access to a broad rede AdvanceCare near your address.',
              'Often found in Generali Tranquilidade products and group insurance.',
              'May be better value on price, especially through the corporate channel.',
              'It is important to understand exactly who the seguradora is: AdvanceCare as a network is not always your insurer under the contract.',
              'Before buying, check whether the CUF/Lusíadas/Luz/local clínicas you need accept your card.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'fine-print',
      title: 'What to read in the contrato before paying',
      content: [
        { kind: 'paragraph', text: 'In Portuguese policies, what matters is not advertising claims such as “access to 30,000 doctors”, but the condições particulares and condições gerais. Ask for the PDF before paying and check the key points.' },
        { kind: 'checklist', items: [
          'Capital / plafond hospitalização: how much the insurance pays for operations and inpatient care per year.',
          'Ambulatório: the limit for consultas, exames, tratamentos, fisioterapia.',
          'Copagamentos: how much you pay for a consulta, urgência, exame, cirurgia.',
          'Franquia: the amount you pay yourself before cover starts.',
          'Reembolso fora da rede: whether there is reimbursement outside the network and at what percentage.',
          'Período de carência: the waiting period before cover begins.',
          'Exclusões: chronic, pre-existing conditions, psychiatry, fertilidade, cosmetic treatments, high-risk sport.',
          'Maternidade: cover for pregnancy, parto normal/cesariana, limit and waiting period.',
          'Idade limite de adesão: up to what age you can join the plan.',
          'Renovação anual: whether the insurer can change the price or conditions on renewal.'
        ] },
        { kind: 'warning', text: 'Pre-existing conditions are almost always either excluded or require assessment by the insurer’s doctor. Do not hide diagnoses: in an expensive claim, the insurer may request your history and refuse payment.' }
      ]
    },
    {
      id: 'waiting-periods',
      title: 'Período de carência: when the insurance actually starts working',
      content: [
        { kind: 'paragraph', text: 'Período de carência is the waiting period after the contract starts. During this period you pay premiums, but some cover is not yet active. Exact periods differ by plan, but the market structure is similar.' },
        { kind: 'checklist', items: [
          'Urgência por acidente is usually covered immediately or almost immediately.',
          'Consultas and exames often have a waiting period of around 30–60 days.',
          'Hospitalização and cirurgias often have a waiting period of around 90–180 days.',
          'Parto, gravidez and tratamentos de infertilidade often require 365 days or more.',
          'Psychiatry, psicologia, physiotherapy and dentistry may have separate limits and waiting periods.',
          'If you are switching from another insurer without a break, you can sometimes ask for redução/eliminação de carências, but this is not an automatic right.',
          'Corporate plans sometimes offer better conditions on carências, especially when employees are enrolled in bulk.'
        ] },
        { kind: 'warning', text: 'If you are already pregnant, planning surgery or treating a chronic condition, do not assume that new insurance will pay for it immediately. First obtain written confirmation from the seguradora or mediador.' }
      ]
    },
    {
      id: 'how-to-choose',
      title: 'Practical choice for an expat',
      content: [
        { kind: 'paragraph', text: 'The algorithm is simple: choose not a brand, but a use case. For one 30-year-old person with no chronic illnesses and for a family with a child in Cascais, the optimal policy will be different.' },
        { kind: 'checklist', items: [
          'Open the Médis, Multicare and AdvanceCare maps and check 5–10 clinics near your home and work.',
          'Check whether specific hospitals are in the network: CUF, Hospital da Luz, Lusíadas, Trofa Saúde or a local clínica.',
          'Compare minimum hospitalização: for peace of mind, it is better to look at plans from €25,000–50,000 per year and above.',
          'Calculate the real price: monthly premium + copagamentos + franquia + dental add-on.',
          'If you need childbirth cover, look at maternidade, plafond and the 365-day waiting period before pregnancy, not after.',
          'If you need a psychologist/psychiatrist, check the separate cover; in basic plans it is often limited.',
          'Ask for the proposta and condições gerais in English or Portuguese; the agent’s verbal promises do not count.',
          'If your employer provides corporate Multicare/Médis/AdvanceCare, assess the upgrade first — it is often better value than a separate family policy.'
        ] },
        { kind: 'paragraph', text: 'Basic recommendation: Médis if service and premium UX matter; Multicare if you need the most familiar and broad network; AdvanceCare/Generali if the price is good and the clinics you need really accept the card.' }
      ]
    }
  ],
  costs: [
    { label: 'Individual plan ages 25–35', amountEURMin: 30, amountEURMax: 60, note: 'Monthly benchmark in 2026; depends on cover and copagamentos.' },
    { label: 'Individual plan ages 45–60', amountEURMin: 60, amountEURMax: 100, note: 'With hospitalização and ambulatório; health questionnaire required.' },
    { label: 'Individual plan 60+', amountEURMin: 100, amountEURMax: 150, note: 'May be higher; age restrictions on joining are possible.' },
    { label: 'Copagamento for consulta de especialidade', amountEURMin: 15, amountEURMax: 30, note: 'Typical in-network range; the exact amount is stated in the copagamentos table.' },
    { label: 'Family plan 2 adults + child', amountEURMin: 100, amountEURMax: 220, note: 'Monthly benchmark; corporate plans may be cheaper.' }
  ],
  sources: [
    { title: 'Médis — official health plans and network', url: 'https://www.medis.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Multicare — official plans and rede médica', url: 'https://www.multicare.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Generali Tranquilidade — seguros de saúde and rede AdvanceCare', url: 'https://www.generali.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ASF — supervision of the Portugal insurance market', url: 'https://www.asf.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
