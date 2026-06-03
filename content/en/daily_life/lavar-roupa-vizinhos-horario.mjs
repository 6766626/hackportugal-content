export default {
  editorialVoice: 'hackportugal',
  id: 'lavar-roupa-vizinhos-horario',
  categoryId: 'daily_life',
  title: 'Laundry and noise in a flat: Portuguese rules and timings',
  tldr: 'In Portugal there is no separate law on “when you can do laundry”, but the Regulamento Geral do Ruído — Decreto-Lei 9/2007 applies. For ruído de vizinhança, the police can intervene especially at night: under the national rule, the critical period is 23:00–07:00.\n\nIn practice, buildings often specify 22:00–07:00 or 22:00–08:00 in the regulamento do condomínio. It is safer to plan washing machines, tumble dryers, vacuuming and drilling for 08:00–21:30, and to be even more careful in older buildings.',
  tags: ['noise', 'laundry', 'condomínio', 'neighbours'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'basic-rule',
      title: 'Basic rule: the law is about noise, not washing machines',
      content: [
        { kind: 'paragraph', text: 'The Portuguese Decreto-Lei 9/2007 establishes the Regulamento Geral do Ruído. It does not list household appliances by type, but it classifies loud domestic activity as ruído de vizinhança — noise from neighbours, animals, appliances, music, works or people’s behaviour.' },
        { kind: 'paragraph', text: 'The key practical boundary under the national rule is 23:00–07:00. If noise disturbs neighbours during this period, the PSP/GNR or Polícia Municipal may order the noise to stop immediately or take measures. During the day, the authorities usually give a deadline to fix the problem if the noise is regular and provable.' },
        { kind: 'warning', text: 'The phrase “anything is allowed until 23:00” is wrong. If the washing machine vibrates strongly, the dryer hums, and the floor transmits impact noise downstairs, complaints are possible during the day too — especially if it happens repeatedly.' }
      ]
    },
    {
      id: 'safe-schedule',
      title: 'A practical horário for laundry 🧺',
      content: [
        { kind: 'paragraph', text: 'The safest routine for a flat in Portugal is to run the washing machine and tumble dryer during the day and early evening, so that the spin cycle does not fall late in the evening.' },
        { kind: 'checklist', items: [
          'Optimal: 08:00–21:30 on weekdays.',
          'On Sundays and feriados, it is better to avoid early morning: start after 09:00–10:00.',
          'Do not schedule the spin cycle for 22:00–07:00, even if the national night-time boundary is formally 23:00.',
          'If a cycle lasts 2–3 hours, count the finishing time, not the start time: the loudest stage is the spin at the end.',
          'A tumble dryer is often audible for longer than a washing machine: do not run it overnight in old buildings.',
          'Vacuuming, furniture assembly, moving things around, a treadmill — these carry the same domestic risks as laundry.',
          'If you work shifts, choose a short programme without night-time spinning or use a self-service lavanderia.',
          'For Airbnb/guests, leave a written rule: “máquina de lavar até 21:30”.'
        ] }
      ]
    },
    {
      id: 'condominium-rules',
      title: 'Check the regulamento do condomínio',
      content: [
        { kind: 'paragraph', text: 'Apartment buildings almost always have a regulamento do condomínio or decisions of the assembleia de condóminos. These do not override Decreto-Lei 9/2007, but they can introduce internal rules on the use of common areas and residents’ behaviour.' },
        { kind: 'checklist', items: [
          'Ask the senhorio, administração do condomínio or porteiro for a copy of the regulamento.',
          'Look for sections: ruído, descanso, obras, máquinas, estendais, varandas, partes comuns.',
          'Typical internal quiet hours: 22:00–07:00 or 22:00–08:00.',
          'For obras there are often separate windows: for example 08:00–20:00 on weekdays, excluding Sundays and feriados.',
          'A ban may concern not the laundry itself, but vibration, dripping water, the façade or clothes over the railings.',
          'If the flat is rented, breaching condomínio rules may become a conflict with the senhorio.',
          'It is better to ask for condomínio decisions in writing: email or PDF, not verbally in the lift.'
        ] },
        { kind: 'warning', text: 'The condomínio cannot invent fines like a state authority, but it can record breaches, require compliance with the rules, contact the senhorio, the police or the court in cases of systematic noise.' }
      ]
    },
    {
      id: 'how-to-reduce-noise',
      title: 'How to do laundry quietly and avoid quarrelling with neighbours',
      content: [
        { kind: 'paragraph', text: 'Portugal has many buildings with thin floor slabs, wooden floors and shafts where washing machine noise is transmitted across several floors. Even a new machine can sound like renovation works if it is not level.' },
        { kind: 'checklist', items: [
          'Level the machine: all four feet should stand firmly on the floor.',
          'Put an anti-vibration mat or rubber pads under the feet.',
          'Do not overload the drum: overloading increases impact during the spin cycle.',
          'Reduce the spin speed to 800–1000 rpm in the evening.',
          'Do not place the machine right up against a wall or kitchen unit — the body transmits vibration.',
          'Check the transit bolts after moving: if they have not been removed, the machine will “jump”.',
          'Do not slam doors, or move laundry baskets and drying racks over tiles late in the evening.',
          'If a neighbour complains, suggest a test: run the spin cycle during the day and listen from inside their flat.'
        ] }
      ]
    },
    {
      id: 'if-neighbours-complain',
      title: 'If neighbours complain or you are suffering from noise',
      content: [
        { kind: 'paragraph', text: 'The Portuguese style for resolving everyday conflicts is to start calmly and specifically. It is better not to argue about “my right to do laundry”, but to propose a horário and technical measures.' },
        { kind: 'substeps', items: [
          { id: 'you-are-noisy', title: 'If people complain about you', content: [
            { kind: 'checklist', items: [
              'Ask at what times and during which stage the noise is audible.',
              'Show that you have changed your horário: for example, laundry only until 21:30.',
              'Check the machine, feet, mat and spin speed.',
              'If people write in the condomínio WhatsApp — reply briefly and politely, without sarcasm.',
              'If the housing is rented, inform the senhorio about the technical problem with the machine or floor.'
            ] }
          ] },
          { id: 'neighbour-is-noisy', title: 'If the neighbours are making noise', content: [
            { kind: 'checklist', items: [
              'Record dates, times and type of noise: for example, “01:10–02:00, washing machine spin cycle”.',
              'First write to the neighbour or the condomínio administration.',
              'Ask for the regulamento do condomínio to be applied, if there is one.',
              'For night-time noise, call the PSP/GNR or Polícia Municipal; in Lisbon, also be guided by Câmara Municipal channels.',
              'Do not bang on radiators or play music in response — this will make you a violator too.'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'The police are not required to measure decibels in every domestic situation. For ruído de vizinhança, what matters is the fact of disturbing noise, the time, repetition and the possibility of stopping the source immediately.' }
      ]
    },
    {
      id: 'drying-balcony',
      title: 'Drying laundry, varanda and the façade',
      content: [
        { kind: 'paragraph', text: 'Drying laundry is another common cause of conflict. There is no universal national ban on “drying clothes on the balcony”, but rules may exist in the condomínio, municipal regulations or the tenancy agreement.' },
        { kind: 'checklist', items: [
          'Do not hang laundry so that water drips onto the balcony below, passers-by or common areas.',
          'Do not attach an estendal to the façade without permission if this changes the appearance of the building.',
          'In historic areas, façade rules may be stricter.',
          'A folding drying rack inside the varanda is usually less contentious than laundry over the railings.',
          'Check the tenancy agreement: the senhorio sometimes expressly prohibits external fixtures.',
          'If there is a shared drying area, find out the horário and access rules.'
        ] }
      ]
    }
  ],
  sources: [
    {
      title: 'Decreto-Lei 9/2007 — General Noise Regulation',
      url: 'https://dre.pt/dre/detalhe/decreto-lei/9-2007-538430',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Câmara Municipal de Lisboa — municipal information on noise',
      url: 'https://www.cm-lisboa.pt',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
