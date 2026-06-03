export default {
  editorialVoice: 'hackportugal',
  id: 'om-enfermeiros-foreign',
  categoryId: 'work_business',
  title: 'Ordem dos Enfermeiros: how a foreign nurse can work legally in Portugal',
  tldr: 'Nursing in Portugal is a regulated profession: a diploma and a residence permit alone are not enough. The typical route for an overseas diploma in 2026: obtain Reconhecimento Específico of the nursing diploma at a Portuguese public higher education institution under DL 66/2018, prove Portuguese at least at C1 level, gather the certificates and submit inscrição to the Ordem dos Enfermeiros via Balcão Único. Without active OE registration, you cannot work as an enfermeiro/enfermeira.',
  tags: ['nursing', 'oe', 'diploma', 'work'],
  estimatedReadMinutes: 6,
  steps: [
    {
      id: 'why-oe',
      title: 'Why you need the Ordem dos Enfermeiros',
      content: [
        { kind: 'paragraph', text: 'Ordem dos Enfermeiros (OE) is the professional nursing body.\n\nIn Portugal, enfermeiro/enfermeira is a regulated profession: an employer in the SNS, a private clinic, a care home or an agência de cuidados can hire you specifically as a nurse only if you have an active inscrição with the OE.' },
        { kind: 'paragraph', text: 'A residence permit, NIF, NISS and an employment contract cover the immigration and tax side, but they do not give you the right to use the professional title “enfermeiro”. For that, you need a cédula profissional / inscrição na Ordem number.' },
        { kind: 'warning', text: 'Do not confuse work as a “cuidador”, “auxiliar de ação médica” or “assistente operacional” with working as a nurse. These are different roles and are usually paid less. Performing enfermeiro acts without OE registration can create problems both for you and for the employer.' }
      ]
    },
    {
      id: 'check-path',
      title: 'Identify your route: EU or non-EU',
      content: [
        { kind: 'paragraph', text: 'The OE looks not at your passport, but at the origin of your qualification: where you obtained your nursing diploma and whether you have the right to practise in the issuing country. The most common route for diplomas from Ukraine, the Russian Federation, Belarus, Brazil and other countries outside the automatic EU schemes is academic reconhecimento in Portugal, then inscrição with the OE.' },
        { kind: 'checklist', items: [
          'Diploma from Portugal: after conclusão do curso, you submit inscrição to the OE directly.',
          'Diploma from the EU/EEA/Switzerland: a professional recognition procedure under EU rules may be possible; the OE will still check the documents and the right to practise.',
          'Diploma from a third country: Reconhecimento Específico at a Portuguese public higher education institution under Decreto-Lei 66/2018 is usually required.',
          'If you have already worked as a nurse abroad: request a certificate of good standing / declaração de não sanção in advance from your professional body or regulator.',
          'If the country has no nursing body: request a document from the competent state health authority/regulator stating there is no prohibition/sanction; an employer letter can only be a supporting document, and you should confirm its acceptability with the OE.',
          'All foreign documents must be legalised: Hague Apostille or consular legalisation if the country is not part of the Hague Convention.',
          'Documents not in Portuguese, English, French or Spanish often require tradução certificada; for higher education institutions, it is better to confirm this in advance.'
        ] }
      ]
    },
    {
      id: 'specific-recognition',
      title: '1️⃣ Reconhecimento Específico of the diploma at a public higher education institution',
      content: [
        { kind: 'paragraph', text: 'Reconhecimento Específico is Portuguese recognition that your foreign diploma corresponds to a specific cycle/field of study in Portugal. For enfermagem, it is handled through public instituições de ensino superior that offer an Enfermagem course. The legal basis is Decreto-Lei 66/2018.' },
        { kind: 'paragraph', text: 'The application is not submitted to the OE, but to the chosen higher education institution.\n\nTimelines and committees vary: some institutions open application windows, while others accept applications all year round. In practice, allow 3–9 months, especially if they appoint an analysis of currículo, interview, exames or additional unidades curriculares.' },
        { kind: 'checklist', items: [
          'A higher-education nursing diploma comparable to a Portuguese Licenciatura em Enfermagem (4 years, at least ~4,600 hours, half of them clinical practice). If you only hold a secondary/vocational (college) nursing qualification, check with the institution in advance: it may not be accepted as sufficient for the enfermeiro/enfermeira title.',
          'Diploma supplement with hours, credits, subjects and grades.',
          'Course programme / syllabus: clinical practice, pharmacology, adult nursing, maternal, paediatrics, mental health, etc.',
          'Document on the duration of studies and number of clinical hours, if this is not clear from the supplement.',
          'Passport or Cartão de Cidadão / título de residência, if you already have one.',
          'CV and proof of experience — not always mandatory, but helpful during the assessment.',
          'Apostille/legalisation and certified translations, where applicable.',
          'Receipt for payment of the institution’s emolumentos.'
        ] },
        { kind: 'warning', text: 'Do not submit “just the diploma” to the OE without reconhecimento if your diploma is not Portuguese and does not fall under a separate EU professional regime. As a rule, the OE will send you back to academic recognition, and you will lose months.' }
      ]
    },
    {
      id: 'portuguese-c1',
      title: '2️⃣ Portuguese language: prepare for C1',
      content: [
        { kind: 'paragraph', text: 'For communicating with patients and doctors and completing clinical records, the OE requires command of Portuguese. Under the current Prova de Comunicação Linguística regulation (Regulamento 339/2017), the certificate must correspond to at least level C1 of the CEFR. CAPLE DAPLE and DUPLE are recognised; the OE may accept another document if it meets the procedure requirements.' },
        { kind: 'checklist', items: [
          'Plan language study in parallel with reconhecimento: waiting for the institution’s decision and only then starting C1 is almost always a waste of time.',
          'CAPLE DAPLE C1 is not held every month and places run out; check the CAPLE calendário in advance.',
          'For hospital work you need not “tourist” Portuguese, but medical communication: triagem, medicação, dor, alergias, consentimento, registos.',
          'If you studied in Portuguese, keep the institution’s certificate stating the language of instruction — it may help.',
          'If you are from Brazil, language is usually not the main barrier, but the OE may still request formal documents under the procedure.',
          'English is useful in private healthcare and the Algarve/Lisboa, but it does not replace Portuguese for the OE and the SNS.'
        ] },
        { kind: 'warning', text: 'B2 is below the OE formal minimum (C1): without passing the Prova de Comunicação Linguística, the inscrição will not be granted. If the OE accepts another document in a specific case, this exception must be confirmed in writing before applying.' }
      ]
    },
    {
      id: 'oe-registration',
      title: '3️⃣ Inscrição with the OE via Balcão Único',
      content: [
        { kind: 'paragraph', text: 'After reconhecimento and language confirmation, submit inscrição na Ordem dos Enfermeiros via Balcão Único. This is the OE online portal for applications, document upload, payment and status tracking.' },
        { kind: 'checklist', items: [
          'Create access to Balcão Único OE and select pedido de inscrição.',
          'Upload documento de identificação: passport, Cartão de Cidadão or título de residência.',
          'Provide your NIF; for work and issuing tax documents, it is effectively necessary.',
          'Attach the certificado/declaração de Reconhecimento Específico from the public higher education institution.',
          'Attach the diploma and diploma supplement, even if reconhecimento has already been obtained.',
          'Attach certificado de língua portuguesa C1 or another document that the OE accepts in your case.',
          'Attach certificado de registo criminal, if required in the current OE form.',
          'Attach certificate of good standing / declaração profissional from the country where you were registered as a nurse.',
          'Pay the OE emolumentos and wait for análise do processo.',
          'A conditional contrato/promessa de contrato for the visa can be signed before the cédula, but you may only start work and perform duties specifically as an enfermeiro/enfermeira after an active OE inscrição/cédula.'
        ] },
        { kind: 'paragraph', text: 'The timeframe depends on how complete the documents are. If the OE makes a pedido de elementos adicionais, respond quickly and in one package: incomplete replies restart the correspondence. Keep PDF receipts, emails and the processo number.' }
      ]
    },
    {
      id: 'employment-reality',
      title: 'After registration: work, contract and status',
      content: [
        { kind: 'paragraph', text: 'With active inscrição in the OE, you can look for work in the SNS, hospitais privados, clínicas, lares, cuidados continuados, saúde ocupacional, home care. For an employment contract you will need NIF, NISS, a bank IBAN, an address and legal residence/work status.' },
        { kind: 'checklist', items: [
          'For employed work, the employer handles Segurança Social; NISS is needed before starting or in the first days of the process.',
          'For prestação de serviços / recibos verdes, you open atividade with Finanças and pay Segurança Social as a trabalhador independente.',
          'Check whether the contract states the title enfermeiro and the category/duties, not auxiliar.',
          'Clarify turnos, nights, weekends and subsídio de refeição before signing.',
          'For the SNS and large private groups, they may request cartão de vacinas, occupational health exam and registo criminal.',
          'If you have a student residence permit or are waiting for AIMA, check the right to work in your exact status.',
          'Keep OE quotas and your contact details in Balcão Único up to date; arrears can hinder confirmation of status to an employer.'
        ] },
        { kind: 'warning', text: 'The immigration part is separate: the OE does not issue a visa or residence permit. If you are moving from abroad to work in a Portuguese clinic, the usual routes are a D1 visa (with an employment contract or promessa de contrato) or D3 (if the position and qualification qualify as atividade altamente qualificada). The D8 visa is only for remote work for a foreign employer/clients and is not a route for a nursing job in Portugal. Since 23.10.2025, Lei 61/2025 has been in force, so “entering as a tourist and legalising later” is no longer a reliable strategy.' }
      ]
    }
  ],
  costs: [
    { label: 'Reconhecimento Específico at a public higher education institution', amountEURMin: 300, amountEURMax: 700, note: 'Indicative range for emolumentos; the exact amount depends on the institution and may change annually.' },
    { label: 'CAPLE DAPLE C1', amountEURMin: 110, amountEURMax: 140, note: 'Indicative exam fee; check the centre and CAPLE calendário for 2026.' },
    { label: 'Tradução certificada / apostille', amountEURMin: 20, amountEURMax: 80, note: 'Usually per document or page; depends on the country, language and urgency.' },
    { label: 'Inscrição and OE quotas', amountEURMin: 0, amountEURMax: 150, note: 'Check the current tabela de emolumentos/quotas in Balcão Único OE before applying; amounts depend on the type of pedido.' }
  ],
  sources: [
    {
      title: 'Ordem dos Enfermeiros — general guidance for registration',
      url: 'https://www.ordemenfermeiros.pt/a-ordem/inscreva-se/orienta%C3%A7%C3%B5es-gerais-para-inscri%C3%A7%C3%A3o-na-ordem-dos-enfermeiros/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Ordem dos Enfermeiros — Normas para implementação de Prova de Comunicação Linguística (C1 level)',
      url: 'https://www.ordemenfermeiros.pt/a-ordem/inscreva-se/normas-para-implementacao-de-prova-de-comunicacao-linguistica/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-05-31'
    },
    {
      title: 'Ordem dos Enfermeiros — Balcão Único',
      url: 'https://balcaounico.ordemenfermeiros.pt/',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'DGES — recognition of foreign degrees and diplomas',
      url: 'https://www.dges.gov.pt/pt/pagina/reconhecimento',
      kind: 'official',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    },
    {
      title: 'Decreto-Lei 66/2018 — legal regime for the recognition of foreign academic degrees and diplomas',
      url: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/66-2018-116068879',
      kind: 'law',
      language: 'pt',
      lastRetrieved: '2026-04-28'
    }
  ],
  lastVerified: '2026-05-31',
  verifyIntervalDays: 90
}
