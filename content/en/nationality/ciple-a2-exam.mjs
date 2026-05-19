export default {
  editorialVoice: 'hackportugal',
  id: 'ciple-a2-exam',
  categoryId: 'nationality',
  title: 'Portuguese A2 — free courses, school programmes and the CIPLE exam',
  tldr: 'An A2-level certificate is only needed for naturalisation by residence (under the current Lei 37/81 — 5 years; on 03.05.2026 President Seguro promulgated Decreto AR 48/XVII — after publication in the DRE, the period will increase to 7 years for CPLP/EU and 10 years for others, plus a mandatory test on knowledge of Portuguese culture, rights and the structure of the state will be introduced). For marriage, união de facto, Reagrupamento Familiar — it is NOT needed.\n\nIMPORTANT: for naturalisation, IRN accepts only an official A2+ level certificate (CIPLE / PLA / Centros Qualifica / DEPLE / DAPLE) — a simple attendance statement for 150 course hours WITHOUT a level assessment is NOT accepted. The cheapest routes: PLA (€0), IEFP (€0 + training allowance, but with obligations as an unemployed person), state adult schools ~€20/semester. CIPLE exam — €85 (2026), monthly sessions.',
  audience: { citizenships: ['thirdCountry', 'euEeaSwiss'] },
  tags: ['ciple', 'a2', 'language', 'exam', 'pla'],
  estimatedReadMinutes: 7,
  steps: [
    {
      id: 'when-needed',
      title: 'When the certificate is needed, and when it is not',
      content: [
        { kind: 'paragraph', text: 'Portuguese A2 level is needed only in a few cases:' },
        { kind: 'checklist', items: [
          '✅ Naturalisation by residence (art. 6 Lei 37/81 + art. 25 Decreto-Lei 237-A/2006): under current law — after 5 years. On 03.05.2026 President Seguro promulgated Decreto AR 48/XVII — after publication in the DRE: 7 years for CPLP/EU, 10 years for others, plus a mandatory test on knowledge of Portuguese culture, rights and the structure of the state. Until publication in the DRE, the old rules apply',
          '✅ For admission to a number of IEFP programmes, state colleges and Centros Qualifica'
        ]},
        { kind: 'paragraph', text: 'When a CIPLE certificate is NOT required:' },
        { kind: 'checklist', items: [
          '❌ Citizenship by marriage / união de facto — Lei 37/81 does not require language (only “effective ties”)',
          '⚠️ Citizenship by descent — grandchildren/great-grandchildren of Portuguese nationals (Lei 37/81 art. 1(1)(d) and art. 1(1)(e)): the law requires “sufficient knowledge of the Portuguese language”, not specifically A2. A CIPLE A2 certificate or equivalent is the most reliable way to prove it; in disputed cases, IRN may also accept an interview, school documents from a Portuguese-speaking country, CPLP documents, etc. Children of Portuguese nationals (art. 1(1)(c)) — usually without a language requirement',
          '❌ Family reunification (Reagrupamento Familiar) — AIMA does not ask for language',
          '❌ Residence permit renewal — AIMA does not require it',
          '❌ Citizens of countries with Portuguese as an official language (Brazil, Angola, Cape Verde, Mozambique, Guinea-Bissau, São Tomé, East Timor, Equatorial Guinea): under the Regulamento da Nacionalidade rules, knowledge of the language is presumed. Check your specific case with IRN'
        ]},
        { kind: 'warning', text: 'When applying for naturalisation by residence (art. 6), IRN accepts only an OFFICIAL certificate stating the specific A2 level or higher. A course attendance statement (frequência) without a level assessment is NOT suitable. For grandchildren/great-grandchildren (art. 1(1)(d/e)), the range of acceptable evidence is broader — check with IRN if CIPLE is unavailable.' }
      ]
    },
    {
      id: 'accepted-certificates',
      title: 'Which certificates IRN accepts for naturalisation',
      content: [
        { kind: 'paragraph', text: 'Under art. 25 Decreto-Lei 237-A/2006 and IRN instructions, the following are accepted to prove knowledge of Portuguese:' },
        { kind: 'checklist', items: [
          '✅ CIPLE (A2), DEPLE (B1), DIPLE (B2), DAPLE (C1), DUPLE (C2) — CAPLE/Universidade de Lisboa exams',
          '✅ PLA certificate — Português Língua de Acolhimento, issued by a state school/Centro Qualifica stating level A2 or higher',
          '✅ Centros Qualifica certificate — an official document confirming the level under the CEFR',
          '✅ PLNM school certificate (Português Língua Não Materna) — if it states the A2+ level achieved',
          '✅ Certificate of completion of Portuguese school (9th/12th year) — automatically considered C1',
          '✅ Course/degree from a university in Portuguese — usually counted',
          '⚠️ A simple “attendance declaration” (declaração de frequência) for 150 hours WITHOUT a level assessment — is NOT accepted'
        ]}
      ]
    },
    {
      id: 'free-paid-courses',
      title: 'Free and paid (with allowance) courses',
      content: [
        { kind: 'substeps', items: [
          { id: 'iefp', title: '1. IEFP — job centre: course + allowance (for registered unemployed people)', content: [
            { kind: 'paragraph', text: 'IEFP (iefp.pt) organises Portuguese courses for residents. If you are registered as unemployed/seeking work — the course is free + a training allowance.' },
            { kind: 'warning', text: 'Registration with IEFP imposes OBLIGATIONS: attending summonses, taking part in active employment measures, accepting suitable job/internship offers. It is not suitable for those who are not genuinely looking for work — failure to attend may result in deregistration and withdrawal of benefits.' },
            { kind: 'checklist', items: [
              'Register at the nearest Centro de Emprego (list on iefp.pt)',
              'Needed: NIF, NISS, residence permit, proof of address',
              'Format: group classes for 4–6 months',
              'Possible apoios sociais: bolsa de formação, meals, transport. The amount and entitlement to payment depend on the programme, unemployment status and other benefits — check with IEFP. For reference: IAS 2026 = €537.13',
              'Subsídio de alimentação may be paid for actual training days if the programme and timetable give entitlement to it',
              'On completion — a certificate stating the level (A2/B1) — accepted by IRN'
            ]}
          ]},
          { id: 'pla', title: '2. PLA — Português Língua de Acolhimento (usually free)', content: [
            { kind: 'paragraph', text: 'A state programme organised by AIMA together with schools / Centros Qualifica. PLA is usually free for adult migrants, including applicants for and beneficiaries of international protection, but enrolment depends on places, level, age and the requirements of the specific Centro Qualifica / school / IEFP. Check the documents when enrolling.' },
            { kind: 'checklist', items: [
              '150 hours — a typical block covering A1 + A2 (but what matters is not the number of hours, but the final level assessment)',
              'Higher levels are organised in separate modules; duration and final level depend on the programme and provider',
              'Register via the Centro Qualifica for your place of residence (qualifica.gov.pt) or AIMA',
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
              'Timetable: September—June, 2–3 times a week',
              '🎓 IMPORTANT: ask whether the school issues a certificate with A2 level (and not just an attendance statement)',
              'List of schools with PLNM: on the municipality website in the Educação section'
            ]}
          ]},
          { id: 'junta', title: '4. Junta de Freguesia — informal courses', content: [
            { kind: 'paragraph', text: 'Some Junta de Freguesia organise free conversation courses with volunteers. They usually do NOT issue a certificate (not suitable for IRN), but they are excellent for speaking practice. Ask in your area.' }
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
            { kind: 'paragraph', text: 'Only if you need maximum speed / an individual approach. From €300 for an intensive; full A1→A2 course ~€700–1200. CIAL, CLIC, Fast Forward. IRN usually does NOT accept a private school certificate — CIPLE or a state certificate is needed.' }
          ]}
        ]}
      ]
    },
    {
      id: 'exam-structure',
      title: 'CIPLE exam — if you go through CAPLE',
      content: [
        { kind: 'paragraph', text: 'CIPLE (Certificado Inicial de Português Língua Estrangeira) — A2-level exam from CAPLE (Universidade de Lisboa). Accepted by all Portuguese authorities.' },
        { kind: 'substeps', items: [
          { id: 'e1', title: 'Reading + writing (75 min)', content: [
            { kind: 'paragraph', text: '4 texts with questions (multiple choice + short answers). Short written text (70–90 words): email, note, greeting/congratulations.' }
          ]},
          { id: 'e2', title: 'Listening (30 min)', content: [
            { kind: 'paragraph', text: '4 audio recordings: dialogue, announcement, instruction, conversation. Multiple-choice questions.' }
          ]},
          { id: 'e3', title: 'Speaking part (15 min)', content: [
            { kind: 'paragraph', text: 'Individually or in pairs. 3 tasks: self-introduction, role play, describing a picture/conversation.' }
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
          '📅 2026 sessions: monthly national CIPLE-P (Feb—Nov excluding August) + international sessions in May/July/November. Calendar on caple.letras.ulisboa.pt',
          '💻 Online registration on the CAPLE website',
          '🏢 Centres in Portugal and abroad change by session — check the list of centros de exame on the CAPLE website before registering',
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
          '📝 Practice tests: CAPLE publishes exemplos/modelos de prova for CIPLE; the number of available materials changes — check the CAPLE page',
          '🎧 Podcasts: “Practice Portuguese”, “Said No One Ever”, “Portuguesepod101”',
          '🎬 Series: RTP Play (free), Netflix PT with subtitles',
          '🗣️ Speaking practice: tandem partners, “café fala português” at Junta de Freguesia',
          '📅 100–150 hours of classes are enough from beginner level; if you have A1 — 50–80 hours'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'PLA (state courses)', amountEUR: 0 },
    { label: 'IEFP — course + allowance for registered people', amountEUR: 0, note: '+ partial allowance from IAS €537.13' },
    { label: 'State adult school — enrolment', amountEURMin: 10, amountEURMax: 25, note: '/semester' },
    { label: 'CIPLE exam', amountEUR: 85, note: 'CAPLE tariff for 2026' },
    { label: 'Online subscription (practice)', amountEURMin: 0, amountEURMax: 15, note: '€/month' },
    { label: 'Private school (if you need it quickly)', amountEURMin: 300, amountEURMax: 1200 }
  ],
  sources: [
    { title: 'IRN — Acquisition of Portuguese nationality', url: 'https://justica.gov.pt/Servicos/Pedir-a-nacionalidade-portuguesa', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 237-A/2006 — Regulamento da Nacionalidade Portuguesa', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/237-a-2006-541731', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 37/81 — Lei da Nacionalidade', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/1981-34448275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'CAPLE — Centre for Evaluation of Portuguese as a Foreign Language', url: 'https://caple.letras.ulisboa.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IEFP — training courses', url: 'https://www.iefp.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Centros Qualifica', url: 'https://www.qualifica.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'AIMA — Português Língua de Acolhimento (PLA)', url: 'https://aima.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Presidência da República — Promulgation of Decreto AR 48/XVII (Lei da Nacionalidade)', url: 'https://www.presidencia.pt/atualidade/toda-a-atualidade/2026/05/presidente-da-republica-promulga-decreto-da-assembleia-da-republica/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
