export default {
  editorialVoice: 'hackportugal',
  id: 'atestado-multiusos-amim',
  categoryId: 'healthcare',
  title: 'Atestado Médico de Incapacidade Multiuso (AMIM): how to obtain a disability certificate',
  tldr: 'AMIM is a Portuguese multi-purpose certificate in which a junta médica records the incapacidade percentage according to medical tables. The key threshold is ≥60%: it gives access to IRS benefits, exemptions/reductions when buying and owning a car (ISV, IVA, IUC — subject to the legal conditions), priorities and social measures. The request is submitted to the Unidade de Saúde Pública/Delegado de Saúde for your place of residence. The basic fee in 2026: €12.50; reassessment — €5; recurso — €25.',
  tags: ['amim', 'sns', 'disability', 'irs', 'benefits'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'what-it-is',
      title: 'What AMIM is and why you need it',
      content: [
        { kind: 'paragraph', text: 'Atestado Médico de Incapacidade Multiuso (AMIM) is an official medical certificate that confirms the degree of incapacidade as a percentage. It is issued not by a family doctor or a private clinic, but by a junta médica after assessing the documents and, if necessary, carrying out an examination.' },
        { kind: 'paragraph', text: 'The word Multiuso is important: one document is used for different authorities — Finanças, Segurança Social, IMT, schools, employers, municipal services. The decisive threshold is usually incapacidade igual ou superior a 60%.' },
        { kind: 'checklist', items: [
          'IRS: increased deductions and special tax rules for a taxpayer with deficiência ≥60%',
          'ISV: possible exemption when buying a car for a pessoa com deficiência, if separate conditions are met',
          'IVA: possible relief/exemption when buying a car for some disability categories',
          'IUC: possible exemption from or limitation of car tax with incapacidade ≥60% and compliance with the conditions',
          'Priority service in public services, where applicable',
          'Access to certain social, educational and municipal measures',
          'Confirmation of status for an employer, if you decide to provide it yourself'
        ] },
        { kind: 'warning', text: 'AMIM does not in itself mean an automatic benefit payment or automatic exemption from all taxes. Each benefit has separate rules: percentage, type of disability, vehicle category, limits, ownership period, registration with Finanças or IMT.' }
      ]
    },
    {
      id: 'who-can-apply',
      title: 'Who can apply',
      content: [
        { kind: 'paragraph', text: 'The request can be made by a person living in Portugal who has medical grounds for an incapacidade assessment. For an expat, the main practical route is first to obtain a número de utente in the SNS and then contact the Unidade de Saúde Pública for their place of residence.' },
        { kind: 'checklist', items: [
          'Portuguese citizens and foreigners living in Portugal',
          'Holders of a residence permit, D1-D8 visas, EU citizens with CRUE — provided they have an address in Portugal',
          'Children — through parents or a legal representative',
          'People with chronic illnesses, oncology conditions, consequences of injuries, limitations in mobility, vision, hearing, mental health',
          'People who need reassessment of an old AMIM because their condition has worsened',
          'People whose old AMIM is expiring and who need renovação'
        ] },
        { kind: 'warning', text: 'A private doctor can prepare a relatório médico and examinations, but cannot replace the junta médica. A private certificate without AMIM is usually not accepted by Finanças for tax benefits.' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents: what to gather before applying',
      content: [
        { kind: 'paragraph', text: 'The main mistake is to arrive with only a diagnosis. The junta médica assesses functional limitations according to the tables, so you need recent, detailed and, where necessary, translated medical documents.' },
        { kind: 'checklist', items: [
          'Documento de identificação: residence permit, Cartão de Cidadão or passport',
          'Número de utente SNS',
          'NIF',
          'Proof of address in the area of your Unidade de Saúde Pública',
          'Requerimento for AMIM — the form is usually provided by the Unidade de Saúde Pública',
          'Relatório médico from the treating doctor with the diagnosis, medical history and current limitations',
          'Examination results: MRI/CT, tests, hospital discharge summaries, audiograms, ophthalmology, psychiatric reports, etc.',
          'List of medicines and therapies',
          'Old AMIM, if this is a renovação or reavaliação',
          'Documents must be understandable to Portuguese doctors; foreign reports are best translated into PT/EN, especially if they are key'
        ] },
        { kind: 'warning', text: 'If the illness is rare or the documents are from another country, ask a Portuguese specialist to prepare a brief relatório médico in Portuguese. This greatly reduces the risk that the junta médica will not take important limitations into account.' }
      ]
    },
    {
      id: 'application',
      title: 'How to apply and attend the junta médica',
      content: [
        { kind: 'substeps', items: [
          { id: 'find-unit', title: '1. Find the Unidade de Saúde Pública', content: [
            { kind: 'paragraph', text: 'Contact the Unidade de Saúde Pública/Delegado de Saúde for your place of residence. This is usually a structure within a ULS or ACES, not a normal appointment with a family doctor.' }
          ] },
          { id: 'submit-request', title: '2. Submit the requerimento', content: [
            { kind: 'paragraph', text: 'Submit the application, ID, número de utente and medical documents. Ask for confirmation of submission or a referência for payment.' }
          ] },
          { id: 'pay-fee', title: '3. Pay the fee', content: [
            { kind: 'paragraph', text: 'The basic cost of issuing AMIM is €12.50. Renovação/reavaliação usually costs €5. Recurso, if you challenge the decision, is €25.' }
          ] },
          { id: 'medical-board', title: '4. Wait for the convocatória', content: [
            { kind: 'paragraph', text: 'You will be called to the junta médica. Take the original documents and recent examinations. Sometimes the decision is made based on the documents, but it is better to be prepared for an in-person examination.' }
          ] },
          { id: 'receive-certificate', title: '5. Receive the AMIM', content: [
            { kind: 'paragraph', text: 'The certificate states the incapacidade percentage, date, validity period or a note that the condition is permanent. Check the name, NIF/ID, percentage and validity period before you leave.' }
          ] }
        ] }
      ]
    },
    {
      id: 'after-receiving',
      title: 'What to do after receiving AMIM ≥60%',
      content: [
        { kind: 'paragraph', text: 'Scan the AMIM and keep the original. For most benefits a copy is enough, but authorities may request the original or a certified copy.' },
        { kind: 'checklist', items: [
          'Finanças: update your cadastro/IRS data so the tax authority takes deficiência ≥60% into account',
          'IRS: check the Modelo 3 return — the status must be reflected correctly in the year to which the certificate applies',
          'Car: before buying, check the ISV, IVA and IUC conditions with Autoridade Tributária/Alfândega and IMT, otherwise you may lose the benefit',
          'Work: tell your employer only if you need adaptations, quotas or tax/social consequences',
          'Segurança Social: check whether prestação social para a inclusão or other measures are available to you',
          'Municipal benefits: ask the Câmara Municipal/Junta de Freguesia about transport, parking, housing, sport',
          'SNS: keep all new medical reports for future reassessment',
          'If the AMIM is temporary, set a reminder 6 months before it expires'
        ] },
        { kind: 'warning', text: 'For IRS, the AMIM validity date matters. If the certificate is issued later but confirms the condition from an earlier date, the tax consequences may depend on the wording and the position of Finanças. If thousands of euros are involved, it is worth speaking to a contabilista.' }
      ]
    },
    {
      id: 'appeal-renewal',
      title: 'If the percentage is low, you are refused, or the period is expiring',
      content: [
        { kind: 'paragraph', text: 'If the junta médica sets a percentage lower than expected, you can submit a recurso. Usually a strong medical package is needed: a specialist report, functional tests, new examinations, and a description of limitations in daily life and work.' },
        { kind: 'checklist', items: [
          'Immediately ask for a copy of the decision and clarify the deadline for recurso',
          'Check which diagnoses and limitations were not taken into account',
          'Obtain a relatório médico with a direct description of functional loss, not just the diagnosis',
          'Attach recent examinations and discharge summaries',
          'Pay the recurso fee — €25',
          'Apply for renovação in advance, especially if IRS or car benefits depend on the AMIM',
          'If the condition worsens, you can request reavaliação before the end of the validity period'
        ] },
        { kind: 'warning', text: 'Do not assume that foreign disability status will automatically be converted into Portuguese 60%. Portugal applies its own medical tables and junta médica procedure.' }
      ]
    }
  ],
  costs: [
    { label: 'Initial issue of AMIM', amountEUR: 12.50, note: 'Fee for the junta médica/issue of the atestado; paid on application or according to the Unidade de Saúde Pública instructions.' },
    { label: 'Renovação or reavaliação', amountEUR: 5, note: 'Reassessment/renewal if the period has expired or the condition has changed.' },
    { label: 'Recurso', amountEUR: 25, note: 'Challenging the junta médica decision; prepare new or stronger medical evidence.' }
  ],
  sources: [
    {
      title: 'SNS 24: Atestado Médico de Incapacidade Multiuso',
      url: 'https://www.sns24.gov.pt/servico/atestado-multiuso/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'ERS: FAQ on obtaining AMIM',
      url: 'https://www.ers.pt/pt/utentes/perguntas-frequentes/faq/obtencao-de-atestado-medico-de-incapacidade-multiuso-amim/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 202/96: incapacidade assessment regime for pessoas com deficiência',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/202-1996-175469',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 352/2007: Tabela Nacional de Incapacidades',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/352-2007-629069',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 180
}
