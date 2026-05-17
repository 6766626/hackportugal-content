export default {
  editorialVoice: 'hackportugal',
  id: 'motorcycle-license-am-a1',
  categoryId: 'driving_license',
  title: 'Motorcycle licence categories in Portugal: AM, A1, A2, A',
  tldr: 'In Portugal in 2026, motorcycle licences are divided as follows: AM — mopeds/scooters up to 50 cm³ and 45 km/h from age 16; A1 — 125 cm³, up to 11 kW from age 16; A2 — up to 35 kW from age 18; A — no power limit from age 24 or from age 20 after 2 years of A2. For delivery on a 125 cm³ vehicle you usually need A1, or a Portuguese B with permission for A1 under the conditions of the law. Check the back of the carta de condução and the insurance: the platform does not replace the driving category.',
  tags: ['imt', 'motorcycle', 'a1', 'delivery'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'categories',
      title: '1. What each category allows',
      content: [
        { kind: 'paragraph', text: 'The AM, A1, A2 and A categories are shown on the Portuguese carta de condução and are governed by the Regulamento da Habilitação Legal para Conduzir. For the police, the insurer and the delivery platform, what matters is not “roughly the power”, but the exact match between category, cilindrada, potência and sometimes relação potência/peso.' },
        { kind: 'checklist', items: [
          'AM — ciclomotores: usually mopeds/scooters with a design speed up to 45 km/h; if the engine is internal combustion — up to 50 cm³; also light quadriciclos under the category rules.',
          'A1 — motociclos up to 125 cm³, power up to 11 kW and power-to-weight ratio up to 0.1 kW/kg; also triciclos up to 15 kW.',
          'A2 — motociclos with power up to 35 kW and power-to-weight ratio up to 0.2 kW/kg; the motorcycle must not be a “restricted” version of a model with more than twice the power.',
          'A — motociclos with no power limit; also triciclos with power above 15 kW, subject to the age condition.',
          'A displacement of 125 cm³ alone does not guarantee A1: if the power is above 11 kW or it does not pass the kW/kg rule, another category is needed.',
          'Electric scooters are also assessed by category, power and design speed, not by the fact that “it is not petrol”.'
        ] },
        { kind: 'warning', text: 'Riding a 125 cm³ scooter with only AM is driving without the required category. In the event of an accident, the insurer may bring a recovery claim, and the police may record the offence as lack of habilitação legal suficiente.' }
      ]
    },
    {
      id: 'minimum-age',
      title: '2. Minimum age in 2026',
      content: [
        { kind: 'paragraph', text: 'Age is counted on the date the category is obtained, not on the date of enrolment at the escola de condução. The school may start the process in advance, but the exam and issue of the category depend on the IMT minimum age.' },
        { kind: 'checklist', items: [
          'AM — from age 16.',
          'A1 — from age 16.',
          'A2 — from age 18.',
          'A — from age 24 when obtaining the category directly.',
          'A — from age 20 if the driver has already held A2 for at least 2 years and completes the upgrade under IMT rules.',
          'Category A triciclos with power above 15 kW — usually from age 21.',
          'For motorcycle rental, a company may set its own age above the law, for example 21–25 years and 1–2 years of driving experience.'
        ] }
      ]
    },
    {
      id: 'b-license-125',
      title: '3. Can you ride a 125 cm³ with category B',
      content: [
        { kind: 'paragraph', text: 'In Portugal, category B may give additional rights for some two-wheel categories, but this is not a universal rule for every foreign card. On a Portuguese carta de condução it is usually directly visible which categories are open: AM, A1, B and the dates next to them.' },
        { kind: 'checklist', items: [
          'B by itself usually covers AM under Portuguese rules.',
          'For A1 with B, the conditions of Portuguese law apply: in practice, age 25+ or a prior right to AM/ciclomotor is often needed; check the specific entry on the carta and the IMT explanation.',
          'If you have a foreign category B licence, do not assume an automatic right to 125 cm³ in Portugal: the rules of the issuing country and the rules of Portugal may not match.',
          'When exchanging a foreign licence, IMT transfers categories according to the documents and international equivalences; “automatic A1” does not always appear.',
          'For Uber Eats, Glovo, Bolt Food and similar services, the platform may request the carta de condução, livrete/DUA, insurance and confirmation that the vehicle is suitable for commercial use.',
          'Insurance for a motorcycle/scooter must match the actual driver and category. If the category is not suitable, payment after a road accident is at risk.'
        ] },
        { kind: 'warning', text: 'The most common expat mistake: buying a 125 cm³ “for delivery”, having only a foreign B, and deciding that because many people in Portugal ride 125s with B, everyone can. First check the back of the carta de condução or get written confirmation from IMT/the school.' }
      ]
    },
    {
      id: 'how-to-get',
      title: '4. How to obtain or upgrade a category',
      content: [
        { kind: 'paragraph', text: 'The usual route is through an escola de condução, then IMT exams. For AM/A1/A2/A you need documents, medical fitness and to pass theory/practical tests depending on your current set of categories.' },
        { kind: 'substeps', items: [
          { id: 'choose-school', title: 'Choose an escola de condução', content: [
            { kind: 'checklist', items: [
              'Check whether the school has a motorcycle of the required category: A1, A2 or A.',
              'Ask whether the price includes exame de código, exame prático, motorcycle hire for the exam and taxas IMT.',
              'Check the language: many schools teach theory in Portuguese; English-speaking groups are more expensive and are not available everywhere.',
              'For delivery on a 125 cm³ vehicle, the usual target minimum is A1, if your B does not give a legal right to A1.',
              'For a more powerful motorcycle after A1, the logical upgrade is A2, then A.'
            ] }
          ] },
          { id: 'documents', title: 'Prepare the documents', content: [
            { kind: 'checklist', items: [
              'Documento de identificação: residence permit, Cartão de Cidadão, EU certificate or passport with legal status.',
              'NIF.',
              'Atestado médico eletrónico — medical certificate, sent by the doctor to the IMT system.',
              'Current carta de condução, if you already have B, AM, A1 or A2.',
              'Proof of address may be needed by the school or IMT, especially when exchanging a foreign licence.',
              'For exchanging a foreign licence — the original licence, a certificate of authenticity/categories if requested by IMT, and a translation if the document is not in a language accepted by IMT.'
            ] }
          ] },
          { id: 'exams', title: 'Pass the exams', content: [
            { kind: 'paragraph', text: 'The exams include a theory part and practical driving. When upgrading from A2 to A after 2 years, the scope of requirements may differ from direct obtainment, so ask the school to set out your exact route before paying.' }
          ] }
        ] }
      ]
    },
    {
      id: 'foreign-license',
      title: '5. If you already have a foreign licence',
      content: [
        { kind: 'paragraph', text: 'For an expat, the key issue is recognition and exchange of the licence. The rules depend on the issuing country, the length of residence, age, validity of the licence and the existence of international agreements. Motorcycle categories are transferred not “by word of mouth”, but according to the document and IMT equivalence tables.' },
        { kind: 'checklist', items: [
          'EU/EEA licences are usually recognised in Portugal until they expire, but when living in the country, registration/exchange obligations arise in some cases.',
          'Licences from many OECD/CPLP countries may be used without immediate exchange if the conditions of Portuguese law are met, but this does not remove the requirement to have the required motorcycle category.',
          'If the country is not covered by simplified recognition, after obtaining residence an exchange through IMT is usually needed, and sometimes an exam.',
          'If only B is shown on the foreign licence, IMT is not obliged automatically to add A1/A2/A.',
          'If category A is open abroad, check whether there are any restrictions by power, code or date of experience.',
          'For working as a courier, keep copies of the carta, DUA, seguro, inspeção where applicable and confirmation of vehicle registration.'
        ] },
        { kind: 'warning', text: 'Do not rely on advice that “the police do not check”. In a road accident with injuries, everything will be checked: category, issue date, insurance, technical specifications and the right to work on that vehicle.' }
      ]
    },
    {
      id: 'practical-choice',
      title: '6. What to choose for daily life and delivery',
      content: [
        { kind: 'paragraph', text: 'For the city and delivery, the most common choice is 50 cm³ under AM or 125 cm³ under A1/B if the conditions are met. 50 cm³ is cheaper and simpler, but slower and worse for suburbs. 125 cm³ is a practical minimum for Lisboa, Porto, Almada, Oeiras, Gaia and hilly areas.' },
        { kind: 'checklist', items: [
          'If you are a beginner and ride only around the neighbourhood — AM may be enough, but delivery income is usually lower because of speed and range.',
          'If you plan to do delivery regularly — aim for A1 or make sure your B legally covers A1.',
          'If you need a motorcycle for IC/roads faster than city streets — look at A2.',
          'If you want touring, a powerful naked/maxi scooter or to work long-term on a motorcycle — A gives maximum freedom.',
          'Before buying, check the DUA: cilindrada, potência, vehicle type and VIN must match the advert.',
          'Check seguro obrigatório before going on the road; lack of insurance is a separate serious offence.',
          'A helmet is mandatory. For couriers, gloves, rain protection and a bag mount that does not impair handling are also important.'
        ] }
      ]
    }
  ],
  costs: [
    { label: 'Issue/renewal of carta de condução by IMT', amountEUR: 30, note: 'Typical IMT fee for emissão/revalidação; the school may charge separately for assistance.' },
    { label: 'AM/A1 course at an escola de condução', amountEURMin: 250, amountEURMax: 600, note: 'Market range in 2026; depends on the city, language, included exams and amount of practice.' },
    { label: 'A2/A course or upgrade', amountEURMin: 350, amountEURMax: 900, note: 'More expensive because of the motorcycle, the school’s insurance and practice; check whether motorcycle hire for the exam is included.' },
    { label: 'Atestado médico eletrónico', amountEURMin: 20, amountEURMax: 50, note: 'Usually from a family doctor/private doctor; the price depends on the clinic and insurance.' }
  ],
  sources: [
    { title: 'IMT: carta de condução categories', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Condutores/CartaConducao/Paginas/CategoriasdeCarta.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 138/2012: Regulamento da Habilitação Legal para Conduzir', url: 'https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/2012-175828266', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'IMT: carta de condução — information for drivers', url: 'https://www.imt-ip.pt/sites/IMTT/Portugues/Condutores/CartaConducao/Paginas/CartaConducao.aspx', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'ePortugal: apply for a carta de condução', url: 'https://eportugal.gov.pt/servicos/pedir-a-carta-de-conducao', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
