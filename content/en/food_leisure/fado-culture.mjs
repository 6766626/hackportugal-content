export default {
  editorialVoice: 'hackportugal',
  id: 'fado-culture',
  categoryId: 'food_leisure',
  title: 'Fado — the soul of Portugal and where to hear it',
  tldr: 'Fado is a genre of Portuguese music included on UNESCO’s list of intangible cultural heritage (2011). “Fado” means “fate”. Its characteristic melancholy expresses saudade (longing, nostalgia). Two styles: Lisboa (female and male) and Coimbra (male only, academic). In Lisbon — Alfama, Mouraria, Bairro Alto. Concert with dinner — €30-80.',
  tags: ['fado', 'music', 'culture', 'lisbon', 'saudade'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-is-fado',
      title: 'What fado is',
      content: [
        { kind: 'paragraph', text: 'Fado (from Latin “fatum” — fate) is a genre born in Lisbon in the 1820s. Its roots lie in maritime and port songs, Afro-Brazilian lundu rhythms, and romances. Instruments: classical guitar (viola) and Portuguese guitar (guitarra portuguesa, similar to a mandolin, with 12 strings).' },
        { kind: 'paragraph', text: 'Themes: unhappy love, the sea, longing for the dead, nostalgia for the past, poverty, Lisbon. The overall tone is melancholic, but sometimes proud and passionate. The key emotion is saudade (a hard-to-translate feeling: longing mixed with love).' }
      ]
    },
    {
      id: 'styles',
      title: 'Two styles',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Fado de Lisboa', content: [
            { kind: 'paragraph', text: 'The better-known style. Men and women sing. They dress in black: women often in mourning dresses. The audience must keep quiet; applause comes only at the end of the song. The guitarists sit, the fadista stands with eyes closed.' }
          ]},
          { id: 's2', title: 'Fado de Coimbra', content: [
            { kind: 'paragraph', text: 'An academic style from the university city of Coimbra. ONLY men sing — students and graduates, in black cloaks (capas e batinas). More formal. Themes: student life, women, the city, farewells.' }
          ]}
        ]}
      ]
    },
    {
      id: 'legends',
      title: 'Legends and voices',
      content: [
        { kind: 'checklist', items: [
          '👑 Amália Rodrigues (1920-1999) — queen of fado, symbol of 20th-century Portugal. National Pantheon',
          '🎵 Carlos do Carmo (1939-2021) — modernised the genre and gained worldwide recognition',
          '🎤 Mariza — contemporary star, Brazilian-Portuguese singer',
          '🎤 Ana Moura — tradition and modernity',
          '🎤 Camané — classic male voice',
          '🎤 Cuca Roseta, Raquel Tavares, Cristina Branco — contemporary stars',
          '🎸 Ricardo Rocha, Custódio Castelo — legendary performers on the guitarra portuguesa'
        ]}
      ]
    },
    {
      id: 'where-listen',
      title: 'Where to listen in Lisbon',
      content: [
        { kind: 'substeps', items: [
          { id: 'w1', title: 'Casas de Fado', content: [
            { kind: 'paragraph', text: 'Restaurants with live fado during dinner. Quality varies greatly — from authentic places to tourist-oriented ones. Average price — €30-80 with dinner.' },
            { kind: 'checklist', items: [
              'Clube de Fado (Alfama) — an authentic place where stars often perform',
              'Mesa de Frades (Alfama) — in a former chapel with azulejos',
              'Tasca do Chico (Bairro Alto) — a small place for fado vadio (amateur fado)',
              'Parreirinha de Alfama — a historic place, open since 1950',
              'Senhor Vinho (Lapa) — an upmarket place with legendary fadistas',
              'Sr. Fado de Alfama — a family-run place'
            ]}
          ]},
          { id: 'w2', title: 'Fado vadio (amateur fado)', content: [
            { kind: 'paragraph', text: 'In small tascas in the Alfama and Mouraria neighbourhoods, amateurs sing in turns. This is more authentic and cheaper, but unpredictable. Places appear and disappear — try Tasca do Jaime, A Baiuca.' }
          ]},
          { id: 'w3', title: 'Concert halls', content: [
            { kind: 'checklist', items: [
              'Coliseu dos Recreios (Lisboa) — major concerts',
              'Centro Cultural de Belém — an active venue',
              'Museu do Fado (Alfama) — museum and concerts',
              'In Porto: Café Guarany, Coliseu do Porto'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'in-coimbra',
      title: 'Fado de Coimbra — where to listen',
      content: [
        { kind: 'checklist', items: [
          '🎓 Fado ao Centro — daily evening concerts in a historic house, €10 with port wine',
          '🎓 á Capella — in a former 14th-century chapel',
          '🎓 Diligência — a traditional tavern',
          '🎪 Queima das Fitas (May, 8 days) — the main festival with fado',
          '🎤 Students sometimes sing at street concerts during Queima or other events, free of charge'
        ]}
      ]
    },
    {
      id: 'etiquette',
      title: 'Visitor etiquette',
      content: [
        { kind: 'checklist', items: [
          '🤫 SILENCE during singing — do not talk, do not eat noisily, do not take flash photographs',
          '🎵 Pause after each song = applause. Do NOT applaud after verses',
          '🍷 Ordering wine or port wine is normal',
          '👔 Dress — smart casual, but very formal clothing is not required',
          '⏰ Singing usually starts at 21:00-22:00 and lasts 3-4 hours',
          '💰 The programme often includes dinner and singing — the cost depends on the menu',
          '🎫 Booking is essential at popular Casas, especially in season',
          '📝 The price list on the door is a formality; the real bill may include tips'
        ]}
      ]
    },
    {
      id: 'museum',
      title: 'Museu do Fado — go deeper',
      content: [
        { kind: 'paragraph', text: 'In Alfama (Largo do Chafariz de Dentro 1). State museum, admission — €5. Collection of instruments, photographs, audio and video archive, temporary exhibitions. Recommended BEFORE going to a live concert — it helps you understand the context.' },
        { kind: 'paragraph', text: 'There are scheduled live fado sessions and a shop with recordings.' }
      ]
    }
  ],
  sources: [
    { title: 'Museu do Fado — official', url: 'https://www.museudofado.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'UNESCO — Fado, Urban Popular Song of Portugal', url: 'https://ich.unesco.org/en/RL/fado-urban-popular-song-of-portugal-00563', kind: 'official', language: 'en', lastRetrieved: '2026-04-22' },
    { title: 'Turismo de Portugal — Fado', url: 'https://www.visitportugal.com/pt-pt/experiencias/fado', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
