export default {
  editorialVoice: 'hackportugal',
  id: 'livro-reclamacoes',
  categoryId: 'emergency_rights',
  title: 'Livro de Reclamações — how to complain properly',
  tldr: 'Livro de Reclamações (Complaints Book) — every establishment in Portugal is required to have it and provide it on request. The complaint is automatically sent to the regulator (ANAC, ASAE, ERSE, BdP, ANACOM — depending on the sector) — it is a powerful tool, unlike Google reviews. Electronic version: livroreclamacoes.pt — submit online, without visiting. A response is mandatory within **15 days**. Fines for establishments: up to €25,000 for legal entities. Very effective — many breaches are fixed after a complaint.',
  tags: ['complaints', 'claims', 'consumers', 'rights'],
  estimatedReadMinutes: 4,
  steps: [
    {
      id: 'what-is',
      title: '📚 What Livro de Reclamações is',
      content: [
        { kind: 'paragraph', text: 'By law **DL 156/2005** — every business providing services to consumers is required to have Livro de Reclamações (a physical book with standard forms or an electronic version) and provide it at the customer’s first request.' },
        { kind: 'checklist', items: [
          '📚 **Physical Livro**: paper forms in 3 copies — the original stays in the book, 1 copy for you, 1 copy is sent to the regulator',
          '💻 **Electronic Livro**: on livroreclamacoes.pt — submit online after the visit',
          '🚫 **Refusal to provide it** — this is a breach, fines of €250-€3,750 (individuals), €5,000-€25,000 (legal entities)',
          '⏰ **A response is mandatory within 15 working days** or the business is fined',
          '🏢 **Who is required to have it**: restaurants, hotels, banks, insurers, telecoms, gyms, medical centres, supermarkets, airlines, taxis — everything except a few exclusions (public bodies — a different system)'
        ]}
      ]
    },
    {
      id: 'when-to-use',
      title: '🎯 When to use it',
      content: [
        { kind: 'checklist', items: [
          '🍽️ **Restaurant**: spoiled food, refusal to accept Multibanco / a valid means of payment, extra “service” charges not agreed in the contract',
          '🏨 **Hotel**: not the room you booked, faulty facilities, misleading advertising',
          '🏦 **Bank**: misleading presentation of a financial product, hidden fees, refusal of service',
          '📱 **Telecoms (NOS, MEO, Vodafone)**: incorrect bills, non-working internet, refusal to restore a subscription',
          '🛡️ **Insurers**: refusal to pay compensation, slow processing, misleading terms',
          '🚗 **Car hire**: hidden charges, damage claims after returning the car',
          '🛒 **Shops**: refusal to accept a return within 14 days (online), misleading advertising, defective goods',
          '🏥 **Private clinics**: incorrect diagnosis, billing errors',
          '✈️ **Airlines**: cancellation, delay, baggage problems — the separate EU 261/2004 procedure also applies',
          '⚠️ **For public services**: Livro does not work; use Provedor de Justiça (ombudsman)'
        ]}
      ]
    },
    {
      id: 'how-to-file',
      title: '✍️ How to file a complaint',
      content: [
        { kind: 'substeps', items: [
          { id: 'h1', title: 'Method A — physical Livro on site', content: [
            { kind: 'checklist', items: [
              'Ask the manager: “Pode-me trazer o Livro de Reclamações?”',
              'You receive a form in 3 copies',
              'Fill it in on site: your name, NIF, contact details, description of the situation, date, time',
              '**Be specific**: exactly what happened, what you want (refund, apology, correction)',
              'Signature + date',
              'The manager takes the original; one copy is for you, one copy will go to the regulator',
              'If the manager refuses to give it to you — that is already a breach; record their name, photograph the refusal, continue online'
            ]}
          ]},
          { id: 'h2', title: 'Method B — online (livroreclamacoes.pt)', content: [
            { kind: 'checklist', items: [
              '**livroreclamacoes.pt** → find the business by NIF / name / address',
              'Log in with CMD or simply register by email',
              'Form: complaint details, attached evidence (photos, receipts, screenshots)',
              'Submit — a copy automatically goes to the business + regulator',
              'Available 24/7, no need to be on site',
              '**Recommended** for most cases — digital trail and simpler'
            ]}
          ]},
          { id: 'h3', title: 'Method C — directly to the regulator', content: [
            { kind: 'checklist', items: [
              'ANACOM (telecoms) — anacom.pt/queixas',
              'ERSE (energy) — erse.pt',
              'BdP (banks) — clientebancario.bportugal.pt',
              'ASAE (food / consumer goods) — asae.gov.pt',
              'ASF (insurance) — asf.com.pt',
              'IMT (transport) — imt-ip.pt',
              'DGS (healthcare) — dgs.pt',
              'ERS (private healthcare providers) — ers.pt'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'what-happens-next',
      title: '📊 What happens next',
      content: [
        { kind: 'checklist', items: [
          '📅 **Day 1**: your copy + the regulator’s copy are received',
          '📅 **Day 5-10**: the business receives notification from the regulator and must prepare a response',
          '📅 **Day 15**: the business **must** write you a response (or the regulator starts an investigation)',
          '⚖️ **If there is no response** or the response is unsatisfactory — the regulator may:',
          '  - Inspect the business (especially ASAE)',
          '  - Issue a warning',
          '  - Impose a fine (€250-€25,000)',
          '  - Require training / changes to practices',
          '🤝 **Most cases (~70%)**: the business contacts you with an apology / refund / solution within 7 days — they do not want a regulator inspection',
          '⏳ **If action is required**: the regulator’s process takes 30-90 days',
          '⚖️ **Civil/criminal proceedings are separate**: if you want personal financial compensation beyond the nominal amount — also file with Tribunal de Pequena Causa or an ordinary court'
        ]}
      ]
    },
    {
      id: 'effective-tips',
      title: '💡 Tips for effective complaints',
      content: [
        { kind: 'checklist', items: [
          '✅ **Specifics**: “I did not like the service” — weak. “At 14:35 the manager refused to accept MB WAY, which was listed on the receipt, and demanded cash, which I did not have” — strong',
          '✅ **Documentary evidence**: receipts, photos, screenshots — attach them',
          '✅ **Specific request**: “I request a refund of €50” / “waiter training”',
          '✅ **Professional tone**, no emotion',
          '✅ **Reference to the relevant law**: “under DL 24/2014 I have the right to return an online purchase within 14 days”',
          '✅ **Reasonable deadline** for a response',
          '⚠️ **No threats** (even a lawful threat of court action) in the complaint itself — that is a separate process',
          '⚠️ **No personal attacks** on staff — focus on the business',
          '✅ **Keep a copy** of the complaint for yourself',
          '✅ **Remind them** after 15 days if there is no response — escalate to the regulator'
        ]}
      ]
    },
    {
      id: 'special-categories',
      title: '🎯 Special categories',
      content: [
        { kind: 'substeps', items: [
          { id: 's1', title: 'Airlines', content: [
            { kind: 'checklist', items: [
              'Livro de Reclamações works',
              '+ EU Regulation 261/2004 for compensation for delay/cancellation (see eu-flight-compensation guide)',
              '+ ANAC (national aviation authority) — anac.pt',
              'Through AirHelp / Flightright if you do not want to do it yourself'
            ]}
          ]},
          { id: 's2', title: 'Public services', content: [
            { kind: 'checklist', items: [
              'Livro does NOT work for AT, AIMA, IRN, Conservatórias',
              '**Provedor de Justiça** (Portugal’s ombudsman): provedor-jus.pt — main escalation route',
              '**Inspeção-Geral**: each ministry has an inspectorate',
              '**Reclamação ao superior hierárquico**: official complaint to the higher-ranking manager within the same body'
            ]}
          ]},
          { id: 's3', title: 'Online businesses', content: [
            { kind: 'checklist', items: [
              'Platforms (Glovo, Uber, Airbnb, Booking) — first use their own internal processes',
              'If there is no solution — DGC (Direção-Geral do Consumidor) — consumer.gov.pt',
              'Cross-border (site in the EU) — ECC-Net (Centro Europeu do Consumidor), free service',
              'Outside the EU — limited options, mainly internal procedures'
            ]}
          ]}
        ]}
      ]
    }
  ],
  costs: [
    { label: 'Filing through Livro de Reclamações', amountEUR: 0 },
    { label: 'Online version livroreclamacoes.pt', amountEUR: 0 },
    { label: 'Complaint to the regulator', amountEUR: 0 },
    { label: 'AirHelp fee', amountEUR: 0, note: '25-35% of the compensation' }
  ],
  sources: [
    { title: 'Livro de Reclamações Online', url: 'https://www.livroreclamacoes.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DL 156/2005 — Livro de Reclamações', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2005-34481275', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Provedor de Justiça', url: 'https://www.provedor-jus.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DGC — Direção-Geral do Consumidor', url: 'https://www.consumidor.gov.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-04-22',
  verifyIntervalDays: 365
}
