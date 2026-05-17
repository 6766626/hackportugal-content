export default {
  editorialVoice: 'hackportugal',
  id: 'lavar-roupa-vizinhos-horario',
  categoryId: 'daily_life',
  title: 'Laundry and noise in a flat: Portuguese rules and times',
  tldr: 'In Portugal there is no separate law saying “when you may do laundry”, but the Regulamento Geral do Ruído — Decreto-Lei 9/2007 applies. For ruído de vizinhança the police can intervene, especially at night: under the national rule, the critical period is 23:00–07:00. In practice, buildings often set 22:00–07:00 or 22:00–08:00 in the regulamento do condomínio. It is safer to schedule the washing machine, tumble dryer, hoovering and drilling for 08:00–21:30, and to be even more careful in older buildings.',
  tags: ['noise', 'laundry', 'condomínio', 'neighbours'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'basic-rule',
      title: 'Basic rule: the law is about noise, not washing machines',
      content: [
        { kind: 'paragraph', text: 'Portuguese Decreto-Lei 9/2007 establishes the Regulamento Geral do Ruído. It does not list household appliances by type, but it treats loud domestic activity as ruído de vizinhança — noise from neighbours, animals, appliances, music, works or people’s behaviour.' },
        { kind: 'paragraph', text: 'The key practical boundary under the national rule is 23:00–07:00. If noise disturbs neighbours during this time, PSP/GNR or Polícia Municipal may order the noise to stop immediately or take measures. During the day, the authorities usually give a deadline to resolve the problem if the noise is regular and can be proven.' },
        { kind: 'warning', text: 'The phrase “until 23:00 anything is allowed” is wrong. If the washing machine vibrates strongly, the tumble dryer hums, and the floor transmits impact noise downstairs, complaints are possible during the day too — especially if it happens repeatedly.' }
      ]
    },
    {
      id: 'safe-schedule',
      title: 'A practical horário for laundry 🧺',
      content: [
        { kind: 'paragraph', text: 'The safest routine for a flat in Portugal is to run the washing machine and tumble dryer during daytime and early evening hours, so that the spin cycle does not fall late in the evening.' },
        { kind: 'checklist', items: [
          'Optimal: 08:00–21:30 on weekdays.',
          'On Sundays and feriados it is better to avoid early morning: start after 09:00–10:00.',
          'Do not schedule the spin cycle for 22:00–07:00, even if the national night-time boundary is formally 23:00.',
          'If a cycle lasts 2–3 hours, calculate the finish time, not the start time: the loudest stage is the spin cycle at the end.',
          'A tumble dryer is often audible for longer than a washing machine: do not run it overnight in older buildings.',
          'Hoovering, assembling furniture, moving furniture, a treadmill — these carry the same household risks as laundry.',
          'If you work shifts, choose a short programme without a night-time spin cycle or use a self-service lavanderia.',
          'For Airbnb/guests, leave a written rule: “máquina de lavar até 21:30”.'
        ] }
      ]
    },
    {
      id: 'condominium-rules',
      title: 'Check the regulamento do condomínio',
      content: [
        { kind: 'paragraph', text: 'Apartment buildings almost always have a regulamento do condomínio or decisions of the assembleia de condóminos. They do not override Decreto-Lei 9/2007, but they may introduce internal rules on the use of common areas and residents’ behaviour.' },
        { kind: 'checklist', items: [
          'Ask the senhorio, administração do condomínio or porteiro for a copy of the regulamento.',
          'Look for sections: ruído, descanso, obras, máquinas, estendais, varandas, partes comuns.',
          'Typical internal quiet hours: 22:00–07:00 or 22:00–08:00.',
          'For obras there are often separate windows: for example 08:00–20:00 on weekdays, excluding Sundays and feriados.',
          'A ban may concern not the laundry itself, but vibration, dripping water, the façade or laundry hanging over railings.',
          'If the flat is rented, breaching condomínio rules may become a conflict with the senhorio.',
          'It is better to request condomínio decisions in writing: email or PDF, not verbally in the lift.'
        ] },
        { kind: 'warning', text: 'Condomínio cannot invent fines like a state authority, but it can record breaches, demand compliance with the rules, contact the senhorio, the police or the courts in cases of systematic noise.' }
      ]
    },
    {
      id: 'how-to-reduce-noise',
      title: 'How to do laundry quietly and avoid arguments with neighbours',
      content: [
        { kind: 'paragraph', text: 'Portugal has many buildings with thin floor slabs, wooden floors and shafts where the sound of a washing machine carries across several floors. Even a new machine can sound like building work if it is not level.' },
        { kind: 'checklist', items: [
          'Level the machine: all four feet must stand firmly on the floor.',
          'Place an anti-vibration mat or rubber pads under the feet.',
          'Do not overload the drum: overloading makes the spin cycle more forceful.',
          'Reduce the spin speed to 800–1000 rpm in the evening.',
          'Do not place the machine hard against a wall or kitchen unit — the body transmits vibration.',
          'Check the transit bolts after moving: if they have not been removed, the machine will “jump”.',
          'Do not slam doors or move baskets and drying racks across tiles late in the evening.',
          'If a neighbour complains, suggest a test: run the spin cycle during the day and listen from their flat.'
        ] }
      ]
    },
    {
      id: 'if-neighbours-complain',
      title: 'If neighbours complain or you are suffering from noise',
      content: [
        { kind: 'paragraph', text: 'The Portuguese style for resolving household conflicts is to be calm and specific first. It is better not to argue about “my right to do laundry”, but to suggest a horário and technical measures.' },
        { kind: 'substeps', items: [
          { id: 'you-are-noisy', title: 'If people complain about you', content: [
            { kind: 'checklist', items: [
              'Ask at what times and during which stage the noise is heard.',
              'Show that you have changed your horário: for example, laundry only until 21:30.',
              'Check the machine, feet, mat and spin speed.',
              'If people write in the WhatsApp condomínio group, reply briefly and politely, without sarcasm.',
              'If the home is rented, tell the senhorio about the technical problem with the machine or floor.'
            ] }
          ] },
          { id: 'neighbour-is-noisy', title: 'If the neighbours are making noise', content: [
            { kind: 'checklist', items: [
              'Record the dates, times and type of noise: for example, “01:10–02:00, washing machine spin cycle”.',
              'First write to the neighbour or the administração do condomínio.',
              'Ask for the regulamento do condomínio to be applied, if there is one.',
              'For night-time noise, call PSP/GNR or Polícia Municipal; in Lisbon, also use Câmara Municipal channels as a guide.',
              'Do not bang on radiators and do not play music in response — that will make you a nuisance too.'
            ] }
          ] }
        ] },
        { kind: 'warning', text: 'The police are not obliged to measure decibels in every household situation. For ruído de vizinhança, what matters is the fact of disturbing noise, the time, repetition and the possibility of stopping the source immediately.' }
      ]
    },
    {
      id: 'drying-balcony',
      title: 'Drying laundry, varanda and façade',
      content: [
        { kind: 'paragraph', text: 'Drying laundry is a separate frequent cause of conflict. There is no universal national ban saying “you cannot dry clothes on the balcony”, but rules may exist in the condomínio, municipal regulations or the tenancy agreement.' },
        { kind: 'checklist', items: [
          'Do not hang laundry in a way that lets water drip onto the balcony below, passers-by or common areas.',
          'Do not attach an estendal to the façade without permission if it changes the appearance of the building.',
          'In historic areas, façade rules may be stricter.',
          'A folding drying rack inside the varanda is usually less contentious than laundry hanging over railings.',
          'Check the tenancy agreement: the senhorio sometimes expressly bans external fixings.',
          'If there is a common drying area, find out the horário and access rules.'
        ] }
      ]
    }
  ],
  sources: [
    {
      title: 'Decreto-Lei 9/2007 — Regulamento Geral do Ruído',
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
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
