export default {
  editorialVoice: 'hackportugal',
  id: 'aima-online-2026',
  categoryId: 'residence_permit',
  title: 'Renewing a residence permit via the AIMA online portal',
  tldr: 'From 1 January 2026, residence permit renewals are handled via portal-renovacoes.aima.gov.pt. No appointment is needed if all documents are in order. You can apply 30 days before the card expires, but ideally 60–90 days in advance. The residence permit card arrives by post; while you wait, your legal status is confirmed by the comprovativo de submissão. Decreto-Lei 41/2023 introduced the rule that if AIMA misses the deadline and does not close the process on time, your stay does NOT become illegal — the comprovativo replaces the residence permit until the new card is issued.',
  tags: ['aima', 'residence permit', 'renewal', 'online'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2026-01-01',
  changeSummary: 'Launch of portal-renovacoes.aima.gov.pt on 01.01.2026. Deadline for renewing residence permits expired before 30.06.2025 — 15.04.2026.',
  steps: [
    {
      id: 'which-portal',
      title: 'Which portal for which card',
      content: [
        { kind: 'paragraph', text: 'In 2026, renewals are handled through several portals — it is important to choose the right one, otherwise the system “does not see” your process:' },
        { kind: 'checklist', items: [
          '✅ portal-renovacoes.aima.gov.pt — cards expiring from 01.07.2025 to 30.06.2026 (main channel)',
          '✅ portal-renovacoes.aima.gov.pt — ARI / Golden Visa expiring from 22.02.2020 to 30.06.2026',
          '⚠️ Cards that expired BEFORE 30.06.2025 — via the main AIMA services portal (old channel), not via renovações',
          '❌ EU citizens do not use this portal. The initial CRUE (certificado de registo de cidadão da UE) is issued at the Câmara Municipal / Junta de Freguesia for your place of residence, usually for 5 years. After 5 years — a separate procedure to request the permanent residence document for EU citizens'
        ]},
        { kind: 'warning', text: 'Do not confuse portal-renovacoes.aima.gov.pt with the general portal.aima.gov.pt (single account). The renewal form is specifically in renovações.' }
      ]
    },
    {
      id: 'when-to-apply',
      title: 'When to apply',
      content: [
        { kind: 'checklist', items: [
          '🗓️ Officially — from 30 days before the residence permit expires',
          '✅ Recommendation: 60–90 days before expiry (less stress, more time to correct errors)',
          '⚠️ Less than 30 days in advance — the portal may accept it, but there is no guarantee it will be completed before expiry',
          '⏰ If the residence permit has already expired: apply immediately. Formally the fine is €75–300 (art. 192 Lei 23/2007), but in 2025–2026 it is practically not applied for online renewals',
          '🛡️ Decreto-Lei 41/2023: if AIMA does not process your request on time — you remain in legal status on the basis of the comprovativo'
        ]},
        { kind: 'warning', text: 'All residence permits with an expiry date before 30.06.2025 must be renewed by 15 April 2026. After this date, the status is considered invalid, and reinstatement is through a complex procedure with a lawyer.' }
      ]
    },
    {
      id: 'prerequisites',
      title: 'What to check before applying',
      content: [
        { kind: 'checklist', items: [
          '🔐 Chave Móvel Digital is activated with the signature function (not just authentication). Check on autenticacao.gov.pt',
          '📱 Current Portuguese phone number in CMD (not a foreign one) — SMS codes are sent to it',
          '📄 Passport is valid for ≥ 3 months after the planned date of receipt of the new residence permit card',
          '🏠 Address matches: in AIMA, Finanças, NISS and in the Atestado de Residência (if you plan to attach it)',
          '💼 If you are employed/self-employed or your residence permit category involves a Segurança Social check — check your NISS and absence of debt. For categories with no obligation to pay contributions (for example, pensioners, family members without activity), absence of payments is not in itself a “debt”',
          '💸 For applicable categories, prepare a certidão de não dívida Finanças and comprovativo de situação contributiva Segurança Social',
          '📷 Biometrics — if 5+ years have passed since the previous time, an in-person appointment may be required for new biometrics (rare, but it happens)'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: 'Step-by-step application',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Log in to portal-renovacoes.aima.gov.pt', content: [
            { kind: 'paragraph', text: 'Authentication is via Chave Móvel Digital (state electronic signature). For Portuguese citizens — via Cartão de Cidadão (Portuguese citizen identity card). Important: this is a separate portal, not portal.aima.gov.pt (general account) — the link must be specifically to renovações.' }
          ]},
          { id: 's2', title: '2. Select the type of residence permit', content: [
            { kind: 'paragraph', text: 'The system will suggest the type from your current residence permit (filled in automatically). Check it — if the type is wrong, your process may still be in the old SEF database and a separate email request to the regional delegation is needed.' }
          ]},
          { id: 's3', title: '3. Upload scans', content: [
            { kind: 'checklist', items: [
              'Passport — all completed pages, good-quality JPG/PDF',
              'Current residence permit card (both sides)',
              'Atestado de Residência (recent, no older than 3 months) from the Junta de Freguesia (parish council) OR a rental contract registered with Finanças OR a utility bill in your name',
              'Portuguese criminal record: depending on the procedure, AIMA may request an autorização para consulta do registo criminal português or a certificado do registo criminal. The online certificate on ePortugal usually costs €5 and is valid for 3 months',
              'For D7/D8 — proof of income: 3 months of bank statements, employment contract/client contract, pension documents',
              'For Reagrupamento Familiar — marriage certificate/children’s birth certificates',
              'Proof of NISS + absence of debts (Segurança Social Direta → Comprovativo de situação contributiva)',
              'Proof from Finanças — certidão de não dívida (free in Portal das Finanças)',
              'Proof of health insurance or SNS user number (if required for your type of residence permit)'
            ]},
            { kind: 'paragraph', text: 'In practice: the file size limit is 5 MB per document. If it does not fit — compress it on ilovepdf.com or similar. All scans should be in colour, not photos, and legible.' }
          ]},
          { id: 's4', title: '4. Pay the fee', content: [
            { kind: 'paragraph', text: 'The portal generates a Multibanco reference (DUC — Documento Único de Cobrança) or offers card payment. From 01.03.2026, the new AIMA fee table applies (+33% compared with the old one): receipt + analysis €133, issue/renewal of residence permit (art. 75) ~€307.20, permanent residence permit (art. 76) ~€351.10, 2nd copy of the card — 50% of the issue cost. Payment is confirmed within 1–3 hours, but sometimes up to a day.' },
            { kind: 'warning', text: 'If the amount was not paid in full (a typical error — less arrived because of the exchange rate): pay the difference USING THE SAME DUC, but through ANOTHER bank (not the one used for the first payment). Avoid top-ups through CTT or Payshop — they are often not picked up. You must not create a new DUC for the top-up.' }
          ]},
          { id: 's5', title: '5. Sign via CMD', content: [
            { kind: 'paragraph', text: 'The final step is the electronic signature of the application via Chave Móvel Digital. You will receive an SMS code or a push notification in the Autenticação.gov app.' }
          ]},
          { id: 's6', title: '6. Save the comprovativo', content: [
            { kind: 'paragraph', text: 'After submission, the portal issues a comprovativo de submissão in PDF. This is an IMPORTANT document for matters in Portugal. Save it everywhere: cloud, email, printout. In Portugal, banks, schools, SNS and employers accept it as proof that the application has been submitted.' },
            { kind: 'warning', text: 'Comprovativo de submissão is NOT a substitute for the residence permit card for travel and is NOT a guaranteed travel document. Airlines and border officers in other Schengen countries are not obliged to accept it instead of a valid residence permit card. If the old card has expired and the new one has not yet arrived — there is a risk of denied boarding/entry. Before travelling, it is better to consult the Portuguese consulate in the transit country.' }
          ]},
          { id: 's7', title: '7. Wait for the decision', content: [
            { kind: 'timeline', text: 'Standard — 30–90 days. The legal maximum — up to 120 days. Lei 61/2025 (in force 23.10.2025) established a general AIMA decision deadline of 9 months for complex cases. The EU Single Permit Directive requires Portugal to process single permit applications within 90 days from 22.05.2026. Notification arrives by email + in the personal account. Statuses: “Em análise”, “Notificado para entrevista”, “Aprovado”, “Indeferido”.' }
          ]},
          { id: 's7a', title: '7a. Comprovativo de Deferimento — confirmation of a positive decision', content: [
            { kind: 'paragraph', text: 'As soon as the process is approved, a “Comprovativo de Deferimento” button appears in the personal account — a PDF with a QR code to verify authenticity. This is the document confirming AIMA’s POSITIVE decision before the physical card arrives.' },
            { kind: 'checklist', items: [
              '🪪 In Portugal — banks, schools, SNS and employers usually accept it as proof of approved status',
              '⚠️ ✈️ Airlines and border officers in other Schengen countries are NOT obliged to accept it instead of a valid physical residence permit card. The QR code helps verify the decision in Portugal itself, but it does not make the PDF a standard travel document/Schengen residence permit',
              '📱 Save the PDF in the cloud and on your phone — for matters in Portugal',
              '🛂 If you are planning to travel before receiving the card — discuss it with the Portuguese consulate/AIMA, or wait for the physical card'
            ]}
          ]},
          { id: 's8', title: '8. Receive the card', content: [
            { kind: 'paragraph', text: 'The new plastic residence permit card arrives by CTT registered post at the address stated in the application. If you have not received it within 30 days after the status “Aprovado” — write to the regional AIMA delegation.' },
            { kind: 'paragraph', text: 'The CTT tracking number is NOT shown in the AIMA personal account after approval — you have to find it out only by calling the regional delegation. It is better to call 2 weeks after the status “Aprovado”.' }
          ]}
        ]}
      ]
    },
    {
      id: 'practical-tips',
      title: 'Practical tips (community experience)',
      content: [
        { kind: 'checklist', items: [
          '🖥️ Apply from a computer in Chrome — file uploads can fail on mobile',
          '⏰ Do not apply at 08:00 / 09:00 on Monday morning — the portal is overloaded and the chance of technical errors is higher. Best hours — Tue–Thu, 14:00–17:00',
          '📸 If the process “hangs” on one screen — take a screenshot, DO NOT close the tab, wait 2 minutes',
          '🚫 Do not try to submit again if the first attempt “froze” — check the personal account after 24 hours; often the application was still sent',
          '📋 Atestado de Residência (parish council) is sometimes issued without witnesses — check with your Junta. A utility bill or rental contract is often sufficient as an alternative',
          '📷 Passport photos are not needed in the scans — AIMA uses the biometrics from the previous appointment or calls you for new ones if necessary',
          '🧾 Order the certidão de não dívida from Finanças and Segurança Social in advance — generating them can take 1–2 days',
          '⚡ For D7/D8 residence permits — the bank statement must show STABLE income (not a one-off receipt of a large amount just before applying)',
          '👨‍👩‍👦 For Reagrupamento Familiar: children under 16 are attached automatically, teenagers 16–18 apply separately for their own renewal'
        ]},
        { kind: 'warning', text: 'If there is an error in your data in the AIMA database (for example, incorrect transliteration of the name, wrong address from the old SEF process) — submission through the portal is often blocked. The solution is an email to the regional delegation requesting correction of the data, then applying.' }
      ]
    },
    {
      id: 'if-rejected',
      title: 'Refusal or request for additional documents',
      content: [
        { kind: 'paragraph', text: 'If, after submission, you receive a letter requesting additional documents (Notificação para aperfeiçoamento):' },
        { kind: 'checklist', items: [
          '📬 Deadline to reply — 10 working days from the date of notification',
          '💻 Additions must be uploaded through the same portal-renovacoes, “Processos em curso” tab',
          '📧 If the deadline is not enough — you can request an extension by email from the regional delegation',
          '🚫 Missing the deadline = automatic refusal (indeferimento por falta de elementos)'
        ]},
        { kind: 'paragraph', text: 'In the event of a final refusal (Indeferimento):' },
        { kind: 'checklist', items: [
          '⚖️ Appeal deadlines depend on the type of notification and act. Often 10 working days for audiência prévia/aperfeiçoamento or 30 days for reclamação/recurso administrativo; for judicial impugnação the deadline is usually longer (often up to 3 months under the CPTA). If there is an indeferimento, show the letter to a lawyer immediately',
          '🧑‍💼 We recommend hiring a lawyer with immigration practice — the chance of review is higher',
          '🏛️ In parallel — a complaint to the Provedor de Justiça (ombudsman), especially if the refusal is formal',
          '⏰ While the appeal is ongoing — your status is usually maintained by the comprovativo'
        ]}
      ]
    },
    {
      id: 'if-delayed',
      title: 'AIMA has missed the process deadline — what to do',
      content: [
        { kind: 'paragraph', text: 'The standard timeframe is 30–90 days. If 90 days have passed without a response — it is time to be proactive. The legal maximum is 120 days; after this, AIMA is breaching the procedural deadline.' },
        { kind: 'checklist', items: [
          '🛡️ You remain in legal status — Decreto-Lei 41/2023 directly protects you as long as you have the comprovativo',
          '📧 90+ days — email the regional AIMA delegation (see the guide “How to contact AIMA”) with the processo number and submission date',
          '🏛️ 120+ days — complaint to the Provedor de Justiça at provedor-jus.pt (it really speeds things up; AIMA is obliged to reply to the ombudsman)',
          '⚖️ 180+ days — discuss an administrative court action against AIMA’s inaction with an advogado. The type of procedure depends on the case (for example, intimação para a prática de ato devido); the court can order AIMA to act, but the specific deadline and outcome are not guaranteed. Intimação para prestação de informações is suitable only when you need to obtain information/copies of documents, and NOT to force AIMA to issue a decision on a residence permit',
          '✈️ For trips abroad — comprovativo + valid (NOT expired) old residence permit card + passport may help explain the situation, but do NOT guarantee boarding or entry. Legally, it is safer to wait for the new card. Before travelling, check the requirements of the carrier and of the transit/entry country'
        ]}
      ]
    },
    {
      id: 'special-cases',
      title: 'Special cases — not through the main portal',
      content: [
        { kind: 'paragraph', text: 'Some categories require a separate procedure, not through portal-renovacoes:' },
        { kind: 'substeps', items: [
          { id: 'sp1', title: 'Students continuing studies + work (art. 122.j Lei 23/2007)', content: [
            { kind: 'checklist', items: [
              'Application through the AIMA contact form (not through renovações)',
              'Request a biometrics slot — only through lista de espera',
              'Documents: passport, old residence permit, IRS tax return, employment contract, NISS, certidão de não dívida',
              'Waiting time for a slot — 2–6 months'
            ]}
          ]},
          { id: 'sp2', title: 'Professional courses (art. 92)', content: [
            { kind: 'checklist', items: [
              'Register in lista de espera through the form on the AIMA website',
              'Documents: passport copy, confirmation of enrolment on the course (IEFP / certified centre), payment receipt',
              'Later, AIMA schedules an in-person appointment — wait for the email invitation',
              'Personal attendance is mandatory (not online)'
            ]}
          ]},
          { id: 'sp3', title: 'ARI / Golden Visa', content: [
            { kind: 'paragraph', text: 'Renewal is possible through portal-renovacoes for ARI that expired from 22.02.2020 to 30.06.2026. Minimum physical presence for ARI: 7 days in the first year and 14 days in each subsequent two-year period of validity of the permit (if the standard ARI rules apply; confirmed by stamps or comprovativo de alojamento).' }
          ]},
          { id: 'sp4', title: 'CRUE for EU citizens', content: [
            { kind: 'paragraph', text: 'CRUE for EU citizens is issued through the Câmara Municipal / Junta de Freguesia and is NOT renewed through the AIMA portal for third-country nationals’ residence permits. After 5 years, a permanent residence document is usually issued under a separate procedure. Cartão de residência de familiar de cidadão da UE (for third-country family members of EU citizens) is a separate document with a different procedure, not CRUE.' }
          ]}
        ]}
      ]
    },
    {
      id: 'first-card',
      title: 'The first card after a D visa is NOT a renewal',
      content: [
        { kind: 'warning', text: 'This article is about renewing an already issued plastic residence permit card. If you only have a D visa and do not yet have a card, this is a primeira concessão / emissão inicial procedure — usually through an AIMA appointment/slot, not through portal-renovacoes. The renovações portal applies to already existing títulos de residência (if AIMA has opened the relevant category).' },
        { kind: 'paragraph', text: 'What AIMA will check when issuing the first card after a D visa:' },
        { kind: 'checklist', items: [
          '📄 Match between the D visa and the current situation (D7 → passive income; D8 → remote work; etc.)',
          '💰 Proof of income FOR THE WHOLE PERIOD since entry (full bank statement)',
          '🏠 Atestado de Residência — recent (no older than 2 months)',
          '📝 If the D visa had a condition (for example, “open a bank account within 90 days”) — attach proof of fulfilment',
          '⏰ Timeframe for issuing the first card — usually longer than a standard renewal'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'Chave Móvel Digital', note: 'mandatory with the signature function' },
    { title: 'Passport', note: 'valid for ≥ 3 months' },
    { title: 'Current residence permit / D visa', note: 'both sides, scan' },
    { title: 'Atestado de Residência', note: 'no older than 3 months, from the Junta de Freguesia' },
    { title: 'Certidão do registo criminal PT', note: 'usually €5 on ePortugal; sometimes AIMA requests authorisation to check rather than the certificate' },
    { title: 'Comprovativo de situação contributiva (NISS)', note: 'free in Segurança Social Direta' },
    { title: 'Certidão de não dívida Finanças', note: 'free in Portal das Finanças' },
    { title: 'Proof of income (D7/D8)', note: '3 months of bank statements' },
    { title: 'Health insurance / SNS user number', note: 'if required' }
  ],
  costs: [
    { label: 'AIMA — receipt + analysis', amountEUR: 133, note: 'tariffs from 01.03.2026' },
    { label: 'AIMA — issue/renewal (art. 75)', amountEUR: 307.20, note: 'tariffs from 01.03.2026' },
    { label: 'AIMA — permanent residence permit (art. 76)', amountEUR: 351.10, note: 'tariffs from 01.03.2026' },
    { label: '2nd copy of the card (art. 75)', amountEUR: 153.60, note: '50% of the corresponding taxa emissão/concessão; for a permanent card the amount is different' },
    { label: 'Fine for late renewal (rarely applied)', amountEURMin: 75, amountEURMax: 300 }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 120,
  sources: [
    { title: 'AIMA — Portal de Renovações', url: 'https://portal-renovacoes.aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — official website', url: 'https://aima.gov.pt/pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 41/2023 — protection of status when AIMA is delayed', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/41-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 — entry and stay regime', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Renovar Título de Residência', url: 'https://eportugal.gov.pt/cidadaos-ue/-/informacoes/renovar-titulo-de-residencia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 60
}
