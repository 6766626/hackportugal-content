export default {
  editorialVoice: 'hackportugal',
  id: 'incendio-rural-perto-casa',
  categoryId: 'emergency_rights',
  title: 'Wildfire nearby: evacuation, shelter, smoke, what comes after',
  tldr: 'If you live next to forest or scrubland, you need a fire plan BEFORE the fire. Check whether your village is in the "Aldeia Segura / Pessoas Seguras" programme (aldeiasseguras.pt): it has a designated local safety officer, marked shelter points (abrigo/refúgio) and evacuation routes — in 2026 the programme covers ~2 435 villages. Fire approaching: call 112, warn your neighbours, soak the walls/roof and 10 m around the house with water, close all windows/doors/shutters, move gas cylinders and flammables away from the walls. An evacuation order from GNR/PSP — comply immediately, take your kit, documents and animals, help the elderly. If it is already too late to leave — shelter in a stone house, in a room on the side facing away from the fire, and wait for the fire front to pass. Active fires: ANEPC map (prociv.gov.pt), sgifr.gov.pt, fogos.pt. After the fire: file a participação (claim notice) with your insurer (~8 days, though missing the deadline does not by itself void the payout), photograph the damage; if you lost your home — the Porta de Entrada programme (IHRU via the câmara).',
  tags: ['incêndio rural', 'wildfire', 'evacuation', 'aldeia segura'],
  estimatedReadMinutes: 8,
  recentlyChangedAt: '2026-07-09',
  changeSummary: 'New guide: what to do when a wildfire approaches your home — the Aldeia Segura programme (abrigo/refúgio points), the official ANEPC checklist, evacuation vs shelter, smoke and health (DGS/QualAr), insurance and Porta de Entrada support after the fire.',
  steps: [
    {
      id: 'prepare',
      title: 'Before the fire: plan and preparation',
      content: [
        { kind: 'paragraph', text: 'In areas where housing meets forest, the essentials are decided in advance: a cleared plot, an evacuation plan and knowing where to go. That is what the state programme "Aldeia Segura / Pessoas Seguras" (ANEPC) exists for: each village gets a designated local safety officer, abrigo (enclosed shelters) and refúgio (open assembly areas) are defined, and drills are held.' },
        { kind: 'checklist', items: [
          '🏘️ Check whether your village is on the programme list at aldeiasseguras.pt (filters by distrito/concelho/freguesia) — in 2026 ~2 435 localities take part, with ~1 580 abrigo and refúgio points.',
          'Not in the programme? Ask at the câmara municipal (town hall) or junta de freguesia (parish council) — the serviço municipal de proteção civil — where the nearest shelter is and who is responsible.',
          '🎒 Put together a kit de emergência (per ANEPC): first-aid kit and medication, water and non-perishable food, torch, radio, whistle, cash, a change of clothes, hygiene items, a list of contacts; keep documents (passport, título de residência) and a phone charger close by.',
          '🌿 Clearing 50 m around the house every year is a legal obligation (see the guide "Clearing your land / gestão de combustível"); plus a 1–2 m strip with no vegetation right against the walls, and keep firewood and tarpaulins well away from the house.',
          '📊 Track the daily fire danger level (PIR) for your municipality: ipma.pt/pt/riscoincendio — on "muito elevado"/"máximo" days, bans on fires and machinery apply automatically.',
          'Agree with your family in advance: who picks up whom, where you meet, who helps elderly neighbours.'
        ] }
      ]
    },
    {
      id: 'alerts',
      title: 'How to find out about a fire nearby',
      content: [
        { kind: 'checklist', items: [
          '📩 SMS from "AvisoPROCIV" — official geotargeted ANEPC alerts, sent to everyone in the risk zone, including foreign SIM cards (bilingual PT/EN). No subscription needed (see the separate guide for details).',
          '🗺️ Real-time ANEPC map of all incidents: prociv.gov.pt → "Ocorrências".',
          '🔥 The official SGIFR portal: sgifr.gov.pt — section "Fogos e Incêndios Rurais Ativos".',
          '📱 fogos.pt — an unofficial but authoritative volunteer aggregator (VOST Portugal) built on official data; most convenient on a phone.',
          '👀 If you see smoke/fire — call 112 immediately (there is also a dedicated line for reporting rural fires — 117); give the exact location and landmarks.',
          '🚗 Do not drive up to the fire "for a look" and do not block roads — the firefighters need them.'
        ] }
      ]
    },
    {
      id: 'fire-approaches',
      title: 'Fire approaching the house: the ANEPC checklist',
      content: [
        { kind: 'paragraph', text: 'If the fire is heading your way and evacuation has not yet been ordered, the official procedure (aldeiasseguras.pt / gov.pt) is:' },
        { kind: 'checklist', items: [
          '📞 112 — if you have not called yet; warn your neighbours, starting with the elderly and people with reduced mobility.',
          '💦 Soak the walls, the roof and the ground within ~10 m of the house with water.',
          '🚪 Close ALL doors, windows, shutters/blinds; plug the gaps with wet towels.',
          '🛋️ Move curtains, sofas and furniture away from the windows; move everything flammable (furniture, tarpaulins, firewood) away from the house.',
          '🧯 Gas cylinders — disconnect them and move them well away from the house.',
          '🔥 Small spot fires can be beaten out with water, earth or green branches — ONLY if it is safe; no heroics.',
          '📻 Keep your phone charged and follow the authorities\' instructions.'
        ] }
      ]
    },
    {
      id: 'evacuate-or-shelter',
      title: 'Evacuation or shelter',
      content: [
        { kind: 'paragraph', text: 'The golden rule: instructions from GNR/PSP/bombeiros are followed immediately and without argument — they see the whole picture of the fire, you do not.' },
        { kind: 'checklist', items: [
          '🏃 Evacuation ordered: take your kit, documents and animals, close the doors and windows, help children/the elderly/people with reduced mobility and head for the nearest assembly point/shelter (marked in Aldeia Segura villages). Do NOT waste time packing belongings.',
          '🏠 It is already IMPOSSIBLE to leave (fire on the escape routes): shelter in a stone house — a room on the side facing away from the fire, away from windows and exterior walls, all openings closed. The fire front passes quickly; afterwards, check the roof and the plot for smouldering hotspots.',
          '🚶 Caught in the open: head for flat ground with water or sparse vegetation; breathe close to the ground through a wet cloth; cover your head and body.',
          '🚗 Caught in a car in smoke: headlights and hazard lights on, windows closed, ventilation/air conditioning off; do not drive blindly into thick smoke; leave the car only as a last resort, covering your skin and airways as much as possible.',
          '❌ Do not return home until the authorities allow it — flare-ups are common.'
        ] },
        { kind: 'warning', text: 'Most of the people killed in Portuguese wildfires were trying to drive away at the last moment through the smoke (the Pedrógão Grande tragedy of 2017 — 66 deaths, many on the road). The decision to drive is only safe WHILE the fire is far away. If it is too late — sheltering in a stone house is safer than a car on the road.' }
      ]
    },
    {
      id: 'smoke',
      title: 'Smoke: health and air quality',
      content: [
        { kind: 'checklist', items: [
          '🏠 Per DGS: stay indoors, windows and doors closed; set the air conditioning to recirculation mode.',
          '🚭 Do not add smoke indoors: no candles, no gas hob unless necessary, no tobacco; do not exercise outdoors.',
          '😷 If you must go outside — an N95/FFP2 respirator mask; an ordinary surgical mask offers almost no protection against smoke.',
          '💨 Vulnerable people (asthma, COPD, heart conditions, children, pregnant women, the elderly) — "atenção redobrada" (extra caution): keep up your usual treatment; if you get worse — SNS 24: 808 24 24 24.',
          '🚨 Facial burns, difficulty breathing, confusion — 112 immediately.',
          '📉 Real-time air quality: QualAr (qualar.apambiente.pt, there is also an app) — a per-station index from "Muito Bom" to "Mau" plus protection advice.'
        ] }
      ]
    },
    {
      id: 'after',
      title: 'After the fire: insurance and state support',
      content: [
        { kind: 'checklist', items: [
          '📸 Before cleaning up, document all the damage: photos/videos, a list of what was damaged; do not throw away damaged property before the insurer\'s expert (perito) has inspected it.',
          '📝 File a participação de sinistro (claim notice) with your insurer within the deadline in your contract — as a rule, 8 days from when you learned of the loss. Important: per ASF guidance and case law, missing the 8 days does NOT by itself void the payout — the insurer must prove it was harmed by the delay.',
          '🏠 Fire is covered by a multirriscos-habitação (multi-risk home) policy; for flats in a condominium, fire insurance is mandatory by law.',
          '🆘 Lost your permanent home: the "Porta de Entrada" programme (DL 29/2018) — temporary accommodation + non-repayable grants for renting, rebuilding or new housing. Apply through the câmara municipal; the decision is approved by IHRU.',
          '🏛️ The câmara/junta is the first place to go for practical help (accommodation, water, clearing); after major fires the state often opens additional support lines — watch the municipality\'s announcements.',
          '🌲 Forest/land burned — document the damage and replanting too; if you suspect arson, report it to GNR/PSP (arson is a serious crime).'
        ] },
        { kind: 'paragraph', text: 'Related guides: "Clearing your land (gestão de combustível)", "AvisoPROCIV: SMS alerts", "Fires, barbecues, fireworks: when they are banned", "Bombeiros voluntários" and "Heat and ondas de calor".' }
      ]
    }
  ],
  sources: [
    { title: 'ANEPC — programa Aldeia Segura / Pessoas Seguras (medidas de autoproteção)', url: 'https://aldeiasseguras.pt/medidas-de-autoprotecao/', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'ANEPC / prociv.gov.pt — Aldeia Segura: programme description and statistics', url: 'https://prociv.gov.pt/pt/prevencao-e-preparacao/programas-e-projetos/aldeia-segura-pessoas-seguras/', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'gov.pt — Perigo de Incêndio Rural: saiba como se proteger', url: 'https://www.portugal.gov.pt/pt/gc23/comunicacao/noticia?i=perigo-de-incendio-rural-saiba-como-se-proteger', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'DGS — recomendações relativas à exposição ao fumo de incêndios', url: 'https://www.dgs.pt/em-destaque/recomendacoes-da-dgs-relativas-a-exposicao-ao-fumo-de-incendios.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'Portal da Habitação — Porta de Entrada: apoio ao alojamento urgente', url: 'https://www.portaldahabitacao.pt/web/guest/porta-de-entrada', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' },
    { title: 'ANEPC — aviso à população (SMS AvisoPROCIV)', url: 'https://prociv.gov.pt/pt/prevencao-e-preparacao/monitorizacao-alerta-e-aviso/aviso/', kind: 'official', language: 'pt', lastRetrieved: '2026-07-10' }
  ],
  lastVerified: '2026-07-10',
  verifyIntervalDays: 180
}
