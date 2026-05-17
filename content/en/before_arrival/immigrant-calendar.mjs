export default {
  editorialVoice: 'hackportugal',
  id: 'immigrant-calendar',
  categoryId: 'before_arrival',
  title: 'Immigrant calendar — what to do month by month after arrival',
  tldr: 'Month-by-month checklist for your first 24 months in Portugal. Month 1 (NIF, bank account, rental contract); Month 2 (NISS, junta de freguesia registration, SNS utente); Months 2–4 (AIMA residence-permit application, €96 fee, status checks via the AIMA portal); Months 4–9 (título de residência issued); Year 1 (IRS by 30 June, address and insurance checks); Year 2 (permit renewal 60 days before expiry, address re-submission with Finanças). After 5 years — permanent residence or citizenship (separate guide). Every step links to the detailed guide in the app.',
  tags: ['calendar', 'checklist', 'relocation', 'onboarding'],
  estimatedReadMinutes: 9,
  steps: [
    {
      id: 'month-1',
      title: 'Month 1 — critical foundations',
      content: [
        { kind: 'paragraph', text: 'The first 30 days are about getting a NIF and opening a bank account. Without a NIF you can\'t sign a rental, buy a transit pass, or register a SIM card. In parallel — move in and sign a rental contract (with Finanças registration, otherwise it doesn\'t count as a fiscal address for everything else).' },
        { kind: 'checklist', items: [
          '🆔 Day 1–7: get a NIF (Número de Identificação Fiscal). For CPLP citizens — free at Finanças with passport + residential address. For third-country nationals — you need a tax representative (~€80–150) or a CPLP friend. See "NIF for third-country".',
          '🏠 Day 1–14: sign a long-term rental contract (minimum 1 year). The landlord MUST register it with Finanças (recibo eletrónico) — otherwise you have no "morada fiscal". See "Rental contract".',
          '🏦 Day 1–14: open a bank account (ActivoBank/Best/Millennium). You need: passport + NIF + proof of address (utility bill or rental contract). In-branch in person. See "Banks compared".',
          '📱 Day 7–14: buy a Portuguese SIM (MEO, NOS, Vodafone) — for activations (Chave Móvel, MB Way, banking pushes). Registered to your passport + NIF.',
          '🗺️ Day 14–30: get an "atestado de residência" from your junta de freguesia (free, takes 10 minutes). You\'ll need it for many of the next steps.'
        ]},
        { kind: 'warning', text: 'Do NOT leave everything to "the last day of your 90 Schengen days". Applying for a residence permit requires NIF, NISS, a bank, and an address already. With a D visa you only have 4 months to register with AIMA from your date of entry.' }
      ]
    },
    {
      id: 'month-2',
      title: 'Month 2 — social security and health',
      content: [
        { kind: 'checklist', items: [
          '👤 NISS (Número de Identificação de Segurança Social): get it via Segurança Social Direta online (if you already have Chave Móvel) or in person. Free. Without NISS you can\'t work, you can\'t get SNS (free healthcare). See "NISS".',
          '🏥 SNS utente: with NISS, register at the health centre (centro de saúde) for your address. You get a "número de utente" — the key to free GPs, prescriptions, hospitals. See "SNS utente".',
          '🔑 Chave Móvel Digital: set up via the SNS24 app or in person at a Loja do Cidadão. It\'s the Portuguese single digital ID — one key for AIMA, Finanças, ePortugal. Saves you tens of hours.',
          '📧 e-Balcão Finanças: activate your account on portaldasfinancas.gov.pt. With Chave Móvel it takes 5 minutes. Through this — IRS, certidões, everything.',
          '📨 Subscribe to CTT electronic notifications: so AIMA/Finanças/your bank can reach you without paper letters'
        ]}
      ]
    },
    {
      id: 'month-2-4',
      title: 'Months 2–4 — AIMA residence-permit submission',
      content: [
        { kind: 'paragraph', text: 'Since 2024-2025 AIMA has moved entirely to online submission via aima.gov.pt and the SAPA portal for most permit types. There\'s no in-person meeting for submission (only the final biometrics after approval).' },
        { kind: 'checklist', items: [
          '📝 Prepare the dossier: passport, D visa (if applicable), NIF, NISS, rental contract + Finanças registration, bank statement (3 months), criminal record certificate from your country of citizenship (apostille + translation), proof of income/study (depends on permit type)',
          '💶 Pay the AIMA fee: €96.12 for most D-permit types (D1-D9), via Multibanco reference',
          '📤 Submit online at aima.gov.pt using Chave Móvel. See "AIMA online 2026"',
          '⏱️ Wait for decision: 30–90 days by law, 60–180 days in practice in 2026',
          '📅 Book biometrics (after approval): an automatic date offer appears in your portal',
          '⚠️ If AIMA goes silent >90 days: file a reclamação with the Provedoria de Justiça (free), then action in Tribunal Administrativo'
        ]},
        { kind: 'warning', text: 'If you have a D visa (D7, D8, D2, etc.), you MUST register with AIMA within 4 months of entry. Otherwise the visa "lapses" and you need a new one.' }
      ]
    },
    {
      id: 'month-4-9',
      title: 'Months 4–9 — título de residência issued',
      content: [
        { kind: 'checklist', items: [
          '✅ Receive a positive AIMA decision (letter + portal)',
          '📸 Submit biometrics at an AIMA office (15 minutes — fingerprints and photo)',
          '📬 After ~30–60 days — receive the título de residência (physical card) by CTT registered mail or pick it up at AIMA',
          '💳 Update the bank with your residence-permit card (move from "temporary" to "resident")',
          '🚗 If you have a foreign car — start the import + Portuguese matrícula process (see "Car import from EU")',
          '📋 Update your address with Finanças and Segurança Social (if you moved)'
        ]}
      ]
    },
    {
      id: 'year-1',
      title: 'Year 1 — taxes and insurance',
      content: [
        { kind: 'checklist', items: [
          '📅 April–June of the following year: file IRS (Modelo 3) for the previous calendar year. Deadline: 1 April – 30 June. Most people file via portaldasfinancas.gov.pt, prefilled. See "IRS filing".',
          '💰 If you work as recibos verdes: IRS filing is mandatory from year one, even if you earned nothing — otherwise penalty',
          '🚨 Anexo J declaration (foreign accounts and income): if you hold accounts abroad — mandatory',
          '🏠 Renew rental insurance (seguro multirisco) — legally required, ~€50–150/year',
          '🏥 If you have a car — renew seguro automóvel (minimum — responsabilidade civil)',
          '📋 Check the validity date of your residence permit — most D visas give 2 years, then renew for 3',
          '🎓 If studying — renew your D4 student permit before the academic year ends'
        ]},
        { kind: 'warning', text: 'IRS, IUC (vehicle tax) and IMI (property tax) are the three main taxes. All three send automatic notifications via portaldasfinancas + e-Balcão. Connect push notifications in your banking app to the Multibanco network — you\'ll see every charge.' }
      ]
    },
    {
      id: 'year-2',
      title: 'Year 2 — permit renewal',
      content: [
        { kind: 'checklist', items: [
          '📅 60 days before the permit expires: submit the renewal via aima.gov.pt',
          '📋 Documents: same as the first application + proof of income (IRS for the last 2 years)',
          '💶 Fee: €96.12 (same as the initial application)',
          '⏱️ If AIMA goes silent and the permit is about to expire: your permit is OFFICIALLY extended automatically pending AIMA\'s decision — keep the old permit + the renewal-submission receipt with you',
          '🇵🇹 Year 2+ is the right time to start learning Portuguese seriously (you need A2 for citizenship and it helps for permanent residence)',
          '🎓 Sign up for free PLA (Português Língua de Acolhimento) courses at a school or online — see "Learn Portuguese"'
        ]}
      ]
    },
    {
      id: 'years-3-4',
      title: 'Years 3–4 — stabilisation',
      content: [
        { kind: 'checklist', items: [
          '🏠 If you\'re planning to buy property — this is the year for financial planning (Mortgage foreigners, IMT, Stamp duty)',
          '💼 If you work formally — check your Segurança Social contributions are landing (via ssdireta.seg-social.pt)',
          '👨‍👩‍👧 If family — consider reunification (D6 family reunification) for parents/children abroad',
          '🌐 Portuguese A2 certificate — take CIPLE early (you\'ll need it for citizenship). See "CIPLE A2 exam"',
          '📊 Apply for NHR (Non-Habitual Resident) if you qualify — must be done in your first 5 years, then never again'
        ]}
      ]
    },
    {
      id: 'year-5',
      title: 'Year 5 — citizenship or permanent residence',
      content: [
        { kind: 'paragraph', text: 'After 5 years of legal residence you can pick: apply for citizenship (under the old law, while it still applies) or for permanent residence.' },
        { kind: 'checklist', items: [
          '🆔 Naturalisation application: IRN forms, Portuguese A2 certificate, certidão de residência legal from AIMA, criminal records from every country you lived in for >1 year, fee €250. See "Naturalization 2026"',
          '⚖️ IMPORTANT: from 2026 the new law may change the threshold to 7 years (CPLP+EU) or 10 years (third country). Submit via the Portal da Nacionalidade BEFORE publication in DRE — that locks in the old rules for you',
          '🌍 Alternative: permanent residence (residência permanente) — gives you almost all citizen rights except voting and a passport, no need to give up your other citizenship, no A2 requirement (though A1 is recommended)',
          '👶 If you have children born in Portugal — they may get citizenship automatically (see "Citizenship by descent")'
        ]}
      ]
    },
    {
      id: 'continuous',
      title: 'What to do continuously',
      content: [
        { kind: 'checklist', items: [
          '📋 Yearly: check the validity of your residence permit, passport, driving licence',
          '🏥 Yearly: see your family GP (medicina geral familiar) for a check-up — free via SNS',
          '💉 Flu shot in autumn (October-November) — free at the health centre',
          '📊 Every 5 years: chest X-ray + general medical check',
          '🚗 Every 2 years for cars <8 years old, yearly for cars >8 years: technical inspection (inspeção IPO) — see "IPO inspection"',
          '🎂 Every 5 years (for CC after age 25): renew your Cartão de Cidadão (Portuguese citizens after naturalisation)'
        ]}
      ]
    }
  ],
  sources: [
    { title: 'AIMA — overview of procedures and timelines (official site)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Portal das Finanças — taxpayer obligations', url: 'https://www.portaldasfinancas.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Segurança Social — how to get a NISS', url: 'https://www.seg-social.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS — how to get an utente number (SNS24)', url: 'https://www.sns24.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'ePortugal / AMA — Chave Móvel Digital', url: 'https://eportugal.gov.pt/cidadaos/-/chave-movel-digital', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'IRN — Citizenship applications', url: 'https://justica.gov.pt/Servicos/Submeter-pedido-de-nacionalidade', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180,
  recentlyChangedAt: '2026-05-17',
  changeSummary: 'New guide: immigrant calendar — what to do month by month after arriving in Portugal. Month 1 (NIF, bank, rental), month 2 (NISS, SNS, Chave Móvel), months 2-4 (AIMA), months 4-9 (residence permit issued), year 1 (IRS, insurance), year 2 (permit renewal), year 5 (citizenship/permanent residence). Cross-linked to all the key existing guides in the app.'
}
