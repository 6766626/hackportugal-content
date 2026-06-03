export default {
  editorialVoice: 'hackportugal',
  id: 'hunting-license-pt',
  categoryId: 'daily_life',
  title: 'Hunter licence (Carta de Caçador) and firearms in Portugal',
  tldr: 'To hunt in Portugal in 2026, a resident needs a Carta de Caçador from ICNF: registration for the exam, theory on hunting law/species/safety, then an annual licença de caça and mandatory civil liability insurance. Non-residents usually do not take the Portuguese exam: they need a licença especial de caça para não residentes + a valid right to hunt in their country of residence + insurance. Firearms are a separate track through PSP: LUPA, medical/psychological checks, training, a safe, and firearm registration.',
  tags: ['hunting', 'firearms', 'icnf', 'psp'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'legal-frame',
      title: 'What exactly you need for legal hunting',
      content: [
        { kind: 'paragraph', text: 'In Portugal, “being able to shoot” is not enough. Hunting is regulated by ICNF and hunting zones, while firearms are regulated by PSP. These are two different systems: Carta de Caçador does not give you the right to own a shotgun, and a firearms licence does not give you the right to hunt.' },
        { kind: 'checklist', items: [
          'Carta de Caçador — hunter certificate, usually required for residents after the ICNF exam',
          'Licença de caça — annual/seasonal hunting licence; without it, Carta de Caçador on its own does not give you the right to go hunting',
          'Seguro de responsabilidade civil — mandatory third-party liability insurance for hunters',
          'The right to hunt in a specific zone: zona de caça associativa, turística, municipal or national territory with a valid calendário venatório',
          'For firearms: LUPA from PSP and registration of each firearm',
          'For a non-resident: licença especial de caça para não residentes instead of the standard route via the Portuguese exam',
          'For bringing firearms from abroad: separate PSP/customs rules; a European Firearms Pass on its own does not replace permission to hunt',
          'Compliance with bag limits, species, season dates and firearm transport rules'
        ] },
        { kind: 'warning', text: 'You cannot legalise hunting “retroactively”. If GNR/ICNF checks you without a valid licença de caça, insurance or the right to the zone, this is an administrative offence; firearm-related breaches may lead to criminal liability and seizure of the firearm.' }
      ]
    },
    {
      id: 'resident-carta',
      title: 'Resident route: Carta de Caçador through ICNF',
      content: [
        { kind: 'paragraph', text: 'If you live in Portugal and want to hunt regularly, the basic route is to obtain a Carta de Caçador. The application is submitted through the gov.pt/ICNF service, and the exam is organised by ICNF. The exam is in Portuguese; the practical point is to understand local species, safety, hunting law and the calendário venatório.' },
        { kind: 'checklist', items: [
          'Check that you have a NIF and an identity document: residence permit, Cartão de Cidadão or passport with lawful stay',
          'Register for the Carta de Caçador exam through gov.pt or an ICNF channel',
          'Pay the exam/service fee using the payment details indicated by ICNF',
          'Prepare the topics: game species, closed seasons, hunting zones, safety, firearms, dogs, liability',
          'Attend the exam with your identity document and proof of booking/payment',
          'After passing the exam, wait for the Carta de Caçador to be issued',
          'Separately arrange the annual licença de caça and insurance — without them you cannot go hunting',
          'If you plan to hunt with a firearm, start the PSP process for LUPA in parallel'
        ] },
        { kind: 'warning', text: 'Carta de Caçador is not a “firearms licence”. Even with Carta de Caçador, you cannot buy or keep a hunting shotgun without the PSP procedure under Lei 5/2006.' }
      ]
    },
    {
      id: 'non-resident',
      title: 'If you are a non-resident or come for hunting',
      content: [
        { kind: 'paragraph', text: 'For foreigners who do not live in Portugal permanently, there is a simplified regime: licença especial de caça para não residentes. You are usually required to prove that you already have the right to hunt in your country of residence/citizenship, and to take out Portuguese liability insurance.' },
        { kind: 'checklist', items: [
          'Valid passport or ID',
          'Document proving your right to hunt in your country: hunting licence / hunter card / hunter permit',
          'Translation or explanation of the document if it is not in PT/EN/ES/FR; in practice, the hunting organiser often helps',
          'Licença especial de caça para não residentes issued through ICNF/an authorised channel',
          'Seguro de responsabilidade civil válido em Portugal — hunter liability insurance',
          'Confirmation of hunting in a specific zone: invitation, contract with a zona de caça turística/associativa or organiser',
          'If bringing firearms from the EU: European Firearms Pass + invitation/reason for travel + compliance with PSP rules',
          'If bringing firearms from a third country: check the temporary PSP authorisation and customs regime in advance; do not bring firearms “just in case”'
        ] },
        { kind: 'warning', text: 'A non-resident licença especial does not turn a tourist into the owner of a Portuguese firearm. It covers the right to hunt subject to the conditions, but transport, import, storage and use of firearms remain subject to PSP rules and Lei 5/2006.' }
      ]
    },
    {
      id: 'insurance-and-season',
      title: 'Insurance, season and hunting location',
      content: [
        { kind: 'paragraph', text: 'Mandatory insurance is one of the documents most often checked on site. It must cover the hunter’s civil liability towards third parties in Portugal. The policy is usually taken out for the season; hunting clubs and organisers often sell a “licença + seguro” package.' },
        { kind: 'checklist', items: [
          'Check that the policy explicitly mentions hunting/atividade cinegética, not just sport or travel',
          'Take a paper or offline copy of the policy with you: mobile internet in rural areas is often unstable',
          'Before travelling, check the ICNF calendário venatório for the current season: species, dates, limits and permitted methods',
          'Confirm the type of zone: municipal, associativa, turística or outra; access rules differ',
          'Do not rely on “locals said it is allowed”: you need zone documents or accompaniment by a responsible organiser',
          'Keep the required distances from homes, roads, people, livestock and agricultural work',
          'Transport firearms unloaded, in a case, separately from ammunition, if applicable under the licence conditions',
          'After hunting, keep documents for the bag/authorisation if the zone requires reporting'
        ] },
        { kind: 'warning', text: 'Calendário venatório changes by season. Hunting dates for rabbit, wild boar, partridge, pigeon and other species cannot be carried over from last year’s PDF or from advice on Facebook.' }
      ]
    },
    {
      id: 'firearms-psp',
      title: 'Firearms: a separate PSP licence',
      content: [
        { kind: 'paragraph', text: 'Firearms are controlled by Polícia de Segurança Pública (PSP). For hunting this usually means classes C/D under Lei 5/2006, but the specific category depends on the type of firearm.\n\nThe process includes a suitability check, training, firearm registration and storage requirements.' },
        { kind: 'checklist', items: [
          'Apply for Licença de Uso e Porte de Arma (LUPA) at PSP/SIGAE or through an available PSP channel',
          'Prepare ID/residence permit, NIF, comprovativo de morada and proof of lawful stay',
          'Obtain a medical certificate of physical and mental fitness; PSP may require a psychological assessment',
          'Complete mandatory firearms safety training/exam, if applicable to your category',
          'Provide certificado do registo criminal if PSP does not obtain it directly',
          'Confirm the need for the firearm: hunting, sport shooting or another lawful purpose',
          'Arrange safe storage at home: cabinet/safe, separate storage of ammunition, access only by the owner',
          'After purchase, register the firearm and keep the livrete/registration documents together with the licence',
          'Renew LUPA in advance; expiry may lead to seizure of the firearm and administrative sanctions'
        ] },
        { kind: 'warning', text: 'Do not buy a hunting firearm “on a receipt” from a private individual without PSP. Transfer of a firearm without lawful registration and authorisation is a serious risk under Lei 5/2006.' }
      ]
    },
    {
      id: 'practical-route',
      title: 'Practical route for an expat',
      content: [
        { kind: 'paragraph', text: 'The safest route is first to decide whether you are a resident hunter or a guest on a one-off trip. For one organised hunt, it is almost always cheaper and faster to use the non-resident licença especial and a local organiser. For living in Portugal and hunting regularly — Carta de Caçador + annual licença + PSP, if you need your own firearm.' },
        { kind: 'checklist', items: [
          'If you live in Portugal: start with ICNF Carta de Caçador, then licença de caça and insurance',
          'If you are coming for 1–2 hunts: ask the organiser to arrange/check the licença especial de caça para não residentes',
          'If you already have a firearm in another EU country: prepare the European Firearms Pass and hunting invitation in advance',
          'If you are from a non-EU country: before buying tickets, check temporary import and firearm documents with PSP',
          'If your Portuguese is weak: go through a hunting association or zona de caça turística; they know the local rules',
          'Always keep a set of documents in the car and on you: ID, Carta/licença, seguro, firearm documents, zone authorisation',
          'Do not mix hunting and alcohol: in an incident this aggravates liability and any insurance dispute',
          'After moving to another concelho, update your address in systems linked to firearms and documents'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Exam/processing of Carta de Caçador through ICNF', amountEURMin: 20, amountEURMax: 40, note: 'The exact taxa depends on the ICNF service and submission method; check on gov.pt/ICNF before paying.' },
    { label: 'Annual licença de caça', amountEURMin: 30, amountEURMax: 80, note: 'Indicative range for a regional/national licence; the amount changes by licence type and season.' },
    { label: 'Hunter insurance', amountEURMin: 15, amountEURMax: 50, note: 'Typical seasonal responsabilidade civil policy for hunting; club packages may cost more.' },
    { label: 'Organised hunting package for a non-resident', amountEURMin: 100, amountEURMax: 500, note: 'Excluding flights and accommodation; depends on the zone, type of hunt, accompaniment and included documents.' },
    { label: 'PSP firearms procedure', amountEURMin: 50, amountEURMax: 250, note: 'Government fees, training, medical/psychological checks and documents; does not include the cost of the firearm, safe and ammunition.' }
  ],
  sources: [
    { title: 'gov.pt: obtaining Carta de Caçador', url: 'https://www2.gov.pt/en/servicos/obter-a-carta-de-cacador', kind: 'official', language: 'en', lastRetrieved: '2026-04-28' },
    { title: 'ICNF: caça, licenças, calendário venatório and gestão cinegética', url: 'https://www.icnf.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'PSP: armas e explosivos, licences for use and carrying of firearms', url: 'https://www.psp.pt/Pages/atividades/ArmasExplosivos.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Lei 5/2006: regime jurídico das armas e munições', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2006-34574575', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
