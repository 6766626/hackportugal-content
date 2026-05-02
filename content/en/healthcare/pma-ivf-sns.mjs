export default {
  editorialVoice: 'hackportugal',
  id: 'pma-ivf-sns',
  categoryId: 'healthcare',
  title: 'IVF / PMA in the SNS: 3 free cycles, age and right of access',
  tldr: 'In Portugal, PMA means procriação medicamente assistida: IUI, IVF/ICSI, donor gametes and cryopreservation. In the SNS, treatment is available free of charge to SNS users where there is a medical indication: usually up to 3 IVF/ICSI cycles, if the woman is no older than 42 at the time of admission/referral. Since 2016, access has been open not only to heterosexual couples: single women and female couples have the same right. All cycles are registered with CNPMA; the route starts with a médico de família or ginecologia in the SNS.',
  tags: ['pma', 'ivf', 'sns', 'fertility treatment'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-covered',
      title: 'What PMA in the SNS is and what is paid for',
      content: [
        { kind: 'paragraph', text: 'PMA is the official Portuguese term for assisted reproductive technologies: inseminação intrauterina (IUI), fertilização in vitro (IVF/FIV), ICSI, use of donor gametes, and cryopreservation of embryos/gametes on medical grounds.' },
        { kind: 'paragraph', text: 'In the SNS, the patient does not pay for the IVF/ICSI procedure itself in a public PMA centre. The practical SNS rule is up to 3 IVF/ICSI cycles per woman, provided the admission and age criteria are met. IUI may be offered before IVF if this is medically reasonable.' },
        { kind: 'checklist', items: [
          'You need a número de utente SNS and active registration at a Centro de Saúde',
          'You need a clinical infertility assessment or another lawful basis for PMA',
          'Referral usually goes through a médico de família, ginecologia or consulta de infertilidade',
          'Treatment is carried out in public centros de PMA or in partner facilities via an SNS referral',
          'Gamete donation is possible, but waiting lists and donor availability depend on the centre',
          'All PMA procedures are subject to CNPMA rules and entry in national registers'
        ] },
        { kind: 'warning', text: '“3 free cycles” does not mean immediate access. Waiting lists in public centres can take months, and the age limit is applied at the time of admission/start of the process under the centre’s rules. If you are 41–42, do not delay the referral.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who is eligible: couples, single women, same-sex couples',
      content: [
        { kind: 'paragraph', text: 'After Lei 17/2016, access to PMA in Portugal is open to all women regardless of marital status, sexual orientation and a diagnosis of “infertility in a heterosexual couple”. This means that a single woman, a female couple and a heterosexual couple can apply through the SNS on equal terms.' },
        { kind: 'checklist', items: [
          'The woman must be an adult and have legal capacity',
          'Informed consent is required for the PMA procedure',
          'For a couple, the consent of the second parent/partner is required if he or she is taking part in the parenting project',
          'A single woman can use donor sperm',
          'A female couple can use donor sperm; both women complete consent under PMA rules',
          'Male couples do not access gestação de substituição as a standard SNS service; surrogacy in Portugal has a separate, extremely restricted legal regime',
          'Foreign residents with an utente SNS follow the same route as Portuguese citizens'
        ] },
        { kind: 'warning', text: 'Clinics and doctors may request documents on marital status, partner consent and legal parenthood. For female couples, check in advance which consent forms the PMA centre requires before starting the cycle.' }
      ]
    },
    {
      id: 'age-cap',
      title: 'Age limit: women up to 42',
      content: [
        { kind: 'paragraph', text: 'For public funding of PMA in the SNS, the key limit is the woman’s age up to 42. In practice, centres look not only at the date of the first appointment, but also at whether stimulation/the cycle can realistically start before the maximum age under their internal protocol is reached.' },
        { kind: 'paragraph', text: 'The age limit is linked to clinical effectiveness and safety: after 40, the likelihood of IVF success falls noticeably, while obstetric risks increase. This makes the waiting list especially critical for patients aged 40–42.' },
        { kind: 'checklist', items: [
          'Under 35: usually more time for diagnosis, but the waiting list still matters',
          '35–39: ask for a referral to consulta de infertilidade without delay',
          '40–42: ask for an urgent/priority referral if there are medical grounds',
          'After 42: the SNS usually does not fund IVF/ICSI; private PMA or individual assessment outside the standard route remains',
          'Donor gametes do not automatically remove the SNS limit',
          'Male age and sperm quality are assessed, but the main public cap for access to IVF/ICSI is the woman’s age'
        ] },
        { kind: 'warning', text: 'If you are close to 42, do not wait for “a year of trying”. Book an appointment with a médico de família and ask for a referral now, attaching previous blood tests, ultrasound scans, semen analysis and medical reports.' }
      ]
    },
    {
      id: 'how-to-start',
      title: 'How to start through the SNS: route step by step',
      content: [
        { kind: 'substeps', items: [
          { id: 's1-utente', title: '1. Obtain or check your número de utente', content: [
            { kind: 'paragraph', text: 'Without an utente SNS, you will not be placed on the ordinary public PMA route. You need an identity document/residence permit or other lawful-stay status, NIF and proof of address for the Centro de Saúde.' }
          ] },
          { id: 's2-family-doctor', title: '2. Book an appointment with a médico de família', content: [
            { kind: 'paragraph', text: 'Say directly: “quero referenciação para consulta de infertilidade / PMA”. If you do not have a family doctor, ask for consulta aberta or consulta de recurso at your Centro de Saúde.' }
          ] },
          { id: 's3-basic-tests', title: '3. Gather basic tests', content: [
            { kind: 'checklist', items: [
              'AMH, FSH/LH/estradiol as prescribed by the doctor',
              'Pelvic ultrasound, AFC, ovulation assessment',
              'HSG/HyCoSy or another fallopian-tube assessment, if indicated',
              'Semen analysis for the male partner, if there is one',
              'Serology: HIV, HBV, HCV, syphilis and others under the protocol',
              'Blood group, rubella/varicella immunity, general clinical screening',
              'Medical reports on previous pregnancies, operations, endometriosis, PCOS, oncology'
            ] }
          ] },
          { id: 's4-referral', title: '4. Obtain a referral to consulta de infertilidade/PMA', content: [
            { kind: 'paragraph', text: 'The referral is sent through the SNS to a hospital or public PMA centre. You will receive an appointment for the first consultation, where they will confirm indications, age, documents and the plan: IUI, IVF/ICSI, donor gametes or cryopreservation.' }
          ] },
          { id: 's5-consent', title: '5. Sign consents and enter the cycle', content: [
            { kind: 'paragraph', text: 'Before the procedure, consentimentos informados are signed. The centre must comply with CNPMA rules, including registration of the cycle, embryos, donation and treatment outcomes.' }
          ] }
        ] }
      ]
    },
    {
      id: 'cnpma-registry',
      title: 'CNPMA: why the register is needed and what happens to the data',
      content: [
        { kind: 'paragraph', text: 'CNPMA is the Conselho Nacional de Procriação Medicamente Assistida. It is the body that regulates and supervises PMA in Portugal: centre licences, donation, consent forms, procedure registers and compliance with Lei 32/2006.' },
        { kind: 'paragraph', text: 'Each PMA centre sends procedure data to the system supervised by CNPMA. This is not a “clinic option”, but part of the legal regime for PMA. The data is needed to monitor safety, outcomes, donation and to prevent breaches of limits.' },
        { kind: 'checklist', items: [
          'Check that the PMA centre is licensed/recognised by CNPMA',
          'Ask for copies of all consentimentos informados',
          'Clarify the rules for embryo storage and the cryopreservation period',
          'Clarify what happens to embryos if the couple separates, one participant dies or treatment is abandoned',
          'In the case of donation, ask about the legal regime for anonymity/access to data under current CNPMA rules',
          'Keep test results and stimulation protocols: they will be needed if you change centre or move to private care'
        ] },
        { kind: 'warning', text: 'Do not start PMA in a “grey” intermediary scheme without a clear Portuguese centre, licence and CNPMA documents. This is a risk for parental rights, medical safety and the child’s registration.' }
      ]
    },
    {
      id: 'private-option',
      title: 'If the waiting list is long: private PMA as a back-up plan',
      content: [
        { kind: 'paragraph', text: 'Many expats join the SNS waiting list and consult privately at the same time. This is lawful: results from private tests can often be brought to the SNS, but the mere fact of a private appointment does not guarantee that the public cycle will be accelerated.' },
        { kind: 'checklist', items: [
          'Private first consultation with a fertility specialist: usually €90–€180',
          'IVF/ICSI privately without donation: often €4,000–€6,500 per cycle excluding medication',
          'Stimulation medication: often €800–€1,800 depending on the protocol',
          'Donor sperm/oocytes increase the budget and timescales',
          'Cryopreservation and embryo storage are paid for separately',
          'Private insurance rarely covers IVF in full; check exclusions for infertility/PMA'
        ] },
        { kind: 'paragraph', text: 'Tactic at age 40–42: ask for an SNS referral immediately, while also gathering a private opinion and tests. If the SNS waiting list goes beyond the age limit, you will still have time to decide on private care.' }
      ]
    }
  ],
  costs: [
    { label: 'PMA/IVF-ICSI in the SNS', amountEUR: 0, note: 'Up to 3 cycles if SNS criteria are met; there may be costs for medication/tests outside the SNS and travel' },
    { label: 'Private consultation with a fertility specialist', amountEURMin: 90, amountEURMax: 180, note: 'Guide price for private clinics in 2026; does not replace an SNS referral' },
    { label: 'IVF/ICSI in a private clinic', amountEURMin: 4000, amountEURMax: 6500, note: 'Usually excluding medication, donation, cryostorage and additional procedures' },
    { label: 'Stimulation medication in private care', amountEURMin: 800, amountEURMax: 1800, note: 'Depends on the protocol, dosages and age' }
  ],
  sources: [
    { title: 'CNPMA — Conselho Nacional de Procriação Medicamente Assistida', url: 'https://www.cnpma.org.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'SNS — Reproductive Health', url: 'https://www.sns.gov.pt/sns/saude-publica/saude-reprodutiva/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 32/2006 — Procriação medicamente assistida', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2006-34412975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 17/2016 — access to PMA for all women regardless of marital status and orientation', url: 'https://diariodarepublica.pt/dr/detalhe/lei/17-2016-74738646', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
