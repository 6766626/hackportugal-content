export default {
  editorialVoice: 'hackportugal',
  id: 'fisioterapia-comparticipacao',
  categoryId: 'healthcare',
  title: 'Fisioterapia with SNS comparticipação and private insurance',
  tldr: 'In Portugal, physiotherapy can be accessed through the SNS with a referral from a médico de família: after most taxas moderadoras were abolished in 2022, for SNS-prescribed treatments the patient usually pays €0, but waits for a slot and goes to a clínica convencionada. Privately, it is faster: usually €25–40 per session, a course of 5–15 sessions = €125–600. Insurance providers such as Médis, Multicare, AdvanceCare and others often offer a copagamento or reimburso, but require a prescrição médica.',
  tags: ['physiotherapy', 'sns', 'insurance', 'comparticipação'],
  estimatedReadMinutes: 5,
  steps: [
    {
      id: 'routes',
      title: '3 working routes: SNS, seguro, private',
      content: [
        { kind: 'paragraph', text: 'Fisioterapia in Portugal usually falls under Medicina Física e de Reabilitação. For an immigrant, the practical choice is: wait for a referral through the SNS, use private insurance, or pay directly.' },
        { kind: 'checklist', items: [
          'SNS: first have a consulta with a médico de família at the Centro de Saúde; the doctor issues a prescrição/credencial for physiotherapy.',
          'SNS with comparticipação: treatments are carried out in an SNS hospital or in a private clínica convencionada with the SNS.',
          'After Decreto-Lei 37/2022, most taxas moderadoras in the SNS were abolished; prescribed SNS physiotherapy usually costs the patient €0.',
          'Private insurance: appointments are faster, but conditions depend on the network and plan — copagamento, plafonds, reimburso.',
          'Fully private: you can book without waiting, but the clinic may ask for a prescrição médica, especially after injuries, operations and for chronic pain.',
          'Popular networks and clinics: Fisiogaspar, Mais Saúde, Físio MAR; there are also many local clínicas de fisioterapia in every concelho.'
        ] }
      ]
    },
    {
      id: 'sns-referral',
      title: 'How to get physiotherapy through the SNS',
      content: [
        { kind: 'paragraph', text: 'The normal route is through a médico de família. If you do not yet have a family doctor, ask for a consulta aberta / consulta do dia at your Centro de Saúde or call SNS 24: 808 24 24 24. For an acute injury — urgência or 112.' },
        { kind: 'substeps', items: [
          { id: 'book-consulta', title: '1. Book an SNS doctor appointment', content: [
            { kind: 'checklist', items: [
              'Take your número de utente.',
              'Describe the problem specifically: pain, restricted movement, date of injury, operation, fall, neurological symptoms.',
              'Bring discharge notes, exames, relatório from a private clinic, if you have them.',
              'Ask for a prescrição para Medicina Física e de Reabilitação / fisioterapia if the doctor considers it indicated.'
            ] }
          ] },
          { id: 'find-clinic', title: '2. Find a clínica convencionada', content: [
            { kind: 'paragraph', text: 'With an SNS referral, you may be sent to an SNS unidade or to a private clinic with a convenção. In large cities the waiting list can be noticeable; in suburbs and small towns it is sometimes faster.' }
          ] },
          { id: 'start-sessions', title: '3. Confirm the course and cost before the first session', content: [
            { kind: 'checklist', items: [
              'Ask whether the clinic accepts the SNS credencial specifically for fisioterapia/MFR.',
              'Confirm how many sessions have been approved.',
              'Check whether any taxa needs to be paid; for most SNS referrals after 2022, the patient taxa moderadora = €0.',
              'Ask for the schedule for the whole course straight away so that the treatment is not stretched over months.'
            ] }
          ] }
        ] }
      ]
    },
    {
      id: 'private-insurance',
      title: 'If you have private insurance',
      content: [
        { kind: 'paragraph', text: 'With insurance in Portugal, physiotherapy almost always follows the network rules: either a copagamento at a partner clinic, or reimburso after payment. Network names: Médis, Multicare, AdvanceCare, Future Healthcare, RNA Medical and others.' },
        { kind: 'checklist', items: [
          'Check the Fisioterapia / Medicina Física e Reabilitação section in the insurer’s app.',
          'Confirm whether a prescrição médica is required. It often is, even if you are going to a private clinic.',
          'Ask about the limit: number of sessions per year, plafond in €, reimburso percentage.',
          'Within the insurer’s network, a copagamento is often better value than reimburso outside the network.',
          'For reimburso, keep the fatura-recibo with NIF, prescrição médica and relatório/declaração de presença, if the insurer requires it.',
          'If the physiotherapy is linked to an acidente de trabalho, seguro automóvel or sport, first confirm who pays: ordinary health insurance may refuse.'
        ] },
        { kind: 'warning', text: 'Do not buy a package of 10–15 private sessions before checking insurance cover. Some plans cover only the doctor’s consulta de fisiatria, but not the sessões de fisioterapia themselves, or cover them only in a specific rede.' }
      ]
    },
    {
      id: 'private-prices',
      title: 'How much it costs privately in 2026',
      content: [
        { kind: 'paragraph', text: 'The market depends heavily on the city and specialisation. In Lisbon, Cascais, Porto and the Algarve, prices are higher; in smaller towns they are lower. A home visit is more expensive, especially if rehabilitation care is needed after an operation or stroke.' },
        { kind: 'checklist', items: [
          'Standard fisioterapia session in a clinic: approximately €25–40.',
          'Course of 5 sessions: approximately €125–200.',
          'Course of 10 sessions: approximately €250–400.',
          'Course of 15 sessions: approximately €375–600.',
          'The initial avaliação may be charged separately or included in the first session.',
          'Home fisioterapia ao domicílio often costs more than a standard session; confirm the price in advance.',
          'Post-operative, neurological, sports or pelvic floor physiotherapy may cost more than the basic range.'
        ] }
      ]
    },
    {
      id: 'what-to-ask',
      title: 'What to ask the clinic before booking',
      content: [
        { kind: 'paragraph', text: 'A good clinic will explain in advance who conducts the treatment, how long the session lasts, whether it will be individual work or a group format, and which documents are needed for the SNS/seguro.' },
        { kind: 'checklist', items: [
          'Tem convenção com SNS para Medicina Física e Reabilitação?',
          'Aceitam a minha seguradora: Médis, Multicare, AdvanceCare or another one?',
          'Preciso de prescrição médica?',
          'Qual é o preço por sessão e por pacote?',
          'A avaliação inicial está incluída?',
          'Quanto dura cada sessão: 30, 45 or 60 minutes?',
          'É tratamento individual or em grupo?',
          'Do you issue a fatura com NIF and documents for reimburso?',
          'Is there a physiotherapist with experience in my problem: coluna, joelho, ombro, pós-operatório, neurologia, pavimento pélvico?'
        ] },
        { kind: 'warning', text: 'Red flags: they promise to “cure it in 1 session”, do not ask about diagnosis and medication, do not issue a fatura, do not explain the treatment plan, push a large package without an avaliação.' }
      ]
    }
  ],
  costs: [
    { label: 'Physiotherapy through the SNS with a referral', amountEUR: 0, note: 'Usually €0 taxa moderadora after most user charges were abolished; an SNS prescrição and a slot in an unidade/convencionada are required.' },
    { label: 'Private session in a clinic', amountEURMin: 25, amountEURMax: 40, note: 'Typical range for a basic sessão de fisioterapia in 2026; specialised and home visits may be more expensive.' },
    { label: 'Course of 10 private sessions', amountEURMin: 250, amountEURMax: 400, note: 'A common course size after injuries, back, knee or shoulder pain; insurance may cover part of it.' }
  ],
  sources: [
    { title: 'SNS 24 — portal for access to SNS services and contact 808 24 24 24', url: 'https://www.sns24.gov.pt', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Decreto-Lei 37/2022 — abolition of most taxas moderadoras in the SNS', url: 'https://dre.pt/dre/detalhe/decreto-lei/37-2022-183984849', kind: 'law', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Entidade Reguladora da Saúde — rights of users of healthcare services', url: 'https://www.ers.pt/pt/utentes/direitos-e-deveres-dos-utentes/', kind: 'official', language: 'pt', lastRetrieved: '2026-04-28' },
    { title: 'Fisiogaspar — example of a private physiotherapy network in Portugal', url: 'https://www.fisiogaspar.pt', kind: 'company', language: 'pt', lastRetrieved: '2026-04-28' }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
