export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-ludica-cana-mar',
  categoryId: 'food_leisure',
  title: 'Sea fishing from shore — Pesca Lúdica à linha licence (DGRM)',
  tldr: 'Recreational sea fishing from the shore, pier or rocks in Portugal requires a Pesca Lúdica (recreational fishing) licence from DGRM. Apply online at portal.dgrm.mm.gov.pt in 5 minutes. Durations: 3 days (~€3), 1 month (~€10), 1 year (~€20), 3 years (~€50). Print or save the QR code with the licence: during checks by Polícia Marítima (maritime police) / GNR‑SEPNA (the National Guard’s environmental unit) the fine without it starts at €100. Follow the daily bag limit (10 kg + 1 fish, or a single fish >10 kg), minimum sizes and defeso (closed season) by species.',
  tags: ['fishing', 'licence', 'sea', 'dgrm', 'angling'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-needs-license',
      title: 'Who needs a licence and what is Pesca Lúdica 🎣',
      content: [
        { kind: 'paragraph', text: 'Recreational sea fishing in Portugal is regulated by DGRM (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos; the directorate-general for maritime resources). “Sea” covers the Atlantic, the Tejo and Sado up to the limits of marine waters, estuaries and river mouths.' },
        { kind: 'checklist', items: [
          'A licence is required for everyone aged 16+ — both residents and tourists',
          'Children under 16 may fish without a licence under the supervision of an adult who holds one',
          'Pesca Lúdica (recreational/sport fishing, not for sale)',
          'Any attempt to sell your catch = commercial fishing; a different licence is required and rules are far stricter',
          'Pesca Lúdica categories: à linha (rod/spinning from shore or from a boat), apneia (spearfishing), apanha (collecting molluscs, seaweed)',
          'This guide is about à linha from shore. Boat and spearfishing are covered in separate guides'
        ] },
        { kind: 'warning', text: 'In fresh waters (rivers, reservoirs) the licence is different — it is issued by ICNF (the nature and forests authority), not DGRM. Do not mix them up: the sea licence is not valid, for example, on the Mondego, the Douro above the tidal zone, etc.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Apply online — step by step',
      content: [
        { kind: 'paragraph', text: 'The fastest way is via portal.dgrm.mm.gov.pt. You need a NIF (tax number) and a Cartão de Cidadão (citizen card) or a passport + email. Pay online via Multibanco (ATM/payment system) or MB WAY (mobile wallet).' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Go to portal.dgrm.mm.gov.pt',
            content: [
              { kind: 'paragraph', text: 'Licenciamento (licensing) section → Pesca Lúdica. You can proceed without an account: use one of the authentication options.' },
              { kind: 'checklist', items: [
                'Authenticate with Chave Móvel Digital (digital key, CMD) — the fastest for residents',
                'Or with Cartão de Cidadão and a card reader',
                'Or register with NIF + email — if you do not have CMD/CC'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Choose the licence type and validity',
            content: [
              { kind: 'checklist', items: [
                'Pesca à linha — from shore (apeada: from the shore, bridge, breakwater): the most common choice',
                'Validity: 3 days (for short trips), 1 month, 1 year, 3 years',
                'A yearly licence is better value if you fish at least a couple of times per season',
                'Do not tick the “Embarcação” (vessel) field — that is for a boat, see separate guide'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Pay and save the licence',
            content: [
              { kind: 'paragraph', text: 'After payment you will receive a PDF with a QR code and number. Printing is optional — you can show it on your phone during a check. Save it to Files / Notes / Apple Wallet.' },
              { kind: 'warning', text: 'The licence is tied to the holder’s name and NIF. It cannot be transferred to someone else — during checks you will be asked for the holder’s ID.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'rules-and-limits',
      title: 'Rules: where, what and how much you may fish',
      content: [
        { kind: 'paragraph', text: 'The licence is only the start. Minimum sizes by species, defeso (closed season) and a daily bag limit also apply.' },
        { kind: 'checklist', items: [
          'Daily bag limit: 10 kg per person per day + 1 fish, OR a single fish weighing >10 kg (if you catch one — that is it for the day)',
          'Minimum sizes: robalo 36 cm, dourada 23 cm, sargo 25 cm, choco 10 cm, polvo 750 g, etc. — the full list is on the DGRM website',
          'Defeso: species-specific closed periods. robalo — partial ban in winter months; sardinha — summer defeso (dates change each year)',
          'Prohibited species: santola in certain periods, some rays — all year round',
          'Prohibited methods: tresmalho/redes (nets) — professionals only; explosives, poison, electrofishing — never',
          'Tackle: up to 2 rods simultaneously, up to 3 hooks on each',
          'No-take zones: Reserva Natural das Berlengas, Parque Marinho Luiz Saldanha (Arrábida), part of the Tejo estuary — partially or fully closed to recreational fishers',
          'Night fishing: allowed in most areas, but in some nature parks — daytime only'
        ] },
        { kind: 'warning', text: 'Each species has its own rules. Before your trip check the latest information on dgrm.pt for the species you target — annual portarias change limits. The DGRM app “Pesca em Portugal” stores information offline.' }
      ]
    },
    {
      id: 'where-to-fish',
      title: 'Good shore-fishing spots',
      content: [
        { kind: 'paragraph', text: 'The Atlantic coast offers different species depending on region and season. A few all-round spots near Lisbon and Porto:' },
        { kind: 'checklist', items: [
          'Cabo da Roca / Cabo Raso (Sintra-Cascais): rocks, robalo and sargo; safe when the swell is low',
          'Costa da Caparica: long sandy beach, surf‑casting for robalo and corvina',
          'Setúbal — Sado estuary: mixed fishing, dourada and robalo',
          'Sesimbra — harbour and rocks: a classic for choco and sargo',
          'Cascais Marina — outer breakwaters: easy access, suitable with children',
          'Ericeira — rocks: sport fishing, watch the tide',
          'Peniche — harbour and Cabo Carvoeiro: steady catches year-round',
          'Foz do Arelho / Lagoa de Óbidos: estuary, DGRM licence required',
          'Algarve — Ria Formosa lagoons: from Olhão to Tavira; some areas are in a nature park with additional rules',
          'Porto — Foz do Douro and the northern breakwaters: seasonal sardinha and cavala'
        ] },
        { kind: 'warning', text: 'Safety: do not stand on wet rocks in a storm. Every year in Portugal dozens of people die while fishing on the Atlantic. Follow the “watch the waves” rule: observe the spot for 15 minutes before climbing down.' }
      ]
    },
    {
      id: 'enforcement',
      title: 'Who checks and what are the fines',
      content: [
        { kind: 'checklist', items: [
          'Polícia Marítima — main checks on the coast and in ports',
          'GNR‑SEPNA — the National Guard’s environmental unit, patrols nature parks',
          'Capitania do Porto — in ports and estuaries',
          'ICNF rangers — in nature parks'
        ] },
        { kind: 'paragraph', text: 'They check: the licence (PDF/QR), an identity document, the catch (species, size, weight), and your tackle.' },
        { kind: 'checklist', items: [
          'No licence: €100–€500, equipment and catch may be confiscated',
          'Exceeding the daily limit: €100–€500, excess confiscated',
          'Fish below minimum size: €100–€250 per instance',
          'Defeso (closed season): up to €1,000, criminal charges possible if repeated',
          'Prohibited methods (nets, explosives, etc.): criminal case',
          'Attempting to sell your catch: treated as commercial fishing without a licence — fines in the thousands of euros'
        ] },
        { kind: 'warning', text: 'If you catch a fish below the minimum size, release it back to the water ALIVE. Taking it “so it does not go to waste” is not allowed — that is an offence, and an inspector will notice.' }
      ]
    },
    {
      id: 'gear-and-bait',
      title: 'Tackle, bait, where to buy',
      content: [
        { kind: 'paragraph', text: 'Fishing tackle shops (artigos de pesca) are in every major city. Chains: Decathlon, El Corte Inglés (in Lisboa and Porto), Trovo Pesca, A Náutica.' },
        { kind: 'checklist', items: [
          'Starter surf‑casting kit: 3.6–4.2 m rod, 6000+ reel, 0.30–0.40 mm monofilament — €60–€120',
          'Spinning for robalo: 2.4–3 m rod, 3000–4000 reel, 0.18 braid — €80–€150',
          'Live bait (camarão, minhocas) — at markets by harbours or in specialist shops',
          'Artificial lures (jigs, paddle tails) — in Decathlon or online',
          'Choco in Setúbal: special jigs for cuttlefish — €5–€10 each',
          'No licence is needed for “practice” casts without a hook, but this is debatable — better to have one'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Pesca Lúdica licence — 3 days', amountEUR: 3, note: 'For short tourist trips' },
    { label: 'Licence — 1 month', amountEUR: 10, note: 'A good choice for one holiday or a seasonal trip' },
    { label: 'Licence — 1 year', amountEUR: 20, note: 'The best value if you fish 2+ times per season' },
    { label: 'Licence — 3 years', amountEUR: 50, note: 'For those who fish regularly' },
    { label: 'Basic surf‑casting set', amountEURMin: 60, amountEURMax: 150, note: 'Rod + reel + line + hooks + bait' },
    { label: 'Fine for no licence', amountEURMin: 100, amountEURMax: 500, note: 'Plus confiscation of equipment and catch' }
  ],
  sources: [
    { title: 'DGRM — Pesca Lúdica, licences and rules', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'DGRM Licensing Portal — apply online', url: 'https://portal.dgrm.mm.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 246/2000 — Pesca Lúdica regime in marine waters', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Minimum sizes by species — DGRM table', url: 'https://www.dgrm.pt/documents/20143/0/Tamanhos+m%C3%ADnimos.pdf', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Polícia Marítima — National Maritime Authority', url: 'https://www.amn.pt/PM/Paginas/PoliciaMaritima.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}
