export default {
  editorialVoice: 'hackportugal',
  id: 'aima-online-2026',
  categoryId: 'residence_permit',
  title: 'Renewing a residence permit via the AIMA online portal',
  tldr: 'From 1 January 2026, residence permit renewals are handled via portal-renovacoes.aima.gov.pt. No appointment is needed if all documents are in order. You can apply from 30 days before the card expires, but ideally — 60–90 days before. The residence permit card arrives by post; while you wait, your legal status is confirmed by the comprovativo de submissão. Decreto-Lei 41/2023 introduced the rule: if AIMA misses the deadline and does not close the process in time, your stay does NOT become illegal — the comprovativo replaces the residence permit until the new card is issued.',
  tags: ['aima', 'residence permit', 'renewal', 'online'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2026-01-01',
  changeSummary: 'Launch of portal-renovacoes.aima.gov.pt on 01.01.2026. Deadline for renewing residence permits expired before 30.06.2025 — 15.04.2026.',
  steps: [
    {
      id: 'which-portal',
      title: 'Which portal for which card',
      content: [
        { kind: 'paragraph', text: 'In 2026, renewals go through several portals — it is important to choose the right one, otherwise the system will not "see" your process:' },
        { kind: 'checklist', items: [
          '✅ portal-renovacoes.aima.gov.pt — cards expiring from 01.07.2025 to 30.06.2026 (main channel)',
          '✅ portal-renovacoes.aima.gov.pt — ARI / Golden Visa, expiring from 22.02.2020 to 30.06.2026',
          '⚠️ Cards expired BEFORE 30.06.2025 — via the AIMA main services portal (old channel), not via renovações',
          '❌ Cartão de Residência UE (for EU citizens) — renewal through this portal is not yet available; contact the Junta de Freguesia (for CRUE) or AIMA directly'
        ]},
        { kind: 'warning', text: 'Do not confuse portal-renovacoes.aima.gov.pt with the general portal.aima.gov.pt (single account). The renovações portal is the one that contains the renewal form.' }
      ]
    },
    {
      id: 'when-to-apply',
      title: 'When to apply',
      content: [
        { kind: 'checklist', items: [
          '🗓️ Officially — from 30 days before the residence permit expires',
          '✅ Recommendation: 60–90 days before expiry (less stress, more time to correct mistakes)',
          '⚠️ Less than 30 days before — the portal may accept the application, but there is no guarantee it will be processed before expiry',
          '⏰ If the residence permit has already expired: apply immediately. Formally, the fine is €75–€300 (art. 192 Lei 23/2007), but in 2025–2026 it is practically not applied for online renewals',
          '🛡️ Decreto-Lei 41/2023: if AIMA has not processed your request in time — you remain in legal status on the basis of the comprovativo'
        ]},
        { kind: 'warning', text: 'All residence permits with an expiry date before 30.06.2025 must be renewed by 15 April 2026. After that date, the status is considered invalid; reinstatement is through a complex procedure with a lawyer.' }
      ]
    },
    {
      id: 'prerequisites',
      title: 'What to check before applying',
      content: [
        { kind: 'checklist', items: [
          '🔐 Chave Móvel Digital is activated with the signature function (not only authentication). Check on autenticacao.gov.pt',
          '📱 Current Portuguese phone number in CMD (not a foreign one) — SMS codes are sent to it',
          '📄 Passport is valid for ≥ 3 months after the planned date of receiving the new residence permit card',
          '🏠 Address matches: in AIMA, Finanças, NISS and in the Atestado de Residência (if you plan to attach it)',
          '💼 NISS is active and has no missed payments (mandatory from April 2025)',
          '💸 No debts with Finanças (certidão de não dívida) and Segurança Social',
          '📷 Biometrics — if 5+ years have passed since the previous appointment, an in-person appointment for new biometrics may be required (rare, but it happens)'
        ]}
      ]
    },
    {
      id: 'how-to',
      title: 'Step-by-step application',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: '1. Log in to portal-renovacoes.aima.gov.pt', content: [
            { kind: 'paragraph', text: 'Authentication is via Chave Móvel Digital (state electronic signature). For Portuguese citizens — via Cartão de Cidadão (Portuguese citizen ID card). Important: this is a separate portal, not portal.aima.gov.pt (general account) — the link must be specifically to renovações.' }
          ]},
          { id: 's2', title: '2. Select the type of residence permit', content: [
            { kind: 'paragraph', text: 'The system will suggest the type from your current residence permit (picked up automatically). Check it — if the type is wrong, your process may still be in the old SEF database and a separate email request to the regional delegation is needed.' }
          ]},
          { id: 's3', title: '3. Upload scans', content: [
            { kind: 'checklist', items: [
              'Passport — all completed pages, good-quality JPG/PDF',
              'Current residence permit card (both sides)',
              'Atestado de Residência (recent, no older than 3 months) from the Junta de Freguesia (parish council) OR a rental contract registered with Finanças OR a utility bill in your name',
              'Portuguese criminal record certificate (certidão do registo criminal) — free on eportugal.gov.pt, valid for 3 months',
              'For D7/D8 — proof of income: 3 months of bank statements, employment contract/client contract, pension documents',
              'For Reagrupamento Familiar — marriage/birth certificates for children',
              'Proof of NISS + no debts (Segurança Social Direta → Comprovativo de situação contributiva)',
              'Finanças proof — certidão de não dívida (free in Portal das Finanças)',
              'Proof of health insurance or SNS user number (if required for your type of residence permit)'
            ]},
            { kind: 'paragraph', text: 'In practice: the file size limit is 5 MB per document. If it does not fit — compress it on ilovepdf.com or an equivalent. All scans should be in colour, not photos, and readable.' }
          ]},
          { id: 's4', title: '4. Pay the fee', content: [
            { kind: 'paragraph', text: 'The portal generates a Multibanco reference (DUC — Documento Único de Cobrança) or offers card payment. From 01.03.2026, the new AIMA fee table applies (+33% on the old one): reception + analysis €133, issue/renewal of residence permit (art. 75) ~€307.20, permanent residence permit (art. 76) ~€351.10, 2nd copy of the card — 50% of the issue cost. Payment is confirmed within 1–3 hours, but sometimes takes up to a day.' },
            { kind: 'warning', text: 'If the amount paid is incomplete (a typical mistake — less went through because of the exchange rate): pay the difference USING THE SAME DUC, but through a DIFFERENT bank (not the one you used for the first payment). Avoid top-ups through CTT or Payshop — they are often not picked up. You must not create a new DUC for a top-up.' }
          ]},
          { id: 's5', title: '5. Sign via CMD', content: [
            { kind: 'paragraph', text: 'The final step is the electronic signature of the application via Chave Móvel Digital. You will receive an SMS code or a push notification in the Autenticação.gov app.' }
          ]},
          { id: 's6', title: '6. Save the comprovativo', content: [
            { kind: 'paragraph', text: 'After submission, the portal issues a comprovativo de submissão in PDF. This is an IMPORTANT document for matters in Portugal. Save it everywhere: cloud storage, email, printout. In Portugal, banks, schools, SNS, employers accept it as proof that the application has been submitted.' },
            { kind: 'warning', text: 'Comprovativo de submissão is NOT a substitute for the residence permit card for travel and is NOT a guaranteed travel document. Airlines and border officers of other Schengen countries are not obliged to accept it instead of a valid residence permit card. If the old card has expired and the new one has not arrived yet — there is a risk of being refused boarding/entry. Before travelling, it is better to consult the Portuguese consulate in the transit country.' }
          ]},
          { id: 's7', title: '7. Wait for the decision', content: [
            { kind: 'timeline', text: 'Standard — 30–90 days. Maximum by law — up to 120 days. Lei 61/2025 (in force 23.10.2025) set a general AIMA decision deadline of 9 months for complex cases. The EU Single Permit Directive requires Portugal to process single permit applications within 90 days from 22.05.2026. Notification arrives by email + in the personal account. Statuses: "Em análise", "Notificado para entrevista", "Aprovado", "Indeferido".' }
          ]},
          { id: 's7a', title: '7a. Comprovativo de Deferimento — confirmation of a positive decision', content: [
            { kind: 'paragraph', text: 'As soon as the process is approved, a "Comprovativo de Deferimento" button appears in the personal account — a PDF with a QR code for authenticity verification. This document confirms AIMA\'s POSITIVE decision until the physical card arrives.' },
            { kind: 'checklist', items: [
              '🪪 In Portugal — banks, schools, SNS, employers usually accept it as proof of approved status',
              '⚠️ ✈️ Airlines and border officers of other Schengen countries are NOT obliged to accept it instead of a valid physical residence permit card. The QR code helps verify the decision within Portugal itself, but it does not make the PDF a standard travel document/Schengen residence permit',
              '📱 Save the PDF in the cloud and on your phone — for matters in Portugal',
              '🛂 If you plan to travel before receiving the card — discuss it with the Portuguese consulate/AIMA, or wait for the physical card'
            ]}
          ]},
          { id: 's8', title: '8. Receive the card', content: [
            { kind: 'paragraph', text: 'The new plastic residence permit card arrives by CTT registered post at the address stated in the application. If you have not received it within 30 days after the "Aprovado" status — write to the AIMA regional delegation.' },
            { kind: 'paragraph', text: 'The CTT tracking number is NOT shown in the AIMA personal account after approval — you have to find it out only by calling the regional delegation. It is better to call 2 weeks after the "Aprovado" status.' }
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
          '📸 If the process is "stuck" on one screen — take a screenshot, do NOT close the tab, wait 2 minutes',
          '🚫 Do not try to apply again if the first attempt "froze" — check your personal account after 24 hours; the application has often been sent anyway',
          '📋 Atestado de Residência (parish council) is sometimes issued without witnesses — check with your Junta. A utility bill or rental contract is often sufficient as an alternative',
          '📷 Passport-style photos in scans are not needed — AIMA uses biometrics from the previous appointment or calls you for new ones if necessary',
          '🧾 Request the certidão de não dívida from Finanças and Segurança Social in advance — generating them may take 1–2 days',
          '⚡ For residence permits under D7/D8 — the bank statement must show STABLE income (not a one-off large payment just before applying)',
          '👨‍👩‍👦 For Reagrupamento Familiar: children under 16 — are attached automatically, teenagers aged 16–18 apply separately for their own renewal'
        ]},
        { kind: 'warning', text: 'If there is an error in your data in the AIMA database (for example, incorrect transliteration of your name, incorrect address from the old SEF process) — submission through the portal is often blocked. The solution is to email the regional delegation asking them to correct the data, then apply.' }
      ]
    },
    {
      id: 'if-rejected',
      title: 'Refusal or request for additional documents',
      content: [
        { kind: 'paragraph', text: 'If, after submission, you receive a letter requesting additional documents (Notificação para aperfeiçoamento):' },
        { kind: 'checklist', items: [
          '📬 Deadline to respond — 10 working days from the date of notification',
          '💻 Additions must be uploaded through the same portal-renovacoes, under the "Processos em curso" tab',
          '📧 If there is not enough time — you can request an extension by email from the regional delegation',
          '🚫 Missing the deadline = automatic refusal (indeferimento por falta de elementos)'
        ]},
        { kind: 'paragraph', text: 'In case of a final refusal (Indeferimento):' },
        { kind: 'checklist', items: [
          '⚖️ Appeal deadline — 30 days from the date of notification (recurso hierárquico to AIMA or judicial appeal to the Tribunal Administrativo)',
          '🧑‍💼 We recommend hiring a lawyer with immigration practice — the chance of review is higher',
          '🏛️ In parallel — complaint to the Provedor de Justiça (ombudsman), especially if the refusal is formalistic',
          '⏰ While the appeal is ongoing — your status is usually maintained on the basis of the comprovativo'
        ]}
      ]
    },
    {
      id: 'if-delayed',
      title: 'AIMA has exceeded the process deadline — what to do',
      content: [
        { kind: 'paragraph', text: 'The standard deadline is 30–90 days. If 90 days have passed without a reply — it is time to be proactive. The legal maximum is 120 days; after that, AIMA is breaching the procedural deadline.' },
        { kind: 'checklist', items: [
          '🛡️ You remain in legal status — Decreto-Lei 41/2023 explicitly protects you while you have the comprovativo',
          '📧 90+ days — email the AIMA regional delegation (see the guide "How to contact AIMA") with the processo number and submission date',
          '🏛️ 120+ days — complaint to the Provedor de Justiça at provedor-jus.pt (it really speeds things up; AIMA must reply to the ombudsman)',
          '⚖️ 180+ days — Intimação para prestação de informações in the Tribunal Administrativo. Paid procedure (~€200), but it forces AIMA to respond within 2 months',
          '✈️ For travel abroad — PDF with comprovativo + valid (NOT expired) old residence permit card + passport. If the card has expired and the new one has not arrived — there is a risk of refusal at boarding/at the border; airlines and border officers of other Schengen countries are not obliged to accept the comprovativo. Consult the Portuguese consulate in the transit country in advance'
        ]}
      ]
    },
    {
      id: 'special-cases',
      title: 'Special cases — not via the main portal',
      content: [
        { kind: 'paragraph', text: 'Some categories require a separate procedure, not via portal-renovacoes:' },
        { kind: 'substeps', items: [
          { id: 'sp1', title: 'Students continuing their studies + work (art. 122.j Lei 23/2007)', content: [
            { kind: 'checklist', items: [
              'Application via the AIMA contact form (not via renovações)',
              'Request a biometrics slot — only via lista de espera',
              'Documents: passport, old residence permit, IRS tax return, employment contract, NISS, certidão de não dívida',
              'Waiting time for a slot — 2–6 months'
            ]}
          ]},
          { id: 'sp2', title: 'Professional courses (art. 92)', content: [
            { kind: 'checklist', items: [
              'Join the lista de espera through the form on the AIMA website',
              'Documents: passport copy, proof of enrolment on the course (IEFP / certified centre), payment receipt',
              'Later, AIMA schedules an in-person appointment — wait for the email invitation',
              'In-person attendance is mandatory (not online)'
            ]}
          ]},
          { id: 'sp3', title: 'ARI / Golden Visa', content: [
            { kind: 'paragraph', text: 'Renewal is possible through portal-renovacoes for ARI expired from 22.02.2020 to 30.06.2026. Minimum physical presence in Portugal — 7 days per year (confirmed by stamps or comprovativo de alojamento).' }
          ]},
          { id: 'sp4', title: 'Cartão de Residência UE (for EU citizens)', content: [
            { kind: 'paragraph', text: 'CRUE is issued and renewed through the Junta de Freguesia or Câmara Municipal, not through AIMA. The renewal portal does not yet support CRUE.' }
          ]}
        ]}
      ]
    },
    {
      id: 'first-card',
      title: 'Specifics of the first renewal (immediately after a D visa)',
      content: [
        { kind: 'paragraph', text: 'The first renewal differs from later ones: formally it is not a "renewal", but an "initial issue" (emissão inicial) on the basis of a D visa. The process is the same, but the checks are stricter:' },
        { kind: 'checklist', items: [
          '📄 They check whether the D visa matches the current situation (D7 → passive income; D8 → remote work; etc.)',
          '💰 Requirement to prove income FOR THE ENTIRE PERIOD since entry (full bank statement)',
          '🏠 Atestado de Residência — recent (no older than 2 months)',
          '📝 If the D visa had a condition (for example, "open a bank account within 90 days") — attach proof that it was met',
          '⏰ Timeframe for issuing the first card — up to 120 days (longer than a normal renewal)'
        ]}
      ]
    }
  ],
  documents: [
    { title: 'Chave Móvel Digital', note: 'mandatory with signature function' },
    { title: 'Passport', note: 'valid for ≥ 3 months' },
    { title: 'Current residence permit / D visa', note: 'both sides, scan' },
    { title: 'Atestado de Residência', note: 'no older than 3 months, from Junta de Freguesia' },
    { title: 'Certidão do registo criminal PT', note: 'free on eportugal.gov.pt' },
    { title: 'Comprovativo de situação contributiva (NISS)', note: 'free in Segurança Social Direta' },
    { title: 'Certidão de não dívida Finanças', note: 'free in Portal das Finanças' },
    { title: 'Proof of income (D7/D8)', note: '3 months of bank statements' },
    { title: 'Health insurance / SNS user number', note: 'if required' }
  ],
  costs: [
    { label: 'AIMA — reception + analysis', amountEUR: 133, note: 'fees 01.03.2026' },
    { label: 'AIMA — issue/renewal (art. 75)', amountEUR: 307.20, note: 'fees 01.03.2026' },
    { label: 'AIMA — permanent residence permit (art. 76)', amountEUR: 351.10, note: 'fees 01.03.2026' },
    { label: '2nd copy of the card', amountEUR: 153.60, note: '50% of the issue cost' },
    { label: 'Late renewal fine (rarely applied)', amountEURMin: 75, amountEURMax: 300 }
  ],
  timelineDaysMin: 30,
  timelineDaysMax: 120,
  sources: [
    { title: 'AIMA — Portal de Renovações', url: 'https://portal-renovacoes.aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'AIMA — official website', url: 'https://aima.gov.pt/pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Decreto-Lei 41/2023 — status protection when AIMA is late', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/41-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 23/2007 — entry and stay regime', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'ePortugal — Renovar Título de Residência', url: 'https://eportugal.gov.pt/cidadaos-ue/-/informacoes/renovar-titulo-de-residencia', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 60
}
