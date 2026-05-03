export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-embarcada-mar',
  categoryId: 'food_leisure',
  title: 'Sea fishing from a boat — Pesca Lúdica Embarcada licence',
  tldr: 'Fishing from any boat at sea (your own, rented or chartered) requires the embarcada variant in the Pesca Lúdica licence (pesca lúdica — recreational sea fishing). More expensive than from shore: ~€10 for 3 days, ~€20 per month, ~€40 per year. The boat must be registered with the Capitania (harbour master’s office), and each angler on board must have their own licence. The daily limit for the entire boat is higher: 15 kg + 1 exceptionally large fish. For charters, check that the skipper has the professional "Marítimo‑Turística" licence; passengers only need the standard embarcada.',
  tags: ['angling', 'fishing', 'motorboat', 'vessel', 'dgrm'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-needs-it',
      title: 'When the embarcada variant is needed — specific cases',
      content: [
        { kind: 'checklist', items: [
          'Own motorboat/sailing boat: both the skipper and every angling passenger need their own recreational sea fishing licence with the "Embarcada" variant',
          'Boat rental without a skipper (charter sem skipper): you also need a licence with the embarcada variant',
          'Charter with skipper (sea fishing): the passenger needs embarcada — it is often included in the price or offered to buy on-site',
          'Tourist boat with a guide (Marítimo‑Turística): the company may have a collective licence, but it is more practical to have your own',
          'Kayak/SUP with a rod: counts as a boat → embarcada required',
          'Paddle surfing casting from the surf zone: borderline case; safer to have embarcada'
        ] },
        { kind: 'warning', text: 'Charters in Sesimbra, Setúbal, Cascais and the Algarve often say “everything is included”, but in inspections each angler answers individually. Ask BEFORE paying for the tour: «A licença está incluída ou tenho de comprar?». If the charter does not give you the PDF of the licence — buy your own in advance.' }
      ]
    },
    {
      id: 'how-to-buy',
      title: 'How to buy — differences from shore fishing',
      content: [
        { kind: 'paragraph', text: 'Purchase via the DGRM portal (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos): portal.dgrm.mm.gov.pt. When applying, tick the “Embarcação” option (from a boat). The price is higher:' },
        { kind: 'checklist', items: [
          '3 days (embarcada): ~€10 (for comparison: from shore — ~€3; variant apeada)',
          '1 month (embarcada): ~€20',
          '1 year (embarcada): ~€40',
          '3 years (embarcada): ~€100',
          'You can buy a combo “à linha apeada + embarcada” — sometimes cheaper than two separate ones'
        ] },
        { kind: 'paragraph', text: 'The boat licence (embarcada) is also valid for shore fishing; the reverse is not true: shore-only (apeada) does not cover fishing from a boat.' }
      ]
    },
    {
      id: 'boat-rules',
      title: 'What the boat itself must have',
      content: [
        { kind: 'paragraph', text: 'If the boat is yours or rented without a skipper — it must be registered with the port Capitania.' },
        { kind: 'checklist', items: [
          'Vessel registration (livrete) — issued by the port Capitania',
          'Skipper’s licence (carta de navegador) — required from certain vessel length/power',
          'Lifejackets for everyone on board — mandatory',
          'VHF radio — for larger vessels and going far offshore',
          'Flares, anchor, bilge pump — for sailboats/motorboats of categories above Local',
          'Fire extinguisher — mandatory if there is an engine'
        ] },
        { kind: 'checklist', items: [
          'The navigation category (categoria de navegação) determines how far you may go from shore',
          '“Local” (local) — up to 2 miles from shore, minimal requirements',
          '“Costeira” (coastal) — up to 12 miles',
          '“Largo” (offshore/ocean) — no distance limits, serious requirements',
          'For recreational angling the Local class and a motorboat up to ~6 m is usually enough'
        ] },
        { kind: 'warning', text: 'Without boat registration, fishing from it is a double infringement: the vessel is illegal, and the catch is illegal. The Maritime Police (Polícia Marítima) can seize the vessel and issue fines of thousands of euros.' }
      ]
    },
    {
      id: 'limits',
      title: 'Limits and rules on the boat',
      content: [
        { kind: 'checklist', items: [
          'Daily limit per boat: 15 kg in total for everyone + 1 exceptionally large fish',
          'Minimum sizes — the same as from shore',
          'Defeso (closed season by species) — the same seasons',
          'Prohibited methods: trawls, nets, explosives, electric rods — never',
          'Permitted methods: float/bottom rod, spinning, vertical jigging (jigging), trolling (trolling)',
          'No more than 2 rods per person at the same time',
          'GPS plotter with marked fishing spots — fine for personal use; selling such data is not allowed'
        ] },
        { kind: 'paragraph', text: 'Large tuna is a different matter. Atlantic bluefin tuna (atum‑rabilho) is caught under special quotas and requires a professional licence or participation in an authorised championship. You cannot catch and keep it under a recreational licence.' }
      ]
    },
    {
      id: 'good-spots-charters',
      title: 'Charters and good spots',
      content: [
        { kind: 'paragraph', text: 'If you do not have your own boat, it is easier to go on a charter. Approximate day rates for a 4–6 person boat:' },
        { kind: 'checklist', items: [
          'Sesimbra: bottom fishing for pargo and dourada, 6–8 hours at sea, €250–€400 per boat',
          'Cascais: spinning for robalo and tuna, full day €350–€500',
          'Setúbal: choco (cuttlefish) in winter, smelt in summer, €200–€300',
          'Algarve (Vilamoura, Albufeira): big‑game ocean fishing — marlin and tuna, €400–€700',
          'Açores (Faial, Pico): deep‑sea fishing for blue marlin, €600–€1,200 — world‑class',
          'Madeira: marlin season from June to October, €500–€900',
          'Booking: Booking.com or specialist platforms such as FishingBooker'
        ] },
        { kind: 'warning', text: 'Before a charter, check: 1) each angler has their own licence, 2) marine insurance is in place, 3) take seasickness tablets 1 hour before departure (Cinarizina or Vertix). The Atlantic often has swell even in summer.' }
      ]
    }
  ],
  costs: [
    { label: 'Pesca Lúdica Embarcada licence — 3 days', amountEUR: 10 },
    { label: 'Licence — 1 month', amountEUR: 20 },
    { label: 'Licence — 1 year', amountEUR: 40 },
    { label: 'Charter for 4–6 people, per day', amountEURMin: 200, amountEURMax: 700, note: 'Depends on region and fishing type' },
    { label: 'Big‑game charter (Algarve/Açores)', amountEURMin: 400, amountEURMax: 1200, note: 'Marlin, tuna' },
    { label: 'Boat registration up to 7 m', amountEURMin: 50, amountEURMax: 200, note: 'Via the port Capitania, depends on category' }
  ],
  sources: [
    { title: 'DGRM — Pesca Lúdica Embarcada', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Autoridade Marítima Nacional — vessel registration', url: 'https://www.amn.pt/DGAM/Paginas/Registo.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 246/2000 — Pesca Lúdica', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICCAT — bluefin tuna quotas', url: 'https://www.iccat.int', kind: 'official', language: 'en', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-03',
  verifyIntervalDays: 180
}
