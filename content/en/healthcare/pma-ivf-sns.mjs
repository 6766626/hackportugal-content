export default {
  editorialVoice: 'hackportugal',
  id: 'pma-ivf-sns',
  categoryId: 'healthcare',
  title: 'IVF / PMA in the SNS: 3 free cycles, age and access entitlement',
  tldr: 'In Portugal, PMA — procriação medicamente assistida: IUI, IVF/ICSI, donor gametes and cryopreservation. In the SNS, treatment is available free of charge for SNS users with medical indications: typically up to 3 cycles of IVF/ICSI, if the woman is no older than 42 at the time of eligibility/referral. Since 2016, access is not limited to heterosexual couples: single women and female couples have the same right. All cycles are recorded with the CNPMA; the pathway starts with the médico de família or ginecologia in the SNS.',
  tags: ['pma', 'ivf', 'sns'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-covered',
      title: 'What PMA in the SNS is and what is covered',
      content: [
        { kind: 'paragraph', text: 'PMA is the official Portuguese term for assisted reproductive technologies: inseminação intrauterina (IUI), fertilização in vitro (IVF/FIV), ICSI, the use of donor gametes, and cryopreservation of embryos/gametes for medical reasons.' },
        { kind: 'paragraph', text: 'In the SNS, the patient does not pay for the IVF/ICSI procedure itself in a public PMA centre. The practical SNS rule: up to 3 cycles of IVF/ICSI per woman, subject to eligibility and age criteria. IUI may be offered before IVF, if clinically reasonable.' },
        { kind: 'checklist', items: [
          'You need a número de utente SNS and active registration at a Centro de Saúde',
          'You need a clinical assessment of infertility or another lawful basis for PMA',
          'Referral usually goes via the médico de família, ginecologia or consulta de infertilidade',
          'Treatment is performed in public centros de PMA or in partner facilities by SNS referral',
          'Donation of gametes is possible, but the waiting list and donor availability depend on the centre',
          'All PMA procedures are subject to CNPMA rules and entry into national registers'
        ] },
        { kind: 'warning', text: '“3 free cycles” does not mean immediate access. Waiting times in public centres can take months, and the age limit applies at the moment of eligibility/start of the process under the centre’s rules. If you are 41–42, do not delay the referral.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who is eligible: couples, single women, same-sex couples',
      content: [
        { kind: 'paragraph', text: 'After Lei 17/2016, access to PMA in Portugal is open to all women regardless of marital status, sexual orientation and the diagnosis of “infertility in a heterosexual couple”. This means: a single woman, a female couple and a heterosexual couple can approach the SNS on equal terms.' },
        { kind: 'checklist', items: [
          'The woman must be of legal age and have legal capacity',
          'Informed consent for the PMA procedure is required',
          'For a couple, the second parent/partner’s consent is required if he or she participates in the parenting project',
          'A single woman may use donor sperm',
          'A female couple may use donor sperm; both women complete consent under the PMA rules',
          'Male couples do not get access to gestação de substituição as a standard SNS service; surrogacy in Portugal has a separate, extremely restricted legal regime',
          'Foreign residents with an utente SNS follow the same pathway as Portuguese citizens'
        ] },
        { kind: 'warning', text: 'Clinics and doctors may request documents on marital status, partner consent and legal parentage. For female couples, check in advance which consent forms the PMA centre requires before starting a cycle.' }
      ]
    },
    {
      id: 'age-cap',
      title: 'Age limit: women up to 42 years',
      content: [
        { kind: 'paragraph', text: 'For publicly funded PMA in the SNS, the key limit is the woman being under 42 years of age. In practice, centres look not only at the date of first contact but also at the possibility of actually starting stimulation/a cycle before reaching the upper age limit under their internal protocol.' },
        { kind: 'paragraph', text: 'The age limit is linked to clinical effectiveness and safety: after 40, the likelihood of IVF success falls markedly, and obstetric risks increase. Therefore, the waiting list is particularly critical for patients aged 40–42.' },
        { kind: 'checklist', items: [
          'Under 35: usually more time for diagnostics, but the waiting list still matters',
          '35–39 years: ask for a referral to consulta de infertilidade without delay',
          '40–42 years: ask for an urgent/priority referral if there are medical grounds',
          'After 42 years: the SNS usually does not fund IVF/ICSI; private PMA remains or an individual assessment outside the standard pathway',
          'Donor gametes do not automatically waive the SNS limit',
          'Male age and sperm quality are assessed, but the main public cap for access to IVF/ICSI is the woman’s age'
        ] },
        { kind: 'warning', text: 'If you are close to 42, do not wait for “a year of trying”. Book an appointment with your médico de família and request a referral now, attaching past tests, ultrasound scans, semen analysis and discharge notes.' }
      ]
    },
    {
      id: 'how-to-start',
      title: 'How to start via the SNS: step-by-step pathway',
      content: [
        { kind: 'substeps', items: [
          { id: 's1-utente', title: '1. Obtain or check your número de utente', content: [
            { kind: 'paragraph', text: 'Without an SNS utente you will not be placed on the usual public PMA pathway. You need an identity document/residence permit or other lawful stay status, a NIF and proof of address for the Centro de Saúde.' }
          ] },
          { id: 's2-family-doctor', title: '2. Book an appointment with your médico de família', content: [
            { kind: 'paragraph', text: 'Say it plainly: “quero referenciação para consulta de infertilidade / PMA”. If you do not have a family doctor, ask for a consulta aberta or consulta de recurso at your Centro de Saúde.' }
          ] },
          { id: 's3-basic-tests', title: '3. Gather basic tests', content: [
            { kind: 'checklist', items: [
              'AMH, FSH/LH/oestradiol as prescribed by your doctor',
              'Pelvic ultrasound, AFC, ovulation assessment',
              'HSG/HyCoSy or other tubal assessment, if indicated',
              'Semen analysis for a male partner, if applicable',
              'Serologies: HIV, HBV, HCV, syphilis and others per protocol',
              'Blood group, rubella/varicella immunity, general clinical screening',
              'Discharge notes on previous pregnancies, surgeries, endometriosis, PCOS, oncology'
            ] }
          ] },
          { id: 's4-referral', title: '4. Get a referral to consulta de infertilidade/PMA', content: [
            { kind: 'paragraph', text: 'The referral goes through the SNS to a hospital or public PMA centre. You will receive an appointment for an initial consultation where indications, age, documents and the plan are confirmed: IUI, IVF/ICSI, donor gametes or cryopreservation.' }
          ] },
          { id: 's5-consent', title: '5. Sign consents and enter the cycle', content: [
            { kind: 'paragraph', text: 'Before the procedure, consentimentos informados are signed. The centre must comply with CNPMA rules, including registering the cycle, embryos, donations and treatment outcomes.' }
          ] }
        ] }
      ]
    },
    {
      id: 'cnpma-registry',
      title: 'CNPMA: why the register exists and what happens to the data',
      content: [
        { kind: 'paragraph', text: 'CNPMA — Conselho Nacional de Procriação Medically Assistida. It is the body that regulates and oversees PMA in Portugal: centre licences, donation, consent forms, procedure registers and compliance with Lei 32/2006.' },
        { kind: 'paragraph', text: 'Every PMA centre transmits procedure data into a system controlled by the CNPMA. This is not a “clinic option”, but part of the legal framework for PMA. The data are needed to monitor safety, results, donations and to prevent breaches of limits.' },
        { kind: 'checklist', items: [
          'Check that the PMA centre is licensed/recognised by the CNPMA',
          'Ask for copies of all consentimentos informados',
          'Clarify the rules on embryo storage and the duration of cryopreservation',
          'Clarify what happens to embryos upon a couple’s separation, the death of one participant, or discontinuation of treatment',
          'For donation, ask about the legal regime on anonymity/access to data under current CNPMA rules',
          'Keep test results and stimulation protocols: you will need them if you change centre or move to private care'
        ] },
        { kind: 'warning', text: 'Do not start PMA in a “grey” intermediary scheme without a clear Portuguese centre, licence and CNPMA documents. This is a risk to parental rights, medical safety and the child’s registration.' }
      ]
    },
    {
      id: 'private-option',
      title: 'If the waiting list is long: private PMA as a backup plan',
      content: [
        { kind: 'paragraph', text: 'Many expats join the SNS waiting list and consult privately in parallel. This is lawful: the results of private tests can often be brought into the SNS, but the mere fact of a private visit does not guarantee faster access to a public cycle.' },
        { kind: 'checklist', items: [
          'Private initial consultation with a reproductive specialist: usually €90–€180',
          'IVF/ICSI in private care without donation: often €4,000–€6,500 per cycle excluding medicines',
          'Stimulation medicines: often €800–€1,800 depending on the protocol',
          'Donor sperm/oocytes increase the budget and timelines',
          'Cryopreservation and embryo storage are charged separately',
          'Private insurance rarely covers IVF in full; check exclusions for infertility/PMA'
        ] },
        { kind: 'paragraph', text: 'Tactics at age 40–42: request an SNS referral immediately, while simultaneously obtaining a private opinion and tests. If the SNS waiting list runs beyond the age limit, you will still have time to decide on private care.' }
      ]
    }
  ],
  costs: [
    { label: 'PMA/IVF-ICSI in the SNS', amountEUR: 0, note: 'Up to 3 cycles subject to SNS criteria; you may incur costs for medicines/tests outside the SNS and travel' },
    { label: 'Private consultation with a reproductive specialist', amountEURMin: 90, amountEURMax: 180, note: 'Benchmark for private clinics in 2026; does not replace an SNS referral' },
    { label: 'IVF/ICSI in a private clinic', amountEURMin: 4000, amountEURMax: 6500, note: 'Usually excludes medicines, donation, cryostorage and add-on procedures' },
    { label: 'Stimulation medicines in private care', amountEURMin: 800, amountEURMax: 1800, note: 'Depends on protocol, dosages and age' }
  ],
  sources: [
    { title: 'CNPMA — Conselho Nacional de Procriação Medically Assistida', url: 'https://www.cnpma.org.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS — Banco Público de Gâmetas e rede de centros públicos PMA', url: 'https://www.sns.gov.pt/cidadao/banco-publico-de-gametas-2/', kind: 'official', language: 'pt', lastRetrieved: '2026-05-04' },
    { title: 'Lei 32/2006 — Procriação medicamente assistida', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2006-34412975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 17/2016 — access to PMA for all women regardless of marital status and orientation', url: 'https://diariodarepublica.pt/dr/detalhe/lei/17-2016-74738646', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
