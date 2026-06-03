export default {
  editorialVoice: 'hackportugal',
  id: 'cancel-gym-fidelizacao',
  categoryId: 'emergency_rights',
  title: 'Cancelling a gym contract during fidelização',
  tldr: 'In Portugal, fidelização at a gym does not mean “you cannot leave”. The 14-day right to withdraw only applies to a contract concluded online, by phone or away from the gym; if you signed at the desk, there is no automatic cooling-off period. Early termination is possible for justa causa: illness/injury, unemployment, moving home, substantial change in conditions. You need evidence and a carta registada com aviso de receção. A demand to pay all months until the end of the term can be challenged as excessive.',
  tags: ['gym', 'fidelização', 'rights', 'contract'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'check-contract',
      title: '1. Check where and how the contract was concluded',
      content: [
        { kind: 'paragraph', text: 'The first question: did you sign the contract physically at the gym or arrange it remotely. Your right to withdraw without giving reasons depends on this.' },
        { kind: 'checklist', items: [
          'Online, via an app, by phone or away from the gym premises — the 14-day right to terminate under Decreto-Lei 24/2014 usually applies.',
          'At the gym desk, after an in-person sale on the ginásio premises — there is no general legal right to “change your mind within 14 days”, unless the contract itself promises this.',
          'Find the fidelização period: 3, 6, 12 or 24 months — gyms often use 12 months, but you need to check the specific contrato.',
          'Check the cláusula de cancelamento: notice period, email/address, required documents.',
          'Check the penalty: whether they demand payment of all months until the end of the term or only reasonable compensation.',
          'Keep the contrato, regulamento interno, recibos/faturas, WhatsApp/email messages and screenshots of your customer account.'
        ] },
        { kind: 'warning', text: 'Do not confuse “suspending the mensalidade” with “terminating the contrato”. A freeze due to illness or holiday often extends the fidelização rather than ending it.' }
      ]
    },
    {
      id: 'fourteen-days',
      title: '2. If 14 days have not yet passed 🧾',
      content: [
        { kind: 'paragraph', text: 'For distance and off-premises contracts, a consumer may withdraw within 14 days without giving reasons. The period is usually counted from the date the contract was concluded or from receipt of the terms on a durable medium — PDF/email.' },
        { kind: 'checklist', items: [
          'Send the statement before the 14th day expires.',
          'Write: “Exerço o meu direito de livre resolução nos termos do Decreto-Lei 24/2014”.',
          'State your name, NIF, customer number, contract date, and IBAN for the refund.',
          'Send it by a method that leaves proof: email with confirmation, área de cliente, but preferably carta registada.',
          'Ask for confirmation of cancellation of the débito direto SEPA.',
          'If a joining fee or mensalidade has already been charged, request a refund in proportion to the rules of DL 24/2014.',
          'Keep the comprovativo de envio and a copy of the letter.'
        ] },
        { kind: 'warning', text: 'If you signed the contract in person on the gym premises, the 14-day withdrawal under DL 24/2014 usually does not apply. In that case, move on to termination for justa causa or negotiation.' }
      ]
    },
    {
      id: 'valid-grounds',
      title: '3. Grounds for leaving fidelização early',
      content: [
        { kind: 'paragraph', text: 'Gyms do not have a separate “immigrant” regime: the contract, general civil-law rules and consumer protection apply. In practice, strong grounds are those that have made use of the gym impossible or excessively burdensome.' },
        { kind: 'checklist', items: [
          'Illness, injury, pregnancy with a medical prohibition on training — declaração médica stating the impossibility/contraindication.',
          'Permanent or long-term incapacity for work — relatório médico, baixa médica, hospital discharge.',
          'Unemployment or a sharp fall in income — declaração do IEFP, dismissal letter, proof of termination of the contrato de trabalho.',
          'Moving to another city/country where there is no gym from the same chain within reasonable reach — contrato de arrendamento, atestado de residência, contrato de trabalho abroad, ticket/address registration.',
          'Substantial change of conditions by the gym — closure of the nearest gym, major reduction in opening hours, cancellation of services for which you entered into the contract.',
          'Unclear or excessive penalties — for example, a demand to pay 100% of all future mensalidades without any actual loss for the gym.',
          'Sale of the contract with promises that are not in the written terms — keep adverts, manager messages, testemunhas.'
        ] },
        { kind: 'paragraph', text: 'DECO expressly recommends not limiting yourself to an oral conversation at reception: the request should be made in writing and with evidence. The better the documents, the higher the chance of closing the contrato without paying the remaining fidelização.' }
      ]
    },
    {
      id: 'send-letter',
      title: '4. Send a carta registada com aviso de receção',
      content: [
        { kind: 'paragraph', text: 'Even if the gym asks you to write in the app, the safe route is a registered letter with acknowledgement of receipt to the company’s legal address. You can send an email in parallel, but carta registada is easier to prove in a dispute.' },
        { kind: 'checklist', items: [
          'In the header: your name, NIF, address, email, telefone, número de sócio/cliente.',
          'Addressee: the legal entity from the contract or fatura, not just the brand name.',
          'Subject: “Resolução do contrato de prestação de serviços de ginásio por justa causa”.',
          'Briefly describe the ground: doença, desemprego, mudança de residência or alteração das condições.',
          'Attach copies of evidence, not originals.',
          'Ask them to stop cobrança from a specific date and confirm that there is no debt.',
          'Ask them to delete/not use the autorização de débito direto SEPA after the termination date.',
          'Specify a reply deadline: for example, 10 working days.',
          'Keep a copy of the letter, the CTT receipt and the aviso de receção.'
        ] },
        { kind: 'paragraph', text: 'Wording: “Venho resolver o contrato por justa causa, com efeitos a partir de [data], devido a [motivo], facto superveniente que impede a utilização normal dos serviços. Solicito a confirmação escrita do cancelamento e a cessação de quaisquer cobranças futuras.”' }
      ]
    },
    {
      id: 'payments-and-disputes',
      title: '5. What to do about debits and debt threats',
      content: [
        { kind: 'paragraph', text: 'Do not disappear silently and do not simply block the card: this gives the gym an argument that you breached the contrato without notice. First send the termination, then monitor the débito direto.' },
        { kind: 'checklist', items: [
          'In homebanking, cancel the autorização de débito direto SEPA after sending the letter.',
          'If the debit has already gone through, request a refund from the bank within the SEPA deadlines and, in parallel, dispute it with the gym in writing.',
          'Do not sign an “acordo de pagamento” if you do not agree with the debt: a signature may acknowledge the debt.',
          'If they demand all mensalidades until the end of the fidelização, ask for the legal basis and a calculation of the loss.',
          'Submit a complaint in the Livro de Reclamações eletrónico if the gym ignores the letter or continues debiting.',
          'Contact the Centro de Arbitragem de Conflitos de Consumo for your place of residence or the gym’s location.',
          'For amounts up to a few thousand euros, consumer-dispute arbitration is often faster and cheaper than court.',
          'If a cobrança/empresa de recuperação de créditos arrives, reply in writing: the debt is disputed, the contrato was terminated for justa causa, documents are attached.'
        ] },
        { kind: 'warning', text: 'The gym may dispute your justa causa. So the key is to prove an event after the contract was concluded and a real impossibility of using the service, not just “changed my mind/too expensive/no motivation”.' }
      ]
    }
  ],
  costs: [
    { label: 'National carta registada', amountEURMin: 3, amountEURMax: 6, note: 'Indicative cost for a CTT registered letter; the final amount depends on weight and aviso de receção.' },
    { label: 'Livro de Reclamações eletrónico', amountEUR: 0, note: 'Submitting a complaint online is free.' },
    { label: 'Centro de Arbitragem de Conflitos de Consumo', amountEURMin: 0, amountEURMax: 30, note: 'In many centres it is free or there is a symbolic fee; check the tariff of the specific centre.' }
  ],
  sources: [
    {
      title: 'DECO PROteste: conditions and disputed cláusulas in ginásios contracts',
      url: 'https://www.deco.proteste.pt/saude/exercicio-fisico/dossies/ginasios-conheca-clausulas-regulamentos',
      kind: 'news',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 24/2014: distance and off-premises contracts, 14-day right of livre resolução',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/24-2014-572450',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 446/85: cláusulas contratuais gerais and unfair terms',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/446-1985-397216',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Livro de Reclamações eletrónico: official consumer complaint submission',
      url: 'https://www.livroreclamacoes.pt/Inicio/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
