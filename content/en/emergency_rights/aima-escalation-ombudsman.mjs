export default {
  editorialVoice: 'hackportugal',
  id: 'aima-escalation-ombudsman',
  categoryId: 'emergency_rights',
  title: 'AIMA is not responding: escalation via the Provedor de Justiça',
  tldr: 'If AIMA has lost your file, will not give you a slot, has not issued a residence card for months, or does not reply to email, move up the ladder: gather evidence → complaint in the Livro de Reclamações → give AIMA up to 60 days to react → complaint to the Provedor de Justiça → if there is urgent harm, go to the Tribunal Administrativo with a lawyer. The Provedor is free, but does not replace a court and does not stop residence permit deadlines.',
  tags: ['aima', 'complaint', 'ombudsman', 'residence-permit'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-to-escalate',
      title: 'When this is suitable',
      content: [
        { kind: 'paragraph', text: 'The Provedor de Justiça is Portugal’s Ombudsman. It accepts complaints about actions or inaction of public bodies, including AIMA. It is not a “48-hour fast track”, but an official pressure channel: the Provedor can request explanations from AIMA, point out a breach and recommend that the situation be corrected.' },
        { kind: 'checklist', items: [
          'AIMA does not reply to email/contact form beyond a reasonable period',
          'the application was accepted, but the residence card has not been issued for months',
          'an appointment was cancelled or disappeared and there is no new slot',
          'the file has been “lost” or you are being asked for documents that were already submitted',
          'there is a risk of losing a job, housing, trip, study place or access to SNS due to the delay',
          'you have already contacted AIMA directly and can prove it',
          'the situation concerns AIMA’s public function, not a private intermediary or lawyer'
        ] },
        { kind: 'warning', text: 'The Provedor does not issue residence permits, does not schedule slots itself and cannot replace AIMA’s decision. It is also not an appeal against a refusal: if you have a formal refusal with prazo para impugnação, count the court deadlines separately with a lawyer.' }
      ]
    },
    {
      id: 'build-evidence',
      title: 'Gather evidence before complaining',
      content: [
        { kind: 'paragraph', text: 'A weak complaint sounds like “AIMA is silent”. A strong complaint is a chronology with dates, numbers, copies and a specific request. Before the Livro de Reclamações and the Provedor, assemble a single PDF bundle.' },
        { kind: 'checklist', items: [
          'passport and current status: visa D1-D8, Manifestação de Interesse, CPLP, renewal of residence permit, family reunification, etc.',
          'NIF, NISS and número de utente, if they are linked to the harm',
          'comprovativo de submissão, recibo, referência de pagamento or AIMA process number',
          'copies of emails to AIMA, auto-replies, screenshots of the contact form',
          'proof of AIMA fee payments, for example €133 for admissão or €307.20 under art. 75 after 01.03.2026, if applicable',
          'screenshots of the portal/account showing an error, absence of slots or process status',
          'evidence of harm: contrato de trabalho, employer letter, matrícula, tenancy agreement, tickets, medical documents',
          'a precise ask: “please find the process”, “please schedule an appointment (atendimento)”, “please issue the card”, “please clarify the status in writing”'
        ] },
        { kind: 'warning', text: 'Do not send original documents by post unless necessary. For complaints, copies and screenshots are sufficient; redact third-party personal data if it is not needed for the case.' }
      ]
    },
    {
      id: 'livro-reclamacoes',
      title: 'Step 1: Livro de Reclamações',
      content: [
        { kind: 'paragraph', text: 'Start with the Livro de Reclamações Electrónico: it is the official online complaints channel for organisations. For AIMA, choose the entidade/serviço, describe the facts by date and attach files. The complaint is recorded and gets a number, which is convenient to provide to the Provedor later.' },
        { kind: 'substeps', items: [
          { id: 'open-portal', title: '1. Open the portal', content: [
            { kind: 'paragraph', text: 'Go to livroreclamacoes.pt, choose to submit a reclamação, enter your contacts and find AIMA as the entidade reclamada. If the system does not find a specific branch, choose the central entity and indicate the place/channel of contact in the text.' }
          ] },
          { id: 'write-text', title: '2. Write briefly and in clean legal language', content: [
            { kind: 'checklist', items: [
              'who you are: name, nationality, NIF, AIMA process number, if any',
              'what happened: 5–10 lines by date',
              'what you already did: emails, calls, visits, payments',
              'what harm is occurring: work, housing, study, health, impossibility to travel',
              'what you are asking for: a concrete action or a written reply',
              'attachments: PDFs/screenshots with clear file names'
            ] }
          ] },
          { id: 'save-proof', title: '3. Save the proof', content: [
            { kind: 'paragraph', text: 'Download or save the comprovativo da reclamação and its number. Without this, the Provedor will see that you did not try to resolve the issue directly and may ask you to contact AIMA first.' }
          ] }
        ] },
        { kind: 'warning', text: 'Do not write threats, insults or “I know the minister”. Write verifiable facts. In Portugal, a dry chronology works better than an emotional text.' }
      ]
    },
    {
      id: 'wait-60-days',
      title: 'Step 2: wait up to 60 days and do a follow-up',
      content: [
        { kind: 'paragraph', text: 'For the Provedor it is important that you first give the administration an opportunity to respond. A practical benchmark is 60 days after the complaint/last contact, if there is no urgent risk. If AIMA replied formally but did not solve the problem, that is also material for the Provedor.' },
        { kind: 'checklist', items: [
          'after 15–20 days, check your email, spam and the complaint status',
          'if AIMA replied, save the reply as a PDF',
          'if there is no response, send a short follow-up quoting the Livro de Reclamações number',
          'do not create 10 identical complaints every week: it harms the readability of the case',
          'if a new fact appears, such as dismissal or visa expiry, add it in a separate letter',
          'after 60 days, prepare the pack for the Provedor: initial complaint, follow-up, replies/silence, harm'
        ] },
        { kind: 'warning', text: 'If there is an immediate risk of deportation, job loss, family separation, impossibility of treatment, or a court deadline is expiring after a refusal, do not wait 60 days — consult an advogado for the administrative court in parallel.' }
      ]
    },
    {
      id: 'provedor-complaint',
      title: 'Step 3: complaint to the Provedor de Justiça',
      content: [
        { kind: 'paragraph', text: 'A complaint to the Provedor is free and can be filed online, by post or in person. You may submit it in Portuguese or English; in practice, for AIMA matters Portuguese works better. If your text is in Russian, translate it at least with a machine tool and check names, dates and numbers.' },
        { kind: 'checklist', items: [
          'state that the complaint is against AIMA — Agência para a Integração, Migrações e Asilo',
          'include the Livro de Reclamações complaint number and the filing date',
          'provide a chronology: date of filing with AIMA, payments, appointment, emails, silence',
          'explain why the inaction is unlawful or disproportionate: no answer, no decision, impossibility to exercise rights',
          'show harm with documents, not general words',
          'formulate the ask: request that AIMA be asked for the process status and be recommended to take a decision/schedule an appointment',
          'attach one PDF bundle and separate key documents',
          'save the Provedor process number and all subsequent correspondence'
        ] },
        { kind: 'paragraph', text: 'After submission, the Provedor may request additional information, forward the issue to AIMA and wait for the agency’s reply. There are no “it will be resolved in X days” deadlines: sometimes it helps in a few weeks, sometimes it takes months. The value of the complaint is the official record and the pressure of an independent body.' },
        { kind: 'warning', text: 'The Provedor usually does not intervene if the same matter is already before a court, or if the complaint is clearly unfounded. If you have filed a lawsuit, state this honestly.' }
      ]
    },
    {
      id: 'court-option',
      title: 'Step 4: if silence is damaging your life — Tribunal Administrativo',
      content: [
        { kind: 'paragraph', text: 'If AIMA continues to be inactive and the delay creates serious harm, the next level is the administrative court. The type of instrument is chosen by the advogado: for example, ação de condenação à prática de ato devido in cases of unlawful inaction, or intimação para proteção de direitos, liberdades e garantias under the CPTA when fundamental rights are affected.' },
        { kind: 'checklist', items: [
          'go to an advogado with a full PDF bundle, not a WhatsApp summary',
          'bring your passport, residence permit/visa, AIMA comprovativos, Livro de Reclamações, Provedor complaint',
          'ask for an assessment of urgency: work, family, health, travel, risk of irregular status',
          'clarify court costs, honorários and the likelihood of an interim measure',
          'check whether you are entitled to apoio judiciário via Segurança Social if your income is low',
          'do not miss appeal deadlines if you have a formal AIMA decision rather than mere silence'
        ] },
        { kind: 'paragraph', text: 'Court is not a final “complaint”, but a legal dispute with procedural rules. It is more expensive, but sometimes the only workable way to force the administration to take a decision when months of waiting are already causing real harm.' },
        { kind: 'warning', text: 'Do not rely only on Facebook posts and Telegram templates. The same template can harm you if you have a refusal, an expired status, a family case or an urgent medical situation.' }
      ]
    }
  ],
  costs: [
    { label: 'Livro de Reclamações Electrónico', amountEUR: 0, note: 'Submitting an online complaint is free.' },
    { label: 'Provedor de Justiça', amountEUR: 0, note: 'A complaint to the Ombudsman is free.' },
    { label: 'Administrative Court: taxa de justiça', amountEURMin: 306, amountEURMax: 612, note: 'Benchmark 3–6 UC at €102 per UC; the exact amount depends on the case and any reductions.' },
    { label: 'Advogado', amountEURMin: 300, amountEURMax: 1500, note: 'The market varies greatly; urgent actions and interim measures are usually more expensive.' }
  ],
  sources: [
    { title: 'Provedor de Justiça: how to file a complaint', url: 'https://www.provedor-jus.pt/en/who-we-are/faq/file-a-complaint/', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'Livro de Reclamações Electrónico', url: 'https://livroreclamacoes.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'AIMA — Frequently Asked Questions and contacts', url: 'https://aima.gov.pt/pt/perguntas-frequentes-faq-s', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Code of Procedure in the Administrative Courts — Law 15/2002', url: 'https://dre.pt/dre/legislacao-consolidada/lei/2002-34464475', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 90
}
