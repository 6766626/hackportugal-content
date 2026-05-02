export default {
  editorialVoice: 'hackportugal',
  id: 'vaccinations-pt',
  categoryId: 'healthcare',
  title: 'Vaccinations in Portugal — PNV, children, adults, travel',
  tldr: 'PNV (Plano Nacional de Vacinação) is the national vaccination programme, free in the SNS for residents with a número utente. PNV vaccinations in Portugal are **recommended and free**, but are not legally mandatory; in practice, schools ask for a boletim de vacinas at enrolment. Adults: Td (tetanus-diphtheria) — boosters according to the DGS schedule (usually a 10-year interval, with shorter intervals at older ages), flu annually for **60+**, pregnant people and risk groups, COVID booster as recommended by DGS. Travel medicine (hepatitis A, yellow fever, Japanese encephalitis) — at CINAP/Centro de Vacinação Internacional. Malaria is preventive tablets, not a vaccine.',
  tags: ['vaccines', 'pnv', 'sns', 'children', 'travel'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'pnv-overview',
      title: 'PNV — what is included',
      content: [
        { kind: 'paragraph', text: 'PNV (Plano Nacional de Vacinação) is the national vaccination schedule, approved annually by DGS. The latest version is 2024.' },
        { kind: 'checklist', items: [
          '🆓 Free for everyone with a número utente (SNS)',
          '💊 Given at the health centre for your place of residence (Centro de Saúde)',
          '📱 Tracking: e-Boletim de Vacinas in the SNS 24 app',
          '🗓️ PNV covers children (0–18) + teenagers (HPV) + adults (boosters)',
          '⚠️ Private clinics — the same vaccines for a fee, €20–80 per visit'
        ]}
      ]
    },
    {
      id: 'children',
      title: 'Children — recommended PNV vaccinations (free)',
      content: [
        { kind: 'substeps', items: [
          { id: 'c1', title: 'Under one year', content: [
            { kind: 'checklist', items: [
              '0 months: BCG (tuberculosis), Hep B dose 1',
              '2 months: DTaP-HBV-Hib-IPV (6-in-1), Prevnar 13 (pneumococcus), MenB',
              '4 months: repeat 6-in-1 + Prevnar 13 + MenB + rotavirus',
              '6 months: Hep B, MenB',
              '12 months: Prevnar 13, MenC, MMR (measles-mumps-rubella), chickenpox'
            ]}
          ]},
          { id: 'c2', title: '1–5 years', content: [
            { kind: 'checklist', items: [
              '18 months: DTaP-HBV-Hib-IPV (booster), MMR 2, chickenpox 2',
              '5 years: DTaP-IPV (booster)'
            ]}
          ]},
          { id: 'c3', title: 'Teenagers', content: [
            { kind: 'checklist', items: [
              '10 years (girls): HPV — protection against cervical cancer',
              '10 years (boys): since 2020 also HPV',
              '14 years: Tdap (tetanus-diphtheria-pertussis, booster)',
              '18 years: MenACWY (meningococcus)'
            ]}
          ]}
        ]},
        { kind: 'warning', text: 'Some private schools require a boletim de vacinas at enrolment. In state schools, the health centre checks it and notifies you if the child is behind schedule.' }
      ]
    },
    {
      id: 'adults',
      title: 'Adults',
      content: [
        { kind: 'checklist', items: [
          '💉 **Td** (tetanus-diphtheria): boosters according to the DGS schedule — usually a 10-year interval; at older ages schedules may become more frequent. Tdap (with pertussis) — for pregnant people and in specific situations',
          '💉 **Flu**: annually from October — free for **60+**, pregnant people, medical risk groups. For everyone else — paid, €15–25',
          '💉 **COVID booster**: as recommended by DGS. Current priority groups — 65+, immunocompromised people, risk groups; DGS updates the schedule annually',
          '💉 **Hep B**: if you did not receive it in childhood (before 1995 — it was not in the PNV). 0/1/6 month series',
          '💉 **MMR**: if you do not have 2 doses (check your boletim de vacinas)',
          '💉 **Shingles**: recommended for 60+, not included in the PNV (paid, €150–200/dose)',
          '💉 **HPV for adults**: available up to age 45 privately (3 doses × €180)',
          '💉 **Pneumococcus PPSV23**: for 65+ or with chronic illnesses'
        ]}
      ]
    },
    {
      id: 'travel-vaccines',
      title: 'Travel — vaccinations for trips',
      content: [
        { kind: 'paragraph', text: 'Vaccinations before travelling to the tropics / Asia / Africa.' },
        { kind: 'substeps', items: [
          { id: 't1', title: '🏥 Where to get them', content: [
            { kind: 'checklist', items: [
              '**CINAP** (Consulta de Medicina do Viajante) — public consultations in Lisboa, Porto, Coimbra. By appointment, free consultation + paid vaccines',
              '**Lusíadas, CUF, Luz clinics** — travel medicine department',
              '**SNS** — the yellow fever vaccine is given only at specialised centres (Lisboa Hospital CUF Infante Santo, Porto Hospital de São João)',
              '**CINAP appointment**: portaldasaude.pt or tel. 808 24 24 24'
            ]}
          ]},
          { id: 't2', title: '💉 Popular ones for tourists', content: [
            { kind: 'checklist', items: [
              '**Yellow fever** — 1 dose = lifelong, required for several countries in Africa and South America. €40–60 + certificate',
              '**Hepatitis A**: for India, Africa, South America — €40–60 × 2 doses',
              '**Typhoid**: India, Asia, Africa — €30–40, 3 years',
              '**Japanese encephalitis**: rural Asia — €120 × 2 doses',
              '**Rabies**: for people working with animals, long treks — €60 × 3 doses',
              '**Malaria**: not a vaccine, prevention with tablets (doxycycline, Malarone) — €30–100/course'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'boletim',
      title: 'Boletim de Vacinas (electronic)',
      content: [
        { kind: 'checklist', items: [
          'Since 2015, the boletim de vacinas has been electronic in the SNS 24 app',
          'Access: SNS 24 → Área Reservada → Vacinas',
          'Vaccination history from birth (if done in the SNS)',
          'PDF for school / visa / work',
          'If you were vaccinated abroad — bring your vaccination passport to the health centre; the data will be transferred'
        ]}
      ]
    },
    {
      id: 'newcomers',
      title: 'New arrivals — what to do',
      content: [
        { kind: 'checklist', items: [
          '📋 Bring your boletim de vacinas from your home country (a translation is desirable, but often the Portuguese doctor can understand the Latin alphabet)',
          '🏥 At your first visit to the health centre — request registration of your vaccines in the Portuguese system',
          '🔍 The family doctor will check whether your vaccinations are up to date according to the PNV; missing ones can be caught up free of charge at the Centro de Saúde',
          '💉 Missing vaccinations are given free of charge (if you have a número utente)',
          '🚸 Children: a boletim de vacinas is required when enrolling at school; without it the school may refuse (but missing PNV vaccines can be caught up in one visit)',
          '🇧🇷 Brazilians: the PNV and the Brazilian national calendar are very similar, but there are differences — the MMR schedule is different',
          '🇷🇺 Russian speakers: many childhood schedules differ — pneumococcus (Prevnar 13) and MenB were often not given — they will be caught up in Portugal'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'PNV vaccines in the SNS', amountEUR: 0, note: 'for utente' },
    { label: 'Flu vaccine privately', amountEURMin: 15, amountEURMax: 25 },
    { label: 'Yellow fever', amountEURMin: 40, amountEURMax: 60 },
    { label: 'HPV (adults, 3 doses)', amountEUR: 540 },
    { label: 'CINAP travel consultation', amountEURMin: 0, amountEURMax: 30 }
  ],
  sources: [
    { title: 'DGS — Plano Nacional de Vacinação', url: 'https://www.dgs.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'SNS — Vaccination', url: 'https://www.sns24.gov.pt/tema/vacinacao/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'CINAP — Travel Medicine', url: 'https://www.sns.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
