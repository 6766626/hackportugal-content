export default {
  editorialVoice: 'hackportugal',
  id: 'aima-escalation-ombudsman',
  categoryId: 'emergency_rights',
  title: 'AIMA is not responding: escalation through the Provedor de Justiça',
  tldr: 'If AIMA has lost your file, is not giving you an appointment slot, has not issued your cartão de residência for months, or is not replying to email, proceed step by step: gather evidence → complain in the Livro de Reclamações → give AIMA up to 60 days to react → complain to the Provedor de Justiça → if there is urgent harm, go to the Tribunal Administrativo with a lawyer. The Provedor is free, but it does not replace the court and does not suspend residence permit deadlines.',
  tags: ['aima', 'complaint', 'provedor', 'residence permit'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-to-escalate',
      title: 'When this is appropriate',
      content: [
        { kind: 'paragraph', text: 'The Provedor de Justiça is Portugal’s ombudsman. It accepts complaints about actions or inaction by public bodies, including AIMA. It is not a “48-hour accelerator”, but an official pressure channel: the Provedor can ask AIMA for explanations, point out a breach, and recommend that the situation be corrected.' },
        { kind: 'checklist', items: [
          'AIMA has not replied to an email/contact form for longer than a reasonable period',
          'the application has been accepted, but the cartão de residência has not been issued for months',
          'the appointment was cancelled or disappeared, and there is no new slot',
          'the file has been “lost” or documents are being requested again even though they were already submitted',
          'there is a risk of losing a job, housing, travel, a study place, or access to the SNS because of the delay',
          'you have already contacted AIMA directly and can prove it',
          'the situation concerns AIMA’s public function, not a private intermediary or lawyer'
        ] },
        { kind: 'warning', text: 'The Provedor does not issue residence permits, does not allocate appointment slots itself, and cannot replace AIMA’s decision. It is also not an appeal against a refusal: if you have a formal refusal with a prazo para impugnação, calculate court deadlines separately with a lawyer.' }
      ]
    },
    {
      id: 'build-evidence',
      title: 'Gather evidence before complaining',
      content: [
        { kind: 'paragraph', text: 'A weak complaint sounds like “AIMA is silent”. A strong complaint is a chronology with dates, numbers, copies, and a specific request. Before the Livro de Reclamações and the Provedor, prepare one PDF pack.' },
        { kind: 'checklist', items: [
          'passport and current status: D1-D8 visa, Manifestação de Interesse, CPLP, residence permit renewal, Reagrupamento Familiar, etc.',
          'NIF, NISS and número de utente, if they are linked to the harm',
          'comprovativo de submissão, receipt, payment reference, or AIMA case number',
          'copies of emails to AIMA, automatic replies, screenshots of the contact form',
          'proof of payment of AIMA fees, for example €133 for admissão or €307.20 under art. 75 after 01.03.2026, if applicable',
          'screenshots of the portal/account showing the error, absence of slots, or case status',
          'evidence of harm: contrato de trabalho, employer’s letter, matrícula, tenancy agreement, tickets, medical documents',
          'specific request: “I ask you to locate the case”, “I ask you to schedule atendimento”, “I ask you to issue the cartão”, “I ask you to clarify the status in writing”'
        ] },
        { kind: 'warning', text: 'Do not send original documents by post unless necessary. Copies and screenshots are enough for complaints; redact third parties’ personal data if it is not needed for the case.' }
      ]
    },
    {
      id: 'livro-reclamacoes',
      title: 'Step 1: Livro de Reclamações',
      content: [
        { kind: 'paragraph', text: 'Start with the Livro de Reclamações Electrónico: this is an official complaint channel for organisations, available online. For AIMA, choose the entidade/serviço, describe the facts by date, and attach files. The complaint is registered and receives a number, which is useful to give to the Provedor later.' },
        { kind: 'substeps', items: [
          { id: 'open-portal', title: '1. Open the portal', content: [
            { kind: 'paragraph', text: 'Go to livroreclamacoes.pt, choose to submit a reclamação, enter your contact details, and find AIMA as the entidade reclamada. If the system does not find the specific office, choose the central entidade and state the place/channel of contact in the text.' }
          ] },
          { id: 'write-text', title: '2. Write briefly and legally cleanly', content: [
            { kind: 'checklist', items: [
              'who you are: name, nationality, NIF, AIMA case number, if any',
              'what happened: 5-10 lines by date',
              'what you have already done: emails, calls, visits, payments',
              'what harm is arising: work, housing, studies, health, inability to travel',
              'what you are asking for: a specific action or written reply',
              'attachments: PDFs/screenshots with file names'
            ] }
          ] },
          { id: 'save-proof', title: '3. Save the confirmation', content: [
            { kind: 'paragraph', text: 'Download or save the comprovativo da reclamação and the number. Without this, the Provedor will see that you did not try to resolve the matter directly and may ask you to contact AIMA first.' }
          ] }
        ] },
        { kind: 'warning', text: 'Do not write threats, insults, or “I know the minister”. Write verifiable facts. In Portugal, a dry chronology works better than emotional text.' }
      ]
    },
    {
      id: 'wait-60-days',
      title: 'Step 2: wait up to 60 days and follow up',
      content: [
        { kind: 'paragraph', text: 'For the Provedor, it is important that you first give the administration an opportunity to reply. A practical benchmark is 60 days after the complaint/last contact, if there is no urgent risk. If AIMA replied formally but did not solve the problem, that is also material for the Provedor.' },
        { kind: 'checklist', items: [
          'after 15-20 days, check your email, spam folder, and complaint status',
          'if AIMA sends a reply, save it as a PDF',
          'if there is no reply, send a short follow-up with the Livro de Reclamações number',
          'do not create 10 identical complaints every week: this makes the case harder to read',
          'if a new fact arises, such as dismissal or visa expiry, add it in a separate email',
          'after 60 days, prepare the pack for the Provedor: first complaint, follow-up, replies/silence, harm'
        ] },
        { kind: 'warning', text: 'If there is an immediate risk of deportation, job loss, family separation, inability to receive treatment, or a court deadline after a refusal is expiring, do not wait 60 days — consult an advogado about the administrative court in parallel.' }
      ]
    },
    {
      id: 'provedor-complaint',
      title: 'Step 3: complaint to the Provedor de Justiça',
      content: [
        { kind: 'paragraph', text: 'A complaint to the Provedor is free and can be submitted online, by letter, or in person. You can submit it in Portuguese or English; in practice, Portuguese is better for AIMA. It is better to translate Russian text at least by machine and check names, dates, and numbers.' },
        { kind: 'checklist', items: [
          'state that the complaint is against AIMA — Agência para a Integração, Migrações e Asilo',
          'write the Livro de Reclamações complaint number and the submission date',
          'provide a chronology: date of submission to AIMA, payments, atendimento, emails, silence',
          'explain why the inaction is unlawful or disproportionate: no reply, no decision, inability to exercise rights',
          'show the harm with documents, not general statements',
          'formulate the request: ask AIMA for the case status and recommend that a decision be made/atendimento be scheduled',
          'attach one PDF pack and separate key documents',
          'save the Provedor case number and all subsequent letters'
        ] },
        { kind: 'paragraph', text: 'After submission, the Provedor may request additional information, forward the matter to AIMA, and wait for the authority’s reply.\n\nThere are no “it will be resolved in X days” deadlines: sometimes it helps within a few weeks, sometimes it takes months. The value of the complaint is an official trail and pressure from an independent body.' },
        { kind: 'warning', text: 'The Provedor usually does not intervene if the same matter is already before a court, or if the complaint is clearly unfounded. If you have filed a court case, state this honestly.' }
      ]
    },
    {
      id: 'court-option',
      title: 'Step 4: if silence is disrupting your life — Tribunal Administrativo',
      content: [
        { kind: 'paragraph', text: 'If AIMA continues to do nothing and the delay is causing serious harm, the next level is the administrative court. The type of tool is chosen by the advogado: for example, ação de condenação à prática de ato devido in the case of unlawful inaction, or intimação para proteção de direitos, liberdades e garantias under the CPTA when fundamental rights are affected.' },
        { kind: 'checklist', items: [
          'go to an advogado with the full PDF pack, not with a WhatsApp retelling',
          'take your passport, residence permit/visa, AIMA comprovativos, Livro de Reclamações, and Provedor complaint',
          'ask for urgency to be assessed: work, family, health, travel, risk of irregular status',
          'clarify court costs, honorários, and the likelihood of an interim measure',
          'check whether you are entitled to apoio judiciário through Segurança Social if your income is low',
          'do not miss appeal deadlines if you have a formal AIMA decision, not just silence'
        ] },
        { kind: 'paragraph', text: 'Court is not one final “complaint”, but a legal dispute with procedural rules. It is more expensive, but sometimes it is the only working way to force the administration to make a decision when months of waiting are already causing real harm.' },
        { kind: 'warning', text: 'Do not rely only on Facebook posts and Telegram templates. The same template can harm you if you have a refusal, expired status, a family case, or an urgent medical situation.' }
      ]
    }
  ],
  costs: [
    { label: 'Livro de Reclamações Electrónico', amountEUR: 0, note: 'Submitting a complaint online is free.' },
    { label: 'Provedor de Justiça', amountEUR: 0, note: 'A complaint to the ombudsman is free.' },
    { label: 'Administrative court: taxa de justiça', amountEURMin: 306, amountEURMax: 612, note: 'Indicative range of 3-6 UC at €102 per UC; the exact amount depends on the proceedings and any exemptions.' },
    { label: 'Advogado', amountEURMin: 300, amountEURMax: 1500, note: 'The market varies greatly; urgent claims and interim measures are usually more expensive.' }
  ],
  sources: [
    { title: 'Provedor de Justiça: how to file a complaint', url: 'https://www.provedor-jus.pt/en/who-we-are/faq/file-a-complaint/', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Livro de Reclamações Electrónico', url: 'https://livroreclamacoes.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'AIMA — Frequently Asked Questions and contacts', url: 'https://aima.gov.pt/pt/perguntas-frequentes-faq-s', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Code of Procedure in the Administrative Courts — Lei 15/2002', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2002-34464475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
