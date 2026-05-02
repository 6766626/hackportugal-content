export default {
  editorialVoice: 'hackportugal',
  id: 'advogado-consulta-gratuita',
  categoryId: 'emergency_rights',
  title: 'Free legal advice: Junta de Freguesia + Ordem dos Advogados',
  tldr: 'In Portugal there are 3 practical free routes: a lawyer/advogado appointment at your Junta de Freguesia, specialised offices for migrants and families such as GIAAP/CIG structures, and Apoio Judiciário under Lei 34/2004 — if income is low, the state pays for a lawyer, court fees, or instalments. Consultations at the Junta are usually once a week/month by appointment, not everywhere. For court, you need not “advice” but an official request through Segurança Social; thresholds are calculated from IAS €537.13 in 2026.',
  tags: ['lawyer', 'junta', 'apoiojudiciário', 'migrants'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-exists',
      title: 'Which free options actually work',
      content: [
        { kind: 'paragraph', text: '“Free legal advice” in Portugal is not one service, but several different channels. It is important to choose the right one: quick advice on an everyday problem, specialised help for migrants/family/violence, or a full lawyer for court.' },
        { kind: 'checklist', items: [
          'Junta de Freguesia — the local parish council; many Juntas have free appointments with a jurist or advogado by appointment.',
          'Câmara Municipal — in some municipalities there is a Gabinete Jurídico, Gabinete de Apoio ao Munícipe or a migrant office.',
          'GIAAP / Gabinetes de Informação, Atendimento e Apoio — advice and referral on family, social and migration matters; availability depends on the city and partner network.',
          'CIG — Comissão para a Cidadania e a Igualdade de Género; useful in cases of domestic violence, discrimination, gender-based violence, family crises.',
          'Ordem dos Advogados — participates in the system for appointing lawyers under Apoio Judiciário and publishes information on access to law.',
          'Apoio Judiciário — the official mechanism under Lei 34/2004: payment for a lawyer, exemption from custas judiciais or instalments for people with insufficient means.'
        ] },
        { kind: 'warning', text: 'An appointment at the Junta is usually an initial consultation. The jurist can explain rights, review a letter, suggest steps, but is not obliged to conduct your case in court, draft procedural documents, or represent you before AIMA, Tribunal, ACT or Finanças.' }
      ]
    },
    {
      id: 'junta-route',
      title: 'Route 1: book an appointment at the Junta de Freguesia',
      content: [
        { kind: 'paragraph', text: 'Start with the Junta de Freguesia for your address. In many Juntas, consultations take place once a week or once a month, often in the evening, by prior appointment. The service may be called consulta jurídica gratuita, apoio jurídico, gabinete jurídico or atendimento jurídico.' },
        { kind: 'checklist', items: [
          'Find the website of your Junta de Freguesia or call the secretaria.',
          'Ask: “Têm consulta jurídica gratuita? Como posso marcar?”',
          'Check the language: Portuguese almost always; English depends on the individual lawyer.',
          'Describe the topic briefly: renting, employment contract, debt, divorce, residence permit, fine, consumer dispute.',
          'Check whether they accept non-residents of the parish: some Juntas help only registered residents.',
          'Ask for an e-mail address to send documents in advance if the consultation is short.',
          'If there are no places at your Junta, ask about the Câmara Municipal or neighbouring serviços sociais.'
        ] },
        { kind: 'paragraph', text: 'Bring the case documents to the meeting: contrato de arrendamento, recibos, letters from the senhorio, AIMA, Finanças, ACT, tribunal, emails, screenshots, NIF, passport/residence permit, comprovativo de morada. The less “story in words”, the more useful the consultation will be.' },
        { kind: 'warning', text: 'Do not delay with deadlines. In Portugal, many replies have short deadlines: 10 days, 15 days, 30 days. A free queue at the Junta does not suspend the deadline for a complaint, oposição, recurso or reply to a carta registada.' }
      ]
    },
    {
      id: 'migrant-family-help',
      title: 'Route 2: migrants, family, violence, discrimination',
      content: [
        { kind: 'paragraph', text: 'If the problem is linked to domestic violence, threats, divorce, children, discrimination, human trafficking or a vulnerable situation, do not limit yourself to a general consultation at the Junta. In such cases, specialised support networks operate, including structures linked to CIG, municipalities and NGOs.' },
        { kind: 'checklist', items: [
          'In cases of domestic violence, call 112 if there is an immediate threat.',
          'Linha Nacional de Emergência Social: 144 — social emergency support.',
          'Serviço de Informação às Vítimas de Violência Doméstica: 800 202 148 — free CIG line, open 24/7.',
          'SMS for victims of domestic violence: 3060, if it is dangerous to speak.',
          'Ask for encaminhamento para apoio jurídico and apoio psicológico.',
          'Keep evidence: mensagens, e-mails, fotos, relatórios médicos, queixa na PSP/GNR.',
          'If there are children, check protection measures and regulação das responsabilidades parentais.',
          'If you are a migrant without stable status, still seek help: support for victims of violence should not depend on a residence permit.'
        ] },
        { kind: 'paragraph', text: 'GIAAP and similar offices may have different names depending on the municipality. Search the Câmara Municipal website for the words “migrantes”, “igualdade”, “família”, “apoio jurídico”, “vítimas”. They often do not handle the court case, but they help you understand the route and refer you to a lawyer, Segurança Social, PSP/GNR, CPCJ or Tribunal.' }
      ]
    },
    {
      id: 'apoio-judiciario',
      title: 'Route 3: Apoio Judiciário if you need a lawyer for court',
      content: [
        { kind: 'paragraph', text: 'Apoio Judiciário is the official system for access to law and the courts under Lei 34/2004. It is needed when you cannot manage without a lawyer: court, criminal case, family case, claim, defence against a claim, employment dispute in court, execução, insolvência. Segurança Social makes the decision, and the lawyer is appointed by Ordem dos Advogados.' },
        { kind: 'checklist', items: [
          'Submit a pedido de proteção jurídica to Segurança Social: online via Segurança Social Direta or in person at a serviço de atendimento.',
          'Indicate the form of help: nomeação e pagamento da compensação de patrono, dispensa de taxa de justiça e demais encargos, pagamento faseado or consulta jurídica.',
          'Attach documents about income, household composition, rent/mortgage, bills, unemployment, benefits, assets.',
          'In 2026, calculations are tied to IAS €537.13; Segurança Social looks not only at salary, but also assets/bank balances/family composition.',
          'If the application is approved, Ordem dos Advogados appoints a patrono or defensor.',
          'If it is refused, you can challenge the decision within the set deadline; do not ignore the carta da Segurança Social.',
          'If you have an urgent court deadline, apply for Apoio Judiciário immediately and keep the comprovativo de entrega.'
        ] },
        { kind: 'warning', text: 'Apoio Judiciário does not mean that “any lawyer is free”. You cannot simply choose an expensive private advogado and ask the state to pay the bill. In the standard arrangement, the lawyer is appointed by the system through Ordem dos Advogados.' }
      ]
    },
    {
      id: 'how-to-prepare',
      title: 'How to prepare so the consultation is not wasted',
      content: [
        { kind: 'paragraph', text: 'Free slots are short: often 15–30 minutes. Your task is to bring facts, dates and documents. The jurist will not be able to help if the story starts with “it is all complicated” and there is no paperwork.' },
        { kind: 'checklist', items: [
          'Make a 1-page chronology: date — event — document.',
          'Formulate 3 questions: “what should I do?”, “what is the deadline?”, “where do I submit it?”.',
          'Bring originals and copies of documents.',
          'Take NIF, passport, residence permit or visa, comprovativo de morada.',
          'If the letter arrived by recorded delivery, keep the envelope and aviso de receção.',
          'For renting: contrato, recibos de renda, caução, correspondence with the senhorio, photos of defects.',
          'For work: contrato, recibos de vencimento, horário, mensagens, despedimento, employer details.',
          'For migration matters: comprovativo do pedido AIMA, recibos, email AIMA, título/visa, entry stamp.',
          'If you need an interpreter, take someone you trust; do not rely on automatic translation of complex legal terms.'
        ] },
        { kind: 'warning', text: 'Do not sign a confissão de dívida, acordo de revogação, denúncia de contrato, acordo parental or any document “just to close the matter” until a jurist has explained the consequences. In Portugal, a signed acordo is often difficult to roll back.' }
      ]
    },
    {
      id: 'when-pay',
      title: 'When a free channel is not enough',
      content: [
        { kind: 'paragraph', text: 'Free consultations are good for diagnosis and referral. But there are situations where a private lawyer is needed quickly, especially if income is above the Apoio Judiciário thresholds or the case is commercially important.' },
        { kind: 'checklist', items: [
          'You have received a citação from the Tribunal and the deadline is already running.',
          'There is a despejo, injunção, execução or penhora.',
          'The employer has dismissed you, is not paying wages or is demanding that you sign an acordo.',
          'AIMA has refused, or there is a risk of missing the deadline for resposta/recurso.',
          'The amount in dispute is significant: deposit, property purchase, business, tax audit.',
          'You need a letter from a lawyer in português jurídico.',
          'You do not speak Portuguese, and the case requires precise wording.'
        ] },
        { kind: 'paragraph', text: 'Ask the lawyer for a written fee quote: consulta, análise documental, carta, processo judicial, IVA. In Portugal, legal services are usually subject to IVA at 23%, unless an exemption applies. For a first paid consultation, a normal market range is approximately €60–150, but prices are free.' }
      ]
    }
  ],
  costs: [
    { label: 'Consultation at the Junta de Freguesia', amountEUR: 0, note: 'Usually free, but availability and schedule depend on the specific Junta.' },
    { label: 'CIG line 800 202 148', amountEUR: 0, note: 'Free 24/7 line for victims of domestic violence.' },
    { label: 'Apoio Judiciário', amountEUR: 0, note: 'May cover a lawyer and court costs in full or provide instalments; depends on Segurança Social means testing.' },
    { label: 'Paid initial consultation with an advogado', amountEURMin: 60, amountEURMax: 150, note: 'Market guide; lawyers set their own fees, often plus IVA at 23%.' }
  ],
  sources: [
    { title: 'Ordem dos Advogados: access to law and apoio judiciário', url: 'https://portal.oa.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CIG: support for victims of domestic violence and help contacts', url: 'https://www.cig.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social: proteção jurídica / apoio judiciário', url: 'https://www.seg-social.pt/protecao-juridica', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 34/2004: regime de acesso ao direito e aos tribunais', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2004-34509975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
