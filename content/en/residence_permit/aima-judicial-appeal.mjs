export default {
  editorialVoice: 'hackportugal',
  id: 'aima-judicial-appeal',
  categoryId: 'residence_permit',
  title: 'AIMA refused: hierarchical appeal and claim in the TAC',
  tldr: 'If AIMA has refused a residence permit or renewal, do not wait for it to “fix itself”: there are usually 3 months from notification for a recurso hierárquico or ação administrativa in the Tribunal Administrativo de Círculo de Lisboa. The court route requires an advogado; the basic court fee is often around €76.50 (0.75 UC), but the lawyer’s fee is the main cost. Before a final refusal, check whether it was an audiência prévia: you are often given 10 working days to reply.',
  tags: ['aima', 'tac', 'appeal', 'residence permit'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'identify-decision',
      title: '1. Understand exactly what AIMA has sent',
      content: [
        { kind: 'paragraph', text: 'The first step is to distinguish a draft refusal from a final refusal. AIMA letters often use legal language: audiência prévia, indeferimento, projeto de decisão, decisão final. The deadline and strategy depend on this.' },
        { kind: 'checklist', items: [
          'If it says audiência prévia or projeto de indeferimento, this is not yet a final refusal; you can usually reply and submit additional documents.',
          'If it says decisão de indeferimento, indeferido or decisão final, this is already an administrative act that can be challenged.',
          'Count the deadline from the date of notification: email, online account, registered letter or the date of actual receipt.',
          'Keep the original AIMA email with headers, PDFs, the CTT envelope, aviso de receção and portal screenshots.',
          'Check which procedure the refusal relates to: primeira autorização de residência, renovação, reagrupamento familiar, CPLP, art. 88/89, D7/D8 and so on.',
          'Do not mix up a consular refusal of a D visa with an AIMA refusal of a residence permit: the authorities are different, but the court route often still goes through the administrative courts.',
          'Check whether AIMA stated the grounds: falta de meios de subsistência, ausência de seguro/SNS, antecedentes criminais, falta de alojamento, documentos caducados.'
        ] },
        { kind: 'warning', text: 'If this is an audiência prévia, do not immediately file a “panic claim”. First reply substantively within the deadline, attaching the missing documents. Skipping this stage weakens your position in court.' }
      ]
    },
    {
      id: 'deadlines',
      title: '2. Deadlines: 10 working days, 3 months, and why you must not delay',
      content: [
        { kind: 'paragraph', text: 'In 2026, the practical split is as follows: before the final refusal, you reply to the audiência prévia; after the final refusal, you pursue an administrative appeal or go to court. For impugnação de ato administrativo under the CPTA, the basic deadline for private individuals is 3 months. For a recurso hierárquico facultativo against an administrative act, the judicial challenge deadline is also used as the reference, unless a special rule provides a different deadline.' },
        { kind: 'checklist', items: [
          'AIMA sent a projeto de indeferimento: you are often given 10 working days for the audiência prévia.',
          'AIMA issued a final refusal: the reference point is 3 months for an ação administrativa in the TAC.',
          'Recurso hierárquico: also plan around a 3-month deadline, unless an advogado has confirmed a special deadline.',
          'Deadlines are counted not “until the end of the month”, but from the date of notification.',
          'If the last day falls on a weekend/public holiday, the rules for procedural time limits apply — let an advogado/solicitador calculate it.',
          'Filing an administrative complaint may affect the running of the court deadline, but that is not a reason to file it “to extend time” without a strategy.',
          'If there is a risk of departure, deportation, job loss or family separation, discuss a providência cautelar together with the main claim.'
        ] },
        { kind: 'warning', text: 'Do not wait months for an AIMA reply if the court deadline is expiring. The main mistake is to file a recurso hierárquico, fail to monitor its effect on the judicial prazo, and miss the TAC window.' }
      ]
    },
    {
      id: 'hierarchical-appeal',
      title: '3. Recurso hierárquico: when it makes sense',
      content: [
        { kind: 'paragraph', text: 'Recurso hierárquico is an administrative appeal within the system: you ask a higher authority to review AIMA’s decision. It is cheaper than court and sometimes works if the refusal is technical: a document was overlooked, dates were wrong, a payment was not taken into account, or the application type was confused.' },
        { kind: 'checklist', items: [
          'Prepare a brief chronology: date of entry, visa, AIMA appointment, submission, biometria, AIMA requests, replies, refusal date.',
          'Address each of AIMA’s arguments point by point: “AIMA claims X — in fact Y — evidence Z”.',
          'Attach up-to-date documents: passport, visa, comprovativo de entrada, NIF, NISS, contrato de arrendamento/atestado, meios de subsistência, seguro/SNS, certificado criminal.',
          'Translate documents in Russian into PT/EN through a sworn/certified translator if they are material.',
          'Send it in a way that leaves a trace: registered letter with aviso de receção, email/portal with confirmation, protocolo for in-person submission.',
          'Ask for the indeferimento to be cancelled and the procedure reopened, not simply for “the situation to be reviewed”.',
          'Keep proof of submission — you will need it if you later go to the TAC.'
        ] },
        { kind: 'paragraph', text: 'The downside: AIMA is overloaded, and a recurso hierárquico does not always produce a quick result. If the refusal affects the right to family life, work, renewal of lawful stay, or you are already close to 3 months, it is often more sensible to prepare a court claim straight away.' }
      ]
    },
    {
      id: 'tac-action',
      title: '4. Claim in the Tribunal Administrativo de Círculo de Lisboa',
      content: [
        { kind: 'paragraph', text: 'The court route is an ação administrativa de impugnação de ato administrativo. For AIMA decisions and consular visa refusals, in practice the Tribunal Administrativo de Círculo de Lisboa is often used, especially where the defendant is a central authority. An advogado must file it: representation by a lawyer is usually mandatory in the administrative courts.' },
        { kind: 'checklist', items: [
          'Find an advogado with AIMA/TAC experience, not just an “immigration consultant”.',
          'Ask for a written assessment: deadline, jurisdiction, chances, price, and whether a providência cautelar is needed.',
          'Give the lawyer the full file, including all AIMA letters, even if they seem unimportant.',
          'The claim should seek annulment/declaração de nulidade of the decision and, if necessary, an obligation for AIMA to reconsider the application.',
          'If the refusal clearly threatens work, family, studies or the right to remain in Portugal, discuss an urgent interim measure.',
          'The basic taxa de justiça may be around €76.50 (0.75 UC where UC is €102), but the final court costs depend on the value and type of case.',
          'The advogado’s fee is usually much higher than the court fee; agree the stages in advance: análise, petição inicial, audiência, recursos.'
        ] },
        { kind: 'warning', text: 'The TAC does not “issue a residence permit instead of AIMA”. The court usually annuls an unlawful decision and forces the administration to reconsider the case according to the law. Therefore, the evidence must address the reasons for refusal, not merely show that you “really need” to stay.' }
      ]
    },
    {
      id: 'evidence',
      title: '5. What to gather before the lawyer and court',
      content: [
        { kind: 'paragraph', text: 'A strong case is not an emotional letter, but a well-organised evidence folder. The faster you assemble the file, the less time the lawyer will spend reconstructing the picture, and the lower the risk of missing a deadline.' },
        { kind: 'checklist', items: [
          'Passport: pages with personal details, visas, entry/exit stamps.',
          'D1-D8 visa, CPLP documents or other basis for stay.',
          'Comprovativo de manifestação/appointment/biometria/submission at AIMA.',
          'All AIMA notifications: pedidos de elementos, audiência prévia, decisão final.',
          'Evidence of replies to AIMA: email sent, comprovativo postal, protocolo, screenshots.',
          'NIF, NISS, número de utente SNS or health insurance.',
          'Address: contrato de arrendamento, recibos de renda, atestado de residência, utility bills.',
          'Income: contrato de trabalho, recibos de vencimento, recibos verdes, extratos bancários, IRS, declaração da entidade patronal.',
          'Family: certidão de casamento/nascimento, children’s school, evidence of living together.',
          'Criminal record certificates and translations, if the issue concerned antecedentes criminais.'
        ] },
        { kind: 'paragraph', text: 'Create one PDF folder by date and a separate chronology table. File names: 2025-11-03_AIMA_pedido-elementos.pdf, 2025-11-10_resposta_comprovativo.pdf. It sounds basic, but in court cases it saves hours.' }
      ]
    },
    {
      id: 'strategy',
      title: '6. Practical strategy after a refusal',
      content: [
        { kind: 'paragraph', text: 'The choice between recurso hierárquico and the TAC depends on the reason for refusal, urgency and quality of evidence. If the error is obvious and easy to fix, you can start with the administrative route. If the refusal is legally debatable, the deadline is tight, or the consequences are serious, do not postpone court action.' },
        { kind: 'checklist', items: [
          'In the first 48 hours: identify the type of letter and the date of notification.',
          'In the first week: gather the full file and obtain advice from an advogado.',
          'Before replying to the audiência prévia: close all factual gaps with documents.',
          'Before 3 months: either file a recurso hierárquico while controlling the court deadline, or an ação administrativa in the TAC.',
          'Do not leave Portugal without a risk assessment if your status is disputed or your document has expired.',
          'Do not rely on verbal promises from the AIMA call centre — in a dispute, written evidence matters.',
          'If the refusal is linked to work, inform the employer carefully: you may need a declaração da entidade patronal.',
          'If there are children/spouse/medical circumstances, document this — it is important for proportionality and fundamental rights.'
        ] },
        { kind: 'warning', text: 'Consultants without a cédula profissional cannot conduct a court case in the TAC. They can help with documents, but the claim, interim measures and procedural deadlines must be controlled by an advogado.' }
      ]
    }
  ],
  costs: [
    { label: 'Taxa de justiça when filing in the TAC', amountEUR: 76.5, note: 'Reference point of 0.75 UC where UC is €102; the final amount depends on the type and value of the case.' },
    { label: 'Recurso hierárquico without a lawyer', amountEURMin: 0, amountEURMax: 50, note: 'There is often no state fee; costs are postage, translations and certifications. A lawyer is paid separately.' },
    { label: 'Advogado consultation', amountEURMin: 80, amountEURMax: 250, note: 'Typical range for an initial file review; complex cases cost more.' },
    { label: 'Court representation by an advogado', amountEURMin: 1000, amountEURMax: 4000, note: 'The market varies greatly depending on urgency, interim measures and the number of hearings.' }
  ],
  sources: [
    {
      title: 'MNE: appeal mechanisms for national visa refusals',
      url: 'https://vistos.mne.gov.pt/en/national-visas/appeal-mechanisms',
      kind: 'official',
      language: 'en',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CPTA: Código de Processo nos Tribunais Administrativos, deadlines and administrative claims',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2002-34490075',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'CPA: Código do Procedimento Administrativo, administrative complaints and recurso hierárquico',
      url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2015-105602322',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Move to Cascais: overview of judicial appeals against AIMA decisions',
      url: 'https://movetocascais.com/lawyer-services/judicial-appeal-of-aima-decisions-protecting-your-rights/',
      kind: 'company',
      language: 'en',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
