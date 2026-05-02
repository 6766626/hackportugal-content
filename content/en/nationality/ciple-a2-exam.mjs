export default {
  editorialVoice: 'hackportugal',
  id: 'ciple-a2-exam',
  categoryId: 'nationality',
  title: 'Portuguese A2 — free courses, school programmes and the CIPLE exam',
  tldr: 'An A2-level certificate is needed only for naturalisation by residence (under the current Lei 37/81 — 5 years; changes approved by parliament on 01.04.2026, to 7 years for CPLP/EU and 10 years for others, as of 28.04.2026 have NOT been promulgated and are NOT in force). For marriage, união de facto, Reagrupamento Familiar — it is NOT needed. IMPORTANT: for naturalisation, IRN accepts only an official A2+ level certificate (CIPLE / PLA / Centros Qualifica / DEPLE / DAPLE) — a simple attendance statement for 150 hours of a course WITHOUT level assessment is NOT accepted. The cheapest routes: PLA (€0), IEFP (€0 + grant, but with obligations as an unemployed person), state adult schools ~€20/semester. The CIPLE exam — €85 (2026), monthly sessions.',
  audience: { citizenships: ['thirdCountry', 'euEeaSwiss'] },
  tags: ['ciple', 'a2', 'language', 'exam', 'pla'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'when-needed',
      title: 'When the certificate is needed, and when it is not',
      content: [
        { kind: 'paragraph', text: 'Portuguese at A2 level is needed only in a few cases:' },
        { kind: 'checklist', items: [
          '✅ **Naturalisation by residence** (art. 6 Lei 37/81 + art. 25 Decreto-Lei 237-A/2006): currently — after 5 years. Changes to 7 years for CPLP/EU and 10 years for others were approved by parliament on 01.04.2026, but as of 28.04.2026 have NOT yet been promulgated — the old rules apply',
          '✅ For admission to a number of IEFP programmes, state colleges and Centros Qualifica'
        ]},
        { kind: 'paragraph', text: 'When the certificate is NOT required:' },
        { kind: 'checklist', items: [
          '❌ Citizenship by marriage / união de facto — Lei 37/81 does not require language (only “effective ties”)',
          '❌ Citizenship by descent (Portuguese grandparent) — not required',
          '❌ Family reunification (Reagrupamento Familiar) — AIMA does not ask for language',
          '❌ Renewal of a residence permit — AIMA does not require it',
          '❌ **Citizens of countries where Portuguese is an official language** (Brazil, Angola, Cape Verde, Mozambique, Guinea-Bissau, São Tomé, East Timor, Equatorial Guinea): under the Regulamento da Nacionalidade rules, knowledge of the language is presumed. Check your specific case with IRN'
        ]},
        { kind: 'warning', text: 'When applying for citizenship, IRN accepts only an OFFICIAL certificate stating a specific level of A2 or above. An attendance statement (frequência) without level assessment is NOT suitable.' }
      ]
    },
    {
      id: 'accepted-certificates',
      title: 'Which certificates IRN accepts for naturalisation',
      content: [
        { kind: 'paragraph', text: 'Under art. 25 Decreto-Lei 237-A/2006 and IRN instructions, the following are accepted as proof of Portuguese knowledge:' },
        { kind: 'checklist', items: [
          '✅ **CIPLE** (A2), **DEPLE** (B1), **DIPLE** (B2), **DAPLE** (C1), **DUPLE** (C2) — CAPLE/Universidade de Lisboa exams',
          '✅ **PLA certificate** — Português Língua de Acolhimento, issued by a state school/Centro Qualifica stating level A2 or above',
          '✅ **Centros Qualifica certificate** — official document confirming the level under the CEFR',
          '✅ **PLNM school certificate** (Português Língua Não Materna) — if it states the achieved level A2+',
          '✅ **Certificate of completion of Portuguese school** (9th/12th year) — automatically considered C1',
          '✅ **Course/diploma from a university in Portuguese** — usually counts',
          '⚠️ A simple “attendance declaration” (declaração de frequência) for 150 hours WITHOUT level assessment is NOT accepted'
        ]}
      ]
    },
    {
      id: 'free-paid-courses',
      title: 'Free and paid (with grant) courses',
      content: [
        { kind: 'substeps', items: [
          { id: 'iefp', title: '1. IEFP — employment service: course + grant (for registered unemployed people)', content: [
            { kind: 'paragraph', text: 'IEFP (iefp.pt) organises Portuguese courses for residents. If you are registered as unemployed/a jobseeker — the course is free + a training grant.' },
            { kind: 'warning', text: 'Registration with IEFP imposes OBLIGATIONS: attending appointments, participating in active employment measures, accepting suitable job/internship offers. It is not suitable for those who are not genuinely looking for work — failure to attend may result in removal from the register and withdrawal of benefit.' },
            { kind: 'checklist', items: [
              'Register at the nearest Centro de Emprego (list on iefp.pt)',
              'Needed: NIF, NISS, residence permit, proof of address',
              'Format: group classes for 4–6 months',
              'Training grant: a percentage of IAS 2026 (€537.13) — usually 50–80% depending on the programme',
              'Meals: ~€6/day; transport reimbursed on actual costs',
              'On completion — certificate stating the level (A2/B1) — accepted by IRN'
            ]}
          ]},
          { id: 'pla', title: '2. PLA — Português Língua de Acolhimento (free)', content: [
            { kind: 'paragraph', text: 'State programme organised by AIMA + state schools / Centros Qualifica. Free for all foreigners with any status (including refugees).' },
            { kind: 'checklist', items: [
              '150 hours — the typical block covering A1 + A2 (but what matters is not the number of hours, but the final level assessment)',
              '300 hours — for level B2',
              'Register via the Centro Qualifica for your area of residence (qualifica.gov.pt) or AIMA',
              'Format: evening classes or weekend classes (2–3 times a week for 3 hours)',
              '🎓 On completion — Certificado PLA stating the final level (A2, B1, B2). Only a certificate WITH A2+ LEVEL is suitable for IRN',
              '⚠️ Ask BEFORE enrolling: “este curso emite certificado com nível A2 reconhecido pelo IRN para nacionalidade?”'
            ]}
          ]},
          { id: 'public-school', title: '3. State adult schools (Escola Secundária)', content: [
            { kind: 'paragraph', text: 'Many state Escolas Secundárias have evening PLNM (Português Língua Não Materna) courses.' },
            { kind: 'checklist', items: [
              'Enrolment through the school (matrícula) — usually ~€10–25 per semester',
              'The course is free (state education)',
              'Format: full classes with a teacher',
              'Schedule: September—June, 2–3 times a week',
              '🎓 IMPORTANT: ask whether the school issues a certificate with A2 level (and not just an attendance statement)',
              'List of schools with PLNM: on the municipality website in the Educação section'
            ]}
          ]},
          { id: 'junta', title: '4. Junta de Freguesia — informal courses', content: [
            { kind: 'paragraph', text: 'Some Junta de Freguesia organise free conversation courses with volunteers. They usually do NOT issue a certificate (not suitable for IRN), but they are excellent for speaking practice. Ask in your neighbourhood.' }
          ]},
          { id: 'online', title: '5. Online resources for self-study', content: [
            { kind: 'checklist', items: [
              'Practice Portuguese (practiceportuguese.com) — subscription ~€10/month, European Portuguese',
              'Portuguese With Carla (YouTube) — free lessons',
              'Mondly / Duolingo — basic level',
              'Tandem / HelloTalk — free practice with native speakers',
              'Audio: Said No One Ever Podcast, Portuguese Lab',
              '⚠️ Online courses do NOT provide a certificate recognised by IRN — you need the CIPLE exam or an official course'
            ]}
          ]},
          { id: 'private', title: '6. Private language schools', content: [
            { kind: 'paragraph', text: 'Only if you need maximum speed / an individual approach. From €300 for an intensive course; full A1→A2 course ~€700–1,200. CIAL, CLIC, Fast Forward. A private school certificate is usually NOT accepted by IRN — you need CIPLE or a state certificate.' }
          ]}
        ]}
      ]
    },
    {
      id: 'exam-structure',
      title: 'The CIPLE exam — if you go via CAPLE',
      content: [
        { kind: 'paragraph', text: 'CIPLE (Certificado Inicial de Português Língua Estrangeira) — A2-level exam from CAPLE (Universidade de Lisboa). Accepted by all Portuguese authorities.' },
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Reading + writing (75 min)', content: [
            { kind: 'paragraph', text: '4 texts with questions (multiple choice + short answers). A short piece of writing (70–90 words): an email, note, greeting/congratulation.' }
          ]},
          { id: 'e2', title: 'Listening (30 min)', content: [
            { kind: 'paragraph', text: '4 audio recordings: dialogue, announcement, instruction, conversation. Multiple-choice questions.' }
          ]},
          { id: 'e3', title: 'Speaking part (15 min)', content: [
            { kind: 'paragraph', text: 'Individually or in pairs. 3 tasks: self-introduction, role play, picture description/conversation.' }
          ]}
        ]},
        { kind: 'paragraph', text: 'Pass mark — 55% of the total score. The certificate is issued 6–8 weeks after the exam and is valid indefinitely.' }
      ]
    },
    {
      id: 'registration',
      title: 'Registration for CIPLE',
      content: [
        { kind: 'checklist', items: [
          '📅 2026 sessions: monthly national CIPLE-P sessions (Feb—Nov excluding August) + international sessions in May/July/November. Calendar at caple.letras.ulisboa.pt',
          '💻 Register online on the CAPLE website',
          '🏢 Centres in Portugal: Lisboa, Porto, Coimbra, Braga, Faro; abroad — Instituto Camões in capital cities',
          '💶 Cost: €85 for 2026 (up to €95 in international centres). Payment by card or via Multibanco link',
          '📧 Convocatória arrives one week beforehand',
          '📄 Results — in your CAPLE personal account after 6–8 weeks; the PDF certificate is downloaded there too'
        ]}
      ]
    },
    {
      id: 'preparation',
      title: 'How to prepare on your own',
      content: [
        { kind: 'checklist', items: [
          '📚 Textbooks: “Português XXI — Nível A2” (Lidel), “Passaporte Para Português A2” (Lidel), “Aprender Português” (Texto Editora)',
          '📝 Practice tests: CAPLE publishes Exemplos de Provas — 5 past sets free of charge',
          '🎧 Podcasts: “Practice Portuguese”, “Said No One Ever”, “Portuguesepod101”',
          '🎬 Series: RTP Play (free), Netflix PT with subtitles',
          '🗣️ Speaking practice: tandem partners, “café fala português” at Junta de Freguesia',
          '📅 100–150 hours of study is enough from a beginner level; if you have A1 — 50–80 hours'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'PLA (state courses)', amountEUR: 0 },
    { label: 'IEFP — course + grant for registered people', amountEUR: 0, note: '+ partial grant from IAS €537.13' },
    { label: 'State adult school — enrolment', amountEURMin: 10, amountEURMax: 25, note: '/semester' },
    { label: 'CIPLE exam', amountEUR: 85, note: 'CAPLE rate for 2026' },
    { label: 'Online subscription (practice)', amountEURMin: 0, amountEURMax: 15, note: '€/month' },
    { label: 'Private school (if needed quickly)', amountEURMin: 300, amountEURMax: 1200 }
  ],
  sources: [
    { title: 'IRN — Acquisition of Portuguese nationality', url: 'https://justica.gov.pt/Servicos/Pedir-a-nacionalidade-portuguesa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 237-A/2006 — Portuguese Nationality Regulation', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/237-a-2006-541731', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 37/81 — Nationality Law', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34448275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CAPLE — Centre for Assessment of Portuguese as a Foreign Language', url: 'https://caple.letras.ulisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IEFP — training courses', url: 'https://www.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Centros Qualifica', url: 'https://www.qualifica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'AIMA — Português Língua de Acolhimento (PLA)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
