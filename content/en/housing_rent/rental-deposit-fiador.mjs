export default {
  editorialVoice: 'hackportugal',
  id: 'rental-deposit-fiador',
  categoryId: 'housing_rent',
  title: 'Caução and fiador — deposit and guarantor when renting',
  tldr: 'In Portugal, a landlord often asks for 2 renda caução + 1–2 renda adiantadas + fiador. From 2026, the legal reference point is: caução for housing is limited to 2 monthly rents, and advance renda is a maximum of 2 months under art. 1076 Código Civil. This means “4 months in cash at the start” is the upper legal structure; it is better not to pay more without a lawyer. Fiador is lawful, but you can negotiate: seguro de renda/seguro-fiança, bank guarantee, higher income, employment contract, payment through recibos de renda.',
  tags: ['renting', 'caução', 'fiador', 'contract'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-landlords-ask',
      title: 'What landlords usually ask for when renting 🏠',
      content: [
        { kind: 'paragraph', text: 'Caução is a security deposit. It covers rent arrears, unpaid utilities, damage to the flat beyond normal wear and tear, and expenses expressly stated in the contrato de arrendamento.' },
        { kind: 'paragraph', text: 'Fiador is a guarantor. If the tenant does not pay, the landlord can claim the debt from the fiador. For expats this is the most common problem: many owners want a fiador with income and assets in Portugal.' },
        { kind: 'checklist', items: [
          'Typical request in Lisbon/Porto in 2026: 1 renda for the current month + 1–2 renda adiantadas + 1–2 renda caução',
          'Normal legal “cash ceiling on entry”: up to 2 months of caução and up to 2 months of advance renda',
          'Fiador is often required even with a high income, especially if there is no Portuguese employment contract',
          'The owner may ask for IRS, recibos de vencimento, contrato de trabalho, NIF, passport/residence permit, bank statements',
          'For remote workers and recém-chegados, the following help: contrato sem termo, carta da empresa, tax return, savings statement',
          'All amounts must be stated in the contrato: what is renda, what is caução, what is adiantamento',
          'The rental must be declared to Finanças, and payments must be confirmed by recibos de renda or bank transfer'
        ] }
      ]
    },
    {
      id: 'legal-limits',
      title: 'Legal limits: how much can be charged',
      content: [
        { kind: 'paragraph', text: 'The key provision is art. 1076 Código Civil. For arrendamento urbano, the parties may agree on advance rent payment, but for no more than 2 months. Caução as a guarantee of the tenant’s obligations is limited to an amount equivalent to 2 monthly rents.' },
        { kind: 'paragraph', text: 'Example: rent of €1,200 / month. A lawful cash structure at the start could be: €1,200 for the first month + up to €2,400 renda adiantada + up to €2,400 caução. In practice, people often calculate it more simply: “2 rendas + 2 cauções” = €4,800, where it must be clearly signed which part is the deposit and which part is the advance payment.' },
        { kind: 'warning', text: 'If the landlord asks for 6–12 months in advance “because you are a foreigner”, this is high risk. After market changes and Mais Habitação, the safe reference point is not to exceed 2 months of advance renda and 2 months of caução without a written legal opinion from a lawyer.' },
        { kind: 'checklist', items: [
          'Caução: maximum 2 monthly rents for housing',
          'Renda adiantada: maximum 2 months in advance',
          'Fiador: not prohibited by law, but their liability must be clearly described',
          'Seguro de renda or seguro-fiança: an acceptable alternative if the landlord agrees',
          'Bank guarantee: possible, but for new residents it is often expensive or unavailable',
          'Cash without a recibo: do not agree',
          'Agency fee: usually paid by the landlord, but check that an unlawful “taxa” is not being imposed on you'
        ] }
      ]
    },
    {
      id: 'contract-wording',
      title: 'What to check in the contrato before transferring money',
      content: [
        { kind: 'paragraph', text: 'The main mistake is sending a deposit based on a WhatsApp promise. Before payment, you need a draft contrato de arrendamento, identificação do senhorio, confirmation of the right to rent out the flat, and an IBAN in the name of the owner or management company.' },
        { kind: 'checklist', items: [
          'Full name, NIF and address of the senhorio; if there are several owners — signatures of all of them or a procuração',
          'Flat address, artigo matricial or caderneta predial, rental term and start date',
          'Amount of renda, payment deadline, IBAN and payment reference',
          'Separate line: caução — amount, purpose, return conditions',
          'Separate line: rendas adiantadas — which months they are credited against',
          'Who pays água, luz, gás, internet, condomínio, pequenas reparações',
          'Whether it is permitted to keep a pet, register the address for a residence permit/AIMA, obtain an atestado de residência',
          'Termination conditions: notice period for tenant and landlord',
          'Inventory of furniture, appliances, meters and the condition of the flat with photographs',
          'Obligation of the senhorio to register the contract with Finanças and issue recibos de renda'
        ] },
        { kind: 'warning', text: 'Do not sign a clause saying “caução is not returned on any departure by the tenant”. The deposit is not a penalty by default. Any retention must be linked to a debt, damage, or contractual obligation that can be proven.' }
      ]
    },
    {
      id: 'fiador-and-alternatives',
      title: 'If a fiador is required: options for an expat',
      content: [
        { kind: 'paragraph', text: 'The ideal fiador for a Portuguese landlord is a resident of Portugal with NIF, stable income, IRS, recibos de vencimento and sometimes real estate. A relative from the Russian Federation, Brazil or another country usually does not work: it is difficult to recover a debt from them in Portugal.' },
        { kind: 'paragraph', text: 'The liability of a fiador can be very broad. Contracts often include renúncia ao benefício da excussão prévia — a waiver of the right to require the landlord to recover the debt from the tenant first. In that case, the fiador can become the first recipient of the claim.' },
        { kind: 'checklist', items: [
          'Offer seguro de renda / seguro-fiança: the insurer pays the landlord if you fall into arrears, and you pay the premium',
          'Show an employment contract, payslips, recibos verdes, IRS/tax return and bank savings',
          'Offer an automatic renda transfer and proof of income of 3–4× rent',
          'Ask to replace the fiador with caução within the legal limit, rather than adding everything at once',
          'If there is an employer company, ask for a carta de conforto or corporate guarantee',
          'For students: sometimes parents as fiador + proof of funds are accepted, but this depends on the landlord',
          'For short-term first accommodation, use a serviced apartment or residência with an official contrato while you build history in Portugal'
        ] },
        { kind: 'warning', text: 'Do not ask a casual acquaintance to become fiador “as a formality”. This is a legal obligation, not a recommendation. With rent arrears, juros, court costs and repairs, the amount grows quickly.' }
      ]
    },
    {
      id: 'return-of-deposit',
      title: 'Return of caução when moving out',
      content: [
        { kind: 'paragraph', text: 'There is no universal legal deadline to “return the caução within 7/30 days”. Working practice is to return it after entrega das chaves, inspection of the flat, reconciliation of água/luz/gás bills and signing of the auto de entrega. A good contrato sets a deadline in advance, for example 15 or 30 days.' },
        { kind: 'checklist', items: [
          '30–60 days before moving out, check the notice period in the contrato and Código Civil',
          'Send the aviso de denúncia in writing: email with confirmation, carta registada or another method stated in the contract',
          'Photograph the flat on moving-out day: walls, floor, furniture, appliances, meters',
          'Prepare the auto de entrega das chaves: date, condition, meter readings, list of keys',
          'Provide proof of payment of all rendas and utilities',
          'Ask for a written calculation of deductions if the landlord wants to keep part of the caução',
          'Normal wear and tear is not your responsibility: ageing paint, marks from ordinary use, depreciation of furniture',
          'Do not offset the caução against the last month of rent without the landlord’s written consent',
          'If the deposit is not returned — first send a carta registada with a prazo, then Julgado de Paz/lawyer/court depending on the amount'
        ] },
        { kind: 'warning', text: 'The most common loss of caução is the absence of evidence of the flat’s condition on move-in. Take photos/videos in the first 24–48 hours and send them to the landlord by email so there is a date.' }
      ]
    },
    {
      id: 'red-flags',
      title: 'Red flags and safe payment 🚩',
      content: [
        { kind: 'checklist', items: [
          'They ask for a deposit before viewing the flat or a video call showing the address',
          'The IBAN does not match the name of the owner/agency',
          'They refuse to show the caderneta predial, licença/documents or procuração',
          'They say that a contrato is not needed because “it is cheaper without Finanças”',
          'They ask for 6–12 months in advance without a legal structure',
          'They do not want to issue a recibo de renda',
          'The price is too low for the area and there is urgent pressure: “pay today or you lose it”',
          'The contract has no conditions for returning the caução',
          'The agent asks the tenant for payment for a service you did not order in writing'
        ] },
        { kind: 'paragraph', text: 'Pay by bank transfer with the reference: “Caução contrato arrendamento [address]” or “Renda mês [month/year]”. Keep the comprovativo. MB WAY is convenient, but for large amounts a bank transfer is better as evidence.' }
      ]
    }
  ],
  costs: [
    { label: 'Caução when renting housing', amountEURMin: 0, amountEURMax: 1840, note: 'Limit — up to 2 monthly rents. Example for renda of €920: maximum €1,840 caução.' },
    { label: 'Renda adiantada', amountEURMin: 0, amountEURMax: 1840, note: 'Advance rent payment — maximum 2 months. Example for renda of €920: maximum €1,840.' },
    { label: 'Seguro de renda / seguro-fiança', amountEURMin: 150, amountEURMax: 800, note: 'The reference amount depends on rent, tenant profile and cover; the landlord must accept this replacement voluntarily.' }
  ],
  sources: [
    {
      title: 'DRE — Lei 6/2006, NRAU, arrendamento urbano',
      url: 'https://dre.pt/dre/legislacao-consolidada/lei/2006-34468375',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DRE — consolidated Código Civil, art. 1076 on advance rent and caução',
      url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/1966-34509075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Portal das Finanças — electronic recibos de renda and contrato de arrendamento',
      url: 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Pages/arrendamento.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ePortugal — renting a home in Portugal',
      url: 'https://eportugal.gov.pt/cidadaos/arrendar-casa',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
