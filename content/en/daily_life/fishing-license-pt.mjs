export default {
  editorialVoice: 'hackportugal',
  id: 'fishing-license-pt',
  categoryId: 'daily_life',
  title: 'Fishing licence: DGRM sea fishing and ICNF freshwater fishing',
  tldr: 'In Portugal, recreational fishing is split into sea fishing — DGRM via BMar — and freshwater fishing — ICNF. The licence is not interchangeable: ocean, beaches and boat ≠ rivers, lakes and reservoirs. The minimum format for a visitor is a daily licence from €2. A licence is usually required from age 16; in freshwater, people over 65 are often exempt, but zone rules and special permits still apply. Selling your catch is prohibited, and there are limits, seasons, minimum sizes and no-fishing zones.',
  tags: ['fishing', 'dgrm', 'icnf', 'licence'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'choose-water',
      title: '1. First decide: sea or freshwater',
      content: [
        { kind: 'paragraph', text: 'Portugal has two different systems. Sea recreational fishing is regulated by DGRM and arranged through Balcão Eletrónico do Mar — BMar. Freshwater fishing in inland waters is regulated by ICNF.' },
        { kind: 'checklist', items: [
          'Ocean, beach, rocks, pier, river mouth with seawater — usually a DGRM sea licence.',
          'River, lake, barragem, albufeira, inland lagoon — usually an ICNF licence.',
          'Fishing from the seashore — licença de pesca lúdica apeada.',
          'Fishing from a boat at sea — licença embarcada.',
          'Spearfishing — licença submarina and separate safety restrictions.',
          'In freshwater there may be zones livres, concessionadas, reservadas: sometimes you need not only an ICNF licence, but also permission from the zone manager.',
          'One licence does not cover everything: a DGRM sea licence does not give the right to fish in freshwater, and ICNF does not cover the ocean.'
        ] },
        { kind: 'warning', text: 'If the place looks like a “river by the ocean”, check the zone regime. In estuaries and natural parks, rules may differ by bank, fish species, tackle and seasons.' }
      ]
    },
    {
      id: 'sea-dgrm-bmar',
      title: '2. DGRM sea licence via BMar 🌊',
      content: [
        { kind: 'paragraph', text: 'For sea recreational fishing in mainland Portugal, use BMar — the official DGRM electronic service. The licence can be arranged online; card/reference payment is available for some services, and Multibanco channels are also common for residents.' },
        { kind: 'checklist', items: [
          'Choose the type: apeada — from the shore, embarcada — from a boat, submarina — spearfishing.',
          'Choose the duration: daily, monthly or annual, if available for the selected type.',
          'Prepare your passport or ID document; if you have a NIF, provide it.',
          'Check the area of validity: the national/regional logic depends on the product in BMar.',
          'Pay the fee and save the PDF/receipt on your phone.',
          'When fishing, keep your ID and licence with you — the inspector needs readable proof, not a “screenshot of a chat”.',
          'If you go by boat, the angler’s licence does not replace vessel documents and safety requirements.'
        ] },
        { kind: 'paragraph', text: 'As a guide for mainland sea licences: a daily licença apeada starts at around €2, embarcada at around €3, and submarina at around €5; annual options cost more and depend on the type. Always check the final amount in BMar before paying.' },
        { kind: 'warning', text: 'Spearfishing is not “just a mask and a spear gun”. You need a licença submarina, a buoy, compliance with distance rules, no night hunting, and no fishing in protected/port/bathing areas where local rules establish this.' }
      ]
    },
    {
      id: 'freshwater-icnf',
      title: '3. ICNF freshwater licence 🐟',
      content: [
        { kind: 'paragraph', text: 'For rivers, lakes, reservoirs and other águas interiores, you need an ICNF licença de pesca lúdica. For a foreigner, this is usually arranged online through ICNF services: choose a licence for não residentes or the standard option, enter your ID document, select the duration and pay the fee.' },
        { kind: 'checklist', items: [
          'Check whether the place is ICNF inland waters rather than a DGRM sea zone.',
          'Choose the duration: a daily licence for a visitor starts from €2; weekly, monthly and annual options are also found.',
          'Enter your passport/ID; a NIF is useful but not always mandatory for a non-resident.',
          'Download the licence confirmation and keep it offline.',
          'Check whether the zone is concessionada or reservada: an additional permit may be required there.',
          'Check the ICNF edital/table by fish species: seasons, minimum sizes, limits and bans vary by basin.',
          'Do not use prohibited tackle, live bait or fishing methods unless they are allowed for that specific water.'
        ] },
        { kind: 'paragraph', text: 'ICNF regularly publishes rules on espécies aquícolas, épocas de pesca, dimensões mínimas and zonas de pesca. This is not a formality: a fine is possible even with a paid licence if the season is closed or the species is prohibited from being caught.' }
      ]
    },
    {
      id: 'age-and-documents',
      title: '4. Age, documents and who can fish without a licence',
      content: [
        { kind: 'paragraph', text: 'The basic practical rule for 2026: from age 16, a licence is usually required. Children under 16 are often exempt, especially if they are fishing accompanied by an adult with a licence. In the ICNF freshwater system, people over 65 are usually exempt from the licence itself, but not from zone rules, seasons and limits.' },
        { kind: 'checklist', items: [
          'Adult expat: get a licence — it is cheaper than a fine and arguments on the spot.',
          'Child under 16: check the adult accompaniment condition and the restrictions for the specific zone.',
          'Age 65+: for freshwater, check the ICNF exemption; for the sea, do not rely on rumours, check BMar/DGRM.',
          'Always carry a passport, Cartão de Cidadão, residence permit or another ID.',
          'Save the licence PDF offline: on the beach or by a barragem, signal is often poor.',
          'If you are fishing with a guide or on a tourist boat, ask in advance whether the client’s licence is included. Often it is not.'
        ] },
        { kind: 'warning', text: 'Exemption from the licence does not mean freedom to fish anywhere. No-fishing zones, minimum sizes, daily limits, closed seasons and the ban on selling catches apply to everyone.' }
      ]
    },
    {
      id: 'restrictions',
      title: '5. Main restrictions: what people most often breach',
      content: [
        { kind: 'paragraph', text: 'Recreational fishing in Portugal is only for personal consumption and leisure. Selling, exchanging “for a donation” or passing the catch to a restaurant as a commercial product is prohibited.' },
        { kind: 'checklist', items: [
          'Do not sell your catch — recreational fishing does not grant commercial rights.',
          'Respect the daily weight and quantity limit; for sea fishing, a limit of around 10 kg per angler per day plus one large specimen is often applied, but check the current DGRM rules.',
          'Respect minimum sizes for fish and shellfish.',
          'Do not catch a specific species during its closed season.',
          'Do not fish in port areas, marinas, bathing areas, nature reserves and protected sections without checking the rules.',
          'Do not use nets, traps, electricity, chemicals or other prohibited methods.',
          'For shellfish, octopus, sea urchins and some species, there may be separate limits and bans.',
          'In freshwater, check invasive species and native species: some species cannot be returned, some cannot be taken — it depends on ICNF rules.',
          'Respect private property: a licence does not give you the right to enter closed land or a private pontão.'
        ] },
        { kind: 'warning', text: 'The safest pre-trip algorithm: open BMar or ICNF, check the type of water, buy the correct licence, then check local avisos/editais for the specific place and fish species.' }
      ]
    }
  ],
  costs: [
    { label: 'DGRM sea licence apeada, 1 day', amountEUR: 2, note: 'Guide price for fishing from the shore; the final price is shown in BMar before payment.' },
    { label: 'DGRM sea licence embarcada, 1 day', amountEUR: 3, note: 'Guide price for fishing from a boat in mainland Portugal.' },
    { label: 'DGRM sea licence submarina, 1 day', amountEUR: 5, note: 'Guide price for spearfishing; separate safety restrictions apply.' },
    { label: 'ICNF freshwater licence for a visitor, 1 day', amountEUR: 2, note: 'Minimum online option for águas interiores; the price depends on duration and category.' },
    { label: 'Fine for fishing without the correct licence', amountEURMin: 50, amountEURMax: 500, note: 'The practical risk depends on the breach: no licence, prohibited zone, closed season, exceeding the limit or prohibited tackle.' }
  ],
  sources: [
    { title: 'BMar — Balcão Eletrónico do Mar: DGRM licences for sea recreational fishing', url: 'https://www.bmar.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ICNF — pesca lúdica em águas interiores: licences, zones and rules', url: 'https://www.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ICNF — information on species, fishing seasons and fishing zones', url: 'https://www.icnf.pt/pesca/pescaludica', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-04-28',
  verifyIntervalDays: 180
}
