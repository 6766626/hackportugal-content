export default {
  editorialVoice: 'hackportugal',
  id: 'carta-navegador-recreio',
  categoryId: 'food_leisure',
  title: 'Recreational skipper licence — categories and training (Carta de Navegador de Recreio)',
  tldr: 'Carta de Navegador de Recreio is the official skipper licence for operating a private recreational boat. Categories: MARINHEIRO (up to 5 miles, engine up to 30 kW), PATRÃO LOCAL (up to 12 miles, up to 50 kW), PATRÃO COSTEIRO (up to 25 miles), PATRÃO ALTO MAR (unlimited). Minimum age: 16 for Marinheiro, 18 for Patrão. Training at accredited schools: 30–100 hours, exam at the Capitania do Porto, theory and practice. Cost: around €250–1,500 depending on the category. Foreign licences (RYA Day Skipper, ICC, ASA) can be converted through AMN (Portugal’s maritime administration) with a simplified exam.',
  tags: ['licence', 'navigator', 'skipper', 'amn', 'course'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'When a Carta is needed — engine/size',
      content: [
        { kind: 'paragraph', text: 'A skipper licence is not needed for every boat. Basic rules by engine power and size:' },
        { kind: 'checklist', items: [
          'No licence: only boats with an engine ≤ 4.5 kW (~6 hp) and length ≤ 7 m',
          'MARINHEIRO: engine up to 30 kW (~40 hp) or sail, up to 5 miles from the shore',
          'PATRÃO LOCAL: engine up to 50 kW (~67 hp), up to 12 miles',
          'PATRÃO COSTEIRO: no power limit, up to 25 miles',
          'PATRÃO ALTO MAR: no power or distance limits',
          'Jet ski (mota de água): a separate Carta para motas de água is required — simplified course'
        ] },
        { kind: 'paragraph', text: 'Navigation areas: Local (local navigation area), Costeira (coastal area), Largo (open sea).' },
        { kind: 'warning', text: 'Rental companies in the Algarve and Cascais often say: “take a 5 m motorboat without a licence”. Check the engine: if it is more powerful than 4.5 kW, at least Marinheiro is required. Otherwise the charter company risks a fine, and you may lose insurance cover in the event of an incident.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements to obtain it',
      content: [
        { kind: 'checklist', items: [
          'Minimum 16 years old (Marinheiro) or 18 years old (Patrão)',
          'Medical certificate confirming fitness to operate a vessel (€30–50)',
          'Ability to swim: 50 m non-stop under supervision (for all categories)',
          'No visa restrictions: foreigners can obtain it on the same basis as Portuguese citizens',
          'NIF (tax number) and Cartão de Cidadão (citizen card) or passport + proof of address',
          'Course at an AMN-accredited school'
        ] }
      ]
    },
    {
      id: 'training',
      title: 'Training: where and how',
      content: [
        { kind: 'paragraph', text: 'See the list of accredited schools at amn.pt → Carta de Navegador → Escolas. The largest number of schools is in Cascais, Lisboa, Setúbal, Vilamoura, Sesimbra, Porto.' },
        { kind: 'checklist', items: [
          'MARINHEIRO: 30–40 hours (theory + ~10 hours of practice), ~€250–400',
          'PATRÃO LOCAL: ~50 hours, ~€400–600',
          'PATRÃO COSTEIRO: ~80 hours, ~€600–1,000',
          'PATRÃO ALTO MAR: 100+ hours, ~€1,000–1,500 + sea practice ~200 miles',
          'Mota de água: ~16 hours, ~€150–250',
          'Programme: basics of navigation, International Regulations for Preventing Collisions at Sea (COLREGS), VHF radio communication (basic), meteorology, safety, prevention and emergency response'
        ] },
        { kind: 'paragraph', text: 'Popular schools: Sea Boat Academy (Cascais), Náutica Escola (Lisboa), Escola de Vela do Sport Club do Porto, Yacht Master Algarve. CMI and other international organisations also run courses.' }
      ]
    },
    {
      id: 'exam',
      title: 'Exam and obtaining the Carta',
      content: [
        { kind: 'paragraph', text: 'The exam takes place at the Capitania do Porto (port captaincy):' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Registering for the exam',
            content: [
              { kind: 'paragraph', text: 'The school submits the application on your behalf. Alternatively, you can register independently through AMN. The wait is usually 2–6 weeks.' }
            ]
          },
          {
            id: 's2',
            title: 'Theory exam',
            content: [
              { kind: 'paragraph', text: 'A test of ~30–50 questions depending on the category. Topics: COLREGS (collision avoidance rules), chart work, meteorology, safety, mandatory equipment. The pass mark is 70–75%.' }
            ]
          },
          {
            id: 's3',
            title: 'Practical exam',
            content: [
              { kind: 'paragraph', text: 'For Patrão categories and above. You need to demonstrate: berthing alongside, “man overboard”, use of a VHF radio, working with GPS, navigation by compass.' }
            ]
          },
          {
            id: 's4',
            title: 'Receiving the Carta',
            content: [
              { kind: 'checklist', items: [
                'Ready: in around 2–4 weeks',
                'Can be collected at the Capitania or received by post',
                'Valid until age 70; after that, a medical check-up is required every 5 years',
                'Plastic card, like a driving licence'
              ] }
            ]
          }
        ] }
      ]
    },
    {
      id: 'foreign-conversion',
      title: 'Conversion of foreign licences',
      content: [
        { kind: 'paragraph', text: 'If you already have a foreign skipper licence, many of them can be converted through AMN, usually with a simplified exam.' },
        { kind: 'checklist', items: [
          'RYA Day Skipper (UK) → usually converted to Patrão Costeiro with a theory exam',
          'RYA Yachtmaster Coastal/Offshore → Patrão Alto Mar',
          'ICC (International Certificate of Competence) → Patrão Local or Costeiro depending on endorsements',
          'ASA (US) Bareboat Cruising 104+ → generally convertible',
          'Russian “Small Craft Operator Certificate” → more often requires re-examination; sometimes it is easier to take the course from scratch',
          'Ukrainian “Small Craft Operator Certificate” → theory re-exam',
          'Brazilian “Habilitação Náutica” → simplified process under CPLP agreements'
        ] },
        { kind: 'paragraph', text: 'Documents for conversion:' },
        { kind: 'checklist', items: [
          'Original foreign licence + sworn translation into Portuguese',
          'Ship’s log / sailing logs (logbook) — recommended',
          'Medical certificate',
          'Application to AMN stating the desired category',
          'Cost: €100–300 + simplified exam'
        ] }
      ]
    },
    {
      id: 'practical-tips',
      title: 'Practical tips',
      content: [
        { kind: 'checklist', items: [
          'If you just want to take a motorboat out with friends in Lisbon bay — take Marinheiro. A couple of weeks of course, ~€300',
          'Planning to rent a boat in the Algarve / Madeira / the Azores — look towards Patrão Local: without it, many companies will not rent vessels',
          'For the ocean and crossings between the Azores islands — at least Patrão Costeiro',
          'CMI courses (international) often provide both the Portuguese Carta and the ICC',
          'Schools in Cascais and Vilamoura provide training in English and issue the Portuguese Carta at the end',
          'Best time to sign up: October–March (low season and lower prices)',
          'Do not buy a boat before passing for the Carta — there will be nobody to operate it',
          'Factor in marina berth fees: in Cascais ~€30/day, in Lagos ~€25, in Vilamoura ~€50'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'MARINHEIRO course', amountEURMin: 250, amountEURMax: 400 },
    { label: 'PATRÃO LOCAL course', amountEURMin: 400, amountEURMax: 600 },
    { label: 'PATRÃO COSTEIRO course', amountEURMin: 600, amountEURMax: 1000 },
    { label: 'PATRÃO ALTO MAR course', amountEURMin: 1000, amountEURMax: 1500 },
    { label: 'Course: jet ski (mota de água)', amountEURMin: 150, amountEURMax: 250 },
    { label: 'Exam at the Capitania', amountEURMin: 30, amountEURMax: 80 },
    { label: 'Conversion of foreign licences', amountEURMin: 100, amountEURMax: 300 },
    { label: 'Medical check-up for the Carta', amountEURMin: 30, amountEURMax: 50 },
    { label: 'Repeat medical check-up (after age 70, every 5 years)', amountEUR: 30 }
  ],
  sources: [
    { title: 'AMN — Carta de Navegador de Recreio', url: 'https://www.amn.pt/DGAM/FR/Paginas/NauticaRecreio.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'AMN — recognised schools', url: 'https://www.amn.pt/DGAM/FR/Paginas/NauticaRecreio.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 124/2004 — recreational craft', url: 'https://dre.pt/dre/detalhe/decreto-lei/124-2004-220127', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Portaria 568/89 — categories and training', url: 'https://dre.pt/dre/detalhe/portaria/568-1989-580367', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
