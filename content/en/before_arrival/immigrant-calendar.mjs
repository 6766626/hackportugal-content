export default {
  editorialVoice: 'hackportugal',
  id: 'immigrant-calendar',
  categoryId: 'before_arrival',
  title: 'Immigrant calendar — what to do month by month after arrival',
  tldr: 'A month-by-month checklist for the first 24 months in Portugal. Month 1 (NIF, bank account, rental contract); Month 2 (NISS, registration at the Junta de Freguesia, SNS user number); Months 2–4 (apply to AIMA for a residence permit, pay €96.12, check status via residence permit online); Months 4–9 (issue of título de residência); Year 1 (IRS return by 30 June, address check, insurance); Year 2 (renew residence permit 60 days before expiry, resubmit address in Finanças). After 5 years — permanent residence permit or citizenship (see separate guide). Each step links to a detailed guide in the app.',
  tags: ['calendar', 'checklist', 'relocation', 'onboarding'],
  estimatedReadMinutes: 9,
  steps: [
    {
      id: 'month-1',
      title: 'Month 1 — critical basics',
      content: [
        { kind: 'paragraph', text: 'The first 30 days — priority: obtain a NIF and open a bank account. WITHOUT a NIF you will not sign a rental contract, buy a travel pass, or register a SIM card. In parallel — move in, sign a rental contract (it must be registered with Finanças — this is a basic requirement for the next steps).' },
        { kind: 'checklist', items: [
          '🆔 Day 1–7: Obtain a NIF (Número de Identificação Fiscal). For CPLP — free at Finanças with a passport + residential address. For third countries — a tax representative is required (~€80–150) or a CPLP-CV friend. See the guide “NIF for third-country nationals”.',
          '🏠 Day 1–14: Sign a long-term rental contract (minimum 1 year). The landlord MUST register it with Finanças (recibo eletrónico) — otherwise you do not have a “morada fiscal”. See “Rental contract”.',
          '🏦 Day 1–14: Open a bank account (ActivoBank/Best/Millennium). Required: passport + NIF + address proof (utility bill or rental contract). You will have to go to a branch in person. See “Banks compared”.',
          '📱 Day 7–14: Buy a local SIM (MEO, NOS, Vodafone) — for activations (Chave Móvel, MB WAY, bank push notifications). It will be registered to your passport + NIF.',
          '🗺️ Day 14–30: Register for an “atestado de residência” at the Junta de Freguesia (free, takes 10 minutes). You will need it for many later steps.'
        ]},
        { kind: 'warning', text: 'DO NOT leave everything until the “last day of the Schengen 90 days”. Applying for a residence permit already requires having a NIF, NISS, bank account and address. If you are on a D visa — you have only 4 months to register with AIMA from the date of entry.' }
      ]
    },
    {
      id: 'month-2',
      title: 'Month 2 — social security and health',
      content: [
        { kind: 'checklist', items: [
          '👤 NISS (Número de Identificação de Segurança Social): obtain it online in Segurança Social Direta (if you have Chave Móvel) or in person. Free. Without NISS — you cannot work and cannot obtain SNS (free healthcare). See “NISS”.',
          '🏥 SNS user number: with NISS — register at the health centre (centro de saúde) for your residential address. You will receive a “número de utente” — the key to a free doctor, prescriptions and hospitals. See “SNS utente”.',
          '🔑 Chave Móvel Digital: set it up via the SNS24 app or in person at Loja do Cidadão. This is the “Portuguese GOV.UK” — a single digital key for AIMA, Finanças, ePortugal. It will save you dozens of hours.',
          '📧 e-Balcão Finanças: activate your account on portaldasfinancas.gov.pt. With Chave Móvel this takes 5 minutes. Through it — IRS return, certidões, everything.',
          '📨 Subscribe to CTT electronic notifications: so that AIMA/Finanças/the bank can notify you without paper letters'
        ]}
      ]
    },
    {
      id: 'month-2-4',
      title: 'Months 2–4 — applying to AIMA for a residence permit',
      content: [
        { kind: 'paragraph', text: 'Since 2024-2025, AIMA has moved fully to online applications via aima.gov.pt and Portal SAPA for most types of residence permit. There is no in-person appointment for submission (only final biometrics after approval).' },
        { kind: 'checklist', items: [
          '📝 Prepare the file: passport, D visa (if applicable), NIF, NISS, rental contract + registration with Finanças, bank statement (3 months), criminal record certificate from the country of citizenship (apostille + translation), proof of income/studies (depends on the type of residence permit)',
          '💶 Pay the AIMA fee: €96.12 for most residence permit types (D1-D9), Multibanco reference',
          '📤 Apply online at aima.gov.pt with Chave Móvel. See the guide “AIMA online 2026”',
          '⏱️ Waiting for a decision: 30–90 days (by law — 90 days, in practice 60–180 days in 2026)',
          '📅 Biometrics appointment (after approval): automatic date offer in your personal account',
          '⚠️ If AIMA is silent for >90 days: submit a reclamação to the Provedoria de Justiça (free), then — action in the Tribunal Administrativo'
        ]},
        { kind: 'warning', text: 'If you have a D visit visa (type D7, D8, D2 etc.), you MUST register with AIMA within 4 months from the day of entry. Otherwise the visa “expires” and a new one is needed.' }
      ]
    },
    {
      id: 'month-4-9',
      title: 'Months 4–9 — issue of título de residência',
      content: [
        { kind: 'checklist', items: [
          '✅ Receive a positive AIMA decision (letter + account)',
          '📸 Provide biometrics at an AIMA office (15 minutes — fingerprints and photo)',
          '📬 After ~30–60 days — receive the título de residência (physical card) by CTT post (registo) or in person at AIMA',
          '💳 Register the residence permit card with the bank (change “temporary” status to “resident”)',
          '🚗 If you have a car from abroad — start the import + matrícula portuguesa process (see the guide “Car import from EU”)',
          '📋 Update your address in Finanças, Segurança Social (if your housing has changed)'
        ]}
      ]
    },
    {
      id: 'year-1',
      title: 'Year 1 — taxes and insurance',
      content: [
        { kind: 'checklist', items: [
          '📅 April–June of the following year: file IRS (Modelo 3) for the previous calendar year. Deadline: 1 April – 30 June. For most people — via portaldasfinancas.gov.pt, auto-filled. See “IRS filing”.',
          '💰 If you work via recibos verdes: filing IRS is mandatory from the first year, even if you earned nothing — otherwise there is a fine',
          '🚨 Anexo J declaration (foreign accounts and income): if you have accounts abroad — mandatory',
          '🏠 Re-register rental insurance (seguro multirisco) — required by law, ~€50–150/year',
          '🏥 If you have a car — renew seguro automóvel (minimum — responsabilidade civil)',
          '📋 Check the expiry date of the residence permit — most D visas give 2 years, then renewal for 3 years',
          '🎓 If you are studying — renew the D4 student residence permit before the end of the academic year'
        ]},
        { kind: 'warning', text: 'IRS, IUC (car tax) and IMI (property tax) — the three main taxes. All three have automatic notifications via portaldasfinancas + e-Balcão. Connect push notifications in your bank app to the Multibanco network — you will see all charges.' }
      ]
    },
    {
      id: 'year-2',
      title: 'Year 2 — renewing the residence permit',
      content: [
        { kind: 'checklist', items: [
          '📅 60 days before the residence permit expires: apply for renewal via aima.gov.pt',
          '📋 Documents: the same as for the first application + proof of income (IRS for the past 2 years)',
          '💶 Fee: €96.12 (renewal = the same cost)',
          '⏱️ If AIMA is silent and the residence permit is about to expire: your residence permit is OFFICIALLY extended automatically until AIMA’s decision — carry your old residence permit + confirmation of the renewal application with you',
          '🇵🇹 Year 2+ — an excellent time to start actively learning Portuguese (A2 is later required for citizenship and useful for a permanent residence permit)',
          '🎓 Register for free PLA (Português Língua de Acolhimento) courses at a school or online — see “Learn Portuguese”'
        ]}
      ]
    },
    {
      id: 'years-3-4',
      title: 'Years 3–4 — stabilisation',
      content: [
        { kind: 'checklist', items: [
          '🏠 If you plan to buy property — this is the year for financial planning (Mortgage foreigners, IMT, Stamp duty)',
          '💼 If you are officially employed — check that Segurança Social contributions are being made (via ssdireta.seg-social.pt)',
          '👨‍👩‍👧 If you have family — consider reunification (D6 family reunification) for parents/children remaining abroad',
          '🌐 Portuguese A2 certificate — take CIPLE in advance (needed for citizenship). See “CIPLE A2 exam”',
          '📊 Tax regime for new residents: NHR has been closed to new applications since 2024; it was replaced by IFICI (Incentivo Fiscal à Investigação Científica e Inovação) with a narrower list of eligible professions. Check eligibility for IFICI with Finanças/ATA in the first years of residency'
        ]}
      ]
    },
    {
      id: 'year-5',
      title: 'Year 5 — citizenship or permanent residence permit',
      content: [
        { kind: 'paragraph', text: 'After 5 years of legal residence, you can choose: either apply for citizenship (under the old law — while it remains in force), or for a permanent residence permit.' },
        { kind: 'checklist', items: [
          '🆔 Naturalisation application: IRN forms, A2 PT certificate, certidão de residência legal from AIMA, criminal record certificates from all countries of residence >1 year, fee €250. See “Naturalization 2026”',
          '⚖️ IMPORTANT: from 2026, a new law may change the periods to 7 (CPLP+EU) or 10 (third countries) years. Apply online via Portal da Nacionalidade BEFORE publication in DRE — this secures the old rules for you',
          '🌍 Alternative: permanent residence permit (residencia permanente) — gives almost all citizen rights except voting and a passport, without renouncing another citizenship, without an A2 requirement (although A1 is recommended)',
          '👶 If children were born in Portugal — they may obtain citizenship automatically (see “Citizenship by descent”)'
        ]}
      ]
    },
    {
      id: 'continuous',
      title: 'What to do continuously',
      content: [
        { kind: 'checklist', items: [
          '📋 Once a year: check the validity of the residence permit, passport, driving licence',
          '🏥 Once a year: visit the family doctor (medicina geral familiar) for a check-up — free through SNS',
          '💉 Flu vaccination in autumn (October-November) — free at the health centre',
          '📊 Once every 5 years: chest X-ray + general medical check',
          '🚗 Every 2 years for cars <8 years old, annually for cars >8 years old: roadworthiness inspection (inspeção IPO) — see “IPO inspection”',
          '🎂 Once every 5 years (for CC after age 25): renewal of Cartão de Cidadão (for Portuguese citizens after naturalisation)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA — overview of procedures and deadlines (official website)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portal das Finanças — taxpayer obligations', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — How to obtain NISS', url: 'https://www.seg-social.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS — How to obtain a user number (SNS24)', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal / AMA — Chave Móvel Digital', url: 'https://eportugal.gov.pt/cidadaos/-/chave-movel-digital', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRN — Nationality applications', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180,
  recentlyChangedAt: '2026-05-17',
  changeSummary: 'New guide: immigrant calendar — what to do month by month after arriving in Portugal. Month 1 (NIF, bank, rental), month 2 (NISS, SNS, Chave Móvel), months 2-4 (AIMA), months 4-9 (obtaining the residence permit), year 1 (IRS, insurance), year 2 (residence permit renewal), year 5 (citizenship/permanent residence permit). Linked to all key guides in the app.'
}
