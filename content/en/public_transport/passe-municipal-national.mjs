export default {
  editorialVoice: 'hackportugal',
  id: 'passe-municipal-national',
  categoryId: 'public_transport',
  title: 'Passe Metropolitano and the national €40/month discount',
  tldr: 'Since 2024, a national framework has applied under Decreto-Lei 1-A/2024: monthly public transport passes are state-funded through the passes.pt system, with a national cap/support of up to €40/month and separate metropolitan passes at around €20/month in applicable zones. This is not one universal ticket for everything: the rules depend on AML, AMP, CIM/municipality, operator and type of journey. In 2026, buy through the local card: Navegante, Andante, CP/municipal passe.',
  tags: ['passe', 'transport', 'metro', 'cp'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-it-is',
      title: 'What changed: the cap does not mean “one ticket for the whole country”',
      content: [
        { kind: 'paragraph', text: 'Decreto-Lei 1-A/2024 established national funding for monthly passes and discounts on public transport. In practice, this works through local systems: Área Metropolitana de Lisboa, Área Metropolitana do Porto, CIM, municipalities and operators such as CP, Carris, Metro Lisboa, STCP, Fertagus, Transtejo/Soflusa.' },
        { kind: 'paragraph', text: 'The main idea for the user in 2026: a monthly passe should fit within the national support framework — up to €20/month for the applicable metropolitan/municipal format and up to €40/month for a broader national/interregional combination, if it is available in your zone. But the name, coverage and purchase method differ by region.' },
        { kind: 'warning', text: 'Do not confuse this with single tickets, tourist cards or CP Alfa Pendular/Intercidades trains. National support under DL 1-A/2024 does not mean that any train or bus in the country is automatically included in one €40 passe.' }
      ]
    },
    {
      id: 'choose-region',
      title: '1. Define your transport zone',
      content: [
        { kind: 'paragraph', text: 'First look not at the law, but at your journey map: where you live, where you work/study and which operators you actually use. In Portugal, a travel pass is tied to a territory and fare system.' },
        { kind: 'checklist', items: [
          'Lisbon and suburbs: usually the Navegante card, Área Metropolitana de Lisboa zone',
          'Porto and suburbs: usually Andante, Área Metropolitana do Porto zone',
          'Between towns within a region: check the CIM or Comunidade Intermunicipal',
          'CP Urbanos Lisboa/Porto/Coimbra: often included in the local passe, but check the stations',
          'Regional buses: rules depend on the concessionário and municipality',
          'Tejo ferries: Transtejo/Soflusa may be included in Navegante for the required zone',
          'If you live in one concelho and work in another, a municipal pass may not be enough',
          'If you travel between regions, look for a national/interregional option on passe.pt or with CP'
        ] }
      ]
    },
    {
      id: 'buy-card',
      title: '2. Get the card and buy the monthly passe',
      content: [
        { kind: 'paragraph', text: 'Usually you need a physical or digital medium: Navegante, Andante, CP card or municipal card. For an ordinary adult expat, a residence permit is often not needed: an identity document and sometimes a NIF/address are enough. For discounts — student, youth, pensioner, social fare — more documents are required.' },
        { kind: 'checklist', items: [
          'Passport, Cartão de Cidadão or residence permit',
          'NIF, if the system asks for a link to a customer profile',
          'Address in Portugal, if applying for a municipal/metropolitan discount',
          'Photo for a personalised card, if the application is not digital',
          'Proof of student status for 4_18/sub23/estudante',
          'Proof of income or social situation for Passe Social+',
          'Payment by Multibanco, MB WAY, bank card or cash at a sales point',
          'Check the validity period: a monthly passe usually runs for a calendar month, not 30 days from purchase'
        ] },
        { kind: 'warning', text: 'A purchase on the 28th–31st may be for the next calendar month or for the current one — it depends on the terminal. Before paying, check the activation month on the Multibanco/validator screen.' }
      ]
    },
    {
      id: 'where-to-check',
      title: '3. Check eligibility for €20/€40 through passe.pt',
      content: [
        { kind: 'paragraph', text: 'passe.pt is the national entry point for information on supported passes. It is used to check the type of pass, region, operator and applicable discount. In 2026, this is the safest way not to overpay for a local option when a metropolitan or national option exists.' },
        { kind: 'checklist', items: [
          'Open passe.pt and choose the region or type of passe',
          'Compare municipal, metropolitan and intermunicipal options',
          'Check whether your CP stations or bus lines are included',
          'Check whether the €20/month or €40/month cap applies specifically to your profile',
          'Look at the exceptions: express, long-distance, tourist, airport shuttle',
          'Save a PDF/screenshot of the conditions in case of a dispute at the ticket office',
          'If the operator refuses, ask for a link to the 2026 fare table',
          'When moving to another concelho, apply for a new passe — the old one may stop being the best option'
        ] }
      ]
    },
    {
      id: 'common-cases',
      title: 'Typical scenarios for an expat',
      content: [
        { kind: 'substeps', items: [
          { id: 'lisbon', title: 'Lisbon: Cascais/Sintra/Almada/Setúbal ↔ Lisboa', content: [
            { kind: 'paragraph', text: 'Almost always start with Navegante. If journeys are within Área Metropolitana de Lisboa, the metropolitan pass is often better value than a set of separate CP + metro + bus tickets. Check whether Fertagus or the ferry is included if you travel across the Tejo.' }
          ] },
          { id: 'porto', title: 'Porto: Gaia/Matosinhos/Maia/Gondomar ↔ Porto', content: [
            { kind: 'paragraph', text: 'Check Andante and the required zones. A newcomer’s mistake is buying too small a zone and getting a fine when crossing the boundary. For daily journeys, the metropolitan option is usually simpler than the zonal minimum.' }
          ] },
          { id: 'small-city', title: 'Small town or a move to the interior', content: [
            { kind: 'paragraph', text: 'Check the municipal passe, CIM and CP regional. In small towns, the discount may be processed not through a metro machine, but at the Câmara Municipal, Loja do Cidadão, with the bus operator or through a school/social service.' }
          ] }
        ] }
      ]
    },
    {
      id: 'fines-and-proof',
      title: 'Fines, validation and proof of payment',
      content: [
        { kind: 'paragraph', text: 'The travel pass must be validated on entry, even if it is monthly. The inspector checks not only payment, but also the correct zone, card personalisation and discount status.' },
        { kind: 'checklist', items: [
          'Always validate the card on the metro, bus, tram, train and ferry',
          'Carry an identity document if the card is personalised',
          'For a student/social fare, keep proof of status on your phone',
          'If the validator is not working, photograph it and look for another validator',
          'Do not give a personalised passe to another person',
          'Check that the monthly passe has been loaded onto the card, not just paid for',
          'After topping up via Multibanco, activation on a validator/terminal is sometimes needed',
          'In the event of a fine, ask for the auto de notícia and instructions for a reclamação'
        ] },
        { kind: 'warning', text: 'Inspectors usually do not accept the argument “I thought the national €40 cap covered everything”. Coverage is determined by the specific passe and zones, not by the overall amount of support in the law.' }
      ]
    }
  ],
  costs: [
    { label: 'Metropolitan/municipal passe with applicable national support', amountEUR: 20, note: 'Guide value under DL 1-A/2024 for applicable zones; the actual name and coverage depend on the region.' },
    { label: 'National/interregional monthly cap/support', amountEUR: 40, note: 'National support framework; does not guarantee access to every long-distance train or private express bus.' },
    { label: 'Personalised card issue', amountEURMin: 3, amountEURMax: 12, note: 'Depends on the system: Navegante, Andante, CP or municipal card; urgent issue is usually more expensive.' }
  ],
  sources: [
    { title: 'Decreto-Lei 1-A/2024 — national legal framework for passe support', url: 'https://dre.pt/dre/detalhe/decreto-lei/1-a-2024', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'passe.pt — national portal for travel passes and discounts', url: 'https://www.passe.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Navegante — fares and cards for Área Metropolitana de Lisboa', url: 'https://www.navegante.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Andante — fares and zones for Área Metropolitana do Porto', url: 'https://www.linhandante.com', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
