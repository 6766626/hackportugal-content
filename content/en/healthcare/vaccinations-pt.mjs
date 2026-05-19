export default {
  editorialVoice: 'hackportugal',
  id: 'vaccinations-pt',
  categoryId: 'healthcare',
  title: 'Vaccinations in Portugal — PNV, children, adults, travel',
  tldr: 'PNV (Plano Nacional de Vacinação) is the national vaccination programme, free in the SNS for residents with a número de utente. PNV vaccinations in Portugal are recommended and free, but legally they are usually not mandatory; schools/doctors may request the boletim de vacinas and refer you for catch-up vaccination. Adults: Td/Tdap — booster vaccination against tetanus/diphtheria according to the PNV age schedule; Tdap especially during pregnancy. Flu annually in autumn/winter for groups defined by DGS in the current campanha sazonal (usually 60+, pregnant women, chronic illnesses, etc.), COVID booster according to the DGS seasonal campaign. Travel vaccines and prophylaxis: Hep A, typhoid, yellow fever, rabies, Japanese encephalitis — at Consulta do Viajante / Centro de Vacinação Internacional. Malaria — preventive tablets, not a vaccine.',
  tags: ['vaccines', 'pnv', 'sns', 'children', 'travel'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'pnv-overview',
      title: 'PNV — what is included',
      content: [
        { kind: 'paragraph', text: 'PNV (Plano Nacional de Vacinação) is the national vaccination schedule, approved and updated by DGS through standards and technical documents (Norma 018/2020 and subsequent updates). Check the current version on the DGS / SNS24 page.' },
        { kind: 'checklist', items: [
          '🆓 Free for everyone with a número de utente (SNS)',
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
              '0 months: Hep B dose 1. BCG — only for children in risk groups (since 2017 not universal, according to DGS criteria)',
              '2 months: hexavalent DTPaHibVIPVHB (6-in-1: diphtheria, tetanus, whooping cough, Hib, polio, Hep B) + PCV + MenB',
              '4 months: pentavalent DTPaHibVIP (5-in-1, WITHOUT the Hep B component) + PCV + MenB',
              '6 months: hexavalent DTPaHibVIPVHB (again with Hep B)',
              '12 months: PCV, MenACWY (replaced MenC from April 2025 by DGS decision), MenB (booster), MMR/VASPR dose 1'
            ]}
          ]},
          { id: 'c2', title: '1–5 years', content: [
            { kind: 'checklist', items: [
              '18 months: pentavalent DTPaHibVIP booster (WITHOUT Hep B — the Hep B component has already been completed by the 0/2/6-month schedule)',
              '5 years: DTPa-IPV booster + MMR/VASPR dose 2'
            ]}
          ]},
          { id: 'c3', title: 'Teenagers', content: [
            { kind: 'checklist', items: [
              '10 years: HPV for girls and boys under the PNV — protection against HPV-associated cancers and diseases. Check the current number of doses in e-Boletim/DGS',
              '10 years: Td (tetanus-diphtheria) — PNV booster',
              '10 years: MenACWY (booster; except where the child has already received MenACWY at 12 months under the updated PNV — then confirm through a doctor)',
              'Confirm the exact ages for teenage boosters in the current DGS PNV table'
            ]}
          ]}
        ]},
        { kind: 'warning', text: 'Some private schools require the boletim de vacinas on enrolment. In state schools, the health centre checks it and notifies you if the child is behind schedule.' }
      ]
    },
    {
      id: 'adults',
      title: 'Adults',
      content: [
        { kind: 'checklist', items: [
          '💉 Td/Tdap: booster vaccination against tetanus/diphtheria according to the adult PNV age schedule (usually Td at 25/45/65 and then more often after 65). Tdap especially during pregnancy and for specific indications. Check e-Boletim or ask at the health centre',
          '💉 Flu: annually in the DGS seasonal campaign — usually free/recommended for 60+, pregnant women, people with chronic conditions/risk groups and healthcare workers. The exact conditions (SNS / pharmacies) change by season, and the price of a paid vaccine depends on the pharmacy/clinic',
          '💉 COVID booster: according to the current DGS seasonal campaign, usually for older people, immunocompromised people, risk groups, pregnant women and health/social care workers. The age threshold changes by season',
          '💉 Hep B: if you did not receive it in childhood (before 1995 — it was not in the PNV). 0/1/6-month series',
          '💉 MMR: if you do not have 2 doses (check your boletim de vacinas)',
          '💉 Shingles: recommended for 60+, not included in the PNV (paid, €150–200/dose)',
          '💉 HPV for adults: possible outside the PNV on prescription by a doctor; age, number of doses and price depend on the product and medical history. For those not covered by the PNV — usually paid',
          '💉 Pneumococcus: for older people and certain risk groups. The specific sequence of products (conjugate / PPSV23) and conditions for free vaccination depend on DGS standards and a doctor’s prescription — ask at the health centre'
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
              'Consulta do Viajante / Centros de Vacinação Internacional (CVI) — list and contacts on SNS24/DGS. Availability, booking and fees depend on the specific unit',
              'Private clinics: Lusíadas, CUF, Luz and others — travel medicine departments',
              'Yellow fever — only at authorised Centros de Vacinação Internacional, which issue the International Certificate. The list of locations is on the official SNS24/DGS website',
              'Booking: via SNS24 information pages, the SNS 24 line — 808 24 24 24, or directly with the chosen Consulta do Viajante / CVI'
            ]}
          ]},
          { id: 't2', title: '💉 Popular ones for tourists', content: [
            { kind: 'checklist', items: [
              'Yellow fever: 1 dose usually for life; it must be administered/registered at an authorised CVI to obtain the International Certificate. The price varies by centre — check the official fee',
              'Hepatitis A: for India, Africa, South America — usually 2 doses',
              'Typhoid: India, Asia, Africa — protection for about 3 years',
              'Japanese encephalitis: rural Asia — 2-dose series',
              'Rabies: for people working with animals, long treks — 3-dose series',
              'Malaria: not a vaccine — preventive tablets (doxycycline, Malarone) as prescribed by a doctor'
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
          'Boletim de Vacinas is available electronically through SNS 24 / Área do Cidadão; paper records and foreign/private vaccinations need to be taken to the health centre for registration',
          'Access: SNS 24 → Área Reservada → Vacinas',
          'Vaccination history from birth (if done in the SNS)',
          'PDF for school / visa / work',
          'If you had vaccinations abroad — bring your vaccination passport to the health centre, and the data will be transferred'
        ]}
      ]
    },
    {
      id: 'newcomers',
      title: 'New arrivals — what to do',
      content: [
        { kind: 'checklist', items: [
          '📋 Bring the boletim de vacinas from your home country (a translation is desirable, but often a Portuguese doctor can understand Latin-script entries)',
          '🏥 At your first visit to the health centre — request registration of the vaccines in the Portuguese system',
          '🔍 The family doctor will check whether the vaccinations are up to date according to the PNV; missing ones can be caught up free of charge at the Centro de Saúde',
          '💉 Missing vaccinations are given free of charge (if you have a número de utente)',
          '🚸 Children: the school may ask for the boletim de vacinas and refer the family to the health centre. Since PNV vaccines are usually not legally mandatory, an absent/incomplete boletim should generally not, by itself, prevent enrolment in a state school — check separately with the school and the health centre. Missing vaccinations will start to be caught up according to the catch-up schedule; some can be done in one visit, but multi-dose series require intervals',
          '🇧🇷 Brazilians: the PNV and the Brazilian calendário nacional are very similar, but there are differences — the MMR schedule is different',
          '🇷🇺 Russian speakers: many childhood schedules differ — the pneumococcal conjugate vaccine and MenB may differ from the schedule in your home country. The health centre will assess the age-appropriate catch-up and eligibility for free doses'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'PNV vaccines in the SNS', amountEUR: 0, note: 'for utente' },
    { label: 'Flu outside the free DGS campaign groups', amountEURMin: 15, amountEURMax: 25, note: 'the price in the pharmacy/clinic varies; for groups eligible under the DGS seasonal campaign — free' },
    { label: 'Yellow fever (at an authorised CVI)', amountEURMin: 40, amountEURMax: 80, note: 'the price depends on the centre; includes the certificate' },
    { label: 'HPV (adults)', amountEURMin: 150, amountEURMax: 200, note: 'per dose; the number of doses depends on the product and medical history' },
    { label: 'Consulta do Viajante', amountEURMin: 0, amountEURMax: 60, note: 'the fee depends on the public/private provider' }
  ],
  sources: [
    { title: 'DGS — Programa Nacional de Vacinação (Norma 018/2020 and updates)', url: 'https://www.dgs.pt/normas-orientacoes-e-informacoes/normas-e-circulares-normativas.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS24 — Vaccination', url: 'https://www.sns24.gov.pt/tema/vacinacao/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS24 — Consulta do Viajante and Centros de Vacinação Internacional', url: 'https://www.sns24.gov.pt/tema/vacinacao/consulta-do-viajante/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
