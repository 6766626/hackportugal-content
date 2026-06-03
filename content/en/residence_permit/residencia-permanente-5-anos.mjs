export default {
  editorialVoice: 'hackportugal',
  id: 'residencia-permanente-5-anos',
  categoryId: 'residence_permit',
  title: 'Permanent residence permit in Portugal after 5 years — the path to Permanente',
  tldr: 'Autorização de residência permanente can be requested after 5 years of lawful temporary residence permit in Portugal. The basis is Lei 23/2007, art. 80: a valid residence permit, no serious criminal conviction, housing, means of subsistence and minimum A2 Portuguese.\n\nIn practice, AIMA looks at continuity of residence: do not turn the residence permit into a "visiting card", keep ≥6 months of actual residence per year.\n\nThe autorização itself is indefinite (sem limite de tempo, art. 76 Lei 23/2007); only the card (título de residência) is renewed every 5 years. AIMA fees from 01.03.2026 (Portaria 307/2023 (consolidated version)): admission/assessment €133 + autorização de residência (art. 76) €351.10 (instead of the outdated €252).',
  tags: ['aima', 'residence permit', 'permanent', 'a2'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-permanente-gives',
      title: 'What a permanent residence permit gives you',
      content: [
        { kind: 'paragraph', text: 'Autorização de residência permanente is not citizenship and not Cartão de Cidadão, but a more stable residence status for third-country nationals. It is issued after several years of temporary residence permit and is not tied to a specific D1-D8 visa as strictly as the initial status.' },
        { kind: 'checklist', items: [
          'the right to live in Portugal without annual proof of the D1-D8 visa basis',
          'access to work, recibos verdes, SNS, Segurança Social and Finanças as a resident',
          'less risk when changing jobs, closing a business or changing family circumstances',
          'the status itself has no end date, but the physical residência permanente card is renewed every 5 years',
          'it does not give a Portuguese passport, the right to vote in national elections or Cartão de Cidadão',
          'it does not cancel the obligation to notify AIMA of important changes of address/family status',
          'it does not automatically make tax residency “advantageous”: IRS, IMI, IVA and other taxes have their own rules'
        ] }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who can apply after 5 years',
      content: [
        { kind: 'paragraph', text: 'The main rule of Lei 23/2007, art. 80: you must have 5 years of lawful temporary residence permit in Portugal. What counts is the period with autorização de residência, not simply years on Schengen visas, tourist stays or waiting for an appointment.' },
        { kind: 'checklist', items: [
          'you have a valid or renewable autorização de residência temporária',
          'you have accumulated 5 years of lawful residence with a residence permit in Portugal',
          'during the residence period, there has been no conviction for an offence punishable in Portugal by imprisonment for more than 1 year',
          'you have housing: a rental contract, escritura, declaração de alojamento or another verifiable address',
          'you have meios de subsistência: salary, recibos verdes, pension, savings, family income or another lawful source',
          'you have proof of basic Portuguese language at A2 level or an exemption, if applicable',
          'you have not breached the absence rules: as a safe practical benchmark, actually live in Portugal for at least 6 months per year',
          'there are no active serious issues with AIMA, SIS/Schengen alerts or identity documents'
        ] },
        { kind: 'warning', text: 'If over the 5 years there were long absences, expired cards, gaps between residence permits or you lived in Portugal “on and off”, do not apply blindly. AIMA may request proof of actual residence and continuity of status.' }
      ]
    },
    {
      id: 'counting-5-years',
      title: 'When the 5 years start: important nuances',
      content: [
        { kind: 'paragraph', text: 'Main rule: the 5 years count from the issue date of the FIRST autorização de residência card (título de residência). NOT from visa entry, NOT from MdI submission, NOT from D-visa issuance. But the edge cases matter:' },
        { kind: 'checklist', items: [
          'D-visa before the first card — does NOT count. A visa is permission to enter, not to reside.',
          'Manifestação de Interesse (MdI) — NEVER counted for permanent residence. Lei 38/2024 briefly allowed it for nationality, Lei Orgânica 1/2026 reversed it. The MdI regime itself was revoked by Lei 61/2025.',
          'Renewal queue with a timely-filed request — COUNTS as continuous legal residence (art. 78 + DR 84/2007 art. 61). Since October 2025 AIMA has explicitly extended the validity of expired cards.',
          'A gap with no valid título and no pending renewal — resets the clock. AIMA usually forgives short gaps if the prior renewal was filed on time.',
          'SEF→AIMA transition period with expired SEF cards plus a confirmed pending renewal — COUNTS. Evidenced by an AIMA certidão.',
          'Conversions between visa types (D2→D7, D7→D8) — the clock does NOT reset, as long as the autorização de residência was held continuously. Continuity of holding matters, not the type.',
          'Family reunification (reagrupamento): a family member has THEIR OWN start date — their first reagrupamento card, NOT the date of the principal resident.',
          'Children born in Portugal to non-EU residents — art. 122 nº 1 al. a (NOT 81!). Their own first card starts their 5 years.'
        ] },
        { kind: 'warning', text: 'If your 5-year history is non-linear (visa changes, gaps, long absences, SEF→AIMA transition) — order a certidão de residência from AIMA before applying. It shows all your periods of legal residence in a single document and removes disputes at the appointment.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents: what to prepare in advance',
      content: [
        { kind: 'paragraph', text: 'AIMA may update the form and document list, but for permanente people usually prepare a standard set: identity, valid residence permit, proof of 5 years of residence, housing, income, no criminal record and A2.' },
        { kind: 'checklist', items: [
          'passport valid on the application date',
          'valid autorização de residência temporária and copies of previous cards, if retained',
          'NIF and access to Portal das Finanças',
          'proof of address: contrato de arrendamento, certidão permanente predial, declaração de alojamento, atestado de residência from Junta de Freguesia',
          'proof of means: declaração IRS, recibos de vencimento, contrato de trabalho, recibos verdes, declaração de início de atividade, bank statements, pension',
          'certificado do registo criminal from the country of nationality/country of previous residence, if AIMA requests it',
          'authorisation for AIMA to check the Portuguese registo criminal',
          'A2 Portuguese language certificate: CIPLE/CAPLE or another recognised document',
          'proof of actual residence: IRS, recibos de renda, água/luz/internet bills, employment documents, children’s school documents, SNS/utente',
          'photos are usually taken on site, but check the appointment requirements'
        ] },
        { kind: 'warning', text: 'Criminal record certificates from abroad often require an apostille/legalisation and translation. Do not order them too early: AIMA accepts many certificates only when recent, usually within 3 months, unless the document states another validity period.' }
      ]
    },
    {
      id: 'language-a2',
      title: 'Portuguese A2: minimum integration',
      content: [
        { kind: 'paragraph', text: 'For a permanent residence permit, conhecimento do português básico is required. In practice, the cleanest option is an A2 certificate, for example CIPLE from CAPLE. This is not fluent communication level: you need to understand simple notices, basic forms, everyday dialogues and be able to write a short text.' },
        { kind: 'checklist', items: [
          'start preparing 6–12 months before the 5-year date, especially if you work full time',
          'check the CAPLE exam schedule: places in Lisbon and Porto can run out quickly',
          'keep the original certificate and a digital copy',
          'if you studied at a Portuguese school/university or completed a recognised course, check whether the document is suitable instead of CIPLE',
          'do not confuse A2 for permanente with higher requirements for work, university or professions',
          'the certificate is not needed “for show”: lack of A2 is a frequent reason for a delayed application or a request for additional documents'
        ] }
      ]
    },
    {
      id: 'application-aima',
      title: 'Applying through AIMA: appointment, fee, waiting',
      content: [
        { kind: 'paragraph', text: 'The application goes through AIMA. In 2026, queues and the migration of old SEF processes still affect timelines, so the goal is to have the full set ready before the appointment, not to start collecting documents after an SMS or email.' },
        { kind: 'substeps', items: [
          { id: 'check-date', title: '1. Check the 5-year date', content: [
            { kind: 'paragraph', text: 'Count 5 years from the issue date of the first residence permit, not from the visa entry date. If there were gaps, expiries or status changes, check the history using cards and AIMA notifications.' }
          ] },
          { id: 'book-aima', title: '2. Get an appointment', content: [
            { kind: 'paragraph', text: 'Monitor AIMA channels: personal account/portal, email, telephone lines and regional desks may differ. If you already have a temporary residence permit renewal in progress, clarify whether the process can be converted to permanente or whether a separate appointment is needed.' }
          ] },
          { id: 'appointment', title: '3. Attend with originals', content: [
            { kind: 'paragraph', text: 'At the appointment, they check documents, biometrics, address, residence grounds and payment. The AIMA fee for autorização de residência permanente (art. 76) is €351.10 + €133 for admission/case assessment. The fees entered into force on 01.03.2026 (Portaria 307/2023 (consolidated version), an increase of ~+33% from the old €252).' }
          ] },
          { id: 'card', title: '4. Receive the card', content: [
            { kind: 'paragraph', text: 'After approval, the card arrives by post or is issued according to AIMA instructions. Check the name, date of birth, nationality, document number and address. Correct errors immediately.' }
          ] }
        ] },
        { kind: 'warning', text: 'Do not skip renewal of the temporary residence permit just because “it is almost 5 years”. Until permanente is issued, your legal status rests on a valid temporary autorização de residência or on an official renewal/process.' }
      ]
    },
    {
      id: 'aima-reality-2026',
      title: 'AIMA reality in 2026: workarounds for the stuck',
      content: [
        { kind: 'paragraph', text: 'The art. 80 rules themselves have not changed since 2007, but in 2026 the main obstacle is not the law but AIMA. Having inherited ~400,000 files from SEF, AIMA has cleared most temporary residence permit renewals, but it releases first-issuance slots for autorização permanente very rarely. According to complaints on the Portal da Queixa and reports in expat chats, the wait from a contactenos.aima.gov.pt request to an actual appointment is 6–12 months, with no published SLA.' },
        { kind: 'warning', text: 'The portal-renovacoes.aima.gov.pt portal (launched Jan 2026, extended in May to cover July/August) handles ONLY renewals of valid temporary residence permits. A first-issuance autorização de residência permanente CANNOT be applied for through it — only presencial at a Loja AIMA.' },
        { kind: 'paragraph', text: 'Realistic end-to-end timeline from the moment you are ready to apply to having the card in hand:' },
        { kind: 'checklist', items: [
          'slot request → appointment: 6–12 months (without a complaint it can be longer)',
          'appointment → decision: 90 days by law, 4–12 months in practice',
          'decision → physical card: another 3–6 months, sometimes longer',
          'total: 1–2 years is a realistic scenario',
          'comprovativo de deferimento with QR code (launched 20.01.2026, services.aima.gov.pt) serves as a document while the card is being printed'
        ] },
        { kind: 'paragraph', text: 'What to do if AIMA stays silent:' },
        { kind: 'substeps', items: [
          { id: 'livro-amarelo', title: '1. Livro Amarelo — the fastest legal nudge', content: [
            { kind: 'paragraph', text: 'If there is no answer to a slot request within 15 working days, file a digital complaint on livroamarelo.gov.pt, search for AIMA. User reports indicate an appointment invitation usually arrives 2–4 weeks after the complaint. Free, and no lawyer needed.' }
          ] },
          { id: 'intimacao', title: '2. Ação de Intimação para Proteção de Direitos', content: [
            { kind: 'paragraph', text: 'If the complaint does not help, contact an immigration lawyer to file intimação at the administrative court. The fee is usually €500–1500, the court decision comes in 8–10 weeks, and AIMA is obliged to schedule by court order. Lawyers with public art. 80 practice in 2026: LVP Advogados, RFF Lawyers, PaxLegal, TOF Advogados.' }
          ] },
          { id: 'regional-loja', title: '3. Regional Lojas', content: [
            { kind: 'paragraph', text: 'Évora, Bragança, Viseu and other regional Lojas are less congested than Lisbon and Porto. If your residential address allows you to book at a provincial office, there is a chance to speed things up. By law you can apply at any Loja AIMA, not necessarily at the one for your place of residence.' }
          ] },
          { id: 'claim', title: '4. CLAIM Centres', content: [
            { kind: 'paragraph', text: 'CLAIM (Centros Locais de Apoio à Integração de Migrantes) — 99 locations across the country, free help with assembling the dossier and submitting the request. Useful for those whose Portuguese is weak or who have no AIMA experience. acm.gov.pt/centros-locais-de-apoio-a-integracao-de-migrantes.' }
          ] }
        ] },
        { kind: 'warning', text: 'Since April 2025 AIMA applies the "Complete Application Only" rule — if a single document is missing at the appointment, the case is rejected on the spot and you need to book again. A complete pack on the day of the appointment is therefore critical.' }
      ]
    },
    {
      id: 'after-approval',
      title: 'After approval: how not to lose the status',
      content: [
        { kind: 'paragraph', text: 'Permanente is more stable than a temporary residence permit, but it is not immortal. The law allows the status to be cancelled in cases of long absences, serious breaches or if it emerges that documents/grounds were false.' },
        { kind: 'checklist', items: [
          'renew the physical card every 5 years',
          'notify AIMA of a change of address and key personal data',
          'keep a tax and everyday “life history” in Portugal: IRS, rental contract, utility bills, SNS',
          'do not leave Portugal for years without checking the consequences for the residence permit',
          'if you plan to live in another EU country, study estatuto de residente de longa duração separately — it is a different regime',
          'citizenship has separate requirements: a permanent residence permit is useful, but in itself is not the same as a passport',
          'On 18.05.2026 Lei Orgânica 1/2026 was published (in force from 19.05.2026): naturalisation is now 7 years for CPLP/EU and 10 years for everyone else (instead of the previous 5). Permanent residence is NOT mandatory for applying for citizenship, but it becomes more important as a stable intermediate status during those 7–10 years of waiting'
        ] }
      ]
    },
    {
      id: 'common-myths',
      title: 'Common myths about art. 80 permanent residence',
      content: [
        { kind: 'paragraph', text: 'These misconceptions show up in chats and groups, sometimes even in advice from inexperienced lawyers. Reality as of May 2026:' },
        { kind: 'checklist', items: [
          '❌ "Manifestação de Interesse counted for permanent residence" — NEVER counted. For art. 80 you always need a formal título de residência.',
          '❌ "The renewal queue resets the 5 years" — On the contrary, it counts as continuous legal residence, provided the request was filed on time (art. 78).',
          '❌ "The new AIMA Jan 2026 portal = ARP online filing" — portal-renovacoes is for renewals of temporary residence permits only. First-issuance ARP is presencial only at a Loja AIMA.',
          '❌ "Lei Orgânica 1/2026 changed the ARP rules" — No, Lei Orgânica changes the Nationality Law ONLY. Lei 23/2007 art. 80 is untouched.',
          '❌ "You can apply for ARP during a tourist stay" — You need a valid temporary residence permit at the time of application (or a pending renewal).',
          '❌ "After 5 years, ARP is granted automatically" — No, you must file the application explicitly. Otherwise you stay on the temporary card, which simply keeps being renewed.',
          '❌ "Better to go straight for citizenship, ARP is optional" — Citizenship now takes 7/10 years (Lei Orgânica 1/2026), ARP takes 5. It makes sense to obtain ARP as an intermediate stable status.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'AIMA: admission + case assessment', amountEUR: 133, note: 'tabela de taxas AIMA from 01.03.2026.' },
    { label: 'AIMA art. 76 — autorização de residência permanente', amountEUR: 351.10, note: 'tabela de taxas AIMA from 01.03.2026 (the old €252 is no longer current).' },
    { label: 'Portuguese A2 exam/certificate', amountEURMin: 70, amountEURMax: 120, note: 'Market and exam-centre benchmark; depends on the provider and format.' },
    { label: 'Criminal record certificate, apostille, translation', amountEURMin: 20, amountEURMax: 150, note: 'Depends on the issuing country and whether sworn/legal translation is required.' }
  ],
  sources: [
    { title: 'AIMA — autorização de residência and services for foreign nationals', url: 'https://aima.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'AIMA — tabela de taxas and payments for títulos de residência', url: 'https://aima.gov.pt/pt/noticias/atualizacao-da-tabela-de-taxas', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 23/2007 — legal regime for the entry, stay, departure and removal of foreign nationals, art. 80', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-67564445', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DRE — consolidated legislation on autorização de residência permanente', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2007-34563275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  recentlyChangedAt: '2026-05-25',
  changeSummary: 'Major May 2026 update: (1) Step "AIMA reality in 2026" with workarounds (Livro Amarelo, intimação, regional Lojas, CLAIM), honest 1–2 year timeline, and explicit note the AIMA Jan 2026 portal is renewals-only. (2) Step "When the 5 years start" with 8 edge cases (D-visa, MdI, renewal queue, gaps, SEF→AIMA, conversions, reagrupamento, children born in PT). (3) Common myths about art. 80 permanent residence. (4) Fixed Portaria reference — correct is Portaria 307/2023 (consolidated version), not 480/2025/1. (5) Lei Orgânica 1/2026 (in force from 19.05.2026): ARP becomes more important as an intermediate status during the 7–10 year wait for citizenship.',
  verifyIntervalDays: 90
}
