export default {
  editorialVoice: 'hackportugal',
  id: 'passe-municipal-national',
  categoryId: 'public_transport',
  title: 'Monthly passes in Portugal: Navegante, Andante, passe municipal/metropolitano and the national CP pass',
  tldr: 'There is no single universal ticket for everything in Portugal. The price depends on the territory and the operator. In the metropolitan areas there is a state subsidy under the PART programme: a passe municipal (one concelho) of around €30/month and a passe metropolitano (the whole metropolitan area) of around €40/month — for example Navegante in Lisbon and Andante in Porto. Separately, there are national CP railway passes: the Passe Ferroviário Verde at €20 for 30 days (regional/inter-regional trains + 2nd-class Intercidades, under Decreto-Lei 73/2024) and the Passe Ferroviário Nacional at €49/month for all regional trains. In 2026, buy through your local card: Navegante, Andante or Cartão CP.',
  tags: ['passe', 'transport', 'metro', 'cp'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'How passes work: there is no “one ticket for the whole country”',
      content: [
        { kind: 'paragraph', text: 'Monthly passes in Portugal are subsidised by the state through the PART programme (Programa de Apoio à Redução Tarifária), but there is no single ticket covering all transport in the country.\n\nIn practice, this works through local systems: Área Metropolitana de Lisboa, Área Metropolitana do Porto, CIM, municipalities and operators such as CP, Carris, Metro Lisboa, STCP, Fertagus, Transtejo/Soflusa.' },
        { kind: 'paragraph', text: 'The main thing to understand in 2026: price and coverage depend on the territory. In the metropolitan areas there are two basic tiers — a passe municipal within one concelho (around €30/month) and a passe metropolitano for the whole metropolitan area (around €40/month). The national CP railway passes work separately from these. The name and exact price differ by region.' },
        { kind: 'warning', text: 'Do not confuse the €40 metropolitan passe with the national CP railway passes. The Passe Ferroviário Verde (€20 for 30 days) and the Passe Ferroviário Nacional (€49/month) cover CP regional trains, but do not give automatic access to Alfa Pendular, the full Intercidades service or metropolitan urban transport. A single €40 passe means a metropolitan area, not the whole country.' }
      ]
    },
    {
      id: 'choose-region',
      title: '1. Identify your transport zone',
      content: [
        { kind: 'paragraph', text: 'First look not at the law, but at your travel map: where you live, where you work/study and which operators you actually use. In Portugal, a pass is linked to a territory and fare system.' },
        { kind: 'checklist', items: [
          'Lisbon and suburbs: usually the Navegante card, Área Metropolitana de Lisboa zone',
          'Porto and suburbs: usually Andante, Área Metropolitana do Porto zone',
          'Between towns within a region: check the CIM or Comunidade Intermunicipal',
          'CP Urbanos Lisboa/Porto/Coimbra: often included in the local passe, but check the stations',
          'Regional buses: rules depend on the concessionário and municipality',
          'Tejo ferries: Transtejo/Soflusa may be included in Navegante for the relevant zone',
          'If you live in one concelho and work in another, a municipal pass may not be enough',
          'If you travel between regions, look for a national/interregional option on passe.pt or with CP'
        ] }
      ]
    },
    {
      id: 'buy-card',
      title: '2. Get the card and buy the monthly passe',
      content: [
        { kind: 'paragraph', text: 'You usually need a physical or digital medium: Navegante, Andante, CP card or municipal card. For an ordinary adult expat, a residence permit is often not needed: an identity document and sometimes a NIF/address are enough. For concessions — student, young person, pensioner, social fare — more documents are required.' },
        { kind: 'checklist', items: [
          'Passport, Cartão de Cidadão or residence permit',
          'NIF, if the system asks to link it to a customer profile',
          'Address in Portugal, if you are applying for a municipal/metropolitan concession',
          'Photo for a personalised card, if the process is not digital',
          'Proof of student status for 4_18/sub23/estudante',
          'Proof of income or social situation for Passe Social+',
          'Payment by Multibanco, MB WAY, bank card or cash at a sales point',
          'Validity check: a monthly passe usually runs for a calendar month, not 30 days from purchase'
        ] },
        { kind: 'warning', text: 'A purchase on the 28th–31st may be for the next calendar month or the current one — it depends on the terminal. Before paying, check the activation month on the Multibanco/automatic machine screen.' }
      ]
    },
    {
      id: 'where-to-check',
      title: '3. Compare the municipal, metropolitano and national passes',
      content: [
        { kind: 'paragraph', text: 'Check the conditions on the operators’ websites: navegante.pt for Lisbon, linhandante.com for Porto, cp.pt for railway passes. There you can see the type of pass, region, zones and price. In 2026, this is the safest way not to overpay for unnecessary coverage and not to buy a pass that is too narrow.' },
        { kind: 'checklist', items: [
          'Open the relevant operator’s website and choose the region or type of passe',
          'Compare the passe municipal (one concelho, around €30) and the passe metropolitano (whole metropolitan area, around €40)',
          'Check whether your CP stations or bus routes are included in the chosen passe',
          'If you travel between regions by train, compare the Passe Ferroviário Verde (€20/30 days) and the Passe Ferroviário Nacional (€49/month)',
          'Look for exclusions: express, long-distance, tourist tickets, airport shuttle',
          'Save a PDF/screenshot of the conditions in case of a dispute at the ticket office',
          'If the operator refuses, ask for a link to the 2026 fare table',
          'When moving to another concelho, apply for a new passe — the old one may stop being optimal'
        ] }
      ]
    },
    {
      id: 'common-cases',
      title: 'Typical scenarios for an expat',
      content: [
        { kind: 'substeps', items: [
          { id: 'lisbon', title: 'Lisbon: Cascais/Sintra/Almada/Setúbal ↔ Lisboa', content: [
            { kind: 'paragraph', text: 'Almost always start with Navegante. If your journeys are within Área Metropolitana de Lisboa, a metropolitan pass is often better value than a set of separate CP + metro + bus tickets. Check whether Fertagus or the ferry is included if you cross the Tejo.' }
          ] },
          { id: 'porto', title: 'Porto: Gaia/Matosinhos/Maia/Gondomar ↔ Porto', content: [
            { kind: 'paragraph', text: 'Check Andante and the required zones. A newcomer mistake is buying too small a zone and getting fined when crossing the boundary. For daily journeys, the metropolitan option is usually simpler than the zonal minimum.' }
          ] },
          { id: 'small-city', title: 'Small town or moving to the interior', content: [
            { kind: 'paragraph', text: 'Check the municipal passe, CIM and CP regional. In smaller towns, the discount may be arranged not through a metro machine, but at the Câmara Municipal, Loja do Cidadão, with the bus operator or through a school/social service.' }
          ] }
        ] }
      ]
    },
    {
      id: 'fines-and-proof',
      title: 'Fines, validation and proof of payment',
      content: [
        { kind: 'paragraph', text: 'A pass must be validated on entry, even if it is monthly. The inspector checks not only payment, but also the correct zone, card personalisation and concession status.' },
        { kind: 'checklist', items: [
          'Always validate your card on the metro, bus, tram, train and ferry',
          'Carry an identity document if the card is personalised',
          'For a student/social fare, keep proof of status on your phone',
          'If the validator is not working, photograph it and look for another validator',
          'Do not pass a personalised passe to another person',
          'Check that the monthly passe has been loaded onto the card, not just paid for',
          'After topping up via Multibanco, activation on a validator/terminal is sometimes required',
          'In the event of a fine, ask for the auto de notícia and instructions for a reclamação'
        ] },
        { kind: 'warning', text: 'Inspectors usually do not accept the argument “I thought my passe covered everything”. Coverage is determined by the specific pass and zones: a metropolitan passe is not valid on national trains outside its zones, and a railway pass does not cover metropolitan urban transport.' }
      ]
    }
  ],
  costs: [
    { label: 'Passe municipal (one concelho) — e.g. Navegante Municipal', amountEUR: 30, note: 'Reference point under the PART programme for metropolitan areas; in Lisbon Navegante Municipal is €30/month. The exact price and name depend on the region.' },
    { label: 'Passe metropolitano (whole metropolitan area) — e.g. Navegante Metropolitano', amountEUR: 40, note: 'Reference point under the PART programme; in Lisbon Navegante Metropolitano is €40/month, with an Andante equivalent in Porto. This is a metropolitan area, not the whole country.' },
    { label: 'Passe Ferroviário Verde (CP, 30 days)', amountEUR: 20, note: 'Regional/inter-regional trains + 2nd-class Intercidades, under Decreto-Lei 73/2024; requires a Cartão CP.' },
    { label: 'Passe Ferroviário Nacional (CP, month)', amountEUR: 49, note: 'All CP regional trains nationwide; not valid on Alfa Pendular, Intercidades or metropolitan urban transport.' },
    { label: 'Issuing a personalised card', amountEURMin: 3, amountEURMax: 12, note: 'Depends on the system: Navegante, Andante, CP or municipal card; the Cartão CP costs €6 (€3 for students).' }
  ],
  sources: [
    { title: 'Decreto-Lei n.º 73/2024 — Passe Ferroviário Verde', url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/73-2024-891541243', kind: 'law', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'CP — Passe Ferroviário Nacional', url: 'https://www.cp.pt/passageiros/pt/descontos-vantagens/descontos/ferroviario-nacional', kind: 'company', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Navegante — fares and cards for Área Metropolitana de Lisboa', url: 'https://www.navegante.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-05-31' },
    { title: 'Andante — fares and zones for Área Metropolitana do Porto', url: 'https://www.linhandante.com', kind: 'company', language: 'pt', lastRetrieved: '2026-05-31' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
