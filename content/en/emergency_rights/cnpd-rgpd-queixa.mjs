export default {
  editorialVoice: 'hackportugal',
  id: 'cnpd-rgpd-queixa',
  categoryId: 'emergency_rights',
  title: 'GDPR: complaint to CNPD for a privacy breach',
  tldr: 'If in Portugal your personal data has been leaked, is being used for marketing without consent, your employer is unlawfully monitoring you, or a neighbour’s CCTV is filming your door/window, you can file a free queixa with CNPD — Comissão Nacional de Proteção de Dados. The complaint is submitted online via cnpd.pt. It is usually worth contacting the organisation in writing first; CNPD may request data, issue an order and impose a fine of up to €20,000,000 or 4% of global turnover under the GDPR.',
  tags: ['gdpr', 'cnpd', 'complaint', 'data'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'when-to-complain',
      title: 'When to complain to CNPD',
      content: [
        { kind: 'paragraph', text: 'CNPD is the Portuguese supervisory authority for personal data protection. It accepts complaints under the RGPD/GDPR if the breach is connected to Portugal: the organisation is located here, the service was provided here, the camera films here, or the employer or condomínio is located here.' },
        { kind: 'checklist', items: [
          'Data leak: documents, NIF, NISS, IBAN, medical data, address, phone number or e-mail have reached third parties.',
          'Marketing without consent: SMS, e-mail, calls or WhatsApp mailings after refusal or without opt-in.',
          'The organisation does not respond to a request for access, erasure, rectification or data portability.',
          'The employer installs video surveillance, GPS, a keylogger or e-mail monitoring without a clear lawful basis and notification.',
          'A neighbour’s, shop’s or condomínio CCTV films the entrance to the flat, a window, balcony or public street beyond what is necessary.',
          'A website or app collects cookies/data without genuine consent.',
          'A bank, school, clinic, landlord or estate agency demands excessive documents without explaining the purpose.',
          'A child’s data is used without a lawful basis or parental consent where this is required.'
        ] },
        { kind: 'warning', text: 'CNPD does not replace the police, the courts or Livro de Reclamações. If there is blackmail, account hacking, identity theft or publication of intimate material, contact PSP/GNR or Ministério Público in parallel.' }
      ]
    },
    {
      id: 'try-controller-first',
      title: 'Write to the data controller first',
      content: [
        { kind: 'paragraph', text: 'Under the GDPR, the organisation that determines the purposes of data processing is called the responsável pelo tratamento or controller. In practice, CNPD handles complaints better where it is clear that you first asked the organisation to remedy the breach and it refused, ignored you or gave a formalistic response.' },
        { kind: 'checklist', items: [
          'Find the privacy policy / política de privacidade on the organisation’s website.',
          'Look for the DPO / Encarregado de Proteção de Dados contact, privacidade@ or geral@ e-mail.',
          'Write briefly: what data, what happened, what you are requesting.',
          'Refer to the GDPR: direito de acesso, apagamento, oposição, retificação, limitação or retirada de consentimento.',
          'Ask for a written response.',
          'Keep the e-mail, auto-reply, form screenshots and case/reference number.',
          'If this is CCTV, ask for the filming area diagram, the basis for processing and the retention period for recordings.',
          'If this is an employer, use your personal e-mail for a copy, but do not remove trade secrets.'
        ] },
        { kind: 'paragraph', text: 'Under the GDPR, an organisation must usually respond to a data subject request within 1 month. This period may be extended by a further 2 months for a complex request, but you must be notified of the extension and the reasons for it.' }
      ]
    },
    {
      id: 'prepare-evidence',
      title: 'Gather evidence',
      content: [
        { kind: 'paragraph', text: 'CNPD deals with facts, not emotions. The more precisely you show the date, person, organisation and breach, the higher the chance that the complaint will be admitted and explanations will be requested from the infringer.' },
        { kind: 'checklist', items: [
          'Your details: name, e-mail, phone number and address in Portugal, if needed for contact.',
          'Infringer’s details: name, company NIPC/NIF if known, address, website, e-mail and DPO name.',
          'Timeline: dates of messages, calls, leak, camera installation, response or silence.',
          'Screenshots of SMS, e-mail, WhatsApp, consent forms, cookie banners and advertising messages.',
          'Copies of your requests for erasure/access/opt-out from marketing and the organisation’s replies.',
          'Photos of CCTV so that the direction of the camera is visible, but without unlawfully filming other people’s private areas.',
          'Contract, invoice, recibo, employment contract or another document confirming your relationship with the organisation.',
          'If there was a leak: incident notification, letter from the company, screenshot of the publication, bank warning.',
          'If the complaint is from several residents: separate written consents or individual complaints.'
        ] },
        { kind: 'warning', text: 'Do not attach unnecessary personal data of third parties. Mask NIF, IBAN, children’s faces, medical details and other people’s addresses if they are not needed to prove the breach.' }
      ]
    },
    {
      id: 'submit-online',
      title: 'Submit a queixa online at cnpd.pt',
      content: [
        { kind: 'paragraph', text: 'A complaint to CNPD is free. On cnpd.pt, use the section for citizens / apresentar queixa or formulário de queixa. The form may change, but the logic is the same: who is complaining, against whom, what happened, which rights were breached, and what evidence is attached.' },
        { kind: 'checklist', items: [
          'Open cnpd.pt and find the queixa / reclamação form.',
          'Choose the complaint type: breach of data subject rights, video surveillance, marketing, internet/cookies, employer surveillance or other.',
          'Fill in your contact details: e-mail is required for a response.',
          'Specify the infringing organisation and its contacts.',
          'Describe the facts by date: no long story, but with specific events.',
          'Write what you want: stopping processing, data erasure, rectification, banning the camera, investigation of the leak.',
          'Evidence is usually not attached to the form itself: state in the form that you have it, and CNPD will request it later. Prepare it in advance in PDF/JPG/PNG, preferably as one tidy PDF.',
          'Submit the form and save the confirmation, process number or CNPD e-mail.'
        ] },
        { kind: 'paragraph', text: 'In practice, for simple complaints CNPD may give an initial response or request clarifications within around 30 days, but a final investigation takes longer. Under the GDPR, the supervisory authority must inform the complainant about the progress and outcome of the complaint, including the possibility of a judicial remedy if the case is not moving forward.' }
      ]
    },
    {
      id: 'after-filing',
      title: 'What happens after filing',
      content: [
        { kind: 'paragraph', text: 'CNPD may ask you to clarify facts, request documents from the organisation, carry out an inspection, issue a warning, order the erasure/restriction of data, prohibit processing or impose an administrative fine.' },
        { kind: 'checklist', items: [
          'Check your e-mail, including spam: CNPD may set a deadline for a response.',
          'Reply briefly and attach only the documents requested.',
          'If the breach continues, send new evidence with dates.',
          'Do not enter into a public conflict with the infringer if this could disclose even more data.',
          'If the organisation has remedied the breach, inform CNPD, but ask it to record the fact of the breach.',
          'If there is material loss or non-material damage, CNPD does not pay compensation — this is a separate civil claim.',
          'If the case is cross-border, CNPD may transfer it or coordinate it with another EU authority under the one-stop-shop mechanism.'
        ] },
        { kind: 'paragraph', text: 'Maximum fines under the GDPR depend on the type of breach: up to €10,000,000 or 2% of global annual turnover, or up to €20,000,000 or 4% of turnover — whichever is higher applies. Filing a complaint is free for the applicant.' }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common expat mistakes',
      content: [
        { kind: 'checklist', items: [
          'Writing the complaint only in Russian: Portuguese or English is better; the Russian text can be attached as an explanation.',
          'Not stating exactly where the connection with Portugal is.',
          'Complaining about “spam” without screenshots, a date, sender and evidence of unsubscribing.',
          'Demanding monetary compensation from CNPD — CNPD fines the infringer, but does not recover money for your benefit.',
          'Confusing a GDPR breach with poor service: for service quality there is Livro de Reclamações and sector regulators.',
          'Sending a passport, residence permit, NIF and contract in full without masking unnecessary data.',
          'Complaining about CCTV without showing that the camera films a private area, rather than only the shop entrance or a shared security area.'
        ] },
        { kind: 'warning', text: 'If you are in an AIMA immigration process, a complaint to CNPD does not in itself affect your residence permit. But do not attach unnecessary AIMA documents to the complaint if the dispute is not related to the processing of that data.' }
      ]
    }
  ],
  costs: [
    { label: 'Filing a complaint with CNPD', amountEUR: 0, note: 'An online complaint is free; costs are possible only for a lawyer or translation if you decide to use them.' },
    { label: 'Potential fine for the infringer', amountEURMax: 20000000, note: 'Under the GDPR — up to €20,000,000 or 4% of global annual turnover, whichever is higher applies.' }
  ],
  sources: [
    { title: 'CNPD — Comissão Nacional de Proteção de Dados: official website and complaint submission', url: 'https://www.cnpd.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Regulation (EU) 2016/679 — RGPD/GDPR, text in EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 58/2019 — implementation of the GDPR in Portugal', url: 'https://dre.pt/dre/detalhe/lei/58-2019-123815982', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
