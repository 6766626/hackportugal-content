export default {
  editorialVoice: 'hackportugal',
  id: 'creches-gratis-3a5-anos',
  categoryId: 'education_children',
  title: 'Free Creches for children aged 0–3: Programa Creche Feliz',
  tldr: 'Creche Feliz is a free childcare programme for children up to age 3 in Portugal. In 2026 it covers mensalidade, inscrição, meals and basic care in creches aderentes, if the child is within the covered age cohort and there is a place. You need the child’s/parents’ NIF, the child’s NISS and proof of address. In practice, the application goes through searching for a place on Carta Social and contacting the creche. The main risk is not eligibility, but a shortage of vagas, especially in Lisboa, Porto, Cascais and Oeiras.',
  tags: ['creche', 'children', 'crechefeliz', 'segurançasocial'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'what-is-covered',
      title: 'What Creche Feliz is and what is free',
      content: [
        { kind: 'paragraph', text: 'Programa Creche Feliz is a state scheme under which Segurança Social pays for a child’s place in a creche aderente. For the family, the basic creche becomes €0 per month, but only if the institution participates in the programme and has a free vaga.' },
        { kind: 'checklist', items: [
          'Mensalidade is usually covered — the monthly fee for the creche.',
          'Inscrição / matrícula is covered if it is included in the programme’s standard services.',
          'The child’s meals are covered within the normal creche timetable.',
          'Basic higiene e cuidados are covered — standard nursery care.',
          'The programme applies to creche, meaning mainly ages 0–3 before moving to pré-escolar.',
          'Eligibility does not depend on the family being Portuguese: expats with documents and registrations can also use the programme.',
          'Free provision only works in creches aderentes: IPSS, Misericórdias, the social sector and private institutions that have joined the programme.'
        ] },
        { kind: 'warning', text: 'Creche Feliz does not mean a guaranteed place near home. In 2026 the shortage of vagas remains the main limitation: an institution may be free under the programme, but completely full.' }
      ]
    },
    {
      id: 'eligibility',
      title: 'Who is eligible in 2026',
      content: [
        { kind: 'paragraph', text: 'The key criterion is that the child must be accepted into a creche aderente and fall within the age range covered by the programme. In 2026 the programme already applies as a broad scheme for children up to age 3, including children born after 1 September 2021 and subsequent cohorts.' },
        { kind: 'checklist', items: [
          'The child lives in Portugal and has a NIF.',
          'The child has a NISS or it is being arranged through Segurança Social; many creches will ask for the NISS before final registration.',
          'One or both parents / responsáveis legais have a NIF.',
          'The family has an address in Portugal: a rental contract, bill, atestado de residência or another document the institution will accept.',
          'The child has not yet moved to pré-escolar; creche is usually ages 0–3.',
          'The institution must be aderente ao Programa Creche Feliz.',
          'The place must be confirmed by the creche itself; registration on a website alone is not enough.'
        ] },
        { kind: 'warning', text: 'The conditions “residência 5 anos” and “não em ERPI” do not apply to Creche Feliz. ERPI means estrutura residencial para pessoas idosas, i.e. care homes for older people. These criteria do not apply to a free creche; follow the rules of Segurança Social and the specific creche.' }
      ]
    },
    {
      id: 'how-to-find-place',
      title: 'How to search for a place through Carta Social',
      content: [
        { kind: 'paragraph', text: 'Carta Social is the main public directory of social institutions. It is a convenient way to check creches participating in Creche Feliz and the availability of declared vagas. But the final decision is still made by the specific creche after contact with the family.' },
        { kind: 'substeps', items: [
          { id: 'open-carta-social', title: '1. Open Carta Social', content: [
            { kind: 'paragraph', text: 'Go to cartasocial.pt and search for the resposta social “Creche” by concelho, freguesia or postcode.' }
          ] },
          { id: 'filter-creche-feliz', title: '2. Check participation in Creche Feliz', content: [
            { kind: 'paragraph', text: 'Choose institutions where participation in Programa Creche Feliz or the availability of vagas gratuitas is indicated. Not all private creches take part in the programme.' }
          ] },
          { id: 'contact-creche', title: '3. Contact the creche directly', content: [
            { kind: 'checklist', items: [
              'Call and check vagas for the month you need.',
              'Ask whether the specific vaga is included in Creche Feliz.',
              'Check whether they accept a child of your child’s age.',
              'Ask for the list of documents by e-mail.',
              'Check the horário: full day, extended hours, meals.',
              'Ask whether there is a waiting list and how often it is updated.'
            ] }
          ] },
          { id: 'confirm-registration', title: '4. Confirm the matrícula', content: [
            { kind: 'paragraph', text: 'After the creche agrees, you submit the documents and sign the regulamento interno and matrícula. Only after this is the place considered real.' }
          ] }
        ] }
      ]
    },
    {
      id: 'documents',
      title: 'Documents usually requested',
      content: [
        { kind: 'paragraph', text: 'The list varies slightly by institution, but for expats it is better to prepare the package in advance. If the child does not yet have a NISS, check with the creche whether you can submit the matrícula with a comprovativo de pedido.' },
        { kind: 'checklist', items: [
          'The child’s passport or Cartão de Cidadão, if available.',
          'The child’s NIF.',
          'The child’s NISS or confirmation of the NISS request.',
          'Passport / Cartão de Cidadão / residence permit of the parents or responsáveis legais.',
          'Parents’ NIF.',
          'Parents’ NISS, if available.',
          'Comprovativo de morada: rental contract, bill, atestado de residência from the Junta de Freguesia.',
          'Boletim de vacinas / vaccination document.',
          'SNS details: número de utente, if already arranged.',
          'Emergency contacts and autorização de recolha — who is allowed to collect the child.',
          'An IBAN may be requested even with a €0 mensalidade, for example for meals outside the programme or additional services.'
        ] },
        { kind: 'warning', text: 'If you have only just moved, do not wait for a residence permit to start searching. Many families start calling creches with just NIF, an address and passports, and send missing documents later — but the rules depend on the institution.' }
      ]
    },
    {
      id: 'capacity-and-priority',
      title: 'Waiting lists, priorities and the reality of places',
      content: [
        { kind: 'paragraph', text: 'In 2026, free provision has increased demand. In large municipalities, a child may formally be eligible for Creche Feliz but still not get a place in the desired freguesia. The practical strategy is to apply to 10–20 creches, including neighbouring freguesias and routes on the way to work.' },
        { kind: 'checklist', items: [
          'Start searching 6–12 months before the desired start date.',
          'Apply to both IPSS and private creches aderentes.',
          'Check not only Lisboa/Porto, but also neighbouring concelhos: Amadora, Odivelas, Loures, Almada, Gaia, Matosinhos, Maia.',
          'Check the age group: berçário up to 12 months usually has fewer places.',
          'Keep e-mail confirmations of applications and replies from creches.',
          'Ask in writing for the child to be placed on the lista de espera.',
          'Update the contact every 3–4 weeks: places appear when families move.',
          'Check the Câmara Municipal: some municípios have their own creche maps, subsidies or pré-inscrição.'
        ] },
        { kind: 'warning', text: 'Do not pay a “reservation” in cash without a recibo. If the institution says the place is free under Creche Feliz but requires compulsory payments beyond the programme, ask for a written explanation of exactly what the amount is for.' }
      ]
    },
    {
      id: 'what-is-not-free',
      title: 'What may remain payable',
      content: [
        { kind: 'paragraph', text: 'Creche Feliz covers the basic creche, but it does not make all of the institution’s services free. Optional services, or anything outside the standard regulamento, often remain payable.' },
        { kind: 'checklist', items: [
          'Extended horário into the early morning or late evening.',
          'Creche–home transport.',
          'Uniform, sun hat, backpack or individual materials.',
          'Additional activities: inglês, música, natação, dança.',
          'Trips and celebrations.',
          'Special meals if they are not included in the institution’s normal plan.',
          'Penalties for late collection of the child.',
          'Photo sessions, albums and other optional services.'
        ] },
        { kind: 'paragraph', text: 'Before signing the matrícula, ask for the regulamento interno and tabela de preços. In a normal situation, the mensalidade under Creche Feliz is €0, and all additional payments must be clearly described and separated from the basic service.' }
      ]
    }
  ],
  costs: [
    { label: 'Mensalidade in a creche aderente under Creche Feliz', amountEUR: 0, note: 'The basic monthly fee is covered by the programme when there is a confirmed vaga.' },
    { label: 'Inscrição / matrícula', amountEUR: 0, note: 'Usually covered under the programme; check that the institution is not charging for additional services.' },
    { label: 'Additional services', amountEURMin: 10, amountEURMax: 150, note: 'Extended hours, transport, uniform, clubs and trips may be charged separately.' }
  ],
  sources: [
    { title: 'Gov.pt: joining Programa Creche Feliz', url: 'https://www.gov.pt/servicos/aderir-ao-programa-creche-feliz', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Segurança Social: Creche Feliz', url: 'https://www.seg-social.pt/creche-feliz', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Carta Social: search for creches and social responses', url: 'https://www.cartasocial.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'DRE: Lei 41/2023', url: 'https://diariodarepublica.pt/dr/detalhe/lei/41-2023', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-17',
  verifyIntervalDays: 180
}
