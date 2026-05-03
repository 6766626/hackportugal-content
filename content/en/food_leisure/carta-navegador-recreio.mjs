export default {
  editorialVoice: 'hackportugal',
  id: 'carta-navegador-recreio',
  categoryId: 'food_leisure',
  title: 'Recreational skipper licence — categories and training (Carta de Navegador de Recreio)',
  tldr: 'Carta de Navegador de Recreio is the official skipper licence to operate a private recreational boat. Categories: MARINHEIRO (up to 5 miles, engine up to 30 kW), PATRÃO LOCAL (up to 12 miles, up to 50 kW), PATRÃO COSTEIRO (up to 25 miles), PATRÃO ALTO MAR (no limits). Minimum age: 16 for Marinheiro, 18 for Patrão. Training at accredited schools: 30–100 hours; exam at the Capitania do Porto (harbour master’s office), theory and practice. Cost: about €250–1,500 depending on category. Foreign certificates (RYA Day Skipper, ICC, ASA) can be converted via AMN (Portugal’s maritime authority) with a simplified exam.',
  tags: ['licence', 'skipper', 'amn', 'course', 'boating'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'when-needed',
      title: 'When the Carta is required — engine/size',
      content: [
        { kind: 'paragraph', text: 'A skipper licence is not required for every boat. Core rules by engine power and length:' },
        { kind: 'checklist', items: [
          'No licence: only boats with an engine ≤ 4.5 kW (~6 hp) and length ≤ 7 m',
          'MARINHEIRO: engine up to 30 kW (~40 hp) or sail, up to 5 miles from shore',
          'PATRÃO LOCAL: engine up to 50 kW (~67 hp), up to 12 miles',
          'PATRÃO COSTEIRO: no engine power limit, up to 25 miles',
          'PATRÃO ALTO MAR: no limits on engine power or distance',
          'Jet ski (mota de água): a separate Carta para motas de água is required — simplified course'
        ] },
        { kind: 'paragraph', text: 'Sailing areas: Local (local area), Costeira (coastal area), Largo (offshore/open sea).' },
        { kind: 'warning', text: 'Rental operators in the Algarve and Cascais often say: "take a 5 m motorboat without a licence". Check the engine: if it is over 4.5 kW you need at least Marinheiro. Otherwise the charter company risks a fine, and you may lose insurance cover in case of an incident.' }
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements to obtain',
      content: [
        { kind: 'checklist', items: [
          'Minimum 16 years (Marinheiro) or 18 years (Patrão)',
          'Medical certificate of fitness to operate a vessel (€30–50)',
          'Ability to swim: 50 m non-stop under supervision (for all categories)',
          'No visa restrictions: foreign nationals can obtain it on the same terms as Portuguese citizens',
          'NIF (tax number) and Cartão de Cidadão (citizen card) or passport + proof of address',
          'Course at an AMN-accredited school'
        ] }
      ]
    },
    {
      id: 'training',
      title: 'Training: where and how',
      content: [
        { kind: 'paragraph', text: 'See the list of accredited schools at amn.pt → Carta de Navegador → Escolas. Most schools are in Cascais, Lisboa, Setúbal, Vilamoura, Sesimbra, Porto.' },
        { kind: 'checklist', items: [
          'MARINHEIRO: 30–40 hours (theory + ~10 hours of practice), ~€250–400',
          'PATRÃO LOCAL: ~50 hours, ~€400–600',
          'PATRÃO COSTEIRO: ~80 hours, ~€600–1,000',
          'PATRÃO ALTO MAR: 100+ hours, ~€1,000–1,500 + sea practice ~200 miles',
          'Mota de água: ~16 hours, ~€150–250',
          'Programme: basics of navigation, Collision Regulations (COLREGS), VHF radio (basics), meteorology, safety, prevention and action in emergencies'
        ] },
        { kind: 'paragraph', text: 'Popular schools: Sea Boat Academy (Cascais), Náutica Escola (Lisbon), Escola de Vela do Sport Club do Porto, Yacht Master Algarve. CMI and other international organisations also run courses.' }
      ]
    },
    {
      id: 'exam',
      title: 'Exam and getting the Carta',
      content: [
        { kind: 'paragraph', text: 'The exam takes place at the Capitania do Porto (harbour master’s office):' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Booking the exam',
            content: [
              { kind: 'paragraph', text: 'The school submits the application on your behalf. Alternatively, you can book yourself via AMN. Waiting time is usually 2–6 weeks.' }
            ]
          },
          {
            id: 's2',
            title: 'Theory exam',
            content: [
              { kind: 'paragraph', text: 'A test of ~30–50 questions depending on category. Topics: COLREGS (rules of the road), chartwork, meteorology, safety, mandatory equipment. Pass mark — 70–75%.' }
            ]
          },
          {
            id: 's3',
            title: 'Practical exam',
            content: [
              { kind: 'paragraph', text: 'For Patrão categories and above. You must demonstrate: berthing alongside, "man overboard", using the VHF radio, working with GPS, compass navigation.' }
            ]
          },
          {
            id: 's4',
            title: 'Receiving the Carta',
            content: [
              { kind: 'checklist', items: [
                'Ready in about 2–4 weeks',
                'You can collect it at the Capitania or receive it by post',
                'Valid until age 70; then medical exam every 5 years',
                'Plastic card, like a driving licence'
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
        { kind: 'paragraph', text: 'If you already hold a foreign skipper certificate, many of them can be converted via AMN, usually with a simplified exam.' },
        { kind: 'checklist', items: [
          'RYA Day Skipper (UK) → usually converted to Patrão Costeiro with a theory exam',
          'RYA Yachtmaster Coastal/Offshore → Patrão Alto Mar',
          'ICC (International Certificate of Competence) → Patrão Local or Costeiro depending on endorsements',
          'ASA (US) Bareboat Cruising 104+ → generally convertible',
          'Russian "Skipper’s Certificate" → often requires re-examination; sometimes it is easier to take the course from scratch',
          'Ukrainian "Small Craft Skipper’s Certificate" → theory re-exam',
          'Brazilian "Habilitação Náutica" → simplified process under CPLP agreements'
        ] },
        { kind: 'paragraph', text: 'Documents for conversion:' },
        { kind: 'checklist', items: [
          'Original foreign certificate + sworn translation into Portuguese',
          'Logbook — advisable',
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
          'If you just want to cruise with friends in the Lisbon bay — take Marinheiro. A couple of weeks of training, ~€300',
          'Planning to charter in the Algarve / on Madeira / in the Azores — look at Patrão Local: without it many companies will not rent out boats',
          'For the ocean and passages between the Azores islands — at least Patrão Costeiro',
          'CMI (international) courses often give both the Portuguese Carta and the ICC',
          'Schools in Cascais and Vilamoura run training in English and issue the Portuguese Carta on completion',
          'Best time to enrol: October–March (low season and lower prices)',
          'Do not buy a boat before passing your Carta — there will be no one licensed to operate it',
          'Factor in marina berthing fees: in Cascais ~€30/day, in Lagos ~€25, in Vilamoura ~€50'
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
    { label: 'Medical exam for the Carta', amountEURMin: 30, amountEURMax: 50 },
    { label: 'Repeat medical exam (after 70, every 5 years)', amountEUR: 30 }
  ],
  sources: [
    { title: 'AMN — Recreational skipper licence', url: 'https://www.amn.pt/DGAM/Paginas/CartasdeNavegador.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'AMN — recognised schools', url: 'https://www.amn.pt/DGAM/Paginas/EscolasReconhecidas.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decree-Law 124/2004 — recreational craft', url: 'https://dre.pt/dre/detalhe/decreto-lei/124-2004-220127', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Ordinance 568/89 — categories and training', url: 'https://dre.pt/dre/detalhe/portaria/568-1989-580367', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 365
}
