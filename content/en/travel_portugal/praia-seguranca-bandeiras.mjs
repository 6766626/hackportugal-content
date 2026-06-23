export default {
  editorialVoice: 'hackportugal',
  id: 'praia-seguranca-bandeiras',
  categoryId: 'travel_portugal',
  title: 'Beach safety: flags, lifeguards and rip currents (agueiros)',
  tldr: 'The Atlantic in Portugal is cold and has strong currents — both locals and tourists drown here. The main rule: swim only on a vigiada (lifeguarded) beach, inside the zone between the yellow-and-red flags, and watch the lifeguard\'s signal flag. Green means you can swim, yellow means waist-deep only with no swimming out, red means stay out of the water entirely, and the chequered (black-and-white) flag means there is no lifeguard. This is NOT the same as the Bandeira Azul (Blue Flag), which is an eco-label for quality. If a rip current (agueiro) catches you, do not fight it — swim parallel to the shore. The emergency number in the water and on the beach is 112.',
  tags: ['beach', 'safety', 'praia', 'summer'],
  estimatedReadMinutes: 7,
  recentlyChangedAt: '2026-06-22',
  changeSummary: 'New guide: the meaning of beach flags, vigiada vs nao vigiada, rip currents (agueiros), heat and marine hazards, calling for help on 112.',
  steps: [
    {
      id: 'flags',
      title: 'Signal flags: what each one means 🚩',
      content: [
        { kind: 'paragraph', text: 'On a lifeguarded beach the lifeguard (nadador-salvador) raises a flag that tells you whether it is safe to go in the water right now. The flag can change during the day as the sea changes. Always check it before you go in, and do not take your cue from other people in the water — they may have entered under a different flag.' },
        { kind: 'checklist', items: [
          '🟢 Green — the sea is calm, swimming is allowed (within the supervised zone).',
          '🟡 Yellow — caution: you may go in up to your waist, but no swimming or going out of your depth — there are currents or difficult conditions.',
          '🔴 Red — danger: going into the water is completely forbidden, even ankle-deep.',
          '🏁 Chequered (black-and-white) — the beach is temporarily NOT supervised: the lifeguard has left or is not yet on post. Swimming is not advised.',
          '🟡🔴 Yellow-and-red (two bands) — this is NOT a ban but a marker of the supervised swimming zone between two such flags. Swim right here.',
          '🟣 Purple/violet — there are dangerous marine organisms in the water (for example the caravela-portuguesa — Portuguese man o\' war) or a water-quality problem.'
        ] },
        { kind: 'warning', text: 'The absence of a red flag is no guarantee of safety. If there is no flag at all (the beach is not lifeguarded), assess the risk yourself and remember: there will be no one to rescue you.' }
      ]
    },
    {
      id: 'vigiada',
      title: 'Praia vigiada vs nao vigiada and the epoca balnear',
      content: [
        { kind: 'paragraph', text: 'Lifeguard supervision is mandatory only during the official bathing season (epoca balnear) and only on equipped beaches. The season dates are set for each beach by a separate edital (usually from mid-June to mid-September, longer in the south). Out of season and on "wild" beaches there are no lifeguards, even if the weather feels like summer.' },
        { kind: 'checklist', items: [
          'Swim on a praia vigiada — where there is a lifeguard post, a flag and a marked zone.',
          'Go in only between the yellow-and-red flags: this is the zone the lifeguard can actually see and where there are no known currents.',
          'On a nao vigiada (unequipped) beach, in rivers, lagoons and near cliffs there are no lifeguards — the risk is higher and help is further away.',
          'Do not swim alone, at night, after alcohol or right after eating.',
          'The cold Atlantic water causes shock even in fit swimmers: go in gradually.',
          'Watch children constantly and keep them within arm\'s reach — drowning is silent and fast.'
        ] },
        { kind: 'paragraph', text: 'Bandeira Azul (the Blue Flag) is a separate matter: an annual eco-label for water quality, services and safety, not a swimming signal flag. A Blue Flag on a beach does not mean "you can go in the water now" — look at the lifeguard\'s signal flag instead.' }
      ]
    },
    {
      id: 'agueiros',
      title: 'Rip currents (agueiros / correntes de retorno) 🌊',
      content: [
        { kind: 'paragraph', text: 'An agueiro (rip current) is a narrow stream of water flowing away from the shore out to sea. It is the leading cause of drowning on the Atlantic coast. It does not pull you under — it carries you away from the shore, and people drown trying to swim against it and exhausting themselves.' },
        { kind: 'checklist', items: [
          'How to spot it: a strip of darker, calmer or murkier water where the waves seem not to break; foam and objects drifting out to sea.',
          'If you are carried out: do not panic and do NOT swim against the current towards the shore.',
          'Swim parallel to the shore (along the beach) until you are out of the stream, then head in diagonally towards the shore.',
          'If you have no strength left, lie on your back, relax, stay afloat, raise an arm and call for help.',
          'If you see someone drowning, call the lifeguard and 112, throw a floating object, but do not jump in unprepared: drowning people drag their rescuers under.'
        ] },
        { kind: 'warning', text: 'Do not overestimate yourself. The ocean in Portugal is stronger than it looks from the shore; even in shallow water a "trap" wave (onda traicoeira) and the backwash current can knock you off your feet.' }
      ]
    },
    {
      id: 'other-risks',
      title: 'Sun, jellyfish, cliffs and water quality',
      content: [
        { kind: 'checklist', items: [
          '☀️ Sun: SPF 30+, reapply after the water; shade roughly from 11:00 to 17:00; water and a hat. By the ocean it is easy to burn in the wind without feeling the heat.',
          '🪼 Caravela-portuguesa (Portuguese man o\' war) and jellyfish: do not touch them even on the sand; for a sting, rinse with sea water (not fresh water), remove any remnants, see a lifeguard; for a severe reaction, call 112.',
          '🧗 Arribas (cliffs): do not stand beneath cliffs or at their edge — collapses are real and deadly; obey the signs and keep your distance.',
          '🌊 Tide (mare): on some beaches the tide cuts off sections of the shore — check the tide table and do not fall asleep near the water.',
          '💧 Water quality: check the beach status in the APA "info praia" app/portal (qualidade da agua); after heavy rain the quality temporarily drops.',
          '🐾 Mind the rules: on many beaches dogs and fires are banned in season — check the edital and the signs.'
        ] }
      ]
    },
    {
      id: 'emergency',
      title: 'If something happens: calling for help',
      content: [
        { kind: 'paragraph', text: 'Safety in the water is the responsibility of the Autoridade Maritima Nacional (AMN) and its Instituto de Socorros a Naufragos (ISN), which trains and certifies lifeguards. But in an emergency you do not need to know the structure — act quickly.' },
        { kind: 'checklist', items: [
          'Immediately call the nearest nadador-salvador — they are trained and closest to you.',
          'Call 112: this is the single number for ambulance, sea and fire. State the beach name, landmarks, what happened and how many people.',
          'For drowning: once you have pulled the person out, check their breathing; if there is none, start CPR (resuscitation) and do not stop until INEM arrives.',
          'For heatstroke: shade, cooling with water and wet cloths, water in small sips if the person is conscious; for confusion or loss of consciousness, call 112.',
          'Note or memorise the lifeguard post number and the beach name in advance — it speeds up help.',
          'Non-urgent health doubts — SNS 24: 808 24 24 24.'
        ] },
        { kind: 'warning', text: 'Do not send children or weak swimmers to "just dip their feet" unsupervised, even under a green flag. Most tragedies are seconds of inattention, not a storm.' }
      ]
    }
  ],
  sources: [
    {
      title: 'Autoridade Maritima Nacional — beach safety and flags',
      url: 'https://www.amn.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    },
    {
      title: 'ISN — Instituto de Socorros a Naufragos (lifeguards)',
      url: 'https://www.amn.pt/isn/Paginas/ISN.aspx',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    },
    {
      title: 'APA — info praia: bathing water quality',
      url: 'https://www.apambiente.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    },
    {
      title: 'SNS 24 — health line 808 24 24 24',
      url: 'https://www.sns24.gov.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-06-23'
    }
  ],
  lastVerified: '2026-06-23',
  verifyIntervalDays: 180
}
