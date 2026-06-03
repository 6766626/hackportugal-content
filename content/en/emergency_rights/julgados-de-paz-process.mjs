export default {
  editorialVoice: 'hackportugal',
  id: 'julgados-de-paz-process',
  categoryId: 'emergency_rights',
  title: 'Julgados de Paz: small-claims court for disputes up to €15,000',
  tldr: 'Julgados de Paz are fast civil courts for smaller disputes up to €15,000: consumer claims, contracts, debts, condomínio, neighbour and property conflicts. The fee (taxa única) is paid at the end of the process: €25 per party if you settle in mediation, or €70 paid by the losing party if the judge decides.\n\nThe process is mediation-first: mediation is offered first, then a hearing before a juiz de paz. They are not suitable for family, inheritance, employment, criminal, insolvency cases or eviction. They operate only in areas where there is a Julgado de Paz.',
  tags: ['julgados', 'court', 'disputes', 'mediation'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What a Julgado de Paz is',
      content: [
        { kind: 'paragraph', text: 'Julgados de Paz are special courts for simple civil disputes of low and medium value. They are governed by Lei 78/2001 and operate alongside ordinary tribunais judiciais. The aim is fast, inexpensive and less formal conflict resolution.' },
        { kind: 'paragraph', text: 'The main limit in 2026: the value of the claim must not exceed €15,000. This is not “advice” and not a police complaint: a decision by a juiz de paz has the force of a court judgment and can be enforced if the losing party does not pay.' },
        { kind: 'checklist', items: [
          'a typical debt under a contract or unpaid service',
          'a consumer dispute with a seller or service provider',
          'a conflict over prestação de serviços: repairs, delivery, works',
          'condomínio disputes: fees, use of common areas, minor damage',
          'neighbour disputes: noise, fence, boundaries, trees, right of way',
          'civil liability for damage to property',
          'disputes over movable property and small property claims',
          'some rental matters, if they are not despejo/eviction'
        ] }
      ]
    },
    {
      id: 'excluded-cases',
      title: 'What you cannot file there',
      content: [
        { kind: 'paragraph', text: 'A Julgado de Paz does not replace all courts. If the subject matter is excluded by law or the amount is above €15,000, the application will not be accepted or the case will go to the ordinary court.' },
        { kind: 'checklist', items: [
          'family cases: divorce, parental rights, maintenance',
          'inheritance and division of the estate',
          'employment disputes with an employer',
          'criminal cases and complaints about crimes',
          'tax, immigration and administrative disputes with the state',
          'bankruptcy, recuperação de empresas, insolvência',
          'eviction of a tenant: despejo goes through Balcão do Arrendatário e do Senhorio or the court',
          'cases where a specialised court is mandatory',
          'claims above €15,000 even if “almost everything is obvious”',
          'areas without a competent Julgado de Paz — then you need a tribunal judicial'
        ] },
        { kind: 'warning', text: 'If the dispute with a company is consumer-related, also check the Centro de Arbitragem de Conflitos de Consumo. For some sectors, arbitration may be faster or more binding for the business than a Julgado de Paz.' }
      ]
    },
    {
      id: 'before-filing',
      title: 'Before filing: check jurisdiction and collect evidence',
      content: [
        { kind: 'paragraph', text: 'First check whether there is a Julgado de Paz for your concelho and whether the location of the dispute fits. Usually the respondent’s address, the place of performance of the contract, the location of the property or the place where the damage occurred are important.' },
        { kind: 'checklist', items: [
          'NIF, name and address of the applicant',
          'name/company name, NIF/NIPC and address of the respondent, if known',
          'amount claimed in € and how it is calculated',
          'contract, orçamento, fatura, recibo, WhatsApp/email correspondence',
          'photos of damage, reports, witnesses, complaints',
          'comprovativo de pagamento: MB WAY, Multibanco, bank transfer',
          'a written demand to the other party before court, preferably by email or carta registada',
          'translation of key documents if they are not in Portuguese',
          'IBAN for receiving money, if you are claiming payment',
          'address for notifications in Portugal'
        ] },
        { kind: 'warning', text: 'A lawyer is usually not mandatory, but the language of the proceedings is Portuguese. If you do not speak Portuguese well, prepare a short summary of the facts in advance and ask for an interpreter/representative. The court is not obliged to conduct the case in Russian or English.' }
      ]
    },
    {
      id: 'how-to-file',
      title: 'How to file a case',
      content: [
        { kind: 'paragraph', text: 'You can start a case through the ePortugal service “Iniciar um processo num Julgado de Paz” or directly with the competent Julgado de Paz — in person, in writing or through the channels available at that specific court. The format depends on the particular Julgado de Paz, so check the page and contact details before visiting.' },
        { kind: 'substeps', items: [
          { id: 'identify-court', title: '1. Find the correct Julgado de Paz', content: [
            { kind: 'paragraph', text: 'On the Conselho dos Julgados de Paz website, open the list of courts and check whether your concelho is covered. If not, filing is through the ordinary tribunal judicial or through suitable arbitration.' }
          ] },
          { id: 'write-claim', title: '2. Describe the pedido in plain language', content: [
            { kind: 'paragraph', text: 'State: who owes whom, what happened, the date, the amount, the evidence and exactly what you are asking for: to pay €X, return an item, fix a defect, stop the infringement.' }
          ] },
          { id: 'pay-fee', title: '3. Plan for the fee (taxa única)', content: [
            { kind: 'paragraph', text: 'Nothing is paid when filing: the fee is paid at the end of the process by bank transfer. If the parties settle in mediation, each pays €25. If the judge decides the case, the taxa única is €70, paid by the losing party (in case of partial loss the judge splits it proportionally).' }
          ] },
          { id: 'wait-notification', title: '4. Wait for the respondent to be notified', content: [
            { kind: 'paragraph', text: 'The Julgado de Paz notifies the respondent and proposes the next steps: mediation, contestação, scheduling a hearing. Watch your post: missing a notification can harm the case.' }
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
          'mediation is cheaper and faster: a settlement costs just €25 per party',
          'do not agree to verbal promises without a written acordo',
          'in the acordo, record the amount, deadline, IBAN, instalments and consequences of late payment',
          'if mediation fails, the case goes to the juiz de paz',
          'at the hearing, speak briefly: facts, dates, documents, amount',
          'bring original documents and copies for the court/other party',
          'witnesses must be warned in advance',
          'the decision of the juiz de paz is called a sentença and is enforceable',
          'if a party does not pay voluntarily, enforcement proceedings may be possible'
        ] },
        { kind: 'warning', text: 'Appeal is not always possible: as a general rule, only if the value of the case is above €2,500, and at that stage a lawyer becomes mandatory. If the amount is significant for you or the dispute is legally complex, show the documents to an advogado or solicitador before filing.' }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Practical tips for an expat',
      content: [
        { kind: 'paragraph', text: 'A Julgado de Paz is useful when you have a clear monetary or property dispute, documents and the respondent’s address. It works poorly if you need urgent interim measures, complex expert evidence, a dispute with a public authority or the respondent is unknown.' },
        { kind: 'checklist', items: [
          'before court, send the other party a written ultimato with a reasonable deadline: 7–15 days',
          'calculate all amounts in € and attach the calculation on a separate sheet',
          'save screenshots of correspondence with the date, phone number/email and context',
          'if the respondent is a company, check the NIPC and morada da sede in the certidão permanente or on faturas',
          'if the dispute is with a landlord, separate the debt/damage from eviction: despejo does not belong here',
          'if the case concerns condomínio, obtain the ata, regulamento and calculation of quotas',
          'do not inflate the claim above €15,000: the Julgado de Paz will lose jurisdiction',
          'if you move, update your address for notifications in writing',
          'for urgent threats, violence, theft or fraud, contact the PSP/GNR, not the Julgado de Paz'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Settlement in mediation', amountEUR: 25, note: '€25 from each party (€50 total) if the dispute ends in a mediated agreement.' },
    { label: 'taxa única if the judge decides', amountEUR: 70, note: 'Paid by the losing party at the end of the process; in case of partial loss the judge splits it proportionally.' },
    { label: 'Lawyer or solicitador', amountEURMin: 50, amountEURMax: 250, note: 'Not mandatory for most cases, but useful for checking the claim, evidence and appeal.' }
  ],
  sources: [
    { title: 'ePortugal: start a case in a Julgado de Paz', url: 'https://www2.gov.pt/en/servicos/iniciar-um-processo-num-julgado-de-paz', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Conselho dos Julgados de Paz: courts, jurisdiction and information', url: 'https://www.conselhodosjulgadosdepaz.com.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 78/2001: organisation, jurisdiction and operation of Julgados de Paz', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2001-34412675', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Portaria 342/2019: regime de cobrança das taxas nos Julgados de Paz', url: 'https://files.dre.pt/1s/2019/10/18900/0011900120.pdf', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
