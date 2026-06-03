export default {
  editorialVoice: 'hackportugal',
  id: 'carta-navegador-recreio',
  categoryId: 'food_leisure',
  title: 'Recreational skipper licence — categories and training (Carta de Navegador de Recreio)',
  tldr: 'Carta de Navegador de Recreio is the official skipper licence for operating a private recreational boat.\n\nCategories: MARINHEIRO (up to 3 miles from the coast / 10 miles from a safe harbour), PATRÃO LOCAL (up to 6 miles from the coast / 25 miles from a safe harbour), PATRÃO DE COSTA (up to 40 miles from the coast), PATRÃO DE ALTO MAR (no limits).\n\nMinimum age: 16 for Marinheiro, 18 for Patrão. Training at accredited schools: 30–100 hours, exam at the Capitania do Porto, theory and practice.\n\nCost: roughly €250–1,500 depending on category. Foreign licences (RYA Day Skipper, ICC, ASA) can be converted through DGRM (Portugal’s maritime authority) with a simplified exam.',
  tags: ['licence', 'navigator', 'skipper', 'dgrm', 'course'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'When a Carta is needed — engine/size',
      content: [
        { kind: 'paragraph', text: 'A skipper licence is not needed for every boat. The basic rules by engine power and size are:' },
        { kind: 'checklist', items: [
          'Without a licence: only boats under 5 m in length with an engine under 4.5 kW (~6 hp), in daytime navigation within harbour waters',
          'MARINHEIRO JÚNIOR: small recreational craft up to 6 m, engine up to 4.5 kW, daytime only, max 1 mile from the low-water line and 3 miles from any safe harbour',
          'MARINHEIRO: daytime navigation, max 3 miles from the coast and 10 miles from any safe harbour',
          'PATRÃO LOCAL: within sight of the coast, max 6 miles from the coast and 25 miles from any safe harbour',
          'PATRÃO DE COSTA: up to 40 miles from the coast',
          'PATRÃO DE ALTO MAR: no area limit',
          'Jet ski (mota de água): a separate Carta para motas de água is required — simplified course'
        ] },
        { kind: 'paragraph', text: 'Navigation classes: Local (local navigation area), Costeira (coastal area), Largo (open sea).' },
        { kind: 'warning', text: 'Rental companies in Algarve and Cascais often say: “take a 5 m motorboat without a licence”. Check the engine: if it is more powerful than 4.5 kW, you need at least Marinheiro. Otherwise the charter company risks a fine, and you may lose insurance cover in the event of an incident.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements for obtaining it',
      content: [
        { kind: 'checklist', items: [
          'Minimum 16 years old (Marinheiro) or 18 years old (Patrão)',
          'Medical certificate of fitness to operate a vessel (€30–50)',
          'Ability to swim: 50 m without stopping under supervision (for all categories)',
          'No visa restrictions: foreigners can obtain it on the same basis as Portuguese citizens',
          'NIF (tax number) and Cartão de Cidadão (citizen card) or passport + proof of address',
          'Course at a DGRM-accredited school'
        ] }
      ]
    },
    {
      id: 'training',
      title: 'Training: where and how',
      content: [
        { kind: 'paragraph', text: 'See the list of DGRM-accredited schools at dgrm.pt/formacao1. Most schools are in Cascais, Lisboa, Setúbal, Vilamoura, Sesimbra, Porto.' },
        { kind: 'checklist', items: [
          'MARINHEIRO: 30–40 hours (theory + ~10 hours of practice), ~€250–400',
          'PATRÃO LOCAL: ~50 hours, ~€400–600',
          'PATRÃO DE COSTA: ~80 hours, ~€600–1,000',
          'PATRÃO DE ALTO MAR: 100+ hours, ~€1,000–1,500 + sea practice ~200 miles',
          'Mota de água: ~16 hours, ~€150–250',
          'Syllabus: navigation basics, Collision Regulations (COLREGS), VHF radio (basics), meteorology, safety, prevention of and response to emergencies'
        ] },
        { kind: 'paragraph', text: 'Popular schools: Sea Boat Academy (Cascais), Náutica Escola (Lisboa), Escola de Vela do Sport Club do Porto, Yacht Master Algarve. CMI and other international organisations also run courses.' }
      ]
    },
    {
      id: 'exam',
      title: 'Exam and obtaining the Carta',
      content: [
        { kind: 'paragraph', text: 'The exam takes place at the Capitania do Porto (port authority):' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Booking the exam',
            content: [
              { kind: 'paragraph', text: 'The school submits the application on your behalf via BMar (Balcão Eletrónico do Mar). Alternatively, you can apply independently through DGRM. The wait is usually 2–6 weeks.' }
            ]
          },
          {
            id: 's2',
            title: 'Theory exam',
            content: [
              { kind: 'paragraph', text: 'A test of ~30–50 questions depending on the category. Topics: COLREGS (right-of-way rules), chart work, meteorology, safety, compulsory equipment. The pass mark is 70–75%.' }
            ]
          },
          {
            id: 's3',
            title: 'Practical exam',
            content: [
              { kind: 'paragraph', text: 'For Patrão categories and above. You need to demonstrate: berthing alongside, “man overboard”, use of a VHF radio, GPS work, compass navigation.' }
            ]
          },
          {
            id: 's4',
            title: 'Receiving the Carta',
            content: [
              { kind: 'checklist', items: [
                'Ready: in roughly 2–4 weeks',
                'Issued electronically by DGRM with an access key; available in the gov.pt app',
                'Renewed with a medical check: before expiry up to age 70, then every 5 years from age 70, and every 2 years from age 80'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'foreign-conversion',
      title: 'Converting foreign licences',
      content: [
        { kind: 'paragraph', text: 'If you already have a foreign skipper licence, many can be recognised by DGRM (equiparação). You apply online; DGRM checks the competencies, syllabus and training hours against the requirements of Decreto-Lei 93/2018 and assigns the matching category (sometimes with an additional exam). Fee: €89.37 (digital licence) or €99.30 (digital + physical).' },
        { kind: 'checklist', items: [
          'RYA Day Skipper (UK) → usually converts to Patrão de Costa with a theory exam',
          'RYA Yachtmaster Coastal/Offshore → Patrão de Alto Mar',
          'ICC (International Certificate of Competence) → Patrão Local or Costeiro depending on endorsements',
          'ASA (US) Bareboat Cruising 104+ → generally converts',
          'Russian “Small craft operator licence” → more often requires re-examination; sometimes it is easier to take the course from scratch',
          'Ukrainian “Certificate of the right to operate a small craft” → theory re-examination',
          'Brazilian “Habilitação Náutica” → simplified process under CPLP agreements'
        ] },
        { kind: 'paragraph', text: 'Documents for conversion:' },
        { kind: 'checklist', items: [
          'Original foreign licence + sworn translation into Portuguese',
          'Ship’s log / sailing logs (logbook) — desirable',
          'Medical certificate',
          'Application to DGRM stating the desired category',
          'Cost: €100–300 + simplified exam'
        ] }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          'If you simply want to go out on a motorboat with friends in the Lisbon bay — take Marinheiro. A couple of weeks of course, ~€300',
          'Planning to rent a boat in Algarve / on Madeira / in the Azores — look towards Patrão Local: without it, many companies will not rent vessels',
          'For the ocean and passages between the Azores islands — at least Patrão de Costa',
          'CMI courses (international) often provide both the Portuguese Carta and the ICC',
          'Schools in Cascais and Vilamoura provide training in English and issue a Portuguese Carta on completion',
          'Best time to enrol: October–March (low season and lower prices)',
          'Do not buy a boat before passing for the Carta — there will be nobody to operate it',
          'Factor in marina berth fees: in Cascais ~€30/day, in Lagos ~€25, in Vilamoura ~€50'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'MARINHEIRO course', amountEURMin: 250, amountEURMax: 400 },
    { label: 'PATRÃO LOCAL course', amountEURMin: 400, amountEURMax: 600 },
    { label: 'PATRÃO DE COSTA course', amountEURMin: 600, amountEURMax: 1000 },
    { label: 'PATRÃO DE ALTO MAR course', amountEURMin: 1000, amountEURMax: 1500 },
    { label: 'Course: jet ski (mota de água)', amountEURMin: 150, amountEURMax: 250 },
    { label: 'Exam at the Capitania', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Conversion of foreign licences', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Medical examination for the Carta', amountEURMin: 30, amountEURMax: 50 },
    { label: 'Repeat medical examination (after age 70, every 5 years)', amountEUR: 30 }
  ],
  sources: [
    { title: 'DGRM — Carta de Navegador de Recreio', url: 'https://www.dgrm.pt/am-nr-navegador-recreio', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'DGRM — Equiparação de carta de navegador de recreio', url: 'https://www.dgrm.pt/equiparacao-de-carta-de-navegador-de-recreio', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'DGRM — DGRM-accredited training entities', url: 'https://www.dgrm.pt/formacao1', kind: 'official', language: 'pt', lastRetrieved: '2026-05-30' },
    { title: 'Decreto-Lei 93/2018 — Regime Jurídico da Náutica de Recreio', url: 'https://dre.pt/dre/detalhe/decreto-lei/93-2018-116954925', kind: 'law', language: 'pt', lastRetrieved: '2026-05-30' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 365
}
