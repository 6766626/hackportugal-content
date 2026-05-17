export default {
  editorialVoice: 'hackportugal',
  id: 'vaccinations-pt',
  categoryId: 'healthcare',
  title: 'Vaccinations in Portugal — PNV, children, adults, travel',
  tldr: 'PNV (Plano Nacional de Vacinação) is the state vaccination programme, free in the SNS for residents with a número utente. PNV vaccinations in Portugal are **recommended and free**, but legally they are usually not mandatory; schools/doctors may request the boletim de vacinas and refer you for catch-up vaccination. Adults: Td/Tdap — booster against tetanus/diphtheria according to the PNV age schedule; Tdap especially during pregnancy. Flu annually in autumn/winter for groups defined by DGS in the current campanha sazonal (usually 60+, pregnant women, chronic conditions, etc.), COVID booster according to the DGS seasonal campaign. Travel vaccines and prophylaxis: Hep A, typhoid, yellow fever, rabies, Japanese encephalitis — at Consulta do Viajante / Centro de Vacinação Internacional. Malaria — preventive tablets, not a vaccine.',
  tags: ['vaccines', 'pnv', 'sns', 'children', 'travel'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'pnv-overview',
      title: 'PNV — what is included',
      content: [
        { kind: 'paragraph', text: 'PNV (Plano Nacional de Vacinação) is the state vaccination schedule, approved and updated by DGS through standards and technical documents (Norma 018/2020 and subsequent updates). Check the current version on the DGS / SNS24 page.' },
        { kind: 'checklist', items: [
          '🆓 Free for everyone with a número utente (SNS)',
          '💊 Administered at the health centre for your place of residence (Centro de Saúde)',
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
              '2 months: DTPa-Hib-IPV-HB (hexavalent, 6-in-1), pneumococcal conjugate (PCV), MenB',
              '4 months: repeat hexavalent + PCV + MenB',
              '6 months: DTPa-Hib-IPV-HB (hexavalent dose)',
              '12 months: PCV, MenC/MenACWY (according to the current PNV), MenB (booster), MMR/VASPR dose 1'
            ]}
          ]},
          { id: 'c2', title: '1–5 years', content: [
            { kind: 'checklist', items: [
              '18 months: DTPa-Hib-IPV-HB booster (hexavalent booster)',
              '5 years: DTPa-IPV booster + MMR/VASPR dose 2'
            ]}
          ]},
          { id: 'c3', title: 'Teenagers', content: [
            { kind: 'checklist', items: [
              '10 years: HPV for girls and boys under the PNV — protection against HPV-associated cancers and diseases. Check the current number of doses in e-Boletim/DGS',
              '10 years: Td (tetanus-diphtheria) — booster under the PNV',
              'MenACWY — in the teenage years under the PNV (not “18 years for everyone”); for travel/dormitories it may be required separately',
              'Check the exact ages for teenage boosters in the current DGS PNV table'
            ]}
          ]}
        ]},
        { kind: 'warning', text: 'Some private schools require a boletim de vacinas on enrolment. In state schools, the health centre checks it and notifies you if the child is behind schedule.' }
      ]
    },
    {
      id: 'adults',
      title: 'Adults',
      content: [
        { kind: 'checklist', items: [
          '💉 **Td/Tdap**: booster vaccination against tetanus/diphtheria according to the adult PNV age schedule (usually Td at 25/45/65 and then more often after 65). Tdap especially during pregnancy and for specific indications. Check e-Boletim or ask at the health centre',
          '💉 **Flu**: annually in the DGS seasonal campaign — usually free/recommended for 60+, pregnant women, people with chronic conditions/risk groups and healthcare workers. Exact conditions (SNS / pharmacies) change by season; the price of a paid vaccine depends on the pharmacy/clinic',
          '💉 **COVID booster**: according to the current DGS seasonal campaign, usually for older people, immunocompromised people, risk groups, pregnant women and healthcare/social care workers. The age threshold changes by season',
          '💉 **Hep B**: if you did not receive it in childhood (before 1995 — it was not in the PNV). Series 0/1/6 months',
          '💉 **MMR**: if you do not have 2 doses (check your boletim de vacinas)',
          '💉 **Shingles**: recommended for 60+, not included in the PNV (paid, €150–200/dose)',
          '💉 **HPV for adults**: possible outside the PNV if prescribed by a doctor; age, number of doses and price depend on the product and medical history. For those not covered by the PNV — usually paid',
          '💉 **Pneumococcus**: for older people and certain risk groups. The specific sequence of products (conjugate / PPSV23) and the conditions for free provision depend on DGS standards and a doctor’s prescription — check at the health centre'
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
              '**Consulta do Viajante / Centros de Vacinação Internacional (CVI)** — list and contacts on SNS24/DGS. Availability, booking and fees depend on the specific unit',
              '**Private clinics**: Lusíadas, CUF, Luz and others — travel medicine departments',
              '**Yellow fever** — only at authorised Centros de Vacinação Internacional, which issue the International Certificate. The list of locations is on the official SNS24/DGS website',
              '**Booking**: via SNS24 information pages, the SNS 24 line — 808 24 24 24, or directly with the chosen Consulta do Viajante / CVI'
            ]}
          ]},
          { id: 't2', title: '💉 Popular for tourists', content: [
            { kind: 'checklist', items: [
              '**Yellow fever**: 1 dose is usually lifelong; it must be administered/registered at an authorised CVI to obtain the International Certificate. The price varies by centre — check the official fee',
              '**Hepatitis A**: for India, Africa, South America — usually 2 doses',
              '**Typhoid**: India, Asia, Africa — protection for about 3 years',
              '**Japanese encephalitis**: rural Asia — series of 2 doses',
              '**Rabies**: for people working with animals, long treks — series of 3 doses',
              '**Malaria**: not a vaccine — preventive tablets (doxycycline, Malarone) prescribed by a doctor'
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
          'Boletim de Vacinas is available electronically via SNS 24 / Área do Cidadão; paper records and foreign/private vaccinations need to be taken to the health centre for registration',
          'Access: SNS 24 → Área Reservada → Vacinas',
          'Vaccination history from birth (if done in the SNS)',
          'PDF for school / visa / work',
          'If you had vaccinations abroad — take your vaccination passport to the health centre, and the data will be transferred'
        ]}
      ]
    },
    {
      id: 'newcomers',
      title: 'New arrivals — what to do',
      content: [
        { kind: 'checklist', items: [
          '📋 Bring the boletim de vacinas from your home country (a translation is desirable, but often a Portuguese doctor can work with Latin script)',
          '🏥 At the first visit to the health centre — request registration of vaccines in the Portuguese system',
          '🔍 The family doctor will check whether vaccinations are up to date under the PNV; missing ones can be caught up free of charge at the Centro de Saúde',
          '💉 Missing ones are given free of charge (if you have a número utente)',
          '🚸 Children: the school may ask for the boletim de vacinas and refer the family to the health centre. Since PNV vaccines are usually not legally mandatory, the absence of / an incomplete boletim should generally not by itself prevent enrolment in a state school — check separately with the school and the health centre. Missing vaccinations will be started according to the catch-up schedule; some can be done in one visit, but multi-dose series require intervals',
          '🇧🇷 Brazilians: PNV and the Brazilian calendário nacional are very similar, but there are differences — the MMR schedule is different',
          '🇷🇺 Russian speakers: many childhood schedules differ — the pneumococcal conjugate vaccine and MenB may differ from the schedule in the home country. The health centre will assess the age-appropriate catch-up and entitlement to free doses'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'PNV vaccines in the SNS', amountEUR: 0, note: 'for utente' },
    { label: 'Flu outside the free DGS campaign groups', amountEURMin: 15, amountEURMax: 25, note: 'price in the pharmacy/clinic varies; for groups eligible under the DGS seasonal campaign — free' },
    { label: 'Yellow fever (at an authorised CVI)', amountEURMin: 40, amountEURMax: 80, note: 'price depends on the centre; includes certificate' },
    { label: 'HPV (adults)', amountEURMin: 150, amountEURMax: 200, note: 'per dose; number of doses depends on the product and medical history' },
    { label: 'Consulta do Viajante', amountEURMin: 0, amountEURMax: 60, note: 'fee depends on the public/private provider' }
  ],
  sources: [
    { title: 'DGS — National Vaccination Programme (Norma 018/2020 and updates)', url: 'https://www.dgs.pt/normas-orientacoes-e-informacoes/normas-e-circulares-normativas.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS24 — Vaccination', url: 'https://www.sns24.gov.pt/tema/vacinacao/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' },
    { title: 'SNS24 — Consulta do Viajante and Centros de Vacinação Internacional', url: 'https://www.sns24.gov.pt/tema/vacinacao/consulta-do-viajante/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-17' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
