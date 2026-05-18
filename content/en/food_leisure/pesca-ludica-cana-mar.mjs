export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-ludica-cana-mar',
  categoryId: 'food_leisure',
  title: 'Sea fishing from the shore — Pesca Lúdica à linha licence (DGRM)',
  tldr: 'Recreational sea fishing from the shore, pier or rocks in Portugal requires a Pesca Lúdica (recreational fishing) licence from DGRM. You can apply online at portal.dgrm.mm.gov.pt in 5 minutes.\n\nPeriods: 3 days (~€3), month (~€10), year (~€20), 3 years (~€50).\n\nPrint or save the QR code with the licence: if checked by Polícia Marítima (maritime police) / GNR‑SEPNA (environmental unit of the national guard) without it, the fine starts at €100. Respect the daily limit (10 kg + 1 fish, or one fish >10 kg), minimum sizes and defeso (closed season) by species.',
  tags: ['fishing', 'fishing', 'licence', 'sea', 'dgrm'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'who-needs-license',
      title: 'Who needs a licence and what Pesca Lúdica is 🎣',
      content: [
        { kind: 'paragraph', text: 'Recreational sea fishing in Portugal is regulated by DGRM (the directorate-general for maritime resources; Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos). “Sea” means the Atlantic, the Tejo and Sado up to the limits of maritime waters, estuaries and river mouths.' },
        { kind: 'checklist', items: [
          'Everyone aged 16 or over needs a licence — residents and tourists alike',
          'Children under 16 may fish without a licence under the supervision of a licensed adult',
          'Pesca Lúdica (recreational/sport fishing, not for sale)',
          'Any attempt to sell the catch = commercial fishing, a different licence is needed and the rules are much stricter',
          'Pesca Lúdica categories: à linha (with a rod/spinning rod from the shore or from a boat), apneia (spearfishing), apanha (collecting shellfish, seaweed)',
          'This guide is about à linha from the shore. Boat fishing and spearfishing are covered in separate guides'
        ] },
        { kind: 'warning', text: 'In fresh water (rivers, reservoirs) the licence is different — it is issued by ICNF (the institute for nature conservation and forests), not DGRM. Do not confuse them: a sea licence does not apply, for example, on the Mondego, the Douro above the tidal zone, etc.' }
      ]
    },
    {
      id: 'how-to-apply',
      title: 'Applying online — step by step',
      content: [
        { kind: 'paragraph', text: 'The fastest way is through portal.dgrm.mm.gov.pt. You need a NIF (tax number) and Cartão de Cidadão (citizen card) or passport + email. Online payment is via Multibanco (payment system/ATMs) or MB WAY (mobile wallet).' },
        { kind: 'substeps', items: [
          {
            id: 's1',
            title: 'Go to portal.dgrm.mm.gov.pt',
            content: [
              { kind: 'paragraph', text: 'Licenciamento (licensing) section → Pesca Lúdica. You can also do it without an account: use one of the authentication options.' },
              { kind: 'checklist', items: [
                'Authentication via Chave Móvel Digital (digital key, CMD) — the fastest option for residents',
                'Or via Cartão de Cidadão with a card reader',
                'Or registration with NIF + email — if you do not have CMD/CC'
              ] }
            ]
          },
          {
            id: 's2',
            title: 'Choose the licence type and period',
            content: [
              { kind: 'checklist', items: [
                'Pesca à linha — from the shore (apeada: from the shore, bridge, breakwater): the most common choice',
                'Period: 3 days (for short trips), 1 month, 1 year, 3 years',
                'A yearly licence is better value if you fish at least a couple of times per season',
                'Do not tick the “Embarcação” (vessel) field — that is for boats, covered in a separate guide'
              ] }
            ]
          },
          {
            id: 's3',
            title: 'Pay and save the licence',
            content: [
              { kind: 'paragraph', text: 'After payment you will receive a PDF with a QR code and number. You do not have to print it — you can show it on your phone if checked. Save it in Files / Notes / Apple Wallet.' },
              { kind: 'warning', text: 'The licence is linked to the name and NIF. It cannot be transferred to another person — during a check they will ask for the holder’s ID document.' }
            ]
          }
        ] }
      ]
    },
    {
      id: 'rules-and-limits',
      title: 'Rules: where, what and how much you can fish',
      content: [
        { kind: 'paragraph', text: 'The licence is only the beginning. Minimum sizes by species, defeso (closed season) and the daily limit also apply.' },
        { kind: 'checklist', items: [
          'Daily limit: 10 kg of catch per person per day + 1 fish, OR one fish weighing >10 kg (if you catch one of those — that is it for today)',
          'Minimum sizes: robalo 36 cm, dourada 23 cm, sargo 25 cm, choco 10 cm, polvo 750 g, etc. — the full list is on the DGRM website',
          'Defeso: closed periods by species. robalo — partial ban in the winter months, sardinha — summer defeso (dates change annually)',
          'Prohibited species: santola during certain periods, some rays — all year round',
          'Prohibited methods: tresmalho/redes (nets) — for professionals only; explosives, poison, electric shock — never',
          'Gear: up to 2 rods at the same time, up to 3 hooks on each',
          'Restricted areas: Reserva Natural das Berlengas, Parque Marinho Luiz Saldanha (Arrábida), parts of the Tejo estuary — partially or fully closed to recreational fishers',
          'Night fishing: permitted in most areas, but in some natural parks — daytime only'
        ] },
        { kind: 'warning', text: 'Each species has its own rules. Before a trip, check the latest information on dgrm.pt for the species you want — annual orders (portarias) change the limits. DGRM’s “Pesca em Portugal” app stores information offline.' }
      ]
    },
    {
      id: 'where-to-fish',
      title: 'Good places for shore fishing',
      content: [
        { kind: 'paragraph', text: 'The Atlantic coast offers different fish depending on the region and season. A few useful spots near Lisbon and Porto:' },
        { kind: 'checklist', items: [
          'Cabo da Roca / Cabo Raso (Sintra-Cascais): rocks, robalo and sargo; safe when the swell is low',
          'Costa da Caparica: long sandy beach, surf‑casting for robalo and corvina',
          'Setúbal — Sado estuary: mixed fishing, dourada and robalo',
          'Sesimbra — port and rocks: a classic for choco and sargo',
          'Cascais Marina — outer breakwaters: easy access, possible with children',
          'Ericeira — rocks: sport fishing, be careful with the tide',
          'Peniche — port and Cabo Carvoeiro: steady catch all year round',
          'Foz do Arelho / Lagoa de Óbidos: estuary, DGRM licence required',
          'Algarve — Ria Formosa lagoons: from Olhão to Tavira; some areas are in the natural park with additional rules',
          'Porto — Foz do Douro and northern breakwaters: seasonal sardinha and cavala'
        ] },
        { kind: 'warning', text: 'Safety: do not stand on wet rocks in a storm. Every year in Portugal, dozens of people die while fishing on the Atlantic. Follow the “watch the waves” rule: observe the spot for 15 minutes before climbing up.' }
      ]
    },
    {
      id: 'enforcement',
      title: 'Who checks and what the fines are',
      content: [
        { kind: 'checklist', items: [
          'Polícia Marítima — the main checks on the coast and in ports',
          'GNR‑SEPNA — environmental unit of the national guard, patrols natural parks',
          'Capitania do Porto — in ports and estuaries',
          'ICNF rangers — in natural parks'
        ] },
        { kind: 'paragraph', text: 'They check: the licence (PDF/QR), an identity document, the catch (species, size, weight), gear.' },
        { kind: 'checklist', items: [
          'No licence: €100–500, possible confiscation of gear and catch',
          'Exceeding the daily limit: €100–500, confiscation of the excess',
          'Fish below the minimum size: €100–250 for each case',
          'Defeso (closed season): up to €1,000, possible criminal prosecution if repeated',
          'Prohibited methods (nets, explosives, etc.): criminal case',
          'Attempting to sell the catch: treated as commercial fishing without a licence — fines in the thousands of euros'
        ] },
        { kind: 'warning', text: 'If you catch a fish below the minimum size — release it back into the water ALIVE. You cannot keep it “so it does not go to waste” — that is an offence, and the inspector can see it.' }
      ]
    },
    {
      id: 'gear-and-bait',
      title: 'Gear, bait, where to buy',
      content: [
        { kind: 'paragraph', text: 'Fishing tackle shops (artigos de pesca) are available in every major city. Chains: Decathlon, El Corte Inglés (in Lisboa and Porto), Trovo Pesca, A Náutica.' },
        { kind: 'checklist', items: [
          'Starter surf‑casting kit: 3.6–4.2 m rod, 6000+ reel, 0.30–0.40 mm line — €60–120',
          'Spinning setup for robalo: 2.4–3 m rod, 3000–4000 reel, 0.18 braid — €80–150',
          'Live bait (camarão, minhocas) — at markets near ports or in specialist shops',
          'Artificial bait (jigs, paddle tails) — in Decathlon or online',
          'Choco in Setúbal: special jigs for cuttlefish — €5–10 each',
          'A licence is not needed for “practice” casts without a hook, but it is debatable — better to have one'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Pesca Lúdica licence — 3 days', amountEUR: 3, note: 'For short tourist trips' },
    { label: 'Licence — 1 month', amountEUR: 10, note: 'A good choice for one holiday or seasonal fishing' },
    { label: 'Licence — 1 year', amountEUR: 20, note: 'The best-value option if you fish 2+ times per season' },
    { label: 'Licence — 3 years', amountEUR: 50, note: 'For those who fish regularly' },
    { label: 'Basic surf-casting kit', amountEURMin: 60, amountEURMax: 150, note: 'Rod + reel + line + hooks + bait' },
    { label: 'Fine without a licence', amountEURMin: 100, amountEURMax: 500, note: 'Plus confiscation of gear and catch' }
  ],
  sources: [
    { title: 'DGRM — Pesca Lúdica, licences and rules', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'DGRM Licensing Portal — online application', url: 'https://portal.dgrm.mm.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 246/2000 — Pesca Lúdica regime in maritime waters', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Minimum sizes by species — DGRM table', url: 'https://www.dgrm.pt/pesca_cpt_especies', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Polícia Marítima — Autoridade Marítima Nacional', url: 'https://www.amn.pt/PM/Paginas/MissaoCompetencias.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-18',
  verifyIntervalDays: 180
}
