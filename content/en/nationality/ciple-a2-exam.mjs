export default {
  editorialVoice: 'hackportugal',
  id: 'ciple-a2-exam',
  categoryId: 'nationality',
  title: 'Portuguese A2 — free courses, school programmes and the CIPLE exam',
  tldr: 'An A2-level certificate is needed only for naturalisation by residence (under current Lei 37/81 — 5 years; changes approved by Parliament on 01.04.2026, to 7 years for CPLP/EU and 10 years for others, are NOT promulgated and NOT in force as of 03.05.2026). For marriage, união de facto, Reagrupamento Familiar — NOT needed. IMPORTANT: for naturalisation IRN accepts only an official A2+ level certificate (CIPLE / PLA / Centros Qualifica / DEPLE / DAPLE) — a simple attendance note for 150 hours WITHOUT a level assessment is NOT accepted. Cheapest routes: PLA (€0), IEFP (€0 + allowance, but with obligations as an unemployed jobseeker), state schools for adults ~€20 per term. CIPLE exam — €85 (2026), monthly sessions.',
  audience: { citizenships: ['thirdCountry', 'euEeaSwiss'] },
  tags: ['ciple', 'a2', 'language', 'exam', 'pla'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'when-needed',
      title: 'When a certificate is required and when it is not',
      content: [
        { kind: 'paragraph', text: 'A2 level Portuguese is required only in a few cases:' },
        { kind: 'checklist', items: [
          '✅ **Naturalisation by residence** (art. 6 Lei 37/81 + art. 25 Decreto-Lei 237-A/2006): currently — after 5 years. Changes to 7 years for CPLP/EU and 10 years for others were approved by Parliament on 01.04.2026, but as of 03.05.2026 are not yet promulgated — the old rules apply',
          '✅ For entry into a range of IEFP programmes, state colleges and Centros Qualifica'
        ]},
        { kind: 'paragraph', text: 'When a certificate is NOT required:' },
        { kind: 'checklist', items: [
          '❌ Citizenship by marriage / união de facto — Lei 37/81 does not require language (only «effective ties»)',
          '❌ Citizenship by origin (Portuguese grandparent) — not required',
          '❌ Family reunification (Reagrupamento Familiar) — AIMA does not ask for language',
          '❌ Renewal of a residence permit — AIMA does not require it',
          '❌ **Citizens of countries with Portuguese as an official language** (Brazil, Angola, Cabo Verde, Mozambique, Guinea-Bissau, São Tomé, East Timor, Equatorial Guinea): under the rules of the Regulamento da Nacionalidade knowledge of the language is presumed. Check your specific case with IRN'
        ]},
        { kind: 'warning', text: 'When applying for citizenship IRN accepts only an OFFICIAL certificate stating a specific level A2 or higher. An attendance declaration (declaração de frequência) without a level assessment is NOT acceptable.' }
      ]
    },
    {
      id: 'accepted-certificates',
      title: 'Which certificates IRN accepts for naturalisation',
      content: [
        { kind: 'paragraph', text: 'Under art. 25 Decreto-Lei 237-A/2006 and IRN guidance, the following are accepted as proof of Portuguese:' },
        { kind: 'checklist', items: [
          '✅ **CIPLE** (A2), **DEPLE** (B1), **DIPLE** (B2), **DAPLE** (C1), **DUPLE** (C2) — CAPLE/Universidade de Lisboa exams',
          '✅ **PLA certificate** — Português Língua de Acolhimento, issued by a state school/Centro Qualifica stating level A2 or higher',
          '✅ **Centros Qualifica certificate** — an official document confirming the CEFR level',
          '✅ **PLNM school certificate** (Português Língua Não Materna) — if it states the achieved level A2+',
          '✅ **Portuguese school leaving certificate** (9th/12th grade) — automatically considered C1',
          '✅ **University course/diploma in Portuguese** — usually accepted',
          '⚠️ A simple «declaration of attendance» (declaração de frequência) for 150 hours WITHOUT a level assessment — NOT accepted'
        ]}
      ]
    },
    {
      id: 'free-paid-courses',
      title: 'Free and paid (with allowance) courses',
      content: [
        { kind: 'substeps', items: [
          { id: 'iefp', title: '1. IEFP — job centre: course + allowance (for registered unemployed)', content: [
            { kind: 'paragraph', text: 'IEFP (iefp.pt) organises Portuguese courses for residents. If you are registered as unemployed/seeking work — the course is free + a training allowance.' },
            { kind: 'warning', text: 'Registering with IEFP imposes OBLIGATIONS: attend when called, take part in active employment measures, accept suitable job/internship offers. Not suitable for those who are not genuinely seeking work — failure to attend may lead to deregistration and withdrawal of benefits.' },
            { kind: 'checklist', items: [
              'Register at the nearest Centro de Emprego (list on iefp.pt)',
              'Required: NIF, NISS, residence permit, proof of address',
              'Format: group classes for 4–6 months',
              'Training allowance: a percentage of IAS 2026 (€537.13) — typically 50–80% depending on the programme',
              'Meals: ~€6/day; transport according to actual costs',
              'Upon completion — a certificate stating the level (A2/B1) — accepted by IRN'
            ]}
          ]},
          { id: 'pla', title: '2. PLA — Português Língua de Acolhimento (free)', content: [
            { kind: 'paragraph', text: 'State programme organised by AIMA + state schools / Centros Qualifica. Free for all foreigners with any status (incl. refugees).' },
            { kind: 'checklist', items: [
              '150 hours — a typical block covering A1 + A2 (but it is not the number of hours that matters, it is the final level assessment)',
              '300 hours — for level B2',
              'Register via your local Centro Qualifica (qualifica.gov.pt) or AIMA',
              'Format: evening or weekend classes (2–3 times a week for 3 hours)',
              '🎓 Upon completion — Certificado PLA stating the final level (A2, B1, B2). Only a certificate WITH LEVEL A2+ is valid for IRN',
              '⚠️ Ask BEFORE enrolling: «este curso emite certificado com nível A2 reconhecido pelo IRN para nacionalidade?»'
            ]}
          ]},
          { id: 'public-school', title: '3. State schools for adults (Escola Secundária)', content: [
            { kind: 'paragraph', text: 'Many state Escolas Secundárias run evening PLNM (Português Língua Não Materna) courses.' },
            { kind: 'checklist', items: [
              'Enrol through the school (matrícula) — typically ~€10–25 per term',
              'The course is free (state education)',
              'Format: full lessons with a teacher',
              'Schedule: September–June, 2–3 times a week',
              '🎓 IMPORTANT: ask whether the school issues a certificate with level A2 (and not just an attendance note)',
              'List of schools with PLNM: on the municipality website under Educação'
            ]}
          ]},
          { id: 'junta', title: '4. Junta de Freguesia — informal courses', content: [
            { kind: 'paragraph', text: 'Some Juntas de Freguesia organise free conversation courses with volunteers. Certificates are usually NOT issued (not valid for IRN), but they are excellent for speaking practice. Ask in your area.' }
          ]},
          { id: 'online', title: '5. Online resources for self-study', content: [
            { kind: 'checklist', items: [
              'Practice Portuguese (practiceportuguese.com) — subscription ~€10/month, European Portuguese',
              'Portuguese With Carla (YouTube) — free lessons',
              'Mondly / Duolingo — basic level',
              'Tandem / HelloTalk — practice with native speakers for free',
              'Audio: Said No One Ever Podcast, Portuguese Lab',
              '⚠️ Online courses do NOT provide an IRN-recognised certificate — you need the CIPLE exam or an official course'
            ]}
          ]},
          { id: 'private', title: '6. Private language schools', content: [
            { kind: 'paragraph', text: 'Only if you need maximum speed / an individual approach. From €300 for an intensive; full A1→A2 ~€700–1200. CIAL, CLIC, Fast Forward. IRN usually does NOT accept a private school certificate — you need CIPLE or a state certificate.' }
          ]}
        ]}
      ]
    },
    {
      id: 'exam-structure',
      title: 'CIPLE exam — if you go via CAPLE',
      content: [
        { kind: 'paragraph', text: 'CIPLE (Certificado Inicial de Português Língua Estrangeira) — an A2 level exam from CAPLE (Universidade de Lisboa). Accepted by all authorities in Portugal.' },
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Reading + writing (75 min)', content: [
            { kind: 'paragraph', text: '4 texts with questions (multiple choice + short answers). A short piece of writing (70–90 words): an email, a note, a congratulatory message.' }
          ]},
          { id: 'e2', title: 'Listening (30 min)', content: [
            { kind: 'paragraph', text: '4 audio clips: a dialogue, an announcement, instructions, a conversation. Multiple-choice questions.' }
          ]},
          { id: 'e3', title: 'Speaking (15 min)', content: [
            { kind: 'paragraph', text: 'Individually or in pairs. 3 tasks: self-introduction, role-play, picture description/conversation.' }
          ]}
        ]},
        { kind: 'paragraph', text: 'Pass mark — 55% of the total score. The certificate is issued 6–8 weeks after the exam and is valid indefinitely.' }
      ]
    },
    {
      id: 'registration',
      title: 'Registering for CIPLE',
      content: [
        { kind: 'checklist', items: [
          '📅 2026 sessions: monthly national CIPLE-P (Feb—Nov excluding August) + international in May/July/November. Calendar at caple.letras.ulisboa.pt',
          '💻 Online registration on the CAPLE website',
          '🏢 Centres in Portugal: Lisboa, Porto, Coimbra, Braga, Faro; abroad — Instituto Camões in capital cities',
          '💶 Cost: €85 in 2026 (up to €95 in international centres). Payment by card or via Multibanco reference',
          '📧 Convocatória arrives a week in advance',
          '📄 Results — in your CAPLE account within 6–8 weeks; the PDF certificate can be downloaded there'
        ]}
      ]
    },
    {
      id: 'preparation',
      title: 'How to prepare by yourself',
      content: [
        { kind: 'checklist', items: [
          '📚 Textbooks: «Português XXI — Nível A2» (Lidel), «Passaporte Para Português A2» (Lidel), «Aprender Português» (Texto Editora)',
          '📝 Practice tests: CAPLE publishes Exemplos de Provas — 5 past sets for free',
          '🎧 Podcasts: «Practice Portuguese», «Said No One Ever», «Portuguesepod101»',
          '🎬 Series: RTP Play (free), Netflix PT with subtitles',
          '🗣️ Speaking practice: tandem partners, «café fala português» in the Junta de Freguesia',
          '📅 100–150 hours of study are enough at beginner level; if you already have A1 — 50–80 hours'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'PLA (state courses)', amountEUR: 0 },
    { label: 'IEFP — course + allowance for registered', amountEUR: 0, note: '+ partial allowance from IAS €537.13' },
    { label: 'State school for adults — enrolment', amountEURMin: 10, amountEURMax: 25, note: '/term' },
    { label: 'CIPLE exam', amountEUR: 85, note: 'CAPLE tariff for 2026' },
    { label: 'Online subscription (practice)', amountEURMin: 0, amountEURMax: 15, note: '€/month' },
    { label: 'Private school (if you need speed)', amountEURMin: 300, amountEURMax: 1200 }
  ],
  sources: [
    { title: 'IRN — Acquisition of Portuguese nationality', url: 'https://justica.gov.pt/Servicos/Pedir-a-nacionalidade-portuguesa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decree-Law 237-A/2006 — Regulation of Portuguese Nationality', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/237-a-2006-541731', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Law 37/81 — Nationality Law', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34448275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CAPLE — Assessment Centre for Portuguese as a Foreign Language', url: 'https://caple.letras.ulisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IEFP — training courses', url: 'https://www.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Qualifica Centres', url: 'https://www.qualifica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'AIMA — Portuguese as a Host Language (PLA)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}
