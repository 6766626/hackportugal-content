export default {
  editorialVoice: 'hackportugal',
  id: 'julgados-de-paz-process',
  categoryId: 'emergency_rights',
  title: 'Julgados de Paz: small claims court for disputes up to €15,000',
  tldr: 'Julgados de Paz are fast civil courts for smaller disputes up to €15,000: consumer claims, contracts, debts, condomínio, neighbour and property conflicts. The initial fee is usually €35 for the claimant; the full taxa única is €70. The process is mediation-first: mediation is offered first, then a hearing before a juiz de paz. They are not suitable for family, inheritance, employment, criminal, bankruptcy cases or eviction. They operate only in areas where there is a Julgado de Paz.',
  tags: ['julgados', 'court', 'disputes', 'mediation'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What a Julgado de Paz is',
      content: [
        { kind: 'paragraph', text: 'Julgados de Paz are special courts for simple civil disputes of low and medium value. They are regulated by Lei 78/2001 and operate in parallel with ordinary tribunais judiciais. The aim is fast, inexpensive and less formal conflict resolution.' },
        { kind: 'paragraph', text: 'The main limit in 2026: the value of the claim must not exceed €15,000. This is not “advice” and not a police complaint: a decision by a juiz de paz has the force of a court judgment and can be enforced if the losing party does not pay.' },
        { kind: 'checklist', items: [
          'a typical debt under a contract or unpaid service',
          'a consumer dispute with a seller or service provider',
          'a conflict over prestação de serviços: repairs, delivery, works',
          'condomínio disputes: fees, use of common parts, minor damage',
          'neighbour disputes: noise, fence, boundaries, trees, right of way',
          'civil liability for damage to property',
          'disputes over movable property and small property claims',
          'some tenancy issues, provided they are not despejo/eviction'
        ] }
      ]
    },
    {
      id: 'excluded-cases',
      title: 'What you cannot file there',
      content: [
        { kind: 'paragraph', text: 'A Julgado de Paz does not replace all courts. If the subject matter is excluded by law or the amount is above €15,000, the application will not be accepted or the case will go to an ordinary court.' },
        { kind: 'checklist', items: [
          'family cases: divorce, parental responsibilities, maintenance',
          'inheritance and division of the estate',
          'employment disputes with an employer',
          'criminal cases and crime reports',
          'tax, immigration and administrative disputes with the state',
          'bankruptcy, recuperação de empresas, insolvência',
          'eviction of a tenant: despejo goes through Balcão do Arrendatário e do Senhorio or a court',
          'cases where a specialised court is mandatory',
          'claims above €15,000 even if “almost everything is obvious”',
          'areas without a competent Julgado de Paz — in that case you need a tribunal judicial'
        ] },
        { kind: 'warning', text: 'If the dispute with a company is consumer-related, also check the Centro de Arbitragem de Conflitos de Consumo. For some sectors, arbitration may be faster or more binding on the business than a Julgado de Paz.' }
      ]
    },
    {
      id: 'before-filing',
      title: 'Before filing: check jurisdiction and gather evidence',
      content: [
        { kind: 'paragraph', text: 'First check whether there is a Julgado de Paz for your concelho and whether the place of the dispute fits. Usually the relevant factors are the defendant’s address, the place where the contract was to be performed, the location of the property, or the place where the damage occurred.' },
        { kind: 'checklist', items: [
          'NIF, name and address of the claimant',
          'name/company name, NIF/NIPC and address of the defendant, if known',
          'claim amount in € and how it is calculated',
          'contract, orçamento, fatura, recibo, WhatsApp/email correspondence',
          'photos of damage, reports, witnesses, complaints',
          'comprovativo de pagamento: MB WAY, Multibanco, bank transfer',
          'a written demand to the other party before court, preferably by email or carta registada',
          'translation of key documents if they are not in Portuguese',
          'IBAN for receiving money if you are claiming payment',
          'address for notifications in Portugal'
        ] },
        { kind: 'warning', text: 'A lawyer is usually not mandatory, but the language of the process is Portuguese. If you do not speak Portuguese well, prepare a short summary of the facts in advance and ask for an interpreter/representative. The court is not required to conduct the case in Russian or English.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'How to file a case',
      content: [
        { kind: 'paragraph', text: 'You can start the process through the ePortugal service “Iniciar um processo num Julgado de Paz” or directly at the competent Julgado de Paz — in person, in writing or via the channels available at that specific court. The format depends on the particular Julgado de Paz, so check the page and contacts before visiting.' },
        { kind: 'substeps', items: [
          { id: 'identify-court', title: '1. Find the right Julgado de Paz', content: [
            { kind: 'paragraph', text: 'On the Conselho dos Julgados de Paz website, open the list of courts and check whether your concelho is covered. If not, filing is through an ordinary tribunal judicial or suitable arbitration.' }
          ] },
          { id: 'write-claim', title: '2. Describe the pedido in simple language', content: [
            { kind: 'paragraph', text: 'State: who owes what to whom, what happened, the date, the amount, the evidence and exactly what you are asking for: to pay €X, return an item, fix a defect, stop an infringement.' }
          ] },
          { id: 'pay-fee', title: '3. Pay the initial fee', content: [
            { kind: 'paragraph', text: 'The claimant usually pays €35 when filing. The full taxa única for the process is €70 and, as a general rule, is split between the parties; the final allocation depends on the outcome of the case.' }
          ] },
          { id: 'wait-notification', title: '4. Wait for the defendant to be notified', content: [
            { kind: 'paragraph', text: 'The Julgado de Paz notifies the defendant and proposes the next steps: mediation, contestação, scheduling a hearing. Watch your post: missing a notification can harm the case.' }
          ] }
        ] }
      ]
    },
    {
      id: 'mediation-hearing-decision',
      title: 'Mediation, hearing and decision',
      content: [
        { kind: 'paragraph', text: 'The logic of Julgados de Paz is to try an amicable solution first. Mediation is voluntary: if both parties agree, a mediador helps formalise an acordo. Such an acordo can have the force of a court judgment after homologação.' },
        { kind: 'checklist', items: [
          'mediation is cheaper and faster if the dispute can be settled by payment or repair',
          'do not accept oral promises without a written acordo',
          'in the acordo, record the amount, deadline, IBAN, instalments and consequences of late payment',
          'if mediation fails, the case goes to the juiz de paz',
          'at the hearing, speak briefly: facts, dates, documents, amount',
          'bring original documents and copies for the court/other party',
          'witnesses must be warned in advance',
          'the decision of the juiz de paz is called a sentença and is enforceable',
          'if a party does not pay voluntarily, enforcement proceedings may be possible'
        ] },
        { kind: 'warning', text: 'Appeal is not always possible. As a general rule, it depends on the value of the case and procedural conditions. If the amount is significant for you or the dispute is legally complex, show the documents to an advogado or solicitador before filing.' }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Practical tips for an expat',
      content: [
        { kind: 'paragraph', text: 'A Julgado de Paz is useful when you have a clear monetary or property dispute, documents and the defendant’s address. It works poorly if you need urgent interim relief, complex expert evidence, a dispute with a public authority or the defendant is unknown.' },
        { kind: 'checklist', items: [
          'before going to court, send the other party a written ultimato with a reasonable deadline: 7–15 days',
          'calculate all amounts in € and attach the calculation on a separate sheet',
          'save screenshots of correspondence with the date, phone number/email and context',
          'if the defendant is a company, check the NIPC and morada da sede in the certidão permanente or on faturas',
          'if the dispute is with a landlord, separate debt/damage from eviction: despejo does not belong here',
          'if the case concerns condomínio, obtain the ata, regulamento and calculation of quotas',
          'do not inflate the claim above €15,000: the Julgado de Paz will lose jurisdiction',
          'if you move, update your address for notifications in writing',
          'for urgent threats, violence, theft or fraud, contact PSP/GNR, not a Julgado de Paz'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Filing by the claimant', amountEUR: 35, note: 'Usually paid when starting the process at the Julgado de Paz.' },
    { label: 'Full taxa única for the process', amountEUR: 70, note: 'As a rule, €35 from each party; the final allocation may depend on the decision.' },
    { label: 'Advogado or solicitador', amountEURMin: 50, amountEURMax: 250, note: 'Not mandatory for most cases, but useful for checking the claim, evidence and appeal.' }
  ],
  sources: [
    { title: 'ePortugal: start a process at a Julgado de Paz', url: 'https://www2.gov.pt/en/servicos/iniciar-um-processo-num-julgado-de-paz', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Conselho dos Julgados de Paz: courts, jurisdiction and information', url: 'https://www.conselhodosjulgadosdepaz.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 78/2001: organisation, jurisdiction and operation of Julgados de Paz', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2001-34412675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
