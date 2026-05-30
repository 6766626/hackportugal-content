export default {
  editorialVoice: 'hackportugal',
  id: 'pesca-embarcada-mar',
  categoryId: 'food_leisure',
  title: 'Sea fishing from a boat — Pesca Lúdica Embarcada licence',
  tldr: 'Fishing at sea from any boat (your own, rented or chartered) requires the embarcada option in the Pesca Lúdica licence (pesca lúdica — recreational sea fishing).\n\nMore expensive than shore fishing: ~€10 for 3 days, ~€20 for a month, ~€40 for a year. The boat must be registered with the Capitania (harbour master’s office), and each angler on board must have their own licence. The daily limit is 10 kg per angler (the single largest specimen caught is not counted); if there are more than 3 anglers on board, the combined boat limit is capped at 25 kg. For a charter, check that the skipper has a professional "Marítimo‑Turística" licence; passengers only need the standard embarcada.',
  tags: ['fishing', 'sea fishing', 'boat', 'vessel', 'dgrm'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'who-needs-it',
      title: 'When the embarcada option is needed — specific cases',
      content: [
        { kind: 'checklist', items: [
          'Your own motorboat/sailing boat: both the skipper and every passenger who is fishing need a separate recreational sea fishing licence with the "Embarcada" option',
          'Boat hire without a skipper (charter sem skipper): you also need a licence with the embarcada option',
          'Charter with a skipper (sea fishing): the passenger needs embarcada — it is often included in the price or offered for purchase on the spot',
          'Tourist boat with a guide (Marítimo‑Turística): the company may have a collective licence, but it is more practical to have your own',
          'Kayak/SUP with a rod: treated as a boat → embarcada is required',
          'Paddleboarding with casting in the surf: a borderline case; it is safer to have embarcada'
        ] },
        { kind: 'warning', text: 'Charters in Sesimbra, Setúbal, Cascais and the Algarve often say “everything is included”, but during an inspection each angler is individually responsible. Ask BEFORE paying for the trip: “A licença está incluída ou tenho de comprar?”. If the charter does not give you a PDF of the licence — buy your own in advance.' }
      ]
    },
    {
      id: 'how-to-buy',
      title: 'How to buy — differences from the shore licence',
      content: [
        { kind: 'paragraph', text: 'Purchase through the DGRM portal (Direção-Geral de Recursos Naturais, Segurança e Serviços Marítimos): portal.dgrm.mm.gov.pt. When applying, select the “Embarcação” option (from a boat). The price is higher:' },
        { kind: 'checklist', items: [
          '3 days (embarcada): ~€10 (for comparison: from the shore — ~€3; apeada option)',
          '1 month (embarcada): ~€20',
          '1 year (embarcada): ~€40',
          '3 years (embarcada): ~€100',
          'You can buy the “à linha apeada + embarcada” combo — sometimes cheaper than two separate licences'
        ] },
        { kind: 'paragraph', text: 'The boat licence (embarcada) is also valid for shore fishing; the reverse is not true: shore-only (apeada) does not cover fishing from a boat.' }
      ]
    },
    {
      id: 'boat-rules',
      title: 'What the boat itself must have',
      content: [
        { kind: 'paragraph', text: 'If the boat is yours or rented without a skipper, it must be registered with the harbour master’s office.' },
        { kind: 'checklist', items: [
          'Vessel registration (livrete) — issued by the harbour master’s office',
          'Skipper’s licence (carta de navegador) — required above certain vessel lengths/power ratings',
          'Life jackets for the number of people on board — mandatory',
          'VHF radio — for larger vessels and going far out to sea',
          'Flares, anchor, pump — for sailing boats/motorboats in classes above Local',
          'Fire extinguisher — mandatory if there is an engine'
        ] },
        { kind: 'checklist', items: [
          'Navigation class (categoria de navegação) determines how far you may go from the shore',
          '“Local” (local) — up to 2 miles from the shore, minimum requirements',
          '“Costeira” (coastal) — up to 12 miles',
          '“Largo” (offshore) — no distance limits, serious requirements',
          'For recreational fishing, the Local class and a motorboat up to ~6 m are usually enough'
        ] },
        { kind: 'warning', text: 'Fishing from an unregistered boat is a double offence: the vessel is illegal, and the fishing is illegal. The maritime police (Polícia Marítima) may confiscate the vessel and issue fines of thousands of euros.' }
      ]
    },
    {
      id: 'limits',
      title: 'Limits and rules on a boat',
      content: [
        { kind: 'checklist', items: [
          'Daily limit: 10 kg per angler, with the single largest specimen caught not counted',
          'If there are more than 3 anglers on board, the combined limit for the whole boat may not exceed 25 kg (one largest specimen per angler is not counted)',
          'Note: 15 kg is specifically the per-person spearfishing (pesca submarina) limit, not the line-fishing limit from a boat',
          'Minimum sizes — the same as from the shore',
          'Defeso (closed season by species) — the same seasons',
          'Prohibited methods: trawls, nets, explosives, electric fishing rods — never',
          'Permitted methods: float/bottom rod, spinning, vertical jigging, trolling',
          'No more than 2 rods per person at the same time',
          'A GPS plotter with fishing-spot marks — fine for personal use; selling such data is not allowed'
        ] },
        { kind: 'paragraph', text: 'Large tuna is a separate matter. Atlantic bluefin tuna (bluefin tuna, atum‑rabilho) is caught under special quotas and requires a professional licence or participation in an authorised championship. You cannot catch and keep it under a recreational licence.' }
      ]
    },
    {
      id: 'good-spots-charters',
      title: 'Charters and good spots',
      content: [
        { kind: 'paragraph', text: 'If you do not have your own boat, the easiest option is to go on a charter. Approximate prices per day for a boat for 4–6 people:' },
        { kind: 'checklist', items: [
          'Sesimbra: bottom fishing for pargo and dourada, 6–8 hour trip, ~€250–400 per boat',
          'Cascais: spinning for robalo and atum, full day ~€350–500',
          'Setúbal: choco (cuttlefish) fishing in winter, smelt in summer, ~€200–300',
          'Algarve (Vilamoura, Albufeira): big game fishing — marlin and tuna, ~€400–700',
          'Açores (Faial, Pico): deep-sea fishing for blue marlin, ~€600–1,200 — world class',
          'Madeira: marlin season from June to October, ~€500–900',
          'Booking: Booking.com or specialist platforms such as FishingBooker'
        ] },
        { kind: 'warning', text: 'Before the charter, check: 1) each angler has their own licence, 2) marine insurance is in place, 3) take seasickness tablets 1 hour before departure (Cinarizina or Vertix). The Atlantic often has swell even in summer.' }
      ]
    }
  ],
  costs: [
    { label: 'Pesca Lúdica Embarcada licence — 3 days', amountEUR: 10 },
    { label: 'Licence — 1 month', amountEUR: 20 },
    { label: 'Licence — 1 year', amountEUR: 40 },
    { label: 'Charter for 4–6 people, day', amountEURMin: 200, amountEURMax: 700, note: 'Depends on the region and type of fishing' },
    { label: 'Big game fishing charter (Algarve/Açores)', amountEURMin: 400, amountEURMax: 1200, note: 'Marlin, tuna' },
    { label: 'Boat registration up to 7 m', amountEURMin: 50, amountEURMax: 200, note: 'Through the harbour master’s office, depends on the class' }
  ],
  sources: [
    { title: 'DGRM — Pesca Lúdica Embarcada', url: 'https://www.dgrm.pt/web/guest/pesca-ludica', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Autoridade Marítima Nacional — registration of vessels', url: 'https://www.amn.pt/DGAM/FR/Paginas/NauticaRecreio.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'Decreto-Lei 246/2000 — Pesca Lúdica', url: 'https://dre.pt/dre/legislacao-consolidada/decreto-lei/2000-67074872', kind: 'law', language: 'pt', lastRetrieved: '2026-05-03' },
    { title: 'ICCAT — atum rabilho quotas', url: 'https://www.iccat.int', kind: 'official', language: 'en', lastRetrieved: '2026-05-03' }
  ],
  lastVerified: '2026-05-30',
  verifyIntervalDays: 180
}
