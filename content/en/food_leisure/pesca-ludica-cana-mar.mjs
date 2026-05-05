export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-ludica-cana-mar',
  categoryId: 'food_leisure',
  title: 'Sea fishing from the shore — Pesca Lúdica à linha licence (DGRM)',
  tldr: 'Recreational sea fishing from the shore, pier or rocks in Portugal requires a Pesca Lúdica (recreational fishing) licence from DGRM. Apply online at portal.dgrm.mm.gov.pt in 5 minutes. Durations: 3 days (~€3), month (~€10), year (~€20), 3 years (~€50). Print or save the QR code with the licence: if checked by Polícia Marítima (maritime police) / GNR‑SEPNA (environmental unit of the national guard) without it, the fine starts at €100. Observe the daily limit (10 kg + 1 fish, or a single fish >10 kg), minimum sizes and defeso (closed season) by species.',
  tags: ['fishing', 'licence', 'sea', 'dgrm', 'recreational-fishing'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-needs-license',
      title: 'Who needs a licence and what is Pesca Lúdica 🎣',
      content: [
        { kind: 'paragraph', text: 'Recreational sea fishing in Portugal is regulated by DGRM (Directorate‑General for Natural Resources, Safety and Maritime Services; Direção‑Geral de Recursos Naturais, Segurança e Serviços Marítimos). “Sea” covers the Atlantic, the Tejo and Sado up to the limits of the maritime waters, estuaries and river mouths.' },
        { kind: 'checklist', items: [
          'A licence is required for everyone aged 16 and over — both residents and tourists',
          'Children under 16 may fish without a licence under the supervision of a licensed adult',
          'Pesca Lúdica (recreational/sport fishing, not for sale)',
          'Any attempt to sell the catch = commercial fishing, needs a different licence and the rules are far stricter',
          'Pesca Lúdica categories: à linha (rod/spinning from shore or from a boat), apneia (spearfishing), apanha (gathering shellfish, seaweed)',
          'Here we cover à linha from the shore. Boat and spearfishing are in separate guides'
        ] },
        { kind: 'warning', text: 'In fresh waters (rivers, reservoirs) the licence is different — it is issued by ICNF (nature and forests authority), not DGRM. Do not confuse: the sea licence is not valid, for example, on the Mondego, the Douro above the tidal zone, etc.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Apply online — step by step',
      content: [
        { kind: 'paragraph', text: 'The fastest route is via portal.dgrm.mm.gov.pt. You need NIF (tax number) and Cartão de Cidadão or a passport + email. Payment online via Multibanco (payment system/ATMs) or MB WAY (mobile wallet).' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Go to portal.dgrm.mm.gov.pt',
            content: [
              { kind: 'paragraph', text: 'Licenciamento section (licensing) → Pesca Lúdica. You can proceed without an account: use one of the authentication options.' },
              { kind: 'checklist', items: [
                'Authentication via Chave Móvel Digital (digital key, CMD) — the fastest option for residents',
                'Or via Cartão de Cidadão with a card reader',
                'Or register with NIF + email — if you do not have CMD/CC'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Choose the type and duration of licence',
            content: [
              { kind: 'checklist', items: [
                'Pesca à linha — from shore (apeada: from shore, bridge, breakwater): the most common choice',
                'Duration: 3 days (for short trips), 1 month, 1 year, 3 years',
                'A year works out cheaper if you fish at least a couple of times per season',
                'Leave the “Embarcação” (vessel) field unchecked — that is for a boat, separate guide'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Pay and save the licence',
            content: [
              { kind: 'paragraph', text: 'After payment you will receive a PDF with a QR code and number. Printing is not required — you can show it on your phone during an inspection. Save it in Files / Notes / Apple Wallet.' },
              { kind: 'warning', text: 'The licence is tied to the name and NIF. You cannot transfer it to another person — during a check they will ask for the holder’s ID.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'rules-and-limits',
      title: 'Rules: where, what and how much to fish',
      content: [
        { kind: 'paragraph', text: 'The licence is only the start. Minimum sizes by species, defeso (closed season) and the daily bag limit apply.' },
        { kind: 'checklist', items: [
          'Daily limit: 10 kg of catch per person per day + 1 fish, OR a single fish weighing >10 kg (if you land one, you are done for the day)',
          'Minimum sizes: robalo 36 cm, dourada 23 cm, sargo 25 cm, choco 10 cm, polvo 750 g, etc. — full list on the DGRM website',
          'Defeso: closed periods by species. robalo — partial ban in winter months; sardinha — summer defeso (dates change annually)',
          'Prohibited species: santola in certain periods, some rays — all year round',
          'Prohibited methods: tresmalho/redes (nets) — professionals only; explosives, poison, electric shock — never',
          'Tackle: up to 2 rods simultaneously, up to 3 hooks on each',
          'No‑go zones: Reserva Natural das Berlengas, Parque Marinho Luiz Saldanha (Arrábida), parts of the Tejo estuary — partially or fully closed to recreational fishers',
          'Night fishing: allowed in most areas, but in some nature parks — daytime only'
        ] },
        { kind: 'warning', text: 'Each species has its own rules. Before a trip, check the latest data on dgrm.pt for the species you target — annual orders (portarias) adjust limits. The DGRM “Pesca em Portugal” app stores information offline.' }
      ]
    },
    {
      id: 'where-to-fish',
      title: 'Good shore fishing spots',
      content: [
        { kind: 'paragraph', text: 'The Atlantic coast offers different fish depending on region and season. A few all‑round spots near Lisbon and Porto:' },
        { kind: 'checklist', items: [
          'Cabo da Roca / Cabo Raso (Sintra‑Cascais): rocks, robalo and sargo; safe in low swell',
          'Costa da Caparica: long sandy beach, surf‑casting for robalo and corvina',
          'Setúbal — Sado estuary: mixed fishing, dourada and robalo',
          'Sesimbra — harbour and rocks: a classic for choco and sargo',
          'Cascais Marina — outer breakwaters: easy access, you can go with children',
          'Ericeira — rocks: sport fishing, beware the tide',
          'Peniche — harbour and Cabo Carvoeiro: steady catches year‑round',
          'Foz do Arelho / Lagoa de Óbidos: estuary, DGRM licence required',
          'Algarve — Ria Formosa lagoons: from Olhão to Tavira; some zones in the nature park with additional rules',
          'Porto — Foz do Douro and northern breakwaters: seasonal sardinha and cavala'
        ] },
        { kind: 'warning', text: 'Safety: do not stand on wet rocks in a storm. Every year in Portugal dozens of people die while fishing on the Atlantic. Follow the “watch the waves” rule: observe the spot for 15 minutes before stepping out.' }
      ]
    },
    {
      id: 'enforcement',
      title: 'Who checks and what are the fines',
      content: [
        { kind: 'checklist', items: [
          'Polícia Marítima — main checks on the coast and in harbours',
          'GNR‑SEPNA — the environmental unit of the national guard, patrols nature parks',
          'Capitania do Porto — in harbours and estuaries',
          'ICNF rangers — in nature parks'
        ] },
        { kind: 'paragraph', text: 'They check: the licence (PDF/QR), an identity document, the catch (species, size, weight), and tackle.' },
        { kind: 'checklist', items: [
          'No licence: €100–€500, equipment and catch may be confiscated',
          'Exceeding the daily limit: €100–€500, excess confiscated',
          'Fish below the minimum size: €100–€250 per instance',
          'Defeso (closed season): up to €1,000, criminal prosecution possible for repeat offences',
          'Prohibited methods (nets, explosives, etc.): criminal case',
          'Attempting to sell the catch: deemed commercial fishing without a licence — fines in the thousands of euros'
        ] },
        { kind: 'warning', text: 'If you catch a fish below the minimum size — release it ALIVE back into the water. Taking it “so it does not go to waste” is not allowed — that is an offence, and inspectors will notice.' }
      ]
    },
    {
      id: 'gear-and-bait',
      title: 'Tackle, bait, where to buy',
      content: [
        { kind: 'paragraph', text: 'Fishing tackle shops (artigos de pesca) are in every large town. Chains: Decathlon, El Corte Inglés (in Lisbon and Porto), Trovo Pesca, A Náutica.' },
        { kind: 'checklist', items: [
          'Starter surf‑casting kit: 3.6–4.2 m rod, 6000+ reel, 0.30–0.40 mm line — €60–€120',
          'Spinning for robalo: 2.4–3 m rod, 3000–4000 reel, 0.18 braid — €80–€150',
          'Live bait (camarão, minhocas) — at markets by the ports or in specialist shops',
          'Artificial lures (jigs, paddle tails) — in Decathlon or online',
          'Choco in Setúbal: special jigs for cuttlefish — €5–€10 each',
          'No licence is needed for “practice” casts without a hook, but it is debatable — better to have one'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Pesca Lúdica licence — 3 days', amountEUR: 3, note: 'For short tourist trips' },
    { label: 'Licence — 1 month', amountEUR: 10, note: 'A good choice for one holiday or a season' },
    { label: 'Licence — 1 year', amountEUR: 20, note: 'Best value if you fish 2+ times per season' },
    { label: 'Licence — 3 years', amountEUR: 50, note: 'For those who fish regularly' },
    { label: 'Basic surf‑casting kit', amountEURMin: 60, amountEURMax: 150, note: 'Rod + reel + line + hooks + bait' },
    { label: 'Fine for no licence', amountEURMin: 100, amountEURMax: 500, note: 'Plus confiscation of tackle and catch' }
  ],
  sources: [
    { title: 'DGRM — Pesca Lúdica, licences and rules', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'DGRM Licensing Portal — apply online', url: 'https://portal.dgrm.mm.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto‑Lei 246/2000 — Pesca Lúdica regime in marine waters', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Minimum sizes by species — DGRM table', url: 'https://www.dgrm.pt/pesca_cpt_especies', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Polícia Marítima — National Maritime Authority', url: 'https://www.amn.pt/PM/Paginas/MissaoCompetencias.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
