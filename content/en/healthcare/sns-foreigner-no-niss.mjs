export default {
  editorialVoice: 'hackportugal',
  id: 'sns-foreigner-no-niss',
  categoryId: 'healthcare',
  title: 'SNS for foreigners without NISS — what to do',
  tldr: 'In urgência, a public hospital must provide care regardless of documents and status (Constituição art. 64; Lei de Bases da Saúde, Lei n.º 95/2019), but “must accept you” ≠ “always free”: there may be taxas moderadoras (Decreto-Lei n.º 37/2022) or a bill at SNS tariffs if you have no entitlement to SNS/EHIC/insurance. Fee exemptions exist for certain groups. For planned care, you need a número de utente: with a residence permit or, without a residence permit, via an atestado da Junta de Freguesia confirming residence in Portugal for more than 90 days (Despacho n.º 25360/2001). NISS is not needed for a número de utente — these are different numbers. Refugees/TPD have access under the reception regime. Tourists — EHIC/CESD (EU) or private insurance.',
  tags: ['sns', 'utente', 'tourists', 'without niss'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'emergency-rights',
      title: '🚨 Emergency care — they must provide it, but it is not always free',
      content: [
        { kind: 'paragraph', text: 'The right to health protection is enshrined in Constituição art. 64 and Lei de Bases da Saúde (Lei n.º 95/2019). Special access rules apply to foreigners in an irregular situation (Despacho n.º 25360/2001); for minors — Decreto-Lei n.º 67/2004. The taxas moderadoras regime is regulated by Decreto-Lei n.º 37/2022.' },
        { kind: 'checklist', items: [
          '✅ 112 — the single European emergency number in Portugal. SNS 24: 808 24 24 24 — triage/advice, may refer you to urgência. If life is at risk, call 112',
          '✅ Urgência in a public hospital: they must provide care in the event of an immediate threat, regardless of documents',
          '✅ Childbirth and perinatal care: for pregnant women without documents — a special access regime',
          '✅ Injury, accident: care provided regardless of status',
          '✅ Mental health emergency: in immediate danger — 112/urgência. For psychological support — SNS 24: 808 24 24 24',
          '⚠️ Non-emergency care without entitlement to SNS/insurance may be chargeable at SNS/institution tariffs (Portaria n.º 207/2017 and amendments). The final cost depends on the service, tests and hospitalisation; the price can be significantly higher than a simple consultation',
          '⚠️ “Must accept you” does not mean “free for everyone”: taxas moderadoras in urgência still apply in a number of cases if the visit was not referred through SNS 24/INEM/an institution and did not end in hospitalisation'
        ]}
      ]
    },
    {
      id: 'utente-provisorio',
      title: '📋 Número de Utente for foreign residents',
      content: [
        { kind: 'paragraph', text: 'For healthcare, the key identifier is the Número de Utente (registration in the RNU through Centro de Saúde/ULS). NISS is the Segurança Social number: it is needed for social insurance and some benefits, but it is not the main document for registering with the SNS.' },
        { kind: 'substeps', items: [
          { id: 'u1', title: 'Documents', content: [
            { kind: 'checklist', items: [
              'Valid residence permit / certificado de registo cidadão UE / other proof of legal stay (visa + passport)',
              'NIF (if available)',
              'Proof of address (atestado da Junta de Freguesia, rental contract, utility bill)',
              'Passport/ID',
              'NISS is usually not needed. Some centres may mistakenly ask for it — officially, for the SNS you need a número de utente/RNU. If refused, ask for the legal basis in writing or contact ACES/USF/ULS'
            ]}
          ]},
          { id: 'u2', title: 'What is included', content: [
            { kind: 'checklist', items: [
              '✅ Placement on the list for a family doctor (médico de família)',
              '✅ Emergency care and urgência (with the taxas moderadoras regime)',
              '✅ Vaccinations under the PNV',
              '✅ Paediatric consultations',
              '✅ Pregnancy monitoring up to childbirth',
              '⚠️ Expensive specialised medicines — partial co-payment',
              '🕒 If you were given temporary/conditional registration — check its validity period and which documents you need to provide later at your Centro de Saúde/ULS. There is no universal “6 months until NISS” rule'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'tourist',
      title: '✈️ Tourists — without residency',
      content: [
        { kind: 'substeps', items: [
          { id: 't1', title: 'EU/EEA/Switzerland', content: [
            { kind: 'checklist', items: [
              '✅ EHIC / CESD — covers medically necessary care in the public system during a temporary stay on the same terms as for local users',
              '✅ Show the card + passport at the hospital. The same fees/conditions as for local residents may apply',
              '⚠️ Not covered: private clinics, repatriation, planned treatment without separate authorisation',
              '⚠️ If you do not have EHIC — pay at SNS/institution tariffs as a private patient, then claim reimbursement through insurance in your country'
            ]}
          ]},
          { id: 't2', title: 'Non-EU tourists', content: [
            { kind: 'checklist', items: [
              '⚠️ You should have travel health insurance ≥ €30,000 (for a Schengen visa)',
              '✅ Emergency: care will be provided immediately; afterwards the hospital may bill you or your insurer if you have no entitlement to SNS/EHIC or other cover',
              '💰 Without insurance: bills at institution tariffs are possible — €100–300 per visit, €1,000+ for surgery',
              '🏥 Private clinics: much more dependent on insurance / cash payment',
              '🛂 Ukrainian refugees (Proteção Temporária): have access to SNS through temporary protection registration — obtain a número de utente through Centro de Saúde with AIMA documents'
            ]}
          ]},
          { id: 't3', title: 'Travel insurance providers', content: [
            { kind: 'checklist', items: [
              'World Nomads, SafetyWing, IMG, Allianz Travel — international',
              'Local: Tranquilidade Travel, Fidelidade Travel, Generali Travel',
              'Prices: €1–5/day for basic cover; €5–10/day for full cover',
              'Long term (>180 days): SafetyWing “Nomad Insurance” — popular with digital nomads, €40–60/month'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'undocumented',
      title: '⚠️ Without residency, without insurance — what to do',
      content: [
        { kind: 'paragraph', text: 'Sometimes people are in a transitional period: a visa is expiring, a residence permit is under review, or there is no legal status. Full access does not work, but there are options.' },
        { kind: 'checklist', items: [
          '🏥 Emergency care: provided to everyone — you will NOT be sent home even without legal status. But a bill may be issued (if there is no exemption under a special programme)',
          '👶 Childbirth + perinatal care: for pregnant women without documents — a special access regime under protected categories',
          '👶 Foreign minors in an irregular situation have special protection and access to healthcare/education regardless of their parents’ status; this is arranged through the competent services (DL n.º 67/2004)',
          '🤰 Pregnant women: are protected categories and should receive acompanhamento da gravidez/parto; even with irregular status, contact Centro de Saúde/urgência. Take any documents proving identity and address; the payment/exemption regime depends on registration and status',
          '🏥 Asylum seekers: after submitting an application, they have the right to access SNS/necessary medical care under the reception regime (Lei n.º 27/2008, as amended). For registration, a comprovativo/declaração of application submission through AIMA is usually needed. Vulnerable groups have additional guarantees',
          '🏥 Victims of human trafficking: emergency + further medical care, special programme',
          '🎯 Charities: Médicos do Mundo PT (medicosdomundo.pt) offers free clinics for people without documents, Lisboa and Porto',
          '🎯 Cuidados de Saúde Primários — Programa para imigrantes: in some municipalities there are mobile clinics'
        ]}
      ]
    },
    {
      id: 'process-utente',
      title: '🆔 To obtain full access — get a Número de Utente',
      content: [
        { kind: 'checklist', items: [
          'Número de Utente — the main number for SNS. It is obtained at the Centro de Saúde/USF for your place of residence',
          'Documents: ID/passport + status (residence permit / CRUE / visa / atestado for residence >90 days), NIF, proof of address',
          'NISS — the social insurance number; it does not replace the número de utente and is usually not required for registering with SNS',
          'Timing: the number is often issued on the day of application or within 1–14 days. Assignment of a médico de família is a separate stage',
          'If the health centre refuses — ask for the basis in writing; complaint to the direção do ACES/ULS, through Livro de Reclamações or to ERS'
        ]}
      ]
    },
    {
      id: 'private-affordable',
      title: '💼 Affordable private healthcare — if SNS is slow',
      content: [
        { kind: 'checklist', items: [
          'Budget: AdvanceCare basic plan around €40/month — gives access to private healthcare with co-payment',
          'Generali Saúde — basic family plan €60–90/month',
          'Médis Essencial — entry-level tariff €30–50/month',
          'One-off visits to a clinic without insurance: €40–80 GP, €70–150 specialist',
          'Clinics with reasonable tariffs: Cruz Vermelha clinics, Misericórdia clinics — non-profit',
          'Online consultation: Knok, Doctorino — €30–50 per video visit, receipt. Prices and availability of English-speaking doctors change — check before booking',
          'Saúde 24 chat: free, does not replace a doctor, but gives an initial opinion'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Emergency care in an SNS hospital', amountEUR: 0, note: 'must be provided; the price depends on status/cover. It may be €0 in case of exemption/referral/hospitalisation, but taxas moderadoras or a bill at SNS tariffs are possible' },
    { label: 'Minimum travel insurance for Schengen', amountEUR: 30000, note: 'cover' },
    { label: 'Visit to a private GP without insurance', amountEURMin: 40, amountEURMax: 80 },
    { label: 'Private specialist', amountEURMin: 70, amountEURMax: 150 }
  ],
  sources: [
    { title: 'Despacho n.º 25360/2001 — access of foreign citizens to SNS', url: 'https://diariodarepublica.pt/dr/detalhe/despacho/25360-2001-3043226', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Decreto-Lei n.º 37/2022 — taxas moderadoras', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/37-2022-184170621', kind: 'law', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS24 — Access of foreign citizens to SNS', url: 'https://www.sns24.gov.pt/tema/cidadaos-estrangeiros/acesso-de-cidadaos-estrangeiros-ao-sns/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'Médicos do Mundo Portugal', url: 'https://medicosdomundo.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
