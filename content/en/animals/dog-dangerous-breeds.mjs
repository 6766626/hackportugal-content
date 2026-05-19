export default {
  editorialVoice: 'hackportugal',
  id: 'dog-dangerous-breeds',
  categoryId: 'animals',
  title: 'Dogs in Portugal — registration, dangerous breeds, tax',
  tldr: 'Dog registration: SIAC (Sistema de Identificação dos Animais de Companhia) is mandatory after microchipping — free at the vet. Municipal licence (licença canina) — category by dog type: H = cão perigoso, G = cão potencialmente perigoso, standard categories — for the rest. Under DL 315/2009: for cão perigoso/potencialmente perigoso, civil liability insurance is mandatory (legal minimum), as are a muzzle + lead in public places, and the owner must be an adult with no convictions for certain crimes. List of potencialmente perigoso (Portaria 422/2004 and updates): Rottweiler, Pit Bull Terrier, Staffordshire Terrier, Tosa Inu, Fila Brasileiro, American Staffordshire Terrier, Dogo Argentino and crossbreeds of these breeds.',
  tags: ['dogs', 'animals', 'dog', 'fighting dogs'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'register',
      title: '📝 Dog registration — mandatory steps',
      content: [
        { kind: 'substeps', items: [
          { id: 'r1', title: '1. Microchip (SIAC)', content: [
            { kind: 'checklist', items: [
              'Mandatory for all dogs ≥ 4 months (and pet cats)',
              'Inserted by a vet — €20-40',
              'Automatically registered in SIAC (centralised database) — free',
              'Chip check: siac.dgav.pt by number'
            ]}
          ]},
          { id: 'r2', title: '2. Licença Canina (municipal licence)', content: [
            { kind: 'checklist', items: [
              'Applied for at the Junta de Freguesia for your place of residence',
              'Documents: SIAC registration, rabies vaccination, sterilisation certificate (if sterilised)',
              'Cost: €5-15/year (depends on the municipality; categories A/B are more expensive, up to €50)',
              'Tag (medalha) — a ring with a number, attached to the collar',
              'Renewal annually by 31 March',
              'Fine for not having a licence: €50-250'
            ]}
          ]},
          { id: 'r3', title: '3. Vaccinations', content: [
            { kind: 'checklist', items: [
              'Rabies — mandatory annually (confirmed by a vet)',
              'Combined (DHPPi+L) — recommended annually',
              'Kennel cough — for active dogs / dogs that often visit a groomer',
              'The vet also checks the antibody titre on entry from countries outside the EU'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'dangerous-breeds',
      title: '⚠️ Cão perigoso (category H) and potencialmente perigoso (category G)',
      content: [
        { kind: 'paragraph', text: 'DL 315/2009 defines “perigoso” and “potencialmente perigoso” — special rules for registration, insurance and handling.' },
        { kind: 'substeps', items: [
          { id: 'd1', title: 'Cão potencialmente perigoso — list of breeds (category G)', content: [
            { kind: 'checklist', items: [
              'American Pit Bull Terrier',
              'American Staffordshire Terrier',
              'Staffordshire Bull Terrier',
              'Rottweiler',
              'Dogo Argentino',
              'Fila Brasileiro',
              'Tosa Inu (Tosa Japanese)',
              'Cão de Fila de São Miguel',
              'Crossbreeds of these breeds (≥ 50% bloodline)',
              'Any dog that has shown aggression towards a person or animal (without provocation) is moved to cão perigoso (category H) (perigoso) by decision of the municipal vet'
            ]}
          ]},
          { id: 'd2', title: 'Owner requirements', content: [
            { kind: 'checklist', items: [
              '≥ 18 years old',
              'No convictions for violence',
              'No mental health contraindications (medical certificate)',
              'Complete a special “formação em comportamento canino” course (in some municipalities)',
              'Mandatory civil liability insurance ≥ €50,000 (costs €50-200/year)',
              'Declaration to the Junta that you have a dangerous dog'
            ]}
          ]},
          { id: 'd3', title: 'Keeping rules', content: [
            { kind: 'checklist', items: [
              'Outdoors: muzzle (açaime) + lead shorter than 1 m',
              'Not allowed in children’s playgrounds, on public transport, in restaurants',
              'In the yard: fence ≥ 1.8 m, “cão perigoso” sign',
              'Walking only with an adult accompanying the dog',
              'No more than 2 category A/B dogs in one household without a special licence'
            ]}
          ]},
          { id: 'd4', title: 'Fines', content: [
            { kind: 'checklist', items: [
              'No licença: €50-1,000',
              'No insurance: €500-3,000',
              'No muzzle outdoors: €500-1,500',
              'Attack (even without serious consequences): €1,000-3,750',
              'Repeated breaches: dog seizure, 5-year ownership ban'
            ]}
          ]}
        ]}
      ]
    },
    {
      id: 'breeding',
      title: '🐕‍🦺 Breeding and sale',
      content: [
        { kind: 'checklist', items: [
          'Professional breeding requires registration with DGAV (Direção-Geral de Alimentação e Veterinária)',
          'Breeding category A/B dogs is prohibited (since 2009) — only sterilisation is possible',
          'Sale without a chip/registration — fine up to €3,750',
          'Kennel clubs: Clube Português de Canicultura (cpc.pt) for official pedigrees'
        ]}
      ]
    },
    {
      id: 'abandoned',
      title: '🆘 What to do with an abandoned dog',
      content: [
        { kind: 'checklist', items: [
          'Call the municipal shelter (canil): each municipality has its own',
          'Or GNR SEPNA (environmental police) 217 653 100 — for wild animals / potentially dangerous cases',
          'Help: União Zoófila (Lisboa), SOS Animal, Associação Animais de Rua — NGOs',
          'In parks / on trails, a dog without an accompanying person — report it to SEPNA or the fire brigade',
          'Abandoning a dog in Portugal is a criminal offence if intent is proven (up to 3 years’ imprisonment under Lei 69/2014)'
        ]}
      ]
    },
    {
      id: 'vet-prices',
      title: '💰 Veterinary costs',
      content: [
        { kind: 'checklist', items: [
          'Consultation: €25-40 (standard), €50-80 (specialist clinic)',
          'Castration/sterilisation: €150-350 (male dog), €200-500 (female dog)',
          'Vaccination (annual): €30-50',
          'SIAC chip: €20-40',
          'Dentistry (cleaning): €200-400',
          'Blood tests: €40-100',
          'X-ray: €60-100',
          'Emergência 24/7 (emergency care): €80-150 for the consultation only',
          'Euthanasia + cremation: €150-300',
          '🏥 Pet insurance: €10-40/month — Tranquilidade Pet, Médis Animal, PetPremium'
        ]}
      ]
    },
    {
      id: 'lost-found',
      title: '🔍 Lost pet',
      content: [
        { kind: 'checklist', items: [
          'Immediately: notify SIAC (siac.dgav.pt) — status "desaparecido"',
          'Municipal shelter (canil) — check every 2-3 days (dogs are often brought here)',
          'Social media: Facebook group “Animais Perdidos” in your region',
          'Put up notices in the neighbourhood — with a photo, name, phone number (do not reveal that there is a reward)',
          'If you find someone else’s dog: scan the chip at a vet (all veterinary clinics have a reader)',
          'You cannot keep a found dog — it is theft under the law'
        ]}
      ]
    }
  ],
  costs: [
    { label: 'SIAC microchip', amountEURMin: 20, amountEURMax: 40 },
    { label: 'Licença Canina (standard)', amountEURMin: 5, amountEURMax: 15, note: '€/year' },
    { label: 'Licença Canina cão perigoso (category H)/B', amountEURMin: 25, amountEURMax: 50, note: '€/year' },
    { label: 'Insurance for categories A/B', amountEURMin: 50, amountEURMax: 200, note: '€/year' },
    { label: 'Annual vaccination', amountEURMin: 30, amountEURMax: 50 },
    { label: 'Castration', amountEURMin: 150, amountEURMax: 500 }
  ],
  sources: [
    { title: 'DGAV — SIAC', url: 'https://www.dgav.pt/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'DL 315/2009 — dangerous dogs (consolidated)', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2009-34469975', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Lei 69/2014 — animal mistreatment', url: 'https://diariodarepublica.pt/dr/detalhe/lei/69-2014-56470378', kind: 'law', language: 'pt', lastRetrieved: '2026-04-22' },
    { title: 'Clube Português de Canicultura', url: 'https://www.cpc.pt/', kind: 'company', language: 'pt', lastRetrieved: '2026-04-22' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 365
}
