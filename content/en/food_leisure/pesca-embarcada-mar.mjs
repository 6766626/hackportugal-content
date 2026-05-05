export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-embarcada-mar',
  categoryId: 'food_leisure',
  title: 'Sea fishing from a boat — Pesca Lúdica Embarcada licence',
  tldr: 'Fishing from any boat at sea (your own, rented or chartered) requires the embarcada variant of the Pesca Lúdica licence (pesca lúdica — recreational sea fishing). More expensive than from shore: ~€10 for 3 days, ~€20 per month, ~€40 per year. The boat must be registered with the Capitania (harbour master’s office), and each angler on board must have their own licence. The daily limit for the whole boat is higher: 15 kg + 1 particularly large fish. For a charter, check that the skipper holds a professional "Marítimo‑Turística" licence; passengers only need the regular embarcada.',
  tags: ['angling', 'fishing', 'motorboat', 'vessel', 'dgrm'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-needs-it',
      title: 'When the embarcada option is needed — specific cases',
      content: [
        { kind: 'checklist', items: [
          'Your own motorboat/sailing boat: both the skipper and each angling passenger must have a separate recreational sea fishing licence with the "Embarcada" option',
          'Bareboat rental (charter sem skipper): you also need a licence with the embarcada option',
          'Charter with skipper (sea fishing): passengers need embarcada — it is often included in the price or offered to buy on the spot',
          'Tourist boat with a guide (Marítimo‑Turística): the company may have a collective licence, but it is more practical to have your own',
          'Kayak/SUP with a rod: counts as a boat → embarcada required',
          'Paddle surfing casting in the surf: borderline case, safer to have embarcada'
        ] },
        { kind: 'warning', text: 'Charters in Sesimbra, Setúbal, Cascais and the Algarve often say “everything is included”, but during an inspection each angler is responsible individually. Ask BEFORE paying: “A licença está incluída ou tenho de comprar?”. If the charter does not issue you the licence PDF — buy your own in advance.' }
      ]
    },
    {
      id: 'how-to-buy',
      title: 'How to buy — differences from shore fishing',
      content: [
        { kind: 'paragraph', text: 'Purchase via the DGRM portal (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos): portal.dgrm.mm.gov.pt. When applying, tick the "Embarcação" (from a boat) option. The price is higher:' },
        { kind: 'checklist', items: [
          '3 days (embarcada): ~€10 (for comparison: from shore — ~€3; apeada option)',
          '1 month (embarcada): ~€20',
          '1 year (embarcada): ~€40',
          '3 years (embarcada): ~€100',
          'You can buy the combo “à linha apeada + embarcada” — sometimes better value than two separate ones'
        ] },
        { kind: 'paragraph', text: 'A boat (embarcada) licence also covers shore fishing; the reverse is not true: a shore-only (apeada) licence does not cover fishing from a boat.' }
      ]
    },
    {
      id: 'boat-rules',
      title: 'What the boat itself must have',
      content: [
        { kind: 'paragraph', text: 'If the boat is yours or rented without a skipper, it must be registered with the port Capitania.' },
        { kind: 'checklist', items: [
          'Vessel registration (livrete) — issued by the port Capitania',
          'Skipper’s certificate (carta de navegador) — required from a certain vessel length/power',
          'Lifejackets for everyone on board — mandatory',
          'VHF radio — for larger vessels and going far offshore',
          'Signal flares, anchor, bilge pump — for sailboats/motorboats above the Local class',
          'Fire extinguisher — mandatory if there is an engine'
        ] },
        { kind: 'checklist', items: [
          'Class of navigation (categoria de navegação) determines how far you may go from shore',
          '“Local” (local) — up to 2 nautical miles from shore, minimal requirements',
          '“Costeira” (coastal) — up to 12 nautical miles',
          '“Largo” (offshore/ocean) — no distance limit, stringent requirements',
          'For recreational fishing the Local class and a motorboat up to ~6 m is usually enough'
        ] },
        { kind: 'warning', text: 'Without registering the boat, fishing from it is a double infringement: the vessel is illegal and the catch is illegal. The Maritime Police (Polícia Marítima) may seize the vessel and issue fines totalling thousands of euros.' }
      ]
    },
    {
      id: 'limits',
      title: 'Limits and rules on board',
      content: [
        { kind: 'checklist', items: [
          'Daily limit for the boat: 15 kg in total for everyone + 1 particularly large fish',
          'Minimum sizes — the same as from shore',
          'Defeso (closed season by species) — same seasons',
          'Prohibited methods: trawls, nets, explosives, electric rods — never',
          'Permitted methods: float/bottom rod, spinning, vertical jigging (jigging), trolling (trolling)',
          'No more than 2 rods per person at the same time',
          'A GPS plotter with saved fishing spots — fine for personal use; selling such data is not allowed'
        ] },
        { kind: 'paragraph', text: 'Large tuna — a separate story. Atlantic bluefin tuna (bluefin tuna, atum‑rabilho) is caught under special quotas and requires a professional licence or participation in an authorised tournament. You cannot catch and keep it under a recreational licence.' }
      ]
    },
    {
      id: 'good-spots-charters',
      title: 'Charters and good spots',
      content: [
        { kind: 'paragraph', text: 'If you do not have your own boat, it is easier to go on a charter. Approximate day rates for a 4–6 person boat:' },
        { kind: 'checklist', items: [
          'Sesimbra: bottom fishing for pargo and dourada, 6–8 hours out, ~€250–€400 per boat',
          'Cascais: spinning for robalo and atum, full day ~€350–€500',
          'Setúbal: choco (cuttlefish) in winter, smelt in summer, ~€200–€300',
          'Algarve (Vilamoura, Albufeira): big‑game ocean fishing — marlin and tuna, ~€400–€700',
          'Açores (Faial, Pico): deep‑sea fishing for blue marlin, ~€600–€1,200 — world‑class',
          'Madeira: marlin season from June to October, ~€500–€900',
          'Booking: Booking.com or specialised platforms such as FishingBooker'
        ] },
        { kind: 'warning', text: 'Before a charter, check: 1) each angler has their own licence, 2) maritime insurance is in place, 3) take seasickness tablets 1 hour before departure (Cinarizina or Vertix). The Atlantic often has waves even in summer.' }
      ]
    }
  ],
  costs: [
    { label: 'Pesca Lúdica Embarcada licence — 3 days', amountEUR: 10 },
    { label: 'Licence — 1 month', amountEUR: 20 },
    { label: 'Licence — 1 year', amountEUR: 40 },
    { label: 'Charter for 4–6 people, per day', amountEURMin: 200, amountEURMax: 700, note: 'Depends on the region and type of fishing' },
    { label: 'Big‑game ocean fishing charter (Algarve/Açores)', amountEURMin: 400, amountEURMax: 1200, note: 'Marlin, tuna' },
    { label: 'Boat registration up to 7 m', amountEURMin: 50, amountEURMax: 200, note: 'Through the port Capitania, depends on class' }
  ],
  sources: [
    { title: 'DGRM — Recreational Sea Fishing (Embarcada)', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Autoridade Marítima Nacional — vessel registration', url: 'https://www.amn.pt/DGAM/FR/Paginas/NauticaRecreio.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto‑Lei 246/2000 — Recreational Fishing', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICCAT — bluefin tuna quotas', url: 'https://www.iccat.int', kind: 'official', language: 'en', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-05',
  verifyIntervalDays: 180
}
