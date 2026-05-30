export default {
  editorialVoice: 'hackportugal',
  id: 'pma-ivf-sns',
  categoryId: 'healthcare',
  title: 'IVF / PMA in the SNS: 3 free cycles, age and access rights',
  tldr: 'In Portugal, PMA means procriação medicamente assistida: IUI, IVF/ICSI, donor gametes and cryopreservation. In the SNS, treatment is available free of charge for SNS users where there are medical indications: usually up to 3 cycles per technique. Important: the SNS age caps differ by technique. IVF/ICSI (2nd line) are funded only if treatment is carried out before the woman turns 40 (39 years and 364 days); the age 42 cap (41 years and 364 days) applies to IUI/insemination and ovulation induction (1st line), not to IVF/ICSI. Since 2016, access has been open not only to heterosexual couples: single women and female couples have the same right. All cycles are registered with the CNPMA; the route starts with a médico de família or ginecologia in the SNS.',
  tags: ['pma', 'ivf', 'sns', 'ivf'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-covered',
      title: 'What PMA in the SNS is and what is paid for',
      content: [
        { kind: 'paragraph', text: 'PMA is the official Portuguese term for assisted reproductive technologies: inseminação intrauterina (IUI), fertilização in vitro (IVF/FIV), ICSI, use of donor gametes, and cryopreservation of embryos/gametes for medical reasons.' },
        { kind: 'paragraph', text: 'In the SNS, the patient does not pay for the IVF/ICSI procedure itself in a public PMA centre. The practical SNS rule is: up to 3 cycles per technique, provided the access and age criteria are met. The age cap depends on the technique: IVF/ICSI (2nd line) up to age 40 (39 years and 364 days); IUI/insemination and ovulation induction (1st line) up to age 42 (41 years and 364 days). IUI may be offered before IVF if this is medically reasonable.' },
        { kind: 'checklist', items: [
          'You need a número de utente SNS and active registration at a Centro de Saúde',
          'You need a clinical assessment of infertility or another lawful basis for PMA',
          'Referral usually goes through a médico de família, ginecologia or consulta de infertilidade',
          'Treatment is carried out in public centros de PMA or in partner structures by SNS referral',
          'Gamete donation is possible, but the waiting list and donor availability depend on the centre',
          'All PMA procedures are subject to CNPMA rules and recording in national registers'
        ] },
        { kind: 'warning', text: '“3 free cycles” does not mean immediate access. The waiting list in public centres can take months, and the age limit is applied at the point when treatment is carried out according to the centre’s rules. For IVF/ICSI in the SNS the cap is age 40 (39 years and 364 days): if you are close to 40, do not delay the referral, or only IUI will remain free.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who is entitled: couples, single women, same-sex couples',
      content: [
        { kind: 'paragraph', text: 'After Lei 17/2016, access to PMA in Portugal is open to all women regardless of marital status, sexual orientation and a diagnosis of “infertility in a heterosexual couple”. This means: a single woman, a female couple and a heterosexual couple can apply to the SNS on equal terms.' },
        { kind: 'checklist', items: [
          'The woman must be an adult and have legal capacity',
          'Informed consent for the PMA procedure is required',
          'For a couple, the consent of the second parent/partner is required if he or she is participating in the parenting project',
          'A single woman may use donor sperm',
          'A female couple may use donor sperm; both women complete consent under PMA rules',
          'Male couples do not have access to gestação de substituição as a standard SNS service; surrogacy in Portugal has a separate, extremely limited legal regime',
          'Foreign residents with a utente SNS follow the same route as Portuguese citizens'
        ] },
        { kind: 'warning', text: 'Clinics and doctors may request documents on marital status, partner consent and legal parenthood. For female couples, check in advance which consent forms the PMA centre requires before the cycle starts.' }
      ]
    },
    {
      id: 'age-cap',
      title: 'Age limits: IVF/ICSI up to 40, IUI up to 42',
      content: [
        { kind: 'paragraph', text: 'For public funding of PMA in the SNS there are two distinct age caps by technique. IVF/ICSI (2nd line) are funded only if treatment is carried out before the woman turns 40 (in practice 39 years and 364 days). The age 42 cap (41 years and 364 days) applies to insemination/IUI and ovulation induction (1st line), not to IVF/ICSI. In practice, centres look not only at the date of the first appointment, but also at whether treatment can realistically be carried out before the maximum age for that technique is reached under their internal protocol.' },
        { kind: 'paragraph', text: 'The age limit is linked to clinical effectiveness and safety: after 40, the probability of IVF success falls noticeably, while obstetric risks increase. That is precisely why the SNS funds free IVF/ICSI only up to age 40, and the waiting list becomes critical already at 38–39.' },
        { kind: 'checklist', items: [
          'Under 35: usually more time for diagnostics, but the waiting list still matters',
          '35–39: ask for referral to a consulta de infertilidade without delay — this is the last window for free IVF/ICSI in the SNS',
          '40–42: the SNS no longer funds IVF/ICSI (only IUI/insemination up to 42), so the realistic route to IVF at this age is private PMA; ask for an urgent referral but plan for private care',
          'After 42: the SNS funds neither IVF/ICSI nor IUI; private PMA or an individual assessment outside the standard route remains',
          'A maximum age of 50 is possible only in exceptional cases (serious illness)',
          'Donor gametes do not automatically remove the SNS limit',
          'Male age and sperm quality are assessed, but the main public cap for access to IVF/ICSI is the woman’s age'
        ] },
        { kind: 'warning', text: 'If you are close to 40, do not wait for “a year of trying”: after 40 free IVF/ICSI in the SNS is no longer available. Book an appointment with a médico de família and ask for a referral now, attaching previous tests, ultrasound scans, semen analysis and medical reports.' }
      ]
    },
    {
      id: 'how-to-start',
      title: 'How to start through the SNS: step-by-step route',
      content: [
        { kind: 'substeps', items: [
          { id: 's1-utente', title: '1. Obtain or check your número de utente', content: [
            { kind: 'paragraph', text: 'Without a utente SNS, you will not be put on the standard public PMA route. You need an identity document/residence permit or another lawful-stay status, NIF and proof of address for the Centro de Saúde.' }
          ] },
          { id: 's2-family-doctor', title: '2. Book an appointment with a médico de família', content: [
            { kind: 'paragraph', text: 'Say directly: “quero referenciação para consulta de infertilidade / PMA”. If you do not have a family doctor, ask for a consulta aberta or consulta de recurso at your Centro de Saúde.' }
          ] },
          { id: 's3-basic-tests', title: '3. Collect the basic tests', content: [
            { kind: 'checklist', items: [
              'AMH, FSH/LH/estradiol as prescribed by the doctor',
              'Pelvic ultrasound scan, AFC, ovulation assessment',
              'HSG/HyCoSy or another assessment of the fallopian tubes, if indicated',
              'Semen analysis for the male partner, if there is one',
              'Serology tests: HIV, HBV, HCV, syphilis and others according to protocol',
              'Blood group, rubella/varicella immunity, general clinical screening',
              'Medical reports on previous pregnancies, surgeries, endometriosis, PCOS, oncology'
            ] }
          ] },
          { id: 's4-referral', title: '4. Obtain a referral to consulta de infertilidade/PMA', content: [
            { kind: 'paragraph', text: 'The referral goes through the SNS to a hospital or public PMA centre. You will receive an appointment for the first consultation, where they will confirm indications, age, documents and the plan: IUI, IVF/ICSI, donor gametes or cryopreservation.' }
          ] },
          { id: 's5-consent', title: '5. Sign the consents and enter the cycle', content: [
            { kind: 'paragraph', text: 'Before the procedure, consentimentos informados are signed. The centre must comply with CNPMA rules, including registration of the cycle, embryos, donation and treatment outcomes.' }
          ] }
        ] }
      ]
    },
    {
      id: 'cnpma-registry',
      title: 'CNPMA: why the register is needed and what will happen to the data',
      content: [
        { kind: 'paragraph', text: 'CNPMA is the Conselho Nacional de Procriação Medicamente Assistida. It is the body that regulates and supervises PMA in Portugal: centre licences, donation, consent forms, procedure registers and compliance with Lei 32/2006.' },
        { kind: 'paragraph', text: 'Each PMA centre sends procedure data to the system controlled by the CNPMA. This is not a “clinic option”, but part of the legal PMA regime. The data is needed to monitor safety, results, donation and prevention of breaches of limits.' },
        { kind: 'checklist', items: [
          'Check that the PMA centre is licensed/recognised by the CNPMA',
          'Ask for copies of all consentimentos informados',
          'Clarify the rules for embryo storage and the cryopreservation period',
          'Clarify what happens to embryos if the couple separates, one participant dies or treatment is discontinued',
          'In the case of donation, ask about the legal regime for anonymity/access to data under current CNPMA rules',
          'Keep test results and stimulation protocols: they will be needed if you change centre or move to private care'
        ] },
        { kind: 'warning', text: 'Do not start PMA in a “grey” intermediary scheme without a clear Portuguese centre, licence and CNPMA documents. This is a risk to parental rights, medical safety and the child’s registration.' }
      ]
    },
    {
      id: 'private-option',
      title: 'If the waiting list is long: private PMA as a backup plan',
      content: [
        { kind: 'paragraph', text: 'Many expats join the SNS waiting list and consult privately in parallel. This is legal: private test results can often be brought to the SNS, but the mere fact of a private visit does not guarantee that the public cycle will be accelerated.' },
        { kind: 'checklist', items: [
          'Private first consultation with a fertility specialist: usually €90–180',
          'IVF/ICSI in private without donation: often €4,000–6,500 per cycle excluding medicines',
          'Stimulation medicines: often €800–1,800 depending on the protocol',
          'Donor sperm/oocytes increase the budget and timescales',
          'Embryo cryopreservation and storage are paid for separately',
          'Private insurance rarely covers IVF in full; check infertility/PMA exclusions'
        ] },
        { kind: 'paragraph', text: 'Tactic at age 40–42: at this point the SNS no longer funds free IVF/ICSI (only IUI up to 42), so private PMA is the realistic route to IVF. In parallel you can still ask for a referral in the SNS and gather a private opinion and tests, but plan on having the IVF/ICSI itself done in private care.' }
      ]
    }
  ],
  costs: [
    { label: 'PMA/IVF-ICSI in the SNS', amountEUR: 0, note: 'Up to 3 cycles if SNS criteria are met; there may be costs for medicines/tests outside the SNS and travel' },
    { label: 'Private consultation with a fertility specialist', amountEURMin: 90, amountEURMax: 180, note: 'Guide for private clinics in 2026; does not replace an SNS referral' },
    { label: 'IVF/ICSI in a private clinic', amountEURMin: 4000, amountEURMax: 6500, note: 'Usually excluding medicines, donation, cryostorage and additional procedures' },
    { label: 'Stimulation medicines in private care', amountEURMin: 800, amountEURMax: 1800, note: 'Depends on the protocol, doses and age' }
  ],
  sources: [
    { title: 'CNPMA — Conselho Nacional de Procriação Medicamente Assistida', url: 'https://www.cnpma.org.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS — Banco Público de Gâmetas and network of public PMA centres', url: 'https://www.sns.gov.pt/cidadao/banco-publico-de-gametas-2/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Lei 32/2006 — Procriação medicamente assistida', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2006-34412975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 17/2016 — access to PMA for all women regardless of marital status and orientation', url: 'https://diariodarepublica.pt/dr/detalhe/lei/17-2016-74738646', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
